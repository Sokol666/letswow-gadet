System.Gadget.onSettingsClosing = SettingsClosing;
function settingsClosing(event)//сохранение
{
	if (event.closeAction == event.Action.commit)
	{
	}
   	event.cancel = false;
}
function LoadSetting()//загрузка стр настроек
{
	document.all.realm[System.Gadget.Settings.read("realm")].checked = 'true'; // выбор реалма
	document.getElementById('statTime').value = System.Gadget.Settings.read('statInt'); //время обновления статистики
	document.getElementById('pingTime').value = System.Gadget.Settings.read('pingInt'); //время обновления пинга
	document.getElementById('showPing').checked = System.Gadget.Settings.read('showPing'); // отображать пинг
	document.getElementById('newVer').checked = System.Gadget.Settings.read('newVer'); //уведомлять о новых версиях
	document.getElementById('voteTopf').checked = System.Gadget.Settings.read('vts');//голосование
	document.getElementById('crashNotify').checked = System.Gadget.Settings.read('crashNotify');//уведомлять о крашах
}
function saveRealm(number)
{
	System.Gadget.Settings.write("realm",document.all.realm[number].value);
}
function withoutCyr(input)// защита от ввода букв, символов
{
	var value = input.value;
	var re = /[^\d,]/g;
    if (re.test(value)) 
	{
		value = value.replace(re, '');
        input.value = value;
    }
}
function saveStatTime()
{
System.Gadget.Settings.write('statInt', document.getElementById('statTime').value);
}
function savePingTime()
{
System.Gadget.Settings.write('pingInt', document.getElementById('pingTime').value);
}
function saveShowPing()
{
	System.Gadget.Settings.write('showPing', document.getElementById('showPing').checked);
}
function newVer()
{
	System.Gadget.Settings.write('newVer', document.getElementById('newVer').checked);
}
function voteTopsf()
{
	System.Gadget.Settings.write('vts', document.getElementById('voteTopf').checked);
}
function crashNotify()
{
	System.Gadget.Settings.write('crashNotify', document.getElementById('crashNotify').checked);
}