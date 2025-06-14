<script lang="ts">
  import { enhance } from '$app/forms';
  import { createEventDispatcher } from 'svelte';

  export let idea: any = {};
  export let projectId: number;

  const dispatch = createEventDispatcher();

  const handleFormResult = () => ({ result }) => {
    if (result.type === 'success') dispatch('save');
  };
</script>

<div class="p-6 bg-surface dark:bg-neutral-800/50 border border-default rounded-xl my-4">
  <h3 class="text-xl font-semibold mb-4 text-text">{idea.id ? 'Edit Idea' : 'New Idea'}</h3>
  
  <form 
    method="POST" 
    action={idea.id ? `?/updateIdea&id=${idea.id}` : '?/createIdea'} 
    use:enhance={handleFormResult}
    class="space-y-4"
  >
    <input type="hidden" name="project_id" value={projectId} />

    <div>
      <label for="idea-title" class="block text-sm font-medium text-muted">Title</label>
      <input id="idea-title" type="text" name="title" value={idea.title || ''} required class="mt-1 block w-full bg-transparent p-2 border border-default rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
    </div>
    
    <div>
      <label for="idea-description" class="block text-sm font-medium text-muted">Description</label>
      <textarea id="idea-description" name="description" rows="4" class="mt-1 block w-full bg-transparent p-2 border border-default rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">{idea.description || ''}</textarea>
    </div>

    {#if idea.id}
    <div class="flex items-center pt-2">
        <input id="idea-starred-{idea.id}" type="checkbox" name="starred" checked={!!idea.starred} class="h-4 w-4 text-amber-500 bg-neutral-100 border-neutral-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-neutral-800 focus:ring-2 dark:bg-neutral-700 dark:border-neutral-600">
        <label for="idea-starred-{idea.id}" class="ml-2 block text-sm text-text">Mark as starred</label>
    </div>
    {/if}

    <div class="flex justify-end space-x-3 pt-2">
       <button type="button" on:click={() => dispatch('cancel')} class="bg-neutral-200 dark:bg-neutral-700 text-text px-4 py-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-600 text-sm font-semibold transition-colors">Cancel</button>
       <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-sm font-semibold transition-colors">{idea.id ? 'Update Idea' : 'Create Idea'}</button>
    </div>
  </form>
</div>