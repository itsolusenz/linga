import { useEffect } from "react";
import Helmet from "react-helmet";
import { Provider, useStore } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { wrapper } from "../store/index.js";
import Layout from '../components/layout';

import { actions as DemoAction } from "../store/demo";

import "../public/sass/style.scss";

const App = ({ Component, pageProps }) => {
    const store = useStore();

    useEffect(() => {
        if (store.getState().demo.current !== 3) {
            store.dispatch(DemoAction.refreshStore(3));
        }
    }, [])

    return (
        <Provider store={store}>
            <PersistGate
                persistor={store.__persistor}
                loading={<div className="loading-overlay">
                    <div className="bounce-loader">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>}>
                <Helmet>
                    <meta charSet="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                  {/*}  <title>Linga Chemicals</title>
                    <meta name="keywords" content="linga chemicals,Micronutrient Fertilizers,The Largest Manufacturer of  Micronutrient Fertilizers  in  South India" />
                    <meta name="description" content="Linga Chemicals is on a global mission to support the back bone of India; Agriculture. Our world class and environmental friendly products help the farmers in producing greater yield." />
    <meta name="author" content="linga chemicals" />*/}
                </Helmet>

                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PersistGate>
        </Provider >
    )
};

App.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
};

export default wrapper.withRedux(App);
