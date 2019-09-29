var Kepler=(function(){return{state:function(GM,kepElements,dt)
{return states(GM,kepElements[0],kepElements[1],kepElements[2],kepElements[3],kepElements[4],kepElements[5],dt);},states:function(GM,a,e,i,Omega,omega,M0,dt)
{var M;var n;var E,cosE,sinE;var fac,R,V;var r=[];var v=[];var state=[];var Rx=[[],[],[]];var Rz=[[],[],[]];var PQW=[[],[],[]];if(dt==0.0)
{M=M0;}else
{n=Math.sqrt(GM/(a*a*a));M=M0+n*dt;}
E=EccAnom(M,e);cosE=Math.cos(E);sinE=Math.sin(E);fac=Math.sqrt((1.0-e)*(1.0+e));R=a*(1.0-e*cosE);V=Math.sqrt(GM*a)/R;r[0]=a*(cosE-e);r[1]=a*fac*sinE;r[2]=0.0;v[0]=-V*sinE;v[1]=+V*fac*cosE;v[2]=0.0;Rx=MathUtils.R_x(-i);Rz=MathUtils.R_z(-Omega);PQW=MathUtils.mult(Rz,Rx);Rz=MathUtils.R_z(-omega);PQW=MathUtils.mult(PQW,Rz);r=MathUtils.mult(PQW,r);v=MathUtils.mult(PQW,v);state[0]=r[0];state[1]=r[1];state[2]=r[2];state[3]=v[0];state[4]=v[1];state[5]=v[2];return state;},EccAnom:function(M,e)
{var maxit=15;var eps=100.0*2.22E-16;var i=0;var E,f;M=MathUtils.Modulo(M,2.0*Math.PI);if(e<0.8)
E=M;else
E=Math.PI;do
{f=E-e*Math.sin(E)-M;E=E-f/(1.0-e*Math.cos(E));++i;if(i==maxit)
{alert(" convergence problems in EccAnom\n");break;}}while(Math.abs(f)>eps);return E;},SingularOsculatingElementsEarth:function(state)
{var r=new Array(state.state[1],state.state[2],state.state[3]);var v=new Array(state.state[4],state.state[5],state.state[6]);return SingularOsculatingElements(AstroConst.GM_Earth,r,v);},SingularOsculatingElements:function(GM,state)
{var r=new Array(state[0],state[1],state[2]);var v=new Array(state[3],state[4],state[5]);return SingularOsculatingElementss(GM,r,v);},SingularOsculatingElementss(GM,r,v)
{var h=[];var H,u,R;var eCosE,eSinE,e2,E,nu;var a,e,i,Omega,omega,M;h=MathUtils.cross(r,v);H=MathUtils.norm(h);Omega=Math.atan2(h[0],-h[1]);Omega=Omega%(Math.PI*2.0);i=Math.atan2(Math.sqrt(h[0]*h[0]+h[1]*h[1]),h[2]);u=Math.atan2(r[2]*H,-r[0]*h[1]+r[1]*h[0]);R=MathUtils.norm(r);a=1.0/(2.0/R-MathUtils.dot(v,v)/GM);eCosE=1.0-R/a;eSinE=MathUtils.dot(r,v)/Math.sqrt(GM*a);e2=eCosE*eCosE+eSinE*eSinE;e=Math.sqrt(e2);E=Math.atan2(eSinE,eCosE);M=(E-eSinE)%(2.0*Math.PI);nu=Math.atan2(Math.sqrt(1.0-e2)*eSinE,eCosE-e2);omega=(u-nu)%(2.0*Math.PI);return(new Array(a,e,i,Omega,omega,M));},CalculatePeriod:function(GM,r,v)
{var R=MathUtils.norm(r);var a=1.0/(2.0/R-MathUtils.dot(v,v)/GM);return(2.0*Math.PI*Math.sqrt(a*a*a/GM));}}})();