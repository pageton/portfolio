<script lang="ts">
  let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<nav class="fixed top-0 w-full z-50 transition-all duration-300 {y > 60 ? 'bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]/60 py-4' : 'bg-transparent py-6'}">
  <div class="px-6 md:px-12 max-w-5xl mx-auto flex justify-between items-center">
    <a href="/" class="font-[var(--font-display)] font-bold text-lg text-[var(--color-text)] tracking-tight hover:text-[var(--color-accent)] transition-colors duration-200">
      Sadiq
    </a>

    <div class="hidden md:flex gap-8 text-sm font-medium font-[var(--font-display)]">
      <a href="#about" class="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-200">About</a>
      <a href="#skills" class="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-200">Skills</a>
      <a href="#experience" class="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-200">Experience</a>
      <a href="#projects" class="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-200">Work</a>
      <a href="#contact" class="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-200">Contact</a>
    </div>

    <button class="md:hidden text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-200" aria-label="Menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
    </button>
  </div>
</nav>
