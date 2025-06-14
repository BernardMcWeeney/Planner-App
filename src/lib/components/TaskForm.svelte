<script>
  import { enhance } from '$app/forms';
  import { createEventDispatcher } from 'svelte';

  /** @type {import('../../routes/tasks/types').Task | {} } */
  export let task = {};
  export let projectId;

  const dispatch = createEventDispatcher();

  const handleFormResult = () => {
    return ({ result }) => {
      if (result.type === 'success') {
        dispatch('save');
      }
    };
  };
</script>

<div class="p-6 border rounded-lg bg-gray-50 my-4 shadow-inner">
  <h3 class="text-xl font-semibold mb-4 text-gray-800">{task.id ? 'Edit Task' : 'New Task'}</h3>
  
  <form 
    method="POST" 
    action={task.id ? `?/updateTask&id=${task.id}` : '?/createTask'} 
    use:enhance={handleFormResult}
    class="space-y-4"
  >
    <input type="hidden" name="project_id" value={projectId} />

    <div>
      <label for="task-name" class="block text-sm font-medium text-gray-700">Name</label>
      <input id="task-name" type="text" name="name" value={task.name || ''} required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
    </div>
    
    <div>
      <label for="task-description" class="block text-sm font-medium text-gray-700">Description</label>
      <textarea id="task-description" name="description" rows="3" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">{task.description || ''}</textarea>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label for="task-due_date" class="block text-sm font-medium text-gray-700">Due Date</label>
            <input id="task-due_date" type="date" name="due_date" value={task.due_date?.split(' ')[0] || ''} class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
        </div>
        <div>
            <label for="task-priority" class="block text-sm font-medium text-gray-700">Priority</label>
            <select id="task-priority" name="priority" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="0" selected={task.priority === 0}>Low</option>
                <option value="1" selected={task.priority === 1 || task.priority === undefined}>Medium</option>
                <option value="2" selected={task.priority === 2}>High</option>
            </select>
        </div>
    </div>

    {#if task.id}
    <div class="flex items-center">
        <input id="task-done" type="checkbox" name="done" checked={!!task.done} class="h-4 w-4 text-blue-600 border-gray-300 rounded">
        <label for="task-done" class="ml-2 block text-sm text-gray-900">Mark as done</label>
    </div>
    {/if}

    <div class="flex justify-end space-x-2 pt-2">
       <button type="button" on:click={() => dispatch('cancel')} class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</button>
       <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">{task.id ? 'Update Task' : 'Create Task'}</button>
    </div>
  </form>
</div>