<script lang="ts">
  import { profile, openToWork } from '$lib/data';
  import { reveal } from '$lib/actions';

  function scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<section class="relative min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
  <div class="space-y-8 pt-24 pb-32">
    <div class="flex items-center gap-3" use:reveal={{ delay: 0, duration: 500, y: 16 }}>
      <span class="section-label">{profile.role}</span>
      <span class="block h-px w-8 bg-[var(--color-accent)]/40 origin-left" style="animation: draw-line 0.5s var(--ease-out-expo) 0.15s forwards; transform: scaleX(0)"></span>
    </div>

    <h1 class="font-[var(--font-display)] font-black italic
      text-[clamp(4rem,10vw,7.5rem)]
      text-[var(--color-text)]
      leading-[0.85]
      tracking-[-0.03em]"
      use:reveal={{ delay: 200, duration: 800, y: 80 }}>
      {profile.name}
    </h1>

    <h2 class="font-[var(--font-display)] font-light italic
      text-[clamp(1.25rem,2.5vw,1.75rem)]
      text-[var(--color-text-secondary)]
      leading-snug max-w-2xl
      tracking-[-0.01em]"
      use:reveal={{ delay: 400, duration: 600, y: 40 }}>
      Building backend infrastructure, Telegram/MTProto tooling, database CLIs, and AI-agent workflows &mdash; in Go.
    </h2>

    <p class="text-[var(--color-text-secondary)] max-w-xl text-base leading-relaxed tracking-wide"
      use:reveal={{ delay: 550, duration: 600, y: 24 }}>
      {profile.bio}
    </p>

    <div class="inline-flex items-center gap-2 px-4 py-2 border-2 border-[var(--color-accent)]/30 text-[var(--color-accent)] text-sm font-semibold tracking-wide"
      use:reveal={{ delay: 650, duration: 500, y: 16 }}>
      <span class="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
      {openToWork}
    </div>

    <div class="pt-4 flex gap-4 items-center" use:reveal={{ delay: 750, duration: 600, y: 24 }}>
      <button on:click={scrollToProjects}
        class="btn-press btn-primary px-6 py-3 bg-[var(--color-accent)] text-[var(--color-text-inverse)] font-bold text-sm tracking-wider uppercase hover:bg-[var(--color-accent-hover)]">
        View Work
      </button>

      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
        class="btn-press btn-outline px-6 py-3 border-2 border-[var(--color-border)] text-[var(--color-text)] font-bold text-sm tracking-wider uppercase hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] inline-flex items-center gap-2">
        <span>Resume</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </a>
    </div>
  </div>

  <div class="absolute bottom-18 left-1/2 -translate-x-1/2 opacity-25" use:reveal={{ delay: 1100, duration: 500, y: 8 }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
  </div>

  <div class="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--color-border)] origin-left" style="animation: draw-line 0.8s var(--ease-out-expo) 0.6s both"></div>
</section>
