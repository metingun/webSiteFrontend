function sendMessage() {
    var username=document.getElementById("usernameFM").value;
    var phoneNumber=document.getElementById("phoneNumberFM").value;
    var mail=document.getElementById("mailFM").value;
    var message=document.getElementById("messageFM").value;

    var requestData={
        "username": username,
        "phoneNumber": phoneNumber,
        "mail":mail,
        "message":message
    };

    if (username!=="" && phoneNumber!=="" && mail!=="" && message!==""){
        postModel(url+"/message/sendMessage",requestData);
        alert("Mesajınız Başarıyla İletildi.");
        location.href=""+urlFrontend+"/contact.html";
    }
    else {
        alert("Lütfen Tüm Bölmeleri Doldurunuz.")
    }

}
