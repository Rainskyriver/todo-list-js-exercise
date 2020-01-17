// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  }
  return task;
};

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

// Print the state of a task to the console in a nice readable way

//Add a new task to the list


// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Scoop the poop"); // task 0
const task2 = newTask("Do Laundry", "I don't wanna"); // task 1
const tasks = [task1, task2];


tasks[0].logState(); // Clean Cat Litter has not been completed
tasks[0].markCompleted();
tasks[0].logState(); // Clean Cat Litter has been completed


console.log(tasks);
