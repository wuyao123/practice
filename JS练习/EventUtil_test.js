var EventUtil = {
	addHandler:function(elememt,type,handler){
		if(elememt.addEventListener){
			elememt.addEventListener(type,handler,false);
		}else if(elememt.attachEvent){
			elememt.attachEvent("on"+type,handler);
		}else{
			elememt["on"+type] = handler;
		}
	},
	removeHandler:function(elememt,type,handler){
		if(elememt.removeEventListener){
			elememt.removeEventListener(type,handler,false);
		}else if(elememt.detachEvent){
			elememt.detachEvent("on"+type,handler);
		}else{
			elememt["on"+type] = null;
		}
		
	}
}