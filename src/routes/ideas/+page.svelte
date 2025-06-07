<script>
  import { enhance } from '$app/forms';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="container mx-auto p-4">
  <div class="flex justify-between items-center mb-4">
    <h1 class="text-2xl font-bold">Ideas</h1>
    <a href="/ideas/new" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">New Idea</a>
  </div>

  <div class="space-y-4">
    {#each data.ideas as idea (idea.id)}
      <div class="border p-4 rounded-lg shadow-sm flex justify-between items-start">
        <div>
          <h2 class="text-xl font-semibold">{idea.title}</h2>
          <p class="text-gray-600">{idea.description}</p>
          <p class="text-sm text-gray-500">Project: {idea.project_name}</p>
        </div>
        <div class="flex items-center space-x-3">
          <form method="POST" action="?/toggleStarred" use:enhance>
            <input type="hidden" name="id" value={idea.id} />
            <input type="hidden" name="starred" value={idea.starred} />
            <button type="submit" class="text-2xl">
              {#if idea.starred}
                <span class="text-yellow-400">★</span>
              {:else}
                <span class="text-gray-400">☆</span>
              {/if}
            </button>
          </form>
          <a href="/ideas/{idea.id}/edit" class="text-yellow-500 hover:underline">Edit</a>
          <form method="POST" action="?/delete" use:enhance>
            <input type="hidden" name="id" value={idea.id} />
            <button type="submit" class="text-red-500 hover:underline">Delete</button>
          </form>
        </div>
      </div>
    {/each}
  </div>
</div>