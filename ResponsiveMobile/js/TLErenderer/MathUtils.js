var MathUtils=(function(){function MathUtils(){}
return{mults:function(a,b)
{var c=[[],[],[]];for(var i=0;i<3;i++)
{for(var j=0;j<3;j++)
{c[i][j]=0.0;for(var k=0;k<3;k++)
{c[i][j]+=a[i][k]*b[k][j];}}}
return c;},mult:function(a,b)
{var c=[];for(var i=0;i<b.length;i++)
{c[i]=0.0;for(var k=0;k<b.length;k++)
{c[i]+=a[i][k]*b[k];}}
return c;},dot:function(a,b)
{var c=0;for(var i=0;i<3;i++)
{c+=a[i]*b[i];}
return c;},transpose:function(a)
{var c=[[],[],[]];for(var i=0;i<3;i++)
{for(var k=0;k<3;k++)
{c[i][k]=a[k][i];}}
return c;},sub:function(a,b)
{var c=[];for(var i=0;i<3;i++)
{c[i]=a[i]-b[i];}
return c;},add:function(a,b)
{var c=[];for(var i=0;i<3;i++)
{c[i]=a[i]+b[i];}
return c;},norm:function(a)
{var c=0.0;for(var i=0;i<a.length;i++)
{c+=a[i]*a[i];}
return Math.sqrt(c);},scale:function(a,b)
{var c=[];for(var i=0;i<3;i++)
{c[i]=a[i]*b;}
return c;},cross:function(left,right)
{if((left.length!=3)||(right.length!=3))
{alert("ERROR: Invalid dimension in Cross(Vector,Vector)");}
var Result=[];Result[0]=left[1]*right[2]-left[2]*right[1];Result[1]=left[2]*right[0]-left[0]*right[2];Result[2]=left[0]*right[1]-left[1]*right[0];return Result;},Frac:function(x)
{return x-Math.floor(x);},Modulo:function(x,y)
{return y*Frac(x/y);},UnitVector:function(vec)
{var n=vec.length;var unitVect=[];var normVec=MathUtils.norm(vec);unitVect=MathUtils.scale(vec,1.0/normVec);return unitVect;},R_x:function(Angle)
{var C=Math.cos(Angle);var S=Math.sin(Angle);var U=[[],[],[]];U[0][0]=1.0;U[0][1]=0.0;U[0][2]=0.0;U[1][0]=0.0;U[1][1]=+C;U[1][2]=+S;U[2][0]=0.0;U[2][1]=-S;U[2][2]=+C;return U;},R_y:function(Angle)
{var C=Math.cos(Angle);var S=Math.sin(Angle);var U=[[],[],[]];U[0][0]=+C;U[0][1]=0.0;U[0][2]=-S;U[1][0]=0.0;U[1][1]=1.0;U[1][2]=0.0;U[2][0]=+S;U[2][1]=0.0;U[2][2]=+C;return U;},R_z:function(Angle)
{var C=Math.cos(Angle);var S=Math.sin(Angle);var U=[[],[],[]];U[0][0]=+C;U[0][1]=+S;U[0][2]=0.0;U[1][0]=-S;U[1][1]=+C;U[1][2]=0.0;U[2][0]=0.0;U[2][1]=0.0;U[2][2]=1.0;return U;}}})();