function aboutUsPageLoading() {
    var response=getModel(url+"/aboutUs/getAllData");

    setAttributeById("missionPic","src",response.data.missionPic);
    setValueById("missionComment",response.data.missionComment);
    setValueById("missionSpeak",response.data.missionSpeak);
    setValueById("missionSpeakerName","- "+response.data.missionSpeakerName);

    setAttributeById("visionPic","src",response.data.visionPic);
    setValueById("visionComment",response.data.visionComment);
    setValueById("visionSpeak",response.data.visionSpeak);
    setValueById("visionSpeakerName","- "+response.data.visionSpeakerName);
}
