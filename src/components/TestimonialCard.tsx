'use client';

import Image from 'next/image';

interface TestimonialCardProps {
  avatar: string;
  name: string;
  testimonial: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatar,
  name,
  testimonial,
}) => {
  return (
    <div className="relative z-10 w-full flex-shrink-0 snap-center rounded-lg bg-black/20 bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] p-6 py-2 pt-6 text-gray-200/80 shadow-[0_5px_30px_rgba(0,0,0,0.10)] transition duration-250 ease-in-out before:absolute before:inset-[1px] before:z-[-1] before:rounded-[inherit] before:bg-[#252525ea] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:transition before:duration-250 before:ease-in-out before:content-[''] hover:bg-green-300">
      <div className="mb-4 flex items-center gap-4">
        <Image
          src={avatar}
          alt="Profile Picture"
          height={80}
          width={80}
          className="absolute -top-5 left-8 z-10 h-16 w-16 rounded-2xl border-white bg-white/20 object-cover backdrop-blur-2xl sm:h-20 sm:w-20 md:-top-7"
        />
        <h3 className="ml-20 text-base font-semibold sm:ml-24 sm:text-lg md:text-xl">
          {name}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
        {testimonial}
      </p>
    </div>
  );
};
