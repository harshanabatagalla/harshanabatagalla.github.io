
// Category colors mapping
export const categoryColors = {
  "Frontend Technologies": "#61DAFB", // React blue
  "Backend Technologies": "#68A063", // Node.js green
  "Programming Languages": "#F7DF1E", // JavaScript yellow
  "Database": "#4DB33D", // MongoDB green
  "Other Tools": "#E535AB" // GraphQL pink
};
export const techSkills = {
  "Frontend Technologies": [
    { name: "HTML5", borderColor: "#E34F26" },
    { name: "CSS3", borderColor: "#1572B6" },
    { name: "React", borderColor: "#61DAFB" },
    { name: "Angular", borderColor: "#DD0031" },
    { name: "Vite", borderColor: "#646CFF" },
    { name: "Gatsby", borderColor: "#663399" },
    { name: "Next.js", borderColor: "#0070f3" },
    { name: "Bootstrap", borderColor: "#7952B3" },
    { name: "MaterialUI", borderColor: "#0081CB" },
    { name: "Tailwind", borderColor: "#06B6D4" },
    { name: "Sass", borderColor: "#CC6699" },
    { name: "GraphQL", borderColor: "#E535AB" }
  ],
  "Backend Technologies": [
    { name: "Node.js", borderColor: "#68A063" },
    { name: ".NET", borderColor: "#512BD4" }
  ],
  "Programming Languages": [
    { name: "JavaScript", borderColor: "#F7DF1E" },
    { name: "TypeScript", borderColor: "#3178C6" },
    { name: "Java", borderColor: "#007396" },
    { name: "Python", borderColor: "#3776AB" }
  ],
  "Database": [
    { name: "MongoDB", borderColor: "#4DB33D" },
    { name: "MySQL", borderColor: "#4479A1" },
    { name: "MSSQL", borderColor: "#CC2927" }
  ],
};
export const workExperiences = [
  {
    id: 1,
    company: "99x",
    position: "Trainee Software Engineer",
    duration: "January 2024 - August 2024",
    description: [
      "Joined a eight-month internship during my third year as an undergraduate.",
      "Contributed to the development of new features, including the homepage, and enhancements for the 99x official website, a CMS-based website built using Gatsby.",
      "Worked on the project portal of the company, a web application developed using Angular, .Net, and EF Core.",
      "Engaged in both front-end and back-end development of the project portal, gaining professional experience in Angular, .Net, EF Core, and SQL Server.",
      "Collaborated with cross-functional teams, including designers, product managers, marketing personnel, and other developers, to create high-quality products."
    ]
  }
];

export const educationData = [
  {
    id: 1,
    institution: "University of Moratuwa",
    degree: "BSc.(Hons.) in Information Technology",
    duration: "June 2021 - present",
    description: "Currently pursuing a BSc. (Hons.) in Information Technology, actively engaging in coursework and practical projects to enhance skills for impactful contributions in the dynamic tech industry."
  },
  {
    id: 2,
    institution: "St. Thomas' College, Matale",
    degree: "G.C.E. A/L (Physical Science Stream)",
    duration: "2017-2019",
    description: "Completed Advanced Levels with a Z score of 1.6323. Studied Physics, Combined Mathematics , and Information and Communication Technology as main subjects."
  },
  {
    id: 3,
    institution: "St. Thomas' College, Matale",
    degree: "G.C.E. O/L",
    duration: "2011 - 2016",
    description: "Completed with a score of 9 A-grades. My optional subjects were ICT, Goegraphy and Music."
  }
];

export const certifications = [
    {
      "title": "CCNA: Introduction to Networks",
      "organization": "Cisco",
      "year": 2023,
      "link": "https://www.credly.com/badges/bd03e517-e4d3-40a6-a8b6-d4f8705d4625"
    },
    {
      "title": "Web Design for Beginners",
      "organization": "University of Moratuwa",
      "year": 2023,
      "link": "https://drive.google.com/file/d/1TToo-9xdpOywF_G3zPCa0EHwHkRT0xuE/view?usp=sharing"
    },
    {
      "title": "SYSOUT 1.0",
      "organization": "IEEE Student Branch of SLIIT",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1IMCHEsdobg20pTQQPk7TIWWBjbKxZi1-/view?usp=sharing"
    },
    {
      "title": "CYBERHAT 1.0",
      "organization": "IEEE Computer Society of SLTC",
      "year": 2021,
      "link": "https://drive.google.com/file/d/1OvXY8yxzNC7kGKV2MAGV6LpRUnSvXUy0/view?usp=drivesdk"
    }
  ];
  
  export const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment processing.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://ecommerce-platform.example.com",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations. Uses OpenWeatherMap API for data.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "OpenWeatherMap API"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://weather-dashboard.example.com",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A task management application with features like task creation, assignment, due dates, and status tracking.",
      technologies: ["React", "Redux", "Firebase", "Material UI"],
      githubUrl: "https://github.com/yourusername/task-management",
      liveUrl: "https://task-management.example.com",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];