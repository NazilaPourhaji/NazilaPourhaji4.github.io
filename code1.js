// JavaScript Document

var arrname=["jafar","Ali","Jallal","Hamed","Zahra"];
for (var i=0;i<arrname.length;i++){
	if (Array.from(arrname[i])[0]=="J" || Array.from(arrname[i])[0]=="j"){
		document.write("Goodbye J"+arrname[i]);
		document.write("<br>");
	}
	else{
		document.write("Hello "+arrname[i]);
		document.write("<br>");
		}
}
		