import { Heading } from '@/components/ui/heading';
import { Paragraph } from '@/components/ui/paragraph';
import React from 'react';

const Home = (): React.ReactElement => {
	return (
		<>
			<section className="m-10">
				<Heading size={'display'} color={'gradient'}>
					heading display
				</Heading>

				<Heading size={'h1'} color={'blue'}>
					heading one
				</Heading>
				<Heading size={'h2'} color={'accent'}>
					heading one
				</Heading>
				<Heading size={'h3'} color={'accent'}>
					heading one
				</Heading>
				<Heading size={'h4'} color={'accent'}>
					heading one
				</Heading>
				<Heading size={'h5'} color={'accent'}>
					heading one
				</Heading>
				<Heading size={'h6'} color={'accent'}>
					heading one
				</Heading>

				<Paragraph>
					This is a default paragraph for general content. It’s clean, readable,
					and responsive.
				</Paragraph>

				<Paragraph size="xl" weight="medium" color="subtle">
					Subtle and slightly larger paragraph for light emphasis or muted
					notes.
				</Paragraph>

				<Paragraph size="lg" weight="bold" color="accent">
					Strong call-to-action or highlighted message.
				</Paragraph>
			</section>
		</>
	);
};

export default Home;
