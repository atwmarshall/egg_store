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

// Add copy functionality for all copy buttons
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-copy-target'); // Get target element ID
        const textToCopy = document.getElementById(targetId).innerText;

        // Copy text to clipboard
        navigator.clipboard.writeText(textToCopy).then(() => {
            // alert('Copied: ' + textToCopy);
        }).catch(err => {
            alert('Failed to copy text: ' + err);
        });
    });
});


// Handle Take a Photo button click
document.getElementById('takePhotoButton').addEventListener('click', function () {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'camera'; // Allows the user to take a photo (on supported devices)

    input.onchange = function (event) {
        const file = event.target.files[0];
        if (file) {
            // Preview the image
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('photoPreview').src = e.target.result;
                document.getElementById('photoPreviewContainer').classList.remove('hidden');
            };
            reader.readAsDataURL(file);
        }
    };

    input.click(); // Open the camera interface for the user
});

// Handle Upload a Photo button click
document.getElementById('uploadPhotoButton').addEventListener('click', function () {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = function (event) {
        const file = event.target.files[0];
        if (file) {
            // Preview the image
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('photoPreview').src = e.target.result;
                document.getElementById('photoPreviewContainer').classList.remove('hidden');
            };
            reader.readAsDataURL(file);
        }
    };

    input.click(); // Open the file selector
});

// Placeholder for code to save the photo if needed (e.g., uploading to a server)
/*
function savePhoto(photoData) {
    // Code to save the photo, e.g., upload to a server or cloud storage
    // This could use Fetch API or XMLHttpRequest to send the data to a backend.
}
*/
