var colorElements = document.querySelectorAll('.color');

var priceElement = document.getElementById('outprice');

var shoeImage = document.querySelectorAll('.shoe');


colorElements.forEach(element => {
  element.addEventListener('click', function() {
    var price = element.getAttribute('data-price');
    colorElements.forEach(function(item) {
      item.classList.remove('active');
    });
    element.classList.add('active');
    
    priceElement.textContent = price;

    shoeImage.forEach(elem => 
        {
            let col1 = elem.getAttribute('color');
            let col2 = element.getAttribute('color');
            if(col1 == col2)
                elem.classList.add("show");
            else
                elem.classList.remove('show');
        });
  });
});
