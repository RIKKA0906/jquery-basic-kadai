// HTMLの読込に完了したら、「loadイベントが発生しました」のメッセージをコンソールに出力する
// 画面をスクロールしたら、「scrollイベントが発生しました」のメッセージをコンソールに出力する

$(window).on("load", function () {
  console.log("loadイベントが発生しました");
});

$(window).on("scroll", function () {
  console.log("scrollイベントが発生しました");
});
