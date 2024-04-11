'use client'
 
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
 
export function YandexMetrika() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
 
useEffect(() => {
  const url = `${pathname}?${searchParams}`
  ym(96996731, 'hit', window.location.href);
}, [pathname, searchParams])
 
  return (
    <Script id="metrika-counter" strategy="afterInteractive">
                        {`
                        <script type="text/javascript" >
                        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                        m[i].l=1*new Date();
                        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                     
                        ym(96996731, "init", {
                            defer:true;
                             clickmap:true,
                             trackLinks:true,
                             accurateTrackBounce:true
                        });
                        </script>
                        <noscript><div><img src="https://mc.yandex.ru/watch/96996731" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
                     `}
                    </Script>
  )
}