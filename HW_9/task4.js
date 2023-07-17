var checkboxCount = 0;
$('input[type="checkbox"]').on('change', function() {
    if (this.checked) {
      checkboxCount++;
      if (checkboxCount === 3) {
        $('input[type="checkbox"]').attr('disabled', '');
      }
    }
});