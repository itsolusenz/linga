import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import { useRouter } from 'next/router';
import Image from "next/image";
// Import Custom Component
import ALink from "./ALink";
{/*import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";*/}
//import { Magnifier } from 'react-image-magnifiers';
import ReactImageMagnify from 'react-image-magnify';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from '@mui/material/Skeleton';

export default function Sharpimage(props) {

    const { a1, a2, a3, a4, a5 } = props;
    const [simg1, setimg1] = useState('');
    // console.log("ll", a1)
    console.log("a5sssssssss", a5)
    useEffect(() => {

        const Viewsharpimage = (a1, a2, a3, a4, a5) => {

            (async function () {
                // event.preventDefault();

                const response = await axios.get("./api/imagesharp",
                    {
                        params: {
                            "sharpimg": a1, "viewtype": a2, "width": a3, "height": a4
                        }
                    });
                const [resultnew] = await Promise.all([response.data.message])
                //console.log('sharpimage', response.data.message);

                setimg1(response.data.message);

            })();

        }
        Viewsharpimage(a1, a2, a3, a4, a5);

    }, [a1, a2, a3, a4, a5])


    {/* <MainMenu /> */ }
    if (simg1 == '') {
        return (
            <Skeleton animation="wave" width={100} height={80} />
        );
    }
    else {
        if (a5 == 'magnifier') {
            return (
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: `data:image/gif;base64,${simg1}`
                    },
                    largeImage: {
                        src: `data:image/gif;base64,${simg1}`,
                        width: 1200,
                        height: 1800
                    }
                }} />
            )
        }
        else if (a5 == 'footer' || a5 == 'header') {
            return (
                <img src={`data:image/gif;base64,${simg1}`} width={a3} height={a4} />
            );
        }
        else if (a5 == "thumbnail") {
            return (
                <LazyLoadImage
                    src={`data:image/gif;base64,${simg1}`} priority={false} alt="Thumbnail" width={a3} height="auto" className="d-block" />

            )
        }
        else {
            return (
                <LazyLoadImage
                    priority={false}
                    alt="product"
                    src={`data:image/gif;base64,${simg1}`}
                    width={a3} height={a4}
                    // threshold={500}
                    effect="black and white"
                    wrapperClassName="product-image-hover"
                />

            );
            {/*            <img src={`data:image/gif;base64,${simg1}`} width={a3} height={a4} alt="Image" />
                */}
        }
    }
}
