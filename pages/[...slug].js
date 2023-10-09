import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

// Import Apollo Server and Query
import withApollo from '../server/apollo';
//import { GET_PRODUCT } from '../server/queries';

// Import Custom Component
import ALink from '../components/common/ALink';
import ProductMediaOne from '../components/partials/product/media/product-media-one';
import ProductDetailOne from '../components/partials/product/details/product-detail-one';
import SingleTabOne from '../components/partials/product/tabs/single-tab-one';
import RelatedProducts from '../components/partials/product/widgets/related-products';
import ProductSidebarTwo from '../components/partials/product/sidebars/sidebar-two';
import Head from 'next/head';
export default function New(props) {
    /* const slug = useRouter().query.slug;
     console.log("slug", slug)
     const slug1 = slug[0];
     const slug2 = slug[1];
     console.log("slug1", slug1)
     console.log("slug2", slug2)*/
    const slug1 = props.param1;
    const slug2 = props.param2;
    const [Poductdetails, setPoductdetails] = useState('');
    const [relateddetails, setrelateddetails] = useState('');
    const [pageload, setpageload] = useState(true);

    useEffect(() => {

        setPoductdetails(props.productfull);
        setrelateddetails(props.relatedproductfull);
        if (props.productcount == '0') {
            window.location.href = "/404";
        }
        if (props.param1 != '') {
            setpageload(false);

        }
    }, [props, slug1, slug2])

    const loading = pageload;

    /* if (!props.param1) return (
         <div className="loading-overlay">
             <div className="bounce-loader">
                 <div className="bounce1"></div>
                 <div className="bounce2"></div>
                 <div className="bounce3"></div>
             </div>
         </div>
     );*/



    if (Poductdetails.length > '0') {


        return (
            <>
                <Head>
                    <title>{props.pagemtitle}</title>
                    <meta name="keywords" content={props.pagemkey} />
                    <meta name="description" content={props.pagemdesc} />
                </Head>

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

                            <ProductSidebarTwo loading={loading} product={Poductdetails[0]} />
                        </div>

                        <RelatedProducts
                            adClass="mb-1"
                            loading={loading}
                            products={relateddetails}
                        />
                    </div>
                </main >
            </>
        );

    }
    else {
        return (
            <div className="loading-overlay">
                <div className="bounce-loader">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        );

    }
}
export async function getServerSideProps(context) {

    const slug1 = context.params.slug[0];
    const slug2 = context.params.slug[1];

    let url = 'https://www.laabamone.com/LingaChemicals/api.php?eventtype=allproduct_details&viewtype=listview&url=' + slug1 + '&language=' + slug2;
    let requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const res = await fetch(url, requestOptions);
    const resJson = await res.json();
    const pro_cnt = resJson[0].count;
    const mettitle = resJson[0].itemname;
    const medesc = resJson[0].itemdesc;
    const mekey = 'Linga Chemicals Product' + ', ' + resJson[0].itemid + ', ' + resJson[0].itemname;

    /************************************Related Proudcts ******************/
    const categoryid = resJson[0].groupid;
    let url1 = 'https://www.laabamone.com/LingaChemicals/api.php?eventtype=allproduct_details&viewtype=listview&itemgroupid=' + categoryid;
    let requestOptions1 = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const res1 = await fetch(url1, requestOptions1);
    const resJson1 = await res1.json();


    return {
        props: {
            param1: slug1,
            param2: slug2,
            pagemtitle: mettitle,
            pagemdesc: medesc,
            pagemkey: mekey,
            productcount: pro_cnt,
            productfull: resJson,
            relatedproductfull: resJson1
        },
    };
}

