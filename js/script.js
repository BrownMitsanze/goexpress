// Booking Form Validation

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    let fullName = document.getElementById("fullname").value.trim();
    let destination = document.getElementById("destination").value.trim();
    let travelDate = document.getElementById("traveldate").value;
    let passengers = document.getElementById("passengers").value;

    if(fullName === "" || destination === "" || travelDate === "" || passengers === ""){
        alert("Please fill in all the booking details.");
        event.preventDefault();
    }
    else{
        alert("Booking submitted successfully!");
    }

});