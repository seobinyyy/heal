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
    var $modalClose = $("button").hasattr("data-dismiss","modal");
    $modalClose.on("click", function(){
        // if($(this).attr("") == "modal"){
            alert("d");
        // $(this).parents(".modal").hide();
        // }
        
    });


});