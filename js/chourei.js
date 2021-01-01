/* 要素を追加する方法 */
let test_img = document.createElement("img");
test_img.src = "img/test.png";

test_img.alt = "テストイメージ"
test_img.id = "test";


/* 指定した場所に要素を追加 */
function setImage() {
    let target_area = document.getElementById("target");
    target_area.appendChild(test_img);
}

function removeP() {
    let iranaiP = document.getElementById("remove");
    iranaiP.remove();
}

let buttonClick = document.getElementById("button");
buttonClick.addEventListener("click", function () {
    setImage();
    removeP();
});