// first logic

const hearts = document.querySelectorAll(`.love`);
const para = document.getElementsByClassName(`nav-para`);
const coin = document.getElementsByClassName(`taka`);
const increase = document.getElementById(`gain`);
let count = 0 ;

// first logic

for (const heart of hearts) {
    heart.addEventListener(`click`, function () {
        count++ ;
        increase.innerText = count ;
    })
}