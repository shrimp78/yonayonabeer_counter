$(function(){
    // HTMLに選択中の合計を表示する要素を追加
    $(".history_link").after('<div>現在選択中の合計本数：<label id="totalNum"></label></div>');

    // selectorのselectedになっている箇所のvalueを全部足して、HTMLを更新する関数
    function cal(){
        var sum = 0;
        $("div.select option:selected").each(function(i){
            sum += Number($(this).val());
        });
        $('#totalNum').text(String(sum))

    }
    cal(); // 初回は１回実行

    // Div.selectの中が変更されたらcal()を再実行
    $("div.select").change(function(){
        cal();
    })
});