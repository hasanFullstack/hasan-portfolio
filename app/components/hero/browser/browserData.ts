export interface Project {
  id: number;
  title: string;
  subtitle: string;
  url: string;
  image: string;
  technologies: string[];
  live: string;
  github: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AutoSheet.io",
    subtitle:
      "Professional estimating platform with Stripe payments and assignment workflow.",
    url: "https://autosheet.io",
    image: "/projects/autosheet.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Stripe",
    ],
    live: "https://autosheet.io",
    github: "https://github.com/yourusername/autosheet",
  },

  {
    id: 2,
    title: "Disease Prediction AI",
    subtitle:
      "Machine learning system that predicts diseases and recommends medication, diet and workouts.",
    url: "https://ai.hasan.dev",
    image: "/projects/disease-ai.png",
    technologies: [
      "Python",
      "Flask",
      "Scikit-Learn",
      "Pandas",
    ],
    live: "#",
    github: "#",
  },

  {
    id: 3,
    title: "E-Commerce App",
    subtitle:
      "Modern Flutter shopping application connected with Firebase.",
    url: "https://shop.hasan.dev",
    image: "/projects/ecommerce.png",
    technologies: [
      "Flutter",
      "Firebase",
      "Provider",
    ],
    live: "#",
    github: "#",
  },

  {
    id: 4,
    title: "Hostel Management",
    subtitle:
      "Cross-platform hostel booking and management solution.",
    url: "https://hostel.hasan.dev",
    image: "/projects/hostel.png",
    technologies: [
      "React",
      "Node",
      "MongoDB",
    ],
    live: "#",
    github: "#",
  },
];