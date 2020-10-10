function homePageLoading() {
    var response=getModel(url+"/homePage/getAllData").data;

    setAttributeForBackgroundImg("bannerpic1","style",response.bannerPic1);
    setAttributeForBackgroundImg("bannerpic2","style",response.bannerPic2);
    setAttributeForBackgroundImg("bannerpic3","style",response.bannerPic3);
    setAttributeById("pic1","src",response.pic1);
    setAttributeById("pic2","src",response.pic2);
    setAttributeById("pic3","src",response.pic3);
    setAttributeById("newSeasonPic1","src",response.newSeasonPic1);
    setAttributeById("newSeasonPic2","src",response.newSeasonPic2);
    setAttributeById("newSeasonPic3","src",response.newSeasonPic3);
    setAttributeById("newSeasonPic4","src",response.newSeasonPic4);
    setAttributeById("newSeasonPic5","src",response.newSeasonPic5);
    setAttributeById("newSeasonPic6","src",response.newSeasonPic6);
    setAttributeById("newSeasonPic7","src",response.newSeasonPic7);
    setAttributeById("newSeasonPic8","src",response.newSeasonPic8);

    if (getCookie("activeLanguage")==="English"){
        setValueById("bannerTitle1",response.bannerTitleEn);
        setValueById("bannerTitle2",response.bannerTitleEn);
        setValueById("bannerTitle3",response.bannerTitleEn);

        setValueById("bannerSubtitle1",response.bannerSubtitleEn);
        setValueById("bannerSubtitle2",response.bannerSubtitleEn);
        setValueById("bannerSubtitle3",response.bannerSubtitleEn);

        setValueById("bannerButtonText1",response.bannerButtonTextEn);
        setValueById("bannerButtonText2",response.bannerButtonTextEn);
        setValueById("bannerButtonText3",response.bannerButtonTextEn);

        setValueById("title1",response.title1En);
        setValueById("newSeasonTitle",response.newSeasonTitleEn);
    }
    else if (getCookie("activeLanguage")==="Türkçe"){
        setValueById("bannerTitle1",response.bannerTitle);
        setValueById("bannerTitle2",response.bannerTitle);
        setValueById("bannerTitle3",response.bannerTitle);

        setValueById("bannerSubtitle1",response.bannerSubtitle);
        setValueById("bannerSubtitle2",response.bannerSubtitle);
        setValueById("bannerSubtitle3",response.bannerSubtitle);

        setValueById("bannerButtonText1",response.bannerButtonText);
        setValueById("bannerButtonText2",response.bannerButtonText);
        setValueById("bannerButtonText3",response.bannerButtonText);

        setValueById("title1",response.title1);
        setValueById("newSeasonTitle",response.newSeasonTitle);
    }



}



