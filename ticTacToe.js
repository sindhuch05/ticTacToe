let counter = 0;
const winningCombinations = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
];

let xCombo = [];
let yCombo = [];

document.querySelector('#table_game').addEventListener('click', function(event) {


    if (event.target.innerHTML.length == 0) {

        counter++;
        if (counter % 2 == 0) {

            event.target.innerHTML = 'x';
            xCombo.push(event.target.id);
            // console.log(xCombo);
            if (xCombo.length == 3) {
                // console.log(xCombo.sort().join(''));
                var result = out(winningCombinations, xCombo.sort().join(''));
                if (result == true) {
                    console.log("X WON");
                }

            }
            if(xCombo.length>3){
              var result3 = out1(winningCombinations, xCombo);
                if(result3==true){
                  console.log("X WON");
                }
            }
        } else {

            event.target.innerHTML = 'y';
            yCombo.push(event.target.id);
            // console.log(yCombo);
            if (yCombo.length == 3) {
                // console.log(yCombo.sort().join(''));
                var result1 = out(winningCombinations, yCombo.sort().join(''));
                if (result1 == true) {
                    console.log("Y WON");
                }

            }

            if(yCombo.length>3){
              var result2 = out1(winningCombinations, yCombo);
            if(result2==true){
              console.log("Y WON");
            }
            }


        }
    }
});
var add = 0

function out(winningCombinations, each) {
    var a = winningCombinations.map(function(every) {
        var combo = every.sort().join('');
        if (combo == each) {
            return true;
        }
    });

    for (i = 0; i < a.length; i++) {
        if (a[i] == true) {
            var rup = true;
        }
    }
    return rup;
};

function out1(winningCombinations, each1) {


let [q,n,m,]=each1;
let combo1=[q,n,m];


    let p1=out(winningCombinations,combo1.sort().join(''));

      let [e,,g,h]=each1;

      let combo2=[e,g,h];

      var p2=out(winningCombinations,combo2.sort().join(''));

        let [f,k,,t]=each1;
      let combo3=[f,k,t];

      var p3=out(winningCombinations,combo3.sort().join(''));

        let combo4=each1.slice(1);

        var p4=out(winningCombinations,combo4.sort().join(''));
// console.log(p1,combo1);
// console.log(p2,combo2);
// console.log(p3,combo3);
// console.log(p4,combo4);

if(combo4.length==4){
  var xyz = out1(winningCombinations, combo4);
  if(xyz==true){
    console.log("y won");
  }

else{
  console.log("try again");
}
}

         if(p1||p2||p3||p4){
            return true;          }



  };
