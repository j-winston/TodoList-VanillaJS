//index.js
// on Domcontent loaded
// use simple form input .value
// ev.prevent default
import "./assets/css/style.css";
import taskBank from "./taskBank";
import domService from "./domService";
import pubSub from "./pubsub";

domService.startListeners();

const showAllTasks = () => {
  pubSub.publish("inboxClicked");
};

const inbox = document.querySelector(".nav-link");
inbox.addEventListener("click", showAllTasks);

taskBank.addTask("brush teeth", "do some hygiene", "today");
