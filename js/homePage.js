function homePageLoading() {
    var response=getModel(url+"/homePage/getAllData");

    setAttributeForBackgroundImg("bannerpic1","style",response.data.bannerPic1);
    setAttributeForBackgroundImg("bannerpic2","style",response.data.bannerPic2);
    setAttributeForBackgroundImg("bannerpic3","style",response.data.bannerPic3);

    setValueById("bannerTitle1",response.data.bannerTitle);
    setValueById("bannerTitle2",response.data.bannerTitle);
    setValueById("bannerTitle3",response.data.bannerTitle);

    setValueById("bannerSubtitle1",response.data.bannerSubtitle);
    setValueById("bannerSubtitle2",response.data.bannerSubtitle);
    setValueById("bannerSubtitle3",response.data.bannerSubtitle);

    setValueById("bannerButtonText1",response.data.bannerButtonText);
    setValueById("bannerButtonText2",response.data.bannerButtonText);
    setValueById("bannerButtonText3",response.data.bannerButtonText);

    setValueById("title1",response.data.title1);
    setAttributeById("pic1","src",response.data.pic1);
    setAttributeById("pic2","src",response.data.pic2);
    setAttributeById("pic3","src",response.data.pic3);

    setValueById("newSeasonTitle",response.data.newSeasonTitle);
    setAttributeById("newSeasonPic1","src",response.data.newSeasonPic1);
    setAttributeById("newSeasonPic2","src",response.data.newSeasonPic2);
    setAttributeById("newSeasonPic3","src",response.data.newSeasonPic3);
    setAttributeById("newSeasonPic4","src",response.data.newSeasonPic4);
    setAttributeById("newSeasonPic5","src",response.data.newSeasonPic5);
    setAttributeById("newSeasonPic6","src",response.data.newSeasonPic6);
    setAttributeById("newSeasonPic7","src",response.data.newSeasonPic7);
    setAttributeById("newSeasonPic8","src",response.data.newSeasonPic8);
}



