import {
  ex,
  js,
  mongodb,
  native,
  react,
  three,
  node,
  next,
  figma,
  gsap,
  tailwind,
  others
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
	{
		title: 'Js & Ts',
		company_name: '',
		icon: js,
		iconBg: '#E6DEDD',
		date: '',
		points: [
			'Develope Javascript apps as my main programming language.',
			'Use of Typescript for big projects.',
		],
	},
	{
		title: 'React js',
		company_name: '',
		icon: react,
		iconBg: '#383E56',
		date: '',
		points: ['Use of React js as front-end.'],
	},
	{
		title: 'React Native',
		company_name: '',
		icon: native,
		iconBg: '#E6DEDD',
		date: '',
		points: [
			'Develope multi-platform apps for IOS, Android and Web with one single code.',
		],
	},
	{
		title: 'Three js',
		company_name: '',
		icon: three,
		iconBg: '#383E56',
		date: '',
		points: [
			'Develope interactive 3d websites with three js.',
			'Create and Edit 3d Models in Blender.',
		],
	},
	{
		title: 'Tailwindcss',
		company_name: '',
		icon: tailwind,
		iconBg: '#E6DEDD',
		date: '',
		points: ['Use of Tailwindcss utility classes for styles.'],
	},
	{
		title: 'Next js',
		company_name: '',
		icon: next,
		iconBg: '#383E56',
		date: '',
		points: ['Develope a full-stack app with Next js.'],
	},
	{
		title: 'Node js',
		company_name: '',
		icon: node,
		iconBg: '#E6DEDD',
		date: '',
		points: ['Develope a web server with the Node js runtime.'],
	},
	{
		title: 'Express js',
		company_name: '',
		icon: ex,
		iconBg: '#383E56',
		date: '',
		points: [
			'Use of minimal node js framework express js for back-end development.',
		],
	},
	{
		title: 'Databases',
		company_name: '',
		icon: mongodb,
		iconBg: '#E6DEDD',
		date: '',
		points: [
			'Work with different types of databases like mySql, MongoDB and etc.',
			'Use of famous ORMs like Sequelize, Prisma and Mongoose.',
		],
	},
	{
		title: 'Gsap',
		company_name: '',
		icon: gsap,
		iconBg: '#383E56',
		date: '',
		points: ['Create different powerful animations with Gsap.'],
	},
	{
		title: 'UI / UX',
		company_name: '',
		icon: figma,
		iconBg: '#E6DEDD',
		date: '',
		points: ['Figma', 'Photoshop', 'AdobeXD', 'Blender'],
	},
	{
		title: 'Others',
		company_name: '',
		icon: others,
		iconBg: '#E6DEDD',
		date: '',
		points: ['C++', 'Python', 'Rest', 'GraphQl'],
	},
]

export { experiences };
