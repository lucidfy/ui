<script lang="ts">
    export let content: any
    export let title: string


    import { afterUpdate } from 'svelte';
    import hljs from "highlight.js/lib/core";
    import go from "highlight.js/lib/languages/go";
    import bash from "highlight.js/lib/languages/bash";
    import json from "highlight.js/lib/languages/json";
    import codetheme from "svelte-highlight/styles/ir-black";

    hljs.registerLanguage("go", go);
    hljs.registerLanguage("bash", bash);
    hljs.registerLanguage("json", json);

    $: codetheme
    $: if (content) {
        afterUpdate(() => {
            if (document !== undefined) {
                hljs.highlightAll();
            }
        })
    }

    const code = "const add = (a: number, b: number) => a + b;";
</script>

<svelte:head>
    <title>{title}</title>
    {@html codetheme}
</svelte:head>

<style global lang="postcss">
    .prose ul {
        @apply list-none my-0 py-0
    }
    .prose ul li {
        @apply my-1 py-0
    }
    .prose ul li a {
        @apply no-underline
    }
    .prose h1 {
        @apply mb-3 ml-7
    }
    .prose pre {
        @apply p-0 rounded-none bg-inherit
    }
    .prose code {
        @apply p-0 rounded-lg
    }
</style>

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
