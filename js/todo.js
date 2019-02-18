function addTaskToList() {
  let currentTask = document.getElementById('text').value;

  if (currentTask == 'undefined' || currentTask == '') {
    return false;
  }

  let node = document.createElement('li');              // Create a <li> node
  let textnode = document.createTextNode(currentTask);  // Create a text node
  node.appendChild(textnode);                           // Append the text to <li>
  document.getElementById('list').appendChild(node);    // Append <li> to <ul>
  document.getElementById('text').value = '';
};

document.getElementById('button').addEventListener('click', addTaskToList);
