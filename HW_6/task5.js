const circleElements = document.querySelectorAll('.circle');

circleElements.forEach(element => {
  let animValue = element.getAttribute('data-anim');
  element.classList.add(animValue);
});

circleElements.forEach(element => {
  let animValue = element.getAttribute('data-anim');
  if (element.classList.contains(animValue)) {
    console.log('Animation applied to element with data-anim="' + animValue + '"');
  } else {
    console.log('No animation applied to element with data-anim="' + animValue + '"');
  }
});
