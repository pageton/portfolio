<script lang="ts">
  import Navbar from '$lib/Navbar.svelte';
  import Hero from '$lib/Hero.svelte';
  import About from '$lib/About.svelte';
  import Skills from '$lib/Skills.svelte';
  import Experience from '$lib/Experience.svelte';
  import Projects from '$lib/Projects.svelte';
  import Contact from '$lib/Contact.svelte';
</script>

<div class="relative bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)] selection:bg-[var(--color-accent)]/30 min-h-screen">
  <div class="grain"></div>
  <div class="grid-overlay"></div>

  <Navbar />

  <main class="relative z-10 w-full">
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
  </main>
</div>
