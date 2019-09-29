function orbitline(viewer,positions,positions1,positions2,positions3,width,theColor){this.viewer=viewer;this.positions=positions;this.positions1=positions1;this.positions2=positions2;this.positions3=positions3;this.width=width;this.color=theColor;this.primitivesorbitlines=[];}
orbitline.prototype.resetline=function(){}
orbitline.prototype.addline=function(positions,positions1,positions2,positions3){this.Primlines=[];this.Primlines.push(new Cesium.GeometryInstance({geometry:new Cesium.SimplePolylineGeometry({positions:positions,width:this.width}),attributes:{color:Cesium.ColorGeometryInstanceAttribute.fromColor(this.color)}}));if(positions1&&positions1.length>1){this.Primlines.push(new Cesium.GeometryInstance({geometry:new Cesium.SimplePolylineGeometry({positions:positions1,width:this.width}),attributes:{color:Cesium.ColorGeometryInstanceAttribute.fromColor(this.color)}}));}
if(positions2&&positions2.length>1){this.Primlines.push(new Cesium.GeometryInstance({geometry:new Cesium.SimplePolylineGeometry({positions:positions2,width:this.width}),attributes:{color:Cesium.ColorGeometryInstanceAttribute.fromColor(this.color)}}));}
if(positions3&&positions3.length>1){this.Primlines.push(new Cesium.GeometryInstance({geometry:new Cesium.SimplePolylineGeometry({positions:positions3,width:this.width}),attributes:{color:Cesium.ColorGeometryInstanceAttribute.fromColor(this.color)}}));}
this.drawline(true);}
orbitline.prototype.removeline=function(){if(this.primitivesorbitlines.length>0){for(var i=0;i<this.primitivesorbitlines.length;i++)
this.viewer.scene.primitives.remove(this.primitivesorbitlines[i]);}
this.primitivesorbitlines=[];}
orbitline.prototype.drawline=function(visibility){if(visibility){this.primitivesorbitlines.push(new Cesium.Primitive({geometryInstances:this.Primlines,appearance:new Cesium.PerInstanceColorAppearance({flat:true,renderState:{lineWidth:Math.min(this.width,this.viewer.scene.maximumAliasedLineWidth)}}),allowPicking:false}));this.viewer.scene.primitives.add(this.primitivesorbitlines[this.primitivesorbitlines.length-1]);}
else{if(this.primitivesorbitlines.length>0){for(var i=0;i<this.primitivesorbitlines.length;i++)
this.viewer.scene.primitives.remove(this.primitivesorbitlines[i]);}
this.primitivesorbitlines=[];}}
orbitline.prototype.setColor=function(Color){this.color=Color;this.drawline(false);this.drawline(true);}
orbitline.prototype.setWidth=function(width){this.width=width;this.drawline(false);this.drawline(true);}
orbitline.prototype.setOrbitPositions=function(positions,positions1,positions2,positions3){this.positions=positions;this.positions1=positions1;this.positions2=positions2;this.positions3=positions3;this.removeline();this.addline(positions,positions1,positions2,positions3);}
orbitline.prototype.addOrbitPositions=function(positions,positions1,positions2,positions3){this.positions=positions;this.positions1=positions1;this.positions2=positions2;this.positions3=positions3;this.addline(positions,positions1,positions2,positions3);}