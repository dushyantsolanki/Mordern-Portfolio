'use client'


import { Calendar, Github, Instagram, Linkedin, Mail, MapIcon, Phone, Menu, X, LogInIcon } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NumberTicker } from "@/components/NumberTiker";


const profileData = {
    name: "Dushyant Solanki",
    title: "Full Stack Developer",
    avatar: "/myavatar.png",
    email: "dushyantsolanki.dev@gmail.com",
    phone: "+91 7823057936",
    birthday: "Sept 22, 2002",
    location: "Ahmedabad, Gujarat, IND"
};

const navLinks = [
    { name: 'About', href: '/portfolio/about' },
    { name: 'Resume', href: '/portfolio/resume' },
    { name: 'Work', href: '/portfolio/work' },
    { name: 'Contact', href: '/portfolio/contact' }
];

// Sidebar Component
function Sidebar({ count }: { count: number }) {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Profile Header */}
            <div className="flex flex-col items-center p-8">
                <div className="w-40 h-40 bg-white/10 rounded-2xl flex items-center justify-center mb-4 text-4xl">
                    <Image src={profileData.avatar} alt="Profile Picture" height={200} width={200} />
                </div>
                <h1 className="text-2xl font-semibold text-white mb-4">{profileData.name}</h1>
                <p className="relative py-2 px-4 rounded-md text-gray-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out mr-1">
                    {profileData.title}
                </p>
            </div>

            {/* Contact Information */}
            <div className="px-12">
                <Separator className="bg-white/20" />
            </div>
            <div className="flex-1 p-4 space-y-1">
                <ContactItem icon={Mail} label="EMAIL" value={profileData.email} href={`mailto:${profileData.email}`} />
                <ContactItem icon={Phone} label="PHONE" value={profileData.phone} href={`tel:${profileData.phone}`} />
                <ContactItem icon={Calendar} label="BIRTHDAY" value={profileData.birthday} />
                <ContactItem icon={MapIcon} label="LOCATION" value={profileData.location} />

                {/* Social Links */}
                <div className="p-6 border-white/10">
                    <div className="flex justify-center space-x-4">
                        <SocialLink href="https://github.com/dushyantsolanki" icon={Github} />
                        <SocialLink href="https://www.linkedin.com/in/dushyantsolanki/" icon={Linkedin} />
                        <SocialLink href="https://www.instagram.com/dushyantsolanky/" icon={Instagram} />
                        {/* <SocialLink href="/admin/login" icon={LogInIcon} /> */}
                    </div>
                </div>

                <div className="hidden lg:flex  justify-center">
                    <div
                        className="text-center w-1/2 text-4xl bg-black/20 border border-white/20 rounded-2xl p-3  shadow-2xl"
                    >
                        <NumberTicker value={count} format="youtube" />

                    </div>
                </div>
            </div>

        </div>
    );
}

// Contact Item Component
function ContactItem({ icon: Icon, label, value, href }: {
    icon: any;
    label: string;
    value: string;
    href?: string;
}) {
    const content = (
        <div className="flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200">
            <div className="flex-shrink-0">
                <div className="relative py-3 px-3 rounded-md text-[#07ff45c0] shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out mr-1">
                    <Icon className="text-green-500" />
                </div>
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
                <p className="text-sm text-gray-200 truncate">{value}</p>
            </div>
        </div>
    );

    return href ? <a href={href}>{content}</a> : content;
}

// Social Link Component
function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
    return (
        <a
            href={href}
            className="relative py-3 px-3 rounded-md text-[#07ff45c0] shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out hover:bg-green-300 mr-1"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Icon className="w-5 h-5 text-white-300" />
        </a>
    );
}

// Mobile Header Component
function MobileHeader({ isExpanded, onToggle, count }: { isExpanded: boolean; onToggle: () => void, count: number }) {
    return (
        <motion.div
            className="lg:hidden sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10"
            initial={false}
            animate={{ height: isExpanded ? "auto" : "80px" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {/* Collapsed Header */}
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <Image src={profileData.avatar} alt="Profile Picture" height={48} width={48} className="rounded-xl" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-white">{profileData.name}</h2>
                        <p className="text-sm text-gray-400">{profileData.title}</p>
                    </div>
                </div>

                <button
                    onClick={onToggle}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isExpanded ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </motion.div>
                </button>

            </div>
            <div className="relative ">
                <motion.div
                    className="lg:hidden fixed top-[400px] right-0 z-50 bg-black/40 border border-white/10 rounded-xl rounded-r-none  px-3 py-2"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'linear' }}
                >
                    <span className="font-medium text-green-500 ">
                        <NumberTicker value={count} format="youtube" />
                    </span>
                </motion.div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 pb-4 space-y-3">
                            <Separator className="bg-white/20" />

                            {/* Contact Info in Mobile */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="flex items-center space-x-2">
                                    <div className="relative py-3 px-3 rounded-md text-[#07ff45c0] shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out mr-1">
                                        <Mail className="w-5 h-5 text-green-500" />
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-400 uppercase">EMAIL</p>
                                        <a href={`mailto:${profileData.email}`} className="text-sm text-gray-200 truncate">
                                            {profileData.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <div className="relative py-3 px-3 rounded-md text-[#07ff45c0] shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out mr-1">
                                        <Phone className="w-5 h-5 text-green-500" />
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-400 uppercase">PHONE</p>
                                        <a href={`tel:${profileData.phone}`} className="text-sm text-gray-200">
                                            {profileData.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <div className="relative py-3 px-3 rounded-md text-[#07ff45c0] shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out mr-1">
                                        <Calendar className="w-5 h-5 text-green-500" />
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-400 uppercase">BIRTHDAY</p>
                                        <p className="text-sm text-gray-200">{profileData.birthday}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <div className="relative py-3 px-3 rounded-md text-[#07ff45c0] shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease-in-out bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease-in-out mr-1">
                                        <MapIcon className="w-5 h-5 text-green-500" />
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-400 uppercase">LOCATION</p>
                                        <p className="text-sm text-gray-200">{profileData.location}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex justify-center space-x-4 pt-4">
                                <SocialLink href="https://github.com/dushyantsolanki" icon={Github} />
                                <SocialLink href="https://www.linkedin.com/in/dushyantsolanki/" icon={Linkedin} />
                                <SocialLink href="https://www.instagram.com/dushyantsolanky/" icon={Instagram} />
                                {/* <SocialLink href="/admin/login" icon={LogInIcon} /> */}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// Bottom Navigation Component
function BottomNavigation({ count, pathname, hovered, setHovered }: { count: number, pathname: string, hovered: string | null, setHovered: (arg: string | null) => void }) {
    return (
        <nav className="lg:hidden fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 w-full ">
            <motion.div
                className="px-4 py-4 border rounded-2xl rounded-b-none bg-white/10 border-amber-100/10 border-b-0 backdrop-blur-sm overflow-hidden"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <ul className="flex justify-between items-center w-full min-w-0">
                    {navLinks.map((link, index) => {
                        const isActive = pathname === link.href
                        const isHovering = hovered === link.href

                        return (
                            <motion.li
                                key={link.name}
                                className="relative flex-1 min-w-0"
                                onMouseEnter={() => setHovered(link.href)}
                                onMouseLeave={() => setHovered(null)}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                {(isActive || isHovering) && (
                                    <motion.div
                                        layoutId="mobile-nav-highlight"
                                        className="h-10 absolute inset-x-1 top-1/2 -translate-y-1/2 rounded-xl bg-black/10 border border-white/20"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}

                                <Link
                                    href={link.href}
                                    className={`px-2 py-3 text-xs sm:text-sm relative z-10 font-medium flex items-center justify-center transition-all w-full truncate
                                    ${isActive ? 'text-white' : 'text-green-500'}`}
                                >
                                    <span className="truncate">{link.name}</span>
                                </Link>
                            </motion.li>
                        )
                    })}
                </ul>
            </motion.div>
        </nav>
    );
}

// Desktop Navigation Component
function DesktopNavigation({ count, pathname, hovered, setHovered }: { count: number, pathname: string, hovered: string | null, setHovered: (arg: string | null) => void }) {

    return (
        <nav className="lg:flex mt-4 sticky bottom-2 w-full flex justify-center items-center z-50">
            <motion.div
                className="h-18 px-8 border  bg-white/10 border-amber-100/10 backdrop-blur-sm flex items-center rounded-4xl"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <ul className="flex space-x-8 relative">
                    {navLinks.map((link, index) => {
                        const isActive = pathname === link.href
                        const isHovering = hovered === link.href

                        return (
                            <motion.li
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => setHovered(link.href)}
                                onMouseLeave={() => setHovered(null)}
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                {(isActive || isHovering) && (
                                    <motion.div
                                        layoutId="nav-highlight"
                                        className={`h-10 absolute inset-x-0 top-1/2 -translate-y-1/2 rounded-xl bg-black/10 border border-white/20 `}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}


                                <Link
                                    href={link.href}
                                    className={`px-5 py-3 text-lg relative z-10 font-medium flex items-center justify-center ${isActive ? 'text-white' : 'text-green-500'
                                        }`}
                                >
                                    {link.name}
                                </Link>

                            </motion.li>
                        )
                    })}
                    {/* <NumberTicker value={count} format="youtube" /> */}
                </ul>
            </motion.div>
        </nav>);
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isMobileExpanded, setIsMobileExpanded] = useState(false);
    const [hovered, setHovered] = useState<string | null>(null)
    const [count, setCount] = useState<number>(0);
    let pathname = usePathname()

    const analytics = async () => {
        try {
            const res: any = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/portfolio`)
            const visitor = await res.json()

            if (res.ok) {
                setCount(visitor.visit)
            }

        } catch (error) {
            console.log("Analytics :: ", error)
        }
    }

    useEffect(() => {
        analytics()
    }, []);
    return (

        <main className="min-h-screen">
            {/* Mobile Header */}
            <MobileHeader
                isExpanded={isMobileExpanded}
                onToggle={() => setIsMobileExpanded(!isMobileExpanded)}
                count={count}
            />

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-[350px_1fr] lg:grid-rows-[auto_1fr] min-h-screen">
                {/* Desktop Sidebar */}
                <div className="row-span-2 border border-amber-100/10 bg-white/5">
                    <Sidebar count={count} />
                </div>

                {/* Desktop Main Content */}
                <div className="px-8">
                    <motion.div
                        className="min-h-screen border-2 border-t-0 rounded-xl rounded-t-none border-white/10 bg-white/5 p-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        {children}
                    </motion.div>
                </div>

                {/* Desktop Navigation */}
                <DesktopNavigation count={count} pathname={pathname} hovered={hovered}
                    setHovered={setHovered} />
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
                {/* Mobile Main Content */}
                <motion.div
                    className="min-h-screen px-1.5 py-1.5 pb-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div className="border border-white/10 bg-white/5 rounded-xl p-6">
                        {children}
                    </div>
                </motion.div>
            </div>

            {/* Bottom Navigation for Mobile */}
            <BottomNavigation count={count} pathname={pathname} hovered={hovered} setHovered={setHovered} />
        </main>

    );
}