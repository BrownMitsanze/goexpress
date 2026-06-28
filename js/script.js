// Booking Form Validation

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        let fullName = document.getElementById("fullname").value.trim();
        let destination = document.getElementById("destination").value.trim();
        let travelDate = document.getElementById("traveldate").value;
        let passengers = document.getElementById("passengers").value;

        if (fullName === "" || destination === "" || travelDate === "" || passengers === "") {

            alert("Please fill in all the booking details.");
            event.preventDefault();

        } else {

            alert("Booking submitted successfully!");

        }

    });

}


// Contact Form Validation

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please fill in all contact form fields.");
            event.preventDefault();

        } else {

            alert("Message sent successfully!");

        }

    });

}