// data/services-data.ts
import { teamData } from './team-data';

export interface FAQ {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  icon: string; // Restored for the main services page
  details: string[]; // Restored for the main services page
  leadExpert: (typeof teamData)[0];
  content: string;
  faqs: FAQ[];
}

export const servicesData: Service[] = [
  {
    slug: 'tax-advisory',
    title: 'Tax Advisory & Compliance',
    subtitle: 'Expert tax planning and SARS compliance services in Centurion to minimize your tax burden and ensure financial peace of mind.',
    imageUrl: '/images/services/tax-advisory-hero.jpg',
    icon: 'Scale',
    details: ['Individual & Corporate Tax Returns', 'Provisional Tax Submissions', 'VAT, PAYE, SDL, UIF Compliance', 'SARS Dispute Resolution'],
    leadExpert: teamData.find(m => m.slug === 'jannie-venter')!,
    content: `<p class="text-lg text-slate-600 mb-6">Navigating the South African tax landscape requires more than just compliance; it demands strategic foresight. Our tax advisory services are designed to align your tax strategy with your business objectives, ensuring efficiency while mitigating risk.</p>`,
    faqs: [
        { q: 'Who needs to file a tax return in South Africa?', a: 'Any individual who earns above the tax threshold, or runs a business, must file a tax return. We provide expert guidance for all scenarios.' },
        { q: 'What is the difference between tax avoidance and tax evasion?', a: 'Tax avoidance is the legal use of tax laws to reduce one\'s tax burden, which we specialize in. Tax evasion is the illegal non-payment of taxes.' },
    ],
  },
  {
    slug: 'business-structuring',
    title: 'Business Structuring',
    subtitle: 'Architecting the optimal legal and financial structure for your enterprise to support growth, manage risk, and ensure CIPC compliance.',
    imageUrl: '/images/services/business-structuring-hero.jpg',
    icon: 'Building2',
    details: ['New Company Registrations (Pty, NPC)', 'CIPC Amendments & Annual Returns', 'Trust Formation & Administration', 'Complex Enterprise Valuations'],
    leadExpert: teamData.find(m => m.slug === 'charlie-naude')!,
    content: `<p class="text-lg text-slate-600 mb-6">The structure of your business is its foundation. A robust structure facilitates growth, protects assets, and ensures long-term viability. We provide expert guidance on creating and maintaining the optimal framework for your vision.</p>`,
    faqs: [
        { q: 'What is the best legal structure for my new business?', a: 'The optimal structure (e.g., Sole Proprietor, Pty Ltd) depends on your liability, tax implications, and growth plans. We provide tailored advice to help you choose correctly.' },
        { q: 'How do I ensure my company remains CIPC compliant?', a: 'Annual returns must be filed and any changes to directors or company information must be registered. We manage this entire process to ensure you remain compliant.' },
    ],
  },
  {
    slug: 'legacy-planning',
    title: 'Estate & Legacy Planning',
    subtitle: 'Ensuring your wealth is protected and seamlessly transferred for generations to come through meticulous, long-term planning.',
    imageUrl: '/images/services/legacy-planning-hero.jpg',
    icon: 'GitBranchPlus',
    details: ['Drafting of Last Will & Testament', 'Intergenerational Wealth Transfer', 'Executor Services', 'Trust & Estate Administration'],
    leadExpert: teamData.find(m => m.slug === 'charlie-naude')!,
    content: `<p class="text-lg text-slate-600 mb-6">True wealth is generational. Our legacy planning services focus on creating robust structures that protect your assets and ensure your vision is carried forward, providing security for your family and continuity for your business.</p>`,
    faqs: [
        { q: 'Why is a professional executor important?', a: 'An independent, professional executor ensures your estate is administered impartially, efficiently, and in accordance with the law, preventing potential family disputes and delays.' },
    ],
  },
  {
    slug: 'financial-reporting',
    title: 'Financial Reporting',
    subtitle: 'Meticulous preparation of financial statements and management accounts for clear, actionable insights and full compliance.',
    imageUrl: '/images/services/financial-reporting-hero.jpg',
    icon: 'FileText',
    details: ['Annual Financial Statements (AFS)', 'Management Statements', 'Independent Reviews', 'Performance Analysis'],
    leadExpert: teamData.find(m => m.slug === 'henry-landsberg')!,
    content: `<p class="text-lg text-slate-600 mb-6">Accurate financial reporting is the bedrock of strategic business decisions. We provide clear, compliant, and insightful reports that allow you to understand performance, secure financing, and plan for the future with confidence.</p>`,
    faqs: [
        { q: 'What is the difference between AFS and Management Statements?', a: 'AFS are formal, year-end reports for external stakeholders like banks and SARS. Management Statements are internal reports for real-time decision-making.' },
    ],
  },
  {
    slug: 'payroll-administration',
    title: 'Payroll Administration',
    subtitle: 'Comprehensive payroll solutions to ensure your team is paid accurately and on time, while maintaining full SARS & Labour Law compliance.',
    imageUrl: '/images/services/payroll-hero.jpg',
    icon: 'UserCheck',
    details: ['Monthly Payroll Processing', 'Payslip Generation', 'EMP201 & EMP501 Submissions', 'UIF & COID Compliance'],
    leadExpert: teamData.find(m => m.slug === 'henry-landsberg')!,
    content: `<p class="text-lg text-slate-600 mb-6">Managing payroll is a critical but time-consuming task. Our comprehensive administration services remove this burden, ensuring accuracy, confidentiality, and full compliance with SARS and the Department of Labour.</p>`,
    faqs: [
        { q: 'What is an EMP501 reconciliation?', a: 'It is a bi-annual declaration to SARS reconciling the payroll taxes (PAYE, SDL, UIF) declared and paid for all employees during a specific period. Accuracy is critical to avoid penalties.' },
    ],
  },
  {
    slug: 'cloud-accounting',
    title: 'Cloud Accounting',
    subtitle: 'Modernizing your financial operations with leading cloud platforms like Sage and XERO for unparalleled efficiency and real-time data.',
    imageUrl: '/images/services/cloud-accounting-hero.jpg',
    icon: 'Cloud',
    details: ['Sage Platinum Partner Services', 'XERO & DEXT Integration', 'Software Setup & Training', 'Workflow Automation'],
    leadExpert: teamData.find(m => m.slug === 'charlie-naude')!,
    content: `<p class="text-lg text-slate-600 mb-6">Leverage the power of the cloud for real-time financial insights, streamlined workflows, and enhanced collaboration. As a Sage Platinum Partner, we are experts in migrating and optimizing your accounting systems for the digital age.</p>`,
    faqs: [
      { q: 'Which accounting software is right for me?', a: 'The best software depends on your business size, industry, and specific needs. As a Sage Platinum Partner and Xero expert, we can guide you to the perfect solution.' },
    ],
  }
];