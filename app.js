const year = document.querySelector('#year');
const day = document.querySelector('#day');
const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');
const container = document.querySelector('.container')

console.log(year.textContent);


 const minValue = new Date().getTime();
 const randomYear = Math.floor(Math.random() * (3.784e+12 - minValue + 1) + minValue);

 const coundownTo = new Date(randomYear).getTime();

 var coundownFunc = setInterval(() => {
     const currentTime = new Date().getTime();
     const diff = coundownTo - currentTime;

     
     var years = Math.floor(diff / (1000*60*60*24*365));
     var days = Math.floor((diff % (1000*60*60*24*365)) / (1000*60*60*24));
     var hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
     var minute = Math.floor((diff % (1000*60*60)) / (1000*60));
     var seconds = Math.floor((diff % (1000*60)) / (1000));

    //adding zero
        if (seconds < 10) {seconds = '0'+seconds};
        if (minute < 10) {minute = '0'+minute};
        if (hours < 10) {hours = '0'+hours};
        if (days < 10) {days = '0'+days};
        if (years < 10) { years = '0'+years; year.classList.add('red');};
    //adding red color
        if (years == 0) {year.classList.add('red'); day.classList.add('red')};
        if (days == 0)  {day.classList.add('red');  hour.classList.add('red')};
        if (hours == 0) {hour.classList.add('red'); min.classList.add('red')};
        if (minute == 0) {min.classList.add('red'); sec.classList.add('red')};
        

     if (diff < 0) {
         clearInterval(coundownFunc);
         container.classList.add('red');
         year.innerHTML = `00<span class="small">YRS</span>`;
         day.innerHTML = '00<span class="small">YRS</span>';
         hour.innerHTML = '00<span class="small">YRS</span>';
         min.innerHTML = '00<span class="small">YRS</span>';
         sec.innerHTML = '00<span class="small">YRS</span>';
     } else {
        year.innerHTML = `${years}<span class="small">YRS</span>`;
        day.innerHTML = `${days}<span class="small">DAY</span>`;
        hour.innerHTML = `${hours}<span class="small">HRS</span>`;
        min.innerHTML = `${minute}<span class="small">MIN</span>`;
        sec.innerHTML = `${seconds}<span class="small">SEC</span>`;
     }

     console.log(years , days , hours , minute , seconds);

   


 }, 1000);


