$(document).ready(function(){
    $(".text-container").hide().fadeIn(2000); 
  });


$(document).ready(function(){
    // 초기 상태를 숨김 처리 (또는 CSS에서 display: none; 설정)
    $(".ques").hide();

    $(window).on('scroll', function() {
        // 예를 들어, 스크롤이 300px 이상 내려가면 애니메이션 실행
        if ($(this).scrollTop() > 300) {
            $(".ques").fadeIn(2000);  // 1초 동안 서서히 나타남
        }
    });
});


  
  