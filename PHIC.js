function MySaveAs()
{
var mDOB = getField("mDOB03").value + util.printf("%02d", getField("mDOB01").value) + util.printf("%02d", getField("mDOB02").value);
var tFilename = getField("txtMLastname").value + getField("txtMFirstname").value.substring(0,1)+ "-" + mDOB + ".pdf";

var curPath = this.path.split("/");
curPath.pop();
curPath.push(tFilename);
this.saveAs(curPath.join("/"));

//app.alert({cMsg:curPath,nIcon:3,nType:0,cTitle:"Save"});

app.alert({cMsg:"This document is saved as: " + tFilename,nIcon:3,nType:0,cTitle:"Save"});
}