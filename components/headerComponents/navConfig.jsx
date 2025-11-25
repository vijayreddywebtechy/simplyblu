// components/header/navConfig.js

export const TOP_TABS = [
  { key: "personal", label: "Personal", href: "/personal" },
  { key: "business", label: "Business", href: "/business" },
  { key: "corporate", label: "Corporate and Institutions", href: "/corporate" },
  { key: "wealth", label: "Wealth", href: "/wealth" },
  { key: "news", label: "News and Media", href: "/news" },
];

// ------------------------------------------------------------
// BUSINESS SUBNAV (ONLY BUSINESS HAS THIS)
// ------------------------------------------------------------

export const BUSINESS_SUBNAV = [
  { id: "biz-products", label: "Product & Services", megaType: "type1" },
  { id: "biz-bizconnect", label: "BizConnect", href: "/business/bizconnect" },
  { id: "biz-trade", label: "Trade Point", href: "/business/trade-point" },
  { id: "biz-ucount", label: "UCount Rewards", href: "/business/ucount" },
];

// ------------------------------------------------------------
// MEGAMENU TYPE-1 (Business → Product & Services)
// ------------------------------------------------------------

export const MEGA_TYPE_1 = {
  sidebar: [
    "Bank with us",
    "Borrow for your needs",
    "Grow your money",
    "Insure what matters",
    "Business solutions",
    "Ways to bank",
    "Security centre",
  ],
  activeIndex: 0,
  sections: {
    0: [ // Bank with us
      {
        title: "Business Bank accounts",
        titleHref: "/business/bank-accounts",
        links: [
          "Business Current Account",
          "MyMoBiz Account",
          "BizLaunch Account",
          "MyMoBiz Plus Account",
          "BizLaunch Plus Account",
        ],
      },
      {
        title: "Trust accounts",
        titleHref: "/business/trust-accounts",
        links: [
          "Attorney's Trust Account",
          "Executor's Current Account",
          "Third-Party Fund Admin",
          "Property Practitioners Trust Account",
          "Compare Trust Account",
        ],
      },
      {
        title: "Business and corporate credit cards",
        titleHref: "/business/credit-cards",
        links: [
          "See all cards",
        ],
      },
      {
        title: "Switch your bank account",
        titleHref: "/business/switch-account",
        links: [],
      },
      {
        title: "Foreign exchange",
        titleHref: "/business/foreign-exchange",
        links: [
          "International Payments",
          "Shari'ah-compliant Forward Exchange Contracts",
          "Foreign notes for business",
          "Foreign currency account",
        ],
      },
      {
        title: "Shari'ah banking",
        titleHref: "/business/shariah-banking",
        links: [],
      },
    ],
    1: [ // Borrow for your needs
      {
        title: "Business Loans",
        titleHref: "/business/loans",
        links: [
          "Business Solar Financing",
          "Business Overdraft",
          "Business Revolving Loan",
          "Agricultural Production Loan",
          "Fixed Repayments Business Loan",
          "Business Term Loan",
          "BizFlex Loan",
        ],
      },
      {
        title: "Specialised financing",
        titleHref: "/business/specialised-financing",
        links: [
          "Disclosed debtor finance",
          "Non-disclosed debtor finance",
          "Bankers acceptance",
          "Debtor Finance Form",
          "Finance Calculator Form",
        ],
      },
      {
        title: "Vehicle and asset finance",
        titleHref: "/business/vehicle-asset-finance",
        links: [
          "Commercial vehicles",
          "Wholesale Finance",
          "Capital equipment",
          "Foreign or local goods",
          "Shari'ah commercial asset finance",
          "Finance Calculators",
        ],
      },
      {
        title: "Commercial property financing",
        titleHref: "/business/commercial-property",
        links: [
          "For investors",
          "For owner-occupiers",
          "Shari'ah Commercial Property Finance",
        ],
      },
      {
        title: "Loan calculator",
        titleHref: "/business/loan-calculator",
        links: [],
      },
    ],
    2: [ // Grow your money
      {
        title: "Business saving and investment accounts",
        titleHref: "/business/savings-investment",
        links: [
          "See all accounts",
          "Compare accounts",
          "Shari'ah Business Banking",
        ],
      },
    ],
    3: [ // Insure what matters
      {
        title: "Your agri business",
        titleHref: "/business/insurance/agri",
        links: [],
      },
      {
        title: "Your vehicles",
        titleHref: "/business/insurance/vehicles",
        links: [],
      },
      {
        title: "Your business",
        titleHref: "/business/insurance/business",
        links: [],
      },
      {
        title: "Loans",
        titleHref: "/business/insurance/loans",
        links: [],
      },
      {
        title: "Corporate risk",
        titleHref: "/business/insurance/corporate-risk",
        links: [],
      },
      {
        title: "Commercial property",
        titleHref: "/business/insurance/commercial-property",
        links: [],
      },
      {
        title: "Engineering risk",
        titleHref: "/business/insurance/engineering-risk",
        links: [],
      },
      {
        title: "New contracts",
        titleHref: "/business/insurance/new-contracts",
        links: [],
      },
      {
        title: "Cargo",
        titleHref: "/business/insurance/cargo",
        links: [],
      },
      {
        title: "Cash",
        titleHref: "/business/insurance/cash",
        links: [],
      },
      {
        title: "Energy business insurance",
        titleHref: "/business/insurance/energy",
        links: [],
      },
      {
        title: "Events",
        titleHref: "/business/insurance/events",
        links: [],
      },
      {
        title: "Mining Business Insurance",
        titleHref: "/business/insurance/mining",
        links: [],
      },
      {
        title: "Directors and Officers",
        titleHref: "/business/insurance/directors-officers",
        links: [],
      },
      {
        title: "Healthcare Sector Insurance",
        titleHref: "/business/insurance/healthcare",
        links: [],
      },
      {
        title: "Your people",
        titleHref: "/business/insurance/people",
        links: [],
      },
      {
        title: "Commercial Cyber Insurance",
        titleHref: "/business/insurance/cyber",
        links: [],
      },
    ],
    4: [ // Business solutions
      {
        title: "Merchant solutions",
        titleHref: "/business/solutions/merchant",
        links: [
          "Payment solutions for small business",
          "Payment solutions for large businesses",
          "Online payment solutions",
          "Value added services",
        ],
      },
      {
        title: "Specialised",
        titleHref: "/business/solutions/specialised",
        links: [
          "Cash Solutions",
          "Corporate Finance Advisory",
          "Debit order collections",
          "Shari'ah Cash Advance",
        ],
      },
      {
        title: "Fleet management",
        titleHref: "/business/solutions/fleet",
        links: [
          "Manage your fleet",
          "Fleet value added services",
          "Online account forms",
        ],
      },
      {
        title: "Industry",
        titleHref: "/business/solutions/industry",
        links: [
          "Agribusiness",
          "Sectors",
          "Manufacturing",
          "Retail and wholesale",
          "Property",
          "Transport and logistics",
          "Construction",
        ],
      },
      {
        title: "Trade Suite",
        titleHref: "/business/solutions/trade",
        links: [
          "Trade Finance",
          "International Payments",
          "Trade Barometer",
          "Africa China Trade",
        ],
      },
      {
        title: "Workplace solutions",
        titleHref: "/business/solutions/workplace",
        links: [
          "Employer value banking",
          "Instant Money bulk payments",
          "PayCard",
          "Prepaid card solutions",
          "Financial planning",
          "Salary Payments",
          "Payroll and HR Solutions",
        ],
      },
    ],
    5: [ // Ways to bank
      {
        title: "Self service banking",
        titleHref: "/business/ways-to-bank/self-service",
        links: [
          "Online Banking",
          "Online Banking for Business",
          "Mobile app",
          "ATMs",
          "Business Online",
          "Telephone banking",
        ],
      },
      {
        title: "Digital Banking",
        titleHref: "/business/ways-to-bank/digital",
        links: [],
      },
      {
        title: "Innovative Payment Solution",
        titleHref: "/business/ways-to-bank/innovative-payment",
        links: [
          "PayShap for business",
        ],
      },
      {
        title: "MyUpdates",
        titleHref: "/business/ways-to-bank/myupdates",
        links: [],
      },
    ],
    6: [ // Security centre
      {
        title: "Bank safely",
        titleHref: "/business/security/bank-safely",
        links: [
          "Online",
          "On the ATM",
          "On your cellphone",
          "MyUpdates",
          "DigiME",
        ],
      },
      {
        title: "Protect yourself",
        titleHref: "/business/security/protect-yourself",
        links: [
          "Guard your PIN",
          "Online",
          "Personal information",
          "Debit orders",
          "Account Verfication Services",
        ],
      },
      {
        title: "Scams and fraud",
        titleHref: "/business/security/scams-fraud",
        links: [
          "Scams",
          "Card fraud",
        ],
      },
    ],
  },
  // Default columns (backwards compatibility)
  get columns() {
    return this.sections[this.activeIndex] || [];
  },
};
