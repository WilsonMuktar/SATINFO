function SatelliteTleSGP4(name,tleLine1,tleLine2)
{this.lla=[];this.tle;this.sgp4SatData;this.currentJulianDate=-1;this.tleEpochJD=-1;this.j2kPos=[];this.j2kVel=[];this.posTEME=[];this.velTEME=[];this.plot2d=true;this.satColor="";this.plot2DFootPrint=true;this.fillFootPrint=true;this.numPtsFootPrint=41;this.showGroundTrack=true;this.grnTrkPointsPerPeriod=81;this.groundTrackLeadPeriodMultiplier=2.0;this.groundTrackLagPeriodMultiplier=1.0;this.latLongLead=[];this.latLongLag=[];this.temePosLead=[];this.temePosLag=[];this.timeLead=[];this.timeLag=[];this.groundTrackIni=false;this.show3DOrbitTrace=true;this.show3DFootprint=true;this.show3DName=true;this.show3D=true;this.showGroundTrack3d=false;this.show3DOrbitTraceECI=true;this.tle=new TLE(name,tleLine1,tleLine2);this.sgp4SatData=new SGP4SatData();var opsmode=SGP4utils.getOPSMODE_IMPROVED();var gravconsttype="wgs84";var loadSuccess=SGP4utils.readTLEandIniSGP4(name,tleLine1,tleLine2,opsmode,gravconsttype,this.sgp4SatData);if(!loadSuccess)
{console.log("Error loading TLE error code:"+this.sgp4SatData.error);}
this.tleEpochJD=this.sgp4SatData.jdsatepoch;}
SatelliteTleSGP4.prototype.getAltitude=function(){return this.lla[2];}
SatelliteTleSGP4.prototype.getLLA=function(){return this.lla;}
SatelliteTleSGP4.prototype.getLatitude=function(){return this.lla[0];}
SatelliteTleSGP4.prototype.getLongitude=function(){return this.lla[1];}
SatelliteTleSGP4.prototype.calculateJ2KPositionFromUT=function(julDate){var ptPos=calculateTemePositionFromUT(julDate);var mjd=julDate-AstroConst.JDminusMJD;var ttt=(mjd-AstroConst.MJD_J2000)/36525.0;var A=J2kCoordinateConversion.teme_j2k(J2kCoordinateConversion.Direction.to,ttt,24,2,'a');var j2kPosI=J2kCoordinateConversion.matvecmult(A,ptPos);return j2kPosI;}
SatelliteTleSGP4.prototype.calculateTemePositionFromUT=function(julDate){var ptPos=[];var ptVel=[];var propSuccess=SGP4unit.sgp4Prop2JD(this.sgp4SatData,julDate,ptPos,ptVel);if(!propSuccess)
{console.log("Error (2) SGP4 Propagation failed for sat: "+this.sgp4SatData.name+", JD: "+this.sgp4SatData.jdsatepoch+", error code: "+this.sgp4SatData.error);}
for(var i=0;i<3;i++)
{ptPos[i]=ptPos[i]*1000.0;}
return ptPos;}
SatelliteTleSGP4.prototype.getCurrentJulDate=function(){return this.currentJulianDate;}
SatelliteTleSGP4.prototype.getGrnTrkPointsPerPeriod=function(){return this.grnTrkPointsPerPeriod;}
SatelliteTleSGP4.prototype.getGroundTrackIni=function(){return this.groundTrackIni;}
SatelliteTleSGP4.prototype.getGroundTrackLagPeriodMultiplier=function(){return this.groundTrackLagPeriodMultiplier;}
SatelliteTleSGP4.prototype.getGroundTrackLeadPeriodMultiplier=function(){return this.groundTrackLeadPeriodMultiplier;}
SatelliteTleSGP4.prototype.getGroundTrackLlaLagPt=function(index){return new Array(this.latLongLag[index][0],this.latLongLag[index][1],this.latLongLag[index][2]);}
SatelliteTleSGP4.prototype.getGroundTrackLlaLeadPt=function(index){return new Array(this.latLongLead[index][0],this.latLongLead[index][1],this.latLongLead[index][2]);}
SatelliteTleSGP4.prototype.getGroundTrackXyzLagPt=function(index){return new Array(this.getTemePosLag()[index][0],this.getTemePosLag()[index][1],this.getTemePosLag()[index][2]);}
SatelliteTleSGP4.prototype.getGroundTrackXyzLeadPt=function(index){return new Array(getTemePosLead()[index][0],getTemePosLead()[index][1],getTemePosLead()[index][2]);}
SatelliteTleSGP4.prototype.getJ2000Position=function(){return this.j2kPos;}
SatelliteTleSGP4.prototype.getJ2000Velocity=function(){return this.j2kVel;}
SatelliteTleSGP4.prototype.getKeplarianElements=function(){return Kepler.SingularOsculatingElements(AstroConst.GM_Earth,this.j2kPos,this.j2kVel);}
SatelliteTleSGP4.prototype.getTemePosLag=function(){return this.temePosLag;}
SatelliteTleSGP4.prototype.getTemePosLead=function(){return this.temePosLead;}
SatelliteTleSGP4.prototype.getName=function(){return this.tle.getSatName();}
SatelliteTleSGP4.prototype.getNumGroundTrackLagPts=function(){return this.latLongLag.length;}
SatelliteTleSGP4.prototype.getNumGroundTrackLeadPts=function(){return this.latLongLead.length;}
SatelliteTleSGP4.prototype.getNumPtsFootPrint=function(){return this.numPtsFootPrint;}
SatelliteTleSGP4.prototype.getPeriod=function(){return Kepler.CalculatePeriod(AstroConst.GM_Earth,this.j2kPos,this.j2kVel)/(60.0);}
SatelliteTleSGP4.prototype.getPlot2D=function(){return this.plot2d;}
SatelliteTleSGP4.prototype.getPlot2DFootPrint=function(){return this.plot2DFootPrint;}
SatelliteTleSGP4.prototype.getTEMEPos=function(){return this.posTEME.clone();}
SatelliteTleSGP4.prototype.getSatColor=function(){return this.satColor;}
SatelliteTleSGP4.prototype.getSatTleEpochJulDate=function(){return this.sgp4SatData.jdsatepoch;}
SatelliteTleSGP4.prototype.getShowGroundTrack=function(){return this.showGroundTrack;}
SatelliteTleSGP4.prototype.getTimeLag=function(){return this.timeLag;}
SatelliteTleSGP4.prototype.getTimeLead=function(){return this.timeLead;}
SatelliteTleSGP4.prototype.getTleAgeDays=function(){return this.currentJulianDate-this.tleEpochJD;}
SatelliteTleSGP4.prototype.getTleEpochJD=function(){return this.tleEpochJD;}
SatelliteTleSGP4.prototype.isFillFootPrint=function(){return this.fillFootPrint;}
SatelliteTleSGP4.prototype.isShow3D=function(){return false;}
SatelliteTleSGP4.prototype.isShow3DFootprint=function(){return false;}
SatelliteTleSGP4.prototype.isShow3DName=function(){return false;}
SatelliteTleSGP4.prototype.isShow3DOrbitTrace=function(){return false;}
SatelliteTleSGP4.prototype.isShow3DOrbitTraceECI=function(){return this.show3DOrbitTraceECI;}
SatelliteTleSGP4.prototype.isShowGroundTrack3d=function(){return false;}
SatelliteTleSGP4.prototype.isShowName2D=function(){return false;}
SatelliteTleSGP4.prototype.propogate2JulDate=function(julDate){this.currentJulianDate=julDate;var propSuccess=SGP4unit.sgp4Prop2JD(this.sgp4SatData,julDate,this.posTEME,this.velTEME);if(!propSuccess)
{console.log("Error SGP4 Propagation failed for sat: "+this.sgp4SatData.name+", JD: "+this.sgp4SatData.jdsatepoch+", error code: "+this.sgp4SatData.error);}
for(var i=0;i<3;i++)
{this.posTEME[i]=this.posTEME[i]*1000.0;this.velTEME[i]=this.velTEME[i]*1000.0;}
var mjd=julDate-AstroConst.JDminusMJD;var ttt=(mjd-AstroConst.MJD_J2000)/36525.0;var A=J2kCoordinateConversion.teme_j2k(Direction.to,ttt,24,2,'a');this.j2kPos=J2kCoordinateConversion.matvecmult(A,this.posTEME);this.j2kVel=J2kCoordinateConversion.matvecmult(A,this.velTEME);var oldLLA=this.lla;this.lla=GeoFunctions.GeodeticLLA(this.posTEME,julDate-AstroConst.JDminusMJD);if(this.showGroundTrack==true)
{if(this.groundTrackIni==false)
{this.initializeGroundTrack();}
else if(oldLLA[0]<0&&this.lla[0]>=0)
{this.initializeGroundTrack();}}
return this.lla;}
SatelliteTleSGP4.prototype.initializeGroundTrack=function()
{if(this.currentJulianDate==-1)
{return;}
var lastAscendingNodeTime=this.currentJulianDate;var periodMin=Kepler.CalculatePeriod(AstroConst.GM_Earth,this.j2kPos,this.j2kVel)/(60.0);var fracOfPeriod=15.0;var timeStep=(periodMin/(60.0*24.0))/fracOfPeriod;var newGuess1=lastAscendingNodeTime-timeStep;var lat0=this.lla[0];var lat1=(this.calculateLatLongAltXyz(newGuess1))[0];while(!(lat0>=0&&lat1<0))
{lastAscendingNodeTime=newGuess1;lat0=lat1;newGuess1=lastAscendingNodeTime-timeStep;lat1=(this.calculateLatLongAltXyz(newGuess1))[0];}
var outJul=this.secantMethod(lastAscendingNodeTime-timeStep,lastAscendingNodeTime,1.0/(60.0*60.0*24.0),20);lastAscendingNodeTime=outJul;var leadEndTime=lastAscendingNodeTime+this.groundTrackLeadPeriodMultiplier*periodMin/(60.0*24);var lagEndTime=lastAscendingNodeTime-this.groundTrackLagPeriodMultiplier*periodMin/(60.0*24);this.fillGroundTrack(lastAscendingNodeTime,leadEndTime,lagEndTime);this.groundTrackIni=true;return;}
SatelliteTleSGP4.prototype.calculateLatLongAltXyz=function(ptTime)
{var ptPos=this.calculateTemePositionFromUT(ptTime);var ptLla=GeoFunctions.GeodeticLLA(ptPos,ptTime-AstroConst.JDminusMJD);var ptLlaXyz=new Array(ptLla[0],ptLla[1],ptLla[2],ptPos[0],ptPos[1],ptPos[2]);return ptLlaXyz;}
SatelliteTleSGP4.prototype.secantMethod=function(xn_1,xn,tol,maxIter)
{var d;var fn_1=this.latitudeGivenJulianDate(xn_1);var fn=this.latitudeGivenJulianDate(xn);for(var n=1;n<=maxIter;n++)
{d=(xn-xn_1)/(fn-fn_1)*fn;if(Math.abs(d)<tol)
{return xn;}
xn_1=xn;fn_1=fn;xn=xn-d;fn=this.latitudeGivenJulianDate(xn);}
console.log("Warning: Secant Method - Max Iteration limit reached finding Asending Node.");return xn;}
SatelliteTleSGP4.prototype.fillGroundTrack=function(lastAscendingNodeTime,leadEndTime,lagEndTime)
{var ptsLead=parseInt(Math.ceil(this.grnTrkPointsPerPeriod*this.groundTrackLeadPeriodMultiplier));this.latLongLead=[];this.temePosLead=[];this.timeLead=[];for(var i=0;i<ptsLead;i++)
{var ptTime=lastAscendingNodeTime+i*(leadEndTime-lastAscendingNodeTime)/(ptsLead-1);var ptLlaXyz=this.calculateLatLongAltXyz(ptTime);this.latLongLead[i]=[];this.latLongLead[i][0]=ptLlaXyz[0];this.latLongLead[i][1]=ptLlaXyz[1];this.latLongLead[i][2]=ptLlaXyz[2];this.temePosLead[i]=[];this.temePosLead[i][0]=ptLlaXyz[3];this.temePosLead[i][1]=ptLlaXyz[4];this.temePosLead[i][2]=ptLlaXyz[5];this.timeLead[i]=ptTime;}
var ptsLag=parseInt(Math.ceil(this.grnTrkPointsPerPeriod*this.groundTrackLagPeriodMultiplier));this.latLongLag=[];this.temePosLag=[];this.timeLag=[];for(var i=0;i<ptsLag;i++)
{var ptTime=lastAscendingNodeTime+i*(lagEndTime-lastAscendingNodeTime)/(ptsLag-1);var ptLlaXyz=this.calculateLatLongAltXyz(ptTime);this.latLongLag[i]=[];this.latLongLag[i][0]=ptLlaXyz[0];this.latLongLag[i][1]=ptLlaXyz[1];this.latLongLag[i][2]=ptLlaXyz[2];this.temePosLag[i]=[];this.temePosLag[i][0]=ptLlaXyz[3];this.temePosLag[i][1]=ptLlaXyz[4];this.temePosLag[i][2]=ptLlaXyz[5];this.timeLag[i]=ptTime;}}
SatelliteTleSGP4.prototype.latitudeGivenJulianDate=function(julDate)
{var ptPos=this.calculateTemePositionFromUT(julDate);var ptLla=GeoFunctions.GeodeticLLA(ptPos,julDate-AstroConst.JDminusMJD);return ptLla[0];}
SatelliteTleSGP4.prototype.setShow3DOrbitTraceECI=function(show3DOrbitTraceECI){this.show3DOrbitTraceECI=this.show3DOrbitTraceECI;}
SatelliteTleSGP4.prototype.getJ2kPos=function(){return this.j2kPos;}
SatelliteTleSGP4.prototype.setJ2kPos=function(j2kPos){this.j2kPos=this.j2kPos;}
SatelliteTleSGP4.prototype.getJ2kVel=function(){return this.j2kVel;}
SatelliteTleSGP4.prototype.setJ2kVel=function(j2kVel){this.j2kVel=this.j2kVel;}