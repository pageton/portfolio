<script lang="ts">
  import { experience } from './data';
  import { reveal } from './actions';
</script>

<section id="experience" class="py-24 px-6 max-w-5xl mx-auto">
  <div class="flex items-center gap-4 mb-16" use:reveal={{ delay: 0 }}>
    <span class="section-label">Experience</span>
    <div class="section-divider"></div>
  </div>

  <div use:reveal={{ delay: 100 }}>
    {#each experience as job}
      <div class="border-t border-[var(--color-border)]/60 py-8 group hover:bg-[var(--color-surface)]/30 -mx-4 px-4 transition-colors duration-300 rounded-sm">
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
          <h3 class="font-[var(--font-display)] text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-300">{job.role}</h3>
          <span class="text-sm text-[var(--color-text-muted)] font-[var(--font-display)] shrink-0">{job.period}</span>
        </div>
        <p class="text-sm text-[var(--color-accent)]/80 font-medium mb-3">{job.company}</p>
        <p class="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
          {job.description}
        </p>
      </div>
    {/each}
  </div>
</section>
