export interface Profile {
    name: string;
    role: string;
    location: string;
    bio: string;
    email: string;
    github: string;
    mtgoLabs: string;
    runixIO: string;
    telegram: string;
    linkedin: string;
}

export const profile: Profile = {
    name: "Sadiq",
    role: "Go Systems Engineer",
    location: "Basra, Iraq",
    bio: "Building backend infrastructure, Telegram/MTProto tooling, developer tools, and AI-agent workflows. Experienced in Go systems programming, database tooling, and open-source engineering.",
    email: "pageton@proton.me",
    github: "https://github.com/pageton",
    mtgoLabs: "https://github.com/mtgo-labs",
    runixIO: "https://github.com/RunixIO",
    telegram: "https://t.me/pageton",
    linkedin: "https://www.linkedin.com/in/sadiq-jafar-0388742aa",
};

export const about = `
I'm a Go systems engineer focused on building backend infrastructure
and developer tooling. My work spans Telegram/MTProto protocol
clients, terminal database utilities, process management, and
AI-agent workflows.

I care about clean API design, generated type systems, reproducible
environments, and shipping reliable open-source tools that solve
real problems for engineers.
`.trim();

export interface SkillCategory {
    category: string;
    items: string[];
}

export const skills: SkillCategory[] = [
    { category: "Core", items: ["Go", "Systems Programming", "CLI / TUI", "API Design", "Concurrency", "FFI / CGo"] },
    { category: "Backend", items: ["Fiber", "Huma", "Hono", "Express", "OpenAPI", "gRPC"] },
    { category: "Databases", items: ["PostgreSQL", "SQLite", "MongoDB", "Redis", "SQLC", "Prisma"] },
    { category: "Infrastructure", items: ["Nix / NixOS", "Docker", "Nginx", "Linux", "GitHub Actions"] },
    { category: "Frontend", items: ["TypeScript", "Svelte", "React", "Next.js", "Vite", "Tailwind CSS"] },
];

export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
}

export const experience: Experience[] = [
    {
        role: "Open-Source Engineer",
        company: "Independent",
        period: "2021 - Present",
        description: "Designing and maintaining Go-based backend and developer tooling projects. Building MTProto clients, database utilities, process managers, and reproducible NixOS environments."
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
        title: "MTGo",
        description: "Go MTProto client for Telegram bots and userbots. Generated TL type system, SQLite session storage, middleware and plugin architecture, robust update handling, and a carefully designed developer API.",
        link: "https://github.com/mtgo-labs/mtgo",
        tags: ["Go", "MTProto", "Telegram", "API"]
    },
    {
        title: "Runix",
        description: "Polyglot process manager and application supervisor with CLI, TUI, Web UI, and MCP server. Built as an infrastructure and developer tooling project in Go.",
        link: "https://github.com/RunixIO/runix",
        tags: ["Go", "DevOps", "System"]
    },
    {
        title: "dbview",
        description: "Terminal TUI database viewer supporting multiple backends. Designed for developer productivity when working across SQL and NoSQL databases.",
        link: "https://github.com/pageton/dbview",
        tags: ["Go", "TUI", "Database"]
    },
    {
        title: "bridge-db",
        description: "CLI tool for moving and bridging data between SQL and NoSQL databases. Supports checkpointing, resume, and SSH tunneling for remote database access.",
        link: "https://github.com/pageton/bridge-db",
        tags: ["Go", "Database", "CLI"]
    },
    {
        title: "NixOS Config",
        description: "Reproducible NixOS development environment. Declarative system configuration, developer tooling setup, and infrastructure-as-code for personal workstations.",
        link: "https://github.com/pageton/nixos-config",
        tags: ["Nix", "DevOps", "Linux"]
    },
];

export const openToWork = "Open to remote backend, systems, developer tools, and AI-agent infrastructure roles.";
