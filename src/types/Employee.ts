export interface Employee {
    id?: number;
    firstName: string;
    lastName: string;
    jobTitle: JobTitle | '';
    email?: string;
    birthday?: string;
    hoursAWeek?: number;
    technologies?: string[];
    level?: 'junior' | 'regular' | 'senior';
    salary?: number;
    canWorkRemotely?: boolean;
    profilePhoto?: File;
}

export type JobTitle = typeof jobTitles[number];

export const jobTitles = <const>[
    'Frontend Developer',
    'Backend Developer',
    'Database Specialist',
    'QA Specialist',
    'Analyst',
    'HR',
    'Administration',
];

export const technologies: Record<JobTitle, string[]> = {
    'Backend Developer': ['Java Spring', 'Java', 'Hibernate'],
    'Database Specialist': ['MySQL', 'PostgreSQL', 'NoSQL'],
    'Frontend Developer': ['React', 'Jest', 'NodeJS', 'Angular', 'Vue'],
    'QA Specialist': ['Selenium tests', 'Puppeteer', 'Playwright'],
    Administration: ['Microsoft Word', 'Microsoft Excel', 'Microsoft Outlook'],
    Analyst: ['Confluence', 'BPMN', 'UML'],
    HR: ['Zoom', 'Photoshop', 'Microsoft Outlook'],
};
