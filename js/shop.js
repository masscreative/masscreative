function addToCart(sku) {
  let skuId = "sku" + sku;
  let pic = JSON.parse(localStorage.getItem("pic")) || [];
  let findSku = pic.find((item) => item.sku === sku);
  let findProduct = products.find((item) => item.sku === sku);
  if (findSku === undefined) {
    pic.push({
      sku: findProduct.sku,
      incart: 1,
      category: findProduct.category,
      subcategory: findProduct.subcategory,
      developer: findProduct.developer,
      itemname: findProduct.itemname,
      version: findProduct.version,
      filesize: findProduct.filesize,
      uploaddate: findProduct.uploaddate,
      price: findProduct.harga,
      imglink: findProduct.imglink,
      postlink: findProduct.postlink,
      downloadlink: findProduct.downloadlink,
      devlogo: findProduct.devlogo,
      video: findProduct.video,
    });
  } else {
    findSku.incart += 1;
  }
  localStorage.setItem("pic", JSON.stringify(pic));
  if ($(".cart-page").length !== 0) {
    displayCart();
    displayTableIn();
    displayTotalCart();
    displayMiniCart();
    displayCost();
    displayItemCount();
    displayWishCount();
    displayMiniWishList();
  }
  displayCost();
  displayMiniCart();
  displayItemCount();
  displayWishCount();
  displayMiniWishList();
}

function addToWishList(sku) {
  let skuId = "sku" + sku;
  let wil = JSON.parse(localStorage.getItem("wl")) || [];
  let findSku = wil.find((item) => item.sku === sku);
  let findProduct = products.find((item) => item.sku === sku);
  let heartSku = "#heartplus" + sku;
  let wlSku = $(".products").find(heartSku);
  if (findSku === undefined) {
    wil.push({
      sku: findProduct.sku,
      inwish: 1,
      category: findProduct.category,
      subcategory: findProduct.subcategory,
      developer: findProduct.developer,
      itemname: findProduct.itemname,
      version: findProduct.version,
      filesize: findProduct.filesize,
      uploaddate: findProduct.uploaddate,
      price: findProduct.harga,
      imglink: findProduct.imglink,
      postlink: findProduct.postlink,
      downloadlink: findProduct.downloadlink,
      devlogo: findProduct.devlogo,
      video: findProduct.video,
    });
    wlSku.removeClass("alreadywish");
  } else {
    wil = wil.filter((item) => "sku" + item.sku !== skuId);
    wlSku.addClass("alreadywish");
  }
  localStorage.setItem("wl", JSON.stringify(wil));
  if ($(".cart-page").length !== 0) {
    displayCart();
    displayTableIn();
    displayTotalCart();
    displayMiniCart();
    displayCost();
    displayItemCount();
    displayWishCount();
    displayMiniWishList();
  }
  displayCost();
  displayMiniCart();
  displayItemCount();
  displayWishCount();
  displayMiniWishList();
}

function deleteProd(id) {
  let selectedItem = id;
  let pic = JSON.parse(localStorage.getItem("pic")) || [];
  pic = pic.filter((item) => "mini" + item.sku !== selectedItem.id) || pic.filter((item) => "cart" + item.sku !== selectedItem.id);
  localStorage.setItem("pic", JSON.stringify(pic));
  if ($(".cart-page").length !== 0) {
    displayCart();
    displayTableIn();
    displayTotalCart();
    displayMiniCart();
    displayCost();
    displayItemCount();
    displayWishCount();
    displayMiniWishList();
  }
  displayCost();
  displayMiniCart();
  displayItemCount();
  displayWishCount();
  displayMiniWishList();
}

function clearWishLish(sku) {
  let mwl = JSON.parse(localStorage.getItem("wl")) || [];
  if (mwl.length !== 0) {
    localStorage.removeItem("wl");
    document.querySelector("#wish-actions").innerHTML = ``;
  }
  if ($(".cart-page").length !== 0) {
    displayCart();
    displayTableIn();
    displayTotalCart();
    displayMiniCart();
    displayCost();
    displayItemCount();
    displayWishCount();
    displayMiniWishList();
  }
  displayCost();
  displayMiniCart();
  displayItemCount();
  displayWishCount();
  displayMiniWishList();
}

function displayItemCount() {
  let cartQty = $("#cart-icon").find(".cart-qty");
  let pic = JSON.parse(localStorage.getItem("pic")) || [];
  if (pic.length !== 0) {
    $("#cart-icon").find(".cart-info").removeClass("d-none");
    cartQty.text(
      Object.values(pic)
        .map((item) => item.incart)
        .reduce((item, x) => item + x, 0)
    );
  } else {
    cartQty.text(0);
  }
}

function displayWishCount() {
  let wishQty = $("#wish-icon").find(".cart-qty");
  let mnWl = JSON.parse(localStorage.getItem("wl")) || [];
  if (mnWl.length !== 0) {
    $("#wish-icon").find(".cart-info").removeClass("d-none");
    wishQty.text(
      Object.values(mnWl)
        .map((item) => item.inwish)
        .reduce((item, x) => item + x, 0)
    );
  } else {
    wishQty.text(0);
  }
}

function displayCart() {
  let pic = JSON.parse(localStorage.getItem("pic")) || [];
  if (pic.length !== 0) {
    return (document.querySelector("#tbodyCart").innerHTML = pic
      .map((x) => {
        let { sku, incart } = x;
        let findSku = pic.find((y) => y.sku === sku) || [];

        return `
            <tr class="cart_table_item" id="cart${sku}">
            <td class="product-thumbnail">
              <div class="product-thumbnail-wrapper">
                <a style="cursor: pointer;" onclick="delProd(mini${sku})" class="product-thumbnail-remove" title="Remove Product">
                  <i class="fas fa-times"></i>
                </a>
                <a href="${findSku.postlink}" class="product-thumbnail-image" title="${findSku.itemname}">
                  <img width="90" height="90" alt="" class="img-fluid" src="${findSku.imglink.replace(
                    "noData",
                    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk84bP7K0t2HAmzdK2rIbYRFh24u9YGFOyMnH8571ApYlgpV15iz8z4HbIdzqqP3y5XqVYP2151c6soQysyBlPAvrr9LYJlOxGZSr9DHDw_gDCEOYcmCPD0dmAyRN7U89z5SD-66zM7sXWk0XzScgrXEMYbIkqigp1qYtibRj2OpwDvzzIOrYADTz_fQ/s1600/no-image.png"
                  )}" />
                </a>
              </div>
            </td>
            <td class="product-name">
              <a href="${findSku.postlink}" class="font-weight-semi-bold text-color-dark text-color-hover-primary text-decoration-none">${findSku.itemname}</a>
            </td>
            <td class="product-price">
              <span id="product-amount" class="amount font-weight-medium text-color-grey">${findSku.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
            </td>
            <td class="product-quantity">
              <div class="quantity float-none m-0">
                <input type="button" class="minus text-color-hover-light bg-color-hover-primary border-color-hover-primary" value="-" />
                <input type="text" class="input-text qty text" title="Qty" value="${incart}" name="quantity" min="1" step="1" id="qty${sku}" />
                <input type="button" class="plus text-color-hover-light bg-color-hover-primary border-color-hover-primary" value="+" />
              </div>
            </td>
            <td class="product-subtotal text-end">
              <span class="amount text-color-dark font-weight-bold text-4">${(incart * findSku.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
            </td>
          </tr>
            `;
      })
      .join(""));
  } else {
    document.querySelector("ul.breadcrumb.cart-page").innerHTML = `
        <li class="alert alert-danger" style="text-align: center;">
          <strong>Ouw la..la..!</strong> masih kosong dong 😫 <br/>👉 <a href="/p/shop.html" class="alert-link">Pilih item</a> dulu yuk 👌
        </li>
        `;
  }
}

function displayTableIn() {
  let pic = JSON.parse(localStorage.getItem("pic")) || [];
  if (pic.length !== 0) {
    document.querySelector("ul.breadcrumb.cart-page").innerHTML = `
        <li class="text-transform-none me-2">
            <a style='cursor:pointer;' class="text-decoration-none text-color-primary">Daftar Keranjang</a>
        </li>
        <li class="text-transform-none text-color-grey-lighten me-2">
            <a href="/p/check-out.html" class="text-decoration-none text-color-grey-lighten text-color-hover-primary">Pembayaran</a>
        </li>
        <li class="text-transform-none text-color-grey-lighten">
            <a style='cursor:pointer;' class="text-decoration-none text-color-grey-lighten">Pesanan Seleseai</a>
        </li>
            `;
    document.querySelector("#theadCart").innerHTML = `
        <tr class="text-color-dark">
            <th class="product-thumbnail" width="15%">&nbsp;</th>
            <th class="product-name text-uppercase" width="30%">Nama Item</th>
            <th class="product-price text-uppercase" width="15%">Harga</th>
            <th class="product-quantity text-uppercase" width="20%">Jumlah</th>
            <th class="product-subtotal text-uppercase text-end" width="20%">Subtotal</th>
        </tr>
            `;
    document.querySelector("#tfootCart").innerHTML = `
        <tr>
            <td colspan="5">
                <div class="row justify-content-between mx-0">
                <div class="col-md-auto px-0 mb-3 mb-md-0">
                    <div class="d-flex align-items-center">
                    <input type="text" class="form-control h-auto border-radius-0 line-height-1 py-3" name="couponCode" placeholder="Coupon Code" />
                    <a type="submit" class="btn-light btn-modern text-color-dark bg-color-light-scale-2 text-color-hover-light bg-color-hover-primary text-uppercase text-3 font-weight-bold border-0 border-radius-0 ws-nowrap btn-px-4 py-3 ms-2">Check Voucher</a>
                    </div>
                </div>
                <div class="col-md-auto px-0">
                    <a type="submit" class="btn btn-light btn-modern text-color-dark bg-color-light-scale-2 text-color-hover-light bg-color-hover-primary text-uppercase text-3 font-weight-bold border-0 border-radius-0 btn-px-4 py-3">Update Keranjang</a>
                </div>
                </div>
            </td>
        </tr>
            `;
  }
}

function displayTotalCart() {
  let pic = JSON.parse(localStorage.getItem("pic")) || [];
  if (pic.length !== 0) {
    let shippingCost = 0;
    let voucherDisc = 5 / 100;
    let totals = pic
      .map((x) => {
        let { incart, sku } = x;
        let item = pic.find((y) => y.sku === sku) || [];

        return incart * item.price;
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    let costs = totals * voucherDisc;
    let finalCosts = totals - costs;
    document.querySelector(".cart-totals").innerHTML = `
          <div class="card border-width-3 border-radius-0 border-color-hover-dark" data-plugin-sticky data-plugin-options="{'minWidth': 991, 'containerSelector': '.row', 'padding': {'top': 85}}">
          <div class="card-body">
            <h4 class="font-weight-bold text-uppercase text-4 mb-3">Cart Totals</h4>
            <table class="shop_table mb-4">
              <tbody>
                <tr class="cart-subtotal">
                  <td class="border-top-0">
                    <strong class="text-color-dark">Subtotal</strong>
                  </td>
                  <td class="border-top-0 text-end">
                    <strong><span class="amount font-weight-medium">Rp ${totals.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span></strong>
                  </td>
                </tr>
                <tr class="shipping">
                  <td colspan="2">
                    <strong class="d-block text-color-dark mb-2 style="float: left">Shipping</strong>
                    <div class="d-flex flex-column">
                      <label class="d-flex align-items-center text-color-grey mb-0" for="shipping_method1">
                        Free Shipping : Rp ${shippingCost}
                      </label>
                      <label class="d-flex align-items-center text-color-grey mb-0" for="shipping_method3">
                        Discount Voucher: ${voucherDisc * 100}%
                      </label>
                    </div>
                  </td>
                </tr>
                <tr class="total">
                  <td>
                    <strong class="text-color-dark text-3-5">Total</strong>
                  </td>
                  <td class="text-end">
                    <strong class="text-color-dark"><span class="amount text-color-dark text-5">Rp ${finalCosts.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span></strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <a href="/p/checkout.html" class="btn btn-dark btn-modern w-100 text-uppercase bg-color-hover-primary border-color-hover-primary border-radius-0 text-3 py-3">Proceed to Checkout <i class="fas fa-arrow-right ms-2"></i></a>
          </div>
        </div>
              `;
  } else return;
}

function displayMiniCart() {
  let mnCart = document.querySelector("#cart-list");
  let pic = JSON.parse(localStorage.getItem("pic")) || [];
  if (pic.length !== 0) {
    mnCart.innerHTML = "";
    Object.values(pic).map((item) => {
      let ipLink = item.imglink.replace(
        "noData",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk84bP7K0t2HAmzdK2rIbYRFh24u9YGFOyMnH8571ApYlgpV15iz8z4HbIdzqqP3y5XqVYP2151c6soQysyBlPAvrr9LYJlOxGZSr9DHDw_gDCEOYcmCPD0dmAyRN7U89z5SD-66zM7sXWk0XzScgrXEMYbIkqigp1qYtibRj2OpwDvzzIOrYADTz_fQ/s1600/no-image.png"
      );
      let sku = item.sku;
      mnCart.innerHTML += `
            <li class="item" id="mini${sku}">
              <a href="#" title="${item.itemname}" class="product-image">
                <img src="${ipLink}" alt="${item.itemname}"/>
              </a>
              <div class="product-details">
                <p class="product-name" style="margin-top: -4px; line-height: 14px; font-size: 0.7em">
                  <a href="#">${item.itemname} </a>
                </p>
                <p class="qty-price">${item.incart}X <span class="price">${item.price}</span></p>
                <a onclick="delProd(mini${sku})" style="cursor:pointer;"title="Remove This Item" class="btn-remove">
                  <i class="fas fa-times"></i>
                </a>
              </div>
            </li>
        `;
    });
  } else {
    mnCart.innerHTML = `
        <li class="alert alert-danger">
          <strong>Ouw la..la..!</strong> masih kosong dong 😫 <br/>👉 <a href="/p/shop.html" class="alert-link">Pilih item</a> dulu yuk 👌
        </li>
        `;
  }
}

function displayCost() {
  let tCost = $("#cart-actions");
  let pic = JSON.parse(localStorage.getItem("pic")) || [];
  if (pic.length !== 0) {
    let amount = pic
      .map((item) => {
        let { incart, sku } = item;
        let search = products.find((y) => y.sku === sku) || [];

        return incart * search.harga;
      })
      .reduce((item, y) => item + y, 0);
    tCost.html(`
        <div class="totals">
          <span class="label">Total:</span>
            <span class="price-total"><span class="price">${amount}</span></span>
          </div>
         <div class="actions">
                                <a class="btn btn-dark" href="/p/cart.html" style="min-width:120px">View Cart</a>
                                <a class="btn btn-primary" href="/p/check-out.html" style="min-width:120px">Checkout</a>
                              </div>
        `);
  } else return;
}

function displayMiniWishList() {
  let mnWl = document.querySelector("#wish-list");
  let mwl = JSON.parse(localStorage.getItem("wl")) || [];
  if (mwl.length !== 0) {
    mnWl.innerHTML = "";
    Object.values(mwl).map((item) => {
      let ipLink = item.imglink.replace(
        "noData",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk84bP7K0t2HAmzdK2rIbYRFh24u9YGFOyMnH8571ApYlgpV15iz8z4HbIdzqqP3y5XqVYP2151c6soQysyBlPAvrr9LYJlOxGZSr9DHDw_gDCEOYcmCPD0dmAyRN7U89z5SD-66zM7sXWk0XzScgrXEMYbIkqigp1qYtibRj2OpwDvzzIOrYADTz_fQ/s1600/no-image.png"
      );
      let sku = item.sku;
      mnWl.innerHTML += `
                <li class="item" id="wish${sku}">
                  <a href="${item.postlink}" title="${item.itemname}" class="product-image">
                    <img src="${ipLink}" alt="${item.itemname}"/>
                  </a>
                  <div class="product-details">
                    <p class="product-name" style="margin-top: -4px; line-height: 14px; font-size: 0.7em">
                      <a href="#">${item.itemname} </a>                  
                    </p>
                    <p class="qty-price"><a href="#" class="btn btn-badge btn-modern btn-primary mb-2" href="#" style="color: #fff; padding: 5px; top: 10px; min-width: 56%;" onclick="addToCart(${sku})">add to cart <span class="badge badge-dark badge-sm rounded-pill text-uppercase px-2 py-1">Rp ${item.price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span></a><span class="price"></span></p> 
                  </div>
                </li>
            `;
      document.querySelector("#wish-actions").innerHTML = `<div class="actions">
          <a class="btn btn-dark" style="min-width:120px;cursor:pointer" onclick=clearwl(${sku})>Clear Wish List?</a>
        </div>`;
    });
  } else {
    mnWl.innerHTML = `
            <li class="alert alert-danger">
              <strong>Ouw la..la..!</strong> masih kosong dong 😫 <br/>👉 <a href="/p/shop.html" class="alert-link">Pilih item</a> dulu yuk 👌
            </li>
            `;
  }
}

function displayOrder() {
  let pic = JSON.parse(localStorage.getItem("pic")) || [];
  let tbodyItem = document.querySelector("#bodyItem");
  if (pic.length !== 0) {
    return (tbodyItem.innerHTML = pic
      .map((x) => {
        let { sku, incart, itemname, price } = x;
        let item = pic.find((y) => y.sku === sku) || [];
        return `
          <tr>
            <td>
                <strong class="d-block text-color-dark line-height-1 font-weight-semibold">${itemname} <span class="product-qty">x${incart}</span></strong>
                <span class="text-1">${sku}</span>
            </td>
            <td class="text-end align-top">
                <span class="amount font-weight-medium text-color-grey">${(price * incart).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
            </td>
          </tr>
          `;
      })
      .join(""));
  } else {
    tbodyItem.innerHTML = ``;
  }
}

function setSubTotals() {
  let pic = JSON.parse(localStorage.getItem("pic")) || [];
  let tbodySubtotal = document.querySelector("#bodySubtotal");
  let tbodyShipping = document.querySelector("#bodyShipping");
  if (pic.length !== 0) {
    let shippingCost = 0;
    let voucherDisc = 5 / 100;
    let totals = pic
      .map((x) => {
        let { incart, sku } = x;
        let item = pic.find((y) => y.sku === sku) || [];

        return incart * item.price;
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    let costs = totals * voucherDisc;
    let finalCosts = totals - costs;

    tbodySubtotal.innerHTML = `
        <tr class="cart-subtotal">
            <td class="border-top-0">
                <strong class="text-color-dark">Subtotal</strong>
            </td>
            <td class="border-top-0 text-end">
                <strong><span class="amount font-weight-medium">Rp ${totals.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span></strong>
            </td>
        </tr>
        `;
    tbodyShipping.innerHTML = `
        <tr class="shipping">
        <td colspan="2">
          <strong class="d-block text-color-dark mb-2">Shipping</strong>
    
          <div class="d-flex flex-column">
            <label class="d-flex align-items-center text-color-grey mb-0" for="shipping_method1"> Free Shipping </label>
            <label class="d-flex align-items-center text-color-grey mb-0" for="shipping_method3"> Discount Voucher: ${voucherDisc * 100} % </label>
          </div>
        </td>
      </tr>
      <tr class="total">
        <td>
          <strong class="text-color-dark text-3-5">Total</strong>
        </td>
        <td class="text-end">
          <strong class="text-color-dark"><span class="amount text-color-dark text-5">Rp ${finalCosts.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span></strong>
        </td>
        </tr>
        `;
  }
}

function sendWA() {
  let pic = JSON.parse(localStorage.getItem("pic")) || [];
  let pNbr = 6287876382398;
  let payMethod = $("input[name=payment_method]:checked", "#form-payment").val();
  let buyerName = $("#buyer-name").val();
  let buyerEmail = $("#buyer-email").val();
  let buyerCity = $("#buyer-city").val();
  let buyerPhone = $("#buyer-phone").val();
  let tMsg1 = `Hai%20admin%20masscreative%20%F0%9F%91%8B%0ASaya%20${buyerName}%20(${buyerEmail})%2C%0Abaru%20saja%20melakukan%20transaksi%20item%20berikut%20di%20situs%20masscreativeid.blogspot.com%0A
              `;
  let orderNumber = Math.floor(Math.random() * (59876 - 54321 + 1)) + 54321;
  var today = new Date();
  var day = String(today.getDate()).padStart(2, "0");
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var month = monthNames[today.getMonth()];
  var year = today.getFullYear();
  var hour = today.getHours();
  var minute = today.getMinutes();
  today = day + "-" + month + "-" + year;
  let time = hour + ":" + minute;
  let dayTime = day + month + year + hour + minute;
  let tMsg2 = pic
    .map((x) => {
      let { sku, incart, itemname, price } = x;
      let item = pic.find((y) => y.sku === sku) || [];
      return `👇item%3A%20${itemname}%0Asku%3A%20${sku}%0Aqty%3A%20${incart}%0Aharga%3A%20Rp.%20${incart * price}%0A%0A`;
    })
    .join("");
  let tMsg3 = `%0APembayaran%20dengan%3A%20${payMethod}%0ATolong%20diproses%20ya!%0A`;

  let harga = pic
    .map((x) => {
      let { incart, sku, price } = x;
      let item = pic.find((y) => y.sku === sku) || [];

      return incart * price;
    })
    .reduce((x, y) => x + y, 0);
  let orderData = (dayTime = [
    {
      buyerName: buyerName,
      buyerEMail: buyerEmail,
      buyerCity: buyerCity,
      buyerPayment: payMethod,
      buyerPhone: buyerPhone,
      orderNumber: orderNumber,
      orderDate: today,
      orderTime: time,
    },
  ]);
  harga = harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  let buyerOrderHistory = pic.map((d) => ({ ...d, dataOrder: { buyerName: buyerName, buyerEMail: buyerEmail, buyerCity: buyerCity, buyerPayment: payMethod, buyerPhone: buyerPhone, orderNumber: orderNumber, orderDate: today, orderTime: time } }));
  window.open(`https://api.whatsapp.com/send?phone=${pNbr}&text=${tMsg1}%0A${tMsg2}%0ATOTAL:%20Rp%20${harga}%0A${tMsg3}`);
  window.location = `/order-complete.html`;

  localStorage.setItem("oderData", JSON.stringify(orderData));
  localStorage.setItem("historyOrder", JSON.stringify(buyerOrderHistory));
}

function payment() {
  $(".payment-methods input").on("change", function () {
    let payInfo = document.querySelector(".payment-info");
    let payment = $("input[name=payment_method]:checked", ".payment-methods ").val();
    if (payment == "Bank Transfer") {
      payInfo.innerHTML = `
      <div class="alert alert-success">
          <strong>BANK TRANSFER!</strong><br/>
          Transfer Ke rekening: 0800-000-000
          <a href="#" class="alert-link"><br/>BANK BCA </a>.
          a/n Mr X
      </div>
      `;
    } else if (payment == "OVO") {
      payInfo.innerHTML = `
      <div class="alert alert-success">
          <strong>OVO Dompet Digital!</strong><br />
          No. Ponsel: 0813-7558-0084<br />
          <a href="#" class="alert-link">Klik </a>Informasi Detail 
      </div>
      `;
    } else if (payment == "DANA") {
      payInfo.innerHTML = `
      <div class="alert alert-success">
          <strong>DANA Dompet Digital!</strong><br />
          No. Ponsel: 0813-7558-0084<br />
          <a href="#" class="alert-link">Klik </a>Informasi Detail 
      </div>
      `;
    } else if (payment == "Shopee Pay") {
      payInfo.innerHTML = `
      <div class="alert alert-success">
          <strong>Shopee Pay Dompet Digital!</strong><br />
          No. Ponsel: 0813-7558-0084<br />
          <a href="#" class="alert-link">Klik </a>Informasi Detail 
      </div>
      `;
    } else if (payment == "GOPAY") {
      payInfo.innerHTML = `
      <div class="alert alert-success">
          <strong>GOPAY Dompet Digital!</strong><br />
          No. Ponsel: 0813-7558-0084<br />
          <a href="#" class="alert-link">Klik </a>Informasi Detail 
      </div>
      `;
    } else return;
  });
}

function formValidator() {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      var farm = document.getElementById("form-buyer");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
}

function buyerButton() {
  let inputs = document.querySelectorAll("input");
  let buttonSend = document.getElementById("form-buyer");

  let inputValidator = {
    username: false,
    email: false,
    phone: false,
    city: false,
  };

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      let name = event.target.getAttribute("name");
      if (event.target.value.length > 0) {
        inputValidator[name] = true;
      } else {
        inputValidator[name] = false;
      }

      let allTrue = Object.keys(inputValidator).every((item) => {
        return inputValidator[item] === true;
      });

      if (allTrue) {
        buttonSend.classList.remove("disabled");
      } else {
        buttonSend.classList.add("disabled");
      }
    });
  });
}

function disableButtonSendOrder() {
  $("#send-email").removeClass("disabled");
  $("#send-whatsapp").removeClass("disabled");
}

function bodyOrderComplete() {
  let hsOrder = JSON.parse(localStorage.getItem("historyOrder")) || [];
  let buyerInfo = JSON.parse(localStorage.getItem("BuyerInfoOrder")) || [];
  if (hsOrder.lenght !== 0) {
    document.querySelector(".shop_table.cart-totals tbody").innerHTML = hsOrder
      .map((x) => {
        let { sku, incart, price, itemname, version } = x;
        let hsCart = hsOrder.find((y) => y.sku === sku) || [];
        return `<tr>
                  <td>
                      <strong class="d-block text-color-dark line-height-1 font-weight-semibold">${itemname} <span class="product-qty">x${incart}</span></strong>
                      <span class="text-1">versi: ${version}</span>
                  </td>
                  <td class="text-end align-top">
                      <span class="amount font-weight-medium text-color-grey">Rp ${(incart * price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                  </td>
              </tr>`;
      })
      .join("");
    document.querySelector(".co-breadcrumb").innerHTML = `
                <div class="col-lg-8">
                  <ul class="breadcrumb breadcrumb-dividers-no-opacity font-weight-bold text-6 justify-content-center my-5">
                    <li class="text-transform-none text-color-grey-lighten me-2">
                      <a style="cursor:pointer;" class="text-decoration-none text-color-grey-lighten">Daftar Keranjang</a>
                    </li>
                    <li class="text-transform-none text-color-grey-lighten me-2">
                      <a style="cursor:pointer;" class="text-decoration-none text-color-grey-lighten">Pembayaran</a>
                    </li>
                    <li class="text-transform-none text-color-grey-lighten">
                      <a style="cursor:pointer;" class="text-decoration-none text-color-primary">Pesanan Selesai</a>
                    </li>
                  </ul>
                </div>
    `;
    document.querySelector(".card.border-width-3.border-radius-0.border-color-success").innerHTML = `
    <div class="card-body text-center">
      <p class="text-color-dark font-weight-bold text-4-5 mb-0"><i class="fas fa-check text-color-success me-1"></i> Terima Kasih. Pesanannya sudah dikirim 🥰 </p>
    </div>
    `;
    document.querySelector(".header-order").innerHTML = buyerInfo.map((x) => {
      let { buyerCity, buyerEMail, buyerName, buyerPayment, buyerPhone, orderDate, orderNumber, orderTime } = x;
      return `
                    <div class="text-center">
                      <span>
                        Nomor Order <br />
                        <strong class="text-color-dark">${orderNumber}</strong>
                      </span>
                    </div>
                    <div class="text-center mt-4 mt-md-0">
                      <span>
                        Tanggal <br />
                        <strong class="text-color-dark">${orderDate}</strong>
                      </span>
                    </div>
                    <div class="text-center mt-4 mt-md-0">
                      <span>
                        Email <br />
                        <strong class="text-color-dark">${buyerEMail}</strong>
                      </span>
                    </div>
                    <div class="text-center mt-4 mt-md-0">
                      <span>
                        Metode Pembayaran <br />
                        <strong class="text-color-dark">${buyerPayment}</strong>
                      </span>
                    </div>
    `;
    });
    document.querySelector("h4.your-order").innerHTML = "List Pesanan";
    document.querySelector("table.shop_table.cart-totals thead").innerHTML = `<tr>
    <th colspan="2" class="border-top-0">
      <strong class="text-color-dark">Produk</strong>
    </th>
  </tr>`;
    document.querySelector("table.shop_table.cart-totals tfoot").innerHTML = buyerInfo.map((x) => {
      let amount = hsOrder
        .map((x) => {
          let { incart, sku } = x;
          let item = hsOrder.find((y) => y.sku === sku) || [];

          return incart * item.price;
        })
        .reduce((x, y) => x + y, 0);
      let disc = 5 / 100;
      let vocDisc = amount * disc;
      return `
    <tr class="cart-subtotal">
                            <td class="border-top-0">
                              <strong class="text-color-dark">Subtotal</strong>
                            </td>
                            <td class="border-top-0 text-end">
                              <strong><span class="amount font-weight-medium">Rp ${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span></strong>
                            </td>
                          </tr>
                          <tr class="shipping">
                            <td class="border-top-0">
                              <strong class="text-color-dark">Pengiriman</strong>
                            </td>
                            <td class="border-top-0 text-end">
                              <strong><span class="amount font-weight-medium">Free Shipping</span></strong>
                            </td>
                          </tr>
                          <tr class="shipping">
                          <td class="border-top-0">
                            <strong class="text-color-dark">Diskon Toko</strong> 5%
                          </td>
                          <td class="border-top-0 text-end">
                            <strong><span class="amount font-weight-medium">Rp ${vocDisc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span></strong>
                          </td>
                        </tr>
                          <tr class="total">
                            <td>
                              <strong class="text-color-dark text-3-5">Total</strong>
                            </td>
                            <td class="text-end">
                              <strong class="text-color-dark"><span class="amount text-color-dark text-5">Rp ${(amount - vocDisc).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span></strong>
                            </td>
                          </tr>
    `;
    });
    document.querySelector(".buyer-address").innerHTML = buyerInfo.map((x) => {
      let { buyerCity, buyerEMail, buyerName, buyerPayment, buyerPhone, orderDate, orderNumber, orderTime } = x;
      return `<div class="col-lg-6 mb-4 mb-lg-0">
                      <h2 class="text-color-dark font-weight-bold text-5-5 mb-1">Alamat Penagihan</h2>
                      <ul class="list list-unstyled text-2 mb-0">
                        <li class="mb-0">${buyerName}</li>
                        <li class="mb-0">${buyerCity}</li>
                        <li class="mt-3 mb-0">${buyerEMail}</li>
                        <li class="mt-3 mb-0">${buyerPhone}</li>
                      </ul>
                    </div>
                    <div class="col-lg-6">
                      <h2 class="text-color-dark font-weight-bold text-5-5 mb-1">Alamat Pengiriman</h2>
                      <ul class="list list-unstyled text-2 mb-0">
                        <li class="mb-0">${buyerName}</li>
                        <li class="mb-0">${buyerCity}</li>
                        <li class="mt-3 mb-0">${buyerEMail}</li>
                        <li class="mt-3 mb-0">${buyerPhone}</li>
                      </ul>
                    </div>`;
    });
  } else {
    document.querySelector(".shop_table.cart-totals tbody").innerHTML = ``;
  }
}

function postProductDisplay() {
  var $table = $("#table");
  let product = products.find((x) => x.sku === skuProduct) || [];
  let shortdesc = document.querySelector("#short-description-of-product");
  let fulldesc = document.querySelector("#description-of-product");
  let spek = document.querySelector("#product-spesification");
  let additional = document.querySelector("#additional-info");

  let content = document.querySelector(".post.product-content");

  let { sku, category, subcategory, developer, itemname, version, filesize, uploaddate, harga, imglink, video, devlogo, postlink, downloadlink } = product;
  if (product.length !== 0) {
    content.innerHTML = `
      <div id="${skuProduct}" class="post${skuProduct} product type-product">
        <div class="top-woo-area position-relative" id="rh_woo_layout_inimage">
          <div class="rh-container position-static flowhidden pt15 pb30">
            <div class="rh-360-content-area tabletsblockdisplay woo_white_text_layout whitecolor">
              <nav class="woocommerce-breadcrumb">
                <a href="/">Home</a>
                <span class="delimiter"><i class="fa-solid fa-caret-right"></i></span>
                <a href="${category.replace(/\s+/g, "-").toLowerCase() + ".html"}">${category}</a>
                <span class="delimiter"><i class="fa-solid fa-caret-right"></i></span>
                <a href="${category.replace(/\s+/g, "-").toLowerCase() + ".html"}">${subcategory}</a>
                <span class="delimiter">
                  <i class="fa-solid fa-caret-right"></i>
                </span>${itemname}
              </nav>
              <div class="woocommerce-notices-wrapper"></div>
              <div class="woo-title-area mb10 flowhidden">
                <h1 class="product_title entry-title">${itemname}</h1>
              </div>
            </div>
  
            <div class="rh-360-sidebar tabletsblockdisplay summary whitebg rh-shadow3 rehub-sec-smooth calcposright float_p_trigger">
              <div class="woo-image-part position-relative modulo-lightbox">
                <div class="pt15 pl15 pr15 text-center">
                  <div class="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-5 images no-gallery-thumbnails img-mobs-maxh-250" data-columns="5" style="opacity: 1; transition: opacity 0.25s ease-in-out">
                    <figure class="woocommerce-product-gallery__wrapper">
                      <div data-thumb="${imglink}" data-thumb-alt="" class="woocommerce-product-gallery__image">
                        <a href="${imglink}">
                          <img src="${imglink}" class="wp-post-image" alt="" loading="lazy" title="apple_ipod_touch_1" data-caption="" data-src="${imglink}" data-large_image="${imglink}"/>
                        </a>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
              <div class="re_wooinner_cta_wrapper padd20">
                <div class="woo-price-area">
                  <p class="price">
                    <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">Rp </span>${harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</bdi></span>
                  </p>
                </div>
                <div class="woo-button-actions-area mb15">
                  <div class="heart_thumb_wrap text-center">
                    <span class="flowhidden cell_wishlist">
                      <span class="heartplus" data-post_id="${sku}">
                        <span class="ml5 rtlmr5 wishaddwrap" id="wishadd${sku}">Add to wishlist</span>
                        <span class="ml5 rtlmr5 wishaddedwrap" id="wishadded${sku}">Added to wishlist</span>
                        <span class="ml5 rtlmr5 wishremovedwrap" id="wishremoved${sku}">Removed from wishlist</span>
                      </span>
                    </span>
                  </div>
                </div>
  
                <div class="woo-button-area mb30" id="woo-button-area">
                  <form class="cart" action="" method="post" enctype="multipart/form-data">
                    <div class="quantity">
                      <label class="screen-reader-text" for="quantity${sku}">${itemname}</label>
                      <input type="text" class="input-text qty text" title="Qty" id="quantity${sku}" class="input-text qty text" step="1" min="1" max="" name="quantity" value="1" title="Qty" size="4" placeholder="" inputmode="numeric" autocomplete="off" />
                    </div>
                    <a type="submit" name="" value="${sku}" class="single_add_to_cart_button" onclick="addToCartProduct(${skuProduct})">Add to cart</a>
                  </form>
                </div>
                <div class="clearfix"></div>
  
                <div class="rh-line mb10 mt10"></div>
                <table class="woocommerce-group-attributes-public">
                  <tr class="attribute_row attribute_row_rhothergroup">
                    <td>
                      <table class="woocommerce-product-attributes shop_attributes">
                        <tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_color">
                          <th class="woocommerce-product-attributes-item__label">Version </th>
                          <td class="woocommerce-product-attributes-item__value">
                            <p>${version}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
  
            <div class="re_wooinner_info"></div>
            <div class="mb15 mt15 pt15 border-top font90 hideonfloattablet">
              <div class="product_meta">
                <div class="woostorewrap flowhidden mb10 rh-flex-center-align">
                  <div class="brand_logo_small">
                    <a href='${developer.replace(/\s+/g, "-").toLowerCase() + ".html"}'><img class="lazyload" data-skip-lazy="" data-src="http://recart.wpsoul.com/wp-content/uploads/2019/06/apple15.jpg" height="30" alt="${itemname}" src="assets/blank.gif" /></a>
                  </div>
                  <div class="store_tax">
                    <span class="tag_woo_meta"
                      ><span class="tag_woo_meta_item"><a href='${developer.replace(/\s+/g, "-").toLowerCase() + ".html"}' rel="tag">${developer}</a></span></span
                    >
                  </div>
                </div>
  
                <span class="posted_in">Category: <a href='${category.replace(/\s+/g, "-").toLowerCase() + ".html"}' rel="tag">${category}</a></span>
              </div>
            </div>
          </div>
        </div>
  
        <div class="rh-360-content-area tabletsblockdisplay woo_white_text_layout whitecolor">
          <div class="mb20 font120 woo_single_excerpt fontbold">
            <div class="video-payer">
              <div id="video${sku}" style="margin:auto;"></div>
            </div>
            <div class="woocommerce-product-details__short-description">
              ${shortdesc}
            </div>
          </div>
  
          <div class="rh-flex-center-align woo_top_meta mobileblockdisplay mb20">
            <div class="floatleft mr15 disablefloatmobile rtlml15">
              <span data-scrollto="#reviews" class="rehub_scroll cursorpointer font80">Add your review</span>
            </div>
  
            <span class="floatleft meta post-meta mt0 mb0 disablefloatmobile">
              <span class="postview_meta mr10">1505</span>
            </span>
          </div>
          <div class="top_share_small top_share notextshare">
            <div class="post_share">
              <div class="social_icon row_social_inpost">
                <span data-href="https://www.facebook.com/sharer/sharer.php?u=.%2Fproduct%2Fapple-ipod-touch-2%2F" class="fb share-link-image" data-service="facebook"><i class="fa-brands fa-facebook"></i></span
                ><span data-href="https://twitter.com/share?url=.%2Fproduct%2Fapple-ipod-touch-2%2F&text=Apple+iPod+Touch" class="tw share-link-image" data-service="twitter"><i class="fa-brands fa-twitter"></i></span
                ><span data-href="https://pinterest.com/pin/create/button/?url=.%2Fproduct%2Fapple-ipod-touch-2%2F&amp;media=./wp-content/uploads/2019/03/apple_ipod_touch_1.jpg&amp;description=Apple+iPod+Touch" class="pn share-link-image" data-service="pinterest"
                  ><i class="fa-brands fa-pinterest"></i></span
                ><span data-href="mailto:?subject=Apple+iPod+Touch&body=Check out: .%2Fproduct%2Fapple-ipod-touch-2%2F - rehub" class="in share-link-image" data-service="email"><i class="fa-solid fa-envelope"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div id="contents-section-woo-area" class="rh-shadow5">
      <div class="rh-container">
        <ul class="rh-360-content-area tabletsblockdisplay smart-scroll-desktop clearfix contents-woo-area rh-big-tabs-ul">
          <li class="below-border rh-hov-bor-line active rh-big-tabs-li description_tab" id="tab-title-description">
            <a href="#section-description">Description</a>
          </li>
          <li class="below-border rh-hov-bor-line rh-big-tabs-li reviews_tab" id="tab-title-reviews">
            <a href="#section-reviews">Reviews (1)</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="woo-content-area">
      <div class="content-woo-section pt30 pb20 content-woo-section--description" id="section-description">
        <div class="rh-container">
          <div class="rh-360-content-area tabletsblockdisplay">
            <div class="clearfix"></div>
            ${fulldesc}
            <div class="wpsm-table wpsm-table-main-color">
              <table>
                <tbody>
                  <tr>
                    <th></th>
                    <th>Keterangan</th>
                  </tr>
                  <tr>
                    <td><strong>Version</strong></td>
                    <td>${version}</td>
                  </tr>
                  <tr>
                    <td><strong>File Size</strong></td>
                    <td>${filesize}</td>
                  </tr>
                  <tr>
                    <td><strong>Update</strong></td>
                    <td>${uploaddate}</td>
                  </tr>
                  <tr>
                    <td><strong>Download</strong></td>
                    <td><a href='${productDownload}'>DOWNLOAD</a></td>
                  </tr>
                  <tr>
                    <td colspan="3"><em>* Ukuran file mungkin berbeda sesuai hasil kompress</em></td>
                  </tr>
                </tbody>
              </table>
              <p></p>
            </div>
            ${additional}
            <h2>Feedbacks</h2>
            <div class="wpsm-testimonial">
              "Testimoni"
            </div>
          </div>
        </div>
      </div>
      <div class="content-woo-section pt30 pb20 content-woo-section--reviews" id="section-reviews">
        <div class="rh-container">
          <div class="rh-360-content-area tabletsblockdisplay">
            <div id="reviews" class="woocommerce-Reviews">
              <h2 class="woocommerce-Reviews-title mb15 fontnormal font120"><i class="fa-solid fa-comment"></i> User Reviews</h2>
              <div class="mb20 rh-line"></div>
              <div class="mobileblockdisplay rh-flex-center-align">
                <div class="woo-rev-part pr30 pl30 text-center">
                  <div class="woo-avg-rating">
                    <span class="orangecolor font200 fontbold">4.8</span> <span class="greycolor font90">out of 5</span>
                    <div class="clearfix"></div>
                  </div>
                </div>
                <div class="woo-rev-part pl20 pr20 rh-line-left rh-line-right rh-flex-grow1">
                  <div class="woo-rating-bars">
                    <div class="rating-bar">
                      <div class="star-rating-wrap">
                        <div class="rh_woo_star" title="Rated 5 out of 5">
                          <span class="rhwoostar rhwoostar1 active">&#9733;</span><span class="rhwoostar rhwoostar2 active">&#9733;</span><span class="rhwoostar rhwoostar3 active">&#9733;</span><span class="rhwoostar rhwoostar4 active">&#9733;</span
                          ><span class="rhwoostar rhwoostar5 active">&#9733;</span>
                        </div>
                      </div>
                      <div class="rating-percentage-bar-wrap">
                        <div class="rating-percentage-bar">
                          <span style="width: 92%" class="rating-percentage"></span>
                        </div>
                      </div>
                      <div class="rating-count zero">65</div>
                    </div>
                    <div class="rating-bar">
                      <div class="star-rating-wrap">
                        <div class="rh_woo_star" title="Rated 4 out of 5">
                          <span class="rhwoostar rhwoostar1 active">&#9733;</span><span class="rhwoostar rhwoostar2 active">&#9733;</span><span class="rhwoostar rhwoostar3 active">&#9733;</span><span class="rhwoostar rhwoostar4 active">&#9733;</span><span class="rhwoostar rhwoostar5">&#9733;</span>
                        </div>
                      </div>
                      <div class="rating-percentage-bar-wrap">
                        <div class="rating-percentage-bar">
                          <span style="width: 7%" class="rating-percentage"></span>
                        </div>
                      </div>
                      <div class="rating-count zero">3</div>
                    </div>
                    <div class="rating-bar">
                      <div class="star-rating-wrap">
                        <div class="rh_woo_star" title="Rated 3 out of 5">
                          <span class="rhwoostar rhwoostar1 active">&#9733;</span><span class="rhwoostar rhwoostar2 active">&#9733;</span><span class="rhwoostar rhwoostar3 active">&#9733;</span><span class="rhwoostar rhwoostar4">&#9733;</span><span class="rhwoostar rhwoostar5">&#9733;</span>
                        </div>
                      </div>
                      <div class="rating-percentage-bar-wrap">
                        <div class="rating-percentage-bar">
                          <span style="width: 0%" class="rating-percentage"></span>
                        </div>
                      </div>
                      <div class="rating-count zero">0</div>
                    </div>
                    <div class="rating-bar">
                      <div class="star-rating-wrap">
                        <div class="rh_woo_star" title="Rated 2 out of 5">
                          <span class="rhwoostar rhwoostar1 active">&#9733;</span><span class="rhwoostar rhwoostar2 active">&#9733;</span><span class="rhwoostar rhwoostar3">&#9733;</span><span class="rhwoostar rhwoostar4">&#9733;</span><span class="rhwoostar rhwoostar5">&#9733;</span>
                        </div>
                      </div>
                      <div class="rating-percentage-bar-wrap">
                        <div class="rating-percentage-bar">
                          <span style="width: 0%" class="rating-percentage"></span>
                        </div>
                      </div>
                      <div class="rating-count zero">0</div>
                    </div>
                    <div class="rating-bar">
                      <div class="star-rating-wrap">
                        <div class="rh_woo_star" title="Rated 1 out of 5">
                          <span class="rhwoostar rhwoostar1 active">&#9733;</span><span class="rhwoostar rhwoostar2">&#9733;</span><span class="rhwoostar rhwoostar3">&#9733;</span><span class="rhwoostar rhwoostar4">&#9733;</span><span class="rhwoostar rhwoostar5">&#9733;</span>
                        </div>
                      </div>
                      <div class="rating-percentage-bar-wrap">
                        <div class="rating-percentage-bar">
                          <span style="width: 0%" class="rating-percentage"></span>
                        </div>
                      </div>
                      <div class="rating-count zero">0</div>
                    </div>
                  </div>
                </div>
                <div class="woo-rev-part pl30 ml10 pr30 pt25 pb25 mobilecenterdisplay">
                  <span class="wpsm-button medium rehub_main_btn rehub-main-smooth rehub_scroll" data-scrollto="#woo_comm_form">Write a review</span>
                </div>
              </div>
              <div class="mb20 mt20 rh-line"></div>
  
              <div id="comments"></div>
  
              <div id="woo_comm_form">
                <div id="review_form_wrapper">
                  <div id="review_form">
                    <div id="respond" class="comment-respond">
                      <h3 id="reply-title" class="comment-reply-title">
                        Give your review for &ldquo;${itemname}&rdquo; <small><a rel="nofollow" id="cancel-comment-reply-link" href="./index.html#respond" style="display: none">Cancel reply</a></small>
                      </h3>
                      <form action="./wp-comments-post.php" method="post" id="commentform" class="comment-form">
                        <p class="comment-notes">
                          <span id="email-notes">Your email address will not be published.</span> <span class="required-field-message" aria-hidden="true">Required fields are marked <span class="required" aria-hidden="true">*</span></span>
                        </p>
                        <p class="comment-form-rating">
                          <label for="rating">Your Rating</label
                          ><select name="rating" id="rating" required>
                            <option value="">Rate&hellip;</option>
                            <option value="5">Perfect</option>
                            <option value="4">Good</option>
                            <option value="3">Average</option>
                            <option value="2">Not that bad</option>
                            <option value="1">Very Poor</option>
                          </select>
                        </p>
                        <p class="comment-form-comment">
                          <label for="comment">Your Review <span class="required">*</span></label
                          ><textarea id="comment" name="comment" cols="45" rows="8" required></textarea>
                        </p>
                        <div class="woo_pros_cons_form flowhidden">
                          <div class="comment-form-comment wpsm-one-half"><textarea id="pos_comment" name="pos_comment" rows="6" placeholder="PROS:"></textarea></div>
                          <div class="comment-form-comment wpsm-one-half"><textarea id="neg_comment" name="neg_comment" rows="6" placeholder="CONS:"></textarea></div>
                        </div>
                        <p class="comment-form-author">
                          <label for="author">Name <span class="required">*</span></label> <input id="author" name="author" type="text" value="" size="30" required />
                        </p>
                        <p class="comment-form-email">
                          <label for="email">Email <span class="required">*</span></label> <input id="email" name="email" type="email" value="" size="30" required />
                        </p>
                        <p class="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" /> <label for="wp-comment-cookies-consent">Semua review akan kami moderasi sebelum ditampilkan. Moderasi kami maksud untuk memfilter kata kata yg tidak pantas.</label></p>
                        <p class="form-submit">
                          <input name="submit" type="submit" id="submit" class="submit" value="Submit" /> <input type="hidden" name="comment_post_ID" value="1498" id="comment_post_ID" />
                          <input type="hidden" name="comment_parent" id="comment_parent" value="0" />
                        </p>
                      </form>
                    </div>
                    <!-- #respond -->
                  </div>
                </div>
              </div>
  
              <div class="clear"></div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="flowhidden rh-float-panel darkbg woo_white_text_layout" id="float-panel-woo-area">
        <div class="rh-container rh-flex-center-align pt10 pb10">
          <div class="float-panel-woo-image">
            <img class="nolazyftheme" src="${imglink}" width="50" height="50" alt="Apple iPod Touch" />
          </div>
          <div class="float-panel-woo-info pl20">
            <div class="float-panel-woo-title rehub-main-font mb5 font110 whitecolor">Apple iPod Touch</div>
            <ul class="float-panel-woo-links list-unstyled list-line-style font80 fontbold lineheight15">
              <li class="description_tab" id="tab-title-description">
                <a href="#section-description">Description</a>
              </li>
              <li class="reviews_tab" id="tab-title-reviews">
                <a href="#section-reviews">Reviews (0)</a>
              </li>
            </ul>
          </div>
          <div class="float-panel-woo-btn rh-flex-columns rh-flex-right-align rh-flex-nowrap desktabldisplaynone">
            <div class="float-panel-woo-price rh-flex-center-align font120 rh-flex-right-align whitecolor fontbold">
              <p class="price">
                <span class="woocommerce-Price-amount amount"
                  ><bdi><span class="woocommerce-Price-currencySymbol">Rp</span>199</bdi></span
                >
              </p>
            </div>
            <div class="float-panel-woo-button rh-flex-center-align rh-flex-right-align">
              <a href="" data-product_id="" data-product_sku="" class="">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div class="other-woo-area clearfix">
      <div class="related-woo-section pt30 pb20">
        <div class="rh-container">
          <div class="rh-360-content-area tabletsblockdisplay">
            <!-- Related -->
  
            <!-- /Related -->
  
            <!-- Upsell -->
            <!-- /Upsell -->
          </div>
        </div>
      </div>
    </div>
  </div>
      `;
  }
  console.log(product);
}

// Original script theme

$(document).on("click", ".quantity .plus", function () {
  var $qty = $(this).parents(".quantity").find(".qty");
  var sku = $qty.attr("id");
  let pic = JSON.parse(localStorage.getItem("pic")) || [];
  let skuSelected = pic.find((item) => "qty" + item.sku === sku);
  var currentVal = parseInt($qty.val());
  if (!isNaN(currentVal)) {
    $qty.val(currentVal + 1);
    skuSelected.incart += 1;
  }
  localStorage.setItem("pic", JSON.stringify(pic));
  displayCart();
  displayCost();
  displayMiniCart();
  displayTotalCart();
  displayTableIn();
  displayItemCount();
});

$(document).on("click", ".quantity .minus", function () {
  var $qty = $(this).parents(".quantity").find(".qty");
  var sku = $qty.attr("id");
  let pic = JSON.parse(localStorage.getItem("pic")) || [];
  let skuSelected = pic.find((item) => "qty" + item.sku === sku);
  var currentVal = parseInt($qty.val());
  if (!isNaN(currentVal) && currentVal > 1) {
    $qty.val(currentVal - 1);
    skuSelected.incart -= 1;
  }
  localStorage.setItem("pic", JSON.stringify(pic));
  displayCart();
  displayCost();
  displayMiniCart();
  displayTotalCart();
  displayTableIn();
  displayItemCount();
});

if ($(".category-page").length !== 0) {
  displayMiniCart();
  displayItemCount();
  displayMiniWishList();
  displayWishCount();
  $("#table").bootstrapTable("filterBy", {
    category: "Material Video",
  });
}

if ($(".cart-page").length !== 0) {
  displayCart();
  displayTableIn();
  displayTotalCart();
  displayMiniCart();
  displayCost();
  displayItemCount();
  displayWishCount();
  displayMiniWishList();
}

if ($(".check-out-page").length !== 0) {
  let pic = JSON.parse(localStorage.getItem("pic")) || [];
  if (pic.length !== 0) {
    document.querySelector("ul.breadcrumb").innerHTML = `
        <li class="text-transform-none me-2">
            <a href="/p/cart.html" class="text-decoration-none text-color-grey-lighten text-color-hover-primary">Shopping Cart</a>
        </li>
        <li class="text-transform-none text-color-grey-lighten me-2">
            <a style='cursor:pointer;' class="text-decoration-none text-color-primary">Checkout</a>
        </li>
        <li class="text-transform-none text-color-grey-lighten">
            <a style='cursor:pointer;' class="text-decoration-none text-color-grey-lighten">Order Complete</a>
        </li>
            `;
    displayOrder();
    setSubTotals();
    payment();
  } else {
    $("#breadcrumb-check-out").html("");
  }
  formValidator();
  buyerButton();
  displayMiniCart();
  displayItemCount();
  displayWishCount();
  displayMiniWishList();
  displayCost();
}

if ($(".shop-page").length !== 0) {
  displayMiniCart();
  displayCost();
  displayItemCount();
  displayWishCount();
  displayMiniWishList();
}

if ($(".product-page").length !== 0) {
  displayMiniCart();
  displayCost();
  displayItemCount();
  displayWishCount();
  displayMiniWishList();
}
if ($(".order-complete-page").length !== 0) {
  let historyOder = JSON.parse(localStorage.getItem("historyOrder")) || [];
  if (historyOder.length !== 0) {
    localStorage.removeItem("pic");
    bodyOrderComplete();
  }
  displayMiniCart();
  displayCost();
  displayItemCount();
  displayWishCount();
  displayMiniWishList();
}

if ($(".history-order-page").length !== 0) {
  var historyOrder = JSON.parse(localStorage.getItem("historyOrder")) || [];
  $("#history-order").bootstrapTable({
    data: historyOrder,
    showColumns: true,
    columns: [
      { title: "Tgl Order", field: "orderDate" },
      { title: "No Order", field: "orderNumber" },
      { title: "Nama Buyer", field: "buyerName" },
      { title: "SKU", field: "sku" },
      { title: "Nama Item", field: "itemname" },
      { title: "Jumlah", field: "incart", align: "center" },
      { title: "Harga", field: "price", align: "right", formatter: "priceFormatter" },
      { title: "Total", field: "total", formatter: "totalFormatter", align: "right" },
    ],
  });
  console.log(historyOrder);
}

function totalFormatter(value, row, index) {
  return "Rp " + (row.incart * row.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function priceFormatter(value, row, index) {
  return "Rp " + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
