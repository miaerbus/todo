
let list = document.getElementById('list');
let myList = new TaskList();

function addTaskToList() {
  let currentTask = new Task();

  currentTask.setTaskName(document.getElementById('text').value);
  myList.add(currentTask);

  let node = document.createElement('li');              // Create a <li> node
  let textnode = document.createTextNode(currentTask.getTaskName());  // Create a text node
  node.appendChild(textnode);                           // Append the text to <li>
  list.appendChild(node);                               // Append <li> to <ul>
  document.getElementById('text').value = '';
  document.getElementById('count').value = myList.countList();
}

document.getElementById('button').addEventListener('click', addTaskToList);


function Task() {
  let task = null;
  let isFinished = null;
  let dateCreated = null;

  this.getTaskName = function() {
    return task;
  }
  this.setTaskName = function(taskName) {
    task = taskName;
  }
  this.getIsFinished = function() {
    return isFinished;
  }
  this.getDatum = function() {
    return dateCreated;
  }
  this.setDatum = function(date) {
    dateCreated = date; // date.format ne dela
  }
  this.markFinished = function() {
    isFinished = true;
  }
  this.markNotFinished = function() {
    isFinished = false;
  }
};

function TaskList() {
  let list = [];
  let count = 0;

  this.getTaskList = function() {
    return list;
  }
  this.setTaskList = function(listName) {
    list = listName;
  }
  this.add = function(task) {
    list.push(task);
    count++;
  }
  this.countList = function() {
    console.log(list.length);
    return list.length;
  }
};
