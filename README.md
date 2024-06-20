# Todo App

This Todo App collects the Task Name , Task Descriptiopn in default status of Not completed.
Using Props Rendering method View and Edit Functions were done.

 State Management:
        todos: an array of todo objects.
        filter: a string to track the current filter status (all, completed, not-completed).
    Functions:
        addTodo: adds a new todo to the list with a default status of 'not-completed'.
        updateTodo: updates an existing todo in the list.
        deleteTodo: removes a todo from the list.
        filteredTodos: filters the todos based on the current filter status.
    Render:
        Renders the TodoForm component for adding new todos.
        Renders the Filter component for filtering todos.
        Renders the TodoList component for displaying the filtered todos.

Props:

   todos: an array of todo objects to display.
   updateTodo: a function to update a todo.
   deleteTodo: a function to delete a todo.

Render:

   Maps through the todos array and renders each TodoItem component.
