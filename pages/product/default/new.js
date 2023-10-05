import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

// Import Apollo Server and Query
import withApollo from '../../../server/apollo';
import { GET_PRODUCT } from '../../../server/queries';

// Import Custom Component
import ALink from '../../../components/common/ALink';
import ProductMediaOne from '../../../components/partials/product/media/product-media-one';
import ProductDetailOne from '../../../components/partials/product/details/product-detail-one';
import SingleTabOne from '../../../components/partials/product/tabs/single-tab-one';
import RelatedProducts from '../../../components/partials/product/widgets/related-products';
import ProductSidebarTwo from '../../../components/partials/product/sidebars/sidebar-two';

export default function New() {
    const slug = useRouter().query;
    console.log("slug", slug)
    const [Poductdetails, setPoductdetails] = useState('');
    useEffect(() => {
        const getPoductdetails = async (a) => {
            const id = localStorage.getItem('LOGIN_COMP_ID');
            const response = await fetch('https://www.laabamone.com/LingaChemicals/api.php?eventtype=allproduct_details&viewtype=listview&id=' + a);
            const json = await response.json();
            console.log(json);
            setPoductdetails(json);
            if (json[0].count == '0') {
                window.location.href = "/404";
            }


        }


        getPoductdetails('16');

    }, [])
    /* if (!useRouter().query.slug) return (
         <div className="loading-overlay">
             <div className="bounce-loader">
                 <div className="bounce1"></div>
                 <div className="bounce2"></div>
                 <div className="bounce3"></div>
             </div>
         </div>
     );*/
    //const slug = useRouter().query.slug;
    // const slug = "sports-watch";
    //const { data, loading, error } = useQuery(GET_PRODUCT, { variables: { slug } });
    const product = [{
        "id": 12,
        "slug": "sports-watch",
        "name": "Sports Watch",
        "price": [
            259,
            299
        ],
        "short_description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        "until": null,
        "sku": null,
        "stock": 56,
        "ratings": 0,
        "reviews": 0,
        "sale_count": 0,
        "is_hot": true,
        "is_new": null,
        "is_sale": null,
        "is_out_of_stock": null,
        "pictures": [
            {
                "url": "/uploads/product_12_1_2c065b50a5.jpg",
                "width": 600,
                "height": 600,
                "__typename": "Media"
            },
            {
                "url": "/uploads/product_12_2_7c17eee485.jpg",
                "width": 600,
                "height": 600,
                "__typename": "Media"
            },
            {
                "url": "/uploads/product_12_3_bb2019d038.jpg",
                "width": 800,
                "height": 800,
                "__typename": "Media"
            }
        ],
        "small_pictures": [
            {
                "url": "/uploads/product_12_1_2c065b50a5.jpg",
                "width": 600,
                "height": 600,
                "__typename": "Media"
            },
            {
                "url": "/uploads/product_12_2_7c17eee485.jpg",
                "width": 600,
                "height": 600,
                "__typename": "Media"
            },
            {
                "url": "/uploads/product_12_3_bb2019d038.jpg",
                "width": 800,
                "height": 800,
                "__typename": "Media"
            }
        ],
        "large_pictures": [
            {
                "url": "/uploads/product_12_1_2c065b50a5.jpg",
                "width": 600,
                "height": 600,
                "__typename": "Media"
            },
            {
                "url": "/uploads/product_12_2_7c17eee485.jpg",
                "width": 600,
                "height": 600,
                "__typename": "Media"
            },
            {
                "url": "/uploads/product_12_3_bb2019d038.jpg",
                "width": 800,
                "height": 800,
                "__typename": "Media"
            }
        ],
        "categories": [
            {
                "name": "T-shirts",
                "slug": "t-shirts",
                "__typename": "ProductCategory"
            },
            {
                "name": "Watches",
                "slug": "watches-2",
                "__typename": "ProductCategory"
            },
            {
                "name": "Boys",
                "slug": "boys-2",
                "__typename": "ProductCategory"
            },
            {
                "name": "Jewelry",
                "slug": "jewelry",
                "__typename": "ProductCategory"
            },
            {
                "name": "Men",
                "slug": "men",
                "__typename": "ProductCategory"
            }
        ],
        "tags": [
            {
                "name": "Fashion",
                "slug": "fashion",
                "__typename": "ProductTag"
            },
            {
                "name": "Clothes",
                "slug": "clothes",
                "__typename": "ProductTag"
            }
        ],
        "variants": [],
        "__typename": "Product"
    }];
    const categories = [
        {
            "name": "T-shirts",
            "slug": "t-shirts",
            "__typename": "ProductCategory"
        },
        {
            "name": "Watches",
            "slug": "watches-2",
            "__typename": "ProductCategory"
        },
        {
            "name": "Boys",
            "slug": "boys-2",
            "__typename": "ProductCategory"
        },
        {
            "name": "Jewelry",
            "slug": "jewelry",
            "__typename": "ProductCategory"
        },
        {
            "name": "Men",
            "slug": "men",
            "__typename": "ProductCategory"
        }
    ];
    //const related = data && data.product.related;
    const related = [
        {
            "name": "Glasses",
            "slug": "glasses",
            "price": [
                101,
                108
            ],
            "ratings": 0,
            "reviews": 0,
            "is_hot": null,
            "is_new": null,
            "is_out_of_stock": null,
            "until": null,
            "stock": 68,
            "pictures": [
                {
                    "url": "/uploads/product_8_1_a4d3118d3d.jpg",
                    "width": 800,
                    "height": 800,
                    "__typename": "Media"
                },
                {
                    "url": "/uploads/product_8_2_85f1783e20.jpg",
                    "width": 800,
                    "height": 800,
                    "__typename": "Media"
                },
                {
                    "url": "/uploads/product_8_3_949d24ecee.jpg",
                    "width": 800,
                    "height": 800,
                    "__typename": "Media"
                }
            ],
            "small_pictures": [
                {
                    "url": "/uploads/product_8_1_a4d3118d3d.jpg",
                    "width": 800,
                    "height": 800,
                    "__typename": "Media"
                },
                {
                    "url": "/uploads/product_8_2_85f1783e20.jpg",
                    "width": 800,
                    "height": 800,
                    "__typename": "Media"
                },
                {
                    "url": "/uploads/product_8_3_949d24ecee.jpg",
                    "width": 800,
                    "height": 800,
                    "__typename": "Media"
                }
            ],
            "categories": [
                {
                    "name": "Trousers",
                    "slug": "trousers-3",
                    "__typename": "ProductCategory"
                },
                {
                    "name": "Watches",
                    "slug": "watches-2",
                    "__typename": "ProductCategory"
                }
            ],
            "variants": [
                {
                    "price": 101,
                    "sale_price": null,
                    "__typename": "Variant"
                },
                {
                    "price": 108,
                    "sale_price": null,
                    "__typename": "Variant"
                },
                {
                    "price": 105,
                    "sale_price": null,
                    "__typename": "Variant"
                }
            ],
            "__typename": "Product"
        },
        {
            "name": "Ideapad",
            "slug": "ideapad",
            "price": [
                239,
                299
            ],
            "ratings": 5,
            "reviews": 1,
            "is_hot": null,
            "is_new": null,
            "is_out_of_stock": null,
            "until": null,
            "stock": 90,
            "pictures": [
                {
                    "url": "/uploads/product_2_1_bf307915af.jpg",
                    "width": 300,
                    "height": 300,
                    "__typename": "Media"
                },
                {
                    "url": "/uploads/product_2_2_2895d67a03.jpg",
                    "width": 300,
                    "height": 300,
                    "__typename": "Media"
                },
                {
                    "url": "/uploads/product_2_3_a89b4246c0.jpg",
                    "width": 300,
                    "height": 300,
                    "__typename": "Media"
                },
                {
                    "url": "/uploads/product_2_4_22fd767862.jpg",
                    "width": 800,
                    "height": 800,
                    "__typename": "Media"
                }
            ],
            "small_pictures": [
                {
                    "url": "/uploads/product_2_1_bf307915af.jpg",
                    "width": 300,
                    "height": 300,
                    "__typename": "Media"
                },
                {
                    "url": "/uploads/product_2_2_2895d67a03.jpg",
                    "width": 300,
                    "height": 300,
                    "__typename": "Media"
                },
                {
                    "url": "/uploads/product_2_3_a89b4246c0.jpg",
                    "width": 300,
                    "height": 300,
                    "__typename": "Media"
                },
                {
                    "url": "/uploads/product_2_4_22fd767862.jpg",
                    "width": 800,
                    "height": 800,
                    "__typename": "Media"
                }
            ],
            "categories": [
                {
                    "name": "Headphone",
                    "slug": "headphone-3",
                    "__typename": "ProductCategory"
                },
                {
                    "name": "T-shirts",
                    "slug": "t-shirts",
                    "__typename": "ProductCategory"
                }
            ],
            "variants": [],
            "__typename": "Product"
        },
        {
            "name": "Men Cap",
            "slug": "men-cap",
            "price": [
                199,
                299
            ],
            "ratings": 5,
            "reviews": 1,
            "is_hot": true,
            "is_new": null,
            "is_out_of_stock": null,
            "until": null,
            "stock": 92,
            "pictures": [
                {
                    "url": "/uploads/product_13_4_26950b012a.jpg",
                    "width": 800,
                    "height": 800,
                    "__typename": "Media"
                }
            ],
            "small_pictures": [
                {
                    "url": "/uploads/product_13_4_26950b012a.jpg",
                    "width": 800,
                    "height": 800,
                    "__typename": "Media"
                }
            ],
            "categories": [
                {
                    "name": "Bags",
                    "slug": "bags-1",
                    "__typename": "ProductCategory"
                },
                {
                    "name": "T-shirts",
                    "slug": "t-shirts",
                    "__typename": "ProductCategory"
                }
            ],
            "variants": [
                {
                    "price": 299,
                    "sale_price": null,
                    "__typename": "Variant"
                },
                {
                    "price": 199,
                    "sale_price": null,
                    "__typename": "Variant"
                }
            ],
            "__typename": "Product"
        }
    ]
    const loading = false;
    // console.log(data.product.prev, '-pre---');

    /* if (error) {
         return useRouter().push('/pages/404');
     }*/
    console.log('Poductdetails.length', Poductdetails.length)
    if (Poductdetails.length > '0') {
        return (
            <main className="main product-page">
                <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><ALink href="/">home</ALink></li>
                            <li className="breadcrumb-item"><ALink href="/shop">{Poductdetails[0] && Poductdetails[0].itemid}</ALink></li>
                            {/*} <li className="breadcrumb-item">
                            {
                                categories.map((item, index) => (
                                    <React.Fragment key={`category-${index}`}>
                                        <ALink href={{ pathname: "/shop", query: { slug: item.slug } }}>{item.name}</ALink>
                                        {index < categories.length - 1 ? ',' : ''}
                                    </React.Fragment>
                                ))
                            }
                        </li>*/}
                            <li className="breadcrumb-item active" aria-current="page">{Poductdetails[0] && Poductdetails[0].itemname}</li>

                        </ol>
                    </div>
                </nav>
                <div className={`container skeleton-body skel-shop-products ${loading ? '' : 'loaded'}`}>
                    <div className="row">
                        <div className="col-lg-9 main-content pb-2">
                            <div className={`product-single-container product-single-default`}>
                                <div className="row">

                                    <ProductMediaOne product={Poductdetails[0]} />
                                    <ProductDetailOne
                                        product={Poductdetails[0]}

                                    />
                                    {/*}  prev={product[0] && data.product.prev}
                        next={product[0] && data.product.next}*/}
                                </div>
                            </div>

                            <SingleTabOne product={Poductdetails[0]} />
                        </div>

                        <ProductSidebarTwo />
                    </div>

                    <RelatedProducts
                        adClass="mb-1"
                        loading={loading}
                        products={related}
                    />
                </div>
            </main >
        );
    }
    else {
        return (
            <main className="main product-page">
                {/* <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><ALink href="/">home</ALink></li>
                            <li className="breadcrumb-item"><ALink href="/shop">Category</ALink></li>
                            <li className="breadcrumb-item">
                            {
                                categories.map((item, index) => (
                                    <React.Fragment key={`category-${index}`}>
                                        <ALink href={{ pathname: "/shop", query: { slug: item.slug } }}>{item.name}</ALink>
                                        {index < categories.length - 1 ? ',' : ''}
                                    </React.Fragment>
                                ))
                            }
                        </li>
                <li className="breadcrumb-item active" aria-current="page">{product[0] && product[0].name}</li>

            </ol>
                    </div >
                </nav >
            <div className={`container skeleton-body skel-shop-products ${loading ? '' : 'loaded'}`}>
                <div className="row">
                    <div className="col-lg-9 main-content pb-2">
                        <div className={`product-single-container product-single-default`}>
                            <div className="row">
                                <ProductMediaOne product={product[0]} />

                                <ProductDetailOne
                                    product={product[0]}

                                />
                               
            </div>
                        </div >

            <SingleTabOne product={product[0]} />
                    </div >

            <ProductSidebarTwo />
                </div >

            <RelatedProducts
                adClass="mb-1"
                loading={loading}
                products={related}
            />
            </div > */}
            </main >
        );

    }
}

