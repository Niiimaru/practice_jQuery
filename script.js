// 1.要素の横幅を取得してアラートに表示
// 自分の解答　×
// $(function() {
//     alert('.box').css('width', 'height');
// })
// 解答
$(function() {
    alert('横幅:' + $('.box').width() + ',縦幅:' + $('.box').height());
});

//カラーピッカーで色取得
//解答
$(function() {
    $('#color-change').on("change", function() {
        let select_color = $(this).val();
        $('#title').css('color', select_color);
    });
});

//inutp の値を取得
$(function() {
    const birthday = '1999-05-24';
    $('#birthday').on("change", function(){ //inputの値に変更があった場合、検知できるようになる。
        if($(this).val() === birthday) {   //$(this).val() で判別。
            $('h1').fadeIn();
        }
    });
});

// //配列の一番最後を削除
// let array = [1, 2, 3, 4];
// array.pop();  //pop()を使用すると配列の最後の要素を削除できる。
// alert(array);

//最大値を取得
//最大値求めるには Math.max を使う
let array = [35, 80, 512, 578, 90];
alert(Math.max(...array));

//要素をコピー
$(function() {
    $('.clone').on("click", function() {

        //コピーするにはclone() を使う。eq()は取得したいインデックス番号を記述。
        let li_clone = $('li').eq(0).clone(); 
        //.append() は指定した子要素の最後にテキストやHTML要素を追加するメソッド
        $('ul').append(li_clone);
    })
})