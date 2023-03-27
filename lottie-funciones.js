



function makeResizable(element) {
	if (element && jQuery(element).length) {
		var $el = jQuery(element);
		var elHeight = $el.outerHeight();
		var elWidth = $el.outerWidth();

		var $wrapper = $el.parent();

		var starterData = {
			size: {
				width: $wrapper.width(),
				height: $wrapper.height()
			}
		}
		var scale = Math.min(
			starterData.size.width / $el.outerWidth(),
			starterData.size.height / $el.outerHeight()
		);
		if (scale > 1) {
			scale = 1;
		}
		var elMarginBottom = (scale * elHeight) - starterData.size.height;
		$el.css({
			transform: "translate3d(-50%, 0, 0) " + "scale(" + scale + ")",
			'margin-bottom': elMarginBottom
		});
	}
}
jQuery(document).ready(function () {
	makeResizable('#very-specific-design');
});
jQuery(window).load(function () {
	//	makeResizable('#very-specific-design');
});
jQuery(window).resize(function () {
	makeResizable('#very-specific-design');
});


function mostrarp(divNum) {
	document.getElementById("text1").classList.add("hide");
	document.getElementById("text2").classList.add("hide");
	document.getElementById("text3").classList.add("hide");
	document.getElementById("text4").classList.add("hide");
	document.getElementById("text5").classList.add("hide");
	document.getElementById("text6").classList.add("hide");
	document.getElementById("text7").classList.add("hide");


	// Show the specific div
	document.getElementById("text" + divNum).classList.remove("hide");
}

function quitar() {
	let negro = document.getElementById("negro");

	negro.classList.remove("negro");
	negro.classList.add("negro-move");
}

function cerrar() {
	document.getElementById("text1").classList.add("hide");
	document.getElementById("text2").classList.add("hide");
	document.getElementById("text3").classList.add("hide");
	document.getElementById("text4").classList.add("hide");
	document.getElementById("text5").classList.add("hide");
	document.getElementById("text6").classList.add("hide");
	document.getElementById("text7").classList.add("hide");
}

function mostrarsuborg(btnNun) {
	// Show the specific div
	document.getElementById("btn" + btnNun).classList.remove("hide");
}

/*function reproducirLottie(entrada,salida) {
	var miLottie = document.getElementById('miLottie');

var animacion = lottie.loadAnimation({
  container: miLottie,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'lottietest.json'
});

animacion.addEventListener('DOMLoaded', function() {
  animacion.goToAndStop(entrada, true);
  animacion.playSegments([entrada, salida], true);
});


}*/

var miLottie = document.getElementById('miLottie');
var animacion = null;
var animationState = false;

function reproducirAnimacion1() {
	var animacion = lottie.loadAnimation({
		container: miLottie,
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: 'lottietest.json'
	});

	animacion.addEventListener('DOMLoaded', function () {
		animacion.goToAndStop(10, true);
		animacion.playSegments([10, 50], true);
	});
}

function reproducirAnimacion2(entrada, salida) {
	var elem = document.getElementById("miLottie")
	elem.parentNode.removeChild(elem);
	// Crear un nuevo elemento div con una clase y un id
	var nuevoDiv = document.createElement('div');
	//nuevoDiv.className = 'mi-clase';
	nuevoDiv.id = 'miLottie';

	// Opcional: añadir contenido al div
	//nuevoDiv.textContent = '¡Hola, mundo!';

	// Agregar el nuevo div al documento
	document.body.appendChild(nuevoDiv);

	
	var animacion = lottie.loadAnimation({
		container: document.getElementById("miLottie"),
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: 'lottietest.json'
	});

	animacion.addEventListener('DOMLoaded', function () {
		animacion.goToAndStop(entrada, true);
		animacion.playSegments([entrada, salida], true);
	});
}



//document.getElementById('btn1').onclick = reproducirAnimacion1;
//document.getElementById('btn2').onclick = reproducirAnimacion2;