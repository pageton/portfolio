<script lang="ts">
  import { profile } from './data';
  import { fly, fade } from 'svelte/transition';

  function scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<section class="relative min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto py-24">
  <div class="space-y-8">
    <p class="section-label ml-0.5" in:fly={{ y: 30, duration: 800, delay: 200 }}>Engineer & Builder</p>

    <h1 class="font-[var(--font-display)] text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[var(--color-text)] leading-[0.9]"
      in:fly={{ y: 60, duration: 900, delay: 350 }}>
      {profile.name}
    </h1>

    <h2 class="font-[var(--font-display)] text-2xl md:text-3xl font-medium text-[var(--color-text-secondary)] tracking-tight max-w-2xl leading-snug"
      in:fly={{ y: 24, duration: 800, delay: 500 }}>
      Building high-performance systems tooling &mdash; from process managers to database utilities.
    </h2>

    <p class="text-[var(--color-text-secondary)] max-w-xl text-base leading-relaxed"
      in:fly={{ y: 20, duration: 800, delay: 600 }}>
      {profile.bio}
    </p>

    <div class="pt-8 flex gap-3" in:fly={{ y: 20, duration: 800, delay: 700 }}>
      <button on:click={scrollToProjects}
        class="btn-press px-7 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-[var(--font-display)] font-semibold text-sm tracking-wide rounded-sm hover:bg-[var(--color-accent-hover)]">
        View Work
      </button>

      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
        class="btn-press px-7 py-3 border border-[var(--color-border)] text-[var(--color-text)] font-[var(--font-display)] font-medium text-sm tracking-wide rounded-sm hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface)] flex items-center gap-2">
        <span>Resume</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </a>
    </div>
  </div>

  <div class="animate-float absolute bottom-8 left-1/2 opacity-30" in:fade={{ duration: 800, delay: 1200 }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
  </div>
</section>
