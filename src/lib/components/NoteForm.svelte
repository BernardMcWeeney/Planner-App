<script lang="ts">
  import { enhance } from '$app/forms';
  import { createEventDispatcher } from 'svelte';

  export let note: any = {};
  export let projectId: number;

  const dispatch = createEventDispatcher();

  const handleFormResult = () => ({ result }) => {
    if (result.type === 'success') dispatch('save');
  };
</script>

<div class="p-6 bg-surface dark:bg-neutral-800/50 border border-default rounded-xl my-4">
  <h3 class="text-xl font-semibold mb-4 text-text">{note.id ? 'Edit Note' : 'New Note'}</h3>
  
  <form 
    method="POST" 
    action={note.id ? `?/updateNote&id=${note.id}` : '?/createNote'} 
    use:enhance={handleFormResult}
    class="space-y-4"
  >
    <input type="hidden" name="project_id" value={projectId} />

    <div>
      <label for="title" class="block text-sm font-medium text-muted">Title (Optional)</label>
      <input id="title" type="text" name="title" value={note.title || ''} class="mt-1 block w-full bg-transparent p-2 border border-default rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
    </div>

    <div>
      <label for="content" class="block text-sm font-medium text-muted">Content (Markdown Supported)</label>
      <textarea id="content" name="content" rows="8" required class="mt-1 block w-full bg-transparent p-2 border border-default rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm">{note.content || ''}</textarea>
    </div>

    <div class="flex justify-end space-x-3 pt-2">
       <button type="button" on:click={() => dispatch('cancel')} class="bg-neutral-200 dark:bg-neutral-700 text-text px-4 py-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-600 text-sm font-semibold transition-colors">Cancel</button>
       <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-sm font-semibold transition-colors">{note.id ? 'Update Note' : 'Create Note'}</button>
    </div>
  </form>
</div>