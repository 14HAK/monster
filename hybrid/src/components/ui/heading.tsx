// components/ui/heading.tsx
import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';

const heading = cva('font-bold tracking-tight', {
	variants: {
		size: {
			h1: 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
			h2: 'text-3xl md:text-4xl lg:text-5xl',
			h3: 'text-2xl md:text-3xl lg:text-4xl',
			h4: 'text-xl md:text-2xl',
			h5: 'text-lg md:text-xl',
			h6: 'text-base md:text-lg',
			display: 'text-6xl md:text-7xl font-extrabold leading-tight',
		},
		color: {
			default: 'text-foreground',
			accent: 'text-primary',
			subtle: 'text-muted-foreground',
			gradient:
				'bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text',
			blue: 'text-blue-600',
		},
	},
	defaultVariants: {
		size: 'h2',
		color: 'default',
	},
});

interface HeadingProps
	extends Omit<HTMLAttributes<HTMLHeadingElement>, 'color'>,
		VariantProps<typeof heading> {}

export function Heading({ className, size, color, ...props }: HeadingProps) {
	return <h2 className={cn(heading({ size, color }), className)} {...props} />;
}
