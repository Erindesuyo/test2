$(document).ready(function(){
    $(".text-container, .constellations").hide().fadeIn(2000); 
  });


$(document).ready(function(){
    // 별자리 이미지 클릭 시 모달에 정보 표시
    $('.constellation').on('click', function(){
      var name = $(this).attr('alt');
      var infoText = $(this).data('info');
      
      $('.info-name').text(name);
      $('.info-text').text(infoText);
      
      // 모달의 display를 flex로 지정하고 fadeIn
      $('.info-overlay').css('display', 'flex').hide().fadeIn(300);
    });
  
    // 모달 닫기 버튼 클릭 시 모달 숨기기
    $('.close-btn').on('click', function(){
      $('.info-overlay').fadeOut(300);
    });
  });




// 별자리 찾기 
function findZodiacSign() {
  const birthdate = document.getElementById("birthdate").value;
  
  if (!birthdate) {
      alert("Please enter your birthdate!");
      return;
  }

  const date = new Date(birthdate);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;

  const zodiacSigns = [
      { name: "Capricorn", description: "The Sea Goat. Practical and disciplined.", start: { month: 12, day: 22 }, end: { month: 1, day: 19 } },
      { name: "Aquarius", description: "The Water Bearer. Independent and inventive.", start: { month: 1, day: 20 }, end: { month: 2, day: 18 } },
      { name: "Pisces", description: "The Fish. Compassionate and artistic.", start: { month: 2, day: 19 }, end: { month: 3, day: 20 } },
      { name: "Aries", description: "The Ram. Confident and courageous.", start: { month: 3, day: 21 }, end: { month: 4, day: 19 } },
      { name: "Taurus", description: "The Bull. Reliable and patient.", start: { month: 4, day: 20 }, end: { month: 5, day: 20 } },
      { name: "Gemini", description: "The Twins. Adaptable and curious.", start: { month: 5, day: 21 }, end: { month: 6, day: 20 } },
      { name: "Cancer", description: "The Crab. Emotional and protective.", start: { month: 6, day: 21 }, end: { month: 7, day: 22 } },
      { name: "Leo", description: "The Lion. Confident and charismatic.", start: { month: 7, day: 23 }, end: { month: 8, day: 22 } },
      { name: "Virgo", description: "The Virgin. Analytical and practical.", start: { month: 8, day: 23 }, end: { month: 9, day: 22 } },
      { name: "Libra", description: "The Scales. Harmonious and fair-minded.", start: { month: 9, day: 23 }, end: { month: 10, day: 22 } },
      { name: "Scorpio", description: "The Scorpion. Passionate and resourceful.", start: { month: 10, day: 23 }, end: { month: 11, day: 21 } },
      { name: "Sagittarius", description: "The Archer. Optimistic and adventurous.", start: { month: 11, day: 22 }, end: { month: 12, day: 21 } }
  ];

  let zodiac = "Unknown";

  zodiacSigns.forEach(sign => {
      if (
          (month === sign.start.month && day >= sign.start.day) ||
          (month === sign.end.month && day <= sign.end.day)
      ) {
          zodiac = sign;
      }
  });

  document.getElementById("zodiac-name").textContent = zodiac.name;
  document.getElementById("zodiac-description").textContent = zodiac.description;
}
