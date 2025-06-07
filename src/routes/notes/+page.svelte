<script>
  import { enhance } from '$app/forms';
  
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="container mx-auto p-4">
  <div class="flex justify-between items-center mb-4">
    <h1 class="text-2xl font-bold">Notes</h1>
    <a href="/notes/new" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">New Note</a>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each data.notes as note (note.id)}
      <div class="border p-4 rounded-lg shadow-sm flex flex-col justify-between">
        <div>
          <h2 class="text-xl font-semibold">{note.title}</h2>
          <p class="text-gray-500 text-sm mb-2">Project: {note.project_name}</p>
          <p class="text-gray-700 whitespace-pre-wrap truncate h-24">{note.content}</p>
        </div>
        <div class="flex justify-end space-x-2 mt-4">
          <a href="/notes/{note.id}" class="text-blue-500 hover:underline">View</a>
          <a href="/notes/{note.id}/edit" class="text-yellow-500 hover:underline">Edit</a>
          <form method="POST" action="?/delete" use:enhance>
            <input type="hidden" name="id" value={note.id} />
            <button type="submit" class="text-red-500 hover:underline">Delete</button>
          </form>
        </div>
      </div>
    {/each}
  </div>
</div>