// timeout function to show page
function pageTimeout () {
  pageTimeoutTimer = setTimeout(showPage, 3000);
}

function showPage () {
  document.querySelector(".spinner").style.display = "none";
  document.querySelector(".content").style.display = "block";
}

let pageTimeoutTimer;
// page load event listener
window.addEventListener('load', function () {
  pageTimeout();
});
