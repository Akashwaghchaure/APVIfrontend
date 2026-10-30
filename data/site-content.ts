export interface NavItem {
  label: string;
  href: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  subheadline: string;
  description: string;
  aboutStory: string[];
  vision: string;
  mission: string;
  teamHighlight: string;
  milestone: {
    title: string;
    description: string;
    location: string;
    capacity: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    full: string;
  };
  contact: {
    generalEmail: string;
    inquiriesEmail: string;
    careersEmail: string;
    phonePrimary: string;
    phoneSecondary: string;
    workingHours: string;
    operatingDays: string;
    googleFormUrl: string;
  };
  socialLinks: {
    platform: string;
    url: string;
  }[];
  disclaimer: string;
}

export const SITE_METADATA = {
  title: "HIT India | Air Powervision — 24/7/365 Continuous Clean & Green Renewable Energy",
  description:
    "HIT India (Air Powervision) is pioneering continuous 24*7*365 renewable power generation through revolutionary Anthropogenic Windmills (Anthro series) and NeerGen Hydroelectric technology. Proven 2MW plant in Pune.",
  siteUrl: "https://airpowervision.in",
};

export const COMPANY_INFO: CompanyInfo = {
  name: "Air Powervision India ",
  shortName: "APVN",
  tagline: "Unlocking 24*7*365 Continuous Clean & Green Power",
  subheadline:
    "Overcoming the major discontinuity drawback of traditional wind and hydro to deliver continuous, pure energy 365 days a year.",
  description:
    "We are a team of 5 specialized engineers working on harnessing renewable energy sources. Our core breakthrough focus is to overcome the major disadvantage of discontinuity in power generation from hydroelectric and wind power, enabling true 24*7*365 uninterrupted electricity generation to propel the world toward pure Clean and Green energy.",
  aboutStory: [
    "Power is foundation. It is the underpinning of modern life, the spark that sets progress in motion, moving the world forward.",
    "At HIT, we are advancing tenaciously, building up energy innovations without bounds and enhancing the power systems we rely upon today. Traditional wind and hydro suffer from intermittent weather dependency — varying wind speeds and seasonal water availability.",
    "Through our proprietary Anthropogenic Windmill and NeerGen Hydroelectric technologies, we artificially engineer pressure and head differentials to generate continuous base-load renewable power every single day of the year.",
    "We have already successfully implemented an operational 2MW wind power plant in Pune, Maharashtra, proving our engineering execution capability on the ground."
  ],
  vision:
    "To move the world toward 100% clean, pure, and continuous green energy, eliminating reliance on fossil base-loads through engineered continuous-flow renewables.",
  mission:
    "Our mission is to power a cleaner world by deploying 24*7*365 continuous renewable energy systems, replacing intermittent power with reliable, pure energy innovations.",
  teamHighlight:
    "Spearheaded by a focused team of 5 pioneering engineers specializing in fluid dynamics, artificial pressure systems, electromechanical generation, and electrical grid synchronization.",
  milestone: {
    title: "2MW Operational Wind Power Plant",
    description: "Successfully engineered, implemented, and synchronized at Pune, Maharashtra.",
    location: "Pune, Maharashtra, India",
    capacity: "2.0 MW",
  },
  address: {
    street: "Flat No. 203, Aditya Heritage, Wing A, Plot No. 140/1, Sector 19, Spine Road, Sharad Nagar, Chikhali (PCMC)",
    city: "Pune (Pimpri-Chinchwad)",
    state: "Maharashtra",
    postalCode: "411062",
    country: "India",
    full: "Flat No. 203, Aditya Heritage, Wing A, Plot No. 140/1, Sector 19, Spine Road, Sharad Nagar, Chikhali (PCMC), Pune - 411062, Maharashtra, India",
  },
  contact: {
    generalEmail: "airpowervisionllp@gmail.com",
    inquiriesEmail: "airpowervisionllp@gmail.com",
    careersEmail: "airpowervisionllp@gmail.com",
    phonePrimary: "+91 99708 29224",
    phoneSecondary: "+91 95278 02761",
    workingHours: "09:00 AM – 06:00 PM IST",
    operatingDays: "Monday to Saturday",
    googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc-sample-air-powervision/viewform",
  },
  socialLinks: [
    { platform: "LinkedIn", url: "https://linkedin.com" },
    { platform: "Twitter", url: "https://twitter.com" },
    { platform: "YouTube", url: "https://youtube.com" },
  ],
  disclaimer:
    "Air Powervision India specializes in proprietary continuous renewable energy systems. Proprietary Anthropogenic and NeerGen designs are protected under technical intellectual property provisions.",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products & Tech", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const CORE_VALUES = [
  {
    title: "24*7*365 Continuity",
    description:
      "Eliminating the downtime of intermittent nature by engineering continuous artificial airflow and closed-loop hydraulic head systems.",
    iconName: "Zap",
  },
  {
    title: "Pure Green Energy",
    description:
      "Zero carbon emissions, zero environmental degradation, and water-recycling architectures that conserve vital natural resources.",
    iconName: "Leaf",
  },
  {
    title: "Cost & Space Optimization",
    description:
      "Drastically cutting civil dam and giant wind tower capital costs through compact, high-velocity enclosed machine designs.",
    iconName: "Cpu",
  },
  {
    title: "Engineering Innovation",
    description:
      "Tenacious engineering inquiry and practical prototyping driven by an agile team of 5 specialized energy engineers.",
    iconName: "ShieldCheck",
  },
];

export const VALUE_PROPOSITIONS = [
  {
    title: "Continuous 24/7/365 Power",
    description:
      "Overcoming wind and hydro discontinuity so plants generate round-the-clock electricity regardless of atmospheric wind drops.",
    detail: "Artificially created low-pressure chamber forces constant directional high-velocity airflow.",
    metric: "365 Days",
    metricLabel: "Non-Stop Power",
  },
  {
    title: "Proven 2MW Pune Deployment",
    description:
      "Track record backed by real execution: successfully implemented a 2MW operational wind power plant in Pune, Maharashtra.",
    detail: "Demonstrated grid synchronization, local utility compliance, and dependable field generation.",
    metric: "2.0 MW",
    metricLabel: "Active in Pune",
  },
  {
    title: "Water-Recycling Hydro (NeerGen)",
    description:
      "Achieving required hydraulic head without massive dam flooding or destructive civil work, with 100% water recycling.",
    detail: "Decreases capital investment and space required per unit energy generated.",
    metric: "Zero Waste",
    metricLabel: "Recycled Water Flow",
  },
  {
    title: "Modular Product Capacities",
    description:
      "Both Anthro and NeerGen systems are factory-engineered in scalable 0.1MW, 0.5MW, and 1MW standardized power modules.",
    detail: "Rapid installation for industrial campuses, microgrids, and utility expansion.",
    metric: "0.1 - 1.0 MW",
    metricLabel: "Modular Scalability",
  },
];

export const CAPABILITIES = [
  {
    title: "Anthropogenic Windmill Aerodynamics & Pressure Control",
    description:
      "Engineering low-pressure vacuum differential chambers (Special Purpose Machines) that drive steady high-speed internal airflow.",
  },
  {
    title: "NeerGen Closed-Loop Hydro Turbine Architecture",
    description:
      "Achieving required hydraulic head with minimal vertical height and high-efficiency water recycling mechanisms.",
  },
  {
    title: "2MW+ Utility Wind Plant EPC & Commissioning",
    description:
      "End-to-end turnkey development, proven by our successful 2MW wind power plant implementation in Pune.",
  },
  {
    title: "Continuous Microgrid Integration",
    description:
      "Synthesizing Anthro wind and NeerGen hydro to supply 100% green base-load electricity without expensive battery oversized banks.",
  },
  {
    title: "Industrial Captive Energy Substitution",
    description:
      "Displacing dirty diesel generation and volatile grid tariffs with on-site 0.1MW to 1MW clean power modules.",
  },
  {
    title: "Life-Cycle Asset Operations & Performance Guarantee",
    description:
      "Routine telemetry monitoring, fluid dynamics inspection, and turbine servicing by our core engineering team.",
  },
];

