$(window).on("load", function(){
    $("#select_random").on("click", function(){
        let maxCount = Number($("#max_count").val());
        let selectCount = $("#select_count").val();
        let result = random(Array.from(new Array(maxCount - 1)).map((v,i)=> i + 1), selectCount);
        $("#result_num").text(result)
    });
});


function random(array, num) {
    var a = array;
    var t = [];
    var r = [];
    var l = a.length;
    var n = num < l ? num : l;
    while (n-- > 0) {
      var i = Math.random() * l | 0;
      r[n] = t[i] || a[i];
      --l;
      t[i] = t[l] || a[l];
    }
    return r;
  }