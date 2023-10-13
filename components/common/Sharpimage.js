import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import { useRouter } from 'next/router';

// Import Custom Component
import ALink from "./ALink";
{/*import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";*/}
export default function Sharpimage(props) {

    const { a1, a2, a3, a4, a5 } = props;
    const [simg1, setimg1] = useState('');
    // console.log("ll", a1)
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
    return (
        <img src={`data:image/gif;base64,${simg1}`} alt="Image" />

    )
}
