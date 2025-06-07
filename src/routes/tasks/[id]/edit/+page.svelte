<script>
  import { enhance } from '$app/forms';
  /** @type {import('./$types').PageData} */
  export let data;
  let { task, projects } = data;
</script>

<div class="container mx-auto p-4 max-w-lg">
  <h1 class="text-2xl font-bold mb-4">Edit Task</h1>
  <form method="POST" use:enhance class="space-y-4">
     <div>
        <label for="project_id">Project</label>
        <select name="project_id" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            {#each projects as project}
                <option value={project.id} selected={project.id === task.project_id}>{project.name}</option>
            {/each}
        </select>
    </div>
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" value={task.name} required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
    </div>
    <div>
      <label for="description">Description</label>
      <textarea name="description" rows="3" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">{task.description}</textarea>
    </div>
    <div>
      <label for="due_date">Due Date</label>
      <input type="date" name="due_date" value={task.due_date?.split('T')[0]} class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
    </div>
    <div>
        <label for="priority">Priority</label>
        <select name="priority" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option value="0" selected={task.priority === 0}>Low</option>
            <option value="1" selected={task.priority === 1}>Medium</option>
            <option value="2" selected={task.priority === 2}>High</option>
        </select>
    </div>
    <div class="flex items-center">
        <input type="checkbox" name="done" checked={!!task.done} class="h-4 w-4 text-blue-600 border-gray-300 rounded">
        <label for="done" class="ml-2 block text-sm text-gray-900">Mark as done</label>
    </div>
    <div class="flex justify-end space-x-2">
       <a href="/tasks" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</a>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Update Task</button>
    </div>
  </form>
</div>