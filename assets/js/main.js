// メインビジュアルの粒子文字の設定
function particleTextAnime() {
    $("#particle").particleText({
        text: "Welcome!<br>Kemmochi's<br>Portfolio", // 表示させたいテキスト。改行の場合は<br>追加
        colors:["#000","#333", "#1a1919"], // パーティクルの色を複数指定可能
        speed: "middle",  // slow, middle, high の3つから粒子が集まる速さを選択
    });
}


// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.smoothTrigger').each(function(){ //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top-50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('smooth');
            // 画面内に入ったらfadeInというクラス名を追記
        }else{
            $(this).removeClass('smooth');
            // 画面外に出たらfadeInというクラス名を外す
        }
    });
    
    //関数でまとめることでこの後に違う動きを追加することが出来ます
    $('.smoothTrigger').each(function(){ //fadeInDownTriggerというクラス名が
        var elemPos = $(this).offset().top-50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('smooth');
            // 画面内に入ったらsmoothというクラス名を追記
        }else{
            $(this).removeClass('smooth');
            // 画面外に出たらsmoothというクラス名を外す
        }
    });  
    
}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定



// ハンバーガーメニューの開閉
$(".header__btn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".header__nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$(".header__nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".header__btn").removeClass('active');//ボタンの activeクラスを除去し
    $(".header__nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});


$(window).on('load resize', function() {
    var windowWidth = window.innerWidth;
    var elements = $('.fixed');
    if (windowWidth >= 768) {
        Stickyfill.add(elements);
    }else{
        Stickyfill.remove(elements);
    } 
});



// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){

    fadeAnime();

});// ここまで画面をスクロールをしたら動かしたい場合の記述



// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){

    particleTextAnime();

    fadeAnime();

});
// ここまでページが読み込まれたらすぐに動かしたい場合の記述