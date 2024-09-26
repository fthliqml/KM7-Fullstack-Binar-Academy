class Tooltip {}

class ProjectItem {
  constructor(id, updateProjectListsFunction) {
    this.id = id;
    this.updateProjectListsFunction = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton();
  }

  // method
  connectMoreInfoButton() {}

  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);
    const switchButton = projectItemElement.querySelector("button:last-of-type");
    switchButton.addEventListener("click", this.updateProjectListsFunction.bind(this));
  }
}

class ProjectList {
  // property class
  projects = [];

  constructor(type, switchHandlerFunction) {
    this.type = type;
    this.switchHandlerFunction = switchHandlerFunction;
    const projectItems = document.querySelectorAll(`#${type}-projects li`);

    // looping to get each item in array
    for (const projectItem of projectItems) {
      console.log(type);
      console.log(projectItem);
      this.projects.push(new ProjectItem(projectItem.id, this.switchProject.bind(this)));
    }
  }

  setSwitchHandler(switchHandlerFunction) {
    this.switchHandlerFunction = switchHandlerFunction;
  }

  addProject() {
    console.log(this);
  }

  switchProject(projectId) {
    this.addProject();
    this.project = this.projects.find((i) => i.id === projectId);
    // this.switchHandlerFunction(this.projects.find((i) => i.id === projectId));
  }
}

class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");
    activeProjectList.setSwitchHandler(finishedProjectList.addProject.bind(finishedProjectList));
  }
}

App.init();
