let ticket_form = document.forms["ticket-form"];
let date_input_div = document.getElementsByClassName("date-input-div")[0];
let start_date_input_div = document.getElementById("start-date-input-div");
let end_date_input_div = document.getElementById("end-date-input-div");

const today = new Date();
const max_reservation_date = addYears(new Date(), 2);

ticket_form["ticket-start-date"].min = today.toLocaleDateString('fr-ca');
ticket_form["ticket-start-date"].max = max_reservation_date.toLocaleDateString('fr-ca');

date_input_div.addEventListener("click", evt => {
    if (evt.target !== ticket_form["ticket-start-date"] && ticket_form["ticket-start-date"].value === "") {
        open_picker();
        return;
    }
    if (evt.target === start_date_input_div && !ticket_form["ticket-start-date"].hasFocus) {
        ticket_form["ticket-start-date"].focus();
        return;
    }
    if (evt.target === end_date_input_div && !ticket_form["ticket-end-date"].hasFocus) {
        ticket_form["ticket-end-date"].focus();
        return;
    }
})

function open_picker() {
    ticket_form["ticket-start-date"].showPicker();
    ticket_form["ticket-start-date"].focus();
}

function addYears(date, years) {
    date.setFullYear(date.getFullYear() + years);
    return date;
}

function init_end_date_input() {
    ticket_form["ticket-end-date"].min = ticket_form["ticket-start-date"].value;
    ticket_form["ticket-end-date"].max = max_reservation_date.toLocaleDateString('fr-ca');
}

function enable_form_input() {
    if (ticket_form["ticket-start-date"].value !== "") {
        init_end_date_input();
        ticket_form["ticket-end-date"].disabled = false;
        ticket_form["ticket-end-date"].focus();
        ticket_form["ticket-end-date"].showPicker();
    }
    else {
        disable_form_input();
    }
}

function disable_form_input() {
    ticket_form["ticket-end-date"].value = "";
    ticket_form["ticket-end-date"].disabled = true;
}

console.log("order_script");