<script lang="ts">
  import { skills } from './data';
  import { reveal, revealLeft } from './actions';
</script>

<section id="skills" class="py-24 px-6 max-w-5xl mx-auto">
  <div class="flex items-center gap-4 mb-20" use:reveal={{ delay: 0 }}>
    <span class="section-label">Skills</span>
    <div class="section-divider"></div>
  </div>

  <div class="space-y-20">
    {#each skills as category, ci}
      <div use:revealLeft={{ delay: ci * 100, duration: 500, x: 24 }}>
        <h3 class="font-[var(--font-display)] font-bold text-lg italic text-[var(--color-text)] mb-5 tracking-tight">{category.category}</h3>
        <div class="flex flex-wrap gap-x-6 gap-y-3">
          {#each category.items as item, ii}
            <span class="skill-item text-sm text-[var(--color-text-secondary)]
              border-l-2 border-[var(--color-border)] pl-3
              transition-colors duration-150 cursor-default"
              style="--item-delay: {ii * 0.05}s">
              {item}
            </span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
