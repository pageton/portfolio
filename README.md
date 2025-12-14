# Portfolio

Professional, clean, and modern developer portfolio for a Full Stack Software Engineer. Built with **Svelte 5**, **TypeScript**, **Vite**, and **Tailwind CSS 4**.

## Tech Stack

- **Framework**: [Svelte 5](https://svelte.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: SVG / Feather
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter)

## How to Run

### Prerequisites
- [Bun](https://bun.sh/) (Latest version)

### Development

1.  **Install dependencies**:
    ```bash
    bun install
    ```

2.  **Start the development server**:
    ```bash
    bun dev
    ```
    The site will be available at `http://localhost:5173`.

### Production Build

1.  **Build the project**:
    ```bash
    bun run build
    ```

2.  **Preview the build**:
    ```bash
    bun run preview
    ```

## Project Structure

- `src/main.ts`: Entry point.
- `src/App.svelte`: Main application layout.
- `src/lib/`: Svelte components and data.
    - `data.ts`: Centralized content and type definitions.
    - `Hero.svelte`, `Skills.svelte`, `Experience.svelte`, `Projects.svelte`, `Contact.svelte`: Section components.
