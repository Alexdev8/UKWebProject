let ticket_form = document.forms["ticket-form"];
let date_input_div = document.getElementsByClassName("date-input-div")[0];

date_input_div.addEventListener("click", evt => {
    console.log(evt.target);
    if (evt.target !== ticket_form["ticket-start-date"] && ticket_form["ticket-start-date"].value === "") {
        open_picker();
    }
})

function open_picker() {
    ticket_form["ticket-start-date"].showPicker();
    ticket_form["ticket-start-date"].focus();
}

function enable_form_input() {
    if (ticket_form["ticket-start-date"].value !== "") {
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