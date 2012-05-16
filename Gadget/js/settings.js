System.Gadget.onSettingsClosing = SettingsClosing;
function settingsClosing(event)
{if (event.closeAction == event.Action.commit){}event.cancel = false;}
function LoadSetting()
{
document.all.realm[System.Gadget.Settings.read("realm")].checked = 'true';
document.getElementById('statTime').value = System.Gadget.Settings.read('statInt');
document.getElementById('pingTime').value = System.Gadget.Settings.read('pingInt');
document.getElementById('showPing').checked = System.Gadget.Settings.read('showPing');
document.getElementById('newVer').checked = System.Gadget.Settings.read('newVer');
document.getElementById('voteTopf').checked = System.Gadget.Settings.read('vts');
document.getElementById('crashNotify').checked = System.Gadget.Settings.read('crashNotify');
document.getElementById('PathWowText').value = System.Gadget.Settings.read('PathWow');
}function saveRealm(number){System.Gadget.Settings.write("realm",document.all.realm[number].value);}function withoutCyr(input){var value = input.value;var re = /[^\d,]/g;if (re.test(value)){value = value.replace(re, '');input.value = value;}}function saveStatTime(){System.Gadget.Settings.write('statInt', document.getElementById('statTime').value);}function savePingTime(){System.Gadget.Settings.write('pingInt', document.getElementById('pingTime').value);}function saveShowPing(){System.Gadget.Settings.write('showPing', document.getElementById('showPing').checked);}function newVer(){	System.Gadget.Settings.write('newVer', document.getElementById('newVer').checked);}function voteTopsf(){System.Gadget.Settings.write('vts', document.getElementById('voteTopf').checked);}function crashNotify(){System.Gadget.Settings.write('crashNotify', document.getElementById('crashNotify').checked);}
function ShowHide(elem)
{	
	document.getElementById(elem).style.display='block';
	if  (pre!=elem)
	{
		document.getElementById(window.pre).style.display='none';
		pre = elem;
	}
}
function PathWow()
{	
	document.getElementById('PathWowText').value="";
	str = ""+document.getElementById('PathWow').value;
	len = str.length;
	lenS = len - 7;
	sub = str.substr(lenS,len);
	if (sub != "Wow.exe")
	{
		document.getElementById('PathWowText').value="Неверные данные!"
	}
	else
	{
		System.Gadget.Settings.write('PathWow', document.getElementById('PathWow').value);
		document.getElementById('PathWowText').value = System.Gadget.Settings.read('PathWow');
	}
}
function PathLwcc()
{	
	document.getElementById('PathLwccText').value="";
	str = ""+document.getElementById('PathLwcc').value;
	len = str.length;
	lenS = len - 8;
	sub = str.substr(lenS,len);
	if (sub != "LWCC.exe")
	{
		document.getElementById('PathLwccText').value="Неверные данные!"
	}
	else
	{
		System.Gadget.Settings.write('PathLwcc', document.getElementById('PathLwcc').value);
		document.getElementById('PathLwccText').value = System.Gadget.Settings.read('PathLwcc');
	}
}