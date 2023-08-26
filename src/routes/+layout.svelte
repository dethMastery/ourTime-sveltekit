<script lang="ts">
  import './main.css'

  import Header from '../components/navbar.svelte';
  import Footer from '../components/footer.svelte';
</script>

<div class="bg-pastel-black text-whitesmoke w-full">
	<Header />

	<main class="min-h-screen">
		<slot />
	</main>

	<Footer />
</div>

<style>
	
</style>