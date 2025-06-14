<script>
  import { enhance } from '$app/forms';
  import { createEventDispatcher } from 'svelte';

  // If a 'note' object is passed, we're editing. If not, we're creating.
  export let note = {}; 
  // We always need the project ID to associate the note correctly.
  export let projectId;

  const dispatch = createEventDispatcher();

  // This function is called by use:enhance after the form action completes.
  const handleFormResult = () => {
    return ({ result }) => {
      // Check for a successful result from the server action
      if (result.type === 'success') {
        dispatch('save'); // Tell the parent page (the workspace) that we saved.
      }
      // You could add else logic here to show form-specific errors from `fail()`
    };
  };
</script>

<div class="p-6 border rounded-lg bg-gray-50 my-4 shadow-inner">
  <h3 class="text-xl font-semibold mb-4 text-gray-800">{note.id ? 'Edit Note' : 'New Note'}</h3>
  
  <form 
    method="POST" 
    action={note.id ? `?/updateNote&id=${note.id}` : '?/createNote'} 
    use:enhance={handleFormResult}
    class="space-y-4"
  >
    <input type="hidden" name="project_id" value={projectId} />

    <div>
      <label for="title" class="block text-sm font-medium text-gray-700">Title (Optional)</label>
      <input 
        type="text" 
        name="title" 
        value={note.title || ''} 
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
    </div>

    <div>
      <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
      <textarea 
        name="content" 
        rows="5" 
        required
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">{note.content || ''}</textarea>
    </div>

    <div class="flex justify-end space-x-2 pt-2">
       <button 
         type="button" 
         on:click={() => dispatch('cancel')} 
         class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</button>
       <button 
         type="submit" 
         class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">{note.id ? 'Update Note' : 'Create Note'}</button>
    </div>
  </form>
</div>