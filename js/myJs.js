let squarColor = $(".squarColor");

squarColor.eq(0).css("backgroundColor", "lightgreen");
squarColor.eq(1).css("backgroundColor", "orange");
squarColor.eq(2).css("backgroundColor", "#09c");
squarColor.eq(3).css("backgroundColor", "aqua");
squarColor.eq(4).css("backgroundColor", "#15d");
squarColor.eq(5).css("backgroundColor", "yellow");

$(".sittingicon").click(function () {

  let boxwidth = $(".colorBox").innerWidth();

  if ($(".colorBox").css("display") == "none") {

   $(".colorBox").slideDown(1000)

  } else {

    if ($(".sitting").css("left") == `0px`) {
      $(".sitting").animate({ left: `-${boxwidth}` }, 1000);
    } else {
      $(".sitting").animate({ left: 0 }, 1000);
    }
  }
});

squarColor.click(function(e){

  changeColor= $(e.target).css("backgroundColor");
  console.log(changeColor)
  let changeCooloor =document.querySelectorAll(".changeCooloor");
  console.log(changeCooloor)
for(i=0;i<changeCooloor.length;i++){
  changeCooloor[i].style.cssText = `color: ${changeColor} !important`

}


  
})



$(".ball").click(function () {

  // $(window).scrollTop(0);
$("html,body").animate({scrollTop : 0 },3000)  



});





$(window).scroll(function(){
  let windowOffset = $(window).scrollTop();
  let offsetItems = $("#about").offset().top;

if(windowOffset > offsetItems){

  $("#nav").css("backgroundColor","black");
  $("#nav").css("transition","all 2s");
}else{
  $("#nav").css("backgroundColor","transparent" );
}
})





$("a").click(function(e){

  element=e.target
  let elementHref = $(element).attr("href");
  let offsetElement = $(elementHref).offset().top;
  console.log(offsetElement)
  $("html,body").animate({scrollTop : (offsetElement - 50) },3000)    
})

$(document).ready(function(){
  $(".loadlay").css("visibility","hidden");
  $(".loadlay").css("transition","all 2s");
  $("body").css("overflow","scroll")

})






