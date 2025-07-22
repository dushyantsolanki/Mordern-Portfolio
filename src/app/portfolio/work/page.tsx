import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-dev-dushyant.vercel.app'),
  title: 'Work | Dushyant Solanki',
  description:
    'Explore a collection of professional and personal projects built using React, Node.js, MongoDB, and more.',
  keywords: [
    'Hire',
    'Hire Me',
    'Gandhinagar',
    'Ahmedabad',
    'Portfolio',
    'Projects',
    'React',
    'Node.js',
    'MongoDB',
    'Full Stack',
    'Dushyant Solanki',
  ],
  openGraph: {
    title: 'Dushyant Solanki - Work',
    description:
      'Showcasing projects including Task Mate, Go Din Din, Zirotix, and more.',
    url: 'https://portfolio-dev-dushyant.vercel.app/portfolio/work',
    siteName: 'Dushyant Solanki Portfolio',
    images: [
      {
        url: '/myavatar_imresizer.jpg',
        width: 1200,
        height: 630,
        alt: 'Dushyant Solanki Portfolio',
      },
    ],
    type: 'website',
  },
};

const projects = [
  {
    name: 'Task Mate',
    description:
      'Task Mate is a personal productivity project featuring an AI- powered web search assistant, smart event reminders, and task management.Built for flexibility, it allows adding custom features as needed—making it a versatile tool for daily organization and planning.',
    technologies: [
      'React',
      'Shadcn UI',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.io',
      'Personal',
    ],
    link: 'https://task-app-wfv1.onrender.com',
    image: '/taskmate.png',
  },
  {
    name: 'Go Din Din',
    description:
      'Go Din Din is a video-based e-commerce platform that showcases products like YouTube Shorts. It features new and old items, follow/following, product storytelling, promotions, and third-party logistics for delivery—blending shopping with social engagement for a modern experience.',
    technologies: ['Node.js', 'MongoDB', 'Express', 'Company'],
    image: '/peliswan.svg',
  },
  {
    name: 'Zirotix',
    description:
      'Zirotix is a ticket-selling platform for sports matches, concerts, and events. It provides a smooth and secure booking experience with real-time event updates, easy seat selection, and fast digital ticket delivery—making event access simple and hassle-free',
    technologies: [
      'React',
      'AntD',
      'Tailwind CSS',
      'OTPLESS',
      'Node JS',
      'Express',
      'Mongo DB',
      'Company',
    ],
    image: '/zirotix.svg',
  },
  {
    name: 'Peliswan CRM',
    description:
      'Pelisawan CRM is a smart tool for managing leads, staff, roles, and dashboards. It simplifies team coordination and boosts productivity with organized workflows and clear insights.',
    technologies: [
      'React',
      'Material UI',
      'Node.js',
      'Fastify',
      'MongoDB',
      'Socket.io',
      'Company',
    ],
    image: '/peliswan.svg',
  },
  {
    name: 'Nexstaff',
    description:
      'Nextstaff is an HRMS platform designed to simplify employee management, payroll, attendance, and leave tracking. It streamlines HR operations, enhances efficiency, and ensures smooth workforce management for growing businesses.',
    technologies: [
      'React',
      'Next JS',
      'Node.js',
      'MongoDB',
      'Socket.io',
      'Company',
    ],
    image: '/nexstaff.png',
  },
  {
    name: 'Peliswan IMS',
    description:
      'Pelisawan IMS is an inventory management system for chemical stock control, transport tracking, and billing. It ensures accurate inventory updates, smooth logistics, and efficient bill management for streamlined operations.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Company'],
    image: '/peliswan.svg',
  },
];

const ProjectCard = ({
  name,
  description,
  technologies,
  link,
  image,
}: {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}) => {
  return (
    <div className="flex-1 min-w-[300px] max-w-[400px] w-full relative py-2 rounded-lg text-gray-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] hover:bg-green-300 before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out">
      <div className="p-4 h-full flex flex-col">
        <img
          src={image}
          alt={`${name} screenshot`}
          loading="lazy"
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
            <InteractiveHoverButton>
              <Link
                href={link}
                className="inline-block text-sm text-green-300 hover:underline transition-colors duration-200"
              >
                View Project
              </Link>
            </InteractiveHoverButton>
          )}
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <article>
      <header className="mb-4">
        <h1 className="text-2xl font-semibold mb-3"> Work </h1>
        <div className="h-1 w-12 bg-green-400 rounded-md"></div>
      </header>

      <section className="mb-4">
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
      </section>
    </article>
  );
};

export default Work;
