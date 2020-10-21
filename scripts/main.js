$(document).ready(function (e) {
    $('.has-sub').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('tap');
    });

    var $filter = $("ul.catalog__filter"), // кэшируем в переменную меню
        $linksFilter = $filter.find("li"); // кэшируем в переменную ссылки

    $linksFilter.on("click", function(e) {
        e.preventDefault();
        $linksFilter.children('a').removeClass("active"); // убираем класс у всех пунктов
        $(this).children('a').addClass("active"); // добавляем к пункту, содержащему нажатую ссылку
    });

    var $menuCatalog = $("ul.catalog__ul"), // кэшируем в переменную меню
        $linksCatalog = $menuCatalog.find("li"); // кэшируем в переменную ссылки

    $linksCatalog.on("click", function(e) {
        e.preventDefault();
        $linksCatalog.children('a').removeClass("active"); // убираем класс у всех пунктов
        $(this).children('a').addClass("active"); // добавляем к пункту, содержащему нажатую ссылку
    });



    var $menuPagination = $(".pagination__list"), // кэшируем в переменную меню
        $linksPagination = $menuPagination.find("li"); // кэшируем в переменную ссылки

    $linksPagination.on("click", function(e) {
        e.preventDefault();
        $linksPagination.children('a').removeClass("active"); // убираем класс у всех пунктов
        $(this).children('a').addClass("active"); // добавляем к пункту, содержащему нажатую ссылку
    });

    


});