$(document).ready(function(){
    $(".text-container").hide().fadeIn(2000); 
  });

$(document).ready(function(){
    $(".img").hide().fadeIn(1000); 
  });

$(document).ready(function(){
    $(".box").hover(function(){
        $(this).css({
            "transform": "scale(1.1)", /* 크기 1.5배 확대 */
            "transition": "0.3s" /* 부드러운 애니메이션 */
        });
    }, function(){
        $(this).css("transform", "scale(1)"); /* 원래 크기로 복귀 */
    });

});

$(document).ready(function(){
    // 초기 상태를 숨김 처리 (또는 CSS에서 display: none; 설정)
    $(".img2").hide();

    $(window).on('scroll', function() {
        // 예를 들어, 스크롤이 300px 이상 내려가면 애니메이션 실행
        if ($(this).scrollTop() > 300) {
            $(".img2").fadeIn(2000);  // 1초 동안 서서히 나타남
        }
    });
});

$(document).ready(function(){
    $(".planet img, .sun").hover(
      function(){
        $(this).css({
          "transform": "scale(1.2)",
          "transition": "transform 0.3s ease"
        });
      },
      function(){
        $(this).css({
          "transform": "scale(1)",
          "transition": "transform 0.3s ease"
        });
      }
    );
  });
  
  $(document).ready(function(){
    $(".planet").hover(
      function(){
        // 마우스 오버 시 해당 행성의 온도 텍스트를 표시
        $(this).find(".temp").fadeIn(300);
      },
      function(){
        // 마우스가 떠날 때 온도 텍스트를 숨김
        $(this).find(".temp").fadeOut(300);
      }
    );
  });
