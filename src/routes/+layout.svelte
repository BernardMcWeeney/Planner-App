<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import { theme } from '$lib/stores/theme'; // <-- Import our new store

  let mounted = false;

  onMount(() => {
    theme.init(); // <-- Initialize the theme from our store
    mounted = true;
  });
</script>

<div class="flex h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
  <Sidebar />
  
  <div class="flex-1 flex flex-col overflow-hidden">
    <div class="h-16 lg:hidden"></div>
    
    <main class="flex-1 overflow-y-auto">
      <div class="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {#if mounted}
          <slot />
        {:else}
          <div class="flex items-center justify-center h-64">
            <div class="animate-pulse">
              <div class="h-8 w-32 bg-neutral-200 dark:bg-neutral-800 rounded mb-4"></div>
              <div class="h-4 w-48 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
            </div>
          </div>
        {/if}
      </div>
    </main>
  </div>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  
  :global(body) {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  :global(*::-webkit-scrollbar) {
    width: 8px;
    height: 8px;
  }
  
  :global(*::-webkit-scrollbar-track) {
    background: transparent;
  }
  
  :global(*::-webkit-scrollbar-thumb) {
    background: #d4d4d4;
    border-radius: 9999px;
  }
  
  :global(.dark *::-webkit-scrollbar-thumb) {
    background: #404040;
  }
  
  :global(*::-webkit-scrollbar-thumb:hover) {
    background: #a3a3a3;
  }
  
  :global(.dark *::-webkit-scrollbar-thumb:hover) {
    background: #525252;
  }
</style>