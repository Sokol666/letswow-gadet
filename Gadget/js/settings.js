﻿System.Gadget.onSettingsClosing = SettingsClosing;function settingsClosing(event){if (event.closeAction == event.Action.commit){}event.cancel = false;}function LoadSetting(){document.all.realm[System.Gadget.Settings.read("realm")].checked = 'true';document.getElementById('statTime').value = System.Gadget.Settings.read('statInt');document.getElementById('pingTime').value = System.Gadget.Settings.read('pingInt');document.getElementById('showPing').checked = System.Gadget.Settings.read('showPing');document.getElementById('newVer').checked = System.Gadget.Settings.read('newVer');document.getElementById('voteTopf').checked = System.Gadget.Settings.read('vts');document.getElementById('crashNotify').checked = System.Gadget.Settings.read('crashNotify');}function saveRealm(number){System.Gadget.Settings.write("realm",document.all.realm[number].value);}function withoutCyr(input){var value = input.value;var re = /[^\d,]/g;if (re.test(value)){value = value.replace(re, '');input.value = value;}}function saveStatTime(){System.Gadget.Settings.write('statInt', document.getElementById('statTime').value);}function savePingTime(){System.Gadget.Settings.write('pingInt', document.getElementById('pingTime').value);}function saveShowPing(){System.Gadget.Settings.write('showPing', document.getElementById('showPing').checked);}function newVer(){	System.Gadget.Settings.write('newVer', document.getElementById('newVer').checked);}function voteTopsf(){System.Gadget.Settings.write('vts', document.getElementById('voteTopf').checked);}function crashNotify(){System.Gadget.Settings.write('crashNotify', document.getElementById('crashNotify').checked);}