<script lang="ts">
  import Card from "../../components/card.svelte";
	import mainImage from "../../constants/main_content";
</script>

<section class="flex flex-row w-full md:w-[80%] mx-auto pt-16 pb-8 flex-wrap gap-4 justify-center">
  {#each mainImage as data}
    <Card {data} />
  {/each}
</section>