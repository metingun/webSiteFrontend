function htmlTemplate(responseData) {
    return '<tr id="collectionRow' + responseData.id + '" data-value="' + responseData.id + '">' +
        '<th scope="row">' +
        '<div class="media align-items-center">' +
        '<div class="media-body">' +
        '<span class="name mb-0 text-sm">' + responseData.pic1.substring(0, 12) + '</span>' +
        '</div></div>' +
        '</th>' +
        '<td class="budget">' + responseData.pic2.substring(0, 12) + '</td>' +
        '<td class="constantProp">' + responseData.productName.substring(0, 12) + '</td>' +
        '<td>' + responseData.comment.substring(0, 10) + '</td>' +
        '<td>' + responseData.productProperties.substring(0, 15) + '</td>' +
        '<td>' + responseData.sex + '</td>' +
        '<td>' + responseData.language + '</td>' +
        '<td>' +
        '<button class="btn btn-info btn-lg" data-target="#collectionModal" data-toggle="modal" onclick="loadCollectionInfo(' + responseData.id + ')">' +
        '<i class="fas fa-edit"></i></button>' +
        '<button class="btn btn-info btn-lg" onclick="deleteCollection(' + responseData.id + ')">' +
        '<i class="far fa-trash-alt"></i></button></td>' +
        '</tr>';
}
var productIdd=0;
function loadCollectionInfo(id){
    productIdd=id;
    var response=getModel(url+"/collection/getDataById/"+id).data;
    setValueById("pic1",response.pic1);
    setValueById("pic2",response.pic2);
    setValueById("productName",response.productName);
    setValueById("comment",response.comment);
    setValueById("productProperties",response.productProperties);
}
function updateCollectionData(){
    var response1=getModel(url+"/collection/getDataById/"+productIdd).data;

    var pic1=(getValueById("pic1Edit")==="")?response1.pic1:getValueById("pic1Edit");
    var pic2=(getValueById("pic2Edit")==="")?response1.pic2:getValueById("pic2Edit");
    var productName=(getValueById("productNameEdit")==="")?response1.productName:getValueById("productNameEdit");
    var comment=(getValueById("commentEdit")==="")?response1.comment:getValueById("commentEdit");
    var productProperties=(getValueById("productPropertiesEdit")==="")?response1.productProperties:getValueById("productPropertiesEdit");

    var postData={
        "id":productIdd,
        "pic1":pic1,
        "pic2":pic2,
        "productName":productName,
        "comment":comment,
        "productProperties":productProperties
    }

    var response=postModel(url+"/collection/update",postData).data;
    if (response==="200") {
        alert("Başarılı!", "Koleksiyon başarıyla güncellendi...");
        collectionPageAdmin();
    }else{
        alert("Hata!", "İşlem başarısız !!");
    }
}
function collectionPageAdmin() {
    document.getElementById("collectionList").innerHTML="";
    const response = getModel(url+"/collection/getAllData");
    for (let i=0; i<response.data.length; i++){
        document.getElementById("collectionList").innerHTML+=htmlTemplate(response.data[i]);
    }

}

function deleteCollection(id) {
    document.getElementById("collectionRow"+id).remove();
    getModel(url+"/collection/deleteData/"+id);
}

function createCollection() {
    var pic1=document.getElementById("inputPic1").value;
    var pic2=document.getElementById("inputPic2").value;
    var productName=document.getElementById("inputProductName").value;
    var comment=document.getElementById("inputComment").value;
    var productProperties=document.getElementById("inputProductProperties").value;
    var inputSex=document.getElementById("inputSex").value;
    var inputLang=document.getElementById("inputLang").value;

    var requestData={
        "pic1": pic1,
        "productName": productName,
        "comment": comment,
        "productProperties": productProperties,
        "pic2": pic2,
        "sex": inputSex,
        "language": inputLang
    };

    var post=postModel(url+"/collection/saveData",requestData);
    if (post.code===200){
        document.getElementById("collectionList").innerHTML+=htmlTemplate(post.data);

        document.getElementById("inputPic1").value="";
        document.getElementById("inputPic2").value="";
        document.getElementById("inputProductName").value="";
        document.getElementById("inputComment").value="";
        document.getElementById("inputProductProperties").value="";
        alert("Ürün başarıyla eklendi...");
    }
    else{
        alert("Aynı isimde ürün mevcut !!! Lütfen eklediğiniz ürünü sayfayı yenileyip siliniz...");
    }

}
