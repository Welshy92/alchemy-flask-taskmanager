document.addEventListener('DOMContentLoaded', function() {
    // Sidenav initialisation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // Datepicker initialisation
    let datepicker = document.querySelectorAll(".datepicker");
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
    });

    // Option initialisation
    let selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);

    // Collapsible initialisation
    var collapse = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapse);
});