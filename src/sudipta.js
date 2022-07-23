var inputArea1 = document.getElementById('inputArea1');
var lineNumber = document.getElementById('lineNumber');

inputArea1.addEventListener('scroll', () => {
    lineNumber.scrollTop = inputArea1
.scrollTop;
    lineNumber.scrollLeft = inputArea1
.scrollLeft;
});

inputArea1.addEventListener('keydown', (e) => {
    let { keyCode } = e;
    let { value, selectionStart, selectionEnd } = inputArea1
;
if (keyCode === 9) {  
      e.preventDefault();
      inputArea1
    .value = value.slice(0, selectionStart) + '\t' + value.slice(selectionEnd);
      inputArea1
    .setSelectionRange(selectionStart+2, selectionStart+2)
    }
});

var lineNumberCache = 0;
function line_number() {
      var lineNum = inputArea1
    .value.split('\n').length;
      var outarr = new Array();
      if (lineNumberCache != lineNum) {
         for (var x = 0; x < lineNum; x++) {
            outarr[x] = (x + 1) + '.';
         }
         lineNumber.value = outarr.join('\n');
      }
      lineNumberCache = lineNum;
}
inputArea1.addEventListener('input', () => {
    line_number();
});





var inputArea2 = document.getElementById('inputArea2');
var lineNumber2 = document.getElementById('lineNumber2');

inputArea2.addEventListener('scroll', () => {
    lineNumber2.scrollTop = inputArea2
.scrollTop;
    lineNumber2.scrollLeft = inputArea2
.scrollLeft;
});

inputArea2.addEventListener('keydown', (e) => {
    let { keyCode } = e;
    let { value, selectionStart, selectionEnd } = inputArea2
;
if (keyCode === 9) {  
      e.preventDefault();
      inputArea2
    .value = value.slice(0, selectionStart) + '\t' + value.slice(selectionEnd);
      inputArea2
    .setSelectionRange(selectionStart+2, selectionStart+2)
    }
});

var linrNumberCache2 = 0;
function line_number2() {
      var lineNum2 = inputArea2
    .value.split('\n').length;
      var outarr1 = new Array();
      if (linrNumberCache2 != lineNum2) {
         for (var y = 0; y < lineNum2; y++) {
            outarr1[y] = (y + 1) + '.';
         }
         lineNumber2.value = outarr1.join('\n');
      }
      linrNumberCache2 = lineNum2;
}
inputArea2.addEventListener('input', () => {
    line_number2();
});











const inputArea = document.querySelector(".large-area--input");
const outputArea = document.querySelector(".large-area--output");
const btnFormat = document.querySelector(".control-button--format");
const btnCleartext = document.querySelector(".control-button--cleartext");

btnFormat.addEventListener("click", () => {
    var str = inputArea.value;
    try {
        JSON.parse(str);
      }
    catch(e) {
        outputArea.value = e.message;
    }

    /*
    const formattedTwo = JSON.parse(inputArea.value);

    const formattedAgain = formattedTwo || [];
    for (x in formattedAgain) {
        console.log(typeof formattedAgain[x]);
        if ((typeof formattedAgain[x]) == 'string'){
            formattedAgain[x].style = "color:blue";
        }else if((typeof formattedAgain[x]) == 'number'){
            formattedAgain[x].style.color = "red";
        }
     }

     */

    const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);
   
    //const formatted = JSON.stringify(formattedTwo, null, 4);
    
    outputArea.value = formatted;

    
})   

btnCleartext.addEventListener("click", () => {
    inputArea.value = '';
    outputArea.value = '';
})