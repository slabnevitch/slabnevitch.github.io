var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
	
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    var myMap = new ymaps.Map("contacts", {
        center: [50.097366, 14.406597],
        zoom: 15
    }),
    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [50.097366, 14.406597]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Метка',
                balloonContent: 'Меня можно перемещать'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'twirl#redStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),

        // Создаем метку с помощью вспомогательного класса.
        myPlacemark1 = new ymaps.Placemark([50.097366, 14.406597], {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            iconContent: '1',
            balloonContent: 'Балун',
            hintContent: 'Стандартный значок метки'
        }, {
            // Опции.
            // Стандартная фиолетовая иконка.
            preset: 'twirl#violetIcon'
        }),

        myPlacemark2 = new ymaps.Placemark([50.097366, 14.406597], {
            // Свойства.
            hintContent: 'Собственный значок метки'
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: 'praga-img/contacts_metka.png',
            // Размеры метки.
            iconImageSize: [436, 203],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-218, -203]
        });

    // Добавляем все метки на карту.
    myMap.geoObjects
         //.add(myPlacemark1)
        .add(myPlacemark2)
        //.add(myGeoObject);
		 myMap.controls
        // Кнопка изменения масштаба.
        .add('zoomControl', { left: 5, top: 100 })
        // Список типов карты
        .add('typeSelector', { right: 5, top: 100})
        // Стандартный набор кнопок
        .add('mapTools', { left: 35, top: 5 });

    // Также в метод add можно передать экземпляр класса элемента управления.
    // Например, панель управления пробками.
    var trafficControl = new ymaps.control.TrafficControl();
    myMap.controls
        .add(trafficControl)
        // В конструкторе элемента управления можно задавать расширенные
        // параметры, например, тип карты в обзорной карте.
        .add(new ymaps.control.MiniMap({
            type: 'yandex#publicMap'
        }));

}