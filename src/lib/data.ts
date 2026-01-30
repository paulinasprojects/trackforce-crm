import {UserCircleIcon, KanbanIcon, ChartDonutIcon} from "../components/common/icons";

export const gettingStartedData = [
  {
    id: 1,
    title: "Set Up Your Account",
    description: "Invite your team and start managing your customer relationships right away with an intuitive dashboard.",
    icon: UserCircleIcon,
  },
  {
    id: 2,
    title: "Import Contacts and Set Up Your Pipeline",
    description: "Set up your sales pipeline to track deals through each stage, and assign tasks to team members for efficient progress.",
    icon: KanbanIcon,
  },
  {
    id: 3,
    title: "Monitor Performance and Collaborate",
    description: "Keep your team aligned by assigning tasks and collaborating within the platform to ensure seamless customer management.",
    icon: ChartDonutIcon,
  },
]

export const featuresDataOne = [
  {
    id: 1,
    title: "Contact Management",
    description: "Store and organize all customer data, track interactions, and manage relationships in one central hub.",
    imageSrc: "/feature.png",
  },
  {
    id: 2,
    title: "Sales Pipeline Tracking",
    description: "Visualize and manage each stage of your sales process, from lead generation to closing deals.",
    imageSrc: "/feature-image-2.png",
  },
  {
    id: 3,
    title: "Email Marketing Integration",
    description: "Create, send, and track email campaigns directly from the CRM, with built-in analytics to measure success.",
    imageSrc: "/feature-image-3.png",
  },
];

export const featuresDataTwo = [
   {
    id: 4,
    title: "Task Automation",
    description: "Automate repetitive tasks such as follow-ups, appointment scheduling, and deal status updates to save time.",
    imageSrc: "/feature-image-4.png",
  },
   {
    id: 5,
    title: "Document Management",
    description: "Store and share important documents, contracts, and proposals with your team directly in the CRM.",
    imageSrc: "/feature-image-5.png",
  },
   {
    id: 6,
    title: "Third-Party Tools Integration",
    description: "Connect your CRM to other popular apps such as Google Workspace, Slack, and Mailchimp to streamline workflows.",
    imageSrc: "/feature-image-6.png",
  },
];


export const pricingData = [
  {
    id: 1,
    name: "Starter Plan",
    mostPopular: false,
    isStarter: true,
    duration: "/month",
    description: "Perfect for small businesses just getting started.",
    price: "$19",
    features: [
      "Up to 3 users",
      "Basic Sales & Marketing Tools",
      "Contact Management",
      "Reporting & Analytics",
      "Basic API Access",
      "Email Support",
      "Community Access",
    ],
  },
  {
    id: 2,
    name: "Professional Plan",
    mostPopular: true,
    isStarter: false,
    duration: "/month",    
    description: "For growing businesses to scale their customer relationships.",
    price: "$49",
    features: [
      "Up to 10 users",
      "All Starter Features",
      "Advanced Sales Automation",
      "Omnichannel Support",
      "Custom Dashboards",
      "Integration with 5+ tools",
    ], 
  },
  {
    id: 3,
    name: "Business Plan",
    mostPopular: false,
    isStarter: false,
    duration: "/month",
    description: "Ideal for larger teams needing more power and flexibility.",
    price: "$99",
    features: [
      "Unlimited users",
      "All Professional Features",
      "Data-Driven Marketing Tools",
      "AI-Powered Sales Recommendations",
      "Custom Workflows & Automation",
      "Priority Support",
    ], 
  },
  {
    id: 4,
    name: "Enterprise Plan",
    mostPopular: false,
    isStarter: false,
    duration: "",
    description: "Tailored solutions for enterprises with complex needs.",
    price: "Contact Us",
    features: [
      "Custom Pricing",
      "Dedicated Account Manager",
      "Unlimited Users & Features",
      "Advanced Security & Compliance",
      "Full Suite of Integrations",
      "24/7 VIP Support",
    ], 
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      {
        name: "Customer",
        href: "/customer",
      },
      {
        name: "Blog",
        href: "/",
      },
      {
        name: "Careers",
        href: "/",
      },
    ]
  },
  {
    title: "Resources",
    links: [
      {
        name: "Changelog",
        href: "/changelog",
      },
      {
        name: "Documentation",
        href: "/",
      },
    ]
  },
  {
    title: "Customers",
    links: [
      {
        name: "Contact Us",
        href: "/contact",
      },
      {
        name: "FAQ",
        href: "/",
      },
    ]
  },
  {
    title: "Products",
    links: [
      {
        name: "Work and Collaboration",
        href: "/",
      },
      {
        name: "Sales Email Template",
        href: "/",
      },
      {
        name: "Marketing Analytics",
        href: "/",
      },
    ]
  },
]

export const faqAccordionData = [
  {
    value: "item-1",
    title: "What is TrackForce CRM?",
    description: "TrackForce is a cloud-based CRM platform designed to streamline customer management, sales processes, and marketing efforts. With tools like sales automation, omnichannel support, and data-driven marketing, it helps businesses build stronger customer relationships and increase efficiency.",
  },
  {
    value: "item-2",
    title: "How can TrackForce improve my sales process?",
    description: "TrackForce is a cloud-based CRM platform designed to streamline customer management, sales processes, and marketing efforts. With tools like sales automation, omnichannel support, and data-driven marketing, it helps businesses build stronger customer relationships and increase efficiency.",
  },
  {
    value: "item-3",
    title: "Is TrackForce suitable for small businesses?",
    description: "TrackForce is a cloud-based CRM platform designed to streamline customer management, sales processes, and marketing efforts. With tools like sales automation, omnichannel support, and data-driven marketing, it helps businesses build stronger customer relationships and increase efficiency.",
  },
  {
    value: "item-4",
    title: "Can I manage customer support from multiple channels?",
    description: "TrackForce is a cloud-based CRM platform designed to streamline customer management, sales processes, and marketing efforts. With tools like sales automation, omnichannel support, and data-driven marketing, it helps businesses build stronger customer relationships and increase efficiency.",
  },
  {
    value: "item-5",
    title: "Can I customize the features of TrackForce for my business?",
    description: "TrackForce is a cloud-based CRM platform designed to streamline customer management, sales processes, and marketing efforts. With tools like sales automation, omnichannel support, and data-driven marketing, it helps businesses build stronger customer relationships and increase efficiency.",
  },
  {
    value: "item-6",
    title: "How secure is my data with TrackForce?",
    description: "TrackForce is a cloud-based CRM platform designed to streamline customer management, sales processes, and marketing efforts. With tools like sales automation, omnichannel support, and data-driven marketing, it helps businesses build stronger customer relationships and increase efficiency.",
  },
]

export const contactData = [
  {
    name: "Let us guide you through our features, pricing, and more!"
  },
  {
    name: "We're here to ensure you have a seamless experience"
  },
  {
    name: "Let's talk about how we can collaborate."
  },
  {
    name: "Share your thoughts, ideas, or suggestions on how we can make TrackForce even better."
  },
]

export const customersData = [
  {
    id: 1,
    logo: "/stellartech.svg",
    title: "Boosting Sales Efficiency",
    series: "Series B",
    category: "Technology",
    description: "Using TrackForce's Data-Driven Marketing tools, StellarTech segmented its audience based on purchasing history and preferences. Personalized email campaigns were then launched, directly targeting customer interests and needs.",
    successPercent: "35% Reduction",
    successTitle: "in manual tasks",
    successPercentTwo: "25% increase",
    successTitleTwo: "in deal closures"
  },
  {
    id: 2,
    logo: "/cascadestyle.svg",
    title: "Boosting Marketing Campaign Success",
    series: "Series Seed",
    category: "E-commerce",
    description: "Using TrackForce's Data-Driven Marketing tools, CascadeStyle segmented its audience based on purchasing history and preferences. Personalized email campaigns were then launched, directly targeting customer interests and needs.",
    successPercent: "45% increase",
    successTitle: "in email open rates",
    successPercentTwo: "25% boost",
    successTitleTwo: "in conversion rates"
  },
  {
    id: 3,
    logo: "/biomark.svg",
    title: "Enhancing Customer Experience",
    series: "Series Seed",
    category: "Healthcare",
    description: "TrackForce's Omnichannel Support unified all customer interactions into a single dashboard, allowing their support team to respond promptly and maintain quality across all channels. The CRM's tracking and history features helped resolve issues faster and deliver personalized responses.",
    successPercent: "50% improvement",
    successTitle: "in response times",
    successPercentTwo: "30% boost",
    successTitleTwo: "in customer satisfaction"
  },
  {
    id: 4,
    logo: "/braincraze.svg",
    title: "Improving Project Collaboration",
    series: "Series B",
    category: "Real Estate",
    description: "TrackForce's Document Management and Collaboration Tools enabled Braincraze to store project documents securely, assign tasks, and track project progress in real time. The CRM's shared dashboard kept everyone aligned and provided a central point for updates.",
    successPercent: "35% Faster",
    successTitle: "completion of project milestones",
    successPercentTwo: "20% decrease",
    successTitleTwo: "in communication errors"
  },
]

export const changelogReleases = [
  {
    id: '1',
    title: 'Enhanced Reporting Tools',
    description: "We've added more customizable reporting options, giving you the ability to create in-depth analytics tailored to your specific KPIs.",
    date: '2024-11',
    version: '3.3.0',
    tags: {
      releaseType: "Reporting's",
      productArea: 'Analytics',
      integration: 'Docs',
    },
    image: "/tools.png",
    benefits: [
      'Gain deeper insights into performance.',
      'Tailor reports to match your business needs.',
    ]
  },
  {
    id: '2',
    title: 'Secure Document Sharing and Collaboration',
    description: 'Easily share and collaborate on documents securely within your team or with clients. Control access levels, track changes, and ensure smooth document workflows.',
    date: '2024-10',
    version: '1.2.5',
    tags: {
      releaseType: 'Sales',
      productArea: 'CRM',
      integration: 'Docs',
    },
    image: "/documents.png",
    benefits: [
      'Securely manage document sharing and permissions.',
      'Collaborate in real-time without confusion.',
    ]
  },
  {
    id: '3',
    title: 'Task Automation Rules',
    description: 'Automate repetitive tasks with customizable rules, so you can focus on higher-value activities. Set triggers for actions such as follow-up emails, status updates, and lead nurturing steps.',
    date: '2024-10',
    version: '1.2.3',
    tags: {
      releaseType: 'Automation',
      productArea: 'CRM',
      integration: 'Email',
    },
   image: "/documents.png",
    benefits: [
      'Save time by automating routine tasks.',
      'Reduce human error with predefined workflows.',
    ]
  },
  {
    id: '4',
    title: 'Recurring Task Scheduling',
    description: 'Easily set up recurring tasks for daily, weekly, or monthly intervals to ensure you stay on top of regular activities without manual input.',
    date: '2024-09',
    version: '3.1.5',
    tags: {
      releaseType: 'Communication',
      productArea: 'Automation',
      integration: 'Calendar',
    },
    image: "/documents.png",
    benefits: [
      'Automate repetitive tasks on a schedule.',
      'Free up time for strategic work.',
    ]
  },
  {
    id: '5',
    title: 'Customizable Sales Pipelines',
    description: 'You can now fully customize your sales pipelines with multiple stages, automation rules, and advanced reporting metrics.',
    date: '2024-08',
    version: '3.0.8',
    tags: {
      releaseType: 'Sales',
      productArea: 'CRM',
      integration: 'Telegram',
    },
   image: "/documents.png",
    benefits: [
      'Align the sales pipeline with your specific process.',
      'Automate stage changes for smoother management.',
    ]
  },
  {
    id: '6',
    title: 'Advanced CRM Analytics',
    description: 'Get comprehensive insights into your customer relationships with advanced analytics and reporting features.',
    date: '2024-11',
    version: '3.2.0',
    tags: {
      releaseType: 'CRM',
      productArea: 'Automation',
      integration: 'Email',
    },
    image: "/documents.png",
    benefits: [
      'Track customer engagement metrics.',
      'Identify trends and opportunities.',
    ]
  },
];
