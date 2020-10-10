function htmlTemplate(responseData) {
    return "<div class='item-blog p-b-80'>" +
        "<a class='item-blog-img pos-relative dis-block hov-img-zoom'>" +
        "<img src='"+responseData.pic1+"' alt='IMG-BLOG'>" +
        "</a>" +
        "<div class='item-blog-txt p-t-33'>" +
        "<h4 class='p-b-11'>" +
        "<a class='m-text24'>"+responseData.companyName+"</a>" +
        "</h4>" +
        "<p class='p-b-12'>"+responseData.comment+"</p>" +
        "</div></div>";
}
function referancePageLoading() {
    var response=getModel(url+"/referance/getAllData/language="+getCookie("activeLanguage"));
    document.getElementById("itemBlogs").innerHTML="";
    for (let i=0;i<response.data.length;i++){
        document.getElementById("itemBlogs").innerHTML+=htmlTemplate(response.data[i]);
    }
}
