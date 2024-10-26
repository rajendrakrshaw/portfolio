import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer",
        company_name: "Taxlix",
        // icon: starbucks,
        iconBg: "#accbe1",
        date: "June 2022 - Sept 2022",
        points: [
            "Developing and maintaining web applications for a Fintech Startup.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Intern",
        company_name: "GDSC",
        // icon: tesla,
        iconBg: "#fbc3bc",
        date: "Feb 2023 - July 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Member - Web Team Lead",
        company_name: "GDSC",
        // icon: shopify,
        iconBg: "#b7e4c7",
        date: "July 2023 - May 2024",
        points: [
            "Leading the team for developing and maintaining web applications.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     // icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Dec 2023 - March 2024",
    //     points: [
    //         "Developing and maintaining web applications using Laravel and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Software Developer",
        company_name: "Triophase",
        // icon: meta,
        iconBg: "#a2d2ff",
        date: "July 2024 - Present",
        points: [
            "Research and Development of Containerized Applications.",
            "Testing and maintenance of the same.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/rajendrakrshaw',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/rajendra-kumar-shaw',
    }
];

export const projects = [
    {
        // iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'TIH College Space',
        description: 'Developed a web application that helped colleges during to maintain online classroom managemanet, during covid.',
        link: 'http://tihcollegespace.epizy.com',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Laveraging Evaluation of Answers Using Few-shot Learning.',
        description: 'Used Natural Language Processing to train a model which can evaluate descriptive answers with the accuracy of 89%.',
        link: '',
    },
    {
        // iconUrl: threads,
        theme: 'btn-back-green',
        name: 'KalaSangrah NFT Marketplace',
        description: 'Created a full-stack replica of the popular NFT marketplaces.',
        link: '',
    },
    {
        // iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Chainware',
        description: 'Built a Simple SPA with skeleton effect in react.',
        link: 'https://chainware.vercel.app',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
    
];