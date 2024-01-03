let balance = 0;
function checkBalance(){
    alert("Your Balance is :" + balance);

}

function deposit(){
    const amount = Number(prompt("enter the amount ou want"));
    if(!isNaN(amount) && amount > 0){
        balance += amount;
        alert("Deposit of " + amount + "successfull. Your new balance is " + balance);
    }
    else{
        alert("invalid amount for deposit");
    }
}

function withdraw(){
    const amount = Number(prompt('enter the amount you  wanna withdraw'));
    if(!isNaN(amount) && amount > 0){
        balance -= amount;
        alert("withdraw of" + amount + "successful. your new bal is " + balance );
    }
}

/* let balance = 0;

function checkBalance() {
    alert(Your balance is $${balance});
}

function deposit() {
    const amount = parseFloat(prompt("Enter the amount to deposit:"));

    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        alert(Deposit of $${amount} successful. Your new balance is $${balance});
    } else {
        alert("Invalid amount for deposit.");
    }
}

function withdraw() {
    const amount = parseFloat(prompt("Enter the amount to withdraw:"));

    if (!isNaN(amount) && amount > 0) {
        if (amount <= balance) {
            balance -= amount;
            alert(Withdrawal of $${amount} successful. Your new balance is $${balance});
        } else {
            alert("Insufficient balance for withdrawal.");
        }
    } else {
        alert("Invalid amount for withdrawal.");
    }
}
[3:39 pm, 12/12/2023] Linda She: <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank System</title>
</head>
<body>
    <div class="bank">
        <div class="head">Bank System</div>
        <button onclick="checkBalance()" class="balance">Balance</button>
        <button onclick="deposit()" class="Deposit">Deposit</button>
        <button onclick="withdraw()" class="Withdraw">Withdraw</button>
    </div>
    <script src="script.js"></script>
</body>
</html> */