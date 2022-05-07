<script lang="ts">
    export let content: any
</script>

<div class="prose prose-md max-w-[100%]">
    {@html content}

    <div class="not-prose flex">
        <div class="flex-auto">
            <a role="button" href="/" class="btn">Previous</a>
        </div>
        <div class="flex justify-right">
            <a role="button" href="/" class="btn">Next</a>
        </div>
    </div>
</div>
