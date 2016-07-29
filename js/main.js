// Lj - 2014-4-27

// adDetails页面切换部分
var adDetailsSlide;
function show(){

	var index=location.hash.replace(/#/,"");
	var oSlide = document.getElementById("Lj-adDetails-mainContent-show");
	var aSlideLi = oSlide.children;
	var aSlideDots = document.getElementById("Lj-adDetails-mainContent-indicators").getElementsByTagName("span");
	var aSlideTitles = document.getElementById("Lj-adDetails-mainContent-title").getElementsByTagName("li");

	var spanHeight = aSlideDots[0].offsetHeight;

	oSlide.style.width = aSlideLi.length*aSlideLi[0].offsetWidth + "px";

	adDetailsSlide = new iScroll("Lj-adDetails-mainContent-Slide",{
		snap: true,
		momentum: false,
		hScrollbar: false,
		onScrollEnd: function(){
			var thisIndex = this.currPageX;
			for(i=0;i<aSlideDots.length;i++){
				aSlideDots[i].style.backgroundPositionY = -spanHeight + "px";
				aSlideTitles[i].style.display = "none";
			}
			aSlideDots[thisIndex].style.backgroundPositionY = "0";
			aSlideTitles[thisIndex].style.display = "block";
		}
	});
	adDetailsSlide.scrollToPage(index);
}
document.addEventListener("DOMContentLoaded", show, false);
// window.onload = function(){
// 	var consulting = document.getElementById("Lj-Consulting-content");
// 	var consultingTitle = consulting.getElementsByTagName("h3");
// 	var consultingInner = consulting.getElementsByTagName("ul");

// 	for(i=0;i<consultingTitle.length;i++){
// 		consultingTitle[i].index = i;
// 		consultingTitle[i].onclick = function(){
// 			for(i=0;i<consultingInner.length;i++){
// 				consultingInner[i].style.display = "none";
// 			}
// 			consultingInner[this.index].style.display = "block";
// 		}
// 	}
// }