import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

import './test';

import slick from "slick-carousel";

$(document).foundation();


let sliderChoise = $('.ba-slider-choise');

sliderChoise.slick({
	rows: 2,
	slidesPerRow: 2,
	dots: true,
	autoplay: true,
	autoplaySpeed: 1500,

	arrows: false,
	responsive: [
		{
			breakpoint: 1080,
			settings: {
				rows: 1,
				slidesPerRow: 2
			}
		},
		{
			breakpoint: 640,
			settings: {
				rows: 1,
				slidesPerRow: 1,
				dots: false,
				arrows: true,
				prevArrow: '[data-prev]',
				nextArrow: '[data-next]',
			}
		}

	]
})

let sliderSpec = $('.ba-slider-spec');

sliderSpec.slick({
	rows: 2,
	slidesPerRow: 2,
	dots: true,
	autoplay: true,
	autoplaySpeed: 1500,
	arrows: false,
	responsive: [
		{
			breakpoint: 1080,
			settings: {
				rows: 1,
				slidesPerRow: 2
			}
		},
		{
			breakpoint: 640,
			settings: {
				rows: 1,
				slidesPerRow: 1,
				dots: false,
				arrows: true,
				prevArrow: '[data-spec-prev]',
				nextArrow: '[data-spec-next]',
			}
		}

	]
})
// import Vue from 'vue';

// import App from './App.vue';
// Vue.config.productionTip = false

// new Vue({
// 	el: '#test',
// 	template: '<App/>',
// 	components: {App}
// })