function orbitgsline(view){this.viewer=view;this.GroundStation=[];this.GSlines=[];this.primitivesGS=[];}
orbitgsline.prototype.createGS=function(position,nama){if(nama==undefined)
nama="GroundStation";this.GroundStation.push(this.viewer.entities.add({name:nama,position:position,point:{color:Cesium.Color.RED,pixelSize:10,eyeOffset:new Cesium.ConstantProperty(new Cesium.Cartesian3(0,0,-1500000)),},label:{text:nama,scale:0.5,fillColor:Cesium.Color.WHITE,outlineWidth:0,outlineColor:Cesium.Color.RED,},show:true,allowPicking:false}));}
orbitgsline.prototype.removeGS=function(position){if(this.GroundStation!=null&&this.GroundStation.length>0){for(var i=0;i<this.GroundStation.length;i++)
this.viewer.entities.remove(this.GroundStation[i]);}
this.GroundStation=[];if(this.primitivesGS!=null&&this.primitivesGS.length>0){for(var i=0;i<this.primitivesGS.length;i++)
this.viewer.scene.primitives.remove(this.primitivesGS[i]);}
this.primitivesGS=[];}
orbitgsline.prototype.createGSLine=function(positions){this.GSlines.push(new Cesium.GeometryInstance({geometry:new Cesium.PolylineGeometry({positions:positions,width:0.5,vertexFormat:Cesium.PolylineMaterialAppearance.VERTEX_FORMAT,followSurface:false})}));}
orbitgsline.prototype.drawGSLine=function(){this.primitivesGS.push(new Cesium.Primitive({geometryInstances:this.GSlines,allowPicking:false,appearance:new Cesium.PolylineMaterialAppearance({material:new Cesium.Material({fabric:{type:'Color',uniforms:{color:Cesium.Color.YELLOW}}})})}));this.viewer.scene.primitives.add(this.primitivesGS[this.primitivesGS.length-1]);this.GSlines=[];}