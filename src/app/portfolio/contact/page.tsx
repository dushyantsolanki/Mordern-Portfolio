import ContactUs from '@/components/ContactUs';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Dushyant Solanki - MERN Stack Developer',
  description:
    'Get in touch with Dushyant Solanki, a MERN Stack Developer specializing in React, Node.js, MongoDB, and responsive UI development. Available for freelance work, collaborations, and tech projects.',
  keywords: [
    'Dushyant Solanki',
    'Hire',
    'Hire Me',
    'Gandhinagar',
    'Ahmedabad',
    'Portfolio',
    'Modern Portfolio',
    'Contact MERN Developer',
    'Contact React Developer',
    'MERN Stack Developer',
    'Node.js Developer',
    'Full Stack Developer',
    'Freelance Web Developer',
    'Next.js Portfolio',
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
  metadataBase: new URL('https://portfolio-dev-dushyant.vercel.app'),
  alternates: {
    canonical: 'https://portfolio-dev-dushyant.vercel.app/portfolio/contact',
  },
  openGraph: {
    title: 'Contact | Dushyant Solanki - MERN Stack Developer',
    description:
      'Looking to collaborate or hire? Contact Dushyant Solanki, a full-stack MERN Developer with skills in React, Next.js, Node.js, and MongoDB.',
    url: 'https://portfolio-dev-dushyant.vercel.app/portfolio/contact',
    siteName: 'Portfolio of Dushyant Solanki',
    images: [
      {
        url: '/myavatar_imresizer.jpg',
        width: 1200,
        height: 630,
        alt: 'Dushyant Solanki - Contact Page Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const Contact = () => {
  return (
    <article>
      <header className="mb-4">
        <h1 className="text-2xl font-semibold mb-3"> Contact </h1>
        <div className="h-1 w-12 bg-green-400 rounded-md"></div>
      </header>

      <section className="mb-4">
        <section className="relative h-[400px] lg:h-[500px]  w-full rounded-2xl mb-[30px] border border-[#383838] overflow-hidden">
          <figure className="h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181483.53546764606!2d72.45578984534428!3d23.019514112986656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1729944972803!5m2!1sen!2sin"
              className="w-full h-full border-none filter grayscale invert"
              loading="lazy"
            ></iframe>
          </figure>
        </section>
      </section>

      <ContactUs />
    </article>
  );
};

export default Contact;
