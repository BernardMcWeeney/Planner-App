<script lang="ts">
  import Kpi from '$lib/components/Kpi.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { FolderOpen, CheckCircle2, Clock, AlertCircle, TrendingUp, Calendar, ArrowRight } from 'lucide-svelte';
  
  export let data;

  // Dashboard stats with proper defaults
  const stats = [
    {
      title: 'Total Projects',
      value: data.stats?.totalProjects || 0,
      icon: FolderOpen,
      color: 'indigo',
      subtitle: 'Active workspaces'
    },
    {
      title: 'Open Tasks',
      value: data.stats?.openTasks || 0,
      icon: CheckCircle2,
      color: 'emerald',
      subtitle: `${data.stats?.completedTasks || 0} completed`
    },
    {
      title: 'Due Soon',
      value: data.stats?.dueSoon || 0,
      icon: Clock,
      color: 'amber',
      subtitle: 'Next 7 days'
    },
    {
      title: 'Overdue',
      value: data.stats?.overdueTasks || 0,
      icon: AlertCircle,
      color: 'rose',
      subtitle: 'Needs attention'
    }
  ];

  // Recent activity
  const recentTasks = data.recentTasks || [];
  const recentNotes = data.recentNotes || [];
  const recentProjects = data.recentProjects || [];
</script>

<div class="space-y-8">
  <!-- Header -->
  <div>
    <h1 class="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Dashboard</h1>
    <p class="text-neutral-600 dark:text-neutral-400">
      Welcome back! Here's an overview of your projects and tasks.
    </p>
  </div>

  <!-- Stats Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {#each stats as stat}
      <Kpi 
        title={stat.title}
        value={stat.value}
        icon={stat.icon}
        color={stat.color}
        subtitle={stat.subtitle}
            />
    {/each}
  </div>

  <!-- Recent Activity Section -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- Recent Projects -->
    <div class="lg:col-span-2 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold text-neutral-900 dark:text-white">Recent Projects</h2>
        <a href="/projects" class="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1">
          View all <ArrowRight class="w-4 h-4" />
        </a>
      </div>
      
      {#if recentProjects.length > 0}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {#each recentProjects.slice(0, 4) as project}
            <ProjectCard {project} />
          {/each}
        </div>
      {:else}
        <div class="text-center py-12">
          <FolderOpen class="w-12 h-12 text-neutral-300 dark:text-neutral-600 mx-auto mb-3" />
          <p class="text-neutral-500 dark:text-neutral-400 text-sm">No projects yet</p>
          <a href="/projects/new" class="text-indigo-600 dark:text-indigo-400 text-sm hover:underline mt-2 inline-block">
            Create your first project
          </a>
        </div>
      {/if}
    </div>

    <!-- Recent Tasks -->
    <div class="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold text-neutral-900 dark:text-white">Recent Tasks</h2>
        <a href="/tasks" class="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1">
          View all <ArrowRight class="w-4 h-4" />
        </a>
      </div>
      
      <div class="space-y-3">
        {#if recentTasks.length > 0}
          {#each recentTasks.slice(0, 5) as task}
            <div class="flex items-start gap-3 group">
              <div class="mt-1">
                {#if task.done}
                  <div class="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                {:else}
                  <div class="w-4 h-4 rounded-full border-2 border-neutral-300 dark:border-neutral-600 group-hover:border-indigo-500 transition-colors"></div>
                {/if}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-neutral-900 dark:text-white truncate {task.done ? 'line-through opacity-60' : ''}">
                  {task.name}
                </p>
                <p class="text-xs text-neutral-500 dark:text-neutral-400">
                  {task.project_name || 'No project'}
                </p>
              </div>
              {#if task.priority === 2}
                <span class="text-xs bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-400 px-2 py-0.5 rounded-full">
                  High
                </span>
              {/if}
            </div>
          {/each}
        {:else}
          <div class="text-center py-8">
            <CheckCircle2 class="w-8 h-8 text-neutral-300 dark:text-neutral-600 mx-auto mb-2" />
            <p class="text-neutral-500 dark:text-neutral-400 text-sm">No tasks yet</p>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <!-- Activity Timeline -->
  <div class="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-lg font-semibold text-neutral-900 dark:text-white">Recent Activity</h2>
      <div class="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
        <Calendar class="w-4 h-4" />
        <span>Last 7 days</span>
      </div>
    </div>
    
    {#if recentNotes.length > 0}
      <div class="space-y-4">
        {#each recentNotes.slice(0, 3) as note}
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-indigo-100 dark:bg-indigo-500/20 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-neutral-900 dark:text-white">
                {note.title || 'Untitled Note'}
              </p>
              <p class="text-sm text-neutral-600 dark:text-neutral-400 truncate">
                {note.content}
              </p>
              <p class="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
                {new Date(note.updated_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="text-center py-8">
        <TrendingUp class="w-8 h-8 text-neutral-300 dark:text-neutral-600 mx-auto mb-2" />
        <p class="text-neutral-500 dark:text-neutral-400 text-sm">No recent activity</p>
        <p class="text-neutral-400 dark:text-neutral-500 text-xs mt-1">Start by creating a project or task</p>
      </div>
    {/if}
  </div>
</div>