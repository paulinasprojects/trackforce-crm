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
]