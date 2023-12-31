import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import ALink from "./ALink";
import Sharpimage  from './Sharpimage';
function Footer () {

    

    let slug1='';
    let slug2='';

    if(useRouter().query.slug)
    {
        const slug = useRouter().query.slug;
       // console.log("slug", slug)
         slug1 = slug[0];
         slug2 = slug[1];
    }
    const [logoimg, setlogoimg] = useState('');
    useEffect(() => {
        
       
        const getitemlist = async () => {
           
            const response1 = await fetch('https://www.laabamone.com/LingaChemicals/api.php?eventtype=allproduct_details&viewtype=listview&url=' + slug1 + '&language=' + slug2);
            const json1 = await response1.json();
           // console.log(json1,'0000');
            setlogoimg(json1[0].companyimg);
           
           
            

        }
        
        
        getitemlist();
        
    }, [slug1,slug2])
    return (
        <footer className="footer">
            <div className="container">
               {/*} <div className="footer-top top-border d-flex align-items-center justify-content-between flex-wrap">
                    <div className="footer-left widget-newsletter d-md-flex align-items-center">
                        <div className="widget-newsletter-info">
                            <h5 className="widget-newsletter-title text-uppercase m-b-1">subscribe newsletter</h5>
                            <p className="widget-newsletter-content mb-0">Get all the latest information on Events, Sales
                                and Offers.</p>
                        </div>
                        <form action="#">
                            <div className="footer-submit-wrapper d-flex">
                                <input type="email" className="form-control" placeholder="Email address..." size="40"
                                    required />
                                <button type="submit" className="btn btn-dark btn-sm">Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <div className="footer-right">
                        <div className="social-icons">
                            <ALink href="#" className="social-icon social-facebook icon-facebook" ></ALink>
                            <ALink href="#" className="social-icon social-twitter icon-twitter" ></ALink>
                            <ALink href="#" className="social-icon social-instagram icon-instagram"></ALink>
                        </div>
                    </div>
                </div>*/}

                <div className="footer-middle">
                    <div className="row">
                        <div className="col-lg-6 col-xl-6">
                            <div className="widget">
                               {/*} <h4 className="widget-title">Company Info</h4>*/}

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="contact-widget">
                                        {logoimg !='' && 
                                        <Sharpimage a1={logoimg} a2="server" a3="100" a4="100" a5="footer" /> 
                                          }
                                           {/*} <img src={"/images/logo.svg"} style={{width:'70px'}} alt="Linga Logo"/>*/}
                                            <br/>
                                            <h5>Linga Chemicals</h5>
                                            
                                            <p style={{color:'#777',fontSize:'12px'}}>The  MICRONOL  Logo  & LINGA CHEMICALS  are Registered Trade Marks  of LINGA CHEMICALS, MADURAI</p>
                                           <p style={{color:'#fe8340',fontSize:'12px'}}> 3, B-1 Police Station Road,<br/> East Masi Street, Madurai,<br/> Tamil Nadu - 625001.<br/> INDIA.</p>
                                        </div>
                                    </div>

                                    {/*<div className="col-sm-6 pl-xl-0">
                                        <div className="contact-widget">
                                            <h4 className="widget-title">PHONE:</h4>
                                            <ALink href="#">(123) 456-7890</ALink>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="contact-widget email">
                                            <h4 className="widget-title">EMAIL:</h4>
                                            <ALink href="mailto:mail@example.com">mail@example.com</ALink>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 pl-xl-0">
                                        <div className="contact-widget">
                                            <h4 className="widget-title">WORKING DAYS/HOURS:</h4>
                                            <ALink href="#">Mon - Sun / 9:00 AM - 8:00 PM</ALink>
                                        </div>
                                    </div>*/}
                                </div>
                            </div>
                        </div>
                       {/*} <div className="col-sm-6 col-lg-3 col-xl-4">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>
                                <div className="links link-parts row">
                                    <ul className="link-part col-xl-4 mb-0">
                                        <li><ALink href="/pages/about-us">About Us</ALink></li>
                                        <li><ALink href="/pages/contact-us">Contact Us</ALink></li>
                                        <li><ALink href="/pages/account">My Account</ALink></li>
                                    </ul>
                                    <ul className="link-part col-xl-8">
                                        <li className="pl-xl-2 ml-xl-1"><ALink href="#">Orders History</ALink></li>
                                        <li className="pl-xl-2 ml-xl-1"><ALink href="#">Advanced search</ALink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 col-xl-4">
                            <div className="widget">
                                <h4 className="widget-title">Main Features</h4>
                                <div className="links link-parts row">
                                    <ul className="link-part col-xl-6 mb-0">
                                        <li><ALink href="#">Super Fast React Template</ALink></li>
                                        <li><ALink href="#">1st Fully working Ajax Theme</ALink></li>
                                        <li><ALink href="#">33 Unique Shop Layouts</ALink></li>
                                    </ul>
                                    <ul className="link-part col-xl-6 pl-xl-2">
                                        <li><ALink href="#">Powerful Admin Panel</ALink></li>
                                        <li><ALink href="#">Mobile &amp; Retina Optimized</ALink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>*/}
                    </div>
                </div>

                <div className="footer-bottom d-sm-flex align-items-center">
                    <div className="footer-left">
                        <span className="footer-copyright">LINGA CHEMICALS. © 2023. All Rights Reserved</span>
                    </div>

                  {/*}  <div className="footer-right ml-auto mt-1 mt-sm-0">
                        <div className="payment-icons">
                            <span className="payment-icon visa" style={ { backgroundImage: `url("images/payments/payment-visa.svg")` } }></span>
                            <span className="payment-icon paypal" style={ { backgroundImage: `url("images/payments/payment-paypal.svg")` } }></span>
                            <span className="payment-icon stripe" style={ { backgroundImage: `url("images/payments/payment-stripe.png")` } }></span>
                            <span className="payment-icon verisign" style={ { backgroundImage: `url("images/payments/payment-verisign.svg")` } }></span>
                        </div>
                    </div>*/}
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );