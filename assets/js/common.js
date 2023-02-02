// 인클루드 코드 (header.html, footer.html) // 추후 삭제
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
        var dataShow = $(this).attr("data-show");
        $("#"+dataShow).show();
    });
    
    // 모달창 닫기
    var $modalClose = $("button");
    $modalClose.on("click", function(){
        if($(this).attr("data-dismiss") == "modal"){
            $(this).parents(".modal").hide();
        }else{
            
        }
    });

    // 디바이스 분기 처리
    if(isMobile()) {
        // mobile only code
        console.log("mobile");

        var addition_constant = 0;
        $(document.body).on('touchmove', onScroll); // for mobile
        $(window).on('scroll', onScroll);

        function onScroll() {
            var addition = ($(window).scrollTop());
            // var scrollHeight = (document.body.scrollHeight - 1);
            // if (addition > scrollHeight && addition_constant < addition) {
            if (addition < 50) {
                // addition_constant = addition;

                // loadmorecontest();

                console.log("1");
                $("header").removeClass("on");
            }else{
                console.log("2");
                $("header").addClass("on");
            }
        }
        
    } else {
        // pc only code
        console.log("pc");
        $("header .dep01").mouseover(function(){
            $("header").addClass("hover");
        }).mouseleave(function(){
            $("header").removeClass("hover");
        });
    }

    $(window).on("scroll", function() {
        var winoffset = $(window).scrollTop();
        if (winoffset > 50) {
            $("header").addClass("on");
        }else{
            $("header").removeClass("on");
        }
    });

    // 모바일 | 헤더메뉴 열기
    $(".btn-nav-menu").on("click", function(){
        $(this).toggleClass("active");
    });

});