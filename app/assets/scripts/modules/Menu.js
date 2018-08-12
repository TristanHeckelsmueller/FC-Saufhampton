import $ from "jquery";

class Menu {
  constructor() {
    let sidebar = $(".sidebar");
    let sidebar_menu = $(".sidebar__menu");
    let hamburger = $(".hamburger");

    hamburger.click(function() {
      sidebar.toggleClass("sidebar--open");
      sidebar_menu.toggleClass("sidebar__menu--visible");
    });
  }
}

export default Menu;
