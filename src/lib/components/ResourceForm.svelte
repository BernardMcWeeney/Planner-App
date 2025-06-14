<script>
  import { enhance } from '$app/forms';
  import { createEventDispatcher } from 'svelte';

  export let resource = {};
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
  <h3 class="text-xl font-semibold mb-4 text-gray-800">{resource.id ? 'Edit Resource' : 'New Resource'}</h3>
  
  <form 
    method="POST" 
    action={resource.id ? `?/updateResource&id=${resource.id}` : '?/createResource'} 
    use:enhance={handleFormResult}
    class="space-y-4"
  >
    <input type="hidden" name="project_id" value={projectId} />

    <div>
      <label for="resource-label" class="block text-sm font-medium text-gray-700">Label</label>
      <input id="resource-label" type="text" name="label" value={resource.label || ''} placeholder="e.g., Figma Designs" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
    </div>

    <div>
      <label for="resource-url" class="block text-sm font-medium text-gray-700">URL</label>
      <input id="resource-url" type="url" name="url" value={resource.url || ''} placeholder="https://..." required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
    </div>
    
    <div>
      <label for="resource-description" class="block text-sm font-medium text-gray-700">Description</label>
      <textarea id="resource-description" name="description" rows="3" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">{resource.description || ''}</textarea>
    </div>

    <div class="flex justify-end space-x-2 pt-2">
       <button type="button" on:click={() => dispatch('cancel')} class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</button>
       <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">{resource.id ? 'Update Resource' : 'Create Resource'}</button>
    </div>
  </form>
</div>