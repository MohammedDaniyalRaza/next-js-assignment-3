import Link from 'next/link'
import React from 'react'

const about = () => {
  return (
    <div>
        <div className="container1home">
        <h1 className='h1Home'>About Me</h1>
        <p className='pHome'>My Name Is Daiyal Raza, I Am A Junior Web Developer. I Have Learnt HTML, CSS, Java Script And Type Script. <br /> I Can Make Basic And Intermidiate Website By Usig This Languages. I Have Keen interest In Web developmet and also i have keen interest in software engenering and some advance technologies, Right Now I'm Learning Next JS From <strong>GIAIC</strong> Program. And I'm A Student Of Class 10 At Dehli Govt Boys Secondry School And I'm Also Student At Governor House</p>
        </div>

        <div className="container2home aboutContainer">
        <button className='btnAbout'><Link href={"/contact"}>Contact Me</Link></button>
        </div>
    </div>
  )
}

export default about