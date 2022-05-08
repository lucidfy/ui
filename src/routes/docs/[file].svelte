<script lang="ts">
    export let content: any
</script>

<style global lang="postcss">
    .prose ul {
        @apply list-none my-0 py-0
    }
    .prose ul li {
        @apply my-1 py-0
    }
    .prose ul li a {
        @apply no-underline /**text-white**/
    }
    .prose h1 {
        @apply mb-3 ml-7
    }
    .prose h1, .prose h2, .prose h3, .prose h4 {
        /* @apply dark:text-gray-300 */
    }
    .prose h1 a, .prose h2 a, .prose h3 a, .prose h4 a {
        /* @apply dark:text-red-500 dark:opacity-100 */
    }
</style>

<div class="prose prose-md max-w-[100%]">
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
