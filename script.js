const homeIcon = document.querySelector('.home_icon');
const pageIcons = document.querySelector('.page_icons');

homeIcon.addEventListener('click', () => {
    console.log("clicked");

  if (pageIcons.classList.contains('open')) {
    pageIcons.classList.remove('open')
    console.log("remove open");
  } else {
    pageIcons.classList.add('open');
    console.log("add open");

  }
});
