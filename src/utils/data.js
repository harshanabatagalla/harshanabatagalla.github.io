import { assets } from "../assets/assets";

export const Base_Path = "";

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
      title: "ZELVIRA",
      description: "An e-commerce platform built using the MERN stack. Implemented features for users to browse, filter, and sort products, select variants like size, and add items to their cart. Developed a seamless checkout process, allowing users to provide delivery details and choose between Cash on Delivery or online payment options.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      githubUrl: "https://github.com/harshanabatagalla/ZELVIRA",
      image: assets.zelvira
    },
    {
      id: 2,
      title: "Umbrella Go",
      description: "A front-end weather application that fetches weather data from the OpenWeatherMap API and displays it to the user. Users can search for weather data by city name and view the current weather, temperature, wind speed and humidity levels, as well as the weather forecast for the next 16 days",
      technologies: ["React", "Material UI", "OpenWeatherMap API"],
      githubUrl: "https://github.com/harshanabatagalla/umbrellaGo",
      liveUrl: "https://umbrellago.netlify.app/",
      image: assets.umbrellaGo
    },
    {
      id: 3,
      title: "Journey Jive",
      description: "This project aims to develop a travel planning system that optimizes multi-destination trips by minimizing travel distances. It includes features such as real-time weather updates, future forecasts, and a trip-scoring system based on user reviews. Suggests nearby places of interest, enhancing the overall travel experience.",
      technologies: ["React", "NodeJs", "MySQL", "Express", "Material UI"],
      githubUrl: "https://github.com/harshanabatagalla/journey-jive",
      image: assets.journeyJive
    },
    {
      id: 4,
      title: "My Portfolio",
      description: "A personal portfolio website that showcases my work, skills, and experiences. The website is built using React, Tailwind CSS, and Vite, with EmailJS integrated for the contact form. It is designed to be fully responsive, optimized for all devices, and SEO-friendly. The website's design is inspired by the VS Code theme, giving it a sleek and modern developer-friendly aesthetic",
      technologies: ["React", "NodeJs", "MySQL", "Express", "Material UI"],
      githubUrl: "https://github.com/harshanabatagalla/portfolio",
      image: assets.portfolio
    }
  ];

  export const testimonials = [
    {
      id: 1,
      name: "Pasindu Gunathilake",
      position: "Associate Technical Lead",
      company: "99x",
      text: "During Harshana's internship at 99x, I had the opportunity to observe his work in website development. Even in a short time, Harshana demonstrated an impressive ability to quickly adapt to new projects and technologies.</br></br>What stood out most about Harshana was his exceptional adaptability and eagerness to learn. He effectively managed website content development tasks, showing a keen eye for detail and a good grasp of user experience principles.</br></br>Colleagues often remarked on Harshana's friendly demeanor and supportive attitude, which contributed positively to the team dynamic. His ability to quickly understand and contribute to projects was remarkable.</br></br>Any team would benefit from Harshana's blend of technical aptitude, quick learning ability, and excellent interpersonal skills. I wholeheartedly recommend him for any role in web development or content management. He has a bright future ahead in the tech industry, and I look forward to seeing his continued growth and success.",
      avatar: assets.pasinduG
    },
    {
      id: 2,
      name: "Prasad Srimal",
      position: "Technical Lead ",
      company: "Tech Venturas",
      text: "Harshana's dedication and passion for technology were evident from the moment he embarked on his journey in the IT field. <br/><br/>During his tenure at the university, Harshana undertook a project that truly showcased his skills and innovative thinking. He spearheaded the development of a cutting-edge travel planning system, which not only optimized multi-destination trips by minimizing travel distances but also incorporated real-time weather updates and future forecasts. His commitment to delivering excellence was apparent in every aspect of the project, from its conceptualization to its execution.<br/><br/>One of Harshana's key contributions to the project was his role in implementing the weather forecast feature. His meticulous attention to detail ensured that users received accurate and timely updates, thereby enhancing their overall travel experience. Additionally, Harshana played a pivotal role in suggesting tourist attractions based on user preferences, further enriching the functionality of the system.<br/><br/>What truly sets Harshana apart is his ability to combine technical expertise with a keen understanding of user needs. His proactive approach to problem-solving and his unwavering dedication to delivering results make him a valuable asset to any team. Harshana's enthusiasm for technology, coupled with his strong work ethic, makes him an exceptional individual who is destined to excel in the field of IT. <br/><br/>It is without hesitation that I recommend Harshana for any future endeavors he may pursue. His talent, professionalism, and drive for excellence make him a standout candidate, and I am confident that he will continue to achieve great success in his career.",
      avatar: assets.prasad
    },
    {
      id: 3,
      name: "Chrishan de Mel",
      position: "Chief Marketing and Corporate Affairs Officer",
      company: "99x",
      text: "Harshana provided excellent support on enhancements for the 99x.io website. He was proactive in understanding the requirement, sought clarifications and communicated progress. He was focused on getting the job done and in terms of quality, getting it right first time. I appreciate Harshana's contribution and wish him every success in the next steps of his career. All the very best!",
      avatar: assets.chrishanD
    },
    {
      id: 4,
      name: "Shehan Cooray",
      position: "Senior Digital Marketing Executive",
      company: "99x",
      text: "Harshana contributed to the 99x corporate website technical activities during his internship, and as a person who had to work alongside with him and overlook a few of the tasks that were handed to him, He did a splendid job at abiding to his deadlines and overall communication on the status of said tasks. Harshana is a self studying individual and I'm pleased to have had him on our team.",
      avatar: assets.shehan
    }
  ];