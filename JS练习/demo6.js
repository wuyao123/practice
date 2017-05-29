
var tableNode = document.querySelector("table");    
var theads = [
	{
        name: 'name',
        label: '姓名',
        sortable: false
    }, 
    {
        name: 'chinese',
        label: '语文',
        sortable: true
    }, 
    {
        name: 'math',
        label: '数学',
        sortable: true
    }, 
    {
        name: 'english',
        label: '英语',
        sortable: true
    }, 
    {
        name: 'total',
        label: '总分',
        sortable: true
    }
];
var tbodys = [
    {
        name: '小明',
        chinese: 90,
        math: 100,
        english: 70,
        total: 260
    },
    {
        name: '小花',
        chinese: 90,
        math: 70,
        english: 80,
        total: 240
    },
    {
        name: '小红',
        chinese: 70,
        math: 90,
        english: 70,
        total: 230
    },
    {
        name: '小桃',
        chinese: 60,
        math: 100,
        english: 90,
        total: 250
    },
    {
        name: '小张',
        chinese: 80,
        math: 80,
        english: 70,
        total: 230
    }
];
function init(){
    tableNode.innerHTML = "";
	addThead();
	addTbody();
    createBtn();
}
function createTr(){
	return document.createElement("tr");
}
function addThead(){
	var thead = document.createElement("thead");
	var trNode =  createTr();
	theads.forEach(function(item,index){
		var thNode = document.createElement("th");
		thNode.innerHTML = item.label;
		thNode.className = item.name;
		trNode.appendChild(thNode);
	});
	thead.appendChild(trNode);
	tableNode.appendChild(thead);
}
function addTbody(){
    var tbody = document.createElement("tbody");
    tbodys.forEach(function(item){
        var trNode =  createTr();
        for(var key in item){
            var tdNode = document.createElement("td");
            tdNode.contentEditable = true;
            tdNode.innerHTML = item[key];
            trNode.appendChild(tdNode);
        }  
        tbody.appendChild(trNode);
    });
    tableNode.appendChild(tbody);
}
function findTh(name){
    return theads.filter(function(item,index,array){
        return item.name == name;
    });
}
function sort(){
    update();
    var name = this.className;
    var item = findTh(name)[0];
    if(item.sortable){
        tbodys.sort(function(a,b){          
            return b[name]-a[name];
        });
    }else{
        tbodys.sort(function(a,b){
            return a[name]-b[name];
        });
    }
    item.sortable = !item.sortable;
    init();
}
function createBtn(){
    var thBtns = document.querySelectorAll("table tr th");
    thBtns.forEach(function(item,index,array){
        if(index != 0){
            EventUtil.addHandler(item,"click",sort);
        }
    });
}
function update(){  
    var trBtns = document.querySelectorAll("table tbody tr");
    for(var i = 0;i<trBtns.length;i++){
        var tdBtns = trBtns[i].querySelectorAll("table tbody tr td");
        for(var j = 0;j<tdBtns.length;j++){
            tbodys[i][theads[j].name] = tdBtns[j].innerHTML;
        }
    }
}
init();
var addBtn = document.querySelector(".add"),
    delBtn = document.querySelector(".del"),
    len = theads.length;
function addTr(){ 
    var tr = createTr();
    var tbody = document.querySelector("tbody");
    var obj = {};
    for(var i = 0;i<len;i++){
        var td = document.createElement("td");
        obj[theads[i].name] = "请输入";
        td.innerHTML = "请输入";
        td.contentEditable = true;
        tr.appendChild(td);
    }
    tbodys.push(obj);
    console.log(tbodys);
    tbody.appendChild(tr);
    tableNode.appendChild(tbody);
    update();
}
function delTr(){
    var tbody = document.querySelector("tbody");
    var trs = tbody.querySelectorAll("tr");
    console.log(trs);
    tbody.removeChild(trs[trs.length-1]);
    tbodys.pop();
}
EventUtil.addHandler(addBtn,"click",addTr);
EventUtil.addHandler(delBtn,"click",delTr);