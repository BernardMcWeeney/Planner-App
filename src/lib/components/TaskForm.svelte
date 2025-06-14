<script lang="ts">
  import { enhance } from '$app/forms';
  import { createEventDispatcher } from 'svelte';

  export let task: any = {};
  export let projectId: number;

  const dispatch = createEventDispatcher();

  const handleFormResult = () => ({ result }) => {
    if (result.type === 'success') dispatch('save');
  };
</script>

<div class="p-6 bg-surface dark:bg-neutral-800/50 border border-default rounded-xl my-4">
  <h3 class="text-xl font-semibold mb-4 text-text">{task.id ? 'Edit Task' : 'New Task'}</h3>
  
  <form 
    method="POST" 
    action={task.id ? `?/updateTask&id=${task.id}` : '?/createTask'} 
    use:enhance={handleFormResult}
    class="space-y-4"
  >
    <input type="hidden" name="project_id" value={projectId} />

    <div>
      <label for="task-name" class="block text-sm font-medium text-muted">Name</label>
      <input id="task-name" type="text" name="name" value={task.name || ''} required class="mt-1 block w-full bg-transparent p-2 border border-default rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
    </div>
    
    <div>
      <label for="task-description" class="block text-sm font-medium text-muted">Description</label>
      <textarea id="task-description" name="description" rows="3" class="mt-1 block w-full bg-transparent p-2 border border-default rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">{task.description || ''}</textarea>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label for="task-due_date" class="block text-sm font-medium text-muted">Due Date</label>
            <input id="task-due_date" type="date" name="due_date" value={task.due_date?.split(' ')[0] || ''} class="mt-1 block w-full bg-transparent p-2 border border-default rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        <div>
            <label for="task-priority" class="block text-sm font-medium text-muted">Priority</label>
            <select id="task-priority" name="priority" class="mt-1 block w-full bg-surface dark:bg-neutral-800 p-2 border border-default rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option value="0" selected={task.priority === 0}>Low</option>
                <option value="1" selected={task.priority === 1 || task.priority === undefined}>Medium</option>
                <option value="2" selected={task.priority === 2}>High</option>
            </select>
        </div>
    </div>

    {#if task.id}
    <div class="flex items-center pt-2">
        <input id="task-done-{task.id}" type="checkbox" name="done" checked={!!task.done} class="h-4 w-4 text-indigo-600 bg-neutral-100 border-neutral-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-neutral-800 focus:ring-2 dark:bg-neutral-700 dark:border-neutral-600">
        <label for="task-done-{task.id}" class="ml-2 block text-sm text-text">Mark as done</label>
    </div>
    {/if}

    <div class="flex justify-end space-x-3 pt-2">
       <button type="button" on:click={() => dispatch('cancel')} class="bg-neutral-200 dark:bg-neutral-700 text-text px-4 py-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-600 text-sm font-semibold transition-colors">Cancel</button>
       <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-sm font-semibold transition-colors">{task.id ? 'Update Task' : 'Create Task'}</button>
    </div>
  </form>
</div>