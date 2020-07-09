$(document).ready(function () {
    var burger = $('.burger');
    var menu = $('#' + burger.data('target')); /*#navbarMenuHeroC */
    var nav = $('.navbar-item');    
    // $(document).on('click', function () {
    burger.on('click', function() {
      // burger.toggleClass('is-active');
      // menu.toggleClass('is-active');
      burger.toggleClass('is-active');
      menu.toggleClass('is-active');
    });
  
    // if ($('.burger').hasClass('is-active'))  {
    //   $(document).on('click', function () {
    //     burger.toggleClass('is-active');
    //     menu.toggleClass('is-active');
    //     alert('クラス持っている');  
    //   });
    // } else {      
    //   alert('クラス持っていない');  
    //   }
});

let targets = document.getElementsByClassName("navbar-item");
for(let i = 0; i < targets.length; i++){
  targets[i].addEventListener("click",() => {
    alert('クラス持っている');  
  }, false);
}
$('container-item').on('click', function () {
  // var test = $('.burger');
    // burger.toggleClass('is-active');
    // menu.toggleClass('is-active');
    alert('クラス持っている');  
});

// $(document).on('click', function () {
//   // var burger = $('.burger');
//   // var menu = $('#' + burger.data('target')); /*#navbarMenuHeroC */
//   if ($('.burger').hasClass('is-active'))  {
//     alert('クラス持っている');  
//     // burger.toggleClass('is-active');
//     // menu.toggleClass('is-active');
//   }else{
//       // $(document).on('click', function () {
//         // burger.toggleClass('is-active');
//         // menu.toggleClass('is-active');
//         alert('クラス持ってない');  
//         // burger.removeClass('is-active');
//         // menu.removeClass('is-active');
//       // });
//     };
// });


// ドキュメントクリック時
// リムーブクラスが使えない?いやhasClassが使えない。removeclassも使えない
// $(document).on('click', function () {
//   var burger = $('.burger');
//   var menu = $('#' + burger.data('target')); /*#navbarMenuHeroC */
//   if (burger.hasClass('.is-active')) {
//   alert('触れてる？');
//   } else {
//     alert('クラス持ってない');  
//   };
// }); 


//is-activeクラスを付与している 

// $(function () {
// 	var sp_nav = $('.burger');
// 	var nav = $('#' + burger.data('target'));
// 	var main_cover = $('.columns');
// 	sp_nav.on('click', function () {
// 		nav.slideToggle();
// 		sp_nav.toggleClass('is-active');
// 		main_cover.toggleClass('is-active'); //nav以外をタップした時 
// 		if (sp_nav.hasClass('is-active')) {
// 			//もし.header_sp_navに'active'というクラスがあったら
// 			main_cover.on('click', function () {
// 				sp_nav.removeClass('is-active');
// 				main_cover.removeClass('is-active'); nav.slideUp();
// 			});
// 		}
// 	});
// });