const sidebarButton = document.getElementById('sidebar-button');
const sidebar = document.getElementById('sidebar');
const imgPicture = document.getElementById("image");
const UserName = document.getElementById('textForUsername');

sidebarButton.addEventListener('click', () => {
  sidebarButton.onclick = function() { img.style.display = "none" };
  // This makes it so, supposedly, when you click once, the image shows, then on another click, it'll stop it, then refresh, and so on so on
  var img = document.createElement('img', imgPicture);
  img.src = localStorage.getItem("imgURL");
  img.style.width = "50px";
  img.style.height = "50px";

  imgPicture.appendChild(img)[1];
  UserName.innerHTML = `User signed in as ${localStorage.getItem('username')}`
  sidebar.classList.toggle('active');
  sidebarButton.classList.toggle('active');

  const sidebarWidth = sidebar.offsetWidth;

  if (sidebar.classList.contains('active')) {
    sidebarButton.style.left = `${sidebarWidth + 20}px`;
  } else {
    sidebarButton.style.left = '20px';
  }
});
function signOut() {
  localStorage.username = null;
  localStorage.imgURL = null;
  location = "index.html";
}
function show(n) {
  return n.style.display = "block";
}
if (!localStorage.getItem("username")) {
  alert("You're not signed in, going to sign in...");
  location = "index.html";
}
