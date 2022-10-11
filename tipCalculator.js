function calculate() {
    var inputBill = document.querySelectorAll(".form-control")[0];
    var valueBill = Number(inputBill.value);
    var inputTip = document.querySelectorAll(".form-control")[1];
    var percTip = Number(inputTip.value);

    percTip = percTip / 100;

    var totalTip = document.getElementById("totalTip");
    var totalTip2 = percTip * valueBill;
    totalTip.innerText = "Total tip: $" + totalTip2.toFixed(2);

    var totalBill = document.getElementById("totalBill");
    var totalBill2 = valueBill + totalTip2;
    totalBill.innerText = "Total bill with tip: $" + totalBill2.toFixed(2);

}