'use client'

import Image from "next/image";

interface TestimonialCardProps {
    avatar: string;
    name: string;
    testimonial: string;
}


export const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatar, name, testimonial }) => {
    return (
        <div className="relative bg-black/20 p-6 pt-6 w-full max-w-[360px] flex-shrink-0 snap-center py-2 rounded-lg text-gray-200/80 shadow-[0_5px_30px_rgba(0,0,0,0.10)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] hover:bg-green-300 before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out">
            <div className="flex items-center gap-4 mb-4">
                <Image
                    src={avatar}
                    alt="Profile Picture"
                    height={80}
                    width={80}
                    className="absolute -top-5 md:-top-7 left-8 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 backdrop-blur-2xl object-cover border-white z-10"
                />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold ml-20 sm:ml-24">{name}</h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{testimonial}</p>
        </div>
    );
};