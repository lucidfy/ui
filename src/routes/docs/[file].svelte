<script lang="ts">
  import {coloredThemes} from '$lib/data'
  import type { Writable } from 'svelte/store';
  import { afterUpdate, getContext, onMount } from 'svelte'
  import hljs from 'highlight.js/lib/core'
  import go from 'highlight.js/lib/languages/go'
  import bash from 'highlight.js/lib/languages/bash'
  import json from 'highlight.js/lib/languages/json'
  import blackCodeStyle from 'svelte-highlight/styles/ir-black'
  import whiteCodeStyle from 'svelte-highlight/styles/atom-one-light'

  // from [file].ts@get
  export let content: any
  export let title: string

  // get context from __layout.svelte
  let themeChange: Writable<any> = getContext('themeChange')

  const determineCodeStyle = (theme: any) => {
    if (coloredThemes.includes(theme)) {
      return whiteCodeStyle
    }
    return blackCodeStyle
  }

  // on load determine the theme to use for code style
  let codetheme: string = determineCodeStyle($themeChange)

  // HighlightJS: register languages
  hljs.registerLanguage('go', go)
  hljs.registerLanguage('bash', bash)
  hljs.registerLanguage('json', json)

  // Reactive
  $: if (content) {
    onMount(() => {
      codetheme = determineCodeStyle(localStorage.theme)
    })
    afterUpdate(() => {
      if (document !== undefined) {
        hljs.highlightAll()
      }
    })
  }
  $: codetheme
  $: if (themeChange) {
    codetheme = determineCodeStyle($themeChange)
  }
</script>

<svelte:head>
  <title>{title}</title>
  {@html codetheme}
</svelte:head>

<div class="prose prose-md max-w-[100%] max-h-[100%]">
  {@html content}

  <!-- <div class="not-prose flex">
        <div class="flex-auto">
            <a role="button" href="/" class="btn">Previous</a>
        </div>
        <div class="flex justify-right">
            <a role="button" href="/" class="btn">Next</a>
        </div>
    </div> -->
</div>

<style global lang="postcss">
  .prose ul {
    @apply list-none my-0 py-0;
  }
  .prose ul li {
    @apply my-1 py-0;
  }
  .prose ul li a {
    @apply no-underline;
  }
  .prose h1 {
    @apply mb-3 ml-7;
  }
  .prose pre {
    @apply p-0 m-0 rounded-none bg-inherit;
  }
  .prose pre code {
    @apply p-0 m-0 rounded-lg;
  }
</style>
