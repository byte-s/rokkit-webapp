import Document, { DocumentContext, DocumentInitialProps, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render(): JSX.Element {
        return (
            <html lang="ru">
                <Head />    
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;