import React from 'react'
import hero from '../assets/hero.png'
import resume from '../assets/resume.pdf';

export default function Hero() {
    return (
        <div>
            <div className='h-screen bg-[url(/src/assets/Main-bg.png)] bg-center bg-cover'>
            <div className='flex pl-48 pt-44 gap-52 '>
                <div className='gap-y-8 flex flex-col'>
                    <div>
                    <h1 className='text-white text-4xl font-semibold'>Abigail Wagura</h1>
                    <p className='text-white text-3xl mt-4'>UIUX Designer and Full Stack Developer</p>
                    </div>
                    <a
                    href={resume}
                    download="Abigail_Wagura_Resume.pdf"
                    className="px-4 py-4 w-60 font-medium bg-brand text-white rounded-lg hover:bg-brand/90 transition"
                    >
                    Download Resume
                    </a>
                </div>
                <div>
                    <img src={hero} alt="profile image" className='w-96 h-72 bg-black rounded-3xl'/>
                </div>
            </div>
            
            </div>

        </div>

    )
}