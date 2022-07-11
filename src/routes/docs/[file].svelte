<script lang="ts">
  import {coloredThemes} from '$src/lib/data'
  import type { Writable } from 'svelte/store';
  import { afterUpdate, getContext, onMount } from 'svelte'
  import hljs from 'highlight.js/lib/core'
  import go from 'highlight.js/lib/languages/go'
  import bash from 'highlight.js/lib/languages/bash'
  import json from 'highlight.js/lib/languages/json'
  import diff from 'highlight.js/lib/languages/diff'
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

  // Reactive
  $: if (content) {
    onMount(() => {
      codetheme = determineCodeStyle(localStorage.theme)
    })
    afterUpdate(() => {
      if (document !== undefined) {
        hljs.registerLanguage('go', go)
        hljs.registerLanguage('bash', bash)
        hljs.registerLanguage('json', json)
        hljs.registerLanguage('diff', diff)
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

  <div class="not-prose mt-10">
    <div class="flex justify-between">
      <div>
        <a href="/docs/layout-and-typography" class="btn btn-md md:btn-md btn-ghost gap-2 normal-case lg:gap-3">
          <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
          </svg>
          <div class="flex flex-col items-start"><span class="text-base-content/50 hidden text-xs font-normal md:block">Prev</span> <span>Layout &amp; Typography</span></div>
        </a>
      </div>
      <div>
        <a href="/components/dropdown" class="btn btn-md md:btn-md gap-2 normal-case lg:gap-3">
          <div class="flex flex-col items-end"><span class="text-neutral-content/50 hidden text-xs font-normal md:block">Next</span> <span>Dropdown</span></div>
          <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
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
