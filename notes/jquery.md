# jQuery

jQuery is deprecated so this is for archival purposes only

## Contents

```js
// input element
$(element).val()

// set value on element
$(document).ready( function() {
    $('#datePicker').val(new Date().toDateInputValue());
});​

// css get value
$(..).attr('width')

// css set value
$(..).attr('width','value')

// css set class
ADDCLASS("FAILEDCLASS")
```

jQuery.serialize produces application/x-www-form-urlencoded data (the standard encoding for HTML form submissions) from a jQuery object containing an HTML Form Element or a set of form controls.

```js
('myForm').serialize()
```