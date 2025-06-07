<script>
  import { enhance } from '$app/forms';
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="container mx-auto p-4 max-w-lg">
  <h1 class="text-2xl font-bold mb-4">New Goal</h1>
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
      <label for="description" class="block text-sm font-medium">Description</label>
      <textarea name="description" rows="3" class="mt-1 block w-full px-3 py-2 border rounded-md"></textarea>
    </div>
    <div>
      <label for="target_date" class="block text-sm font-medium">Target Date</label>
      <input type="date" name="target_date" class="mt-1 block w-full px-3 py-2 border rounded-md">
    </div>
    <div>
        <label for="status" class="block text-sm font-medium">Status</label>
        <select name="status" class="mt-1 block w-full px-3 py-2 border rounded-md">
            <option value="planned" selected>Planned</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
        </select>
    </div>
    <div class="flex justify-end space-x-2">
       <a href="/goals" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Create Goal</button>
    </div>
  </form>
</div>