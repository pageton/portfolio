<script lang="ts">
  import { experience } from '$lib/data';
  import { revealLeft } from '$lib/actions';
</script>

<section id="experience" class="py-24 px-6 max-w-5xl mx-auto">
  <div class="flex items-center gap-4 mb-20" use:revealLeft={{ delay: 0 }}>
    <span class="section-label">Background</span>
    <div class="section-divider"></div>
  </div>

  <div class="border-t-[3px] border-[var(--color-border)]">
    {#each experience as job, i}
      <div use:revealLeft={{ delay: i * 120, duration: 500, x: 30 }}>
        <div class="experience-row border-b-2 border-[var(--color-border)]/60 py-10 group
          hover:bg-[var(--color-surface)]/60 -mx-4 px-4
          transition-colors duration-150">
          <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-4">
            <h3 class="font-[var(--font-display)] font-bold italic text-2xl text-[var(--color-text)]
              group-hover:text-[var(--color-accent)] transition-colors duration-150">
              {job.role}
            </h3>
            <span class="text-sm text-[var(--color-text-muted)] font-medium shrink-0">{job.period}</span>
          </div>
          <p class="text-sm text-[var(--color-accent)] font-semibold tracking-wide mb-4">{job.company}</p>
          <p class="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl text-base">
            {job.description}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>
