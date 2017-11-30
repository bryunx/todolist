function todoList() {
	var item = document.getElementById("todoInput").value
	var text = document.createTextNode(item)
	var newItem = document.createElement("li")
	newItem.appendChild(text)
	document.getElementById("todoList").appendChild(newItem)
}

document.onkeydown = function (e) {

	if(e.keyCode == 13) {
		e.preventDefault();
		todoList();
	}
};