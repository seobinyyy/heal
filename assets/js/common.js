// 인클루드 코드 (header.html, footer.html) // 추후 불필요 시 삭제
window.addEventListener('load', function() {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});

// 디바이스 확인
function isMobile(){
    const userAgent = navigator.userAgent;
    if (userAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || userAgent.match(/LG|SAMSUNG|Samsung/) != null) {
        return true;
    } else {
        return false;
    }
}

$(function(){
    // 모달창 열기
    var $btnModal = $(".btn-modal");
    var $modal = $(".modal");

    $btnModal.on("click", function(){
        if($(this).attr("data-show") == $modal.attr("id")){
            var dataShow = $(this).attr("data-show");
            $modal.attr("id",dataShow).show();
        }
    });
    
    // 모달창 닫기
    // var $modalClose = $("button").hasattr("data-dismiss","modal");
    // $modalClose.on("click", function(){
        // if($(this).attr("") == "modal"){
            // alert("d");
        // $(this).parents(".modal").hide();
        // }
        
    // });

    if(isMobile()) {
        // mobile only code
        console.log("mobile");
    } else {
        // pc only code
        console.log("pc");
        // $("header .main-menu").overmouse(function(){
        //     $(this).addClass("active");
        // }).leavemouse(function(){
        //     $(this).removeClass("active");
        // });
    }

    // 모바일 | 헤더메뉴 열기
    $(".btn-nav-menu").on("click", function(){
        $(this).toggleClass("active");
    });

});