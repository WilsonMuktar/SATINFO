function includeJs(jsFilePath){var js=document.createElement("script");js.type="text/javascript";js.src=jsFilePath;document.body.appendChild(js);}
function parser(tle){const lines=splitLines(tle)
const isValid=R.reduce((m,e)=>R.and(m,checksum(e)),true,R.takeLast(2,lines))
if(!isValid){throw new Error('TLE has invalid checksum(s)')}
if(isThreeLong(lines)){return Object.assign({},line0(lines[0]),line1(lines[1]),line2(lines[2]))}else{return Object.assign({},line1(lines[0]),line2(lines[1]))}}
const splitLines=R.split(/[\r\n]+/)
const isThreeLong=R.compose(R.equals(3),R.length)
const removeLineNumber=R.when(R.compose(R.equals('0 '),R.slice(0,2)),R.slice(2,Infinity))
const line0=R.compose(R.objOf('name'),removeLineNumber)
const year2to4=R.ifElse(R.gt(56),R.add(2000),R.add(1900))
function doyToDate(year,doy){const seconds=doy*24*3600
const microseconds=Math.round((seconds-Math.floor(seconds))*1e6)
return new Date(Date.UTC(year,0,0)+Math.floor(seconds)*1e3).toISOString().replace('000',microseconds)}
function parseValue(str,decimalPointAssumed){return parseFloat(str.slice(0,1)+(decimalPointAssumed?'.':'')+str.slice(1,-2)+'e'+str.slice(-2))}
function line1(line){var result=[];result[0]=parseInt(line.substr(0,1));result[1]=parseInt(line.substr(2,5));result[2]=line.substr(7,1);result[3]=parseInt(line.substr(9,2));result[4]=parseInt(line.substr(11,3));result[5]=line.substr(14,3);result[6]=parseInt(line.substr(18,2));result[7]=parseFloat(line.substr(20,12));result[8]=parseFloat(line.substr(33,10));result[9]=line.substr(44,8);result[10]=line.substr(53,8);result[11]=parseInt(line.substr(62,1));result[12]=parseInt(line.substr(64,4));result[13]=parseInt(line.substr(68,1));return{catalog_number:result[1],classification_type:result[2],intl_designator:`${year2to4(result[3])}-${'0'.repeat(3-result[4].toString().length)+result[4]}${result[5].trim()}`,epoch:doyToDate(year2to4(result[6]),result[7]),mean_motion_dot:parseFloat(result[8])*2,mean_motion_dot_dot:parseValue(result[9],true)*6,b_star:parseValue(result[10],true),ephemeris_type:result[11],element_set_number:result[12],}}
function line2(line){var result=[];result[0]=parseInt(line.substr(0,1));result[1]=parseInt(line.substr(2,5));result[2]=parseFloat(line.substr(8,8));result[3]=parseFloat(line.substr(17,8));result[4]=parseInt(line.substr(26,7));result[5]=parseFloat(line.substr(34,8));result[6]=parseFloat(line.substr(43,8));result[7]=parseFloat(line.substr(52,11));result[8]=parseInt(line.substr(63,5));result[9]=parseInt(line.substr(68,1));return{catalog_number:result[1],inclination:result[2],right_ascension:result[3],eccentricity:parseFloat('0.'+result[4]),argument_of_periapsis:result[5],mean_anomaly:result[6],mean_motion:result[7],revolutions_at_epoch:result[8],}}