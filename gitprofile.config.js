// gitprofile.config.js

const config = {
  github: {
    username: 'wilssola', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'wilssola',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: 'wilssola',
    medium: '',
    dev: 'wilssola',
    stackoverflow: '11551591/wilssola', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://tecwolf.com.br',
    phone: '',
    email: 'oliveiralima@tecwolf.com.br',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C#',
    'Unity 3D',
    'Dart',
    'Flutter',
    'Unreal Engine',
    'PHP',
    'JavaScript',
    'TypeScript',
    'React.js',
    'Nest.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: '310 Games',
      position: 'Freelancer - Game Developer',
      from: 'March 2019',
      to: 'July 2019',
      companyLink: '',
    },
    {
      company: 'Upwork',
      position: 'Freelancer - Software Developer',
      from: 'January 2021',
      to: 'November 2022',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'APICE - Aprendizagem Interativa em Ciências e Engenharia',
      body: 'METODOLOGIA CIENTÍFICA',
      year: '2018',
      link: 'https://www.freecodecamp.org/certification/wilssola/apis-and-microservices'
    },
    {
      name: 'FECIBA - Aprendizagem Interativa em Ciências e Engenharia',
      body: 'SEIAR - Science Experiments in Augmented Reality',
      year: '2018',
      link: 'https://www.freecodecamp.org/certification/wilssola/apis-and-microservices'
    },
    {
      name: 'iMasters Certified Professional',
      body: 'PHP BOAS PRÁTICAS',
      year: '2019',
      link: 'https://www.freecodecamp.org/certification/wilssola/apis-and-microservices'
    },
    {
      name: 'freeCodeCamp',
      body: 'APIs and Microservices',
      year: '2020',
      link: 'https://www.freecodecamp.org/certification/wilssola/apis-and-microservices'
    },
    {
      name: 'freeCodeCamp',
      body: 'JavaScript Algorithms and Data Structures',
      year: '2020',
      link: 'https://www.freecodecamp.org/certification/wilssola/apis-and-microservices'
    },
    {
      name: 'freeCodeCamp',
      body: 'Responsive Web Design',
      year: '2020',
      link: 'https://www.freecodecamp.org/certification/wilssola/apis-and-microservices'
    },
  ],
  education: [
    {
      institution: 'UESC',
      degree: 'Student BSc Physic - Not Finished',
      from: '2020',
      to: '2022',
    },
    {
      institution: 'UESC',
      degree: 'Student BSc Production Engineering',
      from: '2023',
      to: 'Present',
    },
  ],
  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'WAC',
      description:
        'A competitive multiplayer FPS shooter that unites Counter-Strike and Valorant, currently in development as a hobby',
      imageUrl: 'https://img.icons8.com/?size=512&id=39848&format=png',
      link: '',
    },
    {
      title: 'Souls Wizard',
      description:
        'A Pokémon GO-like game, made for 310 Games with me as a Freelancer',
      imageUrl: 'https://img.icons8.com/?size=512&id=39848&format=png',
      link: '',
    }, 
    {
      title: 'Magnephy',
      description:
        'A mobile puzzle game made for a game jam that uses physics manipulations behind electromagnetism to provide simple and fun gameplay',
      imageUrl: 'https://img.icons8.com/?size=512&id=39848&format=png',
      link: '',
    }, 
    {
      title: 'Flybis',
      description:
        'An experimental social network that is currently in development as a non-priority hobby',
      imageUrl: 'https://img.icons8.com/?size=512&id=-AszLOZlCRQ0&format=png',
      link: '',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'wilssola', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-5FNL4ZRVVE', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '3571279',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'dracula',
    ],
    /*
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],
    */
    
    // Custom theme
    /*
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
    */
  },
  // Optional Footer. Supports plain text or HTML.
  footer: '',
};

export default config;
