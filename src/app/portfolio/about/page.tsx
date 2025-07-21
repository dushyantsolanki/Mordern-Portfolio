import { ArrowDownToLine, Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Dushyant Solanki - MERN Stack Developer",
    manifest: '/manifest.webmanifest',
    verification: {
        google: "OBn1HWCiR3_f-0rm_1He_vnCyzDe5EVjutjILllFoPs",
    },
    description:
        "Learn more about Dushyant Solanki, a MERN Stack Developer with expertise in React, Next.js, Node.js, and MongoDB. Discover his background, experience, and passion for building modern web applications.",
    keywords: [
        "Dushyant Solanki",
        "Portfolio",
        'Modern Portfolio',
        "About MERN Developer",
        "MERN Stack Developer",
        "React Developer",
        "Full Stack JavaScript Developer",
        "Node.js Developer",
        "Web Developer Portfolio",
        "Next.js Developer",
    ],
    creator: "Dushyant Solanki",
    publisher: "Dushyant Solanki",
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
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    },
    metadataBase: new URL("https://mordern-portfolio-sandy.vercel.app"),
    alternates: {
        canonical: "https://mordern-portfolio-sandy.vercel.app/about",
    },
    openGraph: {
        title: "About | Dushyant Solanki - MERN Stack Developer",
        description:
            "Meet Dushyant Solanki, a passionate MERN Stack Developer skilled in building scalable web apps using React, Node.js, and MongoDB.",
        url: "https://mordern-portfolio-sandy.vercel.app/about",
        siteName: "Portfolio of Dushyant Solanki",
        images: [
            {
                url: "/myavatar.png", // Make sure this exists in /public
                width: 1200,
                height: 630,
                alt: "Dushyant Solanki - MERN Developer",
            },
        ],
        locale: "en_US",
        type: "website",
    },

};


const ProjectCard = ({ name, description, technologies, link, image }: {
    name: string,
    description: string,
    technologies: string[],
    link: string,
    image: string
}) => {
    return (
        <div className="flex-1 min-w-[300px] max-w-[400px] w-full relative py-2 rounded-md text-gray-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] hover:bg-green-300 before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out">
            <div className="p-4 h-full flex flex-col">
                <img
                    src={image}
                    alt={`${name} screenshot`}
                    loading='lazy'
                    className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
                <p className="text-sm text-gray-300 mb-3 flex-grow">{description}</p>
                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech: string, index: number) => (
                            <span
                                key={index}
                                className="px-2 py-1 text-xs font-medium text-gray-200 bg-black/40 rounded-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    {link && (
                        <Link
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-sm text-green-300 hover:underline transition-colors duration-200"
                        >
                            View Project →
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};


const About = () => {
    const tech = [
        { name: "Node.js", url: "https://www.svgrepo.com/show/378837/node.svg" },
        { name: "JavaScript", url: "https://www.svgrepo.com/show/303206/javascript-logo.svg" },
        { name: "React", url: "https://www.svgrepo.com/show/452092/react.svg" },
        { name: "HTML5", url: "https://www.svgrepo.com/show/452228/html-5.svg" },
        { name: "CSS3", url: "https://www.svgrepo.com/show/452185/css-3.svg" },
        { name: "Tailwind", url: "https://www.svgrepo.com/show/374118/tailwind.svg" },
        { name: "Express.js", url: "https://www.svgrepo.com/show/330398/express.svg" },
        { name: "Fastify", url: "https://www.svgrepo.com/show/353729/fastify-icon.svg" },
        { name: "Socket.io", url: "https://socket.io/images/logo-dark.svg" },
        { name: "Mongo DB", url: "https://www.svgrepo.com/show/373845/mongo.svg" },
        { name: "Next.js", url: "https://www.svgrepo.com/show/378440/nextjs-fill.svg" },
        { name: "Git", url: "https://www.svgrepo.com/show/452210/git.svg" },
        { name: "Material UI", url: "https://www.svgrepo.com/show/354048/material-ui.svg" },
        { name: "TypeScript", url: "https://www.svgrepo.com/show/354478/typescript-icon.svg" },
        { name: "Linux", url: "https://www.svgrepo.com/show/448236/linux.svg" },
        { name: "Firebase", url: "https://www.svgrepo.com/show/353735/firebase.svg" },
    ];

    const projects = [

        {
            name: "Task Mate",
            description: "Task Mate is a personal productivity project featuring an AI- powered web search assistant, smart event reminders, and task management.Built for flexibility, it allows adding custom features as needed—making it a versatile tool for daily organization and planning.",
            technologies: ["React", "Shadcn UI", "Tailwind CSS", "Node.js", 'Express', "MongoDB", "Socket.io", "Personal"],
            link: "https://task-app-wfv1.onrender.com",
            image: "/taskmate.png",
        },
        {
            name: "Go Din Din",
            description: "Go Din Din is a video-based e-commerce platform that showcases products like YouTube Shorts. It features new and old items, follow/following, product storytelling, promotions, and third-party logistics for delivery—blending shopping with social engagement for a modern experience.",
            technologies: ["Node.js", "MongoDB", "Express", "Company"],
            image: "/peliswan.svg",
        },
        {
            name: "Zirotix",
            description: "Zirotix is a ticket-selling platform for sports matches, concerts, and events. It provides a smooth and secure booking experience with real-time event updates, easy seat selection, and fast digital ticket delivery—making event access simple and hassle-free",
            technologies: ["React", "AntD", "Tailwind CSS", "OTPLESS", "Node JS", "Express", 'Mongo DB', "Company"],
            image: "/zirotix.svg",
        },
        {
            name: "Peliswan CRM",
            description: "Pelisawan CRM is a smart tool for managing leads, staff, roles, and dashboards. It simplifies team coordination and boosts productivity with organized workflows and clear insights.",
            technologies: ["React", "Material UI", "Node.js", "Fastify", "MongoDB", "Socket.io", "Company"],
            image: "/peliswan.svg",
        },
        {
            name: "Nexstaff",
            description: "Nextstaff is an HRMS platform designed to simplify employee management, payroll, attendance, and leave tracking. It streamlines HR operations, enhances efficiency, and ensures smooth workforce management for growing businesses.",
            technologies: ["React", "Next JS", "Node.js", "MongoDB", "Socket.io", "Company"],
            image: "/nexstaff.png",
        },
        {
            name: "Peliswan IMS",
            description: "Pelisawan IMS is an inventory management system for chemical stock control, transport tracking, and billing. It ensures accurate inventory updates, smooth logistics, and efficient bill management for streamlined operations.",
            technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Company"],
            image: "/peliswan.svg",
        },

    ];


    return (

        <article >
            <header className='mb-4'>
                <h1 className='text-2xl font-semibold mb-3'> About Me </h1>
                <div className='h-1 w-12 bg-green-400 rounded-md'></div>
            </header>

            <section className="mb-8">
                <div className='flex items-center lg:items-start justify-between flex-col-reverse lg:flex-row '>
                    <div className='box-border pt-8  lg:pr-36'>
                        <p>
                            I'm a MERN Stack Developer with 1 year of hands-on experience crafting responsive and scalable web applications. I specialize in both frontend and backend development, with a solid foundation in JavaScript, TypeScript, and modern frameworks like React.js, Next.js, Node.js, and MongoDB.
                        </p>
                        <br />
                        <p>
                            On the backend, I’ve worked with Express and Fastify to build RESTful APIs, while integrating Socket.IO for real-time functionality. On the frontend, I focus on clean, accessible UI development using Tailwind CSS, Material UI, and Styled Components.
                        </p>
                        <br />
                        <p>
                            I’m passionate about writing clean, maintainable code, collaborating with teams using Git, and continually learning to stay updated with the latest in web development.
                        </p>

                        <div className='my-8 flex gap-2'>

                            <a
                                href="/Resume_Dushyant_.pdf"
                                download
                                className="relative w-34 py-2 pl-3 pr-8 rounded-md text-gray-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out hover:bg-green-300 cursor-pointer mr-1 flex gap-2 items-center justify-start"
                            >
                                <span><ArrowDownToLine className="h-4 w-4 text-green-500" /></span>
                                Resume
                            </a>
                            <Link href='/portfolio/contact' className="relative w-38 py-2 pl-3  rounded-md text-gray-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out hover:bg-green-300 cursor-pointer mr-1 flex gap-2 items-center justify-start"> <span><Send className="h-4 w-4 text-green-500" /></span>
                                Contact Me</Link>


                        </div>
                    </div>
                    <div>
                        <div className="w-64 h-64 bg-white/10 rounded-2xl flex items-center justify-center mb-4 text-4xl">
                            <Image src='/myavatar.png' alt="Profile Picture" height={600} width={600} />
                        </div>


                    </div>
                </div>
            </section>

            <header className='mb-8'>
                <h1 className='text-2xl font-semibold mb-3'> Technology </h1>
            </header>

            <section className=' flex gap-8 flex-wrap'>

                <TooltipProvider >
                    <div className="flex flex-wrap  gap-8 lg:gap-6 justify-center lg:justify-start">
                        {tech.map((item, index) => (
                            <Tooltip key={index}>
                                <TooltipTrigger asChild>
                                    <div className="relative flex items-center justify-center w-36 p-4 rounded-md text-[#07ff45c0] shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out">
                                        <Image width={70} height={70} src={item.url} alt={item.name} />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </TooltipProvider>

                <div className="py-12">
                    <div className="">
                        <header className='mb-8'>
                            <h1 className='text-2xl font-semibold mb-3'> Projects </h1>
                        </header>
                        <div className="flex flex-wrap gap-6 justify-start ">
                            {projects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    name={project.name}
                                    description={project.description}
                                    technologies={project.technologies}
                                    link={project.link as any}
                                    image={project.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>


            </section>


        </article >

    )
}

export default About