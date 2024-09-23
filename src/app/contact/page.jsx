import Link from 'next/link'
import React from 'react'

const contact = () => {
  return (
    <div>
        <div className='container1home'>
            <h1 className='h1Home'>Contact Me</h1>
            <p className='pHome'>If You Want To Make Any Website So Kindly Contact With Me On These Social Midia Platform's</p>
            <ul>
                <li className='liContact'><a href="https://www.linkedin.com/in/mohammed-daniyal-raza-aa26b22ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYNA7rfLSQTGxtXXA4x9j2Q%3D%3D" target='_blank'>Linkdin Profile</a></li>
                <li className='liContact'><a href="https://www.instagram.com/25_09_unknown/?next=%2F" target='_blank'>Instagram Profile</a></li>
                <li className='liContact'><a href="https://github.com/MohammedDaniyalRaza" target='_blank'>Github</a></li>
            </ul>
            <p className='pHome'>By Any Chance If I Can't Reply Your Message So Feel Free To Email Me</p>
            <ul>
                <li className='liContact'><a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='_blank'>qadrimohammeddaniyalraza@gmail.com</a></li>
            </ul>
        </div>

        <div className="container2home">
            <button className="btn btnAbout"><Link href={"./"}>Home</Link></button>
        </div>
    </div>
  )
}

export default contact