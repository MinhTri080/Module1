class PhoneInfo {
    constructor(id, phonename, quantity, price) {
        this.id = id;
        this.phonename = phonename;
        this.quantity = quantity;
        this.price = price;
    }
}
var phoneinfo = [
    new PhoneInfo(1, "Iphone", 10, 5000000),
    new PhoneInfo(2, "Xiaomi", 7, 4000000),
    new PhoneInfo(3, "LG", 11, 3000000),
    new PhoneInfo(4, "Sony", 13, 600000),
    new PhoneInfo(5, "SamSung", 12, 5000000),
]
// id = 1;
// phoneinfo = new phoneInfo(id, "Iphone", 10, 5000000);
// id++;
// phoneinfo = new phoneInfo(id, "Iphone", 10, 5000000);
// id++;

function renderphoneInfo() {
    let tbPhoneinfo = document.querySelector('.table>tbody');
    let htmls = phoneinfo.map(function (product, index) {
        return `
                <tr id="tr_${product.id}">
                    <th>${product.id}</th>
                    <th>${product.phonename}</th>
                    <th>${product.quantity}</th>
                    <th>${product.price}</th>
                    <th id="action_${product.id}">
                        <button id ="remove" onclick ="removeSP(${index})">Remove</button>
                        <button id ="edit" onclick ="editSP(${product.id})" >Edit</button>
                        <button id ="update" onclick ="update(${product.id})" class="d_none">Update</button>
                        <button id ="cancel" onclick ="cancel()" class="d_none">Cancel</button>
                    </th>
               </tr>`
    })
    tbPhoneinfo.innerHTML = htmls.join('');
}
function themSP() {
    // console.log(stt);
    let getid = getID() + 1;
    let add = document.querySelector('#productName').value;
    let pri = document.querySelector('.priceSP').value;
    let quanti = document.querySelector('.soluong').value;
    if (add, pri, quanti != 0 && (add, pri, quanti).trim() != "") {
        phoneinfo.push(new PhoneInfo(getid, add, quanti, pri))
        reset();
        renderphoneInfo();

    } else {
        alert("sản phẩm không tồn tại")
    }
    // phoneinfo.sort(phoneinfo.stt);
    // phoneinfo.reverse();
    // phoneinfo.unshift(new phoneInfo(getSTT, add, quanti, pri));
}
function getID() {
    let phone = [...phoneinfo]
    let getID = phone.sort(function (pid1, pid2) {
        return pid2.id - pid1.id;
    })[0].id
    return getID;
}
function reset() {
    document.querySelector("#productName").value = "";
    document.querySelector(".priceSP").value = "";
    document.querySelector(".soluong").value = "";
}
function removeSP(index) {
    let removeSP = window.confirm(`Bạn có muốn xóa ${phoneinfo[index].phonename}?`);
    if (removeSP) {
        phoneinfo.splice(index, 1);
        renderphoneInfo();
    }
}
function editSP(idPhone){
    let tr = document.getElementById(`tr_${idPhone}`)
    let phone = phoneinfo.find(function(value) {
        return value.id == idPhone;
    });
    tr.children[1].innerHTML = `<input type="text" class="" id="Name" value="${phone.phonename}">`
    tr.children[2].innerHTML = `<input type="number" class="" id="Quantity" value="${phone.quantity}">`
    tr.children[3].innerHTML = `<input type="number" class="" id="Price" value="${phone.price}">`
    let action = document.querySelector(`#action_${idPhone}`);
    action.children[0].classList.add('d_none');
    action.children[1].classList.add('d_none');
    action.children[2].classList.remove('d_none');
    action.children[3].classList.remove('d_none');
}
function update(idPhone) {
    let tr = document.querySelector(`#tr_${idPhone}`);
    let phone = phoneinfo.find(function(value) {
        return value.id == idPhone;
    });
    let name = tr.children[1].children[0].value;
    let quantit = tr.children[2].children[0].value;
    let pric = tr.children[3].children[0].value;
    phone.phonename = name;
    phone.quantity = quantit;
    phone.price = pric;
    
    renderphoneInfo();
}
function cancel(idPhone){
    renderphoneInfo();
    
}


renderphoneInfo();