
                (function($) {

                    var viewChanger = (function(){

                    // Подключаем прослушку событий
                    function _setUpListners(){
                        $('.b-pager__form-select-item').on('click', _changeData);
                        $('.b-page__form-select-data').on('click', _openList);
                        $('.b-main-nav__list-item').on('click', _openSubmenuItem);
                    }

            
                    // изменение данных в блоке вывлда в зависимости от выбора элемента списка
                    function _changeData(e) {
                        
                        var target = $(this).text(),
                            list = $('.b-pager__form-select'),
                            viewData = $('.b-page__form-select-data');

                        viewData.text(target);
                        list.hide();

                    }

                     // вывод элементов списка в виде субменю

                     function _openList(e) {

                        
                        var list = $('.b-pager__form-select');

                        if (!list.is(":visible") ) {
                           list.show();
                        }
                        
                    }

                   // открытие и закрытие горизонтального субменю в случае его наличия
                    
                    function _openSubmenuItem (e){
                        e.preventDefault();

                        var menuItem = $(this),
                            subMenu = $('.b-main-nav-dropdown__list'),
                            menuLink = $('.b-main-nav__list-item-link');


                        $.each( menuLink, function( key, value ) {
                           $(this).removeClass( 'active' );
                        });

                        menuItem.children(menuLink).addClass('active');
                                                
                        if (!menuItem.children('.b-main-nav-dropdown__list').is(':visible')) {
                            menuItem.children('.b-main-nav-dropdown__list').show();

                        } else {
                            
                            menuItem.children('.b-main-nav-dropdown__list').hide();
                        } 
                    }

                    
                    // возвращаем модуль 
                    return {
                              init: function () {
                                   _setUpListners();
                                }
                            }

                        }());


                    // инициализация 
                    viewChanger.init();


                })(jQuery);
            