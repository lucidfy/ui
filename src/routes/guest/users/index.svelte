<script context="module">
  export async function load({ props }) {
    return {
      props: props,
    };
  }
</script>

<script>
  import Table from '$src/lib/guest/Table.svelte'
  import Lucid from '$src/lib/guest/Lucid.svelte';
  import Pagination from '$src/lib/guest/Pagination.svelte';

  export let title
  export let data
  export let csrfField
  export let paginated_array
</script>

<Lucid {title}>
  <div class="m-auto w-4/5">
    <div class="my-5 shadow-orange-800 shadow-lg">
      <Table {title} {data} {csrfField} />
    </div>

    <Pagination
      first_item={paginated_array.first_item}
      has_more_pages={paginated_array.has_more_pages}
      has_pages={paginated_array.has_pages}
      last_item={paginated_array.last_item}
      on_first_page={paginated_array.on_first_page}
      current_page={paginated_array.current_page}
      total={paginated_array.total}
      elements={paginated_array.elements}
      next_page_url={paginated_array.next_page_url}
      prev_page_url={paginated_array.prev_page_url}
    />
  </div>
</Lucid>
