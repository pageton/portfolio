<script lang="ts">
  import { profile } from './data';
  import { reveal } from './actions';
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
      leading-[0.9] mb-8"
      use:reveal={{ delay: 150, duration: 700, y: 60 }}>
      Let's<br>work.
    </h2>
    <p class="text-[var(--color-text-secondary)] text-lg mb-12 leading-relaxed max-w-md"
      use:reveal={{ delay: 300, duration: 500, y: 16 }}>
      Currently looking for new opportunities in systems programming and backend development. My inbox is always open.
    </p>

    <div use:reveal={{ delay: 400, duration: 500, y: 20 }}>
      <a href="mailto:{profile.email}"
        class="btn-press btn-primary inline-block px-6 py-3 bg-[var(--color-accent)] text-[var(--color-text-inverse)] font-bold text-sm tracking-wider uppercase hover:bg-[var(--color-accent-hover)]">
        {profile.email}
      </a>
    </div>
  </div>

  <footer class="mt-48 border-t-[3px] border-[var(--color-border)] pt-10" use:reveal={{ delay: 200, duration: 500, y: 16 }}>
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
      <div class="flex gap-6 text-sm font-medium">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-150">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-150">LinkedIn</a>
        <a href={profile.telegram} target="_blank" rel="noopener noreferrer" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-150">Telegram</a>
      </div>

      <div class="flex items-center gap-4">
        <a href="https://wakatime.com/@bf88d397-0648-4876-a53c-b2807508c148" target="_blank" rel="noopener noreferrer" class="opacity-50 hover:opacity-90 transition-opacity duration-150">
          <img src="https://wakatime.com/badge/user/bf88d397-0648-4876-a53c-b2807508c148.svg" alt="Total time coded since May 31 2024" />
        </a>
      </div>
    </div>

    <p class="mt-8 text-[var(--color-text-muted)] text-xs font-medium tracking-wider uppercase">Built by {profile.name}</p>
  </footer>
</section>
