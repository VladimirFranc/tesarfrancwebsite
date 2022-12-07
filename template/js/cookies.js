/*<![CDATA[*/
	function CheckCookie(nme){
	 if (cookie(nme)){
	  document.getElementById(nme).style.display='none';
	 }
	}
	function setcookie(nme,days){
	 document.cookie=nme+'=true;expires='+(new Date(new Date().getTime()+days*86400000).toGMTString())+';path=/';
	 document.getElementById(nme).style.display='none';
	}
	function cookie(nme){
	 var re = new RegExp(nme+'[^;]+','i');
	 if (document.cookie.match(re)){
	  return document.cookie.match(re)[0].split("=")[1];
	 }
	 return null;
	}
	/*]]>*/

	/*<![CDATA[*/
	 CheckCookie('cookies-policy-bar');
	/*]]>*/