document.getElementById("purchaseForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the number of eggs selected
    const eggCount = document.getElementById("eggCount").value;

    // Get the card details (for form autofill)
    const cardName = document.getElementById("cardName").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    // Simple validation (to ensure all fields are filled)
    if (!cardName || !cardNumber || !expiryDate || !cvv) {
        alert("Please fill in all the fields!");
        return;
    }

    // Simulate redirect to the 'thank you' page
    window.location.href = "thankyou.html?eggs=" + eggCount;
});

// Open the popup
function openPopup(eggCount) {
    document.getElementById("popupMessage").textContent = `Thank you for your purchase, your account is now £0.50 * ${eggCount} lighter.`;
    document.getElementById("popup").style.display = 'block';
}

// Close the popup
function closePopup() {
    document.getElementById("popup").style.display = 'none';
}