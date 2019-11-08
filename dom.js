// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");
  let addTodoButton = document.getElementById("add-todo-button");

  var state = [
    { id: -3, description: "Shake tail feathers" },
    { id: -2, description: "Do a funny run"},
    { id: -1, description: "Ask Janet for cactus" }
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement("li");
    // you will need to use addEventListener - can't think what this refers to! (ignoring)

    // add span holding description
    let descNode = document.createElement("span");
    descNode.textContent = todo.description;
    todoNode.appendChild(descNode);


      // add markTodo button
      var markTodoButton = document.createElement("button");
      markTodoButton.textContent = '✓';

      if (todo.done == false) {
        markTodoButton.classList.remove('todo-list__item--completed')
      }
      if (todo.done == true) {
        markTodoButton.classList.add('todo-list__item--completed')
        markTodoButton.contentText = ":heavy_check_mark:";
        descNode.setAttribute("style", "text-decoration: line-through;")
      }
      markTodoButton.addEventListener("click", function(event) {
        var newState = todoFunctions.markTodo(state, todo.id);
        update(newState);
      });
      todoNode.appendChild(markTodoButton);

    // this adds the delete button
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.textContent = '✘';
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add classes for css

    todoNode.classList.add("todo-list__item");
    descNode.classList.add('todo-list__description');
    deleteButtonNode.classList.add("todo-list__delete");
    markTodoButton.classList.add("todo-list__mark");

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var desc = event.target.description.value;
      let newTodo = {description: desc};
      var newState = todoFunctions.addTodo(state,newTodo);
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement("ul");

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    todoListNode.class = 'todo-list';
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);

  // listener to add(/remove) class to completed(/reactivated) tasks
  let markBoxes = [...document.querySelectorAll('.todo-list__mark')];
  console.log(markBoxes);
  addEventListener('click',function(event) {
    if (markBoxes.includes(event.target)) {
      // if (event.target.classList.contains('todo-list__item--completed')) {
      // event.target.parentNode.classList.remove('todo-list__item--completed')
      // } else {
      event.target.parentNode.classList.add('todo-list__item--completed');
      // console.log(event.target.parentNode);
      // console.log(event.target.classList.contains('todo-list__item--completed'));
      // };
    };
  })

})();
