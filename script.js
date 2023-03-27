



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
	document.getElementById("text8").classList.add("hide");
	document.getElementById("text9").classList.add("hide");
	document.getElementById("text10").classList.add("hide");


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
	document.getElementById("text8").classList.add("hide");
	document.getElementById("text9").classList.add("hide");
	document.getElementById("text10").classList.add("hide");
	document.getElementById("text11").classList.add("hide");
}

function mostrarsuborg(btnNun) {
	// Show the specific div
	document.getElementById("btn" + btnNun).classList.remove("hide");
}