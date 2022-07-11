document.addEventListener('DOMContentLoaded', () => {
    const $navItems = document.querySelector('.nav-scroller__items');
    const $navItemActive = $navItems.querySelector('.nav-scroller__item_active');
    if (!$navItemActive) {
      return;
    }  
    const navItemsRect = $navItems.getBoundingClientRect();
    const navItemActiveRect = $navItemActive.getBoundingClientRect();
    const navItemsLeft = navItemActiveRect.left - navItemsRect.left + (navItemActiveRect.width - navItemsRect.width) / 2;
    $navItems.scrollLeft = navItemsLeft;
  });

  var bigsize = "300"; //Размер большой картинки
var smallsize = "170"; //Размер маленькой картинки
function changeSizeImage(im) {
  if(im.height == bigsize) im.height = smallsize;
  else im.height = bigsize;
}