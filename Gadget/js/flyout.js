System.Gadget.onSettingsClosing = SettingsClosing;
function checkBar()
{
 if (System.Gadget.Settings.read("Nick")!="") document.getElementById('bar').src="http://letswow.ru/userbar/"+System.Gadget.Settings.read("Nick")+".png";
}
