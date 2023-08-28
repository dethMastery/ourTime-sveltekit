<script lang="ts">
	import TW_CLASS from "../constants/tailwind_class";
	import Day from "../modules/day";

  let time: string | undefined = undefined
  let loading: string = "Loading"

  setInterval(() => {
    time = Day('2023-07-07 08:30')
  }, 1000)

  const load = setInterval(() => {
    if (time === undefined) {
      if (loading.replace('Loading', '') === '...') {
        loading = 'loading'
      } else {
        loading += "."
      }
    } else {
      clearInterval(load)
    }
  }, 200)
</script>

<svelte:head>
  <title>Home | ourTime</title>

  <meta charset="UTF-8">
  <meta name="description" content="A homepage that contain our time ❤️">
  <meta name="author" content="Suphakit P.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta property="og:title" content="Home | ourTime" />
  <meta property="og:description" content="A homepage that contain our time ❤️" />
  <!-- <meta property="og:image" content="" /> -->
</svelte:head>

<section class="w-full min-h-screen flex flex-col justify-center items-center text-center">
  {#if time !== undefined}
  <div class={`${TW_CLASS.heading.xxxl} !py-2 !text-4xl`}>
    ourTime
  </div>
  <div class="flex flex-row items-center gap-6">
    <div class="w-[250px] h-[250px] rounded-[100%] bg-pastel-black !bg-no-repear !bg-cover !bg-center"></div>
    <div class="h-full text-6xl">
      ❤️
    </div>
    <div class="w-[250px] h-[250px] rounded-[100%] bg-pastel-black !bg-no-repear !bg-cover !bg-center"></div>
  </div>
  <div>
    <p class="text-2xl !py-6">
      In relationship {time}
    </p>
  </div>
  {:else}
  <div>
    <p class="text-6xl">
      {loading}
    </p>
  </div>
  {/if}
</section>