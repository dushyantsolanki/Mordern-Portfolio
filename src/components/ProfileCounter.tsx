'use client';
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
    <div className="flex justify-end lg:hidden">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="relative top-2 z-[1000] w-[100px] rounded-full rounded-r-none border border-white/20 bg-black/20 px-4 py-2 text-center text-2xl shadow-2xl backdrop-blur-3xl"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
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
