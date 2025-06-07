<script>
  import { enhance } from '$app/forms';
  import { GOAL_STATUS_LABELS, GOAL_STATUS_COLORS } from '../../types';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="container mx-auto p-4">
  <div class="flex justify-between items-center mb-4">
    <h1 class="text-2xl font-bold">Goals</h1>
    <a href="/goals/new" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">New Goal</a>
  </div>

  <div class="space-y-4">
    {#each data.goals as goal (goal.id)}
      <div class="border p-4 rounded-lg shadow-sm flex justify-between items-start">
        <div>
          <h2 class="text-xl font-semibold">{goal.title}</h2>
          <p class="text-gray-600">{goal.description}</p>
          <p class="text-sm text-gray-500">Project: {goal.project_name}</p>
          {#if goal.target_date}
            <p class="text-sm text-gray-500">Target: {new Date(goal.target_date).toLocaleDateString()}</p>
          {/if}
        </div>
        <div class="flex items-center space-x-3">
          <form method="POST" action="?/toggleStatus" use:enhance>
            <input type="hidden" name="id" value={goal.id} />
            <input type="hidden" name="status" value={goal.status} />
            <button type="submit" class="text-sm font-medium px-2 py-1 rounded {GOAL_STATUS_COLORS[goal.status]}">
                {GOAL_STATUS_LABELS[goal.status]}
            </button>
          </form>
          <a href="/goals/{goal.id}/edit" class="text-yellow-500 hover:underline">Edit</a>
          <form method="POST" action="?/delete" use:enhance>
            <input type="hidden" name="id" value={goal.id} />
            <button type="submit" class="text-red-500 hover:underline">Delete</button>
          </form>
        </div>
      </div>
    {/each}
  </div>
</div>