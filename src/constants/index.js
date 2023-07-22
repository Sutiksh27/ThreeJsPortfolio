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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Co-Op",
      company_name: "Charles River Development",
      icon: crd,
      iconBg: "#E6DEDD",
      date: "July 2022 - December 2022",
      points: [
        "Implemented Gradle as the company's build automation tool, resulting in a 30% increase in build speed by converting XML scripts to Groovy scripts, leveraged online documentation to increase operating efficiency.",
        "Successfully containerized company's projects in Docker, reducing install time by 50% on new releases; created small demos, and leveraged documentation Stack Overflow for guidance.",
        "Optimized company's security, minimizing XXE & DTD attacks, reduced security breaches, identified affected files, applied code modifications to prevent parser vulnerabilities, collaborated with the security team.",
        "Collaborated with a team of 50 SCRUM members to utilize agile methodologies by consistently achieving sprint targets with an average velocity of 3 story points.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Gets Technology",
      icon: getstech,
      iconBg: "#383E56",
      date: "March 2021 - May 2021",
      points: [
        "Collaborated with 5 design team members to implement designs for the Homepage, Login, Onboarding, Payment, Delivery and Cart and provided input for UX improvements resulting in a 25% increase in UX.",
        "Optimized the development process by implementing the MVC (Model-View-Controller) architecture, resulting in a 10% increase in efficiency and organization streamlining.",
        "Created onboarding procedures for 30+ sellers to understand the platform resulting in 15% user growth.",
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
        "Sutiksh is highly skilled and experienced in web development. He has a deep understanding of web technologies and is always up-to-date on the latest trends.",
      name: "Kshitij Verma",
      designation: "SDE",
      company: "Amazon",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Sutiksh does.",
      name: "Vedant Jain",
      designation: "SDE",
      company: "Amazon",
    },
    {
      testimonial:
        "Sutiksh is a pleasure to work with. He is always responsive to our feedback and is always willing to help us understand the technical aspects of our projects.!",
      name: "Virender Singh",
      designation: "Data Scientist",
      company: "Salesforce",
    },
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