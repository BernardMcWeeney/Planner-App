<script>
    // In a real app, you would load this data from your +page.server.js
    const stats = [
        { name: 'Active Projects', value: 3 },
        { name: 'Active Tasks', value: 7, inProgress: 1 },
        { name: 'Overdue', value: 7, status: 'danger' }
    ];
</script>

<div class="space-y-10">
  <div>
    <h1 class="text-3xl font-bold text-slate-900">Dashboard</h1>
    <p class="mt-1 text-slate-500">Welcome back, here's a look at your current workload.</p>
  </div>

  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {#each stats as item}
      <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200/80">
        <div class="flex justify-between items-start">
            <div>
              <p class="text-sm font-medium text-slate-500">{item.name}</p>
              <p class="mt-1 text-4xl font-bold text-slate-900">{item.value}</p>
              {#if item.inProgress}
                <p class="text-xs text-slate-500 mt-1">{item.inProgress} in progress</p>
              {:else if item.status === 'danger'}
                 <p class="text-xs text-red-600 mt-1">Tasks past due date</p>
              {/if}
            </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="grid grid-cols-1 gap-10 lg:grid-cols-5">
      <div class="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm border border-slate-200/80">
          <h2 class="font-semibold text-slate-900">Recent Projects</h2>
          <p class="text-sm text-slate-500">Your most recently updated projects.</p>
          </div>
      <div class="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200/80">
          <h2 class="font-semibold text-slate-900">Active Tasks</h2>
          <p class="text-sm text-slate-500">Tasks that need your attention.</p>
           </div>
  </div>
</div>