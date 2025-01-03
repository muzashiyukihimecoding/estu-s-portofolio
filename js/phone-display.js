// Functions to open SIdebar

const sidebar = document.getElementById("sidebar");
const menuBurger = document.getElementById("menu-burger");

menuBurger.addEventListener("click", () => {
   if (sidebar.style.left === "0px") {
      sidebar.style.left = "-300px";
   } else {
      sidebar.style.left = "0px";
   }
});
