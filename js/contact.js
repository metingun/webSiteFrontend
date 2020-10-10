function contactPageLoading() {
    var response=getModel(url+"/contact/getAllData");

    if (getCookie("activeLanguage")==="Türkçe") {
        setValueById("address",response.data.address);
    }
    if (getCookie("activeLanguage")==="English") {
        setValueById("address",response.data.addressEn);
    }

    setValueById("mail",response.data.mail);
    setValueById("phoneNumber",response.data.phoneNumber);
    setValueById("fax",response.data.fax);
}


