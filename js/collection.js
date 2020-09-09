function htmlTemplate(responseData) {
    return "<div class='col-sm-12 col-md-6 col-lg-4 p-b-50'>" +
        "<div class='block2'>" +
        "<div class='block2-img wrap-pic-w of-hidden pos-relative '>" +
        "<img src='"+responseData.pic1+"' alt='IMG-PRODUCT'>" +
        "<div class='block2-overlay trans-0-4'>" +
        "<a href='#' class='block2-btn-addwishlist hov-pointer trans-0-4'>" +
        "<i class='icon-wishlist icon_heart_alt' aria-hidden='true'></i>" +
        "<i class='icon-wishlist icon_heart dis-none' aria-hidden='true'></i>" +
        "</a>" +
        "<div class='block2-btn-addcart w-size1 trans-0-4'></div></div></div>" +
        "<div class='block2-txt p-t-20'>" +
        "<a class='block2-name dis-block s-text3 p-b-5'>"+responseData.productName+"</a>" +
        "</div></div></div>";
}
function collectionLoading() {
    var response=getModel(url+"/collection/getAllData");
    for (let i=0; i<response.data.length; i++){
        document.getElementById("collectionRow").innerHTML+=htmlTemplate(response.data[i]);
    }
}

