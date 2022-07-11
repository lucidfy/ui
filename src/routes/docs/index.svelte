<script lang="ts">
  import DocsFile from './[file].svelte'
  export let title: any;
  export let content: any;
</script>

<DocsFile {title} {content}></DocsFile>
