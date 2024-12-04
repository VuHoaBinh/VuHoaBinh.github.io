// Lấy thông tin sản phẩm được chọn từ localStorage
var productId = localStorage.getItem('selectedProduct');
var product = getProductById(productId);

// Hiển thị thông tin sản phẩm lên trang chi tiết
document.getElementById('productName').innerHTML = product.name;
document.getElementById('productPrice').innerHTML = product.price;
document.getElementById('productIMG').src = product.image;
document.getElementById('productSize').innerHTML = product.size;
document.getElementById('productDescription').innerHTML = product.description;
document.getElementById('productIntro').innerHTML = product.introduction;
document.getElementById('productreminder').innerHTML = product.reminder;
// Hàm lấy thông tin sản phẩm từ ID
function getProductById(id) {
    var products = [{
            id: 1,
            name: "Bánh Chiffon Bắp I 14cm",
            price: "550.000₫",
            image: "../images/cake/CORNCHIFFON_01.jpg",
            size: "12cm",
            description: "Bánh bông lan bắp tươi, kem tươi vị bắp và sữa đông bắp. Không màu thực phẩm. hông có thành phần nhân tạo. Ít ngọt",
            introduction: "Bánh ngọt của chúng tôi được làm thủ công hàng ngày bởi đội ngũ thợ làm bánh đầy nhiệt huyết được đào tạo tại Pháp bằng cách sử dụng những nguyên liệu tốt nhất, từ trái cây địa phương (hữu cơ khi chúng tôi có thể), bơ Pháp, sô cô la Bỉ, đồng thời không chứa phẩm màu và hóa chất.",
            reminder: "Bánh ngọt của chúng tôi được làm bằng nguyên liệu tươi và 0 chất bảo quản. Chúng ngon nhất khi được ăn trong cùng một ngày. Nếu ăn không hết có thể để tối đa 2-3 ngày.",
        },
        {
            id: 2,
            name: "Bánh Tiramisu Trà Xanh | 16cm",
            price: "510.000₫",
            image: "../images/cake/MATCHA-6INCH.jpg",
            size: "16cm",
            description: "Bánh quy mềm ngâm mâm xôi & hương thảo, kem tiramisu mềm, phủ kem phô mai matcha.",
            introduction: "Bánh ngọt của chúng tôi được làm thủ công hàng ngày bởi đội ngũ thợ làm bánh đầy nhiệt huyết được đào tạo tại Pháp bằng cách sử dụng những nguyên liệu tốt nhất, từ trái cây địa phương (hữu cơ khi chúng tôi có thể), bơ Pháp, sô cô la Bỉ, đồng thời không chứa phẩm màu và hóa chất.",
            reminder: "Bánh ngọt của chúng tôi được làm bằng nguyên liệu tươi và 0 chất bảo quản. Chúng ngon nhất khi được ăn trong cùng một ngày. Nếu ăn không hết có thể để tối đa 2-3 ngày."
        },
        {
            id: 3,
            name: "Bánh Mousse Caramel I 12cm",
            price: "395.000₫",
            size: "12cm",
            image: "../images/cake/CARAMEL4INCH.jpg",
            description: "Các lớp bánh lady finger ngấm cà phê, mousse caramel, sô cô la đen giòn mỏng và kem tươi caramel. Không màu thực phẩm. Không có thành phần nhân tạo.",
            introduction: "Bánh ngọt của chúng tôi được làm thủ công hàng ngày bởi đội ngũ thợ làm bánh đầy nhiệt huyết được đào tạo tại Pháp bằng cách sử dụng những nguyên liệu tốt nhất, từ trái cây địa phương (hữu cơ khi chúng tôi có thể), bơ Pháp, sô cô la Bỉ, đồng thời không chứa phẩm màu và hóa chất.",
            reminder: "Bánh ngọt của chúng tôi được làm bằng nguyên liệu tươi và 0 chất bảo quản. Chúng ngon nhất khi được ăn trong cùng một ngày. Nếu ăn không hết có thể để tối đa 2-3 ngày."

        },
        {
            id: 4,
            name: "Macaron Lý Chua Đen & Oải Hương",
            price: "34.000₫",
            size: "12cm",
            image: "../images/cake/CARAMEL4INCH.jpg",
            description: "Bánh macaron kiểu Pháp nhân lý chua đen và hoa oải hương.",
            introduction: "Bánh ngọt của chúng tôi được làm thủ công hàng ngày bởi đội ngũ thợ làm bánh đầy nhiệt huyết được đào tạo tại Pháp bằng cách sử dụng những nguyên liệu tốt nhất, từ trái cây địa phương (hữu cơ khi chúng tôi có thể), bơ Pháp, sô cô la Bỉ, đồng thời không chứa phẩm màu và hóa chất.",
            reminder: "Bánh ngọt của chúng tôi được làm bằng nguyên liệu tươi và 0 chất bảo quản. Chúng ngon nhất khi được ăn trong cùng một ngày. Nếu ăn không hết có thể để tối đa 2-3 ngày."
        },
        {
            id: 5,
            name: "Bánh Macaron Phô Mai",
            price: "34.000₫",
            size: "12cm",
            image: "../images/cake/MACARON_02.jpg",
            description: "Bánh macaron kiểu Pháp nhân phô mai",
            introduction: "Bánh ngọt của chúng tôi được làm thủ công hàng ngày bởi đội ngũ thợ làm bánh đầy nhiệt huyết được đào tạo tại Pháp bằng cách sử dụng những nguyên liệu tốt nhất, từ trái cây địa phương (hữu cơ khi chúng tôi có thể), bơ Pháp, sô cô la Bỉ, đồng thời không chứa phẩm màu và hóa chất.",
            reminder: "Bánh ngọt của chúng tôi được làm bằng nguyên liệu tươi và 0 chất bảo quản. Chúng ngon nhất khi được ăn trong cùng một ngày. Nếu ăn không hết có thể để tối đa 2-3 ngày."
        },
        {
            id: 6,
            name: "Bánh Macaron Caramen & Sapoche",
            price: "34.000₫",
            size: "12cm",
            image: "../images/cake/MACARON_3.jpg",
            description: "Bánh macaron kiểu Pháp với nhân caramel và hồng xiêm",
            introduction: "Bánh ngọt của chúng tôi được làm thủ công hàng ngày bởi đội ngũ thợ làm bánh đầy nhiệt huyết được đào tạo tại Pháp bằng cách sử dụng những nguyên liệu tốt nhất, từ trái cây địa phương (hữu cơ khi chúng tôi có thể), bơ Pháp, sô cô la Bỉ, đồng thời không chứa phẩm màu và hóa chất.",
            reminder: "Bánh ngọt của chúng tôi được làm bằng nguyên liệu tươi và 0 chất bảo quản. Chúng ngon nhất khi được ăn trong cùng một ngày. Nếu ăn không hết có thể để tối đa 2-3 ngày."
        },
        {
            id: 7,
            name: "Raspberry Tiramisu",
            price: "110.000₫",
            size: "14cm",
            image: "../images/cake/RASPBERRYTIRAMISU1.jpg",
            description: "Raspberry-infused lady fingers, soft tiramisu cream, raspberry lava cream.",
            introduction: "Bánh ngọt của chúng tôi được làm thủ công hàng ngày bởi đội ngũ thợ làm bánh đầy nhiệt huyết được đào tạo tại Pháp bằng cách sử dụng những nguyên liệu tốt nhất, từ trái cây địa phương (hữu cơ khi chúng tôi có thể), bơ Pháp, sô cô la Bỉ, đồng thời không chứa phẩm màu và hóa chất.",
            reminder: "Bánh ngọt của chúng tôi được làm bằng nguyên liệu tươi và 0 chất bảo quản. Chúng ngon nhất khi được ăn trong cùng một ngày. Nếu ăn không hết có thể để tối đa 2-3 ngày."
        },
        {
            id: 8,
            name: "Bánh Tart Aperol",
            price: "99.000₫",
            size: "14cm",
            image: "../images/cake/APEROLSPRITZTART_01.jpg",
            description: "Bánh quy shortbread giòn, sốt cam trứng, mứt cam chanh, mứt phật thủ, thạch Aperol spritz.",
            introduction: "Bánh ngọt của chúng tôi được làm thủ công hàng ngày bởi đội ngũ thợ làm bánh đầy nhiệt huyết được đào tạo tại Pháp bằng cách sử dụng những nguyên liệu tốt nhất, từ trái cây địa phương (hữu cơ khi chúng tôi có thể), bơ Pháp, sô cô la Bỉ, đồng thời không chứa phẩm màu và hóa chất.",
            reminder: "Bánh ngọt của chúng tôi được làm bằng nguyên liệu tươi và 0 chất bảo quản. Chúng ngon nhất khi được ăn trong cùng một ngày. Nếu ăn không hết có thể để tối đa 2-3 ngày."
        },
        {
            id: 9,
            name: "Bánh Saint-honoré Sa-pô-chê",
            price: "95.000₫",
            size: "13cm",
            image: "../images/cake/SAPODILLACARAMELSAINTHONORE_01.jpg",
            description: "Bánh ngọt caramel, sốt caramel đắng, sốt hồng xiêm",
            introduction: "Bánh ngọt của chúng tôi được làm thủ công hàng ngày bởi đội ngũ thợ làm bánh đầy nhiệt huyết được đào tạo tại Pháp bằng cách sử dụng những nguyên liệu tốt nhất, từ trái cây địa phương (hữu cơ khi chúng tôi có thể), bơ Pháp, sô cô la Bỉ, đồng thời không chứa phẩm màu và hóa chất.",
            reminder: "Bánh ngọt của chúng tôi được làm bằng nguyên liệu tươi và 0 chất bảo quản. Chúng ngon nhất khi được ăn trong cùng một ngày. Nếu ăn không hết có thể để tối đa 2-3 ngày."
        }
    ];

    for (var i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            return products[i];
        }
    }

    return null;
}

function showDetail(productId) {
    // Lưu thông tin sản phẩm vào localStorage
    localStorage.setItem('selectedProduct', productId);

    // Chuyển sang trang chi tiết sản phẩm
    window.location.href = 'results.html';
}