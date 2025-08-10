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
    'Dushyant Solanki',
    'Dushyant',
    'Dushyant Portfolio',
    'Mern',
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
    '7623057936',
  ],
  openGraph: {
    title: 'Dushyant Solanki - Work',
    description:
      'Showcasing projects including Task Mate, Go Din Din, Zirotix, and more.',
    url: 'https://portfolio-dev-dushyant.vercel.app/portfolio/work',
    siteName: 'Dushyant Solanki Portfolio',
    images: [
      {
        url: '/open_graph.png',
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
    name: 'Shree AI Agent',
    description:
      'I built Shree AI Agent for my portfolio—an intelligent assistant that lets users ask questions and get instant, smart answers right on the site. Simple, helpful, and interactive.',
    technologies: [
      'n8n',
      'supabase',
      'gemini',
      'embeddings',
      'vector store',
      'google apis',
      'google drive',
      'webhook',
      'Mongo DB',
      'Personal',
    ],
    image: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/n8n.svg',
  },
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
    <div className="relative z-10 w-full max-w-[400px] min-w-[300px] flex-1 rounded-lg bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] py-2 text-gray-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition duration-250 ease-in-out before:absolute before:inset-[1px] before:z-[-1] before:rounded-[inherit] before:bg-[#252525ea] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:transition before:duration-250 before:ease-in-out before:content-[''] hover:bg-green-300">
      <div className="flex h-full flex-col p-4">
        <img
          src={image}
          alt={`${name} screenshot`}
          loading="lazy"
          className="mb-4 h-40 w-full rounded-xl object-cover"
        />
        <h3 className="mb-2 text-lg font-semibold text-white">{name}</h3>
        <p className="mb-3 flex-grow text-sm text-gray-300">{description}</p>
        <div className="mt-auto">
          <div className="mb-4 flex flex-wrap gap-2">
            {technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="rounded-sm bg-black/40 px-2 py-1 text-xs font-medium text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
          {link && (
            <InteractiveHoverButton>
              <Link
                href={link}
                className="inline-block text-sm text-green-300 transition-colors duration-200 hover:underline"
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
        <h1 className="mb-3 text-2xl font-semibold"> Work </h1>
        <div className="h-1 w-12 rounded-md bg-green-400"></div>
      </header>

      <section className="mb-4">
        <div className="flex flex-wrap justify-start gap-6">
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
