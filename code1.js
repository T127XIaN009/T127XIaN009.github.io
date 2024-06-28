gdjs.Setting_32set_45upCode = {};
gdjs.Setting_32set_45upCode.localVariables = [];
gdjs.Setting_32set_45upCode.GDbackgroundObjects1= [];
gdjs.Setting_32set_45upCode.GDbackgroundObjects2= [];
gdjs.Setting_32set_45upCode.GDBack_9595ButtonObjects1= [];
gdjs.Setting_32set_45upCode.GDBack_9595ButtonObjects2= [];


gdjs.Setting_32set_45upCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back_Button"), gdjs.Setting_32set_45upCode.GDBack_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Setting_32set_45upCode.GDBack_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.Setting_32set_45upCode.GDBack_9595ButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Setting_32set_45upCode.GDBack_9595ButtonObjects1[k] = gdjs.Setting_32set_45upCode.GDBack_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.Setting_32set_45upCode.GDBack_9595ButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.Setting_32set_45upCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Setting_32set_45upCode.GDbackgroundObjects1.length = 0;
gdjs.Setting_32set_45upCode.GDbackgroundObjects2.length = 0;
gdjs.Setting_32set_45upCode.GDBack_9595ButtonObjects1.length = 0;
gdjs.Setting_32set_45upCode.GDBack_9595ButtonObjects2.length = 0;

gdjs.Setting_32set_45upCode.eventsList0(runtimeScene);

return;

}

gdjs['Setting_32set_45upCode'] = gdjs.Setting_32set_45upCode;
