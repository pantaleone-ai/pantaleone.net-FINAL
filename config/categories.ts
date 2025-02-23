import CategoryIcon from "@/icons/layout/menu/category-icon";
import { SubMenuType } from "@/types";

const categories: SubMenuType[] = [
  {
    id: 1,
    title: "All Blog Posts",
    slug: "/blog",
    icon: CategoryIcon,
    description: "All blog posts - Pantaleone.net",
    keywords: [ "Pantaleone", "Pantaleone.net", "Matt Pantaleone", "AI", "artificial intelligence", "AI agents", "intelligent agents", "LLMs", "large language models", "automation", "AI automation", "business automation", "AI in business", "using AI to improve business", "AI business solutions", "machine learning", "AI technology", "AI tools", "AI applications", "AI-driven business", "AI productivity", "AI innovation", "smart automation",
    ],
  },
  {
    id: 2,
    title: "AI Agents",
    slug: "/blog/category/ai-automation-agents",
    icon: CategoryIcon,
    description: "AI & Automation blog posts - Pantaleone.net",
    keywords: ["AI agents", "artificial intelligence agents", "automation agents", "intelligent automation agents", "AI business automation", "automating business with AI", "business process automation", "AI-driven automation", "implementing AI", "scaling AI", "AI implementation strategies", "AI scaling solutions", "AI agent development", "automation in business", "smart agents", "AI for business efficiency", "deploying AI agents", "AI automation tools", "scaling AI in business", "AI agent applications",
    ],
  },
  {
    id: 3,
    title: "Experience Development",
    slug: "/blog/category/ai-web-dev",
    icon: CategoryIcon,
    description: "AI Experience Development blog posts - Pantaleone.net.",
    keywords: [
     "AI in web development", "AI-powered web development", "AI for programmers", "AI in React", "React AI tools", "AI with Next.js", "Next.js AI integration", "artificial intelligence in coding", "AI-assisted programming", "web development automation", "AI-driven web design", "React automation", "Next.js automation", "AI coding tools", "programming with AI", "AI-enhanced React", "AI in frontend development", "smart web development", "AI developer tools", "Next.js AI applications",
      "node.js",
      "software engineering",
    ],
  },
  {
    id: 4,
    title: "Crypto & Web3",
    slug: "/blog/category/crypto-web3",
    icon: CategoryIcon,
    description: "Cryptocurrency & Web3 blog posts - Pantaleone.net.",
    keywords: ["cryptocurrency", "crypto", "Bitcoin", "web3", "blockchain", "crypto technology", "decentralized web", "web3 development", "cryptocurrency trends", "Bitcoin investing", "crypto wallets", "web3 applications", "blockchain technology", "digital currency", "crypto trading", "web3 innovations", "decentralized finance", "DeFi", "smart contracts", "crypto security",
    ],
  },
  {
    id: 5,
    title: "AI Products & Services",
    slug: "/blog/category/ai-software-products",
    icon: CategoryIcon,
    description: "AI Products & Services blog posts - Pantaleone.net",
    keywords: [ "AI products", "AI software", "AI services", "artificial intelligence tools", "AI solutions", "AI platforms", "AI-powered software", "AI service providers", "AI applications", "AI technology products", "AI business software", "AI development tools", "AI cloud services", "AI analytics software", "AI automation products", "AI consulting services", "AI integration solutions", "smart software", "AI product development", "AI enterprise services",
    ],
  },
];

export default categories;
