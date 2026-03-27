// Generate 12 sample tasks per Guwahati area
const tasksByZone = {
  maligaon: Array.from({length:12},(_,i)=>({
    title:`Maligaon Task ${i+1}`,desc:"Sample description",
    budget:"$"+(20+i*5),deadline:"30 Mar 2026",location:"Maligaon"
  })),
  dispur: Array.from({length:12},(_,i)=>({
    title:`Dispur Task ${i+1}`,desc:"Sample description",
    budget:"$"+(25+i*5),deadline:"31 Mar 2026",location:"Dispur"
  })),
  beltola: Array.from({length:12},(_,i)=>({
    title:`Beltola Task ${i+1}`,desc:"Sample description",
    budget:"$"+(30+i*5),deadline:"1 Apr 2026",location:"Beltola"
  })),
  panbazaar: Array.from({length:12},(_,i)=>({
    title:`Pan Bazaar Task ${i+1}`,desc:"Sample description",
    budget:"$"+(35+i*5),deadline:"2 Apr 2026",location:"Pan Bazaar"
  })),
  zooroad: Array.from({length:12},(_,i)=>({
    title:`Zoo Road Task ${i+1}`,desc:"Sample description",
    budget:"$"+(40+i*5),deadline:"3 Apr 2026",location:"Zoo Road"
  })),
  paltanbazaar: Array.from({length:12},(_,i)=>({
    title:`Paltan Bazaar Task ${i+1}`,desc:"Sample description",
    budget:"$"+(45+i*5),deadline:"4 Apr 2026",location:"Paltan Bazaar"
  }))
};

function showTasks(zoneId) {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = "";
  const tasks = tasksByZone[zoneId] || [];
  if (tasks.length === 0) {
    taskList.innerHTML = "<p>No tasks available in this area.</p>";
    return;
  }
  tasks.forEach(task => {
    const card = document.createElement('div');
    card.className = 'task-card';
    card.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.desc}</p>
      <p><strong>Budget:</strong> ${task.budget}</p>
      <p><strong>Deadline:</strong> ${task.deadline}</p>
      <p><strong>Location:</strong> ${task.location}</p>
    `;
    taskList.appendChild(card);
  });
}
