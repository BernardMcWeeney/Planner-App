<script>
  import { enhance } from '$app/forms';
  import { createEventDispatcher } from 'svelte';

  export let goal = {};
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
  <h3 class="text-xl font-semibold mb-4 text-gray-800">{goal.id ? 'Edit Goal' : 'New Goal'}</h3>
  
  <form 
    method="POST" 
    action={goal.id ? `?/updateGoal&id=${goal.id}` : '?/createGoal'} 
    use:enhance={handleFormResult}
    class="space-y-4"
  >
    <input type="hidden" name="project_id" value={projectId} />

    <div>
      <label for="goal-title" class="block text-sm font-medium text-gray-700">Title</label>
      <input id="goal-title" type="text" name="title" value={goal.title || ''} required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
    </div>
    
    <div>
      <label for="goal-description" class="block text-sm font-medium text-gray-700">Description</label>
      <textarea id="goal-description" name="description" rows="3" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">{goal.description || ''}</textarea>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label for="goal-status" class="block text-sm font-medium text-gray-700">Status</label>
            <select id="goal-status" name="status" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="planned" selected={goal.status === 'planned' || goal.status === undefined}>Planned</option>
                <option value="in-progress" selected={goal.status === 'in-progress'}>In Progress</option>
                <option value="achieved" selected={goal.status === 'achieved'}>Achieved</option>
            </select>
        </div>
        <div>
            <label for="goal-target_date" class="block text-sm font-medium text-gray-700">Target Date</label>
            <input id="goal-target_date" type="date" name="target_date" value={goal.target_date?.split(' ')[0] || ''} class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
        </div>
    </div>

    <div class="flex justify-end space-x-2 pt-2">
       <button type="button" on:click={() => dispatch('cancel')} class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</button>
       <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">{goal.id ? 'Update Goal' : 'Create Goal'}</button>
    </div>
  </form>
</div>