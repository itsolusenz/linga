import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <base href="/" />

                    {process.env.NODE_ENV === "production" ? <title>Linga Chemicals</title> : ""}
                    <link rel="icon" href="favicon.png" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,500,600,700,800%7CPoppins:200,300,400,500,600,700,800%7COswald:300,400,600,700" defer />
                    <link rel="stylesheet" type="text/css" href="vendor/bootstrap.min.css" defer />
                    <link rel="stylesheet" type="text/css" href="vendor/fontawesome-free/css/all.min.css" defer />
                    <link rel="stylesheet" type="text/css" href="vendor/simple-line-icons/css/simple-line-icons.min.css" defer />
                </Head>
                <body>
                    <Main />
                    <script src="js/jquery.min.js"></script>
                    <NextScript />
                </body>
            </Html>
        )
    }
}