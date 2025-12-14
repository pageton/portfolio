<script lang="ts">
  import { projects } from './data';
  import { reveal } from './actions';
</script>

<section id="projects" class="py-24 px-6 max-w-4xl mx-auto">
  <h2 class="text-3xl font-bold text-white mb-12 flex items-center gap-4">
    <span class="text-cyan-500 font-mono text-xl">03.</span> Projects
    <span class="h-px bg-zinc-800 flex-grow max-w-xs bg-gradient-to-r from-cyan-500/50 to-transparent"></span>
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6" use:reveal={{ delay: 200 }}>
    {#each projects as project}
      <a href={project.link} target="_blank" class="block group bg-[#151515]/80 backdrop-blur-sm p-8 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden hover:shadow-[0_0_25px_rgba(99,102,241,0.15)]">
        <div class="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-400"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </div>
        <h3 class="text-xl font-bold text-zinc-100 mb-3 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p class="text-zinc-400 text-sm mb-6 leading-relaxed group-hover:text-zinc-300 transition-colors">
          {project.description}
        </p>
        {#if project.tags}
          <div class="flex flex-wrap gap-2 mt-auto">
            {#each project.tags as tag}
              <span class="text-xs font-mono text-zinc-500 group-hover:text-indigo-300/80 transition-colors">{tag}</span>
            {/each}
          </div>
        {/if}
      </a>
    {/each}
  </div>
</section>
