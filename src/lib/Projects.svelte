<script lang="ts">
  import { projects } from '$lib/data';
  import { reveal, revealLeft } from '$lib/actions';
</script>

<section id="projects" class="py-24 px-6 max-w-5xl mx-auto">
  <div class="flex items-center gap-4 mb-20" use:reveal={{ delay: 0 }}>
    <span class="section-label">Work</span>
    <div class="section-divider"></div>
  </div>

  <div class="border-t-[3px] border-[var(--color-border)]">
    {#each projects as project, i}
      {@const isLast = i === projects.length - 1}
      <div use:revealLeft={{ delay: i * 80, duration: 500, x: 24 }}>
        <a href={project.link} target="_blank" rel="noopener noreferrer"
          class="project-row block group py-8 hover:bg-[var(--color-surface)]/60 -mx-4 px-4
            transition-colors duration-150">
          <div class="flex items-start justify-between gap-6">
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-3 mb-3">
                <h3 class="font-[var(--font-display)] font-bold italic text-xl
                  text-[var(--color-text)] group-hover:text-[var(--color-accent)]
                  transition-colors duration-150">
                  {project.title}
                </h3>
                {#if i === 0}
                  <span class="inline-block px-2 py-0.5 text-[0.6rem] font-bold font-[var(--font-display)] tracking-[0.15em] uppercase border-2 border-[var(--color-accent)]/40 text-[var(--color-accent)]">
                    Featured
                  </span>
                {/if}
              </div>
              <p class="text-sm leading-relaxed
                text-[var(--color-text-secondary)]
                group-hover:text-[var(--color-text)]
                transition-colors duration-150 max-w-2xl">
                {project.description}
              </p>
              {#if project.tags}
                <div class="flex flex-wrap gap-x-5 gap-y-1 mt-5">
                  {#each project.tags as tag}
                    <span class="text-xs font-medium text-[var(--color-text-muted)] tracking-wide
                      transition-colors duration-150 group-hover:text-[var(--color-text-secondary)]">
                      {tag}
                    </span>
                  {/each}
                </div>
              {/if}
            </div>

            <svg xmlns="http://www.w3.org/2000/svg"
              width="16" height="16"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"
              class="mt-1 text-[var(--color-text-muted)]
                group-hover:text-[var(--color-accent)]
                translate-x-0 group-hover:translate-x-1 -translate-y-0 group-hover:-translate-y-1
                transition-all duration-150 shrink-0">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </div>
        </a>
        {#if !isLast}
          <div class="border-b-2 border-[var(--color-border)]/60"></div>
        {/if}
      </div>
    {/each}
  </div>
</section>
