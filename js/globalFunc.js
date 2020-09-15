/*
pageNumber
1 -- Home Page
2 -- Collection
3 -- Referance
4 -- About Us
5 -- Certificate
6 -- Production
7 -- Contact
*/

function findAttributeValueById(id,attributeName) {
    return document.getElementById(id).getAttribute(attributeName);
}
function getModel(url) {
    var responseModel = "";
    $.ajax({
        url:url,
        type: 'GET',
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'json',
        async: false,
        success: function (response) {
            responseModel = response;
        }
    });
    return responseModel;
}
function postModel(url, requestData) {
    var responseModel = "";
    $.ajax({
        url:url,
        type: 'POST',
        contentType: 'application/json',
        crossDomain: true,
        dataType: 'json',
        async: false,
        data: JSON.stringify(requestData),
        success: function (response) {
            responseModel = response;
        }
    });
    return responseModel;
}
function setAttributeForBackgroundImg(id,attributeName,attribute) {
    return document.getElementById(id).setAttribute(attributeName,"background-image: url("+attribute+");")
}

function setValueById(id,value) {
    document.getElementById(id).innerHTML=value;
}

function setAttributeById(id,attributeName,attribute) {
    return document.getElementById(id).setAttribute(attributeName,attribute)
}

function getCookie(cookie) {
    var name = cookie + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)===' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
function setContactInfo() {
    var response=getModel(url+"/contact/getAllData").data;
    var facebookIcon="topbar-social-item fa fa-facebook";
    var instaIcon="topbar-social-item fa fa-instagram";
    var facebookIconFS="fs-18 color1 p-r-20 fa fa-facebook";
    var instaIconFS="fs-18 color1 p-r-20 fa fa-instagram";

    if (response.facebook!==""){
        document.getElementById("sociall1").innerHTML+='<a class="'+facebookIcon+'" href="'+response.facebook+'"></a>';
        document.getElementById("sociallmobile1").innerHTML+='<a class="'+facebookIcon+'" href="'+response.facebook+'"></a>';
        document.getElementById("footerSocial").innerHTML+='<a class="'+facebookIconFS+'" href="'+response.facebook+'"></a>';

    }
    if (response.instagram!==""){
        document.getElementById("sociall1").innerHTML+='<a class="'+instaIcon+'" href="'+response.instagram+'"></a>';
        document.getElementById("sociallmobile1").innerHTML+='<a class="'+instaIcon+'" href="'+response.instagram+'"></a>';
        document.getElementById("footerSocial").innerHTML+='<a class="'+instaIconFS+'" href="'+response.instagram+'"></a>';

    }

    setValueById("maill1",response.mail);
    setValueById("footerMail1",response.mail);
    setValueById("footerMail2",response.mail);
    setValueById("footerAddress",response.address);
}
