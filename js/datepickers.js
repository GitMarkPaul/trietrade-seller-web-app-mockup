$(function() {

    // Initialize daterange picker
    $('.daterange-picker').daterangepicker({
        drops: 'up'
    });

    // Initialize date picker
    $('.datepicker').daterangepicker({
        drops: 'up',
        singleDatePicker: true,
        showDropdowns: true,
    });

  });