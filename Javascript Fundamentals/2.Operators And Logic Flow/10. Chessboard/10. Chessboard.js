function chessBoard(inputNum) {

    let blackChess = '  <span class="black"></span>';
    let whiteChess = '  <span class="white"></span>';

    console.log('<div class="chessboard">');
    for (let i = 0; i < inputNum; i++) {
        console.log('<div>');
        if(i % 2 === 0){
            for (let j = 0; j < inputNum; j++) {

                if (j % 2 === 0) {
                    console.log(blackChess)
                } else {
                    console.log(whiteChess)
                }
            }
        }else{
            for (let k = 0; k < inputNum; k++) {

                if (k % 2 === 0) {
                    console.log(whiteChess)
                } else {
                    console.log(blackChess)
                }
            }
        }
        console.log('</div>')
    }
    console.log('</div>')
}