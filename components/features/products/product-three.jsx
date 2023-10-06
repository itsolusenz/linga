import React, { useEffect, useState, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

export default function ProductThree ( props ) {
    const { adClass = "", link = "default", product } = props;
    const videoRef = useRef(null);
    const handlePlay = () => {
        videoRef.current.play();
      };
    
      const handlePause = () => {
        videoRef.current.pause();
      };
    return (
        <div className={ `product-default media-with-lazy left-details product-widget ${ adClass }` }>
          
          
          <div style={{border:'1px solid #e0d5d5',backgroundColor:'#f1f1f1',borderRadius:'2px',padding:'10px',width:'100%'}}>
          <div>
             <ALink href={`${product.url}`} >
         
          <div dangerouslySetInnerHTML={{ __html: product.url}}/> 
         
         
           

         </ALink> 
         </div>
         <h3 className="product-title">
                    <ALink href={ "" }>&nbsp;<b>{ product.title }</b></ALink>
                </h3>
         <div className="product-details">
        
       </div> 
         </div>
         
         {/*} <h3 className="product-title">
                    <ALink href={ "" }>{ product.title }</ALink>
                </h3>
           <figure>
          
                   <div className="lazy-overlay"></div>
                    
                  
                    
                   
                    
                
            </figure>*/}

           {/*} <div className="product-details">
               {} <h3 className="product-title">
                    <ALink href={ "" }>{ product.title }</ALink>
                </h3>

                <div className="ratings-container">
                    
                </div>

                <div className="price-box">
                    
                </div>
            </div>*/}
        </div>
    )
}