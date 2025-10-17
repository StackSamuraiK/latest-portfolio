import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const poppins = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Kshitiz | FullStack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>

      <body className={`${poppins.variable} antialiased`}>
        {children}
        <SpeedInsights />
        <Analytics />
        <Script id="scroll-click-tracking" strategy="afterInteractive">
          {`
            (function() {
              let scrollTracked = {25: false, 50: false, 75: false};

              window.addEventListener('scroll', () => {
                const scrollPercent = Math.floor((window.scrollY + window.innerHeight) / document.body.scrollHeight * 100);
                
                if (scrollPercent >= 25 && !scrollTracked[25]) {
                  gtag('event', 'scroll_25', { event_category: 'Scroll Depth', value: 25 });
                  scrollTracked[25] = true;
                }
                if (scrollPercent >= 50 && !scrollTracked[50]) {
                  gtag('event', 'scroll_50', { event_category: 'Scroll Depth', value: 50 });
                  scrollTracked[50] = true;
                }
                if (scrollPercent >= 75 && !scrollTracked[75]) {
                  gtag('event', 'scroll_75', { event_category: 'Scroll Depth', value: 75 });
                  scrollTracked[75] = true;
                }
              });

              document.addEventListener('click', (e) => {
                gtag('event', 'click', {
                  event_category: 'User Interaction',
                  event_label: e.target.tagName,
                });
              });
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
