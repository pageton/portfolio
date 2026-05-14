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
    bio: "Backend & Systems Engineer | Focused on high-performance, scalable systems. Experienced in Go (including TinyGo) and FFI for multi-language integration. Specialized in TypeScript, NixOS, and DevOps.",
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
        title: "Runix",
        description: "Modern polyglot process manager & application supervisor with CLI, TUI, Web UI, and MCP server. Built as a PM2 alternative in Go.",
        link: "https://github.com/RunixIO/runix",
        tags: ["Go", "DevOps", "System"]
    },
    {
        title: "botx",
        description: "High-performance Go Telegram Bot API client with auto-generated types, middleware framework, and webhook support.",
        link: "https://github.com/pageton/botx",
        tags: ["Go", "Telegram", "API"]
    },
    {
        title: "dbview",
        description: "Terminal TUI database viewer for 9 backends including SQLite, PostgreSQL, MySQL, MongoDB, and Redis.",
        link: "https://github.com/pageton/dbview",
        tags: ["Go", "TUI", "Database"]
    },
    {
        title: "bridge-db",
        description: "Move data between SQL and NoSQL databases — 8 engines, 64 pairings with checkpoint, resume, and SSH tunneling.",
        link: "https://github.com/pageton/bridge-db",
        tags: ["Go", "Database", "CLI"]
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
    },
    {
        title: "Server",
        description: "Reproducible NixOS server configuration with modular deployments for Nginx, Tailscale, Cloudflare, Bitwarden, and MTProxy.",
        link: "https://github.com/pageton/Server",
        tags: ["Nix", "DevOps", "Server"]
    }
];
