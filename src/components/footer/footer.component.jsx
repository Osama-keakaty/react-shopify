import React from 'react'
import './footer.styles.scss'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="header">
                <h3>Get connected with us on social networks:</h3>
            </div>
            <div className="footer-content">
                <div className="footer-part">
                    <div className='footer-section'>
                        <h4>COMPANY NAME</h4>
                        <h3>Code Crafters</h3>
                    </div>
                    <div className='footer-section'>
                        <h4>PRODUCTS</h4>
                        <a href="#!"><span>MDBootstrap</span></a>
                        <a href="#!"><span>MDWordPress</span></a>
                    </div>
                </div>
                <div className="footer-part">
                    <div className='footer-section'>
                        <h4>USEFUL LINKS</h4>
                        <a href="#!"><span>Your Account</span></a>
                        <a href="#!"><span>Become an Affiliate</span></a>
                    </div>
                    <div className='footer-section'>
                        <h4>CONTACT US</h4>
                        <a href="#!"><span>New York, NY 10012, US</span></a>
                        <a href="#!"><span>info@example.com</span></a>
                    </div>
                </div>
            </div>
            <div className="footer">
                <span> © 2025 Copyright: <a href="https://github.com/Osama-keakaty/" target='_blank' rel='noreferrer'> https://github.com/Osama-keakaty/</a> </span>
            </div>
        </div>
    )
}

export default Footer