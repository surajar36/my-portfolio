export const portfolioData = {
  name: "Suraj A R",
  // Used for the Hero section
  hero: {
    title: "SURAJ A R",
    subtitle: "A Data Science student with hands-on experience building end-to-end analytics solutions using SQL, Python, and Power BI",
  },
  // Used for the About section
  about: {
    title: "I am a Data Analyst and Visualization Developer",
    description: "Hello, I'm Suraj, An analyst who designs and builds intuitive, interactive dashboards using Power BI, SQL, Excel and Python to make data accessible and easy to understand.",
    process: [
      {
        id: "01",
        title: "DISCOVERY & STRATEGY",
        description: "Collaborating with stakeholders to define business requirements, success metrics (KPIs), and project scope. I then identify and analyze data sources to create a strategic plan for the model.",
      },
      {
        id: "02",
        title: "DATA MODELING & TRANSFORMATION",
        description: "Developing robust and scalable data models using SQL. I write transformation logic to clean, structure, and prepare the raw data, making it optimized for analysis and performance.",
      },
      {
        id: "03",
        title: "VISUALIZATION & DEVELOPMENT",
        description: "Building intuitive and interactive dashboards in Power BI based on design wireframes. The focus is on crafting a compelling visual narrative that directly answers the key business questions.",
      },
      {
        id: "04",
        title: "VALIDATION & AUTOMATION",
        description: "Translating designs into tangible assets, using Python for automation, and ensuring consistency and functionality across all platforms.",
      },
    ],
  },
  // Used for the Projects section
  projects: [
    {
      id: 1,
      title: "CogniSafe : AI powered Content Moderation System  ",
      description: "Engineered a Gen AI moderation system with 95% accuracy in hate speech detection, slashing the need for manual content review by 60%.",
      tags: ["Generative AI", "Natural Language Processing", "RestAPI", "LLM's"],
      link: "https://cognisafe.netlify.app/", // Add your project link here
    },
    {
      id: 2,
      title: "EchoGraph: Spotify Data Visualizer",
      description: "A dynamic dashboard visualizing Spotify data, supported by Python scripts for automation.",
      tags: ["Python", "Power BI", "API Integration", "Framer"],
      link: "https://echograph.framer.website/", // Add your project link here
    },
    {
      id: 3,
      title: "Ecovision : Deforestation Detection using Satellite Images and Deep Learning.",
      description: " Achieved 90% accuracy in detecting deforestation from satellite imagery by developing a deep learning system with U-Net and ResNet-50 models.",
      tags: ["Python", "Machine Learning", "Deep Learning"],
      link: "", // Add your project link here
    },

    {
      id: 4,
      title: "Faculty Insights Dashboard",
      description: "A Power BI dashboard to analyze university faculty qualifications for academic planning.",
      tags: ["Power BI", "Data Visualization", "Google BigQuery"],
      link: "", // Add your project link here
    },

  ],
  // Used for the Skills section
  skills: {
    description: "This chart visualizes my proficiency across key areas of data analysis and development. From deep-diving into databases with SQL to crafting user-friendly frontends, I possess a balanced skill set to tackle data challenges from end to end.",
    chartData: {
      labels: ['SQL', 'Python', 'Power BI', 'Data Modeling', 'UX/UI Design', 'Frontend Analytics', 'Data Governance'],
      data: [90, 85, 95, 80, 75, 80, 70],
    }
  },
  // Used for the Footer
  contact: {
    email: "arsuraj381@gmail.com",
    linkedin: "https://www.linkedin.com/in/surajar381/",
    github: "https://github.com/surajar36",
  },
};