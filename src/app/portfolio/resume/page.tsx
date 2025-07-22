import { Briefcase, GraduationCap } from 'lucide-react';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Dushyant Solanki - MERN Stack Developer',
  description:
    'View the professional resume of Dushyant Solanki, a MERN Stack Developer skilled in React, Node.js, Next.js, and MongoDB. Explore experience, skills, and education.',
  keywords: [
    'Dushyant Solanki Resume',
    'Hire',
    'Hire Me',
    'Gandhinagar',
    'Ahmedabad',
    'Portfolio',
    'Modern Portfolio',
    'MERN Stack Developer Resume',
    'React Developer Resume',
    'Full Stack Developer CV',
    'JavaScript Developer Resume',
    'Web Developer Resume',
    'Next.js Developer Resume',
    'Node.js Resume',
  ],
  creator: 'Dushyant Solanki',
  publisher: 'Dushyant Solanki',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  metadataBase: new URL('https://mordern-portfolio-sandy.vercel.app'),
  alternates: {
    canonical: 'https://mordern-portfolio-sandy.vercel.app/portfolio/resume',
  },
  openGraph: {
    title: 'Resume | Dushyant Solanki - MERN Stack Developer',
    description:
      'Explore the resume of Dushyant Solanki, a full-stack JavaScript developer specializing in the MERN stack, including React, Next.js, Node.js, and MongoDB.',
    url: 'https://mordern-portfolio-sandy.vercel.app/portfolio/resume',
    siteName: 'Portfolio of Dushyant Solanki',
    images: [
      {
        url: '/myavatar_imresizer.jpg', // Recommended: upload this image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Dushyant Solanki Resume Preview',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
};

const Resume = () => {
  const skills = [
    { name: 'HTML', percentage: 92 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 91 },
    { name: 'TypeScript', percentage: 75 },
    { name: 'React JS', percentage: 90 },
    { name: 'Next JS', percentage: 88 },
    { name: 'Node JS', percentage: 89 },
    { name: 'Express JS', percentage: 88 },
    { name: 'MongoDB', percentage: 85 },
    { name: 'Firebase', percentage: 85 },
    { name: 'Socket.IO', percentage: 80 },
    { name: 'Git', percentage: 85 },
    { name: 'Tailwind CSS', percentage: 90 },
    { name: 'Material UI', percentage: 85 },
    { name: 'Shadcn UI', percentage: 85 },
    { name: 'Deployment', percentage: 75 },
    { name: 'Photography', percentage: 70 },
  ];
  return (
    <article>
      <header className="mb-4">
        <h1 className="text-2xl font-semibold mb-3"> Resume </h1>
        <div className="h-1 w-12 bg-green-400 rounded-md"></div>
      </header>

      <section className="mb-4">
        <div className="">
          {/* Experience Section */}
          <div>
            <div className="flex items-center mb-6">
              <div className="relative  py-3 px-3 rounded-md text-[#07ff45c0]  shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out mr-3">
                <Briefcase className=" text-green-500" />
              </div>

              <h2 className="text-2xl font-bold ">Experience</h2>
            </div>

            <div className="relative">
              {/* Continuous vertical line for experience - connects to last dot */}
              <div className="absolute left-5 -top-6  w-0.5 bg-white/10 h-full "></div>

              <div className="space-y-8">
                {/* 
                                <div className="relative pl-12">
                                    <div className="absolute left-[13px] top-2 w-4 h-4 bg-white/30 rounded-full z-10  after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:bg-green-500 after:rounded-full"></div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Lemolite Technologies LLP</h3>
                                    <p className="text-gray-400 text-sm mb-3">Aug 2024 - Jan 2025, </p>
                                    <span className='text-gray-100 bg-white/5 py-1 px-2 rounded-sm text-sm '>Mern Stack Intern</span>

                                </div> */}

                <div className="relative pl-12">
                  <div className="absolute left-[13px] top-2 w-4 h-4 bg-white/30 rounded-full z-10  after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:bg-green-500 after:rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Lemolite Technologies LLP
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Aug 2024 - May 2025{' '}
                  </p>
                  <span className="text-gray-100 bg-white/5 py-1 px-2 rounded-sm text-sm ">
                    Mern Stack Developer
                  </span>
                  <ul className="mt-4 text-gray-300 leading-relaxed list-disc list-inside space-y-2">
                    <li>
                      Developed full-stack web applications using React.js,
                      Next.js, Node.js and MongoDB, ensuring responsive design
                      and performance.
                    </li>
                    <li>
                      Built and maintained scalable REST APIs with Express.js
                      and Fastify, and integrated Socket.IO for real-time
                      functionality.
                    </li>
                    <li>
                      Designed clean, user-friendly interfaces with Tailwind
                      CSS, Material UI, and Styled Components, following modern
                      UX practices.
                    </li>
                    <li>
                      Worked with TypeScript and Git in an Agile environment,
                      focusing on clean code, reusability, and collaboration
                      across teams.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Education Section */}
          <div className="mt-12">
            <div className="flex items-center mb-6">
              <div className="relative  py-3 px-3 rounded-md text-[#07ff45c0]  shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out mr-3">
                <GraduationCap className=" text-green-500" />
              </div>

              <h2 className="text-2xl font-bold ">Education</h2>
            </div>

            <div className="relative">
              {/* Continuous vertical line for education - connects to last dot */}
              <div className="absolute left-5 -top-6 w-0.5 bg-white/10 h-full"></div>

              <div className="space-y-8">
                {/* Gujarat Technological University */}
                <div className="relative pl-12">
                  <div className="absolute left-[13px] top-2 w-4 h-4 bg-white/30 rounded-full z-10  after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:bg-green-500 after:rounded-full"></div>

                  <h3 className="text-xl font-semibold text-white mb-2 ">
                    Gujarat Technological University
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 ">2020 — 2024</p>
                  <p className="text-gray-300 leading-relaxed ">
                    I hold a Bachelor of Technology (B.Tech) in Computer
                    Engineering from Gujarat Technological University, where I
                    graduated with a CGPA of 9.0. My studies provided me with a
                    strong foundation in computer science principles and
                    practical skills, which I apply in my work as a Full Stack
                    Developer and Designer.
                  </p>
                </div>

                {/* The Imperial Science School */}
                <div className="relative pl-12">
                  <div className="absolute left-[13px] top-2 w-4 h-4 bg-white/30 rounded-full z-10  after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:bg-green-500 after:rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    The Imperial Science School
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">2018 — 2020</p>
                  <p className="text-gray-300 leading-relaxed">
                    I completed my high schooling at The Imperial Science
                    School, where I achieved an A+ grade. This solid academic
                    foundation helped shape my passion for technology and set
                    the stage for my further studies in computer engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}

          <div className="mt-12 ">
            <h2 className="text-2xl font-bold mb-8 ">Skills</h2>

            <div className="border p-8 shadow-md shadow-black/5 rounded-2xl border-white/20 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="relative mb-2 py-0.5 pl-2 pr-6 rounded-sm rounded-tr-4xl rounded-bl-0 text-gray-200  shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out">
                        {skill.name}
                      </span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                    {/* Add separator for non-last items in multi-column layouts */}
                    {index < skills.length - 1 && (
                      <div className="hidden md:block lg:block mt-4 border-t border-white/10 md:border-t-0 md:border-r lg:border-t-0 lg:border-r"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Resume;
