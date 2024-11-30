import React from 'react'
import myimage from '../../Aecss/aa.jpg'
import './Welcome.css'

export const Welcome = () => {
  return (
    <div>
        <div className='welcomemain'>

        <div className='texcontant'>
            <h1>Welcome to IYKONS</h1>
            <p>IYKONS offers complete financial, IT, and business support solutions for companies and individuals across three continents.</p>
            <p>Our excellent team of specialists can help you and your business with your financial, IT, and business support needs. Our mission is to meet the needs of SMEs under one roof. We relish the challenges of finding the best solutions for you, and we thrive on making our clients happy.</p>
            <p>To find out more about our services, please do not hesitate to contact us online or at your nearest local office.</p>
            <ul>
                <p>We are based in</p>
                <li>Chessington, Greater London, United Kingdom</li>
                <li>Chennai, Tamil Nadu, India</li>
                <li>Sydney, Australia</li>
                <li>Vavuniya, SriLanka</li>
            </ul>
            <p>IYKONS is an ACCA-accredited chartered accountancy firm. We undertake all aspects of Accountancy and Tax work.</p>
        </div>

        <div className='imagecontain'>
            <img src={myimage} alt="dfg" className='imagetag' />
        </div>

        </div>
    </div>
  )
}
