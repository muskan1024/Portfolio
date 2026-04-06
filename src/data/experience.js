export const experiences = [
  {
    id: 1,
    title: "Master of Computer Application (AI & ML)",
    organization: "Amity University Online",
    location: "Noida",
    duration: "2024 - present",
    type: "education",
    description:
      "Specializing in Artificial Intelligence and Machine Learning with focus on Deep Learning, Natural Language Processing, and Cloud Computing. Currently in final semester working on capstone project involving deployment of ML models using containerization.",
    highlights: [
      // "CGPA: 8.5/10 (or your actual CGPA)",
      "Core subjects: Machine Learning, Deep Learning",
      "Final year project: Automated ML Model Deployment Pipeline",
      "Done a case on Artificial Intelligence - AI-Based Personalized Learning for Skill Development ",
    ],
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Machine Learning",
      "Deep Learning",
      "Cloud Computing",
    ],
    icon: "graduation",
    color: "bg-primary",
  },
  {
    id: 2,
    title: "DevOps Learning Journey",
    organization: "Self-Learning & Projects",
    location: "Remote",
    duration: "2024 - Present",
    type: "learning",
    description:
      "Intensive self-study and hands-on practice in DevOps tools and methodologies. Built multiple projects implementing CI/CD pipelines, infrastructure as code, containerization, and cloud deployments.",
    highlights: [
      "Mastered Docker and container orchestration with Kubernetes",
      "Implemented CI/CD pipelines using Jenkins and GitHub Actions",
      "Learned infrastructure provisioning with Terraform",
      "Deployed applications on AWS cloud platform",
      "Configured monitoring solutions with Prometheus & Grafana",
    ],
    skills: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "Terraform",
      "AWS",
      "Linux",
    ],
    icon: "rocket",
    color: "bg-secondary",
  },
  {
    id: 3,
    title: "Web Development Internship",
    organization: "Company Name (if applicable)",
    location: "City",
    duration: "Month Year - Month Year",
    type: "internship",
    description:
      "Worked as a web development intern, contributing to real-world projects and learning industry best practices. Collaborated with senior developers on building responsive web applications.",
    highlights: [
      "Developed responsive UI components using React",
      "Integrated REST APIs with frontend",
      "Participated in code reviews and agile sprints",
      "Learned version control and collaboration workflows",
    ],
    skills: ["React", "JavaScript", "REST API", "Git", "Agile"],
    icon: "briefcase",
    color: "bg-purple-600",
  },
  {
    id: 4,
    title: "Full Stack Website Developer",
    organization: "Freelance & Personal Projects",
    location: "Pune, India",
    duration: "2021 - Present",
    type: "work",
    description:
      "Developed and deployed 5+ full-stack web applications using MERN stack. Handled complete project lifecycle from requirement gathering to deployment. Focused on building scalable, user-friendly applications with modern tech stack.",
    highlights: [
      "Built 5+ production-ready web applications",
      "Fashion Collection e-commerce platform with payment integration",
      "GearUp e-commerce with advanced admin dashboard",
      "Multi-user blogging platform with rich text editor",
      "Deployed on Vercel and Github",
      "Implemented responsive designs for all devices",
    ],
    skills: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TailwindCSS",
      "Redux",
      "JWT",
      "HTML",
      "CSS",
    ],
    icon: "code",
    color: "bg-accent",
  },
  {
    id: 5,
    title: "Bachelor of Computer Application",
    organization: "D Y Patil Internation University",
    location: "Pune, Maharashtra",
    duration: "2021 - 2024",
    type: "education",
    description:
      "Completed Bachelor's degree in Computer Science/Information Technology with strong foundation in programming, algorithms, database management, and software engineering principles.",
    highlights: [
      "CGPA: 7.7/10 ",
      "Core subjects: Data Structures, Algorithms, DBMS, Operating Systems, Cloud Computing, AWS",
      "Build a full stack E-commerce website for final year project",
    ],
    skills: ["Java", "Python", "Data Structures", "Algorithms", "DBMS"],
    icon: "graduation",
    color: "bg-blue-600",
  },
];

// Note: If you don't have internship experience, you can remove entry #5 or replace with:
// - Open Source Contributions
// - Hackathon Participation
// - College Projects
// - Technical Community Involvement

// Filter functions
export const getExperiencesByType = (type) => {
  if (type === "all") return experiences;
  return experiences.filter((exp) => exp.type === type);
};

export const getEducation = () => {
  return experiences.filter((exp) => exp.type === "education");
};

export const getWorkExperience = () => {
  return experiences.filter(
    (exp) => exp.type === "work" || exp.type === "internship",
  );
};

// Timeline icons mapping
export const TIMELINE_ICONS = {
  education: "FaGraduationCap",
  work: "FaBriefcase",
  learning: "FaRocket",
  internship: "FaLaptopCode",
};
