function checkCookie() {
    var username=getCookie(name);
    if (username!="") {
        alert("Welcome again " + username);
    }else{
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", 10,50,30,200);
        }
    }
}