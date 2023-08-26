<script lang="ts">
  import './main.css'

  import Header from '../components/navbar.svelte';
  import Footer from '../components/footer.svelte';
</script>

<div class="text-whitesmoke w-full bg-gradient-to-l from-[#0083b0] to-[#00b4db]">
	<Header />

	<main class="min-h-screen">
		<slot />
	</main>

	<Footer />
</div>

<style>
	
</style>