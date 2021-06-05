startCol = 0;
function gradText(tObj)
{
    txt = document.all[tObj].innerText;
    col = startCol = (startCol + 16) & 0xFF;	//　１６段階に変化
    str = "";
    for (i=0; i<txt.length; i++)
    {
        cStr = "f" + (col += 8).toString(16);
        cStr = cStr.substring(cStr.length-6,cStr.length);
        str += "<font color='#"+cStr+"'>" + txt.charAt(i) + "</font>";
    }
    document.all[tObj].innerHTML = str;
    }
    function singen() {
        window.location = "file:///Users/ikedori/Desktop/%E3%82%A4%E3%82%B1%E3%83%A1%E3%83%B3/%E3%81%84%E3%81%91%E3%81%A8%E3%82%99%E3%82%8A/ikedori.html"
    }
