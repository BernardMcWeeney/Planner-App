<script>
  import { Plus } from 'lucide-svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="space-y-8">
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <div>
      <h1 class="text-3xl font-bold text-white">Projects</h1>
      <p class="text-neutral-400 mt-1">A central place to manage and organize your work.</p>
    </div>
    <a 
      href="/projects/new" 
      class="inline-flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950"
    >
      <Plus class="h-4 w-4" />
      New Project
    </a>
  </div>

  {#if data.projects && data.projects.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {#each data.projects as project (project.id)}
        <ProjectCard {project} />
      {/each}
    </div>
  {:else}
    <div class="text-center py-16 border-2 border-dashed border-neutral-800 rounded-xl">
        <div class="w-16 h-16 bg-neutral-800/80 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-neutral-400"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg>
        </div>
      <h3 class="text-lg font-semibold text-white mb-1">No Projects Found</h3>
      <p class="text-neutral-400 text-sm mb-6">Get started by creating your first project.</p>
      <a 
        href="/projects/new" 
        class="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
      >
        <Plus class="h-4 w-4" />
        Create Project
      </a>
    </div>
  {/if}
</div>