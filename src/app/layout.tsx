import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Calendar, Facebook, Github, Instagram, Linkedin, Mail, MapIcon, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '200', "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  icons: {
    icon: "/my-avatar.png",
  },
  description: `Mern Stack Developer with 10 months of hands-on experience in building responsive web applications using
React.js, Next.js, Node.js, and MongoDB. Skilled in both frontend and backend development, with a strong
grip on JavaScript, TypeScript, Express, and Fastify. Familiar with real-time features using Socket.IO and
clean UI development using Tailwind CSS, Material UI, and Styled Components. Comfortable working with Git
and writing scalable, maintainable code.`,
};


const profileData = {
  name: "Dushyant Solanki",
  title: "Full Stack Developer",
  avatar: "/my-avatar.png",
  email: "dushyantsolanki.dev@gmail.com",
  phone: "+91 7823057936",
  birthday: "Sept 22, 2002",
  location: "Ahmedabad, Gujarat, IND"
};




const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Resume', href: '/resume' },
  // { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Contact', href: '/contact' }
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-primary text-white font-light  `}
      >
        <main className="grid grid-cols-[350px_1fr] grid-rows-[auto_1fr] min-h-screen">
          {/* Sidebar */}
          <div className="row-span-2  border border-amber-100/10 bg-white/5 ">
            <div className=" min-h-screen flex flex-col ">
              {/* Profile Header */}
              <div className="flex flex-col items-center p-8 ">
                <div className="w-40 h-40 bg-white/10 rounded-2xl flex items-center justify-center mb-4 text-4xl">
                  <Image src={`${profileData.avatar}`} alt="Profile Picture" height={200} width={200} />
                </div>
                <h1 className="text-2xl font-semibold text-white mb-4">{profileData.name}</h1>
                <p className=" relative  py-2 px-4 rounded-md text-gray-200/80  shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out  mr-1">{profileData.title}</p>
              </div>

              {/* Contact Information */}
              <div className="px-12">
                <Separator className="bg-white/20 " />
              </div>
              <div className="flex-1 p-4 space-y-1">
                <div className="flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200">
                  <div className="flex-shrink-0">
                    <div className=" relative  py-3 px-3 rounded-md text-[#07ff45c0]  shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out  mr-1"><Mail className=" text-green-500 " /></div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-400 uppercase tracking-wide">EMAIL</p>
                    <a href={`mailto:${profileData.email} `} className="text-sm text-gray-200 truncate">{profileData.email}</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200">
                  <div className="flex-shrink-0 ">
                    <div className=" relative  py-3 px-3 rounded-md text-[#07ff45c0]  shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out  mr-1"><Phone className=" text-green-500 " /></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-400 uppercase tracking-wide">PHONE</p>
                    <a href={`tel:${profileData.phone}`} className="text-sm text-gray-200 truncate">{profileData.phone}</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200">
                  <div className="flex-shrink-0">
                    <div className=" relative  py-3 px-3 rounded-md text-[#07ff45c0]  shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out  mr-1"><Calendar className=" text-green-500 " /></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-400 uppercase tracking-wide">BIRTHDAY</p>
                    <p className="text-sm text-gray-200 truncate">{profileData.birthday}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200">
                  <div className="flex-shrink-0">

                    <div className=" relative  py-3 px-3 rounded-md text-[#07ff45c0]  shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out  mr-1"><MapIcon className=" text-green-500 " /></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-400 uppercase tracking-wide">LOCATION</p>
                    <p className="text-sm text-gray-200 truncate">{profileData.location}</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="p-6  border-white/10">
                  <div className="flex justify-center space-x-4">
                    <a
                      href='https://github.com/dushyantsolanki'
                      className=" relative  py-3 px-3 rounded-md text-[#07ff45c0]  shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out hover:bg-green-300  mr-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 text-white-300 " />
                    </a>
                    <a
                      href='https://www.linkedin.com/in/dushyantsolanki/'
                      className=" relative  py-3 px-3 rounded-md text-[#07ff45c0]  shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out hover:bg-green-300  mr-1" target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 text-white-300 " />
                    </a>
                    <a
                      href='https://www.instagram.com/dushyantsolanky/'
                      className=" relative  py-3 px-3 rounded-md text-[#07ff45c0]  shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out hover:bg-green-300  mr-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-5 h-5 text-white-300 " />
                    </a>
                  </div>
                </div>
              </div>


            </div>
          </div>




          {/* Main */}
          <div className="px-8">
            <div className="min-h-screen border-2 border-t-0 rounded-xl rounded-t-none border-white/10 bg-white/5 p-8">
              {children}
            </div>
          </div>

          {/* Topbar */}

          <nav className="mt-4 sticky bottom-0 md:bottom-[53px] w-full flex justify-center items-center z-50">
            <div className="h-18 px-8 border bg-white/10 border-amber-100/10 backdrop-blur-sm flex items-center rounded-4xl ">
              <ul className="flex space-x-8 ">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="px-4 py-2 text-lg text-green-500  font-normal   hover:bg-black/10 hover:border hover:border-white/20 rounded-lg"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </main>



      </body>
    </html>
  );
}
