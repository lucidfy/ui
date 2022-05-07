<script lang="ts">
  import { page } from '$app/stores'
  import { pages, Item } from '$src/lib/data'

  $: isActiveLink = (item: Item) => {
    if (
      $page.url.pathname == item.href ||
      $page.url.pathname == item.highlightAnotherItem + '/' ||
      $page.url.pathname.startsWith(item.href + '/')
    ) {
      return 'active'
    }

    return ''
  }
</script>

{#each pages as { name, items, showLine }}
  <ul class="menu menu-compact flex flex-col p-0 px-4">
    {#if name && name != 'excluded'}
      {#if showLine == undefined || showLine === true}
        <li />
      {/if}
      <li class="menu-title"><span>{name}</span></li>
    {/if}
    {#if name != 'excluded'}
      {#each items as { name, href, icon, badge, hidden, highlightAnotherItem }, i (i)}
        {#if !hidden}
          <li>
            <a
              {href}
              id={$page.url.pathname.startsWith(href + '/') ? 'active-menu' : ''}
              class={`flex gap-4 ${isActiveLink(items[i])}`}
            >
              {#if icon}
                <span class="flex-none">
                  {@html icon}
                </span>
              {/if}
              <span class="flex-1">
                {@html name}
              </span>
              {#if badge}
                <span class="badge badge-sm flex-none lowercase">{badge}</span>
              {/if}
            </a>
          </li>
        {/if}
      {/each}
    {/if}
  </ul>
{/each}
