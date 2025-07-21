'use client';

import { useInView, useMotionValue, useSpring } from 'motion/react';
import { ComponentPropsWithoutRef, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface NumberTickerProps extends ComponentPropsWithoutRef<'span'> {
    value: number;
    startValue?: number;
    direction?: 'up' | 'down';
    delay?: number;
    decimalPlaces?: number;
    format?: 'default' | 'youtube';
}

// Helper for YouTube-style format (1.2K, 3.4M, 1.1B+)
function formatYouTubeViews(value: number): string {
    if (value >= 1_000_000_000) return (value / 1_000_000_000).toFixed(1) + 'B+';
    if (value >= 1_000_000) return (value / 1_000_000).toFixed(1) + 'M+';
    if (value >= 1_000) return (value / 1_000).toFixed(1) + 'K+';
    return Math.floor(value).toString();
}

export function NumberTicker({
    value,
    startValue = 0,
    direction = 'up',
    delay = 0,
    className,
    decimalPlaces = 0,
    format = 'default',
    ...props
}: NumberTickerProps) {
    const ref = useRef<HTMLSpanElement>(null);

    const motionValue = useMotionValue(direction === 'down' ? value : startValue);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    });

    const isInView = useInView(ref, { once: true, margin: '0px' });

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                motionValue.set(direction === 'down' ? startValue : value);
            }, delay * 1000);
            return () => clearTimeout(timer);
        }
    }, [motionValue, isInView, delay, value, direction, startValue]);

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current) {
                const numeric = Number(latest.toFixed(decimalPlaces));
                ref.current.textContent =
                    format === 'youtube'
                        ? formatYouTubeViews(numeric)
                        : Intl.NumberFormat('en-US', {
                            minimumFractionDigits: decimalPlaces,
                            maximumFractionDigits: decimalPlaces,
                        }).format(numeric);
            }
        });
    }, [springValue, decimalPlaces, format]);

    return (
        <span
            ref={ref}
            className={cn(
                'inline-block tabular-nums tracking-wider ',
                className
            )}
            {...props}
        >
            {format === 'youtube'
                ? formatYouTubeViews(startValue)
                : Intl.NumberFormat('en-US', {
                    minimumFractionDigits: decimalPlaces,
                    maximumFractionDigits: decimalPlaces,
                }).format(startValue)}
        </span>
    );
}
