let navbar=document.getElementById("CreateLoc");
console.log(navbar);

function Display(){
    console.log("cliked");
    
let card=document.getElementsByClassName("CreateLocCard")[0];
card.style.display="block";
}


function getParentInfo(child) {
  const parent = child.parentElement;
//   alert("Parent tag: " + parent.tagName + "\nParent class: " + parent.className);
  const func=document.getElementsByClassName("Addedfunc")[0];
  let me=document.getElementById("Methods");

  
    createAddedFuncElement();
    function createAddedFuncElement() {
  // Create the container div
  const div = document.createElement("div");
  div.className = "Addedfunc";

  // Create the span
  const span = document.createElement("span");
  span.id = parent.querySelector("span").textContent;;
  span.textContent = parent.querySelector("span").textContent;;

  // Create <i> icons
  const minusIcon = document.createElement("i");
  minusIcon.className = "fa-solid fa-minus";

  const playIcon = document.createElement("i");
  playIcon.className = "fa-solid fa-play";

  // Append children to div
  div.appendChild(span);
  div.appendChild(minusIcon);
  div.appendChild(playIcon);
me.appendChild(div);
  // Finally, add to the page
  // Or use a specific container
}

}

document.querySelectorAll('.func > i').forEach(icon => {
  icon.onclick = function () {
    getParentInfo(this);
  };
});


document.body.addEventListener("click", function(e) {
  if (e.target.classList.contains("fa-minus")) {
    e.target.parentElement.remove();
  }
});


