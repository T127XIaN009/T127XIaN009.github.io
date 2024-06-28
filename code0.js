gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDSTART_9595BUTTONObjects1= [];
gdjs.MenuCode.GDSTART_9595BUTTONObjects2= [];
gdjs.MenuCode.GDForestBackgroundObjects1= [];
gdjs.MenuCode.GDForestBackgroundObjects2= [];
gdjs.MenuCode.GDYellowButtonObjects1= [];
gdjs.MenuCode.GDYellowButtonObjects2= [];
gdjs.MenuCode.GDRedButtonObjects1= [];
gdjs.MenuCode.GDRedButtonObjects2= [];
gdjs.MenuCode.GDGreyButtonObjects1= [];
gdjs.MenuCode.GDGreyButtonObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("START_BUTTON"), gdjs.MenuCode.GDSTART_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSTART_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSTART_9595BUTTONObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSTART_9595BUTTONObjects1[k] = gdjs.MenuCode.GDSTART_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDSTART_9595BUTTONObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game play scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButton"), gdjs.MenuCode.GDRedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDRedButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDRedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDRedButtonObjects1[k] = gdjs.MenuCode.GDRedButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDRedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.MenuCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDYellowButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDYellowButtonObjects1[k] = gdjs.MenuCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Setting set-up", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButton"), gdjs.MenuCode.GDGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDGreyButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDGreyButtonObjects1[k] = gdjs.MenuCode.GDGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leader_Board", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDSTART_9595BUTTONObjects1.length = 0;
gdjs.MenuCode.GDSTART_9595BUTTONObjects2.length = 0;
gdjs.MenuCode.GDForestBackgroundObjects1.length = 0;
gdjs.MenuCode.GDForestBackgroundObjects2.length = 0;
gdjs.MenuCode.GDYellowButtonObjects1.length = 0;
gdjs.MenuCode.GDYellowButtonObjects2.length = 0;
gdjs.MenuCode.GDRedButtonObjects1.length = 0;
gdjs.MenuCode.GDRedButtonObjects2.length = 0;
gdjs.MenuCode.GDGreyButtonObjects1.length = 0;
gdjs.MenuCode.GDGreyButtonObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
