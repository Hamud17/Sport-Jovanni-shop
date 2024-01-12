const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon')
const nav = document.querySelector('.header_top_row')

navBtn.onclick = function(){
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile')
    document.body.classList.toggle('no-scroll');
}

mask('[data-tel-input]');

// удаляем + еслтии остальное пусто

const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input)=>{
    input.addEventListener('input', ()=>{
        if(input.value == '+') input.value = '';
    })
    input.addEventListener('blur', ()=>{
        if(input.value=='+') input.value =''
    })
        
});


/* Yandex Map */

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
	// Создание карты.
	var map = new ymaps.Map('map', {
		center: [41.008251, 28.959196],

		zoom: 16,
	});

	var myPlacemark = new ymaps.Placemark(
		[41.008251, 28.959196],
		{
			balloonContent: `
				<div class="balloon">
					<div class="balloon__address">Mimar Kemalettin Mah 
					Mesihpaşa cad /NO 83 Fatih İstanbul</div>
					<div class="balloon__contacts">
						<a href="tel:+90000000">+90 000000</a>
					</div>
				</div>
			`,
		},
		{
			iconLayout: 'default#image',
			iconImageHref: './img/location-pin.svg',
			iconImageSize: [40, 40],
			iconImageOffset: [-20, -40],
		}
	);

	map.controls.remove('geolocationControl'); 
	map.controls.remove('searchControl'); 
	map.controls.remove('trafficControl'); 
	map.controls.remove('typeSelector'); 


	map.controls.remove('rulerControl');
	map.behaviors.disable(['scrollZoom']); 

	map.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();

} 


