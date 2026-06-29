export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "social",
		title: "Social",
	},
	{
		id: "contact",
		title: "Contact",
	},
];


const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
  {
    title: "Freelance Full Stack & WordPress Developer",
    company_name: "Self-Employed",
    icon: "/company/freelance.webp",
    iconBg: "#2563EB",
    date: "2022 - Present",
    points: [
      "Delivered custom websites, eCommerce stores, and web applications for clients across Canada, Pakistan, India, and the Middle East.",
      "Developed modern applications using Next.js, React, Node.js, WordPress, WooCommerce, Tailwind CSS, and REST APIs.",
      "Integrated payment gateways, booking systems, automation workflows, and third-party APIs to meet business requirements.",
      "Managed complete project lifecycles including UI/UX design, development, deployment, hosting, maintenance, SEO, and ongoing support.",
    ],
  },
{
    title: "Software Developer",
    company_name: "WayForward IT",
    icon: "/company/wayforward.jfif",
    iconBg: "#0F172A",
    date: "2024 - Present",
    points: [
      "Developing and maintaining enterprise websites and custom business solutions for international clients.",
      "Working extensively with Next.js, WordPress, WooCommerce, custom APIs, and modern frontend technologies.",
      "Optimizing website performance, SEO, security, hosting infrastructure, and overall user experience.",
      "Collaborating with cross-functional teams to deliver scalable, maintainable, and high-quality software solutions.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Octaloop Technologies",
    icon: "/company/octaloop.png",
    iconBg: "#111827",
    date: "2024",
    points: [
      "Built and maintained scalable web applications using modern JavaScript frameworks and backend technologies.",
      "Collaborated with designers, developers, and project managers to deliver production-ready solutions.",
      "Implemented responsive user interfaces, optimized application performance, and resolved production issues.",
      "Participated in feature planning, code reviews, testing, and deployment following industry best practices.",
    ],
  },

  
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
		name: "Hasan",
		image: "/socialmedia/behance.svg",
		link: "https://www.behance.net/omthecreator",
	},
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Hasan",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/om-patel-401068143/",
	},
	{
		id: 3,
		testimonial:
			"Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
		name: "Hasan",
		image: "/socialmedia/dribble.svg",
		link: "https://dribbble.com/om2121",
	},
	{
		id: 4,
		testimonial:
			"Also do check out my UI/UX Portfolio where I have shared by design studies.",
		name: "Hasan",
		image: "/socialmedia/portfolio.svg",
		link: "https://omthecreator.netlify.app/",
	},
	{
		id: 5,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Hasan",
		image: "/tech/github.webp",
		link: "https://github.com/omunite215",
	},
];


const projects: {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link?: string;
  deploy_link: string;
  platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web";
}[] = [
  {
    name: "IntelliStay",
    description:
      "An AI-powered MERN hotel management platform featuring intelligent booking recommendations, modern dashboard analytics, authentication, and scalable full-stack architecture.",
    tags: [
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "orange-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: "/projectimg/Intellistay.png",
    deploy_link: "https://intellistay-frontend-5m9p.vercel.app/",
    platform: "Vercel",
  },

  {
    name: "Majlis",
    description:
      "A Reddit-inspired social platform built with the MERN stack featuring communities, posts, comments, user authentication, and real-time interactions for the Qatar market.",
    tags: [
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: "/projectimg/Majlis.png",
    deploy_link: "https://majlis.com",
    platform: "Web",
  },

  {
    name: "HALIR Perfumery",
    description:
      "A modern Next.js eCommerce platform built for a premium perfume brand featuring responsive UI, product catalog, optimized performance, and seamless shopping experience.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "eCommerce",
        color: "pink-text-gradient",
      },
    ],
    image: "/projectimg/Halir.png",
    deploy_link: "https://www.halirperfumerypk.com/",
    platform: "Web",
  },

  {
    name: "V-LAW",
    description:
      "A professional WordPress website developed for a Canadian law firm, providing legal service information, consultation booking, and an optimized responsive user experience.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "Elementor",
        color: "orange-text-gradient",
      },
      {
        name: "SEO",
        color: "green-text-gradient",
      },
    ],
    image: "/projectimg/Vlaw.png",
    deploy_link: "https://v-law.ca/",
    platform: "Wordpress",
  },

  {
    name: "A.V.M Auto",
    description:
      "A complete business website for an automobile service company featuring custom WordPress development, multilingual support, SEO optimization, and lead generation.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "SEO",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "orange-text-gradient",
      },
    ],
    image: "/projectimg/avm.png",
    deploy_link: "https://avmauto.in/",
    platform: "Wordpress",
  }
];

export {  technologies, experiences, testimonials, projects };
