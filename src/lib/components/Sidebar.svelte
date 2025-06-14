<script lang="ts">
  import { page } from '$app/stores';
  import { Home, FolderKanban, CheckSquare, Settings, Menu, X, Moon, Sun } from 'lucide-svelte';
  import { fade } from 'svelte/transition';
  import { theme } from '$lib/stores/theme'; // Import the store

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Projects', href: '/projects', icon: FolderKanban },
    { name: 'Tasks', href: '/tasks', icon: CheckSquare }
  ];

  const settingsNav = { name: 'Settings', href: '/settings', icon: Settings };
  
  let sidebarOpen = false;

  $: isActive = (href: string) => {
    if (href === '/') return $page.url.pathname === '/';
    return $page.url.pathname.startsWith(href);
  };

  function closeSidebar() {
    sidebarOpen = false;
  }

  // This now correctly toggles between light and dark modes.
  function toggleTheme() {
    const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    theme.set(newTheme);
  }
</script>

{#if sidebarOpen}
  <div 
    transition:fade={{ duration: 250 }} 
    class="fixed inset-0 z-40 bg-black/50 lg:hidden" 
    on:click={closeSidebar}
    on:keydown={(e) => e.key === 'Escape' && closeSidebar()}
    role="button"
    tabindex="-1"
    aria-label="Close sidebar"
  ></div>
{/if}

<aside class="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static {sidebarOpen ? 'translate-x-0' : '-translate-x-full'}">
  <div class="flex items-center justify-between h-16 px-6 border-b border-neutral-200 dark:border-neutral-800">
    <a href="/" class="flex items-center gap-2">
      <div class="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
        <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
          <path d="M2 12L12 17L22 12" />
        </svg>
      </div>
      <span class="text-xl font-bold text-neutral-900 dark:text-white">Planner</span>
    </a>
    <button 
      type="button" 
      class="lg:hidden p-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
      on:click={closeSidebar}
    >
      <X class="h-5 w-5" />
    </button>
  </div>

  <nav class="flex-1 overflow-y-auto py-6 px-4">
    <div class="space-y-1">
      {#each navigation as item}
        <a 
          href={item.href} 
          on:click={closeSidebar}
          class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
            {isActive(item.href) 
              ? 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 text-indigo-600 dark:text-white' 
              : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white'}"
        >
          <svelte:component 
            this={item.icon} 
            class="mr-3 h-5 w-5 {isActive(item.href) 
              ? 'text-indigo-500 dark:text-indigo-400' 
              : 'text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300'}" 
          />
          <span>{item.name}</span>
          {#if isActive(item.href)}
            <span class="ml-auto w-1.5 h-1.5 bg-indigo-500 dark:bg-indigo-400 rounded-full"></span>
          {/if}
        </a>
      {/each}
    </div>
  </nav>

  <div class="flex-shrink-0 border-t border-neutral-200 dark:border-neutral-800 p-4">
    <div class="flex items-center justify-between">
      <a 
        href={settingsNav.href} 
        on:click={closeSidebar}
        class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 flex-1
          {isActive(settingsNav.href) 
            ? 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 text-indigo-600 dark:text-white' 
            : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white'}"
      >
        <svelte:component 
          this={settingsNav.icon} 
          class="mr-3 h-5 w-5 {isActive(settingsNav.href) 
            ? 'text-indigo-500 dark:text-indigo-400' 
            : 'text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300'}" 
        />
        <span>{settingsNav.name}</span>
      </a>

      <button 
        on:click={toggleTheme}
        class="ml-2 p-2.5 text-neutral-600 dark:text-neutral-400 hover:text-yellow-600 dark:hover:text-yellow-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-all duration-200"
        title="Toggle theme"
      >
        <Sun class="h-5 w-5 hidden dark:block" />
        <Moon class="h-5 w-5 dark:hidden" />
      </button>
    </div>
  </div>
</aside>

<header class="lg:hidden fixed top-0 left-0 right-0 z-30 bg-white dark:bg-neutral-950 shadow-sm border-b border-neutral-200 dark:border-neutral-800">
  <div class="flex items-center justify-between h-16 px-4">
    <button 
      type="button" 
      class="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
      on:click={() => (sidebarOpen = true)}
    >
      <Menu class="h-6 w-6" />
    </button>
    
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
        <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
          <path d="M2 12L12 17L22 12" />
        </svg>
      </div>
      <span class="text-lg font-semibold text-neutral-900 dark:text-white">Planner</span>
    </div>
    
    <button 
      on:click={toggleTheme}
      class="p-2 text-neutral-600 dark:text-neutral-400 hover:text-yellow-600 dark:hover:text-yellow-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
    >
      <Sun class="h-5 w-5 hidden dark:block" />
      <Moon class="h-5 w-5 dark:hidden" />
    </button>
  </div>
</header>