// navbar theme change event 
document.getElementById('theme-change-img').addEventListener('click', function(){
    let randomColor = '#' + Math.floor(Math.random()*1000000).toString();
    document.getElementById('html').style.backgroundColor = randomColor;
})

// current date
const newDate = new Date();
const currentDate = newDate.toDateString().split(' ');
const dayName = currentDate[0];
document.getElementById('day-name').innerText = dayName + ',';
const showDate = currentDate[1] + ' ' + currentDate[2] + ' ' +  currentDate[3]
document.getElementById('current-date').innerText = showDate;


// go to blog.html
document.getElementById('goToBlog').addEventListener('click', function(){
    window.location.href = 'blog.html'
})