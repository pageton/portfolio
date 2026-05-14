<script lang="ts">
  import { skills } from './data';
  import { reveal } from './actions';
</script>

<section id="skills" class="py-24 px-6 max-w-5xl mx-auto">
  <div class="flex items-center gap-4 mb-16" use:reveal={{ delay: 0 }}>
    <span class="section-label">Skills</span>
    <div class="section-divider"></div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10" use:reveal={{ delay: 100 }}>
    {#each skills as category}
      <div>
        <h3 class="font-[var(--font-display)] text-lg font-semibold text-[var(--color-text)] mb-4 tracking-tight">{category.category}</h3>
        <div class="flex flex-wrap gap-2">
          {#each category.items as item}
            <span class="px-3 py-1.5 text-sm text-[var(--color-text-secondary)] border border-[var(--color-border)] rounded-sm hover:border-[var(--color-accent)]/40 hover:text-[var(--color-text)] hover:bg-[var(--color-accent-muted)] hover:-translate-y-px transition-all duration-200 cursor-default">
              {item}
            </span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
