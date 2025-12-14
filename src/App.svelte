<script lang="ts">
  import Navbar from './lib/Navbar.svelte';
  import Hero from './lib/Hero.svelte';
  import Skills from './lib/Skills.svelte';
  import Experience from './lib/Experience.svelte';
  import Projects from './lib/Projects.svelte';
  import Contact from './lib/Contact.svelte';
</script>

<div class="bg-[#0B0B0C] min-h-screen text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans antialiased overflow-hidden relative">
  <Navbar />
  
  <main class="relative z-10 w-full">
    <div id="about">
      <Hero />
    </div>
    <Skills />
    <Experience />
    <Projects />
    <Contact />
  </main>
</div>
