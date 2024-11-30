import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='main_devision'>
                <div> <h3>IYKONS</h3>
                    <p>IYKONS 392 Ewell Road Tolworth Surrey  KT67BB</p></div>
                <div>Phone: +44 20 3598 2904<br></br>
                    Email: info@iykons.com</div>

            </div>
            <div className='main_devision'>
                <div className='colum2'>
                    <h4>Quick Links</h4>
                    <li className='list_style'>
                        <ul>Home</ul>
                        <ul>About us</ul>

                        <ul>Blog</ul>
                        <ul>Contact us</ul>
                    </li>
                </div>
            </div>
            <div className='main_devision'>
                <div className='colum3'>
                    <div>
                        <h4>Our Services</h4>
                        <li  className='list_style'>
                            <ul>Accounting & Finance</ul>
                            <ul>Digital Marketing & Consultancy</ul>
                            <ul>Business support & Consultancy</ul>
                            <ul>Technology & Innovation</ul>
                            <ul>Business & personal finance</ul>
                        </li></div>
                </div> </div>
            <div className='main_devision'>
                <h4>Our Newsletter</h4>
                <input></input><button>Sumbit</button>
            </div>



        </div>
    )
}

export default Footer
