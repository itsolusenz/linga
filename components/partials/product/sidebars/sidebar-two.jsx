import React, { useEffect } from 'react';
import StickyBox from 'react-sticky-box';
import { useQuery } from '@apollo/react-hooks';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Aollo Server and Query
import withApollo from '../../../../server/apollo';
import { GET_SHOP_SIDEBAR_DATA } from '../../../../server/queries';

// Import Custom Component
import ProductThree from '../../../features/products/product-three';
import OwlCarousel from '../../../features/owl-carousel';

// Import Settings
import { widgetFeaturedProductSlider } from '../../../../utils/data/slider';

function ProductSidebarTwo(props) {
    const { adClass = "", product } = props;
   // const { data, loading, error } = useQuery(GET_SHOP_SIDEBAR_DATA, { variables: { demo: 4, featured: true } });
//console.log(product,'product');
//alert();
const loading =false;
const data =[{
    "categories": [
        {
            "name": "Accessories",
            "slug": "accessories-1",
            "parent": null,
            "count": 9,
            "__typename": "ProductCategoryResponse"
        },
        {
            "name": "Bags",
            "slug": "bags-1",
            "parent": "Accessories",
            "count": 4,
            "__typename": "ProductCategoryResponse"
        },
        {
            "name": "Electronics",
            "slug": "electronics",
            "parent": null,
            "count": 8,
            "__typename": "ProductCategoryResponse"
        },
        {
            "name": "Fashion",
            "slug": "fashion",
            "parent": null,
            "count": 11,
            "__typename": "ProductCategoryResponse"
        },
        {
            "name": "Headphone",
            "slug": "headphone-3",
            "parent": "Electronics",
            "count": 3,
            "__typename": "ProductCategoryResponse"
        },
        {
            "name": "Shoes",
            "slug": "shoes-3",
            "parent": "Fashion",
            "count": 4,
            "__typename": "ProductCategoryResponse"
        },
        {
            "name": "T-shirts",
            "slug": "t-shirts",
            "parent": "Fashion",
            "count": 5,
            "__typename": "ProductCategoryResponse"
        },
        {
            "name": "Toys",
            "slug": "toys-1",
            "parent": "Electronics",
            "count": 5,
            "__typename": "ProductCategoryResponse"
        },
        {
            "name": "Trousers",
            "slug": "trousers-3",
            "parent": "Fashion",
            "count": 3,
            "__typename": "ProductCategoryResponse"
        },
        {
            "name": "Watches",
            "slug": "watches-2",
            "parent": "Accessories",
            "count": 5,
            "__typename": "ProductCategoryResponse"
        }
    ],
    "featured": [
        {
            "slug": "men-cap",
            "name": "Men Cap",
            "price": [
                199,
                299
            ],
            "ratings": 5,
            "small_pictures": [
                {
                    "url": "/uploads/product_13_4_26950b012a.jpg",
                    "width": 800,
                    "height": 800,
                    "__typename": "Media"
                }
            ],
            "variants": [
                {
                    "price": 299,
                    "__typename": "Variant"
                },
                {
                    "price": 199,
                    "__typename": "Variant"
                }
            ],
            "__typename": "Product"
        },
        {
            "slug": "men-shoes",
            "name": "Men Shoes",
            "price": [
                39,
                39
            ],
            "ratings": 0,
            "small_pictures": [
                {
                    "url": "/uploads/product_3_1_19d24575e2.jpg",
                    "width": 600,
                    "height": 600,
                    "__typename": "Media"
                },
                {
                    "url": "/uploads/product_3_2_6e14bb453f.jpg",
                    "width": 600,
                    "height": 600,
                    "__typename": "Media"
                },
                {
                    "url": "/uploads/product_3_3_3220364b52.jpg",
                    "width": 600,
                    "height": 600,
                    "__typename": "Media"
                },
                {
                    "url": "/uploads/product_3_4_1894e62f2d.jpg",
                    "width": 600,
                    "height": 600,
                    "__typename": "Media"
                }
            ],
            "variants": [
                {
                    "price": null,
                    "__typename": "Variant"
                },
                {
                    "price": null,
                    "__typename": "Variant"
                },
                {
                    "price": null,
                    "__typename": "Variant"
                },
                {
                    "price": null,
                    "__typename": "Variant"
                }
            ],
            "__typename": "Product"
        },
        {
            "slug": "black-high-heeled-shoes",
            "name": "Black High heeled Shoes",
            "price": [
                69,
                69
            ],
            "ratings": 0,
            "small_pictures": [
                {
                    "url": "/uploads/product_11_1_50a9d467b0.jpg",
                    "width": 800,
                    "height": 800,
                    "__typename": "Media"
                },
                {
                    "url": "/uploads/product_11_2_2453d99c92.jpg",
                    "width": 800,
                    "height": 800,
                    "__typename": "Media"
                },
                {
                    "url": "/uploads/product_11_3_26683e2f1e.jpg",
                    "width": 800,
                    "height": 800,
                    "__typename": "Media"
                }
            ],
            "variants": [
                {
                    "price": null,
                    "__typename": "Variant"
                },
                {
                    "price": null,
                    "__typename": "Variant"
                },
                {
                    "price": null,
                    "__typename": "Variant"
                },
                {
                    "price": null,
                    "__typename": "Variant"
                },
                {
                    "price": null,
                    "__typename": "Variant"
                },
                {
                    "price": null,
                    "__typename": "Variant"
                },
                {
                    "price": null,
                    "__typename": "Variant"
                },
                {
                    "price": null,
                    "__typename": "Variant"
                }
            ],
            "__typename": "Product"
        }
    ],
    "__typename": "ShopSidebarResponse"
}];
    useEffect(() => {
        return () => {
            closeSidebar();
        }
    }, [])

    function sidebarToggle(e) {
        let body = document.querySelector('body');

        e.preventDefault();
        if (body.classList.contains('sidebar-opened')) {
            body.classList.remove('sidebar-opened');
        } else {
            body.classList.add('sidebar-opened');
        }
    }

    function closeSidebar() {
        document.querySelector('body').classList.contains('sidebar-opened') && document.querySelector('body').classList.remove('sidebar-opened');
    }

    return (
        <>
        
            <div className="sidebar-overlay" onClick={closeSidebar}></div>
            <div className="sidebar-toggle custom-sidebar-toggle" onClick={e => sidebarToggle(e)}><i className="fas fa-sliders-h"></i></div>
            <aside className={`sidebar-product col-lg-3 mobile-sidebar ${adClass}`}>
                <StickyBox className="sticky-wrapper sticky-sidebar" offsetTop={70}>
                    {
                        loading ?
                            <div className="skel-widget"></div>
                            :
                            <div className="widget widget-info">
                                <ul>
                                    <li>
                                        {/*<i className="icon-shipped"></i>*/}
                                        <img src="/images/ecofrnd.webp" style={{paddingRight:'5px'}}/>
                                        <h4>ENVIRONMENT FRIENDLY</h4>
                                    </li>
                                    <li>
                                        {/*<i className="icon-us-dollar"></i>*/}
                                        <img src="/images/30yrs.png" style={{width:'100px',paddingRight:'5px'}}/>
                                        <h4>30+ YERARS EXPERIENCE</h4>
                                    </li>
                                    <li>
                                       {/*} <i className="icon-online-support"></i>*/}
                                       <img src="/images/iso.png" style={{width:'100px',paddingRight:'5px'}}/>
                                        <h4>ISO CERTIFIED</h4>
                                    </li>
                                </ul>
                            </div>
                    }

                    {
                        loading ?
                            <div className="skel-widget"></div>
                            :
                            <div className="widget">
                                <div className="maga-sale-container custom-maga-sale-container">
                                    <figure className="mega-image">
                                        <LazyLoadImage
                                            alt="banner"
                                            src="images/sideban.jpg"
                                            threshold={500}
                                            effect="blur"
                                            width={100}
                                            height={355}
                                        />
                                    </figure>

                                   {/*} <div className="mega-content">
                                        <div className="mega-price-box">
                                            <span className="price-big">50</span>
                                            <span className="price-desc"><em>%</em>OFF</span>
                                        </div>

                                        <div className="mega-desc">
                                            <h3 className="mega-title mb-0">MEGA SALE</h3>
                                            <span className="mega-subtitle">MANY ITEM</span>
                                        </div>
                                    </div>*/}
                                </div>
                            </div>
                    }
 {product.videos.length > '0' &&
                    <div className="widget widget-featured">
                         <h3 className="widget-title mb-0">Videos</h3>
                         <div className="widget-body">
                           
                            <OwlCarousel adClass="widget-featured-products" isTheme={false} options={widgetFeaturedProductSlider}>
                                <div className="featured-col">
                               { product.videos.map((item, index) => (
                                                <ProductThree
                                                    product={item}
                                                    key={"product-three" + index}
                                                />
                                            ))}
                                </div>

                               {/*} <div className="featured-col">
                                    {data[0] && data[0].featured.map((item, index) => (
                                        <ProductThree product={item} key={`featured-${index}`} />
                                    ))}
                                </div>*/}
                            </OwlCarousel>
                            
                            

                                    </div>

                     {/*}  <div className="widget-body">
                            <OwlCarousel adClass="widget-featured-products" isTheme={false} options={widgetFeaturedProductSlider}>
                                <div className="featured-col">
                                    {
                                        loading ?
                                            [0, 1, 2].map((item, index) =>
                                                <div className="skel-product-col skel-pro mb-2" key={"product-one" + index}></div>
                                            )
                                            :
                                            data[0].featured.map((item, index) => (
                                                <ProductThree
                                                    product={item}
                                                    key={"product-three" + index}
                                                />
                                            ))
                                    }
                                </div>

                                <div className="featured-col">
                                    {data[0] && data[0].featured.map((item, index) => (
                                        <ProductThree product={item} key={`featured-${index}`} />
                                    ))}
                                </div>
                            </OwlCarousel>
                                    </div>*/}
                    </div>
}
                </StickyBox>
            </aside>
        </>
    )
}

export default withApollo({ ssr: typeof window === 'undefined' })(ProductSidebarTwo);