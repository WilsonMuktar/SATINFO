var MDHMS=(function(){function MDHMS()
{this.mon=0;this.day=0;this.hr=0;this.minute=0;this.sec=0;}
return MDHMS;})();var SGP4utils=(function(){var pi=3.14159265358979323846;var OPSMODE_AFSPC='a';var OPSMODE_IMPROVED='i';return{getOPSMODE_IMPROVED:function(){return OPSMODE_IMPROVED;},getOPSMODE_AFSPC:function(){return OPSMODE_AFSPC;},getPI:function(){return pi;},readTLEandIniSGP4:function(satName,line1,line2,opsmode,whichconst,satrec)
{var deg2rad=pi/180.0;var xpdotp=1440.0/(2.0*pi);var sec,tumin;var year=0;var mon,day,hr,minute;var temp=SGP4unit.getgravconst(whichconst);tumin=temp[0];satrec.error=0;satrec.name=satName;satrec.line1=line1;try
{SGP4utils.readLine1(line1,satrec);}
catch(e)
{alert("Error Reading TLE line 1: "+e.toString());satrec.tleDataOk=false;satrec.error=7;return false;}
satrec.line2=line2;try
{SGP4utils.readLine2(line2,satrec);}
catch(e)
{alert("Error Reading TLE line 2: "+e.toString());satrec.tleDataOk=false;satrec.error=7;return false;}
satrec.no=satrec.no/xpdotp;satrec.nddot=satrec.nddot*Math.pow(10.0,satrec.nexp);satrec.bstar=satrec.bstar*Math.pow(10.0,satrec.ibexp);satrec.a=Math.pow(satrec.no*tumin,(-2.0/3.0));satrec.ndot=satrec.ndot/(xpdotp*1440.0);satrec.nddot=satrec.nddot/(xpdotp*1440.0*1440);satrec.inclo=satrec.inclo*deg2rad;satrec.nodeo=satrec.nodeo*deg2rad;satrec.argpo=satrec.argpo*deg2rad;satrec.mo=satrec.mo*deg2rad;satrec.alta=satrec.a*(1.0+satrec.ecco)-1.0;satrec.altp=satrec.a*(1.0-satrec.ecco)-1.0;if(satrec.epochyr<57)
{year=satrec.epochyr+2000;}
else
{year=satrec.epochyr+1900;}
var mdhms=new MDHMS();mdhms=this.days2mdhms(year,satrec.epochdays);mon=mdhms.mon;day=mdhms.day;hr=mdhms.hr;minute=mdhms.minute;sec=mdhms.sec;satrec.jdsatepoch=this.jday(year,mon,day,hr,minute,sec);var result=SGP4unit.sgp4init(whichconst,opsmode,satrec.satnum,satrec.jdsatepoch-2433281.5,satrec.bstar,satrec.ecco,satrec.argpo,satrec.inclo,satrec.mo,satrec.no,satrec.nodeo,satrec);return result;},readLine1:function(line1,satrec)
{var tleLine1=line1;if(!tleLine1.substring(1,3))
{alert("TLE line 1 not valid first line");}
satrec.satnum=parseFloat(tleLine1.substring(2,7));satrec.classification=tleLine1.substring(7,8);satrec.intldesg=tleLine1.substring(9,17);satrec.epochyr=parseFloat(tleLine1.substring(18,20));satrec.epochdays=parseFloat(tleLine1.substring(20,32));satrec.ndot=parseFloat(tleLine1.substring(33,43));if((tleLine1.substring(44,52))=="        ")
{satrec.nddot=0;satrec.nexp=0;}
else
{satrec.nddot=parseFloat(tleLine1.substring(44,50))/1.0E5;satrec.nexp=parseFloat(tleLine1.substring(50,52));}
satrec.bstar=parseFloat(tleLine1.substring(53,59))/1.0E5;satrec.ibexp=parseFloat(tleLine1.substring(59,61));try
{satrec.numb=parseFloat(tleLine1.substring(62,63));satrec.elnum=parseFloat(tleLine1.substring(64,68));}
catch(e)
{alert("Warning: Error Reading numb or elnum from TLE line 1 sat#:"+satrec.satnum);}
return true;},readLine2:function(line2,satrec)
{var tleLine2=line2;if(!tleLine2.substring(1,3))
{alert("TLE line 2 not valid second line");}
var satnum=parseFloat(tleLine2.substring(2,7));if(satnum!=satrec.satnum)
{alert("Warning TLE line 2 Sat Num doesn't match line1 for sat: "+satrec.name);}
satrec.inclo=parseFloat(tleLine2.substring(8,17));satrec.nodeo=parseFloat(tleLine2.substring(17,26));satrec.ecco=parseFloat(tleLine2.substring(26,34))/1.0E7;satrec.argpo=parseFloat(tleLine2.substring(34,43));satrec.mo=parseFloat(tleLine2.substring(43,52));satrec.no=parseFloat(tleLine2.substring(52,63));try
{satrec.revnum=parseFloat(tleLine2.substring(63,68));}
catch(e)
{alert("Warning: Error Reading revnum from TLE line 2 sat#:"+satrec.satnum+"\n"+e.toString());satrec.revnum=-1;}
return true;},parseFloat:function(inStr)
{var dformat=new DecimalFormat("#");var dfs=new DecimalFormatSymbols();dfs.setDecimalSeparator('.');dformat.setDecimalFormatSymbols(dfs);var trimStr=inStr.trim();if(trimStr.startsWith("+"))
{trimStr=trimStr.substring(1);}
var pp=new ParsePosition(0);var num=dformat.parse(trimStr,pp);if(null==num)
{alert("Invalid Float In TLE");}
return num.doubleValue();},jday:function(year,mon,day,hr,minute,sec)
{var jd=367.0*year-
Math.floor((7*(year+Math.floor((mon+9)/12.0)))*0.25)+
Math.floor(275*mon/9.0)+
day+1721013.5+
((sec/60.0+minute)/60.0+hr)/24.0;return jd;},days2mdhms:function(year,days)
{var mdhms=new MDHMS();var i,inttemp,dayofyr;var temp;var lmonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);dayofyr=Math.floor(days);if((year%4)==0)
{lmonth[1]=29;}
i=1;inttemp=0;while((dayofyr>inttemp+lmonth[i-1])&&(i<12))
{inttemp=inttemp+lmonth[i-1];i++;}
mdhms.mon=i;mdhms.day=dayofyr-inttemp;temp=(days-dayofyr)*24.0;mdhms.hr=Math.floor(temp);temp=(temp-mdhms.hr)*60.0;mdhms.minute=Math.floor(temp);mdhms.sec=(temp-mdhms.minute)*60.0;return mdhms;},invjday:function(jd)
{var year,mon,day,hr,minute,sec;var leapyrs;var days,tu,temp;temp=jd-2415019.5;tu=temp/365.25;year=1900+Math.floor(tu);leapyrs=Math.floor((year-1901)*0.25);days=temp-((year-1900)*365.0+leapyrs)+0.00000000001;if(days<1.0)
{year=year-1;leapyrs=Math.floor((year-1901)*0.25);days=temp-((year-1900)*365.0+leapyrs);}
var mdhms=days2mdhms(year,days);mon=mdhms.mon;day=mdhms.day;hr=mdhms.hr;minute=mdhms.minute;sec=mdhms.sec;sec=sec-0.00000086400;return new Array(year,mon,day,hr,minute,sec);},rv2coe:function(r,v,mu)
{var p,a,ecc,incl,omega,argp,nu,m,arglat,truelon,lonper;var undefined,small,magr,magv,magn,sme,rdotv,infinite,temp,c1,hk,twopi,magh,halfpi,e;var hbar=[];var nbar=[];var ebar=[];var i;var typeorbit;twopi=2.0*Math.PI;halfpi=0.5*Math.PI;small=0.00000001;undefined=999999.1;infinite=999999.9;m=undefined;magr=mag(r);magv=mag(v);cross(r,v,hbar);magh=mag(hbar);if(magh>small)
{nbar[0]=-hbar[1];nbar[1]=hbar[0];nbar[2]=0.0;magn=mag(nbar);c1=magv*magv-mu/magr;rdotv=dot(r,v);for(var i=0;i<=2;i++)
{ebar[i]=(c1*r[i]-rdotv*v[i])/mu;}
ecc=mag(ebar);sme=(magv*magv*0.5)-(mu/magr);if(Math.abs(sme)>small)
{a=-mu/(2.0*sme);}
else
{a=infinite;}
p=magh*magh/mu;hk=hbar[2]/magh;incl=Math.acos(hk);typeorbit="ei";if(ecc<small)
{if((incl<small)|(Math.abs(incl-Math.PI)<small))
{typeorbit="ce";}
else
{typeorbit="ci";}}
else
{if((incl<small)|(Math.abs(incl-Math.PI)<small))
{typeorbit="ee";}}
if(magn>small)
{temp=nbar[0]/magn;if(Math.abs(temp)>1.0)
{temp=Math.signum(temp);}
omega=Math.acos(temp);if(nbar[1]<0.0)
{omega=twopi-omega;}}
else
{omega=undefined;}
if(typeorbit.equalsIgnoreCase("ei")==true)
{argp=angle(nbar,ebar);if(ebar[2]<0.0)
{argp=twopi-argp;}}
else
{argp=undefined;}
if(typeorbit.startsWith("e"))
{nu=angle(ebar,r);if(rdotv<0.0)
{nu=twopi-nu;}}
else
{nu=undefined;}
if(typeorbit.equalsIgnoreCase("ci")==true)
{arglat=angle(nbar,r);if(r[2]<0.0)
{arglat=twopi-arglat;}
m=arglat;}
else
{arglat=undefined;}
if((ecc>small)&&(typeorbit.equalsIgnoreCase("ee")==true))
{temp=ebar[0]/ecc;if(Math.abs(temp)>1.0)
{temp=Math.signum(temp);}
lonper=Math.acos(temp);if(ebar[1]<0.0)
{lonper=twopi-lonper;}
if(incl>halfpi)
{lonper=twopi-lonper;}}
else
{lonper=undefined;}
if((magr>small)&&(typeorbit.equalsIgnoreCase("ce")==true))
{temp=r[0]/magr;if(Math.abs(temp)>1.0)
{temp=Math.signum(temp);}
truelon=Math.acos(temp);if(r[1]<0.0)
{truelon=twopi-truelon;}
if(incl>halfpi)
{truelon=twopi-truelon;}
m=truelon;}
else
{truelon=undefined;}
if(typeorbit.startsWith("e"))
{var tt=newtonnu(ecc,nu);e=tt[0];m=tt[1];}}
else
{p=undefined;a=undefined;ecc=undefined;incl=undefined;omega=undefined;argp=undefined;nu=undefined;m=undefined;arglat=undefined;truelon=undefined;lonper=undefined;}
return new Array(p,a,ecc,incl,omega,argp,nu,m,arglat,truelon,lonper);},newtonnu:function(ecc,nu)
{var e0,m;var small,sine,cose;e0=999999.9;m=999999.9;small=0.00000001;if(Math.abs(ecc)<small)
{m=nu;e0=nu;}
else
if(ecc<1.0-small)
{sine=(Math.sqrt(1.0-ecc*ecc)*Math.sin(nu))/(1.0+ecc*Math.cos(nu));cose=(ecc+Math.cos(nu))/(1.0+ecc*Math.cos(nu));e0=Math.atan2(sine,cose);m=e0-ecc*Math.sin(e0);}
else
if(ecc>1.0+small)
{if((ecc>1.0)&&(Math.abs(nu)+0.00001<Math.PI-Math.acos(1.0/ecc)))
{sine=(Math.sqrt(ecc*ecc-1.0)*Math.sin(nu))/(1.0+ecc*Math.cos(nu));e0=asinh(sine);m=ecc*Math.sinh(e0)-e0;}}
else
if(Math.abs(nu)<168.0*Math.PI/180.0)
{e0=Math.tan(nu*0.5);m=e0+(e0*e0*e0)/3.0;}
if(ecc<1.0)
{m=(m%(2.0*Math.PI));if(m<0.0)
{m=m+2.0*Math.PI;}
e0=e0%(2.0*Math.PI);}
return new Array(e0,m);},asinh:function(xval)
{return Math.log(xval+Math.sqrt(xval*xval+1.0));},mag:function(x)
{return Math.sqrt(x[0]*x[0]+x[1]*x[1]+x[2]*x[2]);},cross:function(vec1,vec2,outvec)
{outvec[0]=vec1[1]*vec2[2]-vec1[2]*vec2[1];outvec[1]=vec1[2]*vec2[0]-vec1[0]*vec2[2];outvec[2]=vec1[0]*vec2[1]-vec1[1]*vec2[0];},dot:function(x,y)
{return(x[0]*y[0]+x[1]*y[1]+x[2]*y[2]);},angle:function(vec1,vec2)
{var small,undefined,magv1,magv2,temp;small=0.00000001;undefined=999999.1;magv1=mag(vec1);magv2=mag(vec2);if(magv1*magv2>small*small)
{temp=dot(vec1,vec2)/(magv1*magv2);if(Math.abs(temp)>1.0)
{temp=Math.signum(temp)*1.0;}
return Math.acos(temp);}
else
{return undefined;}}}})();