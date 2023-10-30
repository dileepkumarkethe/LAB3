document.getElementById('tip-form').addEventListener('input', function() {
    var billTotal = parseFloat(document.getElementById('bill-total').value);
    var tipRange = parseInt(document.getElementById('tip-range').value, 10);

    if (isNaN(billTotal) || billTotal < 0) {
        alert('Please enter a valid number for the bill total.');
        return;
    }

    document.getElementById('tip-percentage').value = tipRange + '%';

    var tipAmount = billTotal * (tipRange / 100);
    document.getElementById('tip-amount').value = tipAmount.toFixed(2);

    var totalWithTip = billTotal + tipAmount;
    document.getElementById('total-with-tip').value = totalWithTip.toFixed(2);
});
