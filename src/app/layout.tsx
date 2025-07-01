import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stephen Akrong's Portfolio",
  description: "The portfolio of Stephen Akrong, an aspiring software engineer",
};

function Header(){
  return(
    <nav className="flex justify-between items-center px-10 py-5 border-b-3 fixed w-full opacity-90 z-30 bg-[#357258]">
      <div className="text-xl font-bold ml-20 text-[#f2fdec]">
        <h2>Stephen Akrong</h2>
      </div>
      <div className="flex flex-row space-x-15 text-[#f2fdec]">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>
    </nav>
  )
}

function Footer(){
  return(
    <div className="flex justify-center items-center px-30 py-2 border-t-3 bg-[#357258]">
      <a href={"https://github.com/StephenA360"} target="_blank" rel="noopener noreferrer">
        <img src="/project-media/github.png" alt="GitHub" width={120}></img>
      </a>
      <a href={"https://www.linkedin.com/in/stephen-akrong-a68031317"} target="_blank" rel="noopener noreferrer">
        <img src="/project-media/linkedin.webp" alt="LinkedIn" width={80}></img>
      </a>
      
    </div>
  )
}

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang='en'>
      <body className="bg-green-200 text-gray-900 font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
