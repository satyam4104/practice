// Change Content
function changeContent() {
    document.getElementById("content-text").innerHTML = "Content has been changed!";
}

// Change Style
function changeStyle() {
    const styleText = document.getElementById("style-text");
    styleText.style.color = "blue";
    styleText.style.fontSize = "20px";
}

// Add Item
function addItem() {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    document.getElementById("item-list").appendChild(newItem);
}

// Remove Item
function removeItem() {
    const item = document.getElementById("remove-item");
    if (item) {
        item.parentNode.removeChild(item);
    } else {
        alert("Item already removed!");
    }
}

// Hover Event
document.getElementById("hover-element").addEventListener("mouseover", function() {
    this.innerHTML = "You hovered over me!";
});
