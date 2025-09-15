export interface Project {
    id: number;
    title: string;
    description: string;
    desktopImage: string;
    mobileImage: string;
    projectLogo?: string;
    githubUrl: string;
    liveUrl: string;
    technologies: string[];
    featured: boolean;
    expandedDescription: string;
}