<script lang="ts">
  import { Sparkles, TrendingUp } from 'lucide-svelte';
  
  export let title: string;
  export let value: number | string;
  export let subtitle: string = '';
  export let trend: number | null = null;
  export let icon: any = null;
  export let color: 'indigo' | 'emerald' | 'amber' | 'rose' | 'sky' | 'purple' = 'indigo';
  
  const colorClasses = {
    indigo: {
      bg: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      light: 'bg-indigo-500/10 dark:bg-indigo-500/20',
      text: 'text-indigo-600 dark:text-indigo-400',
      border: 'border-indigo-500/20'
    },
    emerald: {
      bg: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      light: 'bg-emerald-500/10 dark:bg-emerald-500/20',
      text: 'text-emerald-600 dark:text-emerald-400',
      border: 'border-emerald-500/20'
    },
    amber: {
      bg: 'bg-gradient-to-br from-amber-500 to-amber-600',
      light: 'bg-amber-500/10 dark:bg-amber-500/20',
      text: 'text-amber-600 dark:text-amber-400',
      border: 'border-amber-500/20'
    },
    rose: {
      bg: 'bg-gradient-to-br from-rose-500 to-rose-600',
      light: 'bg-rose-500/10 dark:bg-rose-500/20',
      text: 'text-rose-600 dark:text-rose-400',
      border: 'border-rose-500/20'
    },
    sky: {
      bg: 'bg-gradient-to-br from-sky-500 to-sky-600',
      light: 'bg-sky-500/10 dark:bg-sky-500/20',
      text: 'text-sky-600 dark:text-sky-400',
      border: 'border-sky-500/20'
    },
    purple: {
      bg: 'bg-gradient-to-br from-purple-500 to-purple-600',
      light: 'bg-purple-500/10 dark:bg-purple-500/20',
      text: 'text-purple-600 dark:text-purple-400',
      border: 'border-purple-500/20'
    }
  };
  
  $: classes = colorClasses[color];
</script>

<div class="relative overflow-hidden bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 group">
  <!-- Background decoration -->
  <div class="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full {classes.light} blur-2xl opacity-50"></div>
  
  <div class="relative flex items-start justify-between">
    <div class="flex-1">
      <div class="flex items-center gap-2 mb-1">
        <p class="text-sm font-medium text-neutral-600 dark:text-neutral-400">{title}</p>
        {#if trend !== null}
          <span class="flex items-center gap-1 text-xs {trend >= 0 ? 'text-emerald-500' : 'text-rose-500'}">
            <TrendingUp class="w-3 h-3 {trend < 0 ? 'rotate-180' : ''}" />
            {Math.abs(trend)}%
          </span>
        {/if}
      </div>
      
      <p class="text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
        {value}
      </p>
      
      {#if subtitle}
        <p class="text-xs text-neutral-500 dark:text-neutral-500 mt-1">{subtitle}</p>
      {/if}
    </div>
    
    <div class="{classes.bg} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg {icon ? '' : 'p-2'}">
      {#if icon}
        <svelte:component this={icon} class="w-6 h-6" />
      {:else}
        <Sparkles class="w-6 h-6" />
      {/if}
    </div>
  </div>
  
  <!-- Hover effect -->
  <div class="absolute inset-x-0 bottom-0 h-1 {classes.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
</div>