const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Parte 1
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const ulDays = document.getElementById('days');
for (let index = 0; index < decemberDaysList.length; index += 1) {
  let day = decemberDaysList[index];
  let liDay = document.createElement('li');
  liDay.innerHTML = day;
  liDay.className = 'day';
  if (day === 24 || day === 25 || day === 31) {
    liDay.classList.add('holiday');
  }
  if (day === 4 || day === 11 || day === 18 || day === 25) {
    liDay.classList.add('friday');
  }
  ulDays.appendChild(liDay);
}

// Parte 2
const buttonsContainer = document.getElementsByClassName('buttons-container');

const holidayButtonCreator = (string) => {
  const holidays = document.createElement('button');
  holidays.id = 'btn-holiday';
  holidays.innerHTML = string;
  buttonsContainer[0].appendChild(holidays);
}

holidayButtonCreator("Feriados");

// Parte 3
const holidayButton = document.getElementById('btn-holiday');

holidayButton.addEventListener('click', () => {
  const holidayList = document.getElementsByClassName('holiday');
  for (let index = 0; index < holidayList.length; index += 1) {
    if(holidayList[index].style.backgroundColor === 'green') {
      holidayList[index].style.backgroundColor = 'unset';
      holidayList[index].style.color = '#777';
    } else {
      holidayList[index].style.backgroundColor = 'green';
      holidayList[index].style.color = 'white';
    }
  }
})

// Parte 4
const fridayButtonCreator = (string) => {
  const fridays = document.createElement('button');
  fridays.id = 'btn-friday';
  fridays.innerHTML = string;
  buttonsContainer[0].appendChild(fridays);
}

fridayButtonCreator("Sexta-Feira");