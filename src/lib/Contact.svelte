<script lang="ts">
  import { profile } from './data';
  import { reveal } from './actions';
</script>

<section id="contact" class="py-24 px-6 max-w-5xl mx-auto" use:reveal={{ delay: 100 }}>
  <div class="max-w-xl">
    <div class="flex items-center gap-4 mb-8">
      <span class="section-label">Contact</span>
      <div class="section-divider"></div>
    </div>

    <h2 class="font-[var(--font-display)] text-4xl md:text-5xl font-bold text-[var(--color-text)] tracking-tight mb-6 leading-tight">
      Let's work<br>together.
    </h2>
    <p class="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed max-w-md">
      Currently looking for new opportunities in systems programming and backend development. My inbox is always open.
    </p>

    <a href="mailto:{profile.email}"
      class="btn-press inline-block px-7 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-[var(--font-display)] font-semibold text-sm tracking-wide rounded-sm hover:bg-[var(--color-accent-hover)]">
      {profile.email}
    </a>
  </div>

  <footer class="mt-40 border-t border-[var(--color-border)]/60 pt-8">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
      <div class="flex gap-6 text-sm">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200">LinkedIn</a>
        <a href={profile.telegram} target="_blank" rel="noopener noreferrer" class="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200">Telegram</a>
      </div>

      <div class="flex items-center gap-4">
        <a href="https://wakatime.com/@bf88d397-0648-4876-a53c-b2807508c148" target="_blank" rel="noopener noreferrer" class="opacity-60 hover:opacity-100 transition-opacity duration-200">
          <img src="https://wakatime.com/badge/user/bf88d397-0648-4876-a53c-b2807508c148.svg" alt="Total time coded since May 31 2024" />
        </a>
      </div>
    </div>

    <p class="mt-6 text-[var(--color-text-muted)] text-xs">Built by {profile.name}</p>
  </footer>
</section>
