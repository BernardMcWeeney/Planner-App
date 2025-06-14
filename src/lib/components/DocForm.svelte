<script>
  import { enhance } from '$app/forms';
  import { createEventDispatcher } from 'svelte';

  export let doc = {};
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
  <h3 class="text-xl font-semibold mb-4 text-gray-800">{doc.id ? 'Edit Document' : 'New Document'}</h3>
  
  <form 
    method="POST" 
    action={doc.id ? `?/updateDoc&id=${doc.id}` : '?/createDoc'} 
    use:enhance={handleFormResult}
    class="space-y-4"
  >
    <input type="hidden" name="project_id" value={projectId} />

    <div>
      <label for="doc-title" class="block text-sm font-medium text-gray-700">Title</label>
      <input id="doc-title" type="text" name="title" value={doc.title || ''} required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
    </div>

    <div>
      <label for="doc-type" class="block text-sm font-medium text-gray-700">Type (e.g., Meeting Notes, Specification)</label>
      <input id="doc-type" type="text" name="type" value={doc.type || ''} placeholder="Meeting Notes" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
    </div>
    
    <div>
      <label for="doc-content" class="block text-sm font-medium text-gray-700">Content (Markdown supported)</label>
      <textarea id="doc-content" name="content" rows="10" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md font-mono">{doc.content || ''}</textarea>
    </div>

    <div class="flex justify-end space-x-2 pt-2">
       <button type="button" on:click={() => dispatch('cancel')} class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</button>
       <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">{doc.id ? 'Update Document' : 'Create Document'}</button>
    </div>
  </form>
</div>