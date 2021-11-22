// what we do
$(document).ready(function () {
    $(".design-icon").click(function () {
      $(".design-description").toggle();
      $(".design-icon").hide();
      $(".design, .design-description").click(function () {
        $(".design-icon").show();
        $(".design-description").hide();
      });
    });
    $(".development-icon").click(function () {
      $(".development-description").toggle();
      $(".development-icon").hide();
      $(".development, .development-description").click(function () {
        $(".development-description").hide();
        $(".development-icon").show();
      });
    });
    $(".product-icon").click(function () {
      $(".product-description").toggle();
      $(".product-icon").hide();
      $(".product, .product-description").click(function () {
        $(".product-icon").show();
        $(".product-description").hide();
      });
    });
  });
// what we do ends