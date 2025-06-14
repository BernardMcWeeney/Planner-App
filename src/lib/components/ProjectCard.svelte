<script>
  import { enhance } from '$app/forms';
  import { Eye, Edit, Trash2, Calendar, Clock, Check, X } from 'lucide-svelte';

  /** @type {import('../../routes/projects/$types').Project} */
  export let project;

  let deleteConfirm = false;

  function confirmDelete() {
    deleteConfirm = true;
  }

  function cancelDelete() {
    deleteConfirm = false;
  }
</script>

<div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col hover:border-neutral-700 transition-colors group">
  <div class="flex-grow">
    <div class="flex items-start justify-between mb-4">
      <div class="flex items-center gap-3">
        <div 
          class="w-3 h-3 rounded-full flex-shrink-0 mt-1.5" 
          style="background-color: {project.color}"
        ></div>
        <a href="/projects/{project.id}" class="block">
          <h2 class="text-xl font-semibold text-white group-hover:text-neutral-100 transition-colors line-clamp-1">
            {project.name}
          </h2>
        </a>
      </div>
    </div>

    <p class="text-neutral-400 text-sm mb-6 line-clamp-3 leading-relaxed">
      {project.description || 'No description provided.'}
    </p>
  </div>

  <div>
    <div class="flex items-center gap-4 mb-6 text-xs text-neutral-500">
      <div class="flex items-center gap-1.5">
        <Calendar class="h-3 w-3" />
        <span>{new Date(project.created_at).toLocaleDateString()}</span>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <a 
        href="/projects/{project.id}" 
        class="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-neutral-300 transition-colors"
      >
        <Eye class="h-4 w-4" />
        View
      </a>
      
      <div class="flex items-center gap-1">
        <a 
          href="/projects/{project.id}/edit" 
          class="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
          title="Edit project"
        >
          <Edit class="h-4 w-4" />
        </a>
        
        {#if deleteConfirm}
          <div class="flex items-center gap-1 ml-1">
            <form method="POST" action="?/delete" use:enhance={() => { cancelDelete(); return async ({ update }) => { await update(); };}}>
              <input type="hidden" name="id" value={project.id} />
              <button 
                type="submit" 
                class="p-2 text-red-400 hover:text-white hover:bg-red-900/50 rounded-lg transition-colors"
                title="Confirm delete"
              >
                <Check class="h-4 w-4" />
              </button>
            </form>
            <button 
              on:click={cancelDelete}
              class="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
              title="Cancel"
            >
              <X class="h-4 w-4" />
            </button>
          </div>
        {:else}
          <button 
            on:click={confirmDelete}
            class="p-2 text-neutral-400 hover:text-red-400 hover:bg-neutral-800 rounded-lg transition-colors"
            title="Delete project"
          >
            <Trash2 class="h-4 w-4" />
          </button>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  /* For older browser support; prefer the Tailwind plugin */
  .line-clamp-1 {
    display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden;
  }
  .line-clamp-3 {
    display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
  }
</style>