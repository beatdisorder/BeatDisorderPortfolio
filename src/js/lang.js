let langs = ['es', 'en'];
let langCode = '';
let defaultLangCode = 'es';
let langJS = null;
let userLangSelection = undefined;

var translate = function (jsdata)
{
	$("[tkey]").each (function (index)
	{
		let strTr = jsdata [$(this).attr ('tkey')];
	  $(this).html (strTr);
	});
}

function changeLanguaje(userLang)
{
	userLangSelection = userLang;
	$.getJSON('data/json/langs/lang.' + userLangSelection + '.json', translate);
}

function getSelectedLanguaje()
{
	return userLangSelection !== undefined ? userLangSelection : langCode.length > 0 ? langCode : defaultLangCode;
}

if (userLangSelection !== undefined)
	$.getJSON('data/json/langs/lang.' + userLangSelection + '.json', translate);
else if (langCode in langs)
	$.getJSON('data/json/langs/lang.' + langCode + '.json', translate);
else
	$.getJSON('data/json/langs/lang.' + defaultLangCode + '.json', translate);
