<script>
  import { enhance } from '$app/forms';
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="container mx-auto p-4 max-w-lg">
  <h1 class="text-2xl font-bold mb-4">New Doc</h1>
  <form method="POST" use:enhance class="space-y-4">
    <div>
        <label for="project_id" class="block text-sm font-medium">Project</label>
        <select name="project_id" required class="mt-1 block w-full px-3 py-2 border rounded-md">
            {#each data.projects as project}
                <option value={project.id}>{project.name}</option>
            {/each}
        </select>
    </div>
    <div>
      <label for="title" class="block text-sm font-medium">Title</label>
      <input type="text" name="title" required class="mt-1 block w-full px-3 py-2 border rounded-md">
    </div>
    <div>
      <label for="type" class="block text-sm font-medium">Type (e.g., 'guide', 'spec')</label>
      <input type="text" name="type" class="mt-1 block w-full px-3 py-2 border rounded-md">
    </div>
    <div>
      <label for="content" class="block text-sm font-medium">Content</label>
      <textarea name="content" rows="12" required class="mt-1 block w-full px-3 py-2 border rounded-md"></textarea>
    </div>
    <div class="flex justify-end space-x-2">
       <a href="/docs" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Create Doc</button>
    </div>
  </form>
</div>