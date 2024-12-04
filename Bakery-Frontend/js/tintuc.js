function showNews(type) {
    // Lấy tin tức từ local storage
    let news = localStorage.getItem(type);

    // Hiển thị tin tức
    let newsDiv = document.getElementById('news');
    newsDiv.innerHTML = news;
}
var val_bannhieu = '<div class="chitiet"><br>'
    + '<h3 style="color: #fcbc30;">Sản phẩm bán chạy nhất trong tuần</h3><br>'
    + '<h3 class="h3-title">Bánh Tart Aperol</h3><br>'
    + '<a href="../images/cake/APEROLSPRITZTART_01.jpg" data-fancybox="table-slider"><img src="../images/cake/APEROLSPRITZTART_01.jpg" alt="" width="290px"></a><br><br>'
    + '<b style="color: red;">99.000₫</b><br>'
    + '<p>-Mô tả: Bánh quy shortbread giòn, sốt cam trứng, mứt cam chanh, mứt phật thủ, thạch Aperol spritz.</p>'
    + '<p>- Bánh Tart Aperol có màu sắc rực rỡ và hấp dẫn với màu cam và trắng sữa của kem phô mai. Đây là loại bánh Tart rất thích hợp để làm món tráng miệng trong các bữa tiệc, dịp lễ tết hoặc để thưởng thức vào bất cứ thời điểm nào trong ngày.</p>'
    + '<p>- Bánh ngọt của chúng tôi được làm thủ công hàng ngày bởi đội ngũ thợ làm bánh đầy nhiệt huyết được đào tạo tại Pháp bằng cách sử dụng những nguyên liệu tốt nhất, từ trái cây địa phương (hữu cơ khi chúng tôi có thể), bơ Pháp, sô cô la Bỉ, đồng thời không chứa phẩm màu và hóa chất.</p>'
    + '<p>- Bánh ngọt của chúng tôi được làm bằng nguyên liệu tươi và 0 chất bảo quản. Chúng ngon nhất khi được ăn trong cùng một ngày. Nếu ăn không hết có thể để tối đa 2-3 ngày.</p>'
    + '</div>'
var val_moinhat = '<div class="chitiet"><br>'
    + '<h3 style="color: #fcbc30;">Bánh ngọt mới ra mắt</h3><br>'
    + '<h3 class="h3-title">Macaron Lý Chua Đen & Oải Hương</h3><br>'
    + '<a href="../images/cake/MACARON_01.jpg" data-fancybox="table-slider"><img src="../images/cake/MACARON_01.jpg" alt="" width="290px"></a><br>'
    + '<b style="color: red;">34.000₫</b><br>'
    + '<p>-Mô tả: Bánh Macaron Lý Chua Đen & Oải Hương có một vỏ bánh mỏng, mịn và giòn, bên trong là nhân bánh pha trộn giữa kem phô mai và trái Lý Chua Đen & Oải Hương tạo nên hương vị độc đáo cho bánh. Trái Lý Chua Đen & Oải Hương có mùi thơm đặc trưng, hương vị chua ngọt hài hòa và làm tăng độ giòn của vỏ bánh.</p>'
    + '<p>- Bánh Macaron Lý Chua Đen & Oải Hương có màu sắc đen của trái Lý Chua Đen và tím nhạt của Oải Hương, tạo nên sự tinh tế và quý phái cho bánh. Bánh có hương vị thơm ngon, độ chua vừa phải và bổ sung độ ngọt cho bữa ăn.</p>'
    + '<p>- Bánh Macaron Lý Chua Đen & Oải Hương thường được dùng trong các buổi tiệc, dịp kỷ niệm hoặc những dịp đặc biệt khác. Bánh là một món tráng miệng tuyệt vời cho bất cứ dịp tiệc nào.</p>'
    + '<p>- Bánh ngọt của chúng tôi được làm thủ công hàng ngày bởi đội ngũ thợ làm bánh đầy nhiệt huyết được đào tạo tại Pháp bằng cách sử dụng những nguyên liệu tốt nhất, từ trái cây địa phương (hữu cơ khi chúng tôi có thể), bơ Pháp, sô cô la Bỉ, đồng thời không chứa phẩm màu và hóa chất.</p>'
    + '<p>- Bánh ngọt của chúng tôi được làm bằng nguyên liệu tươi và 0 chất bảo quản. Chúng ngon nhất khi được ăn trong cùng một ngày. Nếu ăn không hết có thể để tối đa 2-3 ngày.</p>'
    + '</div>'
var val_spyeuthich = '<div class="chitiet"><br>'
    + '<h3 style="color: #fcbc30;">Các sản phẩm được yêu thích</h3><br>'
    + '<h3 class="h3-title">1. Bánh Mousse Caramel I 12cm</h3><br>'
    + '<a href="../images/cake/CARAMEL4INCH.jpg" data-fancybox="table-slider"><img src="../images/cake/CARAMEL4INCH.jpg" alt="" width="290px"></a><br>'
    + '<b style="color: red;">395.000₫</b><br>'
    + '<p>- Mô tả: Bánh Mousse Caramel là một loại bánh ngọt phổ biến được làm từ lớp kem mousse nhẹ, mịn và béo, phủ lên trên bánh genoise (bánh mềm, nhẹ) và được trang trí với nước caramel và kem tươi.</p>'
    + '<p>- Bánh Mousse Caramel I 12cm là phiên bản nhỏ hơn của bánh Mousse Caramel gốc, có kích thước khoảng 12cm (đường kính). Bánh có màu nâu vàng đẹp mắt, với lớp kem mousse caramel mềm mịn và thơm ngon được bọc quanh bánh genoise nhẹ và giòn. Phía trên của bánh được trang trí với một lớp nước caramel ngọt ngào, tạo ra một hương vị cân bằng giữa ngọt và béo.</p>'
    + '<p>- Bánh Mousse Caramel I 12cm thường được phục vụ trong các bữa tiệc, dịp kỷ niệm, hoặc đơn giản là để thưởng thức trong những ngày cuối tuần hoặc khi bạn muốn thưởng thức một chiếc bánh ngọt đặc biệt.</p><br><br>'

    + '<h3 class="h3-title">2. Bánh Tart Aperol</h3><br>'
    + '<a href="../images/cake/APEROLSPRITZTART_01.jpg" data-fancybox="table-slider"><img src="../images/cake/APEROLSPRITZTART_01.jpg" alt="" width="290px"></a><br><br>'
    + '<b style="color: red;">99.000₫</b><br>'
    + '<p>- Mô tả: Bánh quy shortbread giòn, sốt cam trứng, mứt cam chanh, mứt phật thủ, thạch Aperol spritz.</p>'
    + '<p>- Bánh Tart Aperol có màu sắc rực rỡ và hấp dẫn với màu cam và trắng sữa của kem phô mai. Đây là loại bánh Tart rất thích hợp để làm món tráng miệng trong các bữa tiệc, dịp lễ tết hoặc để thưởng thức vào bất cứ thời điểm nào trong ngày.</p>'
    + '<p>- Bánh ngọt của chúng tôi được làm thủ công hàng ngày bởi đội ngũ thợ làm bánh đầy nhiệt huyết được đào tạo tại Pháp bằng cách sử dụng những nguyên liệu tốt nhất, từ trái cây địa phương (hữu cơ khi chúng tôi có thể), bơ Pháp, sô cô la Bỉ, đồng thời không chứa phẩm màu và hóa chất.</p>'
    + '<p>- Bánh ngọt của chúng tôi được làm bằng nguyên liệu tươi và 0 chất bảo quản. Chúng ngon nhất khi được ăn trong cùng một ngày. Nếu ăn không hết có thể để tối đa 2-3 ngày.</p><br><br>'

    + '<h3 class="h3-title">3. Raspberry Tiramisu</h3><br>'
    + '<a href="../images/cake/RASPBERRYTIRAMISU1.jpg" data-fancybox="table-slider"><img src="../images/cake/RASPBERRYTIRAMISU1.jpg" alt="" width="290px"></a><br>'
    + '<b style="color: red;">110.000₫</b><br>'
    + '<p>- Mô tả: Bánh Raspberry Tiramisu là một loại bánh phô mai truyền thống của Ý, được làm từ các lớp bánh mì xốp ngập đầy hương vị cà phê và kem phô mai truyền thống. Bánh còn có thêm lớp raspberry (quả mâm xôi) tươi thêm hương vị thanh mát và tạo điểm nhấn đặc biệt cho bánh.</p>'
    + '<p>- Các nguyên liệu chính để làm bánh Raspberry Tiramisu gồm: bánh mì xốp, kem phô mai, trứng, đường, cà phê, rượu và các loại trái cây tùy chọn như raspberry. Đầu tiên, bánh mì xốp sẽ được cắt thành các miếng nhỏ hơn và ngâm trong hỗn hợp cà phê và rượu để tạo độ ẩm và hương vị cho bánh.</p>'
    + '<p>- Sau đó, lớp kem phô mai sẽ được làm bằng cách đánh trứng với đường cho đến khi đạt được kết cấu mịn và nhẹ. Sau đó, kem phô mai này sẽ được thêm vào các miếng bánh mì xốp đã ngâm và lớp raspberry để tạo thành các tầng bánh.</p>'
    + '<p>- Bánh Raspberry Tiramisu thường được trang trí với lớp phô mai và một vài quả raspberry tươi để tạo ra một bánh trang trí đẹp mắt và hấp dẫn. Khi ăn, bánh sẽ mang lại hương vị ngọt ngào của kem phô mai, hương vị cà phê đắng nhẹ và vị thanh mát của quả mâm xôi.</p>'
    + '</div>'
var val_spchuanbiramat = '<div class="chitiet"><br>'
    + '<h3 style="color: #fcbc30;">Sản phẩm chuẩn bị ra mắt (Mua lần đầu giảm ngay 20%)</h3><br>'
    + '<h3 class="h3-title">1. Bánh Mousse Me & Sá Xị</h3><br>'
    + '<a href="../images/cake/Plum_Mousse.jpg" data-fancybox="table-slider"><img src="../images/cake/Plum_Mousse.jpg" alt="" width="290px"></a><br>'
    + '<b style="color: red;"><span style="font-size: 20px;">316.000₫</span><del style="font-size: 15px;">395.000₫</del><span style="background-color: rgb(218, 75, 75); color: white; font-size: 15px;">-20%</span></b><br>'
    + '<p>- Mô tả: Bánh Mousse Me & Sá Xị là một loại bánh ngọt phổ biến tại Việt Nam, thường được làm từ các nguyên liệu chính như sô-cô-la, kem, trứng và hoa quả.</p>'
    + '<p>- Bánh Mousse Me & Sá Xị thường có vị ngọt nhẹ nhàng, hòa quyện với hương vị chua của me và sá xị, tạo nên một hương vị thơm ngon và đặc biệt. Bánh thường được dùng như một món tráng miệng sau bữa ăn, hoặc có thể được thưởng thức vào bất cứ lúc nào trong ngày.</p><br><br>'

    + '<h3 class="h3-title">2. Bánh Mousse Xoài Colada I 18cm</h3><br>'
    + '<a href="../images/cake/PINACOLADA_v2.jpg" data-fancybox="table-slider"><img src="../images/cake/PINACOLADA_v2.jpg" alt="" width="290px"></a><br>'
    + '<b style="color: red;"><span style="font-size: 20px;">472.000₫</span><del style="font-size: 15px;">590.000₫</del><span style="background-color: rgb(218, 75, 75); color: white; font-size: 15px;">-20%</span></b>'
    + '<p>- Bánh Mousse Xoài Colada thường được làm từ những thành phần như kem phô mai, sữa đặc, nước cốt xoài, nước dừa, đường và gelatin. Trước tiên, bánh sẽ được làm từ bánh biscuit hoặc bánh quy nướng. Sau đó, một lớp kem phô mai được làm bằng cách đánh đều kem phô mai với sữa đặc và đường, sau đó thêm nước cốt xoài vào để tạo ra hương vị xoài đặc trưng.</p>'
    + '<p>- Lớp kem phô mai được đổ lên lớp bánh, và sau đó bánh sẽ được ngăn đông trong tủ lạnh cho đến khi lớp kem đông đặc. Lớp kem đông này sau đó được phủ bởi một lớp kem tươi nhẹ và hương vị nước dừa tạo nên hương vị Piña Colada. Lớp kem tươi này sau đó được trang trí bằng những miếng xoài tươi và một vài đường thạch nữa để tăng thêm hương vị.</p>'
    + '<p>- Bánh Mousse Xoài Colada thường được cắt thành những miếng vuông nhỏ và ăn lạnh để tận hưởng hương vị tuyệt vời của kem phô mai và xoài ngọt ngào. Bánh này thường được phục vụ trong các dịp tiệc tùng hoặc trong các bữa ăn gia đình.</p><br><br>'
    + '<p>Cả hai món bánh mousse này đều được làm từ những nguyên liệu tươi ngon và được chế biến tại shop. Nếu bạn yêu thích hương vị xoài ngọt ngào hoặc sô cô la đắng thì đây chắc chắn là một lựa chọn tuyệt vời cho bạn. </p>'
    + '</div>'
// Khởi tạo dữ liệu tin tức trong local storage
localStorage.setItem('bannhieu', val_bannhieu);
localStorage.setItem('moiramat', val_moinhat);
localStorage.setItem('spyeuthich', val_spyeuthich);
localStorage.setItem('spchuabiramat', val_spchuanbiramat);
