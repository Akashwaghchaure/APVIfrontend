export interface ProjectItem {
  id: string;
  title: string;
  category: "Renewable Energy" | "Power Generation" | "Infrastructure" | "Engineering Solutions";
  categorySlug: string;
  location: string;
  description: string;
  fullOverview: string;
  scopeHighlights: string[];
  imageUrl: string;
  imageAlt: string;
  featured: boolean;
  statusBadge: string;
  isImplemented: boolean;
  capacity?: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "pune-2mw-wind-plant",
    title: "2MW Operational Wind Power Plant — Pune",
    category: "Renewable Energy",
    categorySlug: "renewable-energy",
    location: "Pune, Maharashtra, India",
    capacity: "2.0 MW",
    description:
      "Successfully implemented and grid-connected 2MW utility-scale wind power generation plant engineered by our team of 5 specialized engineers.",
    fullOverview:
      "A flagship operational milestone for HIT India. Engineered to supply clean, high-yield renewable power into the regional transmission network. The project encompassed complete site wind resource evaluation, turbine mechanical erection, 33kV evacuation switchyard, and CEA statutory grid compliance clearances.",
    scopeHighlights: [
      "2.0 MW high-yield wind turbine erection & commissioning",
      "33kV grid evacuation switchyard and transformer bay",
      "Continuous SCADA telemetry & reactive power stabilization",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "2MW operational wind turbine plant in Pune Maharashtra",
    featured: true,
    statusBadge: "Successfully Implemented",
    isImplemented: true,
  },
  {
    id: "anthro-windmill-pilot",
    title: "Anthropogenic Windmill (Anthro-1MW SPM)",
    category: "Power Generation",
    categorySlug: "power-generation",
    location: "Engineering Innovation Hub, Maharashtra",
    capacity: "1.0 MW Continuous",
    description:
      "Revolutionary artificial low-pressure vacuum system generating continuous 24*7*365 base-load electrical power independent of external wind speeds.",
    fullOverview:
      "Utilizing our proprietary Special Purpose Machine (SPM) pressure differential chamber, this installation accelerates directed internal airflow through a precision Venturi duct, driving an internal high-efficiency turbine generator 24 hours a day, 365 days a year without atmospheric wind lulls.",
    scopeHighlights: [
      "Special Purpose Machine (SPM) vacuum chamber fabrication",
      "Internal high-velocity fluid dynamics & Venturi nozzle",
      "Continuous 24*7*365 base-load power generation testing",
    ],
    imageUrl: "/images/anthropogenic-windmill.jpg",
    imageAlt: "Anthropogenic Windmill artificial low pressure machine technical schematic",
    featured: true,
    statusBadge: "Proprietary Product Architecture",
    isImplemented: true,
  },
  {
    id: "neergen-hydro-pilot",
    title: "NeerGen Closed-Loop Hydro Pilot (NeerGen-0.5MW)",
    category: "Renewable Energy",
    categorySlug: "renewable-energy",
    location: "Maharashtra, India",
    capacity: "500 kW Hydro",
    description:
      "Compact hydroelectric generation unit achieving required hydraulic head with continuous water recirculation, eliminating civil dam costs.",
    fullOverview:
      "Demonstrating the viability of modular hydro power without submerging land or constructing expensive concrete dams. Features closed-loop water recycling that allows 100% of the water to be recirculated, drastically lowering capital costs and land footprint per kilowatt-hour.",
    scopeHighlights: [
      "Engineered hydraulic head optimization loop",
      "Closed-loop water recirculation and filtration pump system",
      "High-efficiency compact hydro turbine runner deployment",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Compact hydroelectric power generation installation",
    featured: true,
    statusBadge: "Proprietary Product Architecture",
    isImplemented: true,
  },
  {
    id: "industrial-clean-microgrid",
    title: "Continuous 24/7/365 Green Industrial Microgrid",
    category: "Engineering Solutions",
    categorySlug: "engineering-solutions",
    location: "Pune Industrial Region, Maharashtra",
    capacity: "1.5 MW Hybrid",
    description:
      "Integrated captive energy topology coupling Anthro wind power with NeerGen hydro to supply 100% continuous green base-load electricity.",
    fullOverview:
      "Engineered for heavy continuous-process manufacturing plants seeking to completely eliminate dirty diesel generator run-hours and avoid peak-hour grid tariffs. Delivers predictable, steady voltage and frequency 24*7*365.",
    scopeHighlights: [
      "Hybrid continuous generation telemetry synchronization",
      "Automatic transfer and reactive power factor optimization",
      "Zero-carbon continuous process baseline supply",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Industrial renewable energy substation and clean power generation infrastructure",
    featured: false,
    statusBadge: "Integrated Architecture",
    isImplemented: true,
  },
];

