//仕様

// HTMLのボタンを取る
let button = document.getElementById('button');

// ボタンが押された際に動かしたいプログラミング
button.addEventListener('click', function (ev) {
  // ボタンが押されると動く処理内容ここから
    let score = document.getElementById("score");
      let value = score.value

      let num =value;
      
        for (let i = 1; i <= num; i++) {
          let three = /[3]/.test(i.toString());
          let five = /[5]/.test(i.toString());
          document.write('回数');
          if (i % 3 === 0 || three) {
            document.write(i + '(´▽｀*)');
          } 
          if (i % 5 === 0 || five) {
            document.write(i + '∪・ω・∪');
          } else {
            document.write(i);
          }
          document.write('<br/>');
        }
      
      } 

  // ボタンが押されると動く処理内容ここまで
)

//for 3の倍数だけ、アホになる






