function htmlTemplate(responseData) {
    return "<div class='col-sm-12 col-md-6 col-lg-4 p-b-50 searchRow'>" +
        "<div class='block2'>" +
        "<div class='block2-img wrap-pic-w of-hidden pos-relative '>" +
        "<img class='height-360' src='"+responseData.pic1+"' alt='IMG-PRODUCT' " +
        "data-toggle='modal' data-target='#myModal' onclick='setProductDetailModal("+responseData.id+");'>" +
        "</div>" +
        "<div class='block2-txt p-t-20'>" +
        "<a class='block2-name dis-block s-text3 p-b-5' data-toggle='modal' data-target='#myModal'" +
        "onclick='setProductDetailModal("+responseData.id+");'>"+responseData.productName+"</a>" +
        "</div></div></div>";
}
function collectionLoading(sexId,id,refresh) {
    if (refresh===1){
        location.href=""+urlFrontend+"/collection.html";
    }
    var value=document.getElementById(id).textContent;
    setValueById("collectionTag",value);
    var response=getModel(url+"/collection/getDataBySex/"+sexId).data;
    document.getElementById("collectionRow").innerHTML = "";
    for (let i=0; i<response.length; i++){
        document.getElementById("collectionRow").innerHTML+=htmlTemplate(response[i]);
    }
}

function setProductDetailModal(id) {
    var response=getModel(url+"/collection/getDataById/"+id).data;

    setValueById("bread1",response.sex);
    setValueById("bread2",response.productName);
    setValueById("modalProductName",response.productName);
    setValueById("modalComment",response.comment);
    setValueById("modalProperties",response.productProperties);

    setAttributeById("modalImage1","src",response.pic1);
    setAttributeById("modalImage2","src",response.pic2);
    setAttributeById("modalSlick0","src",response.pic1);
    setAttributeById("modalSlick1","src",response.pic2);
    setAttributeById("slick-slide00","data-thumb",response.pic1);
    setAttributeById("slick-slide01","data-thumb",response.pic2);
    document.getElementById("thumb1").click();
    document.getElementById("thumb0").click();
}

function searchProduct() {
    var searchInput, filter, collectionRow, searchRow, a, i, txtValue;

    searchInput = document.getElementById("searchInput");
    filter = searchInput.value.toUpperCase();

    collectionRow = document.getElementById("collectionRow");
    searchRow = collectionRow.getElementsByClassName("searchRow");
    for (i = 0; i < searchRow.length; i++) {
        a = searchRow[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            searchRow[i].style.display = "";
        } else {
            searchRow[i].style.display = "none";
        }
    }
}
