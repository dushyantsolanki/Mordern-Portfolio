'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { NumberTicker } from './NumberTiker';


const ProfileCounter = ({ count }: { count: number }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show the counter when component mounts
        setIsVisible(true);

        // Hide after 3 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="lg:hidden flex justify-end">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        className="text-center relative z-[1000] top-2 w-[100px] text-2xl bg-black/20 backdrop-blur-3xl border border-white/20 rounded-full rounded-r-none py-2 px-4 shadow-2xl"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut"
                        }}
                    >
                        <NumberTicker value={count} format="youtube" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProfileCounter;