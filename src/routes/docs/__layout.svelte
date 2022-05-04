<script lang="ts">
  import '$lib/tailwind-docs.css'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300&display=swap" rel="stylesheet">
  <style>
    .raleway {
        font-family: 'Raleway', sans-serif;
    }
  </style>
</svelte:head>

<div class="raleway flex h-screen">
  <div class="w-3/12">
    <ul class="menu menu-compact bg-base-100 w-56 p-2 rounded-box">
      <li class="menu-title">
        <span>Prologue</span>
      </li>
      <li><a href="/installation">Installation</a></li>
      <li><a href="/contributing-guide">Contributing Guide</a></li>
      <li class="menu-title">
        <span>Essentials</span>
      </li>
      <li><a href="routing">Routing</a></li>
      <li><a href="handlers">Handlers</a></li>
      <li><a href="form-validations">Form Validations</a></li>
      <li><a href="models">Models</a></li>
      <li><a href="console-commands">Console Commands</a></li>
      <li class="menu-title">
        <span>Others</span>
      </li>
      <li><a href="deployment">Deployment</a></li>
    </ul>
  </div>
  <div class="w-9/12">
    <slot />
  </div>
</div>
