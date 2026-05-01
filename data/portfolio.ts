// data/portfolio.ts
export const personalInfo = {
  name: "Lindita Morina",
  title: "Software Engineer & Web Developer",
  email: "linditamorinna@gmail.com",
  github: "https://github.com/linditamorina",
  phone: "+383 45 883 994",
  location: "Mitrovice, Kosovo",
  about: "Final-year Computer Science and Engineering student focused on web and application development. Experienced in building practical projects and continuously improving skills through self-driven learning. Comfortable using AI tools to enhance development, problem-solving, and productivity." //
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export const skills = ["JavaScript", "ReactJs", "React Native", "NextJs", "Python", "SQL"]; //

export const projects = [
  {
    title: "PostoAi",
    description: "An AI-powered marketing automation platform built with Next.js and Supabase. Integrated OpenAI to generate comprehensive social media plans, captions, and visual assets based on business data.", //[cite: 1]
    tech: ["Next.js", "Supabase", "OpenAI"],
    github: "https://github.com/linditamorina",
    liveDemo: "https://posto-ai-nine.vercel.app/" // Added specific URL[cite: 1]
  },
  {
    title: "MedSearch - Mobile Medication Manager",
    description: "Cross-platform application using React Native and Supabase that integrates the OpenFDA API to provide real-time medication data and personal schedule management.", //[cite: 1]
    tech: ["React Native", "Supabase", "OpenFDA API"],
    github: "https://github.com/linditamorina/MedSearch",
    liveDemo: null 
  },
  {
    title: "Expenses Tracker",
    description: "A mobile application built with React Native and Expo for tracking daily expenses. Features include data visualization through charts and category-based filtering.", //[cite: 1]
    tech: ["React Native", "Expo", "Charts"],
    github: "https://github.com/linditamorina/ExpensesTracker",
    liveDemo: null
  }
];

export const experience = [
  {
    role: "Programming Instructor",
    company: "Pro English Center",
    period: "04.2025 - 07.2025",
    description: "Taught students from the 3rd to the 9th grade with a focus on hands-on coding and practical projects. Guided the class toward building a real-world JavaScript project." //[cite: 1]
  }
];