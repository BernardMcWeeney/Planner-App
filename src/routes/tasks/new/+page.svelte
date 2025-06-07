<script>
  import { enhance } from '$app/forms';
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="container mx-auto p-4 max-w-lg">
  <h1 class="text-2xl font-bold mb-4">New Task</h1>
  <form method="POST" use:enhance class="space-y-4">
    <div>
        <label for="project_id">Project</label>
        <select name="project_id" id="project_id" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            {#each data.projects as project}
                <option value={project.id}>{project.name}</option>
            {/each}
        </select>
    </div>
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
    </div>
    <div>
      <label for="description">Description</label>
      <textarea name="description" rows="3" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
    </div>
    <div>
      <label for="due_date">Due Date</label>
      <input type="date" name="due_date" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
    </div>
    <div>
        <label for="priority">Priority</label>
        <select name="priority" id="priority" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option value="0">Low</option>
            <option value="1" selected>Medium</option>
            <option value="2">High</option>
        </select>
    </div>
    <div class="flex justify-end space-x-2">
       <a href="/tasks" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Create Task</button>
    </div>
  </form>
</div>