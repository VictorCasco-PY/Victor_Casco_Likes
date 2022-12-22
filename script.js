var like1 = document.querySelector("#like1");
var like2 = document.querySelector("#like2");
var like3 = document.querySelector("#like3");
var likeCounter1 = 0;
var likeCounter2 = 0;
var likeCounter3 = 0;

function addLike1() {
    likeCounter1++;
    like1.innerText = likeCounter1 + ' like(s)';
}
function addLike2() {
    likeCounter2++;
    like2.innerText = likeCounter2 + ' like(s)';
}
function addLike3() {
    likeCounter3++;
    like3.innerText = likeCounter3 + ' like(s)';
}