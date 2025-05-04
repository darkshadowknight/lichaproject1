import React from 'react'

const Contact_Main = () => {
  return (
    <main className='justify-items-center overflow-auto scrollbar-hidden pt-2 flex flex-col gap-20'>
      <div className='flex flex-col gap-[100px] w-full items-center pb-30 '>
        <div class="justify-items-center text-white">
          <p class="text-5xl p-10">CONTACT US</p>
          <div class="flex flex-row text-white gap-10">
            <div class="bg-gray-400 h-[100px] w-[300px] flex flex-col items-center justify-center">
              <div class="justify-items-center">
                <p>8535-0131</p>
                <p>RESCUE 131 (24/7)</p>
              </div>
            </div>
            <div class="bg-gray-400 h-[100px] w-[300px] flex flex-col items-center justify-center">
              <div class="justify-items-center">
                <p>8696-2617</p>
                <p>Public Information Office</p>
              </div>
            </div>
          </div>
          <div class="pt-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.3323193166216!2d121.11209407587403!3d14.58013017757593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c79ab08bc147%3A0x1964c89db5cf60da!2sCainta%20Municipal%20Hall!5e0!3m2!1sen!2sph!4v1744957496047!5m2!1sen!2sph"
              width="1500"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact_Main