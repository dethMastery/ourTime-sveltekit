<script lang="ts">
  import ModalCard from "../../components/modalCard.svelte";
  import Modal from '../../components/modal.svelte'
	import maimaiContents from "../../constants/maimai_content";
</script>

<svelte:head>
  <title>maimai Pictures | ourTime</title>

  <meta charset="UTF-8">
  <meta name="description" content="A list of our pictures while playing maimai ❤️">
  <meta name="author" content="Suphakit P.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta property="og:title" content="maimai | ourTime" />
  <meta property="og:description" content="A list of our pictures while playing maimai ❤️" />
  <!-- <meta property="og:image" content="" /> -->

  <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"></script>
</svelte:head>

<section class="flex flex-row w-full md:w-[80%] mx-auto pt-16 pb-8 flex-wrap gap-4 justify-center">
  {#each maimaiContents.reverse() as data }
    <ModalCard {data} />
  {/each}

  {#each maimaiContents as data}
    <Modal {data} />
  {/each}
</section>