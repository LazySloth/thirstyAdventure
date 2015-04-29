function setCookie(name, refreshed, sobriety, mental, deplacement ) {
        var today = new Date(), expires = new Date();
        expires.setTime(today.getTime() + (365*24*60*60*1000));
        document.cookie = name + "=" + encodeURIComponent(refreshed) +" "+ encodeURIComponent(sobriety) +" "+ encodeURIComponent(mental) +" "+ encodeURIComponent(deplacement) + ";expires=" + expires.toGMTString();
}