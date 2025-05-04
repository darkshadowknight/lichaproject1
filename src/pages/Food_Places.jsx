import React from 'react'
import Header_main from '../Components/Header'
import Header_main_Phone from '../Components/Header_main_Phone'
import Food_Places_Main from '../Components/Food_Places_Main'
import Food_Places_Phone from '../Components/Food_Places_Phone'

const Food_Places = () => {
  return (
    <div className="h-screen w-screen p-0 m-0 font-secondary overflow-hidden select-none bg-gray-900">
      <div className="absolute w-full h-full overflow-hidden grid grid-rows-[auto_auto]">
        {/* Header Content */}
        <div className=' w-full h-full hidden xl:grid grid-rows-[180px]'>
          <Header_main />
        </div>
        <div className=' w-full h-full overflow-hidden xl:hidden grid grid-rows-[130px]'>
          <Header_main_Phone />
        </div>
        {/* Main Content */}
        <div className='w-full h-full overflow-hidden hidden xl:grid grid-rows-[auto]'>
          <Food_Places_Main/>
        </div>
        <div className='w-full h-full overflow-hidden xl:hidden grid grid-rows-[auto]'>
          <Food_Places_Phone/>
        </div>
      </div>
    </div>
  )
}

export default Food_Places