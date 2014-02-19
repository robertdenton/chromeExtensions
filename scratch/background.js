console.log('hello');
$(".listingArticleBlurb").remove();
$(".listing5ImageBox").remove();
$("#header").remove();
$("#outerRightRegion").remove();
$("#footer").remove();
$("#jBar").remove();
$("#jBarRetract").remove();
$("#postHeader1").remove();
$("#preHeader").remove();
$(".was-figure").remove();
$(".excerpt").remove();
$(".carousel").remove();	
$("#sponsorLinks").remove();
$("#riseUpAd").remove();
$(".ad").remove();
$("#recommended").remove();
$(".articlePosition1").remove();
$("img").remove();
$("iframe").remove();
$(".articlePositionHeader").remove();
$(".articlePosition1").remove();
$(".articlePosition2").remove();
$(".articlePosition3").remove();
$(".articlePosition4").remove();
$(".articlePosition5").remove();
$(".articlePosition6").remove();
$(".articlePosition7").remove();
$(".articlePosition8").remove();
$(".articlePosition9").remove();
$(".articlePosition10").remove();
$("#mc-embed-container").remove();

$("*").each(function(){
	$(this).css("font-family","Comic Sans MS");
});
$(".articleBody").css("font-family","Comic Sans MS");
$("body").css("font-family","Comic Sans MS");

window.addEventListener('load', function (e) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'newstyle.css';
    document.head.appendChild(link);
}, false);