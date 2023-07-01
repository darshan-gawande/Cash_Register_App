const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const changeButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".noOfNotes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

changeButton.addEventListener("click", ()=> {
    hideMessage();
    if(billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value) {
            const ReturnedMoney = cashGiven.value - billAmount.value;
            calculateNotes(ReturnedMoney);

        } else {
           showErrorMessage("Do you wanna wash a plates?");
        }
    } else {
        showErrorMessage("Invalid Bill Amount");
    }
});

function calculateNotes(ReturnedMoney) {
    for(let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(ReturnedMoney / availableNotes[i]);
        ReturnedMoney %= availableNotes[i];

        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showErrorMessage(msg) {
    message.style.display = "block";
     message.innerText = msg;
}

function hideMessage() {
    message.style.display = "none";
}
