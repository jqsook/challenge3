
import CheckItemsController from "./Controllers/CheckItemsController.js";
import { TasksController } from "./Controllers/TasksController.js";



class App {
  // valuesController = new ValuesController();
  tasksController = new TasksController()
  checkItemsController = new CheckItemsController()
}

window["app"] = new App();
