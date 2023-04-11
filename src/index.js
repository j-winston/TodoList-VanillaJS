//index.js
// on Domcontent loaded
// use simple form input .value
// ev.prevent default
import "./assets/css/style.css";
import taskBank from "./taskBank";

domController.listenTo([".inbox"]);

taskBank.addTask("brush teeth", "do some hygiene", "today");

const display = document.querySelector(".task-container");
