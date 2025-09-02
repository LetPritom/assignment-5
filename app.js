// first logic

const hearts = document.querySelectorAll(`.love`);
const para = document.getElementsByClassName(`nav-para`);
// const coin = document.getElementsByClassName(`taka`);
const increase = document.getElementById(`gain`);
let count = 0;
const coin = document.querySelector(`.taka`);
let decrease = coin.innerText;
const callButton = document.querySelectorAll(`.btn button:last-child`);
const addHistoryContainer = document.querySelector(`.add-history`);
const resetBtn = document.querySelector(`.history-title button`);

// first logic

for (const heart of hearts) {
  heart.addEventListener(`click`, function () {
    count++;
    increase.innerText = count;
  });
}

// second logic call button function

for (const btn of callButton) {
  btn.addEventListener(`click`, function () {
    const cart = btn.closest(`.icon`);
    const service = cart.querySelector(`h2`).innerText;
    const emergencyNum = cart.querySelector(`.number`).innerText;
    if (decrease >= 20) {
      alert(`calling ${service} at ${emergencyNum}`);
      decrease = decrease - 20;
      coin.innerText = decrease;

      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const time = `${hours}:${minutes}:${seconds}`;
      const entry = document.createElement(`div`);
      entry.classList.add(
        "history-entry",
        "flex",
        "justify-between",
        "mt-2",
        "p-2",
        "bg-gray-100",
        "rounded-xl"
      );
      entry.innerHTML = `
         <div class="flex flex-col">
           <div class="service text-sm">${service}</div>
           <div class="number text-gray-700">${emergencyNum}</div>
         </div>
         <div class="time text-gray-500">${time}</div>`;
         addHistoryContainer.prepend(entry);
    } else {
      alert(
        `You Do not have sufficient balance if you will call again you need to must be 20 coin `
      );
    }
  });
}

resetBtn.addEventListener (`click`, function () {
    addHistoryContainer.innerText = ``;
})
