const header = document.getElementsByTagName('header')[0];
header.style.backgroundColor = 'rgb(98, 196, 94)';

const sectionNoEmergencyTasks = document.querySelectorAll('.emergency-tasks');
for (let index = 0; index < sectionNoEmergencyTasks.length; index += 1) {
  sectionNoEmergencyTasks[index].style.backgroundColor = 'pink';
}

const sectionEmergencyTasks = document.querySelectorAll('.no-emergency-tasks');
for (let index = 0; index < sectionEmergencyTasks.length; index += 1) {
  sectionEmergencyTasks[index].style.backgroundColor = 'rgb(230, 230, 67)';
}

const titleEmergencyTasks = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < titleEmergencyTasks.length; index += 1) {
  titleEmergencyTasks[index].style.backgroundColor = 'blueviolet';
}

const titleNoEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < titleNoEmergencyTasks.length; index += 1) {
  titleNoEmergencyTasks[index].style.backgroundColor = 'black';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(23, 77, 23)';