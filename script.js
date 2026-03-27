// Fetch tasks by zone and display them
async function showTasks(zoneName) {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = "<p>Loading tasks...</p>";

  try {
    const { data: tasks, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('zone', zoneName)
      .limit(12);

    console.log("Zone requested:", zoneName);
    console.log("Tasks returned:", tasks);
    console.log("Error:", error);

    if (error) {
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
  } catch (err) {
    console.error("Unexpected error:", err);
    taskList.innerHTML = "<p>Unexpected error occurred.</p>";
  }
}
