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


function slideAnime(){
	//====左に動くアニメーションここから===
	$('.leftAnime').each(function(){ 
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			//左から右へ表示するクラスを付与
			//テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
			$(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
			$(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
		}else{
			//左から右へ表示するクラスを取り除く
			$(this).removeClass("slideAnimeLeftRight");
            $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");	
		}
	});

    //====右に動くアニメーションここから===
	$('.rightAnime').each(function(){
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            // 右から左へ表示するクラスを付与
            // テキスト要素を挟む親要素（右側）とテキスト要素を元位置でアニメーションをおこなう
            $(this).addClass("slideAnimeRightLeft ");
            // 要素を右枠外に移動しCSS アニメーションで右から元の位置に移動
            $(this).children(".rightAnimeInner").addClass("slideAnimeLeftRight");
            // 子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
        }else{
            // 右から左へ表示するクラスを取り除く
            $(this).removeClass("slideAnimeRightLeft ");
            $(this).children(".rightAnimeInner").removeClass("slideAnimeLeftRight");
        }
    });
}


function startProgressBar() {
    //テキストのカウントアップの設定
    var bar = new ProgressBar.Line(splash_text, {//id名を指定
	    strokeWidth: 0,//進捗ゲージの太さ
	    duration: 1000,//時間指定(1000＝1秒)
	    trailWidth: 0,//線の太さ
	    text: {//テキストの形状を直接指定	
		    style: {//天地中央に配置
			    position:'absolute',
			    left:'50%',
			    top:'50%',
			    padding:'0',
			    margin:'0',
			    transform:'translate(-50%,-50%)',
			    'font-size':'2.5rem',
			    'font-family': "'Teko', sans-serif",
			    color:'#fff',
		    },
		    autoStyleContainer: false //自動付与のスタイルを切る
	    },
	    step: function(state, bar) {
		    bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	    }
    });

    //アニメーションスタート
    bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
	    $("#splash").fadeOut(1000);//アニメーションが終わったら#splashエリアをフェードアウト
    });  
}


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

	slideAnime();/* アニメーション用の関数を呼ぶ*/


});// ここまで画面をスクロールをしたら動かしたい場合の記述



// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){

    startProgressBar();

    fadeAnime();


    slideAnime();/* アニメーション用の関数を呼ぶ*/

});
// ここまでページが読み込まれたらすぐに動かしたい場合の記述


// ハンバーガーメニューの開閉
$(".header__btn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".header__nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$(".header__nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".header__btn").removeClass('active');//ボタンの activeクラスを除去し
    $(".header__nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});