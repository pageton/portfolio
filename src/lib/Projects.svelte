<script lang="ts">
  import { projects } from './data';
  import { reveal } from './actions';
</script>

<section id="projects" class="py-24 px-6 max-w-5xl mx-auto">
  <div class="flex items-center gap-4 mb-16" use:reveal={{ delay: 0 }}>
    <span class="section-label">Work</span>
    <div class="section-divider"></div>
  </div>

  <div class="border-t border-[var(--color-border)]/60">
    {#each projects as project, i}
      {@const isFeatured = i === 0}
      {@const isLast = i === projects.length - 1}
      <div use:reveal={{ delay: i * 100 }}>
        <a href={project.link} target="_blank" rel="noopener noreferrer"
          class="block group py-8 hover:bg-[var(--color-surface)]/40 -mx-4 px-4 transition-colors duration-300 rounded-sm">
          <div class="{isFeatured ? 'md:flex md:items-start md:justify-between md:gap-8' : 'flex items-start justify-between gap-6'}">
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-3 mb-2">
                {#if isFeatured}
                  <span class="inline-block px-2 py-0.5 text-[0.65rem] font-semibold font-[var(--font-display)] tracking-wider uppercase bg-[var(--color-accent-muted)] text-[var(--color-accent)] rounded-sm">Featured</span>
                {/if}
                <h3 class="font-[var(--font-display)] {isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              <p class="{isFeatured ? 'text-base md:text-lg max-w-2xl' : 'text-sm'} text-[var(--color-text-secondary)] leading-relaxed group-hover:text-[var(--color-text)] transition-colors duration-300">
                {project.description}
              </p>
              {#if project.tags}
                <div class="flex flex-wrap gap-x-4 gap-y-1 mt-4">
                  {#each project.tags as tag}
                    <span class="text-xs font-medium text-[var(--color-text-muted)] font-[var(--font-display)] tracking-wide transition-colors duration-300 group-hover:text-[var(--color-text-secondary)]">{tag}</span>
                  {/each}
                </div>
              {/if}
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="{isFeatured ? 20 : 16}" height="{isFeatured ? 20 : 16}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="mt-1 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] translate-x-0 group-hover:translate-x-0.5 -translate-y-0 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </div>
        </a>
        {#if !isLast}
          <div class="border-t border-[var(--color-border)]/60"></div>
        {/if}
      </div>
    {/each}
  </div>
</section>
