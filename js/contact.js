function contactPageLoading() {
    var response=getModel(url+"/contact/getAllData");

    setValueById("address",response.data.address);
    setValueById("mail",response.data.mail);
    setValueById("phoneNumber",response.data.phoneNumber);
    setValueById("fax",response.data.fax);
}


