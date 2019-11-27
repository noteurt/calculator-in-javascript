const showResultButton = document.querySelector(".show-result");
const resultPlaceholder = document.querySelector(".result-placeholder");

showResultButton.addEventListener("click",function() {
    resultPlaceholder.innerHTML = "test";
});

function addieren(x,y){
    return x + y;
}

function showResult(x = 0){
    return x;
}