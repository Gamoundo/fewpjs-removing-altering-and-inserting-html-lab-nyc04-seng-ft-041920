// Write your code here!
document.getElementById("main").remove();
let newHeader = document.createElement("h1")
document.body.appendChild(newHeader)
// document.querySelector("newHeader").innerHTML = "<h1 id ='victory'>X is the Champion</h1>"
newHeader.textContent = "Akil is the champion"
newHeader.id = 'victory'