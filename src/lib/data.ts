export interface Profile {
    name: string;
    role: string;
    location: string;
    bio: string;
    email: string;
    github: string;
    wakatime: string;
    telegram: string;
    linkedin: string;
}

export const profile: Profile = {
    name: "Sadiq",
    role: "Full Stack Software Engineer",
    location: "Basra, Iraq",
    bio: "Backend & Systems Engineer | Focused on high-performance, scalable systems. Experiened in Go (including TinyGo) and FFI for multi-language integration. Specialized in TypeScript and NixOS.",
    email: "pageton@proton.me",
    github: "https://github.com/pageton",
    wakatime: "https://wakatime.com/@Rio",
    telegram: "https://t.me/pageton",
    linkedin: "https://www.linkedin.com/in/sadiq-jafar-0388742aa",
};

export interface SkillCategory {
    category: string;
    items: string[];
}

export const skills: SkillCategory[] = [
    { category: "Languages", items: ["Go", "TinyGo", "JavaScript", "TypeScript", "Python", "C", "SQL"] },
    { category: "Systems", items: ["FFI", "Nix", "Linux (NixOS)", "Docker", "Nginx"] },
    { category: "Backend", items: ["Fiber", "Huma", "Express", "Hono", "Elysia", "OpenAPI"] },
    { category: "Frontend", items: ["Svelte", "React", "Next.js", "Vite", "Tailwind CSS"] },
    { category: "Data", items: ["PostgreSQL", "SQLite", "MongoDB", "Redis", "SQLC", "Prisma"] },
];

export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
}

export const experience: Experience[] = [
    {
        role: "Full Stack Developer",
        company: "Self-Employed / Freelance",
        period: "2021 - Present",
        description: "Developing full-stack applications and backend systems. Focusing on performance code and system design."
    }
];

export interface Project {
    title: string;
    description: string;
    link: string;
    tags?: string[];
}

export const projects: Project[] = [
    {
        title: "Nest-Server",
        description: "A high-performance backend service for file management built with Go and Fiber.",
        link: "https://github.com/MyCloudNest/Nest-Server",
        tags: ["Go", "Fiber", "Backend"]
    },
    {
        title: "Authify",
        description: "Secure and flexible user authentication system designed for modern web applications.",
        link: "https://github.com/pageton/authify",
        tags: ["Go", "OAuth2", "Security"]
    },
    {
        title: "Temp-Mail",
        description: "Self-hosted temporary email service with automatic Postfix configuration. Built with Go, Fiber, and SQLite.",
        link: "https://github.com/pageton/temp-mail",
        tags: ["Go", "System", "Postfix"]
    },
    {
        title: "NixOS Config",
        description: "Reproducible system configuration for my personal development environment using Nix.",
        link: "https://github.com/pageton/nixos-config",
        tags: ["Nix", "DevOps", "Linux"]
    }
];
