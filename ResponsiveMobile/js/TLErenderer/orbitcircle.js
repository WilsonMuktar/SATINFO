function orbitcircle(viewer,position,mGroundRange,theColor){this.position=position;this.groundrange=mGroundRange;this.color=theColor;this.circle=viewer.entities.add({position:this.position,ellipse:{semiMinorAxis:this.groundrange,semiMajorAxis:this.groundrange,height:0,material:this.color,fill:true,outline:true,outlineColor:Cesium.Color.White,outlineWidth:2.0,granularity:Cesium.Math.RADIANS_PER_DEGREE},show:false,allowPicking:false});}
orbitcircle.prototype.drawCircle=function(visibility){this.circle.show=visibility;}
orbitcircle.prototype.setGroundRange=function(Groundrange){this.groundrange=Groundrange;this.circle.ellipse.height=Groundrange;}
orbitcircle.prototype.setColor=function(Color){this.color=color;this.circle.ellipse.material=Color;}
orbitcircle.prototype.setFill=function(fill){this.circle.ellipse.fill=fill;this.circle.ellipse.outline=true;}
orbitcircle.prototype.setPosition=function(position){this.position=position;this.circle.position=position;}