<script>
	import TW_CLASS from "../../constants/tailwind_class";
</script>

<svelte:head>
  <title>About | ourTime</title>

  <meta charset="UTF-8">
  <meta name="description" content="An about page of ourTime website ❤️">
  <meta name="author" content="Suphakit P.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta property="og:title" content="Home | ourTime" />
  <meta property="og:description" content="An about page of ourTime website ❤️" />
  <!-- <meta property="og:image" content="" /> -->
</svelte:head>

<section class="flex flex-row w-[80%] min-h-screen justify-center items-center text-center mx-auto">
  <div class="bg-whitesmoke text-pastel-black p-4 rounded w-full md:w-[70%]">
    <h1 class="text-5xl py-6 underline">
      About
    </h1>
    <p class="text-xl pb-4">
      This is a website that used to show my memory w/ my lover. Just watch and enjoy it :) (if u don't have one and want to say something bad about me.. just go fucked urself)
    </p>
    <p class="text-3xl py-4 underline">
      Links
    </p>
    <p class="text-xl">
      - <a href="https://github.com/dethMastery/ourTime-sveltekit" target="_blank" class={TW_CLASS.link}>Repository</a>
    </p>
    <p class="text-xl">
      - <a href="https://suphakit.net/contact" target="_blank" class={TW_CLASS.link}>Contacts</a>
    </p>
  </div>
</section>