<script lang="ts">
  import { Moon, Sun, Monitor, Palette, Bell, Shield, Info } from 'lucide-svelte';
  import { theme } from '$lib/stores/theme'; // Import the one true store

  type ThemeOption = { value: 'light' | 'dark' | 'system'; label: string; icon: any };

  const themeOptions: ThemeOption[] = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ];
</script>

<div class="space-y-8">
  <div>
    <h1 class="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Settings</h1>
    <p class="text-neutral-600 dark:text-neutral-400">Manage your preferences and customize your experience.</p>
  </div>

  <div class="space-y-6">
    <section class="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div class="p-6 border-b border-neutral-200 dark:border-neutral-800">
        <div class="flex items-center gap-4">
          <div class="w-11 h-11 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white shadow-md shadow-purple-500/20">
            <Palette class="w-5 h-5" />
          </div>
          <div>
            <h2 class="text-lg font-semibold text-neutral-900 dark:text-white">Appearance</h2>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">Customize how Planner looks on your device.</p>
          </div>
        </div>
      </div>
      
      <div class="p-6">
        <div>
          <label id="theme-label" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
            Theme
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3" role="group" aria-labelledby="theme-label">
            {#each themeOptions as option}
              <button
                on:click={() => theme.set(option.value)}
                class="relative flex flex-col sm:flex-row items-center justify-center gap-3 p-4 rounded-lg border-2 transition-all duration-200 group
                  {$theme === option.value 
                    ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 shadow-sm' 
                    : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'}"
              >
                <svelte:component 
                  this={option.icon} 
                  class="w-5 h-5 transition-colors {$theme === option.value 
                    ? 'text-indigo-600 dark:text-indigo-400' 
                    : 'text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300'}" 
                />
                <span class="text-sm font-medium transition-colors {$theme === option.value 
                  ? 'text-indigo-600 dark:text-indigo-400' 
                  : 'text-neutral-700 dark:text-neutral-300'}">
                  {option.label}
                </span>
                {#if $theme === option.value}
                  <div class="absolute -top-1.5 -right-1.5 w-5 h-5 bg-indigo-600 rounded-full border-2 border-white dark:border-neutral-900 flex items-center justify-center">
                     <svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                {/if}
              </button>
            {/each}
          </div>
        </div>
      </div>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
       <section class="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 relative overflow-hidden">
        <div class="absolute -top-10 -right-10 w-28 h-28 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-2xl"></div>
        <div class="relative">
          <div class="flex items-center gap-4 mb-3">
            <div class="w-11 h-11 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Bell class="w-5 h-5" />
            </div>
            <h2 class="text-lg font-semibold text-neutral-900 dark:text-white">Notifications</h2>
          </div>
          <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-4">Configuration for alerts and reminders will be available soon.</p>
          <button disabled class="w-full text-sm font-semibold py-2 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 cursor-not-allowed">
            Manage Notifications
          </button>
        </div>
      </section>

      <section class="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 relative overflow-hidden">
        <div class="absolute -top-10 -right-10 w-28 h-28 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-2xl"></div>
        <div class="relative">
          <div class="flex items-center gap-4 mb-3">
            <div class="w-11 h-11 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white shadow-md shadow-green-500/20">
              <Shield class="w-5 h-5" />
            </div>
            <h2 class="text-lg font-semibold text-neutral-900 dark:text-white">Privacy & Security</h2>
          </div>
          <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-4">Manage your data and privacy settings. Coming soon.</p>
          <button disabled class="w-full text-sm font-semibold py-2 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 cursor-not-allowed">
            View Privacy Policy
          </button>
        </div>
      </section>
    </div>

    <section class="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div class="p-6">
        <div class="flex items-center gap-4 mb-4">
           <div class="w-11 h-11 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
            <Info class="w-5 h-5" />
          </div>
          <div>
            <h2 class="text-lg font-semibold text-neutral-900 dark:text-white">About Planner</h2>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">Application and environment details.</p>
          </div>
        </div>
        
        <div class="space-y-1 text-sm">
          <div class="flex justify-between items-center py-2 border-b border-neutral-100 dark:border-neutral-800">
            <span class="text-neutral-600 dark:text-neutral-400">Version</span>
            <span class="font-mono text-xs bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-md text-neutral-700 dark:text-neutral-300">1.0.0</span>
          </div>
          <div class="flex justify-between items-center py-2 border-b border-neutral-100 dark:border-neutral-800">
            <span class="text-neutral-600 dark:text-neutral-400">Environment</span>
            <span class="font-mono text-xs bg-emerald-100 dark:bg-emerald-900/50 px-2 py-1 rounded-md text-emerald-800 dark:text-emerald-400">Production</span>
          </div>
          <div class="flex justify-between items-center py-2">
            <span class="text-neutral-600 dark:text-neutral-400">Powered by</span>
            <span class="font-semibold text-neutral-900 dark:text-white">Cloudflare & SvelteKit</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>