<script lang="ts">
  import { profile } from './data';
  import { fly } from 'svelte/transition';
  import { fade } from 'svelte/transition';

  function scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<section class="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto py-20">
  <div class="space-y-6" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
    <p class="text-cyan-400 font-mono tracking-wide text-sm ml-1" in:fade={{ duration: 1000, delay: 300 }}>Hi, my name is</p>
    <h1 class="text-6xl md:text-8xl font-bold tracking-tight text-white mb-2" in:fly={{ y: 20, duration: 800, delay: 400 }}>
      {profile.name}.
    </h1>
    <h2 class="text-4xl md:text-6xl font-semibold text-zinc-400 tracking-tight" in:fly={{ y: 20, duration: 800, delay: 500 }}>
      I build <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">scalable systems</span>.
    </h2>
    <p class="text-zinc-400 max-w-xl text-lg leading-relaxed mt-6" in:fly={{ y: 20, duration: 800, delay: 600 }}>
      {profile.bio}
    </p>
    
    <div class="pt-10 flex gap-4" in:fly={{ y: 20, duration: 800, delay: 700 }}>
      <button on:click={scrollToProjects} class="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 relative overflow-hidden group w-full sm:w-auto">
        <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <span class="relative z-10">View Work</span>
      </button>
      
      <a href="/resume.pdf" target="_blank" class="px-8 py-3 border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm rounded-full font-semibold text-zinc-100 hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto">
        <span>View Resume</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:scale-110 transition-transform duration-300"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
      </a>
    </div>
  </div>
</section>
