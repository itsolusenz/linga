import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from '../server/apollo';
//import { GET_HOME_DATA } from '../server/queries';

// Import Custom Component

//import New from "./product/default/new"
export default function Home({ adClass = '' }) {
    //function Home() {

    return (
        <>

            {/*} <main className={`skeleton-body skel-shop-products `}>
                <IntroSection />
                <section className="container" style={{ paddingTop: '120px' }}>

                   <New />

                </section>
                <section className="container">

                    <h2 className="section-title ls-n-15 text-center pt-2 m-b-4">Shop By Category</h2>

                    <CategroySection />

                </section>

                <BannerSection />

                <section className="container pb-3 mb-1">

                    <FeaturedCollection product={featured} loading={loading} />

                    <hr className="mt-3 mb-6" />

                    <FeatureBoxSection />

                </section>
            </main >

           <NewsletterModal />*/}

        </>
    )
}

//export default withApollo({ ssr: typeof window === 'undefined' })(Home);