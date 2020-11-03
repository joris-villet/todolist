window.addEventListener('DOMContentLoaded', () => {

  console.log('main.js chargé');

  function init(){
    dateOfTheDay();
  }

  function dateOfTheDay(){
    const displayDate = document.querySelector('.displayDate')
    let date = new Date();
    let day = date.getDay() + 1;
    if (day.toString().length === 1) {
     day = '0' + day;
    } 
      
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let hour = date.getHours();
    if (hour.toString().length === 1) {
      hour = '0' + hour
     } 

    let minutes = date.getMinutes();
    if (minutes.toString().length === 1) {
      minutes = '0' + minutes.toString();
     } 

    let secondes = date.getSeconds();
    if (secondes.toString().length === 1) {
      secondes = '0' + secondes.toString();
    } 
    

    setInterval(() => {
      
      if (secondes === 60) {
        secondes = 0;
        minutes = minutes + 1;
      }
      
      if (minutes === 60) {
        minutes = 0;
        hour += 1;
      }
      
      if (hour === 24) {
        hour = 00;
        minutes = 0;
        secondes = 0;
      }
      const txt = `Nous sommes le ${day}/${month}/${year} il est ${hour}h${minutes}:${secondes++}`;

      displayDate.textContent = txt;
    }, 1000);
  }

  init();

});