gdjs.Game_32play_32sceneCode = {};
gdjs.Game_32play_32sceneCode.localVariables = [];
gdjs.Game_32play_32sceneCode.GDEnemyObjects1_1final = [];

gdjs.Game_32play_32sceneCode.GDPlayerObjects1_1final = [];

gdjs.Game_32play_32sceneCode.GDbackgroundObjects1= [];
gdjs.Game_32play_32sceneCode.GDbackgroundObjects2= [];
gdjs.Game_32play_32sceneCode.GDbackgroundObjects3= [];
gdjs.Game_32play_32sceneCode.GDEnemyObjects1= [];
gdjs.Game_32play_32sceneCode.GDEnemyObjects2= [];
gdjs.Game_32play_32sceneCode.GDEnemyObjects3= [];
gdjs.Game_32play_32sceneCode.GDPlayerObjects1= [];
gdjs.Game_32play_32sceneCode.GDPlayerObjects2= [];
gdjs.Game_32play_32sceneCode.GDPlayerObjects3= [];
gdjs.Game_32play_32sceneCode.GDSpawnPointObjects1= [];
gdjs.Game_32play_32sceneCode.GDSpawnPointObjects2= [];
gdjs.Game_32play_32sceneCode.GDSpawnPointObjects3= [];
gdjs.Game_32play_32sceneCode.GDBulletObjects1= [];
gdjs.Game_32play_32sceneCode.GDBulletObjects2= [];
gdjs.Game_32play_32sceneCode.GDBulletObjects3= [];
gdjs.Game_32play_32sceneCode.GDSpawn2Point2Objects1= [];
gdjs.Game_32play_32sceneCode.GDSpawn2Point2Objects2= [];
gdjs.Game_32play_32sceneCode.GDSpawn2Point2Objects3= [];
gdjs.Game_32play_32sceneCode.GDEnemy2Objects1= [];
gdjs.Game_32play_32sceneCode.GDEnemy2Objects2= [];
gdjs.Game_32play_32sceneCode.GDEnemy2Objects3= [];
gdjs.Game_32play_32sceneCode.GDSpawn3Point3Objects1= [];
gdjs.Game_32play_32sceneCode.GDSpawn3Point3Objects2= [];
gdjs.Game_32play_32sceneCode.GDSpawn3Point3Objects3= [];
gdjs.Game_32play_32sceneCode.GDEnemy3Objects1= [];
gdjs.Game_32play_32sceneCode.GDEnemy3Objects2= [];
gdjs.Game_32play_32sceneCode.GDEnemy3Objects3= [];
gdjs.Game_32play_32sceneCode.GDwallObjects1= [];
gdjs.Game_32play_32sceneCode.GDwallObjects2= [];
gdjs.Game_32play_32sceneCode.GDwallObjects3= [];
gdjs.Game_32play_32sceneCode.GDBullet2Objects1= [];
gdjs.Game_32play_32sceneCode.GDBullet2Objects2= [];
gdjs.Game_32play_32sceneCode.GDBullet2Objects3= [];
gdjs.Game_32play_32sceneCode.GDEmptyCloudBackgroundObjects1= [];
gdjs.Game_32play_32sceneCode.GDEmptyCloudBackgroundObjects2= [];
gdjs.Game_32play_32sceneCode.GDEmptyCloudBackgroundObjects3= [];
gdjs.Game_32play_32sceneCode.GDFlatHeartBarObjects1= [];
gdjs.Game_32play_32sceneCode.GDFlatHeartBarObjects2= [];
gdjs.Game_32play_32sceneCode.GDFlatHeartBarObjects3= [];
gdjs.Game_32play_32sceneCode.GDScore1Objects1= [];
gdjs.Game_32play_32sceneCode.GDScore1Objects2= [];
gdjs.Game_32play_32sceneCode.GDScore1Objects3= [];
gdjs.Game_32play_32sceneCode.GDximageObjects1= [];
gdjs.Game_32play_32sceneCode.GDximageObjects2= [];
gdjs.Game_32play_32sceneCode.GDximageObjects3= [];
gdjs.Game_32play_32sceneCode.GDEnemy4Objects1= [];
gdjs.Game_32play_32sceneCode.GDEnemy4Objects2= [];
gdjs.Game_32play_32sceneCode.GDEnemy4Objects3= [];


gdjs.Game_32play_32sceneCode.eventsList0 = function(runtimeScene) {

};gdjs.Game_32play_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Spawn2Point2"), gdjs.Game_32play_32sceneCode.GDSpawn2Point2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Spawn3Point3"), gdjs.Game_32play_32sceneCode.GDSpawn3Point3Objects1);
gdjs.copyArray(runtimeScene.getObjects("SpawnPoint"), gdjs.Game_32play_32sceneCode.GDSpawnPointObjects1);
gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.Game_32play_32sceneCode.GDwallObjects1);
{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDSpawnPointObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDSpawnPointObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDSpawn2Point2Objects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDSpawn2Point2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDSpawn3Point3Objects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDSpawn3Point3Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDwallObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDwallObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


};gdjs.Game_32play_32sceneCode.eventsList2 = function(runtimeScene) {

};gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDSpawnPointObjects1Objects = Hashtable.newFrom({"SpawnPoint": gdjs.Game_32play_32sceneCode.GDSpawnPointObjects1});
gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32play_32sceneCode.GDEnemyObjects1});
gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy2": gdjs.Game_32play_32sceneCode.GDEnemy2Objects1});
gdjs.Game_32play_32sceneCode.eventsList3 = function(runtimeScene) {

};gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDSpawn2Point2Objects1Objects = Hashtable.newFrom({"Spawn2Point2": gdjs.Game_32play_32sceneCode.GDSpawn2Point2Objects1});
gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy2": gdjs.Game_32play_32sceneCode.GDEnemy2Objects1});
gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDEnemy3Objects1Objects = Hashtable.newFrom({"Enemy3": gdjs.Game_32play_32sceneCode.GDEnemy3Objects1});
gdjs.Game_32play_32sceneCode.eventsList4 = function(runtimeScene) {

};gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDSpawn3Point3Objects1Objects = Hashtable.newFrom({"Spawn3Point3": gdjs.Game_32play_32sceneCode.GDSpawn3Point3Objects1});
gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDEnemy3Objects1Objects = Hashtable.newFrom({"Enemy3": gdjs.Game_32play_32sceneCode.GDEnemy3Objects1});
gdjs.Game_32play_32sceneCode.eventsList5 = function(runtimeScene) {

};gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32play_32sceneCode.GDEnemyObjects2});
gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Game_32play_32sceneCode.GDPlayerObjects2});
gdjs.Game_32play_32sceneCode.eventsList6 = function(runtimeScene) {

};gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDBullet2Objects1Objects = Hashtable.newFrom({"Bullet2": gdjs.Game_32play_32sceneCode.GDBullet2Objects1});
gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDBullet2Objects1Objects = Hashtable.newFrom({"Bullet2": gdjs.Game_32play_32sceneCode.GDBullet2Objects1});
gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDBullet2Objects1Objects = Hashtable.newFrom({"Bullet2": gdjs.Game_32play_32sceneCode.GDBullet2Objects1});
gdjs.Game_32play_32sceneCode.eventsList7 = function(runtimeScene) {

};gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Game_32play_32sceneCode.GDBulletObjects1});
gdjs.Game_32play_32sceneCode.eventsList8 = function(runtimeScene) {

};gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Game_32play_32sceneCode.GDBulletObjects1});
gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32play_32sceneCode.GDEnemyObjects1});
gdjs.Game_32play_32sceneCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.Game_32play_32sceneCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Game_32play_32sceneCode.asyncCallback16477252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32play_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Enemy"), gdjs.Game_32play_32sceneCode.GDEnemyObjects2);

{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemyObjects2[i].clearForces();
}
}
{ //Subevents
gdjs.Game_32play_32sceneCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Game_32play_32sceneCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32play_32sceneCode.localVariables);
for (const obj of gdjs.Game_32play_32sceneCode.GDEnemyObjects1) asyncObjectsList.addObject("Enemy", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.Game_32play_32sceneCode.asyncCallback16477252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Game_32play_32sceneCode.GDBulletObjects1});
gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy2": gdjs.Game_32play_32sceneCode.GDEnemy2Objects1});
gdjs.Game_32play_32sceneCode.eventsList11 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.Game_32play_32sceneCode.GDEnemy2Objects2 */
{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemy2Objects2.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemy2Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Game_32play_32sceneCode.asyncCallback16480476 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32play_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Enemy2"), gdjs.Game_32play_32sceneCode.GDEnemy2Objects2);

{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemy2Objects2.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemy2Objects2[i].clearForces();
}
}
{ //Subevents
gdjs.Game_32play_32sceneCode.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Game_32play_32sceneCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32play_32sceneCode.localVariables);
for (const obj of gdjs.Game_32play_32sceneCode.GDEnemy2Objects1) asyncObjectsList.addObject("Enemy2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.Game_32play_32sceneCode.asyncCallback16480476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Game_32play_32sceneCode.GDBulletObjects1});
gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDEnemy3Objects1Objects = Hashtable.newFrom({"Enemy3": gdjs.Game_32play_32sceneCode.GDEnemy3Objects1});
gdjs.Game_32play_32sceneCode.eventsList13 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.Game_32play_32sceneCode.GDEnemy3Objects2 */
{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemy3Objects2.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemy3Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Game_32play_32sceneCode.asyncCallback16483700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32play_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Enemy3"), gdjs.Game_32play_32sceneCode.GDEnemy3Objects2);

{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemy3Objects2.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemy3Objects2[i].clearForces();
}
}
{ //Subevents
gdjs.Game_32play_32sceneCode.eventsList13(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Game_32play_32sceneCode.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32play_32sceneCode.localVariables);
for (const obj of gdjs.Game_32play_32sceneCode.GDEnemy3Objects1) asyncObjectsList.addObject("Enemy3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.Game_32play_32sceneCode.asyncCallback16483700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32play_32sceneCode.eventsList15 = function(runtimeScene) {

};gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDBullet2Objects1Objects = Hashtable.newFrom({"Bullet2": gdjs.Game_32play_32sceneCode.GDBullet2Objects1});
gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32play_32sceneCode.GDPlayerObjects1});
gdjs.Game_32play_32sceneCode.eventsList16 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32play_32sceneCode.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32play_32sceneCode.GDPlayerObjects1[k] = gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "3f85124583aa66e58db8c5fee9196cec591107e3ec0d6ccb5b03062d25c087e1_Explosion 3.aac", false, 50, 1);
}}

}


};gdjs.Game_32play_32sceneCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Score1"), gdjs.Game_32play_32sceneCode.GDScore1Objects1);
{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDScore1Objects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDScore1Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber()));
}
}}

}


};gdjs.Game_32play_32sceneCode.eventsList18 = function(runtimeScene) {

};gdjs.Game_32play_32sceneCode.asyncCallback16479140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32play_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Game_32play_32sceneCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}
gdjs.Game_32play_32sceneCode.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32play_32sceneCode.localVariables);
for (const obj of gdjs.Game_32play_32sceneCode.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_32play_32sceneCode.asyncCallback16479140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32play_32sceneCode.eventsList20 = function(runtimeScene) {

{


gdjs.Game_32play_32sceneCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32play_32sceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32play_32sceneCode.GDPlayerObjects1[0].getPointX("")), 0.05), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32play_32sceneCode.GDPlayerObjects1[0].getPointY("")), 0.05), "", 0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Alien Spaceship Atmosphere.aac", true, 45, 1);
}
{ //Subevents
gdjs.Game_32play_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.Game_32play_32sceneCode.GDFlatHeartBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32play_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDFlatHeartBarObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDFlatHeartBarObjects1[i].SetValue((( gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32play_32sceneCode.GDPlayerObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.Game_32play_32sceneCode.eventsList2(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("SpawnPoint"), gdjs.Game_32play_32sceneCode.GDSpawnPointObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDSpawnPointObjects1Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16455892);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32play_32sceneCode.GDSpawnPointObjects1 */
gdjs.Game_32play_32sceneCode.GDEnemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDEnemyObjects1Objects, (( gdjs.Game_32play_32sceneCode.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.Game_32play_32sceneCode.GDSpawnPointObjects1[0].getPointX("SpawnP")), (( gdjs.Game_32play_32sceneCode.GDSpawnPointObjects1.length === 0 ) ? 0 :gdjs.Game_32play_32sceneCode.GDSpawnPointObjects1[0].getPointY("SpawnP")), "");
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemyObjects1[i].getBehavior("Scale").setScale(0.4);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32play_32sceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Game_32play_32sceneCode.GDEnemy2Objects1);
{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemyObjects1[i].separateFromObjectsList(gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDEnemy2Objects1Objects, false);
}
}}

}


{


gdjs.Game_32play_32sceneCode.eventsList3(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Spawn2Point2"), gdjs.Game_32play_32sceneCode.GDSpawn2Point2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDSpawn2Point2Objects1Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16455372);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32play_32sceneCode.GDSpawn2Point2Objects1 */
gdjs.Game_32play_32sceneCode.GDEnemy2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDEnemy2Objects1Objects, (( gdjs.Game_32play_32sceneCode.GDSpawn2Point2Objects1.length === 0 ) ? 0 :gdjs.Game_32play_32sceneCode.GDSpawn2Point2Objects1[0].getPointX("SpawnP")), (( gdjs.Game_32play_32sceneCode.GDSpawn2Point2Objects1.length === 0 ) ? 0 :gdjs.Game_32play_32sceneCode.GDSpawn2Point2Objects1[0].getPointY("SpawnP")), "");
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemy2Objects1[i].getBehavior("Scale").setScale(0.4);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Game_32play_32sceneCode.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy3"), gdjs.Game_32play_32sceneCode.GDEnemy3Objects1);
{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemy2Objects1[i].separateFromObjectsList(gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDEnemy3Objects1Objects, false);
}
}}

}


{


gdjs.Game_32play_32sceneCode.eventsList4(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Spawn3Point3"), gdjs.Game_32play_32sceneCode.GDSpawn3Point3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDSpawn3Point3Objects1Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16461068);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32play_32sceneCode.GDSpawn3Point3Objects1 */
gdjs.Game_32play_32sceneCode.GDEnemy3Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDEnemy3Objects1Objects, (( gdjs.Game_32play_32sceneCode.GDSpawn3Point3Objects1.length === 0 ) ? 0 :gdjs.Game_32play_32sceneCode.GDSpawn3Point3Objects1[0].getPointX("SpawnP")), (( gdjs.Game_32play_32sceneCode.GDSpawn3Point3Objects1.length === 0 ) ? 0 :gdjs.Game_32play_32sceneCode.GDSpawn3Point3Objects1[0].getPointY("SpawnP")), "");
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemy3Objects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemy3Objects1[i].getBehavior("Scale").setScale(0.4);
}
}}

}


{


gdjs.Game_32play_32sceneCode.eventsList5(runtimeScene);
}


{

gdjs.Game_32play_32sceneCode.GDEnemyObjects1.length = 0;

gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Game_32play_32sceneCode.GDEnemyObjects1_1final.length = 0;
gdjs.Game_32play_32sceneCode.GDPlayerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32play_32sceneCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32play_32sceneCode.GDPlayerObjects2);
isConditionTrue_1 = gdjs.evtTools.object.distanceTest(gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDEnemyObjects2Objects, gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDPlayerObjects2Objects, 600, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32play_32sceneCode.GDEnemyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32play_32sceneCode.GDEnemyObjects1_1final.indexOf(gdjs.Game_32play_32sceneCode.GDEnemyObjects2[j]) === -1 )
            gdjs.Game_32play_32sceneCode.GDEnemyObjects1_1final.push(gdjs.Game_32play_32sceneCode.GDEnemyObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Game_32play_32sceneCode.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32play_32sceneCode.GDPlayerObjects1_1final.indexOf(gdjs.Game_32play_32sceneCode.GDPlayerObjects2[j]) === -1 )
            gdjs.Game_32play_32sceneCode.GDPlayerObjects1_1final.push(gdjs.Game_32play_32sceneCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Game_32play_32sceneCode.GDEnemyObjects1_1final, gdjs.Game_32play_32sceneCode.GDEnemyObjects1);
gdjs.copyArray(gdjs.Game_32play_32sceneCode.GDPlayerObjects1_1final, gdjs.Game_32play_32sceneCode.GDPlayerObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32play_32sceneCode.GDEnemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Game_32play_32sceneCode.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy3"), gdjs.Game_32play_32sceneCode.GDEnemy3Objects1);
gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.Game_32play_32sceneCode.GDwallObjects1);
{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemyObjects1[i].addForceTowardObject((gdjs.Game_32play_32sceneCode.GDwallObjects1.length !== 0 ? gdjs.Game_32play_32sceneCode.GDwallObjects1[0] : null), 15, 0);
}
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemy2Objects1[i].addForceTowardObject((gdjs.Game_32play_32sceneCode.GDwallObjects1.length !== 0 ? gdjs.Game_32play_32sceneCode.GDwallObjects1[0] : null), 15, 0);
}
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemy3Objects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemy3Objects1[i].addForceTowardObject((gdjs.Game_32play_32sceneCode.GDwallObjects1.length !== 0 ? gdjs.Game_32play_32sceneCode.GDwallObjects1[0] : null), 15, 0);
}
}}

}


{


gdjs.Game_32play_32sceneCode.eventsList6(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bullet2"), gdjs.Game_32play_32sceneCode.GDBullet2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32play_32sceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Game_32play_32sceneCode.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy3"), gdjs.Game_32play_32sceneCode.GDEnemy3Objects1);
{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDBullet2Objects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDBullet2Objects1[i].getBehavior("Scale").setScale(0.5);
}
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemyObjects1[i].getBehavior("FireBullet").Fire((gdjs.Game_32play_32sceneCode.GDEnemyObjects1[i].getPointX("Gun_Point")), (gdjs.Game_32play_32sceneCode.GDEnemyObjects1[i].getPointY("Gun_Point")), gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDBullet2Objects1Objects, 90, 900, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDBullet2Objects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDBullet2Objects1[i].setAngle(180);
}
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemy2Objects1[i].getBehavior("FireBullet").Fire((gdjs.Game_32play_32sceneCode.GDEnemy2Objects1[i].getPointX("Gun_Point")), (gdjs.Game_32play_32sceneCode.GDEnemy2Objects1[i].getPointY("Gun_Point")), gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDBullet2Objects1Objects, 90, 900, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDBullet2Objects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDBullet2Objects1[i].setAngle(180);
}
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemy3Objects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemy3Objects1[i].getBehavior("FireBullet").Fire((gdjs.Game_32play_32sceneCode.GDEnemy3Objects1[i].getPointX("Gun_Point")), (gdjs.Game_32play_32sceneCode.GDEnemy3Objects1[i].getPointY("Gun_Point")), gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDBullet2Objects1Objects, 90, 900, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDBullet2Objects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDBullet2Objects1[i].setAngle(180);
}
}}

}


{


gdjs.Game_32play_32sceneCode.eventsList7(runtimeScene);
}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32play_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32play_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i].addPolarForce(180, 550, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32play_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i].addPolarForce(0, 550, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32play_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i].addPolarForce(-(90), 550, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32play_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i].addPolarForce(90, 550, 0);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Game_32play_32sceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32play_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDBulletObjects1[i].getBehavior("Scale").setScale(0.5);
}
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDBulletObjects1[i].setAngle(180);
}
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i].getPointX("GunPoint")), (gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i].getPointY("GunPoint")), gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDBulletObjects1Objects, -(90), 900, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32play_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").HasJustFired((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32play_32sceneCode.GDPlayerObjects1[k] = gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32play_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 5, 5, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Laser effect (1).aac", false, 100, 1);
}}

}


{


gdjs.Game_32play_32sceneCode.eventsList8(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Game_32play_32sceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32play_32sceneCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDBulletObjects1Objects, gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDEnemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16475004);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32play_32sceneCode.GDEnemyObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemyObjects1[i].getBehavior("Animation").setAnimationName("explo");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "3f85124583aa66e58db8c5fee9196cec591107e3ec0d6ccb5b03062d25c087e1_Explosion 3.aac", false, 100, 1);
}
{ //Subevents
gdjs.Game_32play_32sceneCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Game_32play_32sceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Game_32play_32sceneCode.GDEnemy2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDBulletObjects1Objects, gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDEnemy2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16478428);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32play_32sceneCode.GDEnemy2Objects1 */
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemy2Objects1[i].getBehavior("Animation").setAnimationName("explo");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "3f85124583aa66e58db8c5fee9196cec591107e3ec0d6ccb5b03062d25c087e1_Explosion 3.aac", false, 100, 1);
}
{ //Subevents
gdjs.Game_32play_32sceneCode.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Game_32play_32sceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy3"), gdjs.Game_32play_32sceneCode.GDEnemy3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDBulletObjects1Objects, gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDEnemy3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16481652);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32play_32sceneCode.GDEnemy3Objects1 */
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDEnemy3Objects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDEnemy3Objects1[i].getBehavior("Animation").setAnimationName("explo");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "3f85124583aa66e58db8c5fee9196cec591107e3ec0d6ccb5b03062d25c087e1_Explosion 3.aac", false, 100, 1);
}
{ //Subevents
gdjs.Game_32play_32sceneCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_32play_32sceneCode.eventsList15(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet2"), gdjs.Game_32play_32sceneCode.GDBullet2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32play_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDBullet2Objects1Objects, gdjs.Game_32play_32sceneCode.mapOfGDgdjs_9546Game_959532play_959532sceneCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32play_32sceneCode.GDPlayerObjects1[k] = gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i].getBehavior("Health").DamageCooldownDuration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 2) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32play_32sceneCode.GDPlayerObjects1[k] = gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16485572);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32play_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i].getBehavior("Health").Hit(1, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Game_32play_32sceneCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_32play_32sceneCode.eventsList17(runtimeScene);
}


{


gdjs.Game_32play_32sceneCode.eventsList18(runtimeScene);
}


{

gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Game_32play_32sceneCode.GDPlayerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32play_32sceneCode.GDPlayerObjects2);
for (var i = 0, k = 0, l = gdjs.Game_32play_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32play_32sceneCode.GDPlayerObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32play_32sceneCode.GDPlayerObjects2[k] = gdjs.Game_32play_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32play_32sceneCode.GDPlayerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32play_32sceneCode.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32play_32sceneCode.GDPlayerObjects1_1final.indexOf(gdjs.Game_32play_32sceneCode.GDPlayerObjects2[j]) === -1 )
            gdjs.Game_32play_32sceneCode.GDPlayerObjects1_1final.push(gdjs.Game_32play_32sceneCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Game_32play_32sceneCode.GDPlayerObjects1_1final, gdjs.Game_32play_32sceneCode.GDPlayerObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32play_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32play_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("explo");
}
}
{ //Subevents
gdjs.Game_32play_32sceneCode.eventsList19(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Score1"), gdjs.Game_32play_32sceneCode.GDScore1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32play_32sceneCode.GDScore1Objects1.length;i<l;++i) {
    if ( (gdjs.Game_32play_32sceneCode.GDScore1Objects1[i].getBehavior("Text").getText()).endsWith("3") ) {
        isConditionTrue_0 = true;
        gdjs.Game_32play_32sceneCode.GDScore1Objects1[k] = gdjs.Game_32play_32sceneCode.GDScore1Objects1[i];
        ++k;
    }
}
gdjs.Game_32play_32sceneCode.GDScore1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.Game_32play_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32play_32sceneCode.GDbackgroundObjects1.length = 0;
gdjs.Game_32play_32sceneCode.GDbackgroundObjects2.length = 0;
gdjs.Game_32play_32sceneCode.GDbackgroundObjects3.length = 0;
gdjs.Game_32play_32sceneCode.GDEnemyObjects1.length = 0;
gdjs.Game_32play_32sceneCode.GDEnemyObjects2.length = 0;
gdjs.Game_32play_32sceneCode.GDEnemyObjects3.length = 0;
gdjs.Game_32play_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32play_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32play_32sceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32play_32sceneCode.GDSpawnPointObjects1.length = 0;
gdjs.Game_32play_32sceneCode.GDSpawnPointObjects2.length = 0;
gdjs.Game_32play_32sceneCode.GDSpawnPointObjects3.length = 0;
gdjs.Game_32play_32sceneCode.GDBulletObjects1.length = 0;
gdjs.Game_32play_32sceneCode.GDBulletObjects2.length = 0;
gdjs.Game_32play_32sceneCode.GDBulletObjects3.length = 0;
gdjs.Game_32play_32sceneCode.GDSpawn2Point2Objects1.length = 0;
gdjs.Game_32play_32sceneCode.GDSpawn2Point2Objects2.length = 0;
gdjs.Game_32play_32sceneCode.GDSpawn2Point2Objects3.length = 0;
gdjs.Game_32play_32sceneCode.GDEnemy2Objects1.length = 0;
gdjs.Game_32play_32sceneCode.GDEnemy2Objects2.length = 0;
gdjs.Game_32play_32sceneCode.GDEnemy2Objects3.length = 0;
gdjs.Game_32play_32sceneCode.GDSpawn3Point3Objects1.length = 0;
gdjs.Game_32play_32sceneCode.GDSpawn3Point3Objects2.length = 0;
gdjs.Game_32play_32sceneCode.GDSpawn3Point3Objects3.length = 0;
gdjs.Game_32play_32sceneCode.GDEnemy3Objects1.length = 0;
gdjs.Game_32play_32sceneCode.GDEnemy3Objects2.length = 0;
gdjs.Game_32play_32sceneCode.GDEnemy3Objects3.length = 0;
gdjs.Game_32play_32sceneCode.GDwallObjects1.length = 0;
gdjs.Game_32play_32sceneCode.GDwallObjects2.length = 0;
gdjs.Game_32play_32sceneCode.GDwallObjects3.length = 0;
gdjs.Game_32play_32sceneCode.GDBullet2Objects1.length = 0;
gdjs.Game_32play_32sceneCode.GDBullet2Objects2.length = 0;
gdjs.Game_32play_32sceneCode.GDBullet2Objects3.length = 0;
gdjs.Game_32play_32sceneCode.GDEmptyCloudBackgroundObjects1.length = 0;
gdjs.Game_32play_32sceneCode.GDEmptyCloudBackgroundObjects2.length = 0;
gdjs.Game_32play_32sceneCode.GDEmptyCloudBackgroundObjects3.length = 0;
gdjs.Game_32play_32sceneCode.GDFlatHeartBarObjects1.length = 0;
gdjs.Game_32play_32sceneCode.GDFlatHeartBarObjects2.length = 0;
gdjs.Game_32play_32sceneCode.GDFlatHeartBarObjects3.length = 0;
gdjs.Game_32play_32sceneCode.GDScore1Objects1.length = 0;
gdjs.Game_32play_32sceneCode.GDScore1Objects2.length = 0;
gdjs.Game_32play_32sceneCode.GDScore1Objects3.length = 0;
gdjs.Game_32play_32sceneCode.GDximageObjects1.length = 0;
gdjs.Game_32play_32sceneCode.GDximageObjects2.length = 0;
gdjs.Game_32play_32sceneCode.GDximageObjects3.length = 0;
gdjs.Game_32play_32sceneCode.GDEnemy4Objects1.length = 0;
gdjs.Game_32play_32sceneCode.GDEnemy4Objects2.length = 0;
gdjs.Game_32play_32sceneCode.GDEnemy4Objects3.length = 0;

gdjs.Game_32play_32sceneCode.eventsList20(runtimeScene);

return;

}

gdjs['Game_32play_32sceneCode'] = gdjs.Game_32play_32sceneCode;
