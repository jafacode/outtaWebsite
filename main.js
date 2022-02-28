window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var program = document.getElementById("programImage");
    var book = document.getElementById("bookImage");
    var resource = document.getElementById("resourceImage");
    
    if (document.documentElement.scrollTop > 450 && document.documentElement.scrollTop < 730)
        program.src = "./images/프로그램 일러 hover.png";   
    else
        program.src = "./images/프로그램 일러 default.png";
    if (document.documentElement.scrollTop > 730 && document.documentElement.scrollTop < 1100)
        book.src = "./images/책 hover.png"
    else
        book.src = "./images/책 default.png"
    if (document.documentElement.scrollTop > 1100 && document.documentElement.scrollTop < 1210)
        resource.src = "./images/자료실 hover.png"
    else
        resource.src = "./images/자료실 default.png"
}