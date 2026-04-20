import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Swal from "sweetalert2";

const McqsTopics = () => {

  const navigate = useNavigate();

  const [selectedSubject, setSelectedSubject] = useState("");
  const [mcqs, setMcqs] = useState([]);
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const topics = ["java", "sql", "aptitude", "python", "cpp", "javascript"];

  // 👉 select subject
  const handleSubjectClick = (sub) => {
    setSelectedSubject(sub);
    setStarted(false);
    setMcqs([]);
    setAnswers({});
    setShowResult(false);
  };

  // 👉 start quiz
  const handleStart = async () => {

    if (!selectedSubject) {
      Swal.fire("Select Subject First");
      return;
    }

    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch(`https://api.jobslynk.in/mcqs/${selectedSubject}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });

      if (res.status === 401 || res.status === 403) {
        Swal.fire({
          title: "Login First",
          icon: "error"
        });
        navigate("/user/login");
        return;
      }

      if (!res.ok) {
        Swal.fire("Server Error", "", "error");
        return;
      }

      const data = await res.json();

      if (!Array.isArray(data) || data.length === 0) {
        Swal.fire("No Questions Available", "", "warning");
        setMcqs([]);
        setStarted(false);
      } else {
        setMcqs(data);
        setStarted(true);
      }

    } catch (err) {
      console.error(err);
      Swal.fire("Server Error or Backend Down", "", "error");
    } finally {
      setLoading(false);
    }
  };

  // 👉 select option
  const handleOptionChange = (qIndex, option) => {
    const letter = option.trim().charAt(0);

    setAnswers(prev => ({
      ...prev,
      [qIndex]: {
        letter,
        text: option
      }
    }));
  };

  // 👉 submit
  const handleSubmit = () => {
    setShowResult(true);
  };

  // 👉 restart
  const handleRestart = () => {
    setSelectedSubject("");
    setStarted(false);
    setMcqs([]);
    setAnswers({});
    setShowResult(false);
  };

  // 👉 score
  const score = mcqs.reduce((acc, q, index) => {
    const userAns = answers[index]?.letter;
    const correctAns = q.answer?.trim()?.charAt(0);
    return userAns === correctAns ? acc + 1 : acc;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      <div className="sticky top-0 shadow-md bg-white">
        <Navbar />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          🚀 Practice MCQs
        </h1>

        {/* SUBJECT */}
        {!started && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {topics.map((t) => (
              <div
                key={t}
                onClick={() => handleSubjectClick(t)}
                className={`p-6 rounded-xl text-center font-semibold text-lg cursor-pointer transition transform hover:-translate-y-2 hover:shadow-xl
                ${selectedSubject === t
                    ? "bg-blue-500 text-white"
                    : "bg-white hover:bg-blue-100"
                  }`}
              >
                {t.toUpperCase()}
              </div>
            ))}
          </div>
        )}

        {/* START BUTTON */}
        {!started && selectedSubject && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleStart}
              disabled={loading}
              className="px-8 py-3 bg-green-500 text-white text-lg rounded-full shadow-lg hover:bg-green-600 transition"
            >
              {loading ? "Starting..." : `▶ Start ${selectedSubject.toUpperCase()} Quiz`}
            </button>
          </div>
        )}

        {/* QUIZ */}
        {started && mcqs.length > 0 && (
          <div className="mt-8">

            <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
              {selectedSubject.toUpperCase()} Quiz
            </h2>

            {mcqs.map((q, index) => (
              <div key={index} className="bg-white shadow-lg rounded-xl p-6 mb-6 border">

                <p className="font-semibold text-lg mb-3">
                  {index + 1}. {q.question}
                </p>

                {(q.options || "").split("|").map((opt, i) => {
                  const optionText = opt.trim();
                  const letter = optionText.charAt(0);

                  let style = "";

                  if (showResult) {
                    if (letter === q.answer?.trim()?.charAt(0)) {
                      style = "bg-green-100 border-green-500";
                    } else if (letter === answers[index]?.letter) {
                      style = "bg-red-100 border-red-500";
                    }
                  }

                  return (
                    <div
                      key={i}
                      onClick={() => !showResult && handleOptionChange(index, optionText)}
                      className={`p-4 border rounded-lg mb-2 cursor-pointer transition hover:bg-blue-100 ${style}
                      ${answers[index]?.letter === letter ? "bg-blue-200 border-blue-500" : ""}`}
                    >
                      {optionText}
                    </div>
                  );
                })}

                {/* RESULT */}
                {showResult && (
                  <div className="mt-3">
                    {answers[index]?.letter === q.answer?.trim()?.charAt(0) ? (
                      <p className="text-green-600 font-semibold">✅ Correct</p>
                    ) : (
                      <>
                        <p className="text-red-600">
                          ❌ Your Answer: {answers[index]?.text || "Not Answered"}
                        </p>
                        <p className="text-green-600">
                          ✅ Correct Answer: {q.answer}
                        </p>
                      </>
                    )}
                  </div>
                )}

              </div>
            ))}

            {/* SUBMIT */}
            {!showResult && (
              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-blue-500 text-white rounded-full"
                >
                  Submit Quiz
                </button>
              </div>
            )}

            {/* FINAL RESULT */}
            {showResult && (
              <div className="mt-8 text-center bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-600">
                  🎯 Score: {score} / {mcqs.length}
                </h3>

                <div className="mt-4 flex justify-center gap-4">
                  <button
                    className="bg-orange-500 px-6 py-2 rounded text-white"
                    onClick={() => navigate(-1)}
                  >
                    Back
                  </button>

                  <button
                    className="bg-blue-500 px-6 py-2 rounded text-white"
                    onClick={handleRestart}
                  >
                    Restart
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

export default McqsTopics;