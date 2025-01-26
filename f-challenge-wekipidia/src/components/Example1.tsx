import React from 'react';

interface exampleProps {
	name: string;
	age: number;
}

const Example1 = ({ name, age }: exampleProps): React.ReactElement => {
	return (
		<>
			<h1>{name}</h1>
			<p>{age}</p>
		</>
	);
};

export default Example1;

// import React from 'react';

// interface exampleProps {
// 	name: string;
// 	age: number;
// }

// const Example1: React.FC<exampleProps> = ({ name, age }: exampleProps) => {
// 	return (
// 		<>
// 			<h1>{name}</h1>
// 			<p>{age}</p>
// 		</>
// 	);
// };

// export default Example1;
