export const INFO = {
  tel: '0844614414',
  email: 'thepjutha.w@gmail.com',
  location: 'Bangkok, Thailand',
  fullName: 'Thepjutha Wanniyom',
  nickName: 'Jib',
  github: {
    link: 'https://www.github.com/jibeieieiei',
    display: 'github.com/jibeieieiei',
  },
  website: {
    link: 'https://thepjutha-resume.vercel.app',
    display: 'thepjutha-resume-web',
  },
  linkedIn: {
    link: 'https://www.linkedin.com/in/thepjutha-wanniyom-b932a025b/',
    display: 'LinkedIn',
  },
}

export const CAREER_OBJECTIVE =
  'Computer Engineering student who is willing to learn new skills and enthusiastic about work experience. Excited to apply my programming skills and experience to assist the Developer team.'

export const EDUCATION = [
  {
    title: 'Kasetsart University, TH',
    detail: 'B.Eng. Computer Engineering, 2020-2024 (GPA 3.29)',
  },
  // {
  //   title: 'Debsirin School',
  //   detail: 'High School, 2014-2019',
  // },
]

export const RELATED_COURSES = [
  'Abstract Data Types',
  'Probability and Statistics',
  'Algorithm Design and Analysis',
  'Problem Solving',
  'Database System',
  'Software Engineering',
]

export const TOOLS = [
  {
    category: 'Languages',
    detail: 'Javascript, TypeScript, HTML, CSS, Python, SQL',
    // C / C++
  },
  {
    category: 'Frameworks',
    detail: 'Next.js, React, TailwindCSS, FastAPI, NestJS',
  },
  {
    category: 'Tools & Platforms',
    detail:
      'Git, Postman, Markdown, SonarQube, Figma, Docker, VPS (Deployment)',
  },

  {
    category: 'Data & Pipelines',
    detail: 'Pandas, Numpy, Kedro',
    // Data Science: Time Series Model, Scikit-Learn, Reinforcement Learning, Random Forest
  },
]

export const WORK_EXPERIENCES = [
  {
    category: 'Full Time',
    title: 'Software Engineer at Erudite co, Ld.',
    date: 'Jun 2024 - Feb 2025',
    projects: [
      {
        name: 'PWA Web Application',
        detail: [
          'Developed a web application for The Government Lottery Office (GLO), focusing on structuring the web layout and responsive web design such as the Check Lottery Result page and My Lottery page.',
        ],
        link: '',
        skills:
          'Next.js, TypeScript, TailwindCSS, Git, Figma, Responsive Web Design, Shadcn',
      },
      {
        name: 'GLO Web Application',
        detail: [
          'Developing a web application for the back-office system of The Government Lottery Office (GLO).',
          'Including creating page layouts follow by design, creating various components such as tables and sidebar, generating customizable PDFs for contract creation and API integrations.',
        ],
        link: '',
        skills:
          'Next.js, TypeScript, TailwindCSS, SonarQube, Git, Postman, Figma, Axios, Responsive Web Design, Shadcn',
      },
    ],
    link: '',
    mt: '',
  },
  {
    category: 'Cooperative student',
    title: 'Machine Learning Engineer at Erudite co, Ld.',
    date: 'Apr 2023 - Nov 2023',
    projects: [
      {
        name: '',
        detail: [
          'I have been working on a project on trading strategies using Machine Learning like Reinforcement Learning, Random Forest, In addition, I have implemented various trading strategies to meet customer needs.',
        ],
        link: '',
        skills:
          'Python, Git, Pandas, Numpy, Kedro, Machine Learning Fundamentals',
      },
    ],
    link: '',
    mt: '',
  },
]

export const PROJECTS = [
  {
    title: 'Full-stack Todo App with Dockerized Deployment',
    detail: [
      'A full-stack Todo application where the frontend is built using Next.js and the backend is developed with NestJS and MongoDB. Both services are containerized using Docker and orchestrated with Docker Compose. The application is deployed on a Virtual Private Server (VPS) for production.',
    ],
    link: 'https://todoapp.thepjutha.xyz',
    mt: '',
  },
  {
    title: 'Thai Stock Forecasting using Time Series Model (Senior Project)',
    detail: [
      'The purpose of this study is creating a stock forecast website, mainly Thai stocks in SET50index. In addition to using a Time Series model due to its fine sequential data, developing the website by adding various features such as trading strategies, Backtesting, etc. ',
    ],
    link: 'https://github.com/jibeieieiei/frontend-th-forecasting',
    mt: 'print:mt-[84px]',
  },
  {
    title: 'Kulony (Web Application using React)',
    detail: [
      'Kulony, which stands for Kasetsart University and colony, is the online community for KU personnels. It is the place where people discuss and share their campus lifestyles such as recommended subjects, trendy food  and other matters within the university. JavaScript, React, HTML and CSS are used in the project.',
    ],
    link: 'https://github.com/KUlony',
    mt: '',
  },
  {
    title: 'Coffee Shop Reservation (Web Application using React)',
    detail: [
      'Due to the COVID situation, some coffee shops have to limit the number of people. This web app helps to check the cafe availability status and respectively make a reservation. In the process, there is also a simulation with the hardware installed in the mock coffee shop. JavaScript, React and HTML are used in the project.',
    ],
    link: 'https://github.com/jibeieieiei/exceed18-coffee-front',
    mt: '',
  },
]

export const ACTIVITIES = [
  {
    title: 'Thailand Capital Market Development Fund (CMDF)',
    detail:
      'I was awarded a Certificate in Quantitative Finance (“CQF”) program organized by CMDF. Mathematics and Python Programming skill are required in the examination.',
  },
  {
    title: 'Dongtan Camp',
    detail:
      'Dongtan Camp is an activity for high school students to get to know various fields of study in engineering at Kasetsart University. I was a tutor teaching about basic programming in Python by using Google Colab, Scratch game. It is a great opportunity to share my experience to them.',
  },
  // {
  //   title: 'BarCamp Bangkhen',
  //   detail:
  //     'I was a photographer in Barcamp, a short talk where the speaker can present an idea or a thought in any topic. ',
  // },
  // {
  //   title: 'SEED: ZERO',
  //   detail:
  //     'Being a photographer in SEED: ZERO which is an orientation about Frontend, Backend and Hardware.',
  // },
]
