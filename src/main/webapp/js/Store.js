//初始化
function Generate() {
    for (i = 0; i < 3; i++) {
        Backpack[i] = 0;
    }
}
window.onload = Generate;

//商店
function OpenStore() {
	switch(CurrentPage){
		case 0 :
		document.getElementById("Store").style.display = "block";
        document.getElementById("MonsterFinder").disabled = true;
        document.getElementById("OpenStoreButton").disabled = true;
        document.getElementById("BattleFrame").style.display = "none";
        break;
		case 2 :
		document.getElementById("Store").style.display = "block";
        document.getElementById("MonsterFinder").disabled = true;
        document.getElementById("OpenStoreButton").disabled = true;
        document.getElementById("BattleFrame").style.display = "none";
		document.getElementById("Backpack").style.display = "none";
		document.getElementById("OpenBackpack").disabled = false;
		break;
	}
    CurrentPage = 1;
}
function CloseStore() {
    document.getElementById("Store").style.display = "none";
    document.getElementById("MonsterFinder").disabled = false;
    document.getElementById("OpenStoreButton").disabled = false;
    document.getElementById("BattleFrame").style.display = "block";
	CurrentPage = 0;
}
function BuyItem(Id) {
    switch (Id) {
        case 1:
            if (Money < 50) { alert("你节操不够"); return; }
            Money = Money - 50;
            AddItemToBackpack(1);
            break;
        case 2:
            if (Money < 99) { alert("你节操不够");return; }
            Money = Money - 99;
            AddItemToBackpack(2);
            break;
    }
    alert("购买成功");
    RefreshStatus();
}
//背包
function OpenBackpack(){
	switch(CurrentPage){
	    case 0:
	        document.getElementById("Backpack").style.display = "block";
	        document.getElementById("MonsterFinder").disabled = true;
	        document.getElementById("OpenBackpack").disabled = true;
	        document.getElementById("BattleFrame").style.display = "none";
	        break;
		case 1 :
		document.getElementById("Backpack").style.display = "block";
        document.getElementById("MonsterFinder").disabled = true;
        document.getElementById("OpenBackpack").disabled = true;
        document.getElementById("BattleFrame").style.display = "none";	
		document.getElementById("Store").style.display = "none";
		document.getElementById("OpenStoreButton").disabled = false;
		break;
	}
    CurrentPage = 2;
}
function CloseBackpack(){
	document.getElementById("Backpack").style.display = "none";
    document.getElementById("MonsterFinder").disabled = false;
    document.getElementById("OpenBackpack").disabled = false;
    document.getElementById("BattleFrame").style.display = "block";
	CurrentPage = 0;
}
function AddItemToBackpack(Id) {
    var i = 0;
    while(Backpack[i] != 0){
        i++;
    }
    Backpack[i] = Id;
}
function ItemTranslator(Id) {
    switch (Id) {
        case 0:
            return "空";
        case 1:
            return "木剑";
        case 2:
            return "铁剑";
    }
}
function UseItem(BId) {
    Id = Backpack[BId];
    switch (Id) {
        case 0:
            return;
        case 1:
            Damage++;
            break;
        case 2:
            Damage += 2;
            break;
    }
    alert("您使用了物品" + ItemTranslator(Id) + "!");
    Backpack[BId] = 0;
    RefreshStatus();
}