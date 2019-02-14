// get new task from user and write it to a variable (prompt?)
let tasks = [];
let currentTask;
let isFinished = false;
let answer;

do {
  //if empty, try again until some valid value (loop?)
  currentTask = prompt('Enter task:');

  // if value is "nothing", notify user ("You can do better then that")
  // (you can use alert)
  if (currentTask == '') {
    alert('You can do better then that');
  }
  // if value is anything else
  // ask user if task is done, and request YES/NO,
  // then write it to another variable as boolean
  else {
    var node = document.createElement("li");                 // Create a <li> node
    var textnode = document.createTextNode(currentTask);     // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myTasks").appendChild(node);    // Append <li> to <ul> with id="myTasks"

    tasks.push(currentTask);
    answer = prompt('Are you done? YES/NO');
    if (answer === 'YES') {
      isFinished = true;
    }
  }
} while (tasks.length == 0 || isFinished == false)
