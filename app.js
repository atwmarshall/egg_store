document.getElementById("purchaseForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the number of eggs selected
    const eggCount = document.getElementById("eggCount").value;

    // Get the payment details based on the selected payment method
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    // Simple validation (to ensure all fields are filled)
    if (paymentMethod === "card") {
        const cardName = document.getElementById("cardName").value;
        const cardNumber = document.getElementById("cardNumber").value;
        const expiryDate = document.getElementById("expiryDate").value;
        const cvv = document.getElementById("cvv").value;

        if (!cardName || !cardNumber || !expiryDate || !cvv) {
            alert("Please fill in all the fields!");
            return;
        }
    }

    // Simulate redirect to the 'thank you' page
    window.location.href = "thankyou.html?eggs=" + eggCount;
});

// Toggle between payment methods (Card vs Bank Transfer)
function togglePaymentMethod() {
    const cardDetails = document.getElementById("cardDetails");
    const bankDetails = document.getElementById("bankDetails");

    if (document.getElementById("cardPayment").checked) {
        cardDetails.classList.remove("hidden");
        bankDetails.classList.add("hidden");
    } else {
        cardDetails.classList.add("hidden");
        bankDetails.classList.remove("hidden");
    }
}

// Open the popup
function openPopup(eggCount) {
    document.getElementById("popupMessage").textContent = `Thank you for your purchase, your account is now £0.50 * ${eggCount} lighter.`;
    document.getElementById("popup").style.display = 'block';
}

// Close the popup
function closePopup() {
    document.getElementById("popup").style.display = 'none';
}

// for the issue raising button
// Get references to the button and menu
const issueButton = document.getElementById("issueButton");
const issueMenu = document.getElementById("issueMenu");
const closeMenu = document.getElementById("closeMenu");

// Toggle the menu visibility when the button is clicked
issueButton.addEventListener("click", () => {
    issueMenu.classList.add("open");
});

// Close the menu when the close button is clicked
closeMenu.addEventListener("click", () => {
    issueMenu.classList.remove("open");
});

