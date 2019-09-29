var Opt={};Opt.e80="e80";Opt.e96="e96";Opt.e00a="e00a";Opt.e00b="e00b";var Direction={};Direction.to="to";Direction.from="from";var J2kCoordinateConversion=(function(){var iau80rec=new Array(new Array(0,0,0,0,1,-171996,-174.2,92025,8.9,1),new Array(0,0,2,-2,2,-13187,-1.6,5736,-3.1,9),new Array(0,0,2,0,2,-2274,-0.2,977,-0.5,31),new Array(0,0,0,0,2,2062,0.2,-895,0.5,2),new Array(0,1,0,0,0,1426,-3.4,54,-0.1,10),new Array(1,0,0,0,0,712,0.1,-7,0,32),new Array(0,1,2,-2,2,-517,1.2,224,-0.6,11),new Array(0,0,2,0,1,-386,-0.4,200,0,33),new Array(1,0,2,0,2,-301,0,129,-0.1,34),new Array(0,-1,2,-2,2,217,-0.5,-95,0.3,12),new Array(1,0,0,-2,0,-158,0,-1,0,35),new Array(0,0,2,-2,1,129,0.1,-70,0,13),new Array(-1,0,2,0,2,123,0,-53,0,36),new Array(1,0,0,0,1,63,0.1,-33,0,38),new Array(0,0,0,2,0,63,0,-2,0,37),new Array(-1,0,2,2,2,-59,0,26,0,40),new Array(-1,0,0,0,1,-58,-0.1,32,0,39),new Array(1,0,2,0,1,-51,0,27,0,41),new Array(2,0,0,-2,0,48,0,1,0,14),new Array(-2,0,2,0,1,46,0,-24,0,3),new Array(0,0,2,2,2,-38,0,16,0,42),new Array(2,0,2,0,2,-31,0,13,0,45),new Array(2,0,0,0,0,29,0,-1,0,43),new Array(1,0,2,-2,2,29,0,-12,0,44),new Array(0,0,2,0,0,26,0,-1,0,46),new Array(0,0,2,-2,0,-22,0,0,0,15),new Array(-1,0,2,0,1,21,0,-10,0,47),new Array(0,2,0,0,0,17,-0.1,0,0,16),new Array(0,2,2,-2,2,-16,0.1,7,0,18),new Array(-1,0,0,2,1,16,0,-8,0,48),new Array(0,1,0,0,1,-15,0,9,0,17),new Array(1,0,0,-2,1,-13,0,7,0,49),new Array(0,-1,0,0,1,-12,0,6,0,19),new Array(2,0,-2,0,0,11,0,0,0,4),new Array(-1,0,2,2,1,-10,0,5,0,50),new Array(1,0,2,2,2,-8,0,3,0,54),new Array(0,-1,2,0,2,-7,0,3,0,53),new Array(0,0,2,2,1,-7,0,3,0,58),new Array(1,1,0,-2,0,-7,0,0,0,51),new Array(0,1,2,0,2,7,0,-3,0,52),new Array(-2,0,0,2,1,-6,0,3,0,20),new Array(0,0,0,2,1,-6,0,3,0,57),new Array(2,0,2,-2,2,6,0,-3,0,56),new Array(1,0,0,2,0,6,0,0,0,55),new Array(1,0,2,-2,1,6,0,-3,0,58),new Array(0,0,0,-2,1,-5,0,3,0,60),new Array(0,-1,2,-2,1,-5,0,3,0,21),new Array(2,0,2,0,1,-5,0,3,0,62),new Array(1,-1,0,0,0,5,0,0,0,61),new Array(1,0,0,-1,0,-4,0,0,0,24),new Array(0,0,0,1,0,-4,0,0,0,65),new Array(0,1,0,-2,0,-4,0,0,0,63),new Array(1,0,-2,0,0,4,0,0,0,64),new Array(2,0,0,-2,1,4,0,-2,0,22),new Array(0,1,2,-2,1,4,0,-2,0,23),new Array(1,1,0,0,0,-3,0,0,0,66),new Array(1,-1,0,-1,0,-3,0,0,0,6),new Array(-1,-1,2,2,2,-3,0,1,0,69),new Array(0,-1,2,2,2,-3,0,1,0,72),new Array(1,-1,2,0,2,-3,0,1,0,68),new Array(3,0,2,0,2,-3,0,1,0,71),new Array(-2,0,2,0,2,-3,0,1,0,5),new Array(1,0,2,0,0,3,0,0,0,67),new Array(-1,0,2,4,2,-2,0,1,0,82),new Array(1,0,0,0,2,-2,0,1,0,76),new Array(-1,0,2,-2,1,-2,0,1,0,74),new Array(0,-2,2,-2,1,-2,0,1,0,7),new Array(-2,0,0,0,1,-2,0,1,0,70),new Array(2,0,0,0,1,2,0,-1,0,75),new Array(3,0,0,0,0,2,0,0,0,77),new Array(1,1,2,0,2,2,0,-1,0,73),new Array(0,0,2,1,2,2,0,-1,0,78),new Array(1,0,0,2,1,-1,0,0,0,91),new Array(1,0,2,2,1,-1,0,1,0,85),new Array(1,1,0,-2,1,-1,0,0,0,102),new Array(0,1,0,2,0,-1,0,0,0,99),new Array(0,1,2,-2,0,-1,0,0,0,30),new Array(0,1,-2,2,0,-1,0,0,0,27),new Array(1,0,-2,2,0,-1,0,0,0,103),new Array(1,0,-2,-2,0,-1,0,0,0,100),new Array(1,0,2,-2,0,-1,0,0,0,94),new Array(1,0,0,-4,0,-1,0,0,0,80),new Array(2,0,0,-4,0,-1,0,0,0,83),new Array(0,0,2,4,2,-1,0,0,0,105),new Array(0,0,2,-1,2,-1,0,0,0,98),new Array(-2,0,2,4,2,-1,0,1,0,86),new Array(2,0,2,2,2,-1,0,0,0,90),new Array(0,-1,2,0,1,-1,0,0,0,101),new Array(0,0,-2,0,1,-1,0,0,0,97),new Array(0,0,4,-2,2,1,0,0,0,92),new Array(0,1,0,0,2,1,0,0,0,28),new Array(1,1,2,-2,2,1,0,-1,0,84),new Array(3,0,2,-2,2,1,0,0,0,93),new Array(-2,0,2,2,2,1,0,-1,0,81),new Array(-1,0,0,0,2,1,0,-1,0,79),new Array(0,0,-2,2,1,1,0,0,0,26),new Array(0,1,2,0,1,1,0,0,0,95),new Array(-1,0,4,0,2,1,0,0,0,87),new Array(2,1,0,-2,0,1,0,0,0,25),new Array(2,0,0,2,0,1,0,0,0,104),new Array(2,0,2,-2,1,1,0,-1,0,89),new Array(2,0,-2,0,1,1,0,0,0,8),new Array(1,-1,0,-2,0,1,0,0,0,88),new Array(-1,0,0,1,1,1,0,0,0,29),new Array(-1,-1,0,2,1,1,0,0,0,96),new Array(0,1,0,1,0,1,0,0,0,106));return{teme_j2k:function
(direct,ttt,order,eqeterms,optteme)
{var tempmat=[[],[],[]];var prec=this.precess(ttt,Opt.e80);var nutteme=this.truemean(ttt,order,eqeterms,optteme);if(direct==Direction.to)
{tempmat=this.matmult(prec,nutteme,3,3,3);}
else
{var nuttemep=this.mattrans(nutteme,3,3);alert("nuttemep: "+nuttemep);var precp=this.mattrans(prec,3,3);alert("precp: "+precp);tempmat=this.matmult(nuttemep,precp,3,3,3);alert("tempmat: "+tempmat);}
return tempmat;},tod_j2000:function
(direct,ttt,ddpsi,ddeps,nutTerms)
{var prec,nut,tempmat,nutp,precp;var psia,wa,epsa,chia;prec=this.precess(ttt,Opt.e80);nut=this.nutation(ttt,ddpsi,ddeps,'c',nutTerms);if(direct==Direction.to)
{tempmat=this.matmult(prec,nut,3,3,3);}
else
{nutp=this.mattrans(nut,3,3);precp=this.mattrans(prec,3,3);tempmat=this.matmult(nutp,precp,3,3,3);}
return tempmat;},mod_j2000:function
(direct,ttt)
{var prec,precp;var psia,wa,epsa,chia;prec=this.precess(ttt,Opt.e80);if(direct==Direction.to)
{}
else
{prec=this.mattrans(prec,3,3);}
return prec;},precess:function
(ttt,opt)
{var prec=[[],[],[]];var p1=[];var p2=[];var p3=[];var p4=[];var tr1=[];var tr2=[];var psia,wa,epsa,chia;var convrt,zeta,theta,z,coszeta,sinzeta,costheta,sintheta,cosz,sinz,oblo;convrt=Math.PI/(180.0*3600.0);if((opt==Opt.e80)|(opt==Opt.e96))
{oblo=84381.448;psia=((-0.001147*ttt-1.07259)*ttt+5038.7784)*ttt;wa=((-0.007726*ttt+0.05127)*ttt)+oblo;epsa=((0.001813*ttt-0.00059)*ttt-46.8150)*ttt+oblo;chia=((-0.001125*ttt-2.38064)*ttt+10.5526)*ttt;zeta=((0.017998*ttt+0.30188)*ttt+2306.2181)*ttt;theta=((-0.041833*ttt-0.42665)*ttt+2004.3109)*ttt;z=((0.018203*ttt+1.09468)*ttt+2306.2181)*ttt;}
else
{oblo=84381.406;psia=((((-0.0000000951*ttt+0.000132851)*ttt-0.00114045)*ttt-1.0790069)*ttt+5038.481507)*ttt;wa=((((0.0000003337*ttt-0.000000467)*ttt-0.00772503)*ttt+0.0512623)*ttt-0.025754)*ttt+oblo;epsa=((((-0.0000000434*ttt-0.000000576)*ttt+0.00200340)*ttt-0.0001831)*ttt-46.836769)*ttt+oblo;chia=((((-0.0000000560*ttt+0.000170663)*ttt-0.00121197)*ttt-2.3814292)*ttt+10.556403)*ttt;zeta=((((-0.0000003173*ttt-0.000005971)*ttt+0.01801828)*ttt+0.2988499)*ttt+2306.083227)*ttt+2.650545;theta=((((-0.0000001274*ttt-0.000007089)*ttt-0.04182264)*ttt-0.4294934)*ttt+2004.191903)*ttt;z=((((0.0000002904*ttt-0.000028596)*ttt+0.01826837)*ttt+1.0927348)*ttt+2306.077181)*ttt-2.650545;}
psia=psia*convrt;wa=wa*convrt;oblo=oblo*convrt;epsa=epsa*convrt;chia=chia*convrt;zeta=zeta*convrt;theta=theta*convrt;z=z*convrt;if((opt==Opt.e80)|(opt==Opt.e96))
{coszeta=Math.cos(zeta);sinzeta=Math.sin(zeta);costheta=Math.cos(theta);sintheta=Math.sin(theta);cosz=Math.cos(z);sinz=Math.sin(z);prec[0]=[];prec[0][0]=coszeta*costheta*cosz-sinzeta*sinz;prec[0][1]=coszeta*costheta*sinz+sinzeta*cosz;prec[0][2]=coszeta*sintheta;prec[1]=[];prec[1][0]=-sinzeta*costheta*cosz-coszeta*sinz;prec[1][1]=-sinzeta*costheta*sinz+coszeta*cosz;prec[1][2]=-sinzeta*sintheta;prec[2]=[];prec[2][0]=-sintheta*cosz;prec[2][1]=-sintheta*sinz;prec[2][2]=costheta;}
else
{p1=this.rot3mat(-chia);p2=this.rot1mat(wa);p3=this.rot3mat(psia);p4=this.rot1mat(-oblo);tr1=this.matmult(p4,p3,3,3,3);tr2=this.matmult(tr1,p2,3,3,3);prec=this.matmult(tr2,p1,3,3,3);}
return prec;},nutation:function
(ttt,ddpsi,ddeps,nutopt,nutTerms)
{var nut=[];var deltapsi=0,deltaeps=0,trueeps=0,meaneps=0,omega=0;var deg2rad,cospsi,sinpsi,coseps,sineps,costrueeps,sintrueeps;var l,l1,f,d,lonmer,lonven,lonear,lonmar,lonjup,lonsat,lonurn,lonnep,precrate;var i;var tempval;deg2rad=Math.PI/180.0;meaneps=((0.001813*ttt-0.00059)*ttt-46.8150)*ttt+84381.448;meaneps=(meaneps/3600.0)%360.0;meaneps=meaneps*deg2rad;if(nutopt=='c')
{var tmp=this.fundarg(ttt,Opt.e80);l=tmp[0];l1=tmp[1];f=tmp[2];d=tmp[3];omega=tmp[4];lonmer=tmp[5];lonven=tmp[6];lonear=tmp[7];lonmar=tmp[8];lonjup=tmp[9];lonsat=tmp[10];lonurn=tmp[11];lonnep=tmp[12];precrate=tmp[13];deltapsi=0.0;deltaeps=0.0;if(nutTerms>106)
{nutTerms=106;}
for(i=nutTerms;i>=1;i--)
{tempval=this.iar80(i,1)*l+this.iar80(i,2)*l1+this.iar80(i,3)*f+
this.iar80(i,4)*d+this.iar80(i,5)*omega;deltapsi=deltapsi+(this.rar80(i,1)+this.rar80(i,2)*ttt)*Math.sin(tempval);deltaeps=deltaeps+(this.rar80(i,3)+this.rar80(i,4)*ttt)*Math.cos(tempval);}
deltapsi=((deltapsi+ddpsi/deg2rad)%360.0)*deg2rad;deltaeps=((deltaeps+ddeps/deg2rad)%360.0)*deg2rad;}
trueeps=meaneps+deltaeps;cospsi=Math.cos(deltapsi);sinpsi=Math.sin(deltapsi);coseps=Math.cos(meaneps);sineps=Math.sin(meaneps);costrueeps=Math.cos(trueeps);sintrueeps=Math.sin(trueeps);nut[0][0]=cospsi;nut[0][1]=costrueeps*sinpsi;nut[0][2]=sintrueeps*sinpsi;nut[1][0]=-coseps*sinpsi;nut[1][1]=costrueeps*coseps*cospsi+sintrueeps*sineps;nut[1][2]=sintrueeps*coseps*cospsi-sineps*costrueeps;nut[2][0]=-sineps*sinpsi;nut[2][1]=costrueeps*sineps*cospsi-sintrueeps*coseps;nut[2][2]=sintrueeps*sineps*cospsi+costrueeps*coseps;return nut;},fundarg:function
(ttt,opt)
{var deg2rad;var l=0,l1=0,f=0,d=0,omega=0,lonmer=0,lonven=0,lonear=0,lonmar=0,lonjup=0,lonsat=0,lonurn=0,lonnep=0,precrate=0;deg2rad=Math.PI/180.0;if(opt==Opt.e00a)
{l=((((-0.00024470*ttt+0.051635)*ttt+31.8792)*ttt+1717915923.2178)*ttt+485868.249036)/3600.0;l1=((((-0.00001149*ttt+0.000136)*ttt-0.5532)*ttt+129596581.0481)*ttt+1287104.793048)/3600.0;f=((((+0.00000417*ttt-0.001037)*ttt-12.7512)*ttt+1739527262.8478)*ttt+335779.526232)/3600.0;d=((((-0.00003169*ttt+0.006593)*ttt-6.3706)*ttt+1602961601.2090)*ttt+1072260.703692)/3600.0;omega=((((-0.00005939*ttt+0.007702)*ttt+7.4722)*ttt-6962890.5431)*ttt+450160.398036)/3600.0;lonmer=(908103.259872+538101628.688982*ttt)/3600.0;lonven=(655127.283060+210664136.433548*ttt)/3600.0;lonear=(361679.244588+129597742.283429*ttt)/3600.0;lonmar=(1279558.798488+68905077.493988*ttt)/3600.0;lonjup=(123665.467464+10925660.377991*ttt)/3600.0;lonsat=(180278.799480+4399609.855732*ttt)/3600.0;lonurn=(1130598.018396+1542481.193933*ttt)/3600.0;lonnep=(1095655.195728+786550.320744*ttt)/3600.0;precrate=((1.112022*ttt+5028.8200)*ttt)/3600.0;}
if(opt==Opt.e00b)
{l=(1717915923.2178*ttt+485868.249036)/3600.0;l1=(129596581.0481*ttt+1287104.79305)/3600.0;f=(1739527262.8478*ttt+335779.526232)/3600.0;d=(1602961601.2090*ttt+1072260.70369)/3600.0;omega=(-6962890.5431*ttt+450160.398036)/3600.0;lonmer=0.0;lonven=0.0;lonear=0.0;lonmar=0.0;lonjup=0.0;lonsat=0.0;lonurn=0.0;lonnep=0.0;precrate=0.0;}
if(opt==Opt.e96)
{l=((((-0.00024470*ttt+0.051635)*ttt+31.8792)*ttt+1717915923.2178)*ttt)/3600.0+134.96340251;l1=((((-0.00001149*ttt-0.000136)*ttt-0.5532)*ttt+129596581.0481)*ttt)/3600.0+357.52910918;f=((((+0.00000417*ttt+0.001037)*ttt-12.7512)*ttt+1739527262.8478)*ttt)/3600.0+93.27209062;d=((((-0.00003169*ttt+0.006593)*ttt-6.3706)*ttt+1602961601.2090)*ttt)/3600.0+297.85019547;omega=((((-0.00005939*ttt+0.007702)*ttt+7.4722)*ttt-6962890.2665)*ttt)/3600.0+125.04455501;lonmer=0.0;lonven=181.979800853+58517.8156748*ttt;lonear=100.466448494+35999.3728521*ttt;lonmar=355.433274605+19140.299314*ttt;lonjup=34.351483900+3034.90567464*ttt;lonsat=50.0774713998+1222.11379404*ttt;lonurn=0.0;lonnep=0.0;precrate=(0.0003086*ttt+1.39697137214)*ttt;}
if(opt==Opt.e80)
{l=((((0.064)*ttt+31.310)*ttt+1717915922.6330)*ttt)/3600.0+134.96298139;l1=((((-0.012)*ttt-0.577)*ttt+129596581.2240)*ttt)/3600.0+357.52772333;f=((((0.011)*ttt-13.257)*ttt+1739527263.1370)*ttt)/3600.0+93.27191028;d=((((0.019)*ttt-6.891)*ttt+1602961601.3280)*ttt)/3600.0+297.85036306;omega=((((0.008)*ttt+7.455)*ttt-6962890.5390)*ttt)/3600.0+125.04452222;lonmer=252.3+149472.0*ttt;lonven=179.9+58517.8*ttt;lonear=98.4+35999.4*ttt;lonmar=353.3+19140.3*ttt;lonjup=32.3+3034.9*ttt;lonsat=48.0+1222.1*ttt;lonurn=0.0;lonnep=0.0;precrate=0.0;}
l=(l%360.0)*deg2rad;l1=(l1%360.0)*deg2rad;f=(f%360.0)*deg2rad;d=(d%360.0)*deg2rad;omega=(omega%360.0)*deg2rad;lonmer=(lonmer%360.0)*deg2rad;lonven=(lonven%360.0)*deg2rad;lonear=(lonear%360.0)*deg2rad;lonmar=(lonmar%360.0)*deg2rad;lonjup=(lonjup%360.0)*deg2rad;lonsat=(lonsat%360.0)*deg2rad;lonurn=(lonurn%360.0)*deg2rad;lonnep=(lonnep%360.0)*deg2rad;precrate=(precrate%360.0)*deg2rad;return new Array(l,l1,f,d,omega,lonmer,lonven,lonear,lonmar,lonjup,lonsat,lonurn,lonnep,precrate);},mattrans:function
(mat1,mat1r,mat1c)
{var row,col;var mat2=[];for(row=0;row<mat1r;row++)
{for(col=0;col<mat1c;col++)
mat2[col][row]=mat1[row][col];}
return mat2;},matvecmult:function
(mat,vec)
{var row,col,ktr;var vecout=[];for(row=0;row<=2;row++)
{vecout[row]=0.0;for(ktr=0;ktr<=2;ktr++)
vecout[row]=vecout[row]+mat[row][ktr]*vec[ktr];}
return vecout;},matmult:function
(mat1,mat2,mat1r,mat1c,mat2c)
{var mat3=[[],[],[]];var row,col,ktr;for(row=0;row<mat1r;row++)
{for(col=0;col<mat2c;col++)
{mat3[row][col]=0.0;for(ktr=0;ktr<mat1c;ktr++)
mat3[row][col]=mat3[row][col]+mat1[row][ktr]*mat2[ktr][col];}}
return mat3;},rot1mat:function
(xval)
{var outmat=[];var c,s;c=Math.cos(xval);s=Math.sin(xval);outmat[0][0]=1.0;outmat[0][1]=0.0;outmat[0][2]=0.0;outmat[1][0]=0.0;outmat[1][1]=c;outmat[1][2]=s;outmat[2][0]=0.0;outmat[2][1]=-s;outmat[2][2]=c;return outmat;},rot2mat:function
(xval)
{var outmat=[];var c,s;c=Math.cos(xval);s=Math.sin(xval);outmat[0][0]=c;outmat[0][1]=0.0;outmat[0][2]=-s;outmat[1][0]=0.0;outmat[1][1]=1.0;outmat[1][2]=0.0;outmat[2][0]=s;outmat[2][1]=0.0;outmat[2][2]=c;return outmat;},rot3mat:function
(xval)
{var outmat=[];var c,s;c=Math.cos(xval);s=Math.sin(xval);outmat[0][0]=c;outmat[0][1]=s;outmat[0][2]=0.0;outmat[1][0]=-s;outmat[1][1]=c;outmat[1][2]=0.0;outmat[2][0]=0.0;outmat[2][1]=0.0;outmat[2][2]=1.0;return outmat;},truemean:function
(ttt,order,eqeterms,opt)
{var nutteme=[[],[],[]];var deg2rad,l,l1,f,d,omega,cospsi,sinpsi,coseps,sineps,costrueeps,sintrueeps,meaneps,deltapsi,deltaeps,trueeps;var i;var nut=[[],[],[]];var st=[[],[],[]];var tempval,jdttt,eqe;deg2rad=Math.PI/180.0;meaneps=((0.001813*ttt-0.00059)*ttt-46.8150)*ttt+84381.448;meaneps=meaneps/3600.0%360.0;meaneps=meaneps*deg2rad;l=((((0.064)*ttt+31.310)*ttt+1717915922.6330)*ttt)/3600.0+134.96298139;l1=((((-0.012)*ttt-0.577)*ttt+129596581.2240)*ttt)/3600.0+357.52772333;f=((((0.011)*ttt-13.257)*ttt+1739527263.1370)*ttt)/3600.0+93.27191028;d=((((0.019)*ttt-6.891)*ttt+1602961601.3280)*ttt)/3600.0+297.85036306;omega=((((0.008)*ttt+7.455)*ttt-6962890.5390)*ttt)/3600.0+125.04452222;l=(l%360.0)*deg2rad;l1=(l1%360.0)*deg2rad;f=(f%360.0)*deg2rad;d=(d%360.0)*deg2rad;omega=(omega%360.0)*deg2rad;deltapsi=0.0;deltaeps=0.0;for(i=1;i<=order;i++)
{tempval=this.iar80(i,1)*l+this.iar80(i,2)*l1+this.iar80(i,3)*f+
this.iar80(i,4)*d+this.iar80(i,5)*omega;deltapsi=deltapsi+(this.rar80(i,1)+this.rar80(i,2)*ttt)*Math.sin(tempval);deltaeps=deltaeps+(this.rar80(i,3)+this.rar80(i,4)*ttt)*Math.cos(tempval);}
deltapsi=(deltapsi%360.0)*deg2rad;deltaeps=(deltaeps%360.0)*deg2rad;trueeps=meaneps+deltaeps;cospsi=Math.cos(deltapsi);sinpsi=Math.sin(deltapsi);coseps=Math.cos(meaneps);sineps=Math.sin(meaneps);costrueeps=Math.cos(trueeps);sintrueeps=Math.sin(trueeps);jdttt=ttt*36525.0+2451545.0;if((jdttt>2450449.5)&&(eqeterms>0))
eqe=deltapsi*Math.cos(meaneps)
+0.00264*Math.PI/(3600*180)*Math.sin(omega)
+0.000063*Math.PI/(3600*180)*Math.sin(2.0*omega);else
eqe=deltapsi*Math.cos(meaneps);nut[0][0]=cospsi;nut[0][1]=costrueeps*sinpsi;if(opt=='b')
nut[0][1]=0.0;nut[0][2]=sintrueeps*sinpsi;nut[1][0]=-coseps*sinpsi;if(opt=='b')
nut[1][0]=0.0;nut[1][1]=costrueeps*coseps*cospsi+sintrueeps*sineps;nut[1][2]=sintrueeps*coseps*cospsi-sineps*costrueeps;nut[2][0]=-sineps*sinpsi;nut[2][1]=costrueeps*sineps*cospsi-sintrueeps*coseps;nut[2][2]=sintrueeps*sineps*cospsi+costrueeps*coseps;st[0][0]=Math.cos(eqe);st[0][1]=-Math.sin(eqe);st[0][2]=0.0;st[1][0]=Math.sin(eqe);st[1][1]=Math.cos(eqe);st[1][2]=0.0;st[2][0]=0.0;st[2][1]=0.0;st[2][2]=1.0;nutteme=MathUtils.mults(st,nut);if(opt=='c')
{nutteme[0][0]=1.0;nutteme[0][1]=0.0;nutteme[0][2]=deltapsi*sineps;nutteme[1][0]=0.0;nutteme[1][1]=1.0;nutteme[1][2]=deltaeps;nutteme[2][0]=-deltapsi*sineps;nutteme[2][1]=-deltaeps;nutteme[2][2]=1.0;}
return nutteme;},rar80:function(row,index)
{return iau80rec[row-1][index+4]*0.0001/3600.0;},iar80:function(row,index)
{return iau80rec[row-1][index-1];}}})();