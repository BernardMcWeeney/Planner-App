<script lang="ts">
  import { enhance } from '$app/forms';
  import { createEventDispatcher } from 'svelte';

  export let goal: any = {};
  export let projectId: number;

  const dispatch = createEventDispatcher();

  const handleFormResult = () => ({ result }) => {
    if (result.type === 'success') dispatch('save');
  };
</script>

<div class="p-6 bg-surface dark:bg-neutral-800/50 border border-default rounded-xl my-4">
  <h3 class="text-xl font-semibold mb-4 text-text">{goal.id ? 'Edit Goal' : 'New Goal'}</h3>
  
  <form 
    method="POST" 
    action={goal.id ? `?/updateGoal&id=${goal.id}` : '?/createGoal'} 
    use:enhance={handleFormResult}
    class="space-y-4"
  >
    <input type="hidden" name="project_id" value={projectId} />

    <div>
      <label for="goal-title" class="block text-sm font-medium text-muted">Title</label>
      <input id="goal-title" type="text" name="title" value={goal.title || ''} required class="mt-1 block w-full bg-transparent p-2 border border-default rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
    </div>
    
    <div>
      <label for="goal-description" class="block text-sm font-medium text-muted">Description</label>
      <textarea id="goal-description" name="description" rows="3" class="mt-1 block w-full bg-transparent p-2 border border-default rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">{goal.description || ''}</textarea>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label for="goal-status" class="block text-sm font-medium text-muted">Status</label>
            <select id="goal-status" name="status" class="mt-1 block w-full bg-surface dark:bg-neutral-800 p-2 border border-default rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option value="planned" selected={goal.status === 'planned' || goal.status === undefined}>Planned</option>
                <option value="in-progress" selected={goal.status === 'in-progress'}>In Progress</option>
                <option value="achieved" selected={goal.status === 'achieved'}>Achieved</option>
            </select>
        </div>
        <div>
            <label for="goal-target_date" class="block text-sm font-medium text-muted">Target Date</label>
            <input id="goal-target_date" type="date" name="target_date" value={goal.target_date?.split(' ')[0] || ''} class="mt-1 block w-full bg-transparent p-2 border border-default rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
        </div>
    </div>

    <div class="flex justify-end space-x-3 pt-2">
       <button type="button" on:click={() => dispatch('cancel')} class="bg-neutral-200 dark:bg-neutral-700 text-text px-4 py-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-600 text-sm font-semibold transition-colors">Cancel</button>
       <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-sm font-semibold transition-colors">{goal.id ? 'Update Goal' : 'Create Goal'}</button>
    </div>
  </form>
</div>