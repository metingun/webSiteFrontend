function htmlTemplate(responseData) {
    return "<div class='col-sm-12 col-md-12 col-lg-6 p-b-50 containerx'>" +
        "<div class='square'>"+
        "<img class='imgx mask' src='"+responseData.pic1+"' alt='IMG-PRODUCT'>" +
        "<div class='h1x m-text24 full-center'>"+responseData.productTitle+"</div>"+
        "<p class='px'>"+responseData.comment+"</p>"+
        "</div></div>";
}
function productPhotosLoading() {
    var response=getModel(url+"/product/getAllData/language="+getCookie("activeLanguage"));
    document.getElementById("collectionRow").innerHTML="";
    for (let i=0; i<response.data.length; i++){
        document.getElementById("collectionRow").innerHTML+=htmlTemplate(response.data[i]);
    }
}

