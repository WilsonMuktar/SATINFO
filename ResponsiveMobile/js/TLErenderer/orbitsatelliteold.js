function orbitsatellite(viewer,name,position){this.name=name;this.position=position;this.satellite=viewer.entities.add({name:this.name,position:this.position,point:{color:Cesium.Color.YELLOW,pixelSize:10,eyeOffset:new Cesium.ConstantProperty(new Cesium.Cartesian3(0,0,-150000)),outlineWidth:0,show:true,},label:{text:this.name,scale:0.5,eyeOffset:new Cesium.ConstantProperty(new Cesium.Cartesian3(0,0,-150000)),fillColor:Cesium.Color.WHITE,outlineWidth:0,show:true,},allowPicking:true});this.satellite.label.pixelOffset=new Cesium.Cartesian2(30.0,-25.0);this.satellite.label.font='bold 20px/12px Arial,sans-serif';if(this.name.indexOf("FOC")!=-1){this.setFOCColor();}}
orbitsatellite.prototype.drawSatellite=function(visibility){this.satellite.point.show=visibility;}
orbitsatellite.prototype.drawSatellitelab=function(visibility){if(visibility)
this.satellite.label.fillColor=Cesium.Color.WHITE;else
this.satellite.label.fillColor=Cesium.Color.TRANSPARENT;}
orbitsatellite.prototype.setSatelliteAttribute=function(position){this.position=position;this.satellite.position=position;}
orbitsatellite.prototype.setFOCColor=function(){this.satellite.point.color=Cesium.Color.GREEN;}
orbitsatellite.prototype.getSatelliteLabel=function(){return this.satellite.label;}
orbitsatellite.prototype.getSatelliteName=function(){return this.satellite.name;}