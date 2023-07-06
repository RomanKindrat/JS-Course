const circleElements = document.querySelectorAll('.circle');

circleElements.forEach(element => {
  let animValue = element.getAttribute('data-anim');
  element.classList.add(animValue);
});

