version='2.0.4';
maxping = 0;
fakeString='{"1":{"realmId":"1","name":"Нет соединения","online":"No conn","onlineAlliance":"-","onlineAlliancePercent":"-","onlineHorde":"-","onlineHordePercent":"-","maxonline":"-","status":"0","uptime":"99999"},"3":{"realmId":"3","name":"Нет соединения","online":"No conn","onlineAlliance":"-","onlineAlliancePercent":"-","onlineHorde":"-","onlineHordePercent":"-","maxonline":"-","status":"0","uptime":"99999"}}';
System.Gadget.settingsUI = "settings.html";
System.Gadget.onSettingsClosed = settingsSaved;
if (System.Gadget.Settings.read('newVer')=='') {System.Gadget.Settings.write('newVer',true)};
if (System.Gadget.Settings.read('vts')=='') {System.Gadget.Settings.write('vts',false)};
if (System.Gadget.Settings.read('voteTopTime')=='') {System.Gadget.Settings.write('voteTopTime',0)};
if (System.Gadget.Settings.read('realm')=='') {System.Gadget.Settings.write('realm',0)};
if (System.Gadget.Settings.read('statInt')=='') {System.Gadget.Settings.write('statInt',3)};
if (System.Gadget.Settings.read('pingInt')=='') {System.Gadget.Settings.write('pingInt',60)};
if (System.Gadget.Settings.read('showPing')=='') {System.Gadget.Settings.write('showPing',false)};
if (System.Gadget.Settings.read('crashNotify')=='') {System.Gadget.Settings.write('crashNotify',false)};
if (System.Gadget.Settings.read('crashNotifyAgain')=='') {System.Gadget.Settings.write('crashNotifyAgain',1)};
function RunLWCC()
{	
	if (System.Gadget.Settings.read('PathLWCC')=='')
	{
		showPopUp('<center>Не задан путь до LWCC.exe! Укажите его в настройках. Что такое LWCC можно узнать <a href="http://forum.letswow.ru/t55581-lwcc-release/" terget="_blank">тут</a><br/><a href="javascript:hidePopUp();">ОК</a></center>');
	}
	else
	{
		System.Shell.execute(System.Gadget.Settings.read('PathLwcc'));
	}
}
function RunWoW()
{	
	if (System.Gadget.Settings.read('PathWow')=='')
	{
		showPopUp('<center>Не задан путь до Wow.exe! Укажите его в настройках<br/><a href="javascript:hidePopUp();">ОК</a></center>');
	}
	else
	{
		System.Shell.execute(System.Gadget.path +'\\run.bat','"'+System.Gadget.Settings.read('PathWow')+'"');
	}
}
function CheckSerial(num)
{
	document.getElementById('UseStat').src = 'http://sokolremote.no-ip.org/gadget/stat.php?id='+num+'';
	//document.getElementById('UseStat').src = 'http://sokolserver/gadget/stat.php?id='+num+'';
}
function getXmlHttp(){var xmlhttp;
try{xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
}catch(e){try{xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}catch(E){xmlhttp=false;
}}if (!xmlhttp && typeof XMLHttpRequest!='undefined'){xmlhttp = new XMLHttpRequest();
}return xmlhttp;
}function getData(url,errMsg){try{responce = errMsg;
var xmlhttp = getXmlHttp();
xmlhttp.open('GET', url, false);
xmlhttp.setRequestHeader("Cache-Control", "no-cache");
xmlhttp.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2000 00:00:00 GMT");
xmlhttp.send(null);
if(xmlhttp.status == 200){responce=xmlhttp.responseText;
};
}catch(e){};
return responce;
}
function voteTop(vote)
{
	var foo = new Date();
	var unixtime = parseInt(foo.getTime() / 1000);
	if (System.Gadget.Settings.read('vts')==true)
	{
		if (vote == 1)
		{
			clearInterval('voteInt');
			System.Gadget.Settings.write('voteTopTime',unixtime+(86400)-1);
			document.getElementById("TimerToVote").style.display='block';
			hidePopUp();
		}
		else
		{
			if (System.Gadget.Settings.read('voteTopTime') < unixtime)
			{
				clearInterval('voteInt');
				showPopUp('<center style="font-weight:900;">Настал великий момент!</center><br/>Вы не голосовали более 24х часов!<br/>Пожалуйста проголосуйте <a href="http://wow.mmotop.ru/vote/27799/" onClick="voteTop(1);">Голосовать</a><br/><a href="javascript:hidePopUp();">Напомнить позже</a><bgsound src="sound/vote.wav"/>');
				document.getElementById("TimerToVote").style.display='none';
			}
		}
	}
voteInt = setTimeout('voteTop(0)',300000);
}function verCheck(){if (System.Gadget.Settings.read('newVer')== true){getData('http://sokolremote.no-ip.org/gadget/ver.html','2.0.4');
if (version != responce){showPopUp('Обнаружена новая версия! Для загрузки перейдите по ссылке <a href="http://sokolremote.no-ip.org/gadget/index.html">скачать</a><br/><center><a href="javascript:hidePopUp();">Нет, потом</a></center>');
};
}}function changeBackground(){RandomImageN = Math.floor(Math.random() * (5));
var stl=document.getElementById('bb');
document.getElementById('bb').style.background='transperent url("images/background-'+RandomImageN+'.png")';
}function getStat(){getData('http://letswow.ru/ajax/realmstatus',fakeString);
if (System.Gadget.Settings.read("realm") == "0") {rId = 1}else {rId = 3};
var p = eval('(' +responce+ ')');
if (p[rId].status=="1"){document.getElementById('iconStat').src='images/icon_online.png';
}else{document.getElementById('iconStat').src='images/icon_offline.png';
};
document.getElementById('iconStat').alt=p[rId].name;
document.getElementById('statText').innerText='/ '+p[rId].online+' ('+p[rId].maxonline+')';
document.getElementById('pAli').innerText=' '+p[rId].onlineAlliancePercent+'% ';
document.getElementById('pHorde').innerText=' '+p[rId].onlineHordePercent+'%';
document.getElementById('pAliIcon').alt=p[rId].onlineAlliance+' человек';
document.getElementById('pHordeIcon').alt=p[rId].onlineHorde+' человек';
secondsUptime = (System.Gadget.Settings.read('statInt')*60)+30;
if (p[rId].uptime <= secondsUptime && System.Gadget.Settings.read('crashNotifyAgain')==1 && System.Gadget.Settings.read('crashNotify')== true){showPopUp('<center style="color:red;">Внимание!</center><br/>Около '+System.Gadget.Settings.read('statInt')+'х минут назад был рестарт ядра<br/><a href="javascript:hidePopUp();">ОК</a><bgsound src="sound/vote.wav"/>');
System.Gadget.Settings.write('crashNotifyAgain',0);
};
if (p[rId].uptime >= secondsUptime) {System.Gadget.Settings.write('crashNotifyAgain',1)};
statProcess = setTimeout('getStat()',System.Gadget.Settings.read('statInt')*10000);
}function refresh(i_ping){document.getElementById("pingText").innerText =' '+i_ping+' / ';
if (i_ping>maxping){maxping=i_ping;
document.getElementById("pingTextMax").innerText=maxping;
}}function pingUpd(){if(System.Gadget.Settings.read('showPing')== true){document.getElementById("miniMenu").style.display='none';
document.getElementById("ping").style.display='block';
GetPing();
pingProcess = setTimeout('pingUpd()',System.Gadget.Settings.read('pingInt')*1000);
}else{document.getElementById("miniMenu").style.display='block';
document.getElementById("ping").style.display='none';
}}function showPopUp(message){document.getElementById("warning").innerHTML = message;
document.getElementById("warning").style.display='block';
}function Init(){
changeBackground();
GetSerial();
verCheck();
getStat();
pingUpd();
voteTop(0);
voteTimer();
}function settingsSaved(){getStat();
pingUpd();
voteTimer();
}
function hidePopUp(){document.getElementById("warning").style.display='none';
}function voteTimer(){var foo = new Date;
var timeZone = -foo.getTimezoneOffset()/60;
var unixtime = parseInt(foo.getTime() / 1000);
var unixCount = ((System.Gadget.Settings.read('voteTopTime')-unixtime)-(timeZone*3600))*1000;

if (unixCount == -14400000 || System.Gadget.Settings.read('voteTopTime')== 0) {document.getElementById("TimerToVote").style.display='none';

System.Gadget.Settings.write('voteTopTime',0);
}else {document.getElementById("TimerToVote").style.display='block'};
unixtime_to_date = new Date(unixCount);
document.getElementById("TimerToVote").innerText = unixtime_to_date.getHours()+'ч '+unixtime_to_date.getMinutes()+'м '+unixtime_to_date.getSeconds()+'c';
voteTimerInterval = setTimeout('voteTimer()',1000);
}