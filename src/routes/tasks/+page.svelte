<script>
  import { enhance } from '$app/forms';
  import { PRIORITY_LABELS, PRIORITY_COLORS } from '../../types';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="container mx-auto p-4">
  <div class="flex justify-between items-center mb-4">
    <h1 class="text-2xl font-bold">Tasks</h1>
    <a href="/tasks/new" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">New Task</a>
  </div>

  <div class="space-y-4">
    {#each data.tasks as task (task.id)}
      <div class="border p-4 rounded-lg shadow-sm flex justify-between items-center">
        <div>
            <h2 class="text-xl font-semibold">{task.name}</h2>
            <p class="text-gray-600">{task.description}</p>
            <span class:list={PRIORITY_COLORS[task.priority]}>{PRIORITY_LABELS[task.priority]} Priority</span>
        </div>
        <div class="flex items-center space-x-2">
            <span class="text-sm text-gray-500">{task.done ? '✅ Done' : '☑️ To-Do'}</span>
            <a href="/tasks/{task.id}/edit" class="text-yellow-500 hover:underline">Edit</a>
            <form method="POST" action="?/delete" use:enhance>
                <input type="hidden" name="id" value={task.id} />
                <button type="submit" class="text-red-500 hover:underline">Delete</button>
            </form>
        </div>
      </div>
    {/each}
  </div>
</div>