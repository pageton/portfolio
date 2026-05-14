<script lang="ts">
  import Navbar from './lib/Navbar.svelte';
  import Hero from './lib/Hero.svelte';
  import Skills from './lib/Skills.svelte';
  import Experience from './lib/Experience.svelte';
  import Projects from './lib/Projects.svelte';
  import Contact from './lib/Contact.svelte';
</script>

<div class="bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--color-accent)]/25 selection:text-[#F5E6C8] font-[var(--font-body)] antialiased [overflow:hidden_visible] relative">
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
