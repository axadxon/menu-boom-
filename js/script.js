$(document).ready(function () {
  var $click = $(".show");
  var $menu = $(".hide");
  var $section = $("section");
  var $success = $(".success");
  var $footer = $("footer");

  $click.click(function () {
    $menu.css({
      display: "block",
    });
    

    $section.css({
      display: "block",
    });

    $click.css({
      display: "none",
    });

  });

  $menu.click(function () {
    $click.css({
      display: "block",
    });

    $section.css({
      display: "none",
    });

    $menu.css({
      display: "none",
    });
    $footer.css({
        display: "none",
      });
  });

  $success.click(function () {
    $footer.css({
      display: "block",
    });
  });
});
