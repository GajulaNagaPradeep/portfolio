/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "GajulaNagaPradeep",
  logo_name: "Deep.u~",
  nickname: "deepu / picleric",
  full_name: "Nag pradeep Gajula",
  subTitle: "Software Engineer, Open Source Enthusiast 🔥. Always learning.",
  mail: "mailto:gajulapradeep7@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/GajulaNagaPradeep",
  linkedin: "https://www.linkedin.com/in/naga-pradeep-g-957412159/",
  gmail: "gajulapradeep7@gmail.com",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites and web applications using ReactJS, NodeJS, and NextJS",
        "⚡ Full-stack development with NodeJS, Express, Ruby on Rails, and KoaJS",
        "⚡ Creating application backends and APIs with NodeJS, KnexJS, and PostgreSQL",
        "⚡ Implementing micro front-end architecture with ReactJS and Angular",
        "⚡ Managing continuous integration and deployment pipelines with Jenkins and Docker",
        "⚡ Ensuring web accessibility standards (WCAG, ADA) with tools like AXE, NVDA, and JAWS",
        "⚡ Leveraging cloud services and APIs such as AWS SQS, Tealium, and Kibana for data logging and analytics",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "KnexJS",
          fontAwesomeClassname: "simple-icons:knexdotjs",
          style: {
            color: "#D26B38",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#47848F",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Campbellsville University",
      subtitle: "Master of Science Information Technology Management",
      logo_path: "campUniv.png",
      alt_name: "CampUniv",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ I have studied core subjects like Project Management, Team Management, Negotiation and Conflict Management.",
        "⚡ I have implemented several projects based on what I've learnt under my Information Technology Management course. ",
        "⚡ I have secured 4.00 GPA.",
      ],
      website_link: "https://www.campbellsville.edu/",
    },
    {
      title: "University of Denver",
      subtitle:
        "Masters in applied science Information and Communciations Technology",
      logo_path: "univofDenver.png",
      alt_name: "DenvUniv",
      duration: "2014 - 2015",
      descriptions: [
        "⚡ I have studied core subjects like Database Administration, Database Design and Data Warehousing Design.",
        "⚡ I have also completed various online courses for Web Enabled Information Systems, Website Design and Management etc.",
        "⚡ I have implemented several projects based on what I've leart under my Database Design and Administration course. ",
        "⚡ I have secured 3.71/4 GPA.",
      ],
      website_link: "https://www.du.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Certified SAFe® 4 Agilist",
      subtitle: "Scaled Agile Inc",
      logo_path: "safe.png",
      certificate_link:
        "https://www.credly.com/badges/5f3c3bce-a4d9-4dce-bc5f-06ada959e7e5/linked_in_profile",
      alt_name: "Scaled Agile Inc",
      color_code: "#47A048",
    },
    {
      title: "Deque",
      subtitle: "Web Accessibility",
      logo_path: "deque.png",
      certificate_link:
        "https://dequeuniversity.com/online-courses/web-accessibility",
      alt_name: "Deque University",
      color_code: "#2AAFED",
    },
    {
      title: "IJCST",
      subtitle: "IJCST Paper",
      logo_path: "IJCST.jpg",
      certificate_link:
        "https://www.ijcst.com/archives/vol-3-issue-2-6/vol-3-issue-2-5/",
      alt_name: "IJCST Paper",
      color_code: "#E2405F",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, and Internships",
  description:
    "As a Software Developer, I have worked with real projects for over 10+ years. I've mostly done projects in Agile setting. I love doing brown bag sessions to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Sr. Software Engineer",
          company: "U.S Bank",
          company_url: "https://www.usbank.com/",
          logo_path: "usbank.jpg",
          duration: "Dec 2020 - Present",
          location: "Minneapolis (Remote)",
          description: `Worked on enterprise-level multiple projects - My Controls: A permission hub through your account in online banking. Which puts user in charge of who can and can’t access their financial data.
          Data Access Reports: A graphical and tabular representation of access shared to third party apps or companies currently or in the past.
          Admin Portal: An internal project that is used to handle complex business rules that are used for building apis that help multiple customers facing project teams to build apps.
          Develop, test, and maintain scalable full-stack applications while building micro frontends with React and Angular using module federation. 
          Implement dynamic routing in Next.js, log GraphQL calls in Kibana, and optimize performance with React hooks. Ensure A11Y compliance, set up Tealium analytics for user behavior tracking, design GraphQL 
          schemas, and visualize data with Chart.js. Automate CI/CD with Jenkins, streamline deployments, and prioritize tasks while identifying blockers to ensure smooth delivery.
        `,
          color: "#0071C5",
        },
        {
          title: "Front End UI Developer",
          company: "NextEra Energy",
          company_url: "https://www.nexteraenergy.com/",
          logo_path: "nextera.jpeg",
          duration: "Jul 2020 - Nov 2020",
          location: "West Palm Beach(FL)",
          description: `Maintain close contact with the client and team when handling change requests.
          Developed a React-based UI microapp integrated into a Next.js application. Built data-driven webpages with tables and charts using Chart.js to visualize clean energy consumption. Collaborated with executive leaders, designers, and analysts to refine requirements. Implemented GraphQL queries for user authorization and data retrieval. Utilized React hooks and TypeScript for state management and static typing. Deployed production code biweekly through CI/CD pipelines and tracked progress using Agile methodologies in JIRA.
          `,
          color: "#ee3c26",
        },
        {
          title: "Full Stack Software Engineer",
          company:
            "DHCS, California Medicaid Management Information Systems (CA-MMIS)",
          company_url: "https://www.dhcs.ca.gov/",
          logo_path: "dhcs.jpg",
          duration: "Oct 2019 - Jun 2020",
          location: "Sacramento, CA(Remote)",
          description: `Constantly interact with subject matter experts and team to gather requirements.
          Developed web platform applications using React, Fusion, Koa, and PostgreSQL while ensuring accessibility and web standards compliance. Managed state with Redux and designed microservices and APIs using Node.js. Built and maintained PostgreSQL database functions and RESTful services with Koa and Objection.js. Contributed to CI/CD by automating Docker image builds and deployments. Conducted functional and performance testing, ensuring code quality and test coverage. Utilized JIRA for tracking issues and collaborated in Agile ceremonies, including backlog management, stand-ups, reviews, and retrospectives.
        `,
          color: "#5a900f",
        },
        {
          title: "Front End UI Developer & Part-time Scrum Master",
          company: "CHHSA, OSI, Child Welfare Digital Services (CWDS)",
          company_url: "https://cwds.ca.gov/",
          logo_path: "cwds.webp",
          duration: "Jul 2017 - Oct 2019",
          location: "Sacramento, CA",
          description: `Handled dual role of Front-end UI developer and part-time scrum master making sure the features are delovered on regular intervals.
          Defined and maintained code quality standards across front-end and back-end teams using ESLint, Rubocop, SCSS-Lint, SonarQube, and Code Climate. Reduced technical debt by upgrading projects to ES6. Reconfigured Jenkins pipelines and contributed to mono-repo libraries, enabling auto-generated release notes. Built React components for the Snapshot and Hotline SPAs, integrating Redux, Node.js, and Ruby on Rails. Ensured accessibility compliance with WCAG 2.0, testing with AXE, WAVE, NVDA, and JAWS. Developed case management applications using React, Node.js, and Ruby on Rails, creating reusable component libraries. Configured CI/CD with Jenkins and Docker, conducted API integrations, and implemented unit testing with Karma, Jest, Jasmine, and Enzyme. Followed Agile methodologies, facilitated Scrum ceremonies, and served as a part-time Scrum Master.
        `,
          color: "#040f26",
        },
        {
          title: "Frontend UI Developer",
          company: "Boston Scientific",
          company_url: "https://www.bostonscientific.com/",
          logo_path: "boston.jpg",
          duration: "Jul 2015 - Jun 2017",
          location: "Denver, CO (Remote)",
          description: `Gathered software specifications and business requirements. Developed React components for SPAs using React.js, Redux, Node.js, and ES6. Designed test plans and test cases, executed test scripts, and implemented client-side validations. Ensured full-stack accessibility compliance with WCAG and ADA standards using JAWS and NVDA. Conducted defect verification, regression testing, and collaborated with developers to resolve issues. Generated periodic reports for management and provided testing updates in meetings and walkthroughs.
        `,
          color: "#D83B01",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Jr. Software Engineer",
          company: "BSNL",
          company_url: "https://www.bsnl.co.in/",
          logo_path: "bsnl.avif",
          duration: "Aug 2012 - Dec 2013",
          location: "Gachibowli, Hyd",
          description:
            "Implemented MVC architecture using Apache Struts. Developed and maintained the OR module, deploying and testing code on Apache Tomcat. Created GUI screens using JSP with client-side validations in JavaScript. Built business components using Java, Servlets, JDBC, and WebLogic to interact with an Oracle database. Designed and developed JSP pages and data classes, troubleshooting and fixing bugs during testing. Documented the project for better system understanding.",
          color: "#FBBD18",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create ReactJS Frontend Projects, NodeJS. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "deepu.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "react-wood-duck component library",
      url: "https://www.npmjs.com/package/react-wood-duck",
      description:
        "The react-wood-duck component library is a set of re-usable components and styles to be used across all CWS-NS digital services. This library provides a common ‘language’ for CWS-NS designers and developers for front-end assets. It is aimed at improving communication, collaboration, productivity, and reducing coding efforts.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
      links: [
        {
          name: "npm",
          url: "https://www.npmjs.com/package/react-wood-duck",
          iconifyClass: "devicon:npm-wordmark",
        },
        {
          name: "Github",
          url: "https://github.com/GajulaNagaPradeep/react-wood-duck",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
