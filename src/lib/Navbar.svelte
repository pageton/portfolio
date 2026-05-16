<script lang="ts">
  let y = 0;
  let totalHeight = 0;
  let mobileOpen = false;

  function updateProgress() {
    if (typeof document !== 'undefined') {
      totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    }
  }
</script>

<svelte:window bind:scrollY={y} on:load={updateProgress} on:resize={updateProgress} />

<!-- Scroll progress bar -->
<div class="scroll-progress" style="width: {totalHeight > 0 ? Math.min((y / totalHeight) * 100, 100) : 0}%"></div>

<nav class="fixed top-[2px] w-full z-50 transition-colors duration-150 {y > 60 ? 'bg-[var(--color-bg)]/98 backdrop-blur-sm' : 'bg-transparent'}">
  <div class="px-6 md:px-12 max-w-5xl mx-auto flex justify-between items-center h-[64px]">
    <a href="/" class="font-[var(--font-display)] font-black text-xl italic text-[var(--color-text)] tracking-tight hover:text-[var(--color-accent)] transition-colors duration-150">
      Sadiq
    </a>

    <div class="hidden md:flex items-center gap-8 text-sm font-medium">
      <a href="#about" class="nav-link text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150">About</a>
      <a href="#skills" class="nav-link text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150">Skills</a>
      <a href="#experience" class="nav-link text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150">Experience</a>
      <a href="#projects" class="nav-link text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150">Work</a>
      <a href="#contact" class="nav-link text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150">Contact</a>
    </div>

    <button
      class="md:hidden text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150"
      aria-label="Menu"
      on:click={() => mobileOpen = !mobileOpen}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square">
        {#if mobileOpen}
          <line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/>
        {:else}
          <line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>
        {/if}
      </svg>
    </button>
  </div>

  {#if mobileOpen}
    <div class="md:hidden bg-[var(--color-bg)]/98 backdrop-blur-sm border-t-2 border-[var(--color-border)] mobile-menu-enter">
      <div class="px-6 py-6 flex flex-col gap-4 text-sm font-medium">
        <a href="#about" class="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150 mobile-menu-item" style="animation-delay: 0.05s" on:click={() => mobileOpen = false}>About</a>
        <a href="#skills" class="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150 mobile-menu-item" style="animation-delay: 0.1s" on:click={() => mobileOpen = false}>Skills</a>
        <a href="#experience" class="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150 mobile-menu-item" style="animation-delay: 0.15s" on:click={() => mobileOpen = false}>Experience</a>
        <a href="#projects" class="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150 mobile-menu-item" style="animation-delay: 0.2s" on:click={() => mobileOpen = false}>Work</a>
        <a href="#contact" class="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150 mobile-menu-item" style="animation-delay: 0.25s" on:click={() => mobileOpen = false}>Contact</a>
      </div>
    </div>
  {/if}

  {#if y > 60}
    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-border)]"></div>
  {/if}
</nav>
