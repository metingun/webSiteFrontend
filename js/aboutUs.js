function aboutUsPageLoading() {
    var response=getModel(url+"/aboutUs/getAllData");

    setAttributeById("missionPic","src",response.data.missionPic);
    setAttributeById("visionPic","src",response.data.visionPic);

    if (getCookie("activeLanguage")==="English"){
        setValueById("missionComment",response.data.missionCommentEn);
        setValueById("missionSpeak",response.data.missionSpeakEn);
        setValueById("missionSpeakerName","- "+response.data.missionSpeakerNameEn);

        setValueById("visionComment",response.data.visionCommentEn);
        setValueById("visionSpeak",response.data.visionSpeakEn);
        setValueById("visionSpeakerName","- "+response.data.visionSpeakerNameEn);
    }
    if (getCookie("activeLanguage")==="Türkçe"){
        setValueById("missionComment",response.data.missionComment);
        setValueById("missionSpeak",response.data.missionSpeak);
        setValueById("missionSpeakerName","- "+response.data.missionSpeakerName);

        setValueById("visionComment",response.data.visionComment);
        setValueById("visionSpeak",response.data.visionSpeak);
        setValueById("visionSpeakerName","- "+response.data.visionSpeakerName);
    }

}
