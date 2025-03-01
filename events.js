// navbar theme change event 
document.getElementById('theme-change-img').addEventListener('click', function(){
    let randomColor = '#' + Math.floor(Math.random()*1000000).toString();
    document.body.style.backgroundColor = randomColor;
})

