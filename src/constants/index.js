import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    az900, 
    spring,
    haravan,
    nois,
    udemySpring,
    codecademy,
    mspanda,
    portfolio,
    todoapp,
    java_svg,
    ecommerce,
    hotelbooking
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "experience",
      title: "Experience",
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Azure Cloud",
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
      name: "React JS",
      icon: reactjs,
    }, 
    {
      name: "Java",
      icon: java_svg,
    },
    {
      name: "Spring",
      icon: spring,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
  ];
  
  const experiences = [
    {
      title: "Product Marketing",
      company_name: "Haravan",
      icon: haravan,
      iconBg: "#ffffff",
      date: "Aug 2021 - Sep 2022",
      points: [
        "Collaborate with the development and marketing teams to get product insight, and create Go-to-Market strategy, positioning & messaging.",
        "Monitor and manage customer data participating in the Beta-testing program.",
        "Produce resources: user guide, promotion program rules, email marketing campaign, sale kits, and internal training.",
        "Weekly Report on product marketing success for the Head of Product and Facebook team.",
      ],
    },
    {
      title: "Marketing Executive",
      company_name: "New Ocean IS Co., Ltd",
      icon: nois,
      iconBg: "#E6DEDD",
      date: "Mar 2020 - Jun 2021",
      points: [
        "Produce content marketing for online channels: Facebook, LinkedIn, and company website.",
        "Build company website and product landing page with WordPress.",
        "Design, order printing, and manage promotion materials (brochure, standee).",
        "Coordinate with related departments to plan, design booths, and participate in seminars, business exhibitions, and job fairs.",
        "Collaborate with a marketing agency to create a new brand identity and company profile."
      ],
    }
  ];
  
  const certifications = [
    {
      name: "Microsoft Azure - AZ900",
      time: "Aug 2023",
      image: az900,
      link: "https://learn.microsoft.com/api/credentials/share/en-us/VoTraMy/160D166F66CD4367?sharingId=C47A113A2E9A47FE"
    },
    {
      name: "Udemy - Spring Framework",
      time: "Sep 2023",
      image: udemySpring,
      link: "https://www.udemy.com/certificate/UC-b6cd00b0-d97f-473c-b1d8-1ac687f03a34/"
    },
    {
      name: "Codecademy - Java course",
      time: "Mar 2023",
      image: codecademy,
      link: "https://www.codecademy.com/profiles/mysoi-2512/certificates/d3f89367b558583e361640f778191345"
    }
  ];
  
  const projects = [
    {
      name: "Hotel Booking App",
      description:
        "Full stack Hotel Booking app with Spring, Spring Boot, Spring Security, ReactJS, MySQL: User Authentication and Authorization, Room Listing and Filtering, Room Booking, User Profile, and Admin Panel.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "spring",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        }
      ],
      image: hotelbooking,
      demo_link: "https://github.com/mysoi-2512/hotelbooking-client",
      source_code_link: "https://github.com/mysoi-2512/hotelbooking-server",
    },
    {
      name: "Ecommerce Web",
      description:
        "Full stack Ecommerce Application with Spring Boot, Angular, Restful API, MySQL with features such as: Authentication with Okta, Checkout & Credit Card processing with Stripe, Orders History, HTTPS",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "spring",
          color: "green-text-gradient",
        },
        {
          name: "okta",
          color: "pink-text-gradient",
        },
        {
          name: "stripe",
          color: "orange-text-gradient",
        }
      ],
      image: ecommerce,
      demo_link: "https://github.com/mysoi-2512/ecommerce-angular",
      source_code_link: "https://github.com/mysoi-2512/ecommerce-spring",
    },    
    {
      name: "English Class",
      description:
        "Static web that help introduce my sister's English class, enable user to see her background and the details of her courses",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "netlify",
          color: "pink-text-gradient",
        },
      ],
      image: mspanda,
      demo_link: "https://mspanda.netlify.app/",
      source_code_link: "https://github.com/mysoi-2512/mspanda.edu.vn",
    }
  ];
  
  export { services, technologies, experiences, certifications, projects };