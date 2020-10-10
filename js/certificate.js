function htmlTemplate(responseData) {
    return "<div class='item-blog p-b-80'>" +
        "<a class='item-blog-img pos-relative dis-block hov-img-zoom'>" +
        "<img class='full-center' src='"+responseData.pic1+"' alt='IMG-BLOG' style='width: 65%;'>" +
        "</a>" +
        "<div class='item-blog-txt p-t-33'>" +
        "<h4 class='p-b-11'>" +
        "<a class='m-text24 full-center'>"+responseData.certificateName+"</a>" +
        "</h4>" +
        "<p class='p-b-12 full-center'>"+responseData.comment+"</p>" +
        "</div></div>";
}

function certificatePageLoading() {
    var response=getModel(url+"/certificates/getAllData/language="+getCookie('activeLanguage'));
    document.getElementById("itemBlogs").innerHTML="";
    for (let i=0;i<response.data.length;i++){
        document.getElementById("itemBlogs").innerHTML+=htmlTemplate(response.data[i]);
    }

}


