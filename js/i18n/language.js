var LANGUAGE_CODE = "en_US"; //标识语言
function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'strings', // 资源文件名称
		path: 'js/i18n/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function () { // 回调方法    
			$('#lang').text($.i18n.prop('string_lang'));
			$('#about').text($.i18n.prop('string_about'));
			$('#news').text($.i18n.prop('string_news'));
			$('.projects').text($.i18n.prop('string_projects'));
			$('.video').text($.i18n.prop('string_video'));
			$('.contact_us').text($.i18n.prop('string_contact_us'));
			$('.awards').text($.i18n.prop('string_awards'));
			$('.wechat').text($.i18n.prop('string_wechat'));
		}
	});
}

function switchLang() {
	LANGUAGE_CODE = LANGUAGE_CODE == 'zh_CN' ? 'en_US' : 'zh_CN';
	loadProperties(LANGUAGE_CODE);
}
// 
// $(document).ready(function () {
// 	LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({}); //获取浏览器的语言     
// 	loadProperties(LANGUAGE_CODE);
// })