<script>
  import { enhance } from '$app/forms';
  /** @type {import('./$types').PageData} */
  export let data;
  let { resource, projects } = data;
</script>

<div class="container mx-auto p-4 max-w-lg">
  <h1 class="text-2xl font-bold mb-4">Edit Resource</h1>
  <form method="POST" use:enhance class="space-y-4">
    <div>
        <label for="project_id" class="block text-sm font-medium">Project</label>
        <select name="project_id" required class="mt-1 block w-full px-3 py-2 border rounded-md">
            {#each projects as project}
                <option value={project.id} selected={project.id === resource.project_id}>{project.name}</option>
            {/each}
        </select>
    </div>
    <div>
      <label for="label" class="block text-sm font-medium">Label</label>
      <input type="text" name="label" value={resource.label} required class="mt-1 block w-full px-3 py-2 border rounded-md">
    </div>
     <div>
      <label for="url" class="block text-sm font-medium">URL</label>
      <input type="url" name="url" value={resource.url} placeholder="https://..." class="mt-1 block w-full px-3 py-2 border rounded-md">
    </div>
    <div>
      <label for="description" class="block text-sm font-medium">Description</label>
      <textarea name="description" rows="3" class="mt-1 block w-full px-3 py-2 border rounded-md">{resource.description}</textarea>
    </div>
    <div class="flex justify-end space-x-2">
       <a href="/resources" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Update Resource</button>
    </div>
  </form>
</div>