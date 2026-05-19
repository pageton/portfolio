<script lang="ts">
  import { profile, openToWork } from '$lib/data';
  import { reveal } from '$lib/actions';
</script>

<section id="contact" class="py-24 px-6 max-w-5xl mx-auto">
  <div class="max-w-xl">
    <div class="flex items-center gap-4 mb-12" use:reveal={{ delay: 0 }}>
      <span class="section-label">Contact</span>
      <div class="section-divider"></div>
    </div>

    <h2 class="font-[var(--font-display)] font-black italic
      text-[clamp(2.5rem,6vw,4rem)]
      text-[var(--color-text)]
      tracking-[-0.02em]
      leading-[0.9] mb-6"
      use:reveal={{ delay: 150, duration: 700, y: 60 }}>
      Let's<br>work.
    </h2>

    <p class="text-[var(--color-accent)] text-sm font-semibold tracking-wide mb-6"
      use:reveal={{ delay: 250, duration: 500, y: 12 }}>
      {openToWork}
    </p>

    <p class="text-[var(--color-text-secondary)] text-base mb-10 leading-relaxed max-w-md"
      use:reveal={{ delay: 350, duration: 500, y: 16 }}>
      Interested in collaborating on Go tooling, Telegram infrastructure, or developer tooling projects. My inbox is always open.
    </p>

    <div use:reveal={{ delay: 450, duration: 500, y: 20 }}>
      <a href="mailto:{profile.email}"
        class="btn-press btn-primary inline-block px-6 py-3 bg-[var(--color-accent)] text-[var(--color-text-inverse)] font-bold text-sm tracking-wider uppercase hover:bg-[var(--color-accent-hover)]">
        {profile.email}
      </a>
    </div>
  </div>

  <footer class="mt-48 border-t-[3px] border-[var(--color-border)] pt-10" use:reveal={{ delay: 200, duration: 500, y: 16 }}>
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
      <div class="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-150">GitHub</a>
        <a href={profile.mtgoLabs} target="_blank" rel="noopener noreferrer" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-150">mtgo-labs</a>
        <a href={profile.runixIO} target="_blank" rel="noopener noreferrer" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-150">RunixIO</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-150">LinkedIn</a>
        <a href={profile.telegram} target="_blank" rel="noopener noreferrer" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-150">Telegram</a>
      </div>
    </div>

    <p class="mt-8 text-[var(--color-text-muted)] text-xs font-medium tracking-wider uppercase">Built by {profile.name}</p>
  </footer>
</section>
