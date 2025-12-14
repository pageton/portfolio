<script lang="ts">
  import { skills } from './data';
  import { reveal } from './actions';
</script>

<section id="skills" class="py-24 px-6 max-w-4xl mx-auto">
  <h2 class="text-3xl font-bold text-white mb-12 flex items-center gap-4">
    <span class="text-cyan-500 font-mono text-xl">01.</span> Skills
    <span class="h-px bg-zinc-800 flex-grow max-w-xs bg-gradient-to-r from-cyan-500/50 to-transparent"></span>
  </h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" use:reveal={{ delay: 200 }}>
    {#each skills as category}
      <div class="bg-[#151515]/80 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] group">
        <h3 class="text-xl font-semibold text-zinc-100 mb-4 group-hover:text-cyan-400 transition-colors">{category.category}</h3>
        <div class="flex flex-wrap gap-2">
          {#each category.items as item}
            <span class="px-3 py-1 bg-white/5 border border-white/5 text-zinc-400 text-sm font-mono rounded-md group-hover:border-cyan-500/20 group-hover:text-cyan-100 transition-colors">
              {item}
            </span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
