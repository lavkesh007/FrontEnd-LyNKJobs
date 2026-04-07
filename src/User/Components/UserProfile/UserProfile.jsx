import React from 'react'
import LeftSide from './LeftSide'
import { Outlet } from 'react-router-dom'

const UserProfile = () => {
  return (
    <div className='min-h-screen bg-[url("https://images.openai.com/static-rsc-4/GCycQrb5LzQxf_1hus6yamqIugsWMIb8CDLFk4z-_DHdlwuyRV1P5A8A_sETr-ySehnFV2Mt0uQDDA7l2_jgSylBRf6zCIMq3ph62b-ezeKIYaVcDMrk62oPSIOA04-mNxcyvzkAkMh3E2QGiAq70iXMb1u9RF8nnv3E9rk5mtXYFuh1R8vH4GNRjnh1VwVP?purpose=fullsize")] bg-cover bg-center'>

      <div className='flex flex-col md:flex-row min-h-screen'>

        {/* Sidebar */}
        <div className='w-full md:w-1/5 md:sticky md:top-0 md:h-screen'>
          <LeftSide/>
        </div>

        {/* Content */}
        <div className='w-full md:w-4/5 p-4'>
          <Outlet/>
        </div>

      </div>

    </div>
  )
}

export default UserProfile