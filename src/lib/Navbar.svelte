<script lang="ts">
  let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<nav class={`fixed top-0 w-full z-50 transition-all duration-300 ${y > 50 ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_0_15px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'}`}>
  <div class="px-6 md:px-12 max-w-5xl mx-auto flex justify-between items-center">
    <a href="/" class="text-zinc-100 font-bold text-xl tracking-tighter hover:text-cyan-400 transition-colors">Sadiq.</a>
    
    <div class="hidden md:flex gap-8 text-sm font-medium font-mono">
       <a href="#about" class="text-zinc-400 hover:text-cyan-400 transition-colors"><span class="text-cyan-500">01.</span> About</a>
       <a href="#skills" class="text-zinc-400 hover:text-cyan-400 transition-colors"><span class="text-cyan-500">02.</span> Skills</a>
       <a href="#experience" class="text-zinc-400 hover:text-cyan-400 transition-colors"><span class="text-cyan-500">03.</span> Exp</a>
       <a href="#projects" class="text-zinc-400 hover:text-cyan-400 transition-colors"><span class="text-cyan-500">04.</span> Work</a>
       <a href="#contact" class="text-zinc-400 hover:text-cyan-400 transition-colors"><span class="text-cyan-500">05.</span> Contact</a>
    </div>

    <a href="#contact" class="md:hidden text-zinc-400 hover:text-white">Menu</a>
  </div>
</nav>
