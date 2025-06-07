<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { Home, FolderKanban, CheckSquare, Settings, Menu, X } from 'lucide-svelte';

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Projects', href: '/projects', icon: FolderKanban },
    { name: 'Tasks', href: '/tasks', icon: CheckSquare },
  ];

  const settingsNav = { name: 'Settings', href: '/settings', icon: Settings };

  let sidebarOpen = false;

  // Reactive check for active route
  $: isActive = (href) => {
    if (href === '/') return $page.url.pathname === '/';
    return $page.url.pathname.startsWith(href);
  };

  // Close sidebar when clicking on a link (mobile)
  function closeSidebar() {
    sidebarOpen = false;
  }

  // Close sidebar when clicking outside (mobile)
  function handleBackdropClick() {
    sidebarOpen = false;
  }
</script>

<div class="flex h-screen bg-gray-50">
  <!-- Mobile sidebar backdrop -->
  {#if sidebarOpen}
    <div 
      class="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
      on:click={handleBackdropClick}
      on:keydown={(e) => e.key === 'Escape' && handleBackdropClick()}
      role="button"
      tabindex="0"
    ></div>
  {/if}

  <!-- Sidebar -->
  <aside class="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:shadow-none lg:border-r lg:border-gray-200 {sidebarOpen ? 'translate-x-0' : '-translate-x-full'}">
    <!-- Sidebar header -->
    <div class="flex items-center justify-between h-16 px-6 border-b border-gray-200 lg:justify-start">
      <h1 class="text-xl font-bold text-gray-900">Planner</h1>
      <button
        type="button"
        class="lg:hidden -mr-2 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        on:click={() => sidebarOpen = false}
      >
        <X class="h-6 w-6" />
      </button>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 flex flex-col overflow-y-auto">
      <div class="px-4 py-6 space-y-1">
        {#each navigation as item}
          <a
            href={item.href}
            on:click={closeSidebar}
            class="group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ease-in-out
                   {isActive(item.href)
              ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-500'
              : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}"
          >
            <svelte:component 
              this={item.icon} 
              class="mr-3 h-5 w-5 {isActive(item.href) ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500'}" 
            />
            <span>{item.name}</span>
          </a>
        {/each}
      </div>
    </nav>
    
    <!-- Settings and user info -->
    <div class="flex-shrink-0 border-t border-gray-200 p-4">
      <a
        href={settingsNav.href}
        on:click={closeSidebar}
        class="group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ease-in-out
               {isActive(settingsNav.href)
          ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-500'
          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}"
      >
        <svelte:component 
          this={settingsNav.icon} 
          class="mr-3 h-5 w-5 {isActive(settingsNav.href) ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500'}" 
        />
        <span>{settingsNav.name}</span>
      </a>
      
      <!-- User profile -->
      <div class="mt-4 flex items-center px-3 py-2 rounded-md hover:bg-gray-50 transition-colors duration-150 ease-in-out">
        <div class="flex-shrink-0">
          <div class="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
            <span class="text-sm font-medium text-white">DU</span>
          </div>
        </div>
        <div class="ml-3 flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate">Demo User</p>
          <p class="text-xs text-gray-500 truncate">demo@example.com</p>
        </div>
      </div>
    </div>
  </aside>

  <!-- Main content -->
  <div class="flex-1 flex flex-col overflow-hidden lg:ml-0">
    <!-- Mobile header -->
    <header class="lg:hidden bg-white shadow-sm border-b border-gray-200">
      <div class="flex items-center justify-between h-16 px-4">
        <button
          type="button"
          class="-ml-2 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          on:click={() => sidebarOpen = true}
        >
          <Menu class="h-6 w-6" />
        </button>
        <h1 class="text-lg font-semibold text-gray-900">Planner</h1>
        <div class="w-10"></div> <!-- Spacer for centering -->
      </div>
    </header>

    <!-- Page content -->
    <main class="flex-1 overflow-y-auto bg-gray-50">
      <div class="p-4 sm:p-6 lg:p-8">
        <slot />
      </div>
    </main>
  </div>
</div>