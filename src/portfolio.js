/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Annas Khalid",
  title: "Hi all, I'm Annas",
  subTitle: emoji(
    "A passionate Data Analyst & BI Developer 📊 skilled in extracting insights from data using Python and SQL — creating interactive dashboards with Power BI & Tableau, and applying Machine Learning for business solutions."
),
  resumeLink:
    "https://drive.google.com/file/d/1rnX1KBRvqFxfRIAS3HJsCpJLMPMgLhX9/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/annaskhalid0",
  linkedin: "https://www.linkedin.com/in/annas-khalid-6687a6242/",
  gmail: "annaskhalid709@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DATA ANALYST & BI DEVELOPER SPECIALIZING IN DATA INSIGHTS AND BUSINESS INTELLIGENCE",
  skills: [
    emoji(
      "⚡ Transform raw data into actionable insights using advanced analytics and visualization techniques"
    ),
    emoji("⚡ Build interactive dashboards and reports with Power BI, Tableau, and Excel for business decision-making"),
    emoji(
      "⚡ Apply machine learning and statistical analysis to uncover patterns and trends in complex datasets"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "DAX",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "Power Query",
      fontAwesomeClassname: "fas fa-filter"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Data Analysis",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "Data Visualization",
      fontAwesomeClassname: "fas fa-chart-pie"
    },
    {
      skillName: "Statistics",
      fontAwesomeClassname: "fas fa-chart-area"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sindh Madressatul Islam University",
      logo: require("./assets/images/smiu.png"),
      subHeader: "Bachelor's of Science in Computer Science",
      duration: "September 2021 - June 2025",
      desc: "Successfully completed my undergraduate degree in Computer Science, gaining comprehensive knowledge in software development, algorithms, and AI/ML.",
      descBullets: [
        "Graduated with strong foundation in core computer science concepts including programming, mathematics, and data analysis including AI",
        "Developed expertise in Data Analytics, Data Visualization, and Data Engineering"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Visualization/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DAX/Power Query",
      progressPercentage: "80%"
    },
    {
      Stack: "Python/SQL",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst",
      company: "Extern & Beats by Dre",
      companylogo: require("./assets/images/externlogo.png"),
      date: "August 2025 – Present",
      desc: "Specializing in qualitative vs quantitative analytics insights to drive data-driven business decisions and consumer behavior analysis.",
      descBullets: [
        "Understood the key difference between customer (buyer) and consumer (user) in business strategy",
        "Learned how to extract and apply consumer insights to improve product positioning and marketing",
        "Designed an \"Ideal Consumer List\" for Beats by Dre, segmenting audiences by demographics and psychographics",
        "Created a Customer Journey Map outlining stages, touch points, and customer emotions from awareness to loyalty",
        "Applied the AIDA framework (Attention, Interest, Desire, Action) to analyze Beats by Dre's consumer journey",
        "Built a detailed AIDA-based Customer Journey Map summarizing customer actions, thoughts, feelings, and brand touch points",
        "Will be working on qualitative & quantitative sentiment analysis using Python and AI tools to decode consumer emotions and market trends"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "TECHNICAL PROJECTS",
  subtitle: "PROJECTS I BUILT FOR UPSKILLING AND PRACTICE",
  projects: [
    {
      image: require("./assets/images/flightlogo.png"),
      projectName: "Airline Flight Delay Analysis",
      projectDesc: "Developed an end-to-end Airline Flight Delay Analysis pipeline using Python, SQL, and Power BI, delivering interactive dashboards with KPIs and route performance insights.",
      footerLink: [
        {
          name: "View Project",
          url: "https://www.linkedin.com/posts/annas-khalid-6687a6242_flightsoverviewdashboards-activity-7329541812342222848-8Mze?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxGCjABlQgZjh8bu4cOIK_fBl8DwtY5SNg"
        }
      ]
    },
    {
      image: require("./assets/images/churnlogo.png"),
      projectName: "Bank Customer Churn Analysis",
      projectDesc: "Executed Bank Customer Churn Analysis on 10K+ records, applying EDA, SQL queries, and Power BI visualizations to identify high-risk customer segments and churn drivers.",
      footerLink: [
        {
          name: "View Project",
          url: "https://www.linkedin.com/posts/annas-khalid-6687a6242_bankchurnedcustomersdashboard-activity-7333865085137793025-iGFE?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxGCjABlQgZjh8bu4cOIK_fBl8DwtY5SNg"
        }
      ]
    },
    {
      image: require("./assets/images/hrlogo.png"),
      projectName: "HR Analytics Dashboard",
      projectDesc: "Built an HR Analytics Dashboard integrating DAX measures and Python-based preprocessing to provide workforce trends, performance metrics, and predictive insights.",
      footerLink: [
        {
          name: "View Project",
          url: "https://www.linkedin.com/posts/annas-khalid-6687a6242_hranalytics-datavisualization-dataanalytics-activity-7194939305813852160-Pub6?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxGCjABlQgZjh8bu4cOIK_fBl8DwtY5SNg"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "GitHub Foundations",
      subtitle: "Certification by GitHub on core GitHub skills and workflows.",
      image: require("./assets/images/gitlogo.jpeg"),
      imageAlt: "Certification"
    },
    {
      title: "Power Query (DataCamp)",
      subtitle: "Certification/course completion in Power Query for data transformation.",
      image: require("./assets/images/dclogo.png"),
      imageAlt: "Certification"
    },
    {
      title: "DAX (DataCamp)",
      subtitle: "Certification/course completion in DAX for Power BI data modeling.",
      image: require("./assets/images/dclogo.png"),
      imageAlt: "Certification"
    },
    {
      title: "Preparing Data for Analysis with Microsoft Excel",
      subtitle: "Certification in Excel-based data cleaning and preparation.",
      image: require("./assets/images/microsoftlogo.jpeg"),
      imageAlt: "Certification"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+923062913260",
  email_address: "annaskhalid709@gmail.com"
};


const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
