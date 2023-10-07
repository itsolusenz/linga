import React, { useEffect, useState, useRef } from 'react';

import { useRouter } from 'next/router';

// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";
export default function Header ( { adClass = '' } ) {
    const router = useRouter();
    const [languagelist, setlanguagelist] = useState([]);
    let slug1='';
    let slug2='';
    if(useRouter().query.slug)
    {
        const slug = useRouter().query.slug;
        console.log("slug", slug)
         slug1 = slug[0];
         slug2 = slug[1];
    }
    
    useEffect(() => {
       
        const getlanguagelist = async () => {
           
            const response = await fetch('https://www.laabamone.com/LingaChemicals/api.php?eventtype=language&viewtype=listview');
            const json = await response.json();
            console.log(json,'--------');
            setlanguagelist(json);
            

        }

        
        getlanguagelist();
        
    }, [])
    const Callfunc=(id,code)=>{
        
         const code1 = code;
        let res = code1.toLowerCase();

        localStorage.setItem("SITE_LANG",res);
        localStorage.setItem("SITE_LANGID",id);
        if(slug2 == res)
        {
     
        }
        else
        {
            let url = "/"+slug1+'/'+res;
            console.log('url',url);
            window.location.href=url;
            //return useRouter().push(url);
        }

        
        

    }
    function openMobileMenu ( e ) {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-active" );
        e.currentTarget.classList.toggle( "active" );
    }

    {/* <MainMenu /> */ }
    return (
        <header className={ `header ${ router.pathname === '/' ? 'header-transparent' : '' } ${ adClass }` }>
            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left">
                       {/*} <button className="mobile-menu-toggler" type="button" onClick={ openMobileMenu }>
                            <i className="fas fa-bars"></i>
    </button>*/}

                        <ALink href="/" className="logo">
                            <img src="images/logo.svg" alt="Porto Logo" width="101" height="40" />
                        </ALink>

                       {/*<MainMenu />*/}
                    </div>
                    <div className="header-right header-dropdowns ml-0 ml-sm-auto w-sm-100">
                                <div className="header-right" style={{marginRight:'10px'}}>
                                {languagelist.length>0 && 
                                <div className="header-dropdown mr-auto mr-sm-3 mr-md-0 pl-2">
                                    {slug2!='' && localStorage.getItem("SITE_LANGID")!=null && localStorage.getItem("SITE_LANGID")!=undefined ?
                                        languagelist.map((a,inc)=> 
                                            a.ShortCode == slug2.toUpperCase() &&
                                            <ALink href="#"> <img src={a.image} width={20} height={20}/>{a.ShortCode}</ALink>
                                            
                                        )
                                        :
                                        <ALink href="#"> <img src={languagelist[0].image} width={20} height={20}/>{languagelist[0].ShortCode}</ALink>

                                        }
                                    
                                        <div className="header-menu">
                                        
                                        
                                            <ul>
                                            {languagelist.map((a,inc)=>
                                            <li onClick={()=>Callfunc(a.id,a.ShortCode)}><ALink href="#"><img src={a.image} width={20} height={20}/>{a.LanguageName}</ALink>
                                            </li>
                                            )}
                                                </ul>
                                        </div>
                                </div>
                                }
                    </div>
                   {/*}  <div className="header-right">
                        
                       <SearchForm />

                        <ALink href="/pages/login" className="header-icon header-icon-user"><i className="icon-user-2"></i></ALink>

                        <ALink href="/pages/wishlist" className="header-icon header-icon-wishlist"><i className="icon-wishlist-2"></i></ALink>

    <CartMenu />
                    </div>*/}
                    </div>

                </div>
            </div>
        </header >
    )
}