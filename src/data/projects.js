export const projects = [
  {
    id: 1,
    title: "Fashion Collection Website",
    shortDescription: "E-commerce platform with cart & payment integration",
    description:
      "A complete e-commerce platform for fashion products featuring user authentication, product catalog with advanced filters, shopping cart functionality, wishlist feature, and secure payment gateway integration using Stripe/Razorpay. Includes admin dashboard for product and order management.",
    image: "public/assets/images/projects/FashionCollection.png",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TailwindCSS",
      "JWT",
      "Stripe",
    ],
    category: "Web Development",
    liveLink: "https://fashioncollection.vercel.app/",
    githubLink: "https://github.com/muskan1024/FashionCollection",
    features: [
      "User authentication with JWT tokens",
      "Product catalog with filters (category, price, size, color)",
      "Shopping cart and wishlist functionality",
      "Secure payment integration (Stripe/Razorpay)",
      "Order tracking and history",
      "Admin dashboard for product management",
      "Responsive design for all devices",
      "Image optimization and lazy loading",
    ],
    challenges:
      "Implementing secure payment gateway integration and managing complex state for cart operations across multiple components.",
    technologies: {
      frontend: ["React", "TailwindCSS", "React Router", "Context API"],
      backend: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      deployment: ["Vercel", "MongoDB Atlas"],
      other: ["JWT", "Bcrypt", "Stripe API"],
    },
    featured: true,
    year: 2024,
  },
  {
    id: 2,
    title: "GearUp E-commerce",
    shortDescription: "Full-featured e-commerce with admin panel",
    description:
      "Comprehensive e-commerce application with a powerful admin dashboard for managing inventory, orders, and users. Features include real-time inventory tracking, order status management, sales analytics, and multi-vendor support.",
    image: "public/assets/images/projects/GearUp.png",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Redux", "Chart.js"],
    category: "Web Development",
    liveLink: "https://gearup-in.vercel.app/",
    githubLink: "https://github.com/muskan1024/GearUp",
    features: [
      "Advanced admin panel with analytics",
      "Real-time inventory management",
      "Order status tracking (pending, processing, shipped, delivered)",
      "Sales dashboard with charts and graphs",
      "Multi-vendor support",
      "Product reviews and ratings",
      "Email notifications for orders",
      "Advanced search and filtering",
    ],
    challenges:
      "Building a scalable admin panel with real-time updates and complex analytics visualizations.",
    technologies: {
      frontend: ["React", "Redux", "Chart.js", "TailwindCSS"],
      backend: ["Node.js", "Express.js", "MongoDB"],
      deployment: ["Vercel", "Render"],
      other: ["Nodemailer", "Socket.io"],
    },
    featured: true,
    year: 2024,
  },
  {
    id: 3,
    title: "Blogging Platform",
    shortDescription: "Multi-user blogging with rich text editor",
    description:
      "A feature-rich blogging platform allowing multiple users to create, edit, and publish blog posts with a rich text editor. Includes comment system, category management, user profiles, and social sharing capabilities.",
    image: "/assets/images/projects/blog.jpg",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Quill.js", "JWT"],
    category: "Web Development",
    liveLink: "https://myblog-platform.vercel.app",
    githubLink: "https://github.com/yourusername/blog-platform",
    features: [
      "Rich text editor for blog posts (Quill.js)",
      "User authentication and authorization",
      "Comment system with nested replies",
      "Category and tag management",
      "User profiles with bio and social links",
      "Like and bookmark functionality",
      "Social media sharing integration",
      "SEO-friendly URLs and meta tags",
      "Search functionality",
      "Draft and publish workflow",
    ],
    challenges:
      "Implementing a robust rich text editor with image uploads and creating an efficient comment threading system.",
    technologies: {
      frontend: ["React", "Quill.js", "React Router", "Context API"],
      backend: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      deployment: ["Vercel", "MongoDB Atlas"],
      other: ["JWT", "Cloudinary", "Multer"],
    },
    featured: true,
    year: 2023,
  },
  // {
  //   id: 4,
  //   title: "CI/CD Pipeline with Jenkins",
  //   shortDescription: "Automated deployment pipeline for web applications",
  //   description:
  //     "Implemented a complete CI/CD pipeline using Jenkins for automated testing, building, and deployment of web applications. Includes Docker containerization, automated testing, and deployment to cloud platforms.",
  //   image: "/assets/images/projects/cicd.jpg",
  //   techStack: [
  //     "Jenkins",
  //     "Docker",
  //     "GitHub Actions",
  //     "AWS",
  //     "Kubernetes",
  //     "Nginx",
  //   ],
  //   category: "DevOps",
  //   liveLink: null,
  //   githubLink: "https://github.com/yourusername/cicd-pipeline",
  //   features: [
  //     "Automated build and test pipeline",
  //     "Docker containerization of applications",
  //     "Multi-stage builds for optimization",
  //     "Automated deployment to AWS EC2",
  //     "Kubernetes orchestration",
  //     "Rolling updates with zero downtime",
  //     "Automated rollback on failures",
  //     "Slack/Email notifications for build status",
  //     "Environment-specific configurations (dev, staging, prod)",
  //   ],
  //   challenges:
  //     "Configuring complex multi-stage pipelines and ensuring zero-downtime deployments.",
  //   technologies: {
  //     cicd: ["Jenkins", "GitHub Actions", "GitLab CI"],
  //     containers: ["Docker", "Docker Compose", "Kubernetes"],
  //     cloud: ["AWS EC2", "AWS S3", "AWS ECR"],
  //     other: ["Nginx", "Shell Scripting", "YAML"],
  //   },
  //   featured: true,
  //   year: 2024,
  // },
  // {
  //   id: 5,
  //   title: "Infrastructure as Code - Terraform",
  //   shortDescription: "AWS infrastructure provisioning with Terraform",
  //   description:
  //     "Automated AWS infrastructure provisioning using Terraform. Created reusable modules for VPC, EC2, RDS, S3, and Load Balancers. Implemented infrastructure versioning and state management.",
  //   image: "/assets/images/projects/terraform.jpg",
  //   techStack: ["Terraform", "AWS", "Ansible", "Bash", "Git"],
  //   category: "DevOps",
  //   liveLink: null,
  //   githubLink: "https://github.com/yourusername/terraform-aws",
  //   features: [
  //     "Modular Terraform code for reusability",
  //     "VPC setup with public and private subnets",
  //     "Auto-scaling groups for EC2 instances",
  //     "Application Load Balancer configuration",
  //     "RDS database provisioning",
  //     "S3 buckets with lifecycle policies",
  //     "IAM roles and policies",
  //     "Remote state management with S3 backend",
  //     "Multi-environment support (dev, staging, prod)",
  //     "Configuration management with Ansible",
  //   ],
  //   challenges:
  //     "Managing Terraform state across multiple environments and implementing proper security configurations.",
  //   technologies: {
  //     iac: ["Terraform", "Ansible"],
  //     cloud: ["AWS VPC", "AWS EC2", "AWS RDS", "AWS S3", "AWS ALB"],
  //     other: ["Bash", "Git", "YAML"],
  //   },
  //   featured: false,
  //   year: 2024,
  // },
  // {
  //   id: 6,
  //   title: "Containerized Microservices",
  //   shortDescription: "Docker & Kubernetes microservices architecture",
  //   description:
  //     "Developed a microservices-based application with Docker containers and Kubernetes orchestration. Includes service discovery, load balancing, and monitoring.",
  //   image: "/assets/images/projects/microservices.jpg",
  //   techStack: [
  //     "Docker",
  //     "Kubernetes",
  //     "Node.js",
  //     "MongoDB",
  //     "Redis",
  //     "Prometheus",
  //     "Grafana",
  //   ],
  //   category: "DevOps",
  //   liveLink: null,
  //   githubLink: "https://github.com/yourusername/microservices",
  //   features: [
  //     "Multiple microservices (user, product, order, payment)",
  //     "Docker containerization for each service",
  //     "Kubernetes deployment with Helm charts",
  //     "Service mesh with Istio",
  //     "API Gateway for routing",
  //     "Redis for caching",
  //     "MongoDB for data persistence",
  //     "Prometheus & Grafana monitoring",
  //     "Horizontal pod autoscaling",
  //     "Health checks and readiness probes",
  //   ],
  //   challenges:
  //     "Designing inter-service communication and implementing effective monitoring across multiple services.",
  //   technologies: {
  //     containers: ["Docker", "Kubernetes", "Helm"],
  //     backend: ["Node.js", "Express.js"],
  //     database: ["MongoDB", "Redis"],
  //     monitoring: ["Prometheus", "Grafana", "ELK Stack"],
  //     other: ["Istio", "Nginx Ingress"],
  //   },
  //   featured: false,
  //   year: 2024,
  // },
];

// Filter functions
export const getProjectsByCategory = (category) => {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

export const getProjectById = (id) => {
  return projects.find((project) => project.id === parseInt(id));
};

// Categories
export const PROJECT_CATEGORIES = ["All", "Web Development", "DevOps", "AI/ML"];
