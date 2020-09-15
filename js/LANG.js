var activeLanguage="tr";


var arrLang = {
    'en': {
        'title': 'About Us',
        'turkish': 'Turkish',
        'english': 'English',
        'homepage': 'Home Page',
        'collection': 'Collection',
        'referance': 'References',
        'aboutus': 'About Us',
        'certificate': 'Certificates',
        'product': 'Production',
        'contact': 'Contact Us',
        'mission': 'Our Mission',
        'vision': 'Our Vision',
        'contactus': 'Contact Us',
        'categories': 'Categories',
        'man': 'Man',
        'woman': 'Woman',
        'kids': 'Kids',
        'links': 'Links',
        'mail': 'Mail   :',
        'websiteowner': '\t\t\t\tThis website is made by Metin Gün. | Contact Us: 0546-628-76-02 | metingun0202@gmail.com\n',
        'ourcertificates': 'Our Certificates',
        'ourachievements': 'Our Achievements...',
        'productioncatalog': 'Product Catalogue',
        'factory': 'Factory',
        'ourbusinesspartners': 'Our Business Partners',
        'bazmentextile': 'Bazmen Textile',
        'all': 'All',
        'address': 'Office Address   :',
        'phone': 'Phone Number   :',
        'fax': 'Fax   :',
        'sendmessage': 'Send Us Message',
        'send': 'Send',
        'namesurname': 'Full Name',
        'email': 'E-mail',
        'phonenumber': 'Phone Number',
        'writemessage': 'Write your message here...',
        'searchproduct': 'Search Product...'


    },
    'tr': {
        'title': 'Hakkımızda',
        'turkish': 'Türkçe',
        'english': 'İngilizce',
        'homepage': 'Ana Sayfa',
        'collection': 'Koleksiyon',
        'referance': 'Referanslar',
        'aboutus': 'Hakkımızda',
        'certificate': 'Sertifikalar',
        'product': 'Üretim',
        'contact': 'İletişime Geçin',
        'mission': 'Misyonumuz',
        'vision': 'Vizyonumuz',
        'contactus': 'TEMASTA OLUN',
        'categories': 'Kategoriler',
        'man': 'Erkek',
        'woman': 'Kadın',
        'kids': 'Çocuk',
        'links': 'Linkler',
        'mail': 'Mail Adresi   :',
        'websiteowner': '\t\t\t\tBu web sitesi Metin Gün tarafından yapılmıştır. | İletişim için: 0546-628-76-02 | metingun0202@gmail.com\n',
        'ourcertificates': 'Sertifikalarımız',
        'ourachievements': 'Başarılarımız...',
        'productioncatalog': 'Ürün Kataloğu',
        'factory': 'İmalathane',
        'ourbusinesspartners': 'İş Ortaklarımız',
        'bazmentextile': 'Bazmen Tekstil',
        'all': 'Tümü',
        'address': 'Ofis Adresi   :',
        'phone': 'Telefon No   :',
        'fax': 'Fax   :',
        'sendmessage': 'BİZE MESAJ BIRAKIN',
        'send': 'Gönder',
        'namesurname': 'İsim Soyisim',
        'email': 'Mail Adresi',
        'phonenumber': 'Telefon Numarası',
        'writemessage': 'Mesajınızı buraya yazınız...',
        'searchproduct': 'Ürün Ara...'
    }
};

function langController(lang){
    $('.langplc').each(function(index, item) {
        $(this).attr('placeholder',arrLang[lang][$(this).attr('key')]);
    });
    $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
    });
}

// Process translation
$(function() {
    $('.translate').click(function() {
        var lang = $(this).attr('data-lang');
        activeLanguage=lang;
        document.cookie = "activeLanguage="+activeLanguage+"; path=/;";
        langController(lang)
    });
});
