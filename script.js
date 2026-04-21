//nav bar shrink
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});

//dark toggle
const button = document.getElementById("darktoggle");
const body = document.getElementById("page");

button.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
});

//zoom
function magnify(imgID, zoom) {

  const img = document.getElementById(imgID);
  const glass = document.createElement("div");
  glass.setAttribute("class", "img-magnifier-glass");
  img.parentElement.insertBefore(glass, img);
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  const bw = 3;
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  function moveMagnifier(e) {
    let pos, x, y;
    e.preventDefault();

    pos = getCursorPos(e);

    x = pos.x;

    y = pos.y;



    glass.style.left = (x - glass.offsetWidth / 2) + "px";

    glass.style.top = (y - glass.offsetHeight / 2) + "px";



    glass.style.backgroundPosition = "-" + ((x * zoom) - glass.offsetWidth / 2) + "px -" + ((y * zoom) - glass.offsetHeight / 2) + "px";

  }

  function getCursorPos(e) {

    const a = img.getBoundingClientRect();

    let x = e.pageX - a.left - window.pageXOffset;

    let y = e.pageY - a.top - window.pageYOffset;

    return { x, y };

  }

}



// apply to image

if (document.getElementById("myimage1")) {
magnify("myimage1", 2);
magnify("myimage2", 2);
magnify("myimage3", 2);
magnify("myimage4", 2);
}

//ticket dragger
const tickets = document.querySelectorAll(".ticket");

tickets.forEach(ticket => {
  let isDragging = false;


  ticket.addEventListener("mousedown", function(e) {
    isDragging = true;
    ticket.style.cursor = "grabbing"; 
    ticket.style.position = "fixed";
    moveAt(e);
  });

  document.addEventListener("mousemove", function(e) {
    if (isDragging) moveAt(e);
  });

  document.addEventListener("mouseup", function() {
    isDragging = false;
    ticket.style.cursor = "grab"; 
  });

  function moveAt(e) {
    ticket.style.left = e.pageX - ticket.offsetWidth / 2 + "px";
    ticket.style.top = e.pageY - ticket.offsetHeight / 2 + "px";
  }
});