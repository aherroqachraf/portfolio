import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer.component";
import NavBar from "@/components/nav-bar.component";
import Script from "next/script";

import ParticlesContainer from "@/components/particles-container.component";
import Provider from "./providers";

const montserrat =  Montserrat({ 
  subsets: ["latin"],
  variable: '--font-mont'
});

export const metadata: Metadata = {
  title: "Achraf EL MOUNAFIH",
  description: "a resume of my competence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>

      <head>
      <Script id='theme-switcher' strategy="beforeInteractive">
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}`}
        </Script>
      </head>
      
      <body className={montserrat.className}>
          <main className='font-mont bg-light w-full min-h-screen dark:bg-dark'>
            <Provider>
              <NavBar/>
                {children}
              </Provider>
            <Footer/>
          </main>
      </body>
    </html>
  );
}
