<script lang="ts">
  import '$lib/tailwind-docs.css'
  import SideBar from '$src/lib/docs/SideBar.svelte';
  import ThemeChange from '$src/lib/docs/ThemeChange.svelte';

  const defaultTheme = 'cmyk'
  $: theme = defaultTheme
</script>

<style>
  .raleway {
      font-family: 'Raleway', sans-serif;
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300&display=swap" rel="stylesheet">
</svelte:head>

<div class="nav w-full">
  <div class="flex justify-end">
    <ThemeChange />
  </div>
</div>
<div class="raleway flex h-screen container mx-auto">
    <div class="w-3/12">
      <SideBar />
    </div>
    <div class="w-9/12">
      <slot />
    </div>
</div>
