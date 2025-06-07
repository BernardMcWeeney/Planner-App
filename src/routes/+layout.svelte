<!-- src/routes/+layout.svelte -->
<script>
  import '../app.css';
  import { page } from '$app/stores';
  
  const navigation = [
    { name: 'Dashboard', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Tasks', href: '/tasks' },
    { name: 'Notes', href: '/notes' },
    { name: 'Ideas', href: '/ideas' },
    { name: 'Goals', href: '/goals' },
    { name: 'Docs', href: '/docs' },
    { name: 'Resources', href: '/resources' }
  ];
</script>

<div class="min-h-screen bg-gray-50">
  <nav class="bg-white shadow-sm border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <h1 class="text-xl font-bold text-gray-900">Planner App</h1>
          </div>
          <div class="ml-6 flex space-x-8">
            {#each navigation as item}
              <a
                href={item.href}
                class="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 {
                  $page.url.pathname === item.href || ($page.url.pathname.startsWith(item.href) && item.href !== '/')
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }"
              >
                {item.name}
              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </nav>

  <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <slot />
  </main>
</div>