<script>
  import { enhance } from '$app/forms';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="container mx-auto p-4">
  <div class="flex justify-between items-center mb-4">
    <h1 class="text-2xl font-bold">Resources</h1>
    <a href="/resources/new" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">New Resource</a>
  </div>

  <div class="space-y-4">
    {#each data.resources as resource (resource.id)}
      <div class="border p-4 rounded-lg shadow-sm flex justify-between items-start">
        <div>
          <a href={resource.url} target="_blank" rel="noopener noreferrer" class="text-xl font-semibold text-blue-600 hover:underline">{resource.label}</a>
          <p class="text-gray-600">{resource.description}</p>
          <p class="text-sm text-gray-500">Project: {resource.project_name}</p>
        </div>
        <div class="flex items-center space-x-3">
          <a href="/resources/{resource.id}/edit" class="text-yellow-500 hover:underline">Edit</a>
          <form method="POST" action="?/delete" use:enhance>
            <input type="hidden" name="id" value={resource.id} />
            <button type="submit" class="text-red-500 hover:underline">Delete</button>
          </form>
        </div>
      </div>
    {/each}
  </div>
</div>