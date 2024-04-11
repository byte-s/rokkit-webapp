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
                    {/* <Script id="metrika-counter" strategy="afterInteractive">
                        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                        m[i].l=1*new Date();
                        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                
                        ym(96996731, "init", {
                                defer: true,
                                clickmap:true,
                                trackLinks:true,
                                accurateTrackBounce:true,
                                webvisor:true
                        });`
                        }
                    </Script> */}
                </body>
            </html>
        );
    }
}

export default MyDocument;