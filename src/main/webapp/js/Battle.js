var MH=new Array();
MH[0]=100;
MH[1]=110;
MH[2]=120;
MH[3]=150;
MH[4]=199;
var MD=new Array();
MD[0]=10;
MD[1]=12;
MD[2]=14;
MD[3]=16;
MD[4]=19;
var MN=new Array();
MN[0]="史莱姆";
MN[1]="野猪";
MN[2]="巨型野猪";
MN[3]="巨型青蛙";
MN[4]="巨型变种青蛙";
var ME=new Array();
ME[0]=10;
ME[1]=15;
ME[2]=20;
ME[3]=25;
ME[4]=30;
var MM = new Array();
MM[0] = 10;
MM[1] = 20;
MM[2] = 30;
MM[3] = 40;
MM[4] = 50;
var MonsterName;
var MonsterExp;
var MonsterHealthP;
var MonsterMoney;


//---------------------------------------------------------------------------
function Attack(){
if(MonsterHealth>0)
  {
  MonsterHealth=MonsterHealth-Damage;
  document.getElementById("MonsterHealth").innerHTML=MonsterHealth;
  ImgType=2;
  ImgChange();
  if(MonsterHealth<=0){MonsterDeath();}
  }
}
//---------------------------死亡事件--------------------------------
function MonsterDeath(){
alert("怪物死了,你获得了"+MonsterExp+"点经验和"+MonsterMoney+"点节操！");
Interval=window.clearInterval(Interval);
Exp=Exp+MonsterExp;
Money += MonsterMoney;
RefreshStatus();
document.getElementById("MonsterFinder").disabled=false;
document.getElementById("Battle").style.display="none";
if(Exp>=ExpMax){LevelUp()}
}

function Death(){
alert("你死了");
Health=HealthMax;
document.getElementById("Health").innerHTML=Health;
ImgType=1;
ImgChange();
}
//---------------------------------------------------------------------------
function MonsterAttack(){
if(Health>0){
  Health=Health-MonsterDamage;
  document.getElementById("Health").innerHTML=Health;
  ImgType=1;
  ImgChange();
  if(Health<=0){Death();}
}
}

function ImgChange(){
  if(ImgType==1){HealthCheck();document.getElementById("HealthIMG").src="img/Healthimg/Health"+HealthP+".jpg";}
  if(ImgType==2){MHealthCheck();document.getElementById("MonsterHealthIMG").src="img/Healthimg/Health"+MonsterHealthP+".jpg";}
}

function HealthCheck(){
  if(Health<=HealthMax*0.1){HealthP=10;}
  if(Health>=HealthMax*0.2&&Health<HealthMax*0.3){HealthP=20;}
  if(Health>=HealthMax*0.3&&Health<HealthMax*0.4){HealthP=30;}
  if(Health>=HealthMax*0.4&&Health<HealthMax*0.5){HealthP=40;}
  if(Health>=HealthMax*0.5&&Health<HealthMax*0.6){HealthP=50;}
  if(Health>=HealthMax*0.6&&Health<HealthMax*0.7){HealthP=60;}
  if(Health>=HealthMax*0.7&&Health<HealthMax*0.8){HealthP=70;}
  if(Health>=HealthMax*0.8&&Health<HealthMax*0.9){HealthP=80;}
  if(Health>=HealthMax*0.9&&Health<HealthMax*1){HealthP=90;}
  if(Health==HealthMax){HealthP=100;}
}

function MHealthCheck(){
  if(MonsterHealth<=MonsterHealthMax*0.1){MonsterHealthP=10;}
  if(MonsterHealth>=MonsterHealthMax*0.2&&MonsterHealth<MonsterHealthMax*0.3){MonsterHealthP=20;}
  if(MonsterHealth>=MonsterHealthMax*0.3&&MonsterHealth<MonsterHealthMax*0.4){MonsterHealthP=30;}
  if(MonsterHealth>=MonsterHealthMax*0.4&&MonsterHealth<MonsterHealthMax*0.5){MonsterHealthP=40;}
  if(MonsterHealth>=MonsterHealthMax*0.5&&MonsterHealth<MonsterHealthMax*0.6){MonsterHealthP=50;}
  if(MonsterHealth>=MonsterHealthMax*0.6&&MonsterHealth<MonsterHealthMax*0.7){MonsterHealthP=60;}
  if(MonsterHealth>=MonsterHealthMax*0.7&&MonsterHealth<MonsterHealthMax*0.8){MonsterHealthP=70;}
  if(MonsterHealth>=MonsterHealthMax*0.8&&MonsterHealth<MonsterHealthMax*0.9){MonsterHealthP=80;}
  if(MonsterHealth>=MonsterHealthMax*0.9&&MonsterHealth<MonsterHealthMax*1){MonsterHealthP=90;}
  if(MonsterHealth==MonsterHealthMax){MonsterHealthP=100;}
}

function FindMonster(){
 if(document.getElementById("Battle").style.display=="none"){
    document.getElementById("Battle").style.display="block";
    CheckMonster();
    alert("你遇到了一只"+MonsterName);
    Interval=self.setInterval(MonsterAttack,5000);
    document.getElementById("MonsterFinder").disabled=true;
    ImgType=2;
    ImgChange();
    document.getElementById("MonsterHealth").innerHTML=MonsterHealthMax;
    document.getElementById("MonsterDamage").innerHTML=MonsterDamage;
}
}

function CheckMonster(){
var randomly=Math.random();
if(randomly<=0.3){MonsterHealthMax=MH[0];MonsterHealth=MonsterHealthMax;MonsterDamage=MD[0];MonsterName=MN[0];MonsterExp=ME[0];MonsterMoney = MM[0]}
if(randomly>=0.3&&randomly<0.55){MonsterHealthMax=MH[1];MonsterHealth=MonsterHealthMax;MonsterDamage=MD[1];MonsterName=MN[1];MonsterExp=ME[1];MonsterMoney = MM[1]}
if(randomly>=0.55&&randomly<0.75){MonsterHealthMax=MH[2];MonsterHealth=MonsterHealthMax;MonsterDamage=MD[2];MonsterName=MN[2];MonsterExp=ME[2];MonsterMoney = MM[2]}
if(randomly>=0.75&&randomly<0.9){MonsterHealthMax=MH[3];MonsterHealth=MonsterHealthMax;MonsterDamage=MD[3];MonsterName=MN[3];MonsterExp=ME[3];MonsterMoney = MM[3]}
if(randomly>=0.9){MonsterHealthMax=MH[4];MonsterHealth=MonsterHealthMax;MonsterDamage=MD[4];MonsterName=MN[4];MonsterExp=ME[4];MonsterMoney = MM[4]}
}
//------------------------------升级-----------------------------------------
function LevelUp(){
Level++;
Exp=0;
ExpMax=Level*50;
Damage=Damage + Level*10 - (Level-1)*10;
RefreshStatus();
}
//------------------------------刷新状态-------------------------------------
function RefreshStatus(){
document.getElementById("Level").innerHTML=Level;
document.getElementById("Exp").innerHTML=Exp;
document.getElementById("ExpMax").innerHTML=ExpMax;
document.getElementById("Damage").innerHTML=Damage;
document.getElementById("Money").innerHTML = Money;
for (i = 0; i < 3; i++) {
    document.getElementById("Backpack" + i).innerHTML = ItemTranslator(Backpack[i]);
}
}