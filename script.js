const billAmount = document.getElementById("bill-amount");
const cashGiven = document.querySelector("#cash-given");
const changeButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".noOfNotes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

changeButton.addEventListener("click", ()=> {
    if(billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value) {
            const ReturnedMoney = cashGiven.value - billAmount.value;
            calculateNotes(ReturnedMoney);

        } else {
           showMessage("Do you wanna wash a plates?");
        }

    } else {
        showMessage("Invalid Bill Amount");
    }
});

function calculateNotes(ReturnedMoney) {
    for(let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(ReturnedMoney / availableNotes[i]);
        ReturnedMoney %= availableNotes[i];

        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showMessage(msg) {
     message.innerText = msg;
}
