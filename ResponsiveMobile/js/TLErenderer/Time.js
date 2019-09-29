function Time(){this.currentTime=new Date();var mjd=0;var mjde=0;this.updateTimeMeasures();}
Time.prototype.setTime=function(time){this.currentTime=new Date();var datestr=time.toString().split(" ")[0];var timestr=time.toString().split(" ")[1];this.currentTime.setHours(parseInt(timestr.toString().split(":")[0]));this.currentTime.setMinutes(parseInt(timestr.toString().split(":")[1]));this.currentTime.setSeconds(parseInt(timestr.toString().split(":")[2]));this.currentTime.setDate(parseInt(datestr.toString().split("-")[2]));this.currentTime.setMonth(parseInt(datestr.toString().split("-")[1])-1);this.currentTime.setFullYear(parseInt(datestr.toString().split("-")[0]));var mjd=0;var mjde=0;this.updateTimeMeasures();}
Time.prototype.setTimeCalendar=function(time){this.currentTime=new Date();console.log(parseInt(time.toString().split("-")[2])+"_"+parseInt(time.toString().split("-")[1])+"_"+parseInt(time.toString().split("-")[0]));this.currentTime.setDate(parseInt(time.toString().split("-")[2]));this.currentTime.setMonth(parseInt(time.toString().split("-")[1])-1);this.currentTime.setFullYear(parseInt(time.toString().split("-")[0]));var mjd=0;var mjde=0;this.updateTimeMeasures();}
Time.prototype.setHourtime=function(hr){this.currentTime.setHours(hr,0,0);this.updateTimeMeasures();}
Time.prototype.update2CurrentTime=function()
{currentTime=new Date();this.updateTimeMeasures();}
Time.prototype.set=function(milliseconds)
{currentTime.setTime(milliseconds);this.updateTimeMeasures();}
Time.prototype.add=function(unit,val)
{if(unit=="year"){this.currentTime.setYear(this.currentTime.getFullYear()+val);}
else if(unit=="month"){this.currentTime.setMonth(this.currentTime.getMonth()+val);}
else if(unit=="date"){this.currentTime.setDate(this.currentTime.getDate()+val);}
else if(unit=="hour"){this.currentTime.setHours(this.currentTime.getHours()+val);}
else if(unit=="minute"){this.currentTime.setMinutes(this.currentTime.getMinutes()+val);}
else if(unit=="second"){this.currentTime.setSeconds(this.currentTime.getSeconds()+val);}
else if(unit=="millisecond"){var second=0;var minute=0;var hour=0;var day=0;var month=0;var year=0;if(val>1000){second=parseInt(val/1000);}
if(second>60){minute=parseInt(second/60);}
if(minute>60){hour=parseInt(minute/60);}
if(hour>24){day=parseInt(hour/24);}
if(day>31){month=parseInt(day/31);}
if(month>12){year=parseInt(month/12);}
val=val-second*1000;this.currentTime.setMilliseconds(this.currentTime.getMilliseconds()+val);this.currentTime.setSeconds(this.currentTime.getSeconds()+second);}
this.updateTimeMeasures();}
Time.prototype.addSeconds=function(seconds)
{var millis2Add=parseFloat(parseInt(Math.round(seconds*1000)));this.add("millisecond",millis2Add);this.updateTimeMeasures();}
Time.prototype.updateTimeMeasures=function()
{mjd=this.calcMjd(this.currentTime);mjde=mjd+this.deltaT(mjd);}
Time.prototype.getJulianDate=function()
{return mjd+2400000.5+0.7569774888;}
Time.prototype.getMJD=function()
{return mjd;}
Time.prototype.getMJDE=function()
{return mjde;}
Time.prototype.getDateTimeStr=function()
{var retStr="";if((this.getJulianDate()>=24405870.5))
{retStr=this.currentTime.valueOf();}
else
{var strBuf=this.currentTime.getFullYear();strBuf+="-";strBuf+=(this.currentTime.getMonth()+1);strBuf+="-";strBuf+=this.currentTime.getDate()<10?"0"+this.currentTime.getDate():this.currentTime.getDate();strBuf+=(" ");strBuf+=this.currentTime.getHours()<10?"0"+this.currentTime.getHours():this.currentTime.getHours();strBuf+=(":");strBuf+=this.currentTime.getMinutes()<10?"0"+this.currentTime.getMinutes():this.currentTime.getMinutes();strBuf+=(":");strBuf+=this.currentTime.getSeconds()<10?"0"+this.currentTime.getSeconds():this.currentTime.getSeconds();strBuf+=(" ");strBuf+=("UTC");retStr=strBuf;}
return retStr;}
Time.prototype.calcMjd=function(cal)
{var sec=cal.getSeconds()+cal.getMilliseconds()/1000.0;return this.calcMjds(cal.getFullYear(),cal.getMonth()+1,cal.getDate()-1,cal.getHours()-5,cal.getMinutes()-6,sec-30);}
Time.prototype.calcMjds=function(year,month,day,hour,min,sec)
{var MjdMidnight;var FracOfDay;var b;if(month<=2){month+=12;--year;}
if((10000*year+100*month+day)<=15821004){b=-2+((year+4716)/4)-1179;}
else{b=(year/400)-(year/100)+(year/4);}
MjdMidnight=365*year-679004+b+parseInt((30.6001*(month+1)))+day;FracOfDay=(hour+min/60.0+sec/3600.0)/24.0;return MjdMidnight+FracOfDay;}
Time.prototype.deltaT=function(givenMJD)
{var theEpoch;var t;var D;givenMJD-=50000;theEpoch=2000.+(givenMJD-1545.)/365.25;if(1987<=theEpoch&&2015>=theEpoch)
{t=(theEpoch-2002.);D=9.2*t/15.+65.;D/=86400.;}
else if(1900<=theEpoch&&1987>theEpoch)
{t=(theEpoch-1900.)/100.;D=-0.212591*t*t*t*t*t*t*t
+0.677066*t*t*t*t*t*t
-0.861938*t*t*t*t*t
+0.553040*t*t*t*t
-0.181133*t*t*t
+0.025184*t*t
+0.000297*t
-0.000020;}
else if(1800<=theEpoch&&1900>theEpoch)
{t=(theEpoch-1900.)/100.;D=2.043794*t*t*t*t*t*t*t*t*t*t
+11.636204*t*t*t*t*t*t*t*t*t
+28.316289*t*t*t*t*t*t*t*t
+38.291999*t*t*t*t*t*t*t
+31.332267*t*t*t*t*t*t
+15.845535*t*t*t*t*t
+4.867575*t*t*t*t
+0.865736*t*t*t
+0.083563*t*t
+0.003844*t
-0.000009;}
else if(948<=theEpoch&&1600>=theEpoch)
{t=(theEpoch-1850.)/100.;D=22.5*t*t;D/=86400.;}
else if(948>theEpoch)
{t=(theEpoch-948.)/100.;D=46.5*t*t-405.*t+1830.;D/=86400.;}
else
{t=theEpoch-1810.;D=0.00325*t*t-15.;D/=86400.;}
return D;}
Time.prototype.getCurrentGregorianCalendar=function()
{return this.currentTime;}
Time.prototype.convertJD2Calendar=function(jd)
{var jd2=parseFloat(jd+0.5);var I=parseInt(jd2);var F=parseFloat(jd2)-parseFloat(I);var A=0;var B=0;if(I>2299160)
{var a1=parseFloat((I-1867216.25)/36524.25);A=a1;var a3=parseFloat(A/4.0);B=I+1+A-a3;}
else
{B=I;}
var C=parseFloat(B)+1524;var d1=parseFloat((C-122.1)/365.25);var D=d1;var e1=parseFloat(365.25*D);var E=e1;var g1=parseFloat((C-E)/30.6001);var G=g1;var h=parseFloat(G*30.6001);var da=C-E-h;var date=parseInt(da);var month;var year;if(G<14)
{month=parseInt((G-2));}
else
{month=parseInt((G-14));}
if(month.intValue()>1)
{year=parseInt((D-4716));}
else
{year=parseInt((D-4715));}
var dhr=parseFloat(24.0*F);var hour=parseInt(dhr);var dmin=parseFloat(dhr-parseFloat(dhr)*60.0);var minute=parseInt(dmin);var dsec=parseFloat((dmin-dmin)*60.0);var second=parseInt(dsec);var ms=parseInt(Math.round((dsec-second)*1000.0));var newTime=new Date();newTime.setYear(year);newTime.setMonth(month);newTime.setDate(date);newTime.setHours(hour);newTime.setMinutes(minute);newTime.setSeconds(second);newTime.setMilliseconds(ms);return newTime;}
Time.prototype.convertJD2String=function(jd)
{var newTime=convertJD2Calendar(jd);var retStr=newTime.valueOf();return retStr;}