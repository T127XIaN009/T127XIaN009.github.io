gdjs.Leader_95BoardCode = {};
gdjs.Leader_95BoardCode.localVariables = [];
gdjs.Leader_95BoardCode.GDbackgroundObjects1= [];
gdjs.Leader_95BoardCode.GDbackgroundObjects2= [];
gdjs.Leader_95BoardCode.GDbackgroundObjects3= [];
gdjs.Leader_95BoardCode.GDBack_9595ButtonObjects1= [];
gdjs.Leader_95BoardCode.GDBack_9595ButtonObjects2= [];
gdjs.Leader_95BoardCode.GDBack_9595ButtonObjects3= [];
gdjs.Leader_95BoardCode.GDChevronArrowLeftObjects1= [];
gdjs.Leader_95BoardCode.GDChevronArrowLeftObjects2= [];
gdjs.Leader_95BoardCode.GDChevronArrowLeftObjects3= [];
gdjs.Leader_95BoardCode.GDChevronArrowRightObjects1= [];
gdjs.Leader_95BoardCode.GDChevronArrowRightObjects2= [];
gdjs.Leader_95BoardCode.GDChevronArrowRightObjects3= [];
gdjs.Leader_95BoardCode.GDScoreObjects1= [];
gdjs.Leader_95BoardCode.GDScoreObjects2= [];
gdjs.Leader_95BoardCode.GDScoreObjects3= [];
gdjs.Leader_95BoardCode.GDNewTextInputObjects1= [];
gdjs.Leader_95BoardCode.GDNewTextInputObjects2= [];
gdjs.Leader_95BoardCode.GDNewTextInputObjects3= [];
gdjs.Leader_95BoardCode.GDCheckScoreObjects1= [];
gdjs.Leader_95BoardCode.GDCheckScoreObjects2= [];
gdjs.Leader_95BoardCode.GDCheckScoreObjects3= [];
gdjs.Leader_95BoardCode.GDGreenButtonObjects1= [];
gdjs.Leader_95BoardCode.GDGreenButtonObjects2= [];
gdjs.Leader_95BoardCode.GDGreenButtonObjects3= [];
gdjs.Leader_95BoardCode.GDGreenButton2Objects1= [];
gdjs.Leader_95BoardCode.GDGreenButton2Objects2= [];
gdjs.Leader_95BoardCode.GDGreenButton2Objects3= [];
gdjs.Leader_95BoardCode.GDximageObjects1= [];
gdjs.Leader_95BoardCode.GDximageObjects2= [];
gdjs.Leader_95BoardCode.GDximageObjects3= [];
gdjs.Leader_95BoardCode.GDText_9595_9595Score_9595Objects1= [];
gdjs.Leader_95BoardCode.GDText_9595_9595Score_9595Objects2= [];
gdjs.Leader_95BoardCode.GDText_9595_9595Score_9595Objects3= [];


gdjs.Leader_95BoardCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back_Button"), gdjs.Leader_95BoardCode.GDBack_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Leader_95BoardCode.GDBack_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.Leader_95BoardCode.GDBack_9595ButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Leader_95BoardCode.GDBack_9595ButtonObjects1[k] = gdjs.Leader_95BoardCode.GDBack_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.Leader_95BoardCode.GDBack_9595ButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.Leader_95BoardCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.Leader_95BoardCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Leader_95BoardCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.Leader_95BoardCode.GDGreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Leader_95BoardCode.GDGreenButtonObjects1[k] = gdjs.Leader_95BoardCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.Leader_95BoardCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16406044);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.Leader_95BoardCode.GDNewTextInputObjects1);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "ce2abb6b-15fb-400e-8fed-f3f72d3ec75b", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("score")), (( gdjs.Leader_95BoardCode.GDNewTextInputObjects1.length === 0 ) ? "" :gdjs.Leader_95BoardCode.GDNewTextInputObjects1[0].getText()));
}}

}


};gdjs.Leader_95BoardCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButton2"), gdjs.Leader_95BoardCode.GDGreenButton2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Leader_95BoardCode.GDGreenButton2Objects2.length;i<l;++i) {
    if ( gdjs.Leader_95BoardCode.GDGreenButton2Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Leader_95BoardCode.GDGreenButton2Objects2[k] = gdjs.Leader_95BoardCode.GDGreenButton2Objects2[i];
        ++k;
    }
}
gdjs.Leader_95BoardCode.GDGreenButton2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16407300);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "ce2abb6b-15fb-400e-8fed-f3f72d3ec75b", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isLeaderboardViewLoaded();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Leader_Board");
}}

}


};gdjs.Leader_95BoardCode.mapOfGDgdjs_9546Leader_959595BoardCode_9546GDChevronArrowLeftObjects2Objects = Hashtable.newFrom({"ChevronArrowLeft": gdjs.Leader_95BoardCode.GDChevronArrowLeftObjects2});
gdjs.Leader_95BoardCode.mapOfGDgdjs_9546Leader_959595BoardCode_9546GDChevronArrowRightObjects2Objects = Hashtable.newFrom({"ChevronArrowRight": gdjs.Leader_95BoardCode.GDChevronArrowRightObjects2});
gdjs.Leader_95BoardCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ChevronArrowLeft"), gdjs.Leader_95BoardCode.GDChevronArrowLeftObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Leader_95BoardCode.mapOfGDgdjs_9546Leader_959595BoardCode_9546GDChevronArrowLeftObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16408964);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ChevronArrowRight"), gdjs.Leader_95BoardCode.GDChevronArrowRightObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Leader_95BoardCode.mapOfGDgdjs_9546Leader_959595BoardCode_9546GDChevronArrowRightObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16409852);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Leader_95BoardCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Leader_95BoardCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Leader_95BoardCode.GDScoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


};gdjs.Leader_95BoardCode.eventsList4 = function(runtimeScene) {

{


gdjs.Leader_95BoardCode.eventsList0(runtimeScene);
}


{


gdjs.Leader_95BoardCode.eventsList1(runtimeScene);
}


{


gdjs.Leader_95BoardCode.eventsList2(runtimeScene);
}


{


gdjs.Leader_95BoardCode.eventsList3(runtimeScene);
}


};

gdjs.Leader_95BoardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Leader_95BoardCode.GDbackgroundObjects1.length = 0;
gdjs.Leader_95BoardCode.GDbackgroundObjects2.length = 0;
gdjs.Leader_95BoardCode.GDbackgroundObjects3.length = 0;
gdjs.Leader_95BoardCode.GDBack_9595ButtonObjects1.length = 0;
gdjs.Leader_95BoardCode.GDBack_9595ButtonObjects2.length = 0;
gdjs.Leader_95BoardCode.GDBack_9595ButtonObjects3.length = 0;
gdjs.Leader_95BoardCode.GDChevronArrowLeftObjects1.length = 0;
gdjs.Leader_95BoardCode.GDChevronArrowLeftObjects2.length = 0;
gdjs.Leader_95BoardCode.GDChevronArrowLeftObjects3.length = 0;
gdjs.Leader_95BoardCode.GDChevronArrowRightObjects1.length = 0;
gdjs.Leader_95BoardCode.GDChevronArrowRightObjects2.length = 0;
gdjs.Leader_95BoardCode.GDChevronArrowRightObjects3.length = 0;
gdjs.Leader_95BoardCode.GDScoreObjects1.length = 0;
gdjs.Leader_95BoardCode.GDScoreObjects2.length = 0;
gdjs.Leader_95BoardCode.GDScoreObjects3.length = 0;
gdjs.Leader_95BoardCode.GDNewTextInputObjects1.length = 0;
gdjs.Leader_95BoardCode.GDNewTextInputObjects2.length = 0;
gdjs.Leader_95BoardCode.GDNewTextInputObjects3.length = 0;
gdjs.Leader_95BoardCode.GDCheckScoreObjects1.length = 0;
gdjs.Leader_95BoardCode.GDCheckScoreObjects2.length = 0;
gdjs.Leader_95BoardCode.GDCheckScoreObjects3.length = 0;
gdjs.Leader_95BoardCode.GDGreenButtonObjects1.length = 0;
gdjs.Leader_95BoardCode.GDGreenButtonObjects2.length = 0;
gdjs.Leader_95BoardCode.GDGreenButtonObjects3.length = 0;
gdjs.Leader_95BoardCode.GDGreenButton2Objects1.length = 0;
gdjs.Leader_95BoardCode.GDGreenButton2Objects2.length = 0;
gdjs.Leader_95BoardCode.GDGreenButton2Objects3.length = 0;
gdjs.Leader_95BoardCode.GDximageObjects1.length = 0;
gdjs.Leader_95BoardCode.GDximageObjects2.length = 0;
gdjs.Leader_95BoardCode.GDximageObjects3.length = 0;
gdjs.Leader_95BoardCode.GDText_9595_9595Score_9595Objects1.length = 0;
gdjs.Leader_95BoardCode.GDText_9595_9595Score_9595Objects2.length = 0;
gdjs.Leader_95BoardCode.GDText_9595_9595Score_9595Objects3.length = 0;

gdjs.Leader_95BoardCode.eventsList4(runtimeScene);

return;

}

gdjs['Leader_95BoardCode'] = gdjs.Leader_95BoardCode;
