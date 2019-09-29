function hashmap(){this.data=new Object();this.put=function(key,value)
{this.data[key]=value;};this.get=function(key)
{return this.containsKey(key)?this.data[key]:null;};this.remove=function(key)
{delete this.data[key];};this.each=function(fn){if(typeof fn!='function')
{return;}
var len=this.data.length;for(var i=0;i<len;i++)
{var k=this.data[i];fn(k,this.data[k],i);}};this.entrys=function()
{var len=this.data.length;var entrys=new Array(len);for(var i=0;i<len;i++){entrys[i]={key:i,value:this.data[i]};}
return entrys;};this.isEmpty=function()
{return this.data.length==0;};this.size=function()
{return this.data.length;};this.toString=function()
{var s="[";for(var i=0;i<this.data.length;i++,s+=','){var k=this.data[i];s+="{'id':'"+k+"','value':'"+this.data[k]+"'}";}
s=s.substring(0,s.length-1);if(s!=""){s+="]";}
return s;};this.values=function(){var _values=new Array();for(var key in this.data)
{_values.push(this.data[key]);}
return _values;};this.keySet=function(){var _keys=new Array();for(var key in this.data)
{_keys.push(key);}
return _keys;};this.containsKey=function(_key)
{return(_key in this.data);};this.clear=function(){this.data.length=0;this.data=new Object();};}