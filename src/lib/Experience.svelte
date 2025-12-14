<script lang="ts">
  import { experience } from './data';
  import { reveal } from './actions';
</script>

<section id="experience" class="py-24 px-6 max-w-4xl mx-auto">
  <h2 class="text-3xl font-bold text-white mb-12 flex items-center gap-4">
    <span class="text-cyan-500 font-mono text-xl">02.</span> Experience
    <span class="h-px bg-zinc-800 flex-grow max-w-xs bg-gradient-to-r from-cyan-500/50 to-transparent"></span>
  </h2>

  <div class="space-y-12 border-l border-white/10 ml-3 pl-8 relative" use:reveal={{ delay: 200 }}>
    {#each experience as job}
      <div class="relative group">
        <span class="absolute -left-[39px] top-1.5 h-5 w-5 rounded-full border-4 border-[#0D0D0D] bg-zinc-600 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300"></span>
        <h3 class="text-xl font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors">{job.role}</h3>
        <p class="text-zinc-400 font-mono text-sm mb-4 mt-1">{job.company} <span class="mx-2 text-zinc-600">|</span> {job.period}</p>
        <p class="text-zinc-400 leading-relaxed max-w-2xl">
          {job.description}
        </p>
      </div>
    {/each}
  </div>
</section>
