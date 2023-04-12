let order_form = document.forms["order-form"];
let ticket_type_selection = document.getElementsByClassName("ticket-type-selection")[0];
let ticket_booking = document.getElementById("ticket-booking");
let hotel_reservation = document.getElementById("hotel-reservation");
let restaurant_reservation = document.getElementById("restaurant-reservation");

let date_input_div = document.getElementsByClassName("date-input-div")[0];
let start_date_input_div = document.getElementById("start-date-input-div");
let end_date_input_div = document.getElementById("end-date-input-div");

const today = new Date();
const max_reservation_date = addYears(new Date(), 2);
let ticket_type;

function select_ticket_type(type) {
    document.querySelector("body").style.overflow = 'hidden';
    ticket_type = type;
    ticket_type_selection.style.height = '0';
    ticket_type_selection.style.opacity = '0';
    ticket_type_selection.style.transform = "translateY(-200%)";
    ticket_booking.style.display = "block";
    setTimeout(function () {
        ticket_type_selection.style.display = "none";
        ticket_booking.classList.toggle("hidden", false);
    }, 400);
    switch (type) {
        case "dated-ticket":
            break;
        case "special-ticket":
            break;
        default:
            break;
    }
}

init_start_date_input();

date_input_div.addEventListener("click", evt => {
    if (evt.target !== order_form["reservation-start-date"] && order_form["reservation-start-date"].value === "") {
        open_picker();
        return;
    }
    if (evt.target === start_date_input_div && !order_form["reservation-start-date"].hasFocus) {
        order_form["reservation-start-date"].focus();
        return;
    }
    if (evt.target === end_date_input_div && !order_form["reservation-end-date"].hasFocus) {
        order_form["reservation-end-date"].focus();
        return;
    }
})

function open_picker() {
    order_form["reservation-start-date"].showPicker();
    order_form["reservation-start-date"].focus();
}

function addYears(date, years) {
    date.setFullYear(date.getFullYear() + years);
    return date;
}

function init_start_date_input() {
    order_form["reservation-start-date"].min = today.toLocaleDateString('fr-ca');
    order_form["reservation-start-date"].max = max_reservation_date.toLocaleDateString('fr-ca');
}

function init_end_date_input() {
    order_form["reservation-end-date"].min = order_form["reservation-start-date"].value;
    order_form["reservation-end-date"].max = max_reservation_date.toLocaleDateString('fr-ca');
}

function enable_form_input() {
    if (order_form["reservation-start-date"].value !== "") {
        init_end_date_input();
        order_form["reservation-end-date"].disabled = false;
        order_form["reservation-end-date"].focus();
        order_form["reservation-end-date"].showPicker();
    }
    else {
        disable_form_input();
    }
}

function disable_form_input() {
    order_form["reservation-end-date"].value = "";
    order_form["reservation-end-date"].disabled = true;
}