export interface ProductVariant {
  model: string;
  capacity: string;
  powerOutput: string;
  idealFor: string;
}

export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  iconName: string;
  imageUrl: string;
  imageAlt: string;
  keyBenefits: string[];
  applications: string[];
  scopeOfWork: string[];
  productModels?: ProductVariant[];
  technologyHighlights?: string[];
  note?: string;
}

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "anthropogenic-windmill",
    slug: "anthropogenic-windmill",
    title: "Anthropogenic Windmill (Anthro Series)",
    category: "Proprietary Wind Technology",
    shortDescription:
      "Artificially engineered low-pressure chamber forcing high-velocity directional airflow to deliver continuous 24*7*365 days clean electrical power regardless of natural wind drop.",
    fullDescription:
      "Wind energy offers immense potential, yet traditional wind turbines are limited by fluctuating natural wind speeds across different geographies. In our proprietary Anthropogenic Windmill, we have artificially created low pressure as compared to atmospheric pressure so that the air will flow with high velocity in one direction through a specialized Special Purpose Machine (SPM) funnel. This breakthrough fluid dynamics system results in generating continuous 24*7*365 days electrical power without atmospheric wind speed dependency.",
    iconName: "Wind",
    imageUrl: "/images/anthropogenic-windmill.jpg",
    imageAlt: "Anthropogenic Windmill Special Purpose Machine schematic diagram showing low pressure artificial airflow",
    technologyHighlights: [
      "Artificial Low-Pressure Gradient Induction",
      "Special Purpose Machine (SPM) Vacuum Chamber",
      "Venturi Nozzle High-Velocity Airflow Acceleration",
      "Continuous 24*7*365 Base-Load Electrical Generation",
      "Zero Downtime from Regional Wind Calm Periods",
    ],
    productModels: [
      {
        model: "Anthro-0.1MW",
        capacity: "100 kW",
        powerOutput: "100 kW Continuous 24/7",
        idealFor: "Commercial campuses, microgrids & remote off-grid clusters",
      },
      {
        model: "Anthro-0.5MW",
        capacity: "500 kW",
        powerOutput: "500 kW Continuous 24/7",
        idealFor: "Industrial processing facilities & medium manufacturing units",
      },
      {
        model: "Anthro-1MW",
        capacity: "1000 kW (1.0 MW)",
        powerOutput: "1.0 MW Continuous 24/7",
        idealFor: "Heavy industry captive power & utility grid feeding",
      },
    ],
    keyBenefits: [
      "Generates continuous power 24 hours a day, 7 days a week, 365 days a year",
      "Eliminates reliance on seasonal atmospheric wind speed variations",
      "Significantly smaller footprint than giant conventional multi-megawatt towers",
      "High aerodynamic efficiency with internal flow optimization",
    ],
    applications: [
      "Continuous industrial captive power plants",
      "Commercial parks & data centers requiring clean base-load",
      "Islanded microgrids & defense installations",
      "Utility grid stabilization projects",
    ],
    scopeOfWork: [
      "Site airflow dynamic profiling & thermodynamic sizing",
      "Special Purpose Machine (SPM) chamber fabrication & assembly",
      "Turbine generator placement and aerodynamic diffuser tuning",
      "Synchronous inverter integration & CEA compliant grid tie-in",
    ],
    note: "Official HIT Proprietary Technology — Active engineering rollout across 0.1MW, 0.5MW, and 1MW models.",
  },
  {
    id: "neergen-hydro",
    slug: "neergen-hydro",
    title: "NeerGen Hydroelectric Solutions",
    category: "Proprietary Hydro Technology",
    shortDescription:
      "Revolutionary modular hydroelectric system achieving required hydraulic head with continuous closed-loop water recycling, eliminating giant dam construction costs.",
    fullDescription:
      "Traditional hydroelectric power requires massive capital expenditure, huge concrete dams, and large reservoirs that submerge valuable land. In NeerGen, we have achieved the required head for power generation in a compact hydroelectric plant configuration that saves the major costs associated with civil dam construction. Furthermore, full recycling and recirculation of the water used in NeerGen is possible, resulting in a dramatic decrease in cost and physical space required per unit of energy generated.",
    iconName: "Zap",
    imageUrl:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hydroelectric power generation and hydraulic turbine engineering infrastructure",
    technologyHighlights: [
      "Engineered Hydraulic Head without Civil Dam Submersion",
      "Closed-Loop Water Recirculation & Recycling Architecture",
      "Dramatically Lowered Capital Expenditure per Megawatt",
      "Ultra-Compact Land and Environmental Footprint",
      "Continuous 24*7*365 Clean Hydro Generation",
    ],
    productModels: [
      {
        model: "NeerGen-0.1MW",
        capacity: "100 kW",
        powerOutput: "100 kW Hydro",
        idealFor: "Eco-resorts, agriculture, and rural localized microgrids",
      },
      {
        model: "NeerGen-0.5MW",
        capacity: "500 kW",
        powerOutput: "500 kW Hydro",
        idealFor: "Process manufacturing plants with captive water reservoirs",
      },
      {
        model: "NeerGen-1MW",
        capacity: "1000 kW (1.0 MW)",
        powerOutput: "1.0 MW Hydro",
        idealFor: "Industrial parks, district cooling plants, and municipal utilities",
      },
    ],
    keyBenefits: [
      "Massive reduction in civil construction and reservoir excavation costs",
      "Zero ecological disruption: no river valley flooding or forest destruction",
      "Closed-loop water recycling conserves precious water resources",
      "Predictable, round-the-clock power output unaffected by dry seasonal droughts",
    ],
    applications: [
      "Industrial captive hydro power generation",
      "Municipal water utility co-generation",
      "Wastewater treatment plant energy recovery",
      "Agricultural irrigation head recovery",
    ],
    scopeOfWork: [
      "Hydraulic head modeling and fluid recovery loop design",
      "Compact turbine runner and casing fabrication",
      "Water filtration and recirculation pumping telemetry",
      "Grid synchronization switchgear and protective relaying",
    ],
    note: "Official HIT Proprietary Technology — Modular units ready for site-specific integration.",
  },
  {
    id: "pune-wind-plant",
    slug: "pune-wind-plant",
    title: "Utility Wind Power Generation (2MW Plant Pune)",
    category: "Implemented Milestone",
    shortDescription:
      "Proven execution milestone: successfully implemented 2MW operational wind power plant in Pune, Maharashtra delivering clean grid-synchronized energy.",
    fullDescription:
      "Backing our engineering innovations with proven on-the-ground execution, our team of 5 engineers has successfully implemented and commissioned a 2MW utility-scale wind power plant in Pune, Maharashtra. This operational installation demonstrates our full-spectrum capabilities spanning resource assessment, mechanical erection, electrical substation interconnection, and regulatory grid clearance.",
    iconName: "SunMedium",
    imageUrl:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "2MW wind power plant turbine in Pune Maharashtra",
    keyBenefits: [
      "Demonstrated 2MW implementation track record in Maharashtra",
      "Seamless synchronization with regional transmission utility grid",
      "High capacity utilization factor and optimized turbine aerodynamics",
      "Engineered by our in-house multidisciplinary engineering team",
    ],
    applications: [
      "Regional utility feed-in & power purchase agreements (PPA)",
      "Industrial group captive wind wheeling",
      "Clean Energy Certificate (REC) and ESG compliance fulfillment",
    ],
    scopeOfWork: [
      "Micrositing and microsite wind yield modeling",
      "Civil foundation and high-voltage transmission bay engineering",
      "Turbine assembly, nacelle alignment, and blade pitch calibration",
      "SCADA remote monitoring and grid dispatch synchronization",
    ],
    note: "Successfully implemented operational milestone — Pune, Maharashtra.",
  },
  {
    id: "clean-green-systems",
    slug: "clean-green-systems",
    title: "Clean & Green Power Systems",
    category: "Integrated Energy",
    shortDescription:
      "Combining Anthro windmills and NeerGen hydro into unified 100% clean base-load energy architectures to move the world toward zero-emission independence.",
    fullDescription:
      "Our mission is to power 1/2 of the world's energy needs by utilizing the cleanest and purest forms of energy. We architect hybrid systems that eliminate the need for fossil-fueled peaking or backup plants by coupling continuous Anthropogenic Windmills with modular NeerGen hydro systems.",
    iconName: "Cpu",
    imageUrl:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Integrated clean energy power control center and renewable infrastructure",
    keyBenefits: [
      "True 100% green base-load power without fossil backups",
      "Eliminates expensive, oversized battery storage chemical degradation",
      "Substantial levelized cost of electricity (LCOE) savings",
      "Direct contribution toward national net-zero decarbonization goals",
    ],
    applications: [
      "Smart industrial cities & green economic zones",
      "Zero-carbon manufacturing facilities",
      "Off-grid mining & remote infrastructure hubs",
    ],
    scopeOfWork: [
      "Plant-wide base-load dynamic load curve analysis",
      "Hybrid power control center (HPCC) programming",
      "Automated load shedding and frequency stabilization",
      "Lifecycle preventive telemetry and remote servicing",
    ],
    note: "Strategic Vision — Accelerating India's and the world's clean energy transition.",
  },
];

