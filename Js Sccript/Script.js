class Task {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.completed = false;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  generateId() {
    return Date.now();
  }

  async addTask(description) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const id = this.generateId();
        const newTask = new Task(id, description);
        this.tasks.push(newTask);
        resolve(newTask);
      }, 500); // Simulating async behavior with a delay
    });
  }

  async completeTask(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const task = this.tasks.find(task => task.id === id);

        if (task) {
          task.completed = true;
          resolve(task);
        } else {
          reject(new Error(`Task with ID ${id} not found.`));
        }
      }, 500); // Simulating async behavior with a delay
    });
  }

  async getCompletedTasks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const completedTasks = this.tasks.filter(task => task.completed);
        resolve(completedTasks);
      }, 500); // Simulating async behavior with a delay
    });
  }
}

// Stylish console logs
function logTaskDetails(task) {
  console.log(`ID: ${task.id} | Description: ${task.description} | Completed: ${task.completed}`);
}

async function demonstrateTaskManager() {
  console.log('Creating a Task Manager...');
  const taskManager = new TaskManager();

  console.log('\nAdding tasks...');
  const task1 = await taskManager.addTask('Complete assignment');
  const task2 = await taskManager.addTask('Read a book');
  const task3 = await taskManager.addTask('Go for a run');

  console.log('\nTasks added successfully:');
  taskManager.tasks.forEach(task => logTaskDetails(task));

  console.log('\nCompleting a task...');
  try {
    await taskManager.completeTask(task1.id);
    console.log('Task completed successfully.');
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }

  console.log('\nRetrieving completed tasks...');
  const completedTasks = await taskManager.getCompletedTasks();

  console.log('\nAll tasks:');
  taskManager.tasks.forEach(task => logTaskDetails(task));

  console.log('\nCompleted tasks:');
  completedTasks.forEach(task => logTaskDetails(task));
}

// Execute the demonstration
demonstrateTaskManager();
