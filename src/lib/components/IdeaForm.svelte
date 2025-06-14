<script>
  import { enhance } from '$app/forms';
  import { createEventDispatcher } from 'svelte';

  export let idea = {};
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
  <h3 class="text-xl font-semibold mb-4 text-gray-800">{idea.id ? 'Edit Idea' : 'New Idea'}</h3>
  
  <form 
    method="POST" 
    action={idea.id ? `?/updateIdea&id=${idea.id}` : '?/createIdea'} 
    use:enhance={handleFormResult}
    class="space-y-4"
  >
    <input type="hidden" name="project_id" value={projectId} />

    <div>
      <label for="idea-title" class="block text-sm font-medium text-gray-700">Title</label>
      <input id="idea-title" type="text" name="title" value={idea.title || ''} required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
    </div>
    
    <div>
      <label for="idea-description" class="block text-sm font-medium text-gray-700">Description</label>
      <textarea id="idea-description" name="description" rows="4" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">{idea.description || ''}</textarea>
    </div>

    {#if idea.id}
    <div class="flex items-center">
        <input id="idea-starred" type="checkbox" name="starred" checked={!!idea.starred} class="h-4 w-4 text-yellow-500 border-gray-300 rounded">
        <label for="idea-starred" class="ml-2 block text-sm text-gray-900">Mark as starred</label>
    </div>
    {/if}

    <div class="flex justify-end space-x-2 pt-2">
       <button type="button" on:click={() => dispatch('cancel')} class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</button>
       <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">{idea.id ? 'Update Idea' : 'Create Idea'}</button>
    </div>
  </form>
</div>