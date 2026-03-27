async function showTasks(zoneName) {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = "<p>Loading tasks...</p>";

  const { data: tasks, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('zone', zoneName)
    .limit(12);

  if (error) {
    console.error(error);
    taskList.innerHTML = "<p>Error loading tasks.</p>";
    return;
  }

  if (!tasks || tasks.length === 0) {
    taskList.innerHTML = "<p>No tasks available in this area.</p>";
    return;
  }

  taskList.innerHTML = "";

  tasks.forEach(task => {
    const card = document.createElement('div');
    card.className = 'task-card';
    card.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description || "No description"}</p>
      <p><strong>Budget:</strong> ${task.budget || "N/A"}</p>
      <p><strong>Deadline:</strong> ${task.deadline || "N/A"}</p>
      <p><strong>Location:</strong> ${task.zone}</p>
    `;
    taskList.appendChild(card);
  });
}
