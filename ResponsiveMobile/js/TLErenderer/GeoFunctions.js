var GeoFunctions=(function(){function GeoFunctions(){}
return{GeodeticLLA:function(modPos,mjd)
{var daysSinceY2k=mjd-51544.5;return this.calculateGeodeticLLA(modPos,daysSinceY2k);},calculateGeodeticLLA:function(r,d)
{var R_equ=AstroConst.R_Earth;var f=AstroConst.f_Earth;var eps_mach=2.22E-16;var eps=1.0e3*eps_mach;var epsRequ=eps*R_equ;var e2=f*(2.0-f);var X=r[0];var Y=r[1];var Z=r[2];var rho2=X*X+Y*Y;var LLA=[];if(MathUtils.norm(r)==0.0)
{alert(" invalid input in Geodetic constructor");LLA[1]=0.0;LLA[0]=0.0;LLA[2]=-AstroConst.R_Earth;return LLA;}
var dZ,dZ_new,SinPhi;var ZdZ,Nh,N;dZ=e2*Z;for(;;)
{ZdZ=Z+dZ;Nh=Math.sqrt(rho2+ZdZ*ZdZ);SinPhi=ZdZ/Nh;N=R_equ/Math.sqrt(1.0-e2*SinPhi*SinPhi);dZ_new=N*e2*SinPhi;if(Math.abs(dZ-dZ_new)<epsRequ)break;dZ=dZ_new;}
LLA[1]=Math.atan2(Y,X);LLA[0]=Math.atan2(ZdZ,Math.sqrt(rho2));LLA[2]=Nh-N;LLA[1]=LLA[1]-this.earthRotationDeg(d)*Math.PI/180.0;var div=Math.floor(LLA[1]/(2*Math.PI));LLA[1]=LLA[1]-div*2*Math.PI;if(LLA[1]>Math.PI)
{LLA[1]=LLA[1]-2.0*Math.PI;}
return LLA;},earthRotationDeg:function(d)
{var T=(d)/36525.0;return((280.46061837+360.98564736629*(d))+0.000387933*T*T-T*T*T/38710000.0)%360.0;},lla2ecef:function(lambda,phi,alt)
{var e_sqr=AstroConst.f_Earth*(2.0-AstroConst.f_Earth);var cos_phi=Math.cos(phi);var sin_phi=Math.sin(phi);var N=AstroConst.R_Earth_major/Math.sqrt(1.0-e_sqr*(sin_phi*sin_phi));return new Array((N+alt)*cos_phi*Math.cos(lambda),(N+alt)*cos_phi*Math.sin(lambda),((1.0-e_sqr)*N+alt)*sin_phi);},ecef2lla_Fast:function(pos)
{var lla=[];var a=6378137;var e=8.1819190842622e-2;var b=Math.sqrt(Math.pow(a,2.0)*(1-Math.pow(e,2)));var ep=Math.sqrt((Math.pow(a,2.0)-Math.pow(b,2.0))/Math.pow(b,2.0));var p=Math.sqrt(Math.pow(pos[0],2.0)+Math.pow(pos[1],2.0));var th=Math.atan2(a*pos[2],b*p);lla[1]=Math.atan2(pos[1],pos[0]);lla[0]=Math.atan2((pos[2]+Math.pow(ep,2.0)*b*Math.pow(Math.sin(th),3.0)),(p-Math.pow(e,2.0)*a*Math.pow(Math.cos(th),3.0)));var N=a/Math.sqrt(1-Math.pow(e,2.0)*Math.pow(Math.sin(lla[0]),2.0));lla[2]=p/Math.cos(lla[0])-N;if(lla[1]<0)
{lla[1]=2.0*Math.PI+lla[1];}
lla[1]=lla[1]%(2.0*Math.PI);if(Math.abs(pos[0])<1.0&Math.abs(pos[1])<1.0)
{lla[2]=Math.abs(pos[2])-b;}
if(lla[1]>Math.PI)
{lla[1]=lla[1]-2.0*Math.PI;}
return lla;},calculate_AER:function(currentJulianDate,lla_deg_m,eci_pos)
{var aer=[];var thetaDeg=Sidereal.Mean_Sidereal_Deg(currentJulianDate-AstroConst.JDminusMJD,lla_deg_m[1]);var eciGS=calculateECIposition(lla_deg_m,thetaDeg);var rECI=MathUtils.sub(eci_pos,eciGS);aer[2]=MathUtils.norm(rECI);var rSEZ=eci2sez(rECI,thetaDeg,lla_deg_m[0]);aer[0]=Math.atan2(-rSEZ[0],rSEZ[1])*180.0/Math.PI;if(aer[0]<=0)
{aer[0]=Math.abs(aer[0])+90;}
else
{if(aer[0]<=90)
{aer[0]=-1.0*aer[0]+90.0;}
else
{aer[0]=-1.0*aer[0]+450.0;}}
aer[1]=Math.asin(rSEZ[2]/aer[2])*180.0/Math.PI;return aer;},eci2sez:function(rECI,thetaDeg,latDeg)
{var rSEZ=[];rSEZ[0]=Math.sin(latDeg*Math.PI/180.0)*Math.cos(thetaDeg*Math.PI/180.0)*rECI[0]+Math.sin(latDeg*Math.PI/180.0)*Math.sin(thetaDeg*Math.PI/180.0)*rECI[1]-Math.cos(latDeg*Math.PI/180.0)*rECI[2];rSEZ[1]=-Math.sin(thetaDeg*Math.PI/180.0)*rECI[0]+Math.cos(thetaDeg*Math.PI/180.0)*rECI[1];rSEZ[2]=Math.cos(latDeg*Math.PI/180.0)*Math.cos(thetaDeg*Math.PI/180.0)*rECI[0]+Math.cos(latDeg*Math.PI/180.0)*Math.sin(thetaDeg*Math.PI/180.0)*rECI[1]+Math.sin(latDeg*Math.PI/180.0)*rECI[2];return rSEZ;},calculateECIposition:function(lla_deg_m,theta)
{var eciVec=[];var C=1.0/Math.sqrt(1.0+AstroConst.f_Earth*(AstroConst.f_Earth-2.0)*Math.pow(Math.sin(lla_deg_m[0]*Math.PI/180.0),2.0));var S=Math.pow(1.0-AstroConst.f_Earth,2.0)*C;eciVec[0]=AstroConst.R_Earth*C*Math.cos(lla_deg_m[0]*Math.PI/180.0)*Math.cos(theta*Math.PI/180.0);eciVec[1]=AstroConst.R_Earth*C*Math.cos(lla_deg_m[0]*Math.PI/180.0)*Math.sin(theta*Math.PI/180.0);eciVec[2]=AstroConst.R_Earth*S*Math.sin(lla_deg_m[0]*Math.PI/180.0);return eciVec;}}})();