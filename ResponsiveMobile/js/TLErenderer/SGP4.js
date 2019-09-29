function calculateSGP4(name,line1,line2){var newTLE=new TLE(name,line1,line2);try
{prop=new SatelliteTleSGP4(newTLE.getSatName(),newTLE.getLine1(),newTLE.getLine2());}
catch(e)
{console.log("Error Creating SGP4 Satellite");}
return prop;}
function SGP4(earth,name,line1,line2,render){this.render=render;this.earth=earth;this.line;this.satellite;this.circle;this.cone;this.prop;this.isOnePosition=true;this.line1=line1;this.line2=line2;this.SGP4name=name;var newTLE=new TLE(name,line1,line2);try
{this.prop=new SatelliteTleSGP4(newTLE.getSatName(),newTLE.getLine1(),newTLE.getLine2());}
catch(e)
{console.log("Error Creating SGP4 Satellite");}
julianDate=getCurrentJulianDate();this.prop.propogate2JulDate(julianDate);this.lla=this.prop.getLLA();if(render==null)return;var p=new Cesium.Cartesian3.fromDegrees(this.lla[1]*180.0/Math.PI,this.lla[0]*180.0/Math.PI,this.lla[2]);var realalt=this.lla[2];var randomColor=Cesium.Color.fromRandom().withAlpha(0.2);if(earth.is2DMODE){this.circle=new orbitcircle(earth.viewer,p,calcFootPrintRadiusFromAlt(realalt),randomColor);this.circle.drawCircle(render&&satcovvis);earth.Collection.add(this.circle.circle);}
else{if(ecefeci=="ECI"){xyz=this.prop.calculateTemePositionFromUT(getCurrentJulianDate());if(xyz!=null){p=toLATLON(xyz[0],xyz[1],xyz[2]);p=toLATLONZERO(parseFloat(xyz[0]),parseFloat(xyz[1]),parseFloat(xyz[2]));}}
else if(document.getElementById('ECEF').checked==true){p=Cesium.Cartesian3.fromDegrees((this.lla[1]*180.0/Math.PI),this.lla[0]*180.0/Math.PI,earth.is2DMODE?16000:this.lla[2]);}
this.cone=new orbitcone(earth.viewer,p,calcConeRadiusHeightFromAlt(realalt)[0],calcConeRadiusHeightFromAlt(realalt)[1],randomColor);this.cone.setFill(false);this.cone.drawCone(render&&satcovvis);earth.Collection.add(this.cone.cone);}
this.satellite=new orbitsatellite(earth.viewer,name,p);this.satellite.drawSatellite(render&&satvis);this.satellite.drawSatellitelab(render&&satlabvis);earth.Collection.add(this.satellite.satellite);this.line=new orbitline(earth.viewer,Cesium.Cartesian3.fromDegreesArray([]),Cesium.Cartesian3.fromDegreesArray([]),Cesium.Cartesian3.fromDegreesArray([]),Cesium.Cartesian3.fromDegreesArray([]),0.5,Cesium.Color.RED);this.drawOrbitline(name,this.prop,julianDate,render&&orblinevis);}
function calcFootPrintRadiusFromAlt(alt)
{var earthRad=AstroConst.R_Earth;var lambda0=Math.acos(earthRad/(earthRad+alt));var radius=earthRad*Math.sin(lambda0);return radius;}
function calcConeRadiusHeightFromAlt(alt)
{var rh=[];var earthRad=AstroConst.R_Earth;var lambda0=Math.acos(earthRad/(earthRad+alt));rh[0]=earthRad*Math.sin(lambda0);rh[1]=(earthRad+alt)-(earthRad*Math.cos(lambda0));return rh;}
SGP4.prototype.drawOrbitline=function(name,prop,julianDate,vis){var Positions=[];var Positions1=[];var Positions2=[];var Positions3=[];if(this.earth.is2DMODE)
{var sat=this.prop;var LLA_old=new Array();if(sat.getNumGroundTrackLeadPts()>1)
{LLA=sat.getGroundTrackLlaLeadPt(0);LLA_old[0]=LLA[0];LLA_old[1]=LLA[1];Positions.push(Cesium.Cartesian3.fromDegrees(LLA[1]*180.0/Math.PI,LLA[0]*180.0/Math.PI,100000));var switchline=false;for(var j=1;j<sat.getNumGroundTrackLeadPts();j++)
{LLA=sat.getGroundTrackLlaLeadPt(j);if(LLA!=null)
{if(Math.abs(LLA[0]-LLA_old[0])<4.0)
{if(switchline==true)
Positions1.push(Cesium.Cartesian3.fromDegrees(LLA[1]*180.0/Math.PI,LLA[0]*180.0/Math.PI,100000));else
Positions.push(Cesium.Cartesian3.fromDegrees(LLA[1]*180.0/Math.PI,LLA[0]*180.0/Math.PI,100000));}
else
{var newLat=this.linearInterpDiscontLat(LLA_old[1],LLA_old[0],LLA[1],LLA[0]);if(LLA_old[0]>0)
{if(switchline==true)
Positions1.push(Cesium.Cartesian3.fromDegrees(newLat*180.0/Math.PI,180.0,100000));else
Positions.push(Cesium.Cartesian3.fromDegrees(newLat*180.0/Math.PI,180.0,100000));switchline=!switchline;if(switchline==true)
Positions1.push(Cesium.Cartesian3.fromDegrees(newLat*180.0/Math.PI,-180.0,100000));else
Positions.push(Cesium.Cartesian3.fromDegrees(newLat*180.0/Math.PI,-180.0,100000));if(switchline==true)
Positions1.push(Cesium.Cartesian3.fromDegrees(LLA[1]*180.0/Math.PI,LLA[0]*180.0/Math.PI,100000));else
Positions.push(Cesium.Cartesian3.fromDegrees(LLA[1]*180.0/Math.PI,LLA[0]*180.0/Math.PI,100000));}
else
{if(switchline==true)
Positions1.push(Cesium.Cartesian3.fromDegrees(newLat*180.0/Math.PI,-180.0,100000));else
Positions.push(Cesium.Cartesian3.fromDegrees(newLat*180.0/Math.PI,-180.0,100000));switchline=!switchline;if(switchline==true)
Positions1.push(Cesium.Cartesian3.fromDegrees(newLat*180.0/Math.PI,180.0,100000));else
Positions.push(Cesium.Cartesian3.fromDegrees(newLat*180.0/Math.PI,180.0,100000));if(switchline==true)
Positions1.push(Cesium.Cartesian3.fromDegrees(LLA[1]*180.0/Math.PI,LLA[0]*180.0/Math.PI,100000));else
Positions.push(Cesium.Cartesian3.fromDegrees(LLA[1]*180.0/Math.PI,LLA[0]*180.0/Math.PI,100000));}}}
LLA_old[0]=LLA[0];LLA_old[1]=LLA[1];}
this.line.setOrbitPositions(Positions,Positions1,Positions2,Positions3);this.line.drawline(vis);}
if(sat.getNumGroundTrackLagPts()>0)
{LLA=sat.getGroundTrackLlaLagPt(0);LLA_old[0]=LLA[0];LLA_old[1]=LLA[1];Positions2.push(Cesium.Cartesian3.fromDegrees(LLA[1]*180.0/Math.PI,LLA[0]*180.0/Math.PI,100000));var switchline=false;for(var j=1;j<sat.getNumGroundTrackLagPts();j++)
{LLA=sat.getGroundTrackLlaLagPt(j);if(LLA_old!=null)
{if(Math.abs(LLA[0]-LLA_old[0])<4.0)
{if(switchline==true)
Positions3.push(Cesium.Cartesian3.fromDegrees(LLA[1]*180.0/Math.PI,LLA[0]*180.0/Math.PI,100000));else
Positions2.push(Cesium.Cartesian3.fromDegrees(LLA[1]*180.0/Math.PI,LLA[0]*180.0/Math.PI,100000));}
else
{var newLat=this.linearInterpDiscontLat(LLA_old[1],LLA_old[0],LLA[1],LLA[0]);if(LLA_old[0]>0)
{if(switchline==true)
Positions3.push(Cesium.Cartesian3.fromDegrees(newLat*180.0/Math.PI,180.0,100000));else
Positions2.push(Cesium.Cartesian3.fromDegrees(newLat*180.0/Math.PI,180.0,100000));switchline=!switchline;if(switchline==true)
Positions3.push(Cesium.Cartesian3.fromDegrees(newLat*180.0/Math.PI,-180.0,100000));else
Positions2.push(Cesium.Cartesian3.fromDegrees(newLat*180.0/Math.PI,-180.0,100000));if(switchline==true)
Positions3.push(Cesium.Cartesian3.fromDegrees(LLA[1]*180.0/Math.PI,LLA[0]*180.0/Math.PI,100000));else
Positions2.push(Cesium.Cartesian3.fromDegrees(LLA[1]*180.0/Math.PI,LLA[0]*180.0/Math.PI,100000));}
else
{if(switchline==true)
Positions3.push(Cesium.Cartesian3.fromDegrees(newLat*180.0/Math.PI,-180.0,100000));else
Positions2.push(Cesium.Cartesian3.fromDegrees(newLat*180.0/Math.PI,-180.0,100000));switchline=!switchline;if(switchline==true)
Positions3.push(Cesium.Cartesian3.fromDegrees(newLat*180.0/Math.PI,180.0,100000));else
Positions2.push(Cesium.Cartesian3.fromDegrees(newLat*180.0/Math.PI,180.0,100000));if(switchline==true)
Positions3.push(Cesium.Cartesian3.fromDegrees(LLA[1]*180.0/Math.PI,LLA[0]*180.0/Math.PI,100000));else
Positions2.push(Cesium.Cartesian3.fromDegrees(LLA[1]*180.0/Math.PI,LLA[0]*180.0/Math.PI,100000));}}}
LLA_old[0]=LLA[0];LLA_old[1]=LLA[1];}
this.line.addOrbitPositions(Positions,Positions1,Positions2,Positions3);this.line.drawline(vis);}}
else{if(ecefeci=="ECI"){for(var i=0;i<this.prop.getNumGroundTrackLagPts();i++)
{var xyz=this.prop.getGroundTrackXyzLagPt(i);if(xyz!=null)
{Positions.push(toLATLON(parseFloat(xyz[0]),parseFloat(xyz[1]),parseFloat(xyz[2])));}}}
else{for(var i=0;i<this.prop.getNumGroundTrackLeadPts();i++)
{var xyz=this.prop.getGroundTrackLlaLeadPt(i);if(xyz!=null)
{Positions.push(Cesium.Cartesian3.fromRadians(parseFloat(xyz[1]-(0)),parseFloat(xyz[0]),parseFloat(xyz[2])));}}}
this.line.setOrbitPositions(Positions);this.line.drawline(vis);}}
SGP4.prototype.linearInterpDiscontLat=function(lat1,long1,lat2,long2){if(long1>long2)
{long2+=2*Math.PI;}
else
{long1+=2*Math.PI;}
return(lat1+(Math.PI-long1)*(lat2-lat1)/(long2-long1));}
SGP4.prototype.canDraw=function(){return this.isOnePosition;}
SGP4.prototype.getProp=function(){return this.prop;}
SGP4.prototype.getSatellite=function(){return this.satellite;}
SGP4.prototype.getOrbitline=function(){return this.line;}
SGP4.prototype.getOrbitcircle=function(){return this.circle;}
SGP4.prototype.getOrbitcone=function(){return this.cone;}
SGP4.prototype.getSGP4name=function(){return this.SGP4name;}
SGP4.prototype.getLLA=function(){return this.lla;}