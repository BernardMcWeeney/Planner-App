<script>
  import { enhance } from '$app/forms';
  /** @type {import('./$types').PageData} */
  export let data;
  let { note, projects } = data;
</script>

<div class="container mx-auto p-4 max-w-lg">
  <h1 class="text-2xl font-bold mb-4">Edit Note</h1>
  <form method="POST" use:enhance class="space-y-4">
    <div>
        <label for="project_id" class="block text-sm font-medium text-gray-700">Project</label>
        <select name="project_id" id="project_id" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            {#each projects as project}
                <option value={project.id} selected={project.id === note.project_id}>{project.name}</option>
            {/each}
        </select>
    </div>
    <div>
      <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
      <input type="text" id="title" name="title" value={note.title} class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
    </div>
    <div>
      <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
      <textarea id="content" name="content" rows="10" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">{note.content}</textarea>
    </div>
    <div class="flex justify-end space-x-2">
       <a href="/notes/{note.id}" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update Note</button>
    </div>
  </form>
</div>