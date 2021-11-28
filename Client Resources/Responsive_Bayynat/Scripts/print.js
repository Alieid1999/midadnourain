

function all()
{
		
	if (eval(document.all.blank))
	{
		var imgElement = document.all.blank;
		var temp;
		//temp = window.opener.location.href;
		//imgElement.parentElement.innerHTML = "<IMG id=blank height=22 src=\"/images/j-blanck.gif\" width=88><A onclick=javascript:openPrintPage(); href=\"#\"><IMG onmouseover=\"document.all.item('blank').src='/images/j-goto-print-text.gif'\" onmouseout=\"document.all.item('blank').src='/images/j-blanck.gif'\" height=22 src=\"/images/j-goto-print.gif\" width=26 border=0></A><A onclick=javascript:openSendByEmailPage(); href=\"#\"><IMG onmouseover=\"document.all.item('blank').src='/images/j-email-article-text.gif'\" onmouseout=\"document.all.item('blank').src='/images/j-blanck.gif'\" height=22 src=\"/images/j-email-article.gif\" width=26 border=0></A>";
		imgElement.parentElement.innerHTML = "<IMG id=blank height=22 src=\"/images/j-blanck.gif\" width=88><A href=\"javascript:openPrintPage();\"><IMG onmouseover=\"document.all.item('blank').src='/images/j-goto-print-text.gif'\" onmouseout=\"document.all.item('blank').src='/images/j-blanck.gif'\" height=22 src=\"/images/j-goto-print.gif\" width=26 border=0></A><A href=\"javascript:openSendByEmailPage();\"><IMG onmouseover=\"document.all.item('blank').src='/images/j-email-article-text.gif'\" onmouseout=\"document.all.item('blank').src='/images/j-blanck.gif'\" height=22 src=\"/images/j-email-article.gif\" width=26 border=0></A>";
	}
	
		
		

		
}
function openPrintPage()
{
	window.open("../shared/print.htm",null,"height=400,width=600,status=yes,toolbar=yes,menubar=no,location=no, resizable=yes,scrollbars=yes")
}


all();
