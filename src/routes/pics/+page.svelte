<script lang="ts">
  import Card from "../../components/card.svelte";
	import mainImage from "../../constants/main_content";
</script>

<svelte:head>
  <title>Pictures | ourTime</title>

  <meta charset="UTF-8">
  <meta name="description" content="A list of our time's pictures ❤️">
  <meta name="author" content="Suphakit P.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta property="og:title" content="Pictures | ourTime" />
  <meta property="og:description" content="A list of our time's pictures ❤️" />
  <!-- <meta property="og:image" content="" /> -->
</svelte:head>

<section class="flex flex-row w-full md:w-[80%] mx-auto pt-16 pb-8 flex-wrap gap-4 justify-center">
  {#each mainImage.reverse() as data}
    <Card {data} />
  {/each}
</section>