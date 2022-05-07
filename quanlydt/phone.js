class Product {
    constructor(productId, productName, productPrice, productQuantity) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
    }
}
var products = [
    new Product(1, "Iphone6", 300000, 6),
    new Product(2, "Iphone7", 400000, 5),
    new Product(3, "Iphone8", 500000, 6),
    new Product(4, "IphoneXs", 700000, 9),
    new Product(5, "Iphone10", 600000, 11),
    new Product(6, "Iphone11", 800000, 12),
    new Product(7, "Iphone12", 900000, 14),
    new Product(8, "Iphone13", 1000000, 15),
    new Product(9, "IphoneXSmax", 1100000, 4)
]
var position = 0;
function renderProductList() {
    let htmls = products.map(function (product) {
        return `
                    <tr>
                        <td>${product.productId}</td>
                        <td>${product.productName}</td>
                        <td>${product.productPrice}</td>
                        <td>${product.productQuantity}</td>
                        <td>
                            <button type="button" onclick="btnEdit(${product.productId})">Chỉnh sửa</button>
                            <button type="button" onclick="removeProduct(${product.productId})">Xóa</button>
                        </td>
                    </tr>
    `
    }
    )
    document.querySelector(".table-product>tbody").innerHTML = htmls.join("");
}
renderProductList();
function btnAdd() {
    document.querySelector('.form-add').classList.remove("add-none")
}
function btnEdit(id) {
    document.querySelector('.form-edit').classList.remove("edit-none")
}
function addProduct() {
    let name = document.querySelector('#addName').value;
    let pri = document.querySelector('#addPrice').value;
    let qua = document.querySelector('#addQuantity').value;
    if ((name != null && name.trim() != '')
        && (pri != null && pri.trim() != '')
        && qua != null && qua.trim() != '') {
        products.sort(function (product1, product2) {
            return product2.productId - product1.productId
        }
        )
        let id = products[0].productId + 1;
        let product = new Product(id, name, pri, qua);
        products.reverse();
        products.push(product);
        reset();
        renderProductList();
    }
    else {
        alert('Sản phẩm không tồn tại');
        document.querySelector("#addName").focus();
    }
}
function reset() {
    document.querySelector("#addName").value = "";
    document.querySelector("#addPrice").value = "";
    document.querySelector("#addQuantity").value = "";
}
function editProduct() {
    let editName = document.querySelector("#editName").value;
    let editPrice = document.querySelector("#editPrice").value;
    let editQuantity = document.querySelector("#editQuantity").value;
    if ((editName != null && editName.trim() != '')
        && (editPrice != null && editPrice.trim() != '')
        && editQuantity != null && editQuantity.trim() != '') {
            // let index = 0;
            // for (let i = 0; i < products.length; i++) {
            //     if (products[i].productId == products) {
            //         index = i;
            //     }
            // }
            // products[i].productName =editName;
            // products[i].productPrice =editPrice;
            // products[i].productQuantity =editQuantity;
        }
        else {
            alert('Sản phẩm không tồn tại');
            document.querySelector("#fixName").focus();
        }
        renderProductList(products);
}
function removeProduct(productId) {
    let index = 0;
    for (let i = 0; i < products.length; i++) {
        if (products[i].productId == products) {
            index = i;
        }
    }
    let confirmed = window.confirm(`Bạn có chắc chắn muốn xóa ${products[index].productName} không?`);
    if (confirmed) {
        products.splice(index, 1);
        renderProductList(products);
    }
}
