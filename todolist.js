var todos = ["Add Todos"];

window.setTimeout(function(){

var input = prompt("What would you like to do?");	

while(input !== "quit"){
	if (input === "list") {
		listTodos();
	} else if(input === "new") {
		addTodo();
	} else if(input === "delete") {
		deleteTodo();
	} else {
		alert("Please choose an action.")
	}
	input = prompt("What would you like to do?")
}
alert("Well, see ya!");


}, 500);

function listTodos() {
	console.log("**********")
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("**********");
};

function addTodo() {
	var newTodo = prompt("Enter new task");
	todos.push(newTodo);
	console.log("Added Task");
};

function deleteTodo() {
	var index = prompt("Enter index of task to delete");
	todos.splice(index, 1);
	console.log("Deleted Task");
};