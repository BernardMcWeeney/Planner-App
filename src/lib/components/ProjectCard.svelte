<script lang="ts">
  import { enhance } from '$app/forms';
  import { Eye, Edit, Trash2, Calendar, Check, X } from 'lucide-svelte';

  export let project: any;

  let deleteConfirm = false;
</script>

<div class="bg-surface dark:bg-neutral-900 border border-default rounded-2xl p-6 flex flex-col hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors group">
  <div class="flex-grow">
    <div class="flex items-start justify-between mb-4">
      <div class="flex items-center gap-3">
        <div 
          class="w-3 h-3 rounded-full flex-shrink-0 mt-1.5" 
          style="background-color: {project.color}"
        ></div>
        <a href="/projects/{project.id}" class="block">
          <h2 class="text-xl font-semibold text-text group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
            {project.name}
          </h2>
        </a>
      </div>
    </div>

    <p class="text-muted text-sm mb-6 line-clamp-3 leading-relaxed">
      {project.description || 'No description provided.'}
    </p>
  </div>

  <div>
    <div class="flex items-center gap-4 mb-6 text-xs text-muted">
      <div class="flex items-center gap-1.5">
        <Calendar class="h-3 w-3" />
        <span>{new Date(project.created_at).toLocaleDateString()}</span>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <a 
        href="/projects/{project.id}" 
        class="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
      >
        <Eye class="h-4 w-4" />
        View Project
      </a>
      
      <div class="flex items-center gap-1">
        <a 
          href="/projects/{project.id}/edit" 
          class="p-2 text-muted hover:text-text rounded-lg transition-colors"
          title="Edit project"
        >
          <Edit class="h-4 w-4" />
        </a>
        
        {#if deleteConfirm}
          <div class="flex items-center gap-1 ml-1">
            <form method="POST" action="/projects?/deleteProject" use:enhance={() => { deleteConfirm = false; return async ({ update }) => { await update({reset: false}); };}}>
              <input type="hidden" name="id" value={project.id} />
              <button 
                type="submit" 
                class="p-2 text-rose-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                title="Confirm delete"
              >
                <Check class="h-4 w-4" />
              </button>
            </form>
            <button 
              on:click={() => deleteConfirm = false}
              class="p-2 text-muted hover:text-text rounded-lg transition-colors"
              title="Cancel"
            >
              <X class="h-4 w-4" />
            </button>
          </div>
        {:else}
          <button 
            on:click={() => deleteConfirm = true}
            class="p-2 text-muted hover:text-rose-500 rounded-lg transition-colors"
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
  /* These are now built-in to Tailwind, but harmless to keep for older browser support if needed */
  .line-clamp-1 {
    display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden;
  }
  .line-clamp-3 {
    display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
  }
</style>