import React from 'react'
import './Footer.css'
import tk from '../../Assets/tumblr.png';
import fb from  '../../Assets/facebook.png'
import instagrame from '../../Assets/instagram.png';
 import twitter from '../../Assets/twitter.png';
import linkIn from '../../Assets/linkedin.png';

const Footer = () => {
    return (
        <div className='main_footer_container'>
            <div className='footer_container'>
                <div className='main_devision'>
                    <h3>IYKONS</h3>
                    <p>
                        IYKONS 392 Ewell Road Tolworth Surrey  KT67BB
                        <br></br><br></br>
                        <strong> Phone:</strong> +44 20 3598 2904<br></br>
                        <strong> Email: </strong>info@iykons.com<br></br></p>

                        <div className='sb_footer-links_div'>
                            <div className='socialmedia'>
                            <a rel="noreferrer" target="_blank" href="https://www.tiktok.com/@iykons.uk?lang=en" class="twitter"> <p>   <img src={fb} alt=''/></p></a> 
                            <a rel="noreferrer" target="_blank" href="https://www.tiktok.com/@iykons.uk?lang=en" class="twitter"><p>   <img src={linkIn} alt=''/></p></a>
                            <a rel="noreferrer" target="_blank" href="https://www.tiktok.com/@iykons.uk?lang=en" class="twitter"><p>   <img src={twitter} alt=''/></p></a>
                            <a rel="noreferrer" target="_blank" href="https://www.tiktok.com/@iykons.uk?lang=en" class="twitter"><p>    <img src={instagrame} alt=''/></p></a>
                            <a rel="noreferrer" target="_blank" href="https://www.tiktok.com/@iykons.uk?lang=en" class="twitter"><p>   <img src={tk} alt=''/></p></a>
                            </div>
                            
                        
                        </div>


                </div>
                <div className='main_devision'>
                    
                    <div className='colum2'>
                        
                        <h4>Quick Links</h4>
                        <li className='list_style'>
                            <ul><a href='/'>Home</a></ul>
                            <ul><a href='/about us'>  About us</a></ul>
                            <ul><a href='/blog'>Blog</a></ul>
                            <ul><a href='/contact'>Contact us</a></ul>
                        </li>
                        



                    </div>
                </div>
                <div className='main_devision'>
                    <div className='colum3'>
                        <div>
                            <h4>Our Services</h4>
                            <li className='list_style'>
                                <a href='/'><p>Accounting & Finance</p></a>
                                <a href='/'><p>Digital Marketing & Consultancy</p></a>
                                <a href='/'><p>Business support & Consultancy</p></a>
                                <a href='/'><p>Technology & Innovation</p></a>
                                <a href='/'><p>Business & personal finance</p></a>
                            </li></div>
                    </div> </div>
                <div className='main_devision'>
                    <h4>Our Newsletter</h4>
                    <form action method='post'>
                        <input type='email' name='email'></input>
                        <input type='submit'></input>
                    </form>
                </div> </div>

            <div className='sub_footer'>
                © Copyright 2024 
                <strong><span>
                           <a href='/'> IYKONS<br></br>
                            Privacy Policy</a></span></strong>
            </div>

            
        </div>
    )
}

export default Footer
