const characterValue=R.cond([[R.test(/[0-9]/),Number],[R.equals('-'),R.always(1)],[R.T,R.always(0)],])
const reduceFn=(m,e)=>R.compose(R.add(m),characterValue)(e)
const calculateChecksum=R.compose(R.modulo(R.__,10),R.reduce(reduceFn,0),R.slice(0,-1))
const extractCheckDigit=R.compose(Number,R.slice(-1,Infinity))