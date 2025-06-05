// components/ui/paragraph.tsx
import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';

const paragraph = cva('leading-relaxed', {
	variants: {
		size: {
			default: 'text-base md:text-lg',
			sm: 'text-sm',
			lg: 'text-lg md:text-xl',
			xl: 'text-xl md:text-2xl',
		},
		weight: {
			normal: 'font-normal',
			medium: 'font-medium',
			bold: 'font-bold',
		},
		color: {
			default: 'text-foreground',
			subtle: 'text-muted-foreground',
			accent: 'text-primary',
			danger: 'text-red-600',
		},
	},
	defaultVariants: {
		size: 'default',
		weight: 'normal',
		color: 'default',
	},
});

interface ParagraphProps
	extends Omit<HTMLAttributes<HTMLParagraphElement>, 'color'>,
		VariantProps<typeof paragraph> {}

export function Paragraph({
	className,
	size,
	weight,
	color,
	...props
}: ParagraphProps) {
	return (
		<p
			className={cn(paragraph({ size, weight, color }), className)}
			{...props}
		/>
	);
}
