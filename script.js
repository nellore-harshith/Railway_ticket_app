document.getElementById("reservationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let train = document.getElementById("train").value;
    let seats = document.getElementById("seats").value;

    let trainName = "";
    let destination = "";
    let price = 0;

    if (train == 1001) {
        trainName = "Red Lines Express";
        destination = "Boston to Manhattan";
        price = 5000;
    }

    else if (train == 1002) {
        trainName = "LA City Express";
        destination = "Boston to L.A";
        price = 4500;
    }

    else if (train == 1003) {
        trainName = "Iron City Express";
        destination = "Boston to Chicago";
        price = 4000;
    }

    else {
        document.getElementById("ticket").innerHTML = `
            <h2 style="color:red;">❌ Invalid Train Number</h2>
        `;
        return;
    }

    let total = price * seats;

    document.getElementById("ticket").innerHTML = `

        <h2>🎫 Ticket Confirmed</h2>

        <p><strong>Passenger Name:</strong> ${name}</p>

        <p><strong>Train Number:</strong> ${train}</p>

        <p><strong>Train Name:</strong> ${trainName}</p>

        <p><strong>Destination:</strong> ${destination}</p>

        <p><strong>Seats Booked:</strong> ${seats}</p>

        <p><strong>Total Charges:</strong> ₹${total}</p>

        <h3 style="color:lightgreen;">
            ✅ Reservation Successful
        </h3>
    `;
});