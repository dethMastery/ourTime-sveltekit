<script lang="ts">
  import { page } from "$app/stores";

  const navButton = `p-4 hover:opacity-60`
	const activeButton = `p-4 opacity-80 hover:opacity-80`
</script>

<div class="w-full flex flex-row bg-pastel-black text-whitesmoke fixed top-0">
  <div class="w-full flex flex-row justify-start text-left">
    {#if $page.url.pathname === '/'}
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" class={activeButton}>
        ourTime | ourPolaroid
      </a>
    {:else}
      <a href="/" class={navButton}>
        ourTime | ourPolaroid
      </a>
    {/if}
  </div>
  <div class="w-full flex flex-row justify-end text-right">
    {#if $page.url.pathname === '/pics'}
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" class={activeButton}>
        Pics
      </a>
    {:else}
      <a href="/pics" class={navButton}>
        Pics
      </a>
    {/if}

    {#if $page.url.pathname === '/maimai'}
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" class={activeButton}>
        maimai Pics
      </a>
    {:else}
      <a href="/maimai" class={navButton}>
        maimai Pics
      </a>
    {/if}

    {#if $page.url.pathname === '/about'}
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" class={activeButton}>
        About
      </a>
    {:else}
      <a href="/about" class={navButton}>
        About
      </a>
    {/if}
  </div>
</div>