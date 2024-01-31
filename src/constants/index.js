import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    aws,
    blockchain,
    portfolio,
    jobit,
    daycare,
    threejs,
    crd,
    getstech,
    sustanix,
    zypher,
  } from "../assets";
  
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Engineer",
      icon: web,
    },
    {
      title: "Backend Engineer",
      icon: backend,
    },
    {
      title: "Android Engineer",
      icon: mobile,
    },
    {
      title: "DevOps Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "aws",
      icon: aws,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Volunteer",
      company_name: "Abecedarian LLC",
      icon: getstech,
      iconBg: "#E6DEDD",
      date: "September 2023 - Present",
      points: [
        "Devised a Python bot to reduce manual effort by 70% enabling large downloads of AI generated images from discord to local storage.",
        "Crafted Python scripts to showcase AI generated content on social media platforms using REST API by automating the scheduling & content publishing.",
        "Gathered data from comments & reaction from social media posts to perform a sentiment analysis & increasing user engagement & reach using analytics by 15%.",
        "Incorporated Open AI API to create a custom GPT for university information using data scraped from web, Python, Beautiful Soup resulting in efficient information inquiry, and language localization."
      ],
    },
    {
      title: "Software Engineer Co-Op",
      company_name: "Charles River Development",
      icon: crd,
      iconBg: "#E6DEDD",
      date: "July 2022 - December 2022",
      points: [
        "Achieved a 30% reduction in build time by transitioning from Ant to Gradle build automation tool, ensuring data consistency & created pipeline to trigger builds on TeamCity from Gradle.",
        "Attained 60% reduction in installation & configuration time by introducing efficient & scalable Docker - based deployment process for software, surpassing traditional methods.",
        "Collaborated with cross-functional teams to identify and resolve XXE & DTD attacks, resulting in a decrease in security breaches from 8 to only 2 per month",
        "Successfully migrated 30+ windows batch scripts to bash scripts enabling company’s software to run on Linux environment inside Docker container.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Gets Technology",
      icon: getstech,
      iconBg: "#383E56",
      date: "March 2021 - May 2021",
      points: [
        "Spearheaded development of app from ideation to minimum viable product with a visually appealing design with Flutter using Dart & MongoDB, leading to successful Google Play Store launch.",
        "Assisted vendors in onboarding the app by creating instructional videos and documentation for better understanding & clarification of app flow & interactions.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Sustanix",
      icon: sustanix,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - April 2020",
      points: [
        "Developed and implemented advanced augmented reality (AR) models to showcase products, leading to a significant 30% increase in sales conversion for the company.",
        "Enhanced user experience by incorporating personalized design elements including hover-over tips and intuitive animations, resulting in an average increase of 10 seconds spent on the product per user session."
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Zypher",
      icon: zypher,
      iconBg: "#383E56",
      date: "May 2019 - July 2019",
      points: [
        "Developed key features for the app, delivering them ahead of schedule, resulting in a 20% increase in user engagement.",
        "Accelerated testing efficiency by automating unit tests, leading to a 60% time reduction and decreased reliance on manual intervention."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I highly recommend Sutiksh as a problem solver with excellent proficiency in Java and Python. His positive attitude and dedication make him  a valuable asset to any team. With a strong command of both Java and Python, Sutiksh consistently delivers effective solutions and demonstrates a keen problem-solving mindset. His collaborative approach and commitment to excellence make him an ideal candidate for any project or team.",
      name: "Rajesh Patibandla",
      designation: "Lead Software Engineer & Vice President",
      company: "Wellington Management",
    },
    {
      testimonial:
      "Sutiksh Verma, during his tenure as a Software Engineer Co-op at State Street, demonstrated exceptional skills in developing high-quality and robust solutions. He successfully tackled challenges by learning new technologies and showcased proficiency, particularly in Docker containerization and Gradle automation scripting. Sutiksh's contributions included upgrading the project's build framework and developing core functionalities, highlighting his expertise in Java and MS SQL. His ability to collaborate with cross-functional teams and effectively communicate technical details to non-technical stakeholders makes him a valuable asset for any software engineering team.",
      name: "Anuj Thakur",
      designation: "Senior Software Engineer II",
      company: "Charles River Development",
    },
    {
      testimonial:
        "Sutiksh is highly skilled and experienced in web development. He has a deep understanding of web technologies and is always up-to-date on the latest trends.",
      name: "Kshitij Verma",
      designation: "SDE",
      company: "Amazon"
    }
  ];
  
  const projects = [
    {
      name: "3D Portfolio",
      description:
        "A 3D portfolio website developed using React.Js, Three.Js, TailwindCSS.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://www.github.com/Sutiksh27/ThreeJsPortfolio",
    },
    {
      name: "Husky Works",
      description:
        "Web-based job portal for Northeastern University students to find internships and full time jobs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://www.github.com/Sutiksh27/HuskyWorks",
    },
    {
      name: "Vaccination Tracking System",
      description:
        "A java based software application to track vaccination status of children in different classes at a school.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "swing",
          color: "pink-text-gradient",
        },
      ],
      image: daycare,
      source_code_link: "https://www.github.com/Sutiksh27/DayCare",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };