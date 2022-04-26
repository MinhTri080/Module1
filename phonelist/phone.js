var tensanpham = [
    'Iphone',
    'Xiaomi',
    'Realme',
    'SamSung'
]
function nhapSanpham() {
    let tableSP = document.querySelector('.table>tbody');
    let htmls = tensanpham.map(function (products, index) {
        return `
        <tr>
                <td>${index + 1}</td>
                <td>${tensanpham[index]}

                </td>
                <th>
                    
                    <button  class="addSP" onclick='edit(${index})' >
                    Thêm
                </button>
                    <button  class="addSP" onclick='remove(${index})'>
                    Xóa
                </th>
            </tr>`
    }
    )
    tableSP.innerHTML = htmls.join("")
}
nhapSanpham();
function themSP() {
    let tenSP = document.querySelector("#tenSP").value;
    if (tenSP != null && tenSP.trim() != "") {
        tensanpham.push(tenSP);
        nhapSanpham();
        reset();

    } else {
        alert(" Sản phẩm ko tồn tại!")
        document.querySelector("#tenSP").focus();
    }



}
function reset() {
    document.querySelector("#tenSP").value = "";
}
function remove(index) {
    tensanpham.splice(index, 1);
    nhapSanpham();
}
function edit(index){
    let nameEdit = prompt(' Nhập từ bàn phím');
    delete tensanpham[index];
    tensanpham[index] = nameEdit;
    nhapSanpham();
}