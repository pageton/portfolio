<script lang="ts">
  import { about } from '$lib/data';
  import { reveal } from '$lib/actions';
</script>

<section id="about" class="py-24 px-6 max-w-5xl mx-auto">
  <div class="flex items-center gap-4 mb-16" use:reveal={{ delay: 0 }}>
    <span class="section-label">About</span>
    <div class="section-divider"></div>
  </div>

  <div class="max-w-2xl" use:reveal={{ delay: 150, duration: 600, y: 32 }}>
    <h2 class="font-[var(--font-display)] font-black italic
      text-[clamp(2rem,5vw,3rem)]
      text-[var(--color-text)]
      tracking-[-0.02em]
      leading-[1.05] mb-8">
      Go backend.<br>Open-source<br>infrastructure.
    </h2>

    <div class="text-[var(--color-text-secondary)] text-base leading-relaxed space-y-5">
      {#each about.split('\n\n') as paragraph}
        <p>{paragraph.replace(/\n/g, ' ')}</p>
      {/each}
    </div>
  </div>
</section>
