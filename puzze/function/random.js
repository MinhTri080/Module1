let getimage_1 = document.querySelector('#image_1');
let getimage_2 = document.querySelector('#image_2');
let getimage_3 = document.querySelector('#image_3');
let getimage_4 = document.querySelector('#image_4');
let getimage_5 = document.querySelector('#image_5');

getimage_1.src = `image1/${Math.floor(Math.random() * (3)) + 1}m1.jpg`;
getimage_2.src = `image1/${Math.floor(Math.random() * (3)) + 1}m2.jpg`;
getimage_3.src = `image1/${Math.floor(Math.random() * (3)) + 1}m3.jpg`;
getimage_4.src = `image1/${Math.floor(Math.random() * (3)) + 1}m4.jpg`;
getimage_5.src = `image1/${Math.floor(Math.random() * (3)) + 1}m5.jpg`;

let compareimage = "";
const win1 = "1m1.jpg1m2.jpg1m3.jpg1m4.jpg1m5.jpg";
const win2 = "2m1.jpg2m2.jpg2m3.jpg2m4.jpg2m5.jpg";
const win3 = "3m1.jpg3m2.jpg3m3.jpg3m4.jpg3m5.jpg";
function changeRandomimage_1() {
    getimage_1.src = `image1/${Math.floor(Math.random() * (3)) + 1}m1.jpg`;
    compareimage = getimage_1.src.split("/").pop() + getimage_2.src.split("/").pop() + getimage_3.src.split("/").pop() + getimage_4.src.split("/").pop() + getimage_5.src.split("/").pop();
    if (win1 == compareimage || win2 == compareimage || win3 == compareimage) {
        youwin();
    } else {
        again();
    }


}
function changeRandomimage_2() {
    getimage_2.src = `image1/${Math.floor(Math.random() * (3)) + 1}m2.jpg`;
    compareimage = getimage_1.src.split("/").pop() + getimage_2.src.split("/").pop() + getimage_3.src.split("/").pop() + getimage_4.src.split("/").pop() + getimage_5.src.split("/").pop();
    if (win1 == compareimage || win2 == compareimage || win3 == compareimage) {
        youwin();
    } else {
        again();
    }


}
function changeRandomimage_3() {
    getimage_3.src = `image1/${Math.floor(Math.random() * (3)) + 1}m3.jpg`;
    compareimage = getimage_1.src.split("/").pop() + getimage_2.src.split("/").pop() + getimage_3.src.split("/").pop() + getimage_4.src.split("/").pop() + getimage_5.src.split("/").pop();
    if (win1 == compareimage || win2 == compareimage || win3 == compareimage) {
        youwin();
    } else {
        again();
    }


}
function changeRandomimage_4() {
    getimage_4.src = `image1/${Math.floor(Math.random() * (3)) + 1}m4.jpg`;
    compareimage = getimage_4.src.split("/").pop() + getimage_2.src.split("/").pop() + getimage_3.src.split("/").pop() + getimage_4.src.split("/").pop() + getimage_5.src.split("/").pop();
    if (win1 == compareimage || win2 == compareimage || win3 == compareimage) {
        youwin();
    } else {
        again();
    }


}
function changeRandomimage_5() {
    getimage_5.src = `image1/${Math.floor(Math.random() * (3)) + 1}m5.jpg`;
    compareimage = getimage_1.src.split("/").pop() + getimage_2.src.split("/").pop() + getimage_3.src.split("/").pop() + getimage_4.src.split("/").pop() + getimage_5.src.split("/").pop();
    if (win1 == compareimage || win2 == compareimage || win3 == compareimage) {
        youwin();
    } else {
        again();
    }


}
function youwin() {
    alert('you won the game');
    getimage_1.style.boxShadow = "4px 4px 4px blue";
    getimage_2.style.boxShadow = "4px 4px 4px blue";
    getimage_3.style.boxShadow = "4px 4px 4px blue";
    getimage_4.style.boxShadow = "4px 4px 4px blue";
    getimage_5.style.boxShadow = "4px 4px 4px blue";
}
function again() {
    
    getimage_1.style.boxShadow = "4px 4px 4px black";
    getimage_2.style.boxShadow = "4px 4px 4px black";
    getimage_3.style.boxShadow = "4px 4px 4px black";
    getimage_4.style.boxShadow = "4px 4px 4px black";
    getimage_5.style.boxShadow = "4px 4px 4px black";
}
