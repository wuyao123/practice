window.onload = function(){
	waterfall('main','box');
	var dataInt={'data':[{'src':'14.jpg'},{'src':'15.jpg'},{'src':'16.jpg'},{'src':'17.jpg'}]};
	window.onscroll = function(){
		if(checkScrollSlide()){
			var oParent = document.getElementById('main');
			for(var i=0;i<dataInt.data.length;i++){
				var oBox = document.createElement('div');
				oBox.className = "box";
				oParent.appendChild(oBox);
				var oPic = document.createElement('div');
				oPic.className = "pic";
				oBox.appendChild(oPic);
				var oImg = document.createElement('img');
				oImg.src = "./images/" + dataInt.data[i].src;
				oPic.appendChild(oImg);
			}
			waterfall('main','box');
		}
	}
}

function waterfall(parent,box){
	var oParent = document.getElementById(parent);
	var oBoxs = getByClass(oParent,box);
	var oBoxW = oBoxs[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth/oBoxW);
	oParent.style.cssText = 'width:'+cols*oBoxW+'px;margin:0 auto;';
	var hArr = [];
	for(var i=0;i<oBoxs.length;i++){
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			var minH = Math.min.apply(null,hArr);
			var index = getMinHIndex(hArr,minH);
			oBoxs[i].style.position = "absolute";
			oBoxs[i].style.top = minH +"px";
			oBoxs[i].style.left = index*oBoxW + "px";
			hArr[index] += oBoxs[i].offsetHeight;
		}
	}
	
	console.log(hArr);
}

function getByClass(parent,box){
	var oBoxs = document.getElementsByTagName('*');
	var boxArr = [];
	for(var i=0;i<oBoxs.length;i++){
		if(oBoxs[i].className == box){
			boxArr.push(oBoxs[i]);
		}
	}
	return boxArr;
}

function getMinHIndex(arr,val){
	for(var i in arr){
		if(arr[i] == val){
			return i;
		}
	}
}

function checkScrollSlide(){
	var oParent = document.getElementById('main');
	var oBoxs = getByClass(oParent,'box');
	var lastBosTop = oBoxs[oBoxs.length-1].offsetTop + Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	var scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
	var height = document.body.clientHeight || document.documentElement.clientHeight;
	return (lastBosTop < scrollHeight+height)?true:false;
}