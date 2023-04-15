//index.js
// on Domcontent loaded
// use simple form input .value
// ev.prevent default
import "./assets/css/style.css";
import taskBank from "./taskBank";
import domService from "./domService";
import pubSub from "./pubsub";

domService.startEventListeners();
