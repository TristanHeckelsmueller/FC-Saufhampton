import $ from "jquery";

class Menu {
  constructor() {
    let sidebar = $(".sidebar");
    let sidebar_menu = $(".sidebar__menu");
    console.log("Sidebar");

    sidebar.click(function() {
      sidebar.toggleClass("sidebar--open");
      sidebar_menu.toggleClass("sidebar__menu--visible");
    });
  }
}

export default Menu;
