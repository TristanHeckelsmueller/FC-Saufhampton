import $ from "jquery";

class Shop {
  constructor() {
    let product_info = $(".shop__product__info");
    let product = $(".shop__product");

    product.hover(function() {
      product_info.toggleClass("shop__product__info--visible");
    });
  }
}

export default Shop;
