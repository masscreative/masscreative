window.operateEvents = {};

$("#table").bootstrapTable({
  data: products,
  pagination: true,
  paginationPart: "page-list",
  pageSize: "15",
  showCustomView: true,
  customView: "rehubViewFormatter",
  showCustomViewButton: true,
  showButtonText: true,
  showRefresh: true,
  showButtonIcons: true,
  sortName: "uploaddate",
  sortable: true,
  sortOrder: "desc",
  clickToSelect: true,
  detailView: true,
  detailFormatter: "detailViewFormatter",
  toolbar: "#toolbar",
  filterControl: true,
  togle: "table",
  filterControlContainer: "#filter",
  search: true,
  searchAlign: "left",
  columns: [
    {
      field: "category",
      title: "Kategori",
      sortable: true,
      formatter: "categoryLinkFormatter",
      filterControl: "select",
    },
    {
      field: "subcategory",
      title: "Sub Kategori",
      sortable: true,
      formatter: "categoryLinkFormatter",
    },
    {
      field: "developer",
      formatter: "developerFormatter",
      sortable: true,
      title: "PENGEMBANG",
    },
    {
      field: "itemname",
      formatter: "postLinkFormatter",
      sortable: true,
      title: "ITEM",
    },
    {
      field: "sku",
      customSort: "customSort",
      sortable: true,
      title: "SKU",
      align: "right",
    },
    {
      field: "filesize",
      align: "right",
      sortable: true,
      sorter: "sizeSortFormatter",
      title: "UKURAN FILE",
    },
    { field: "uploaddate", sortable: true, sorter: "dateSortFormatter", align: "right", title: "TGL UPLOAD" },
    { field: "harga", sortable: true, formatter: "priceSortFormatter", title: "HARGA" },
    { field: "operate", title: "Item Operate", events: "window.operateEvents", formatter: "wishCartFormatter", clickToSelect: true, title: "Shop" },
  ],
});

function categoryLinkFormatter(value, item, index) {
  return "<a style='text-decoration:none;' href='/p/" + item.category.replace(/\s+/g, "-").toLowerCase() + ".html'>" + value + "</a>";
}

function developerFormatter(value, item, index) {
  if (value != "noData") {
    return "<a href='/p/" + item.developer.replace(/\s+/g, "-").toLowerCase() + ".html'>" + value + "</a>";
  } else {
    return "";
  }
}

function postLinkFormatter(value, item, index) {
  return "<a style='text-decoration:none;' href='" + item.postlink.replace(/\s+/g, "-").toLowerCase() + "'>" + value + "</a>";
}

function numericOnly(sortName, sortOrder, data) {
  var order = sortOrder === "desc" ? -1 : 1;
  data.sort(function (a, b) {
    var aa = +(a[sortName] + "").replace(/[^\d]/g, "");
    var bb = +(b[sortName] + "").replace(/[^\d]/g, "");
    if (aa < bb) {
      return order * -1;
    }
    if (aa > bb) {
      return order;
    }
    return 0;
  });
}

function priceSortFormatter(value) {
  return '<div style="text-align: left; float:left">Rp.</div><div style="text-align: right; float:right">' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "</div>";
}

function sizeSortFormatter(a, b) {
  var a_number = retnum(a);
  var b_number = retnum(b);

  a = a_number;
  b = b_number;
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}

function retnum(number) {
  var num = number.replace(/[^0-9]/g, "");
  var filesizename = number.replace(/[^a-zA-Z]+/g, "").toUpperCase();

  num = parseInt(num, 10);

  switch (filesizename) {
    case "KB":
      num = num * 1024;
      break;
    case "MB":
      num = num * Math.pow(1024, 2);
      break;
    case "GB":
      num = num * Math.pow(1024, 3);
      break;
    case "TB":
      num = num * Math.pow(1024, 4);
      break;
  }

  return num;
}

function dateSortFormatter(a, b) {
  if (new Date(a) > new Date(b)) return 1;
  if (new Date(a) < new Date(b)) return -1;
  return 0;
}

function customSort(sortName, sortOrder, data) {
  var order = sortOrder === "desc" ? -1 : 1;
  data.sort(function (a, b) {
    var aa = +(a[sortName] + "").replace(/[^\d]/g, "");
    var bb = +(b[sortName] + "").replace(/[^\d]/g, "");
    if (aa < bb) {
      return order * -1;
    }
    if (aa > bb) {
      return order;
    }
    return 0;
  });
}

function wishCartFormatter(value, row, index) {
  let wil = JSON.parse(localStorage.getItem("wl")) || [];
  let findSku = wil.find((w) => w.sku === row.sku);
  if (findSku === undefined) {
    var ready = "notready";
  } else {
    var ready = "alreadywish";
  }
  let sku = row.sku;

  return `
      <div id="table${row.sku}">
      <div class="button_action" style="float:left; position:relative; top:-3px; left:5px; background:none; border-radius:0; padding:0;">
        <div class="heart_thumb_wrap text-center">
          <span class="flowhidden cell_wishlist">
            <span class="heartplus ${ready}" onclick="addToWishList(${sku})">
              <span class="ml5 rtlmr5 wishaddedwrap">Added to wishlist</span>
              <span class="ml5 rtlmr5 wishremovedwrap">Removed from wishlist</span>
            </span>
          </span> 
        </div>
      </div> 
      <a class="addtocart-btn add_to_cart_button" onclick="addToCart(${sku})" style="float:right;cursor:pointer" title="Tambahkan ke Keranjang">
        <img src="https://rawcdn.githack.com/masscreativeid/theme/13d7405f575cdfae698839a1759126a03aa728fa/assets/mass-bag.svg" style="width:16px"/>
      </a>
      </div>
      `;
}

function detailViewFormatter(index, row) {
  let imageLink = row.imglink.replace(
    "noData",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk84bP7K0t2HAmzdK2rIbYRFh24u9YGFOyMnH8571ApYlgpV15iz8z4HbIdzqqP3y5XqVYP2151c6soQysyBlPAvrr9LYJlOxGZSr9DHDw_gDCEOYcmCPD0dmAyRN7U89z5SD-66zM7sXWk0XzScgrXEMYbIkqigp1qYtibRj2OpwDvzzIOrYADTz_fQ/s1600/no-image.png"
  );
  return `
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col card" style="flex-direction: row; width: 94%; left:40px;">
            <div class=" h-100">
              <img src="${imageLink}" class="card-img-top" alt="${row.itemname}" style="width: 240px;"/>
            </div>
            <div class="card-body px-2 py-2 p-0">
              <h5 class="card-title">${row.itemname}</h5>
              <p class="card-text"> Versi & Update : <strong>${row.version}</strong></p>
              <div class="border-top"><small>masscreativeid | 2022</small></div>
            </div>
          </div>
        </div>
        `;
}
function customViewFormatter(products) {
  var view = "";

  $.each(products, function (i, item) {
    let wil = JSON.parse(localStorage.getItem("wl")) || [];
    let findSku = wil.find((w) => w.sku === item.sku);
    let skuId = "#sku" + item.sku;
    if (findSku === undefined) {
      var ready = "notready";
    } else {
      var ready = "alreadywish";
    }
    let imageLink = item.imglink.replace(
      "noData",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk84bP7K0t2HAmzdK2rIbYRFh24u9YGFOyMnH8571ApYlgpV15iz8z4HbIdzqqP3y5XqVYP2151c6soQysyBlPAvrr9LYJlOxGZSr9DHDw_gDCEOYcmCPD0dmAyRN7U89z5SD-66zM7sXWk0XzScgrXEMYbIkqigp1qYtibRj2OpwDvzzIOrYADTz_fQ/s1600/no-image.png"
    );
    let sku = item.sku;
    let incart = item.incart;
    view += `
          <div class="col-sm-6 col-lg-2 woocommerce">
              <div class="products grid_woo" id="sku${sku}">
                <div class="product col_item woo_grid_compact two_column_mobile type-product">
                  <div class="button_action rh-shadow-sceu pt5 pb5">
                    <div class="heart_thumb_wrap text-center">
                      <span class="flowhidden cell_wishlist">
                        <span id=heartplus${sku} class="heartplus ${ready}" onclick="addToWishList(${sku})">                          
                          <span class="ml5 rtlmr5 wishaddedwrap"> Added to wishlist </span>  
                          <span class="ml5 rtlmr5 wishremovedwrap"> Removed from wishlist </span>                        
                        </span>
                      </span>
                    </div>
                    <div>
                      <div class="quick_view_wrap pt10 pl5 pr5 pb10">
                        <span class="flowhidden cell_quick_view">
                          <span class="cursorpointer quick_view_button">
                            <i class="rhicon rhi-search-plus"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <figure class="mb15 mt25 position-relative">
                    <a class="img-centered-flex rh-flex-justify-center rh-flex-center-align" href="${item.postlink}">
                      <img src="${imageLink}" data-src="${imageLink}" alt="${item.itemname}" data-skip-lazy="" class="lazyload" width="300" height="300" />
                    </a>
      
                    <div class="gridcountdown"></div>
                  </figure>
                  <div class="cat_for_grid lineheight15">
                    <a href='/p/${item.category.replace(/\s+/g, "-").toLowerCase() + ".html"}' class="woocat">${item.subcategory}</a>
                  </div>
      
                  <h3 class="hoticonfireclass text-clamp text-clamp-2">
                    <a href="${item.postlink}">${item.itemname}</a>
                  </h3>
                  <p class="cat_for_grid lineheight15" style="font-size: 10px;">
                    ${item.version}
                  </p>
      
                  <div class="border-top pt10 pr10 pl10 pb10 rh-flex-center-align abposbot">
                    <div class="price_for_grid redbrightcolor floatleft rehub-btn-font mr10">
                      <span class="price"
                        ><span class="woocommerce-Price-amount amount"
                          ><bdi><span class="woocommerce-Price-currencySymbol">Rp </span>${item.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</bdi></span
                        ></span
                      >
                    </div>
                    <div class="rh-flex-right-align btn_for_grid floatright">
                      <a onclick="addToCart(${sku})" class="addtocart-btn add_to_cart_button re_track_btn woo_loop_btn rh-flex-center-align rh-flex-justify-center rh-shadow-sceu add_to_cart_button ajax_add_to_cart product_type_simple" style="cursor:pointer;"
                        ><svg height="24px" version="1.1" viewbox="0 0 64 64" width="24px" xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path d="M56.262,17.837H26.748c-0.961,0-1.508,0.743-1.223,1.661l4.669,13.677c0.23,0.738,1.044,1.336,1.817,1.336h19.35   c0.773,0,1.586-0.598,1.815-1.336l4.069-14C57.476,18.437,57.036,17.837,56.262,17.837z"></path>
                            <circle cx="29.417" cy="50.267" r="4.415"></circle>
                            <circle cx="48.099" cy="50.323" r="4.415"></circle>
                            <path d="M53.4,39.004H27.579L17.242,9.261H9.193c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5h4.493l10.337,29.743H53.4   c1.381,0,2.5-1.119,2.5-2.5S54.781,39.004,53.4,39.004z"></path>
                          </g>
                        </svg>
                        Add to cart</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
    $(skuId).load(window.location.href + skuId);
  });

  return `<div class="row">${view}</div>`;
}

function rehubViewFormatter(products) {
  var view = "";

  $.each(products, function (i, item) {
    let wil = JSON.parse(localStorage.getItem("wl")) || [];
    let findSku = wil.find((w) => w.sku === item.sku);
    let skuId = "#sku" + item.sku;
    if (findSku === undefined) {
      var ready = "notready";
    } else {
      var ready = "alreadywish";
    }
    let imageLink = item.imglink.replace(
      "noData",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk84bP7K0t2HAmzdK2rIbYRFh24u9YGFOyMnH8571ApYlgpV15iz8z4HbIdzqqP3y5XqVYP2151c6soQysyBlPAvrr9LYJlOxGZSr9DHDw_gDCEOYcmCPD0dmAyRN7U89z5SD-66zM7sXWk0XzScgrXEMYbIkqigp1qYtibRj2OpwDvzzIOrYADTz_fQ/s1600/no-image.png"
    );
    let sku = item.sku;
    let incart = item.incart;
    view += `
        <div class="col-sm-6 col-lg-2 woocommerce">
          <div class="products grid_woo" id="sku${sku}">
            <div class="product col_item woo_grid_compact two_column_mobile type-product">
              <div class="button_action rh-shadow-sceu pt5 pb5">
                <div>
                  <div class="heart_thumb_wrap text-center">
                    <span class="flowhidden cell_wishlist">
                      <span id="heartplus${sku}" class="heartplus ${ready}" data-post_id="${sku}" data-informer="5" data-wishlink="" onclick="addToWishList(${sku})">
                        <span class="ml5 rtlmr5 wishaddedwrap" id="wishadded${sku}">Added to wishlist</span>
                        <span class="ml5 rtlmr5 wishremovedwrap" id="wishremoved${sku}">Removed from wishlist</span>
                      </span>
                    </span>
                    <span id="wishcount${sku}" class="thumbscount">5</span>
                  </div>
                </div>
              </div>
            
              <span class="re-ribbon-badge badge_1"><span>Editor choice</span></span>
            
              <figure class="mb15 mt25 position-relative">
                <a class="img-centered-flex rh-flex-justify-center rh-flex-center-align" href="${item.postlink}">
                  <img src="${imageLink}" alt="${item.itemname}" data-skip-lazy="" class="lazyloaded" width="300" height="300" />
                </a>
                <div class="gridcountdown"></div>
              </figure>
            
              <div class="cat_for_grid lineheight15">
                <a href='/p/${item.category.replace(/\s+/g, "-").toLowerCase() + ".html"}' class="woocat">${item.subcategory}</a>
              </div>
            
              <h3 class="text-clamp text-clamp-2">
                <a href="${item.postlink}">${item.itemname}</a>
              </h3>
            
              <div class="rh_woo_star" title="Rated 9 out of 10">
                <span class="rhwoostar rhwoostar1 active">★</span>
                <span class="rhwoostar rhwoostar2 active">★</span>
                <span class="rhwoostar rhwoostar3 active">★</span>
                <span class="rhwoostar rhwoostar4 active">★</span>
                <span class="rhwoostar rhwoostar5 halfactive">★</span>
              </div>
            
              <div class="border-top pt10 pr10 pl10 pb10 rh-flex-center-align abposbot">
                <div class="price_for_grid redbrightcolor floatleft rehub-btn-font mr10">
                  <span class="price">
                    <del aria-hidden="true">
                      <span class="woocommerce-Price-amount amount">
                        <bdi>
                          <span class="woocommerce-Price-currencySymbol">Rp </span> ${item.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                          </bdi>
                      </span>
                    </del>
                    <ins>
                      <span class="woocommerce-Price-amount amount">
                        <bdi><span class="woocommerce-Price-currencySymbol">Rp</span>${item.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</bdi>
                      </span>
                    </ins>
                  </span>
                </div>
            
                <div class="rh-flex-right-align btn_for_grid floatright">
                  <a onclick="addToCart(${sku})" data-product_id="3336" data-product_sku="1465713436" class="re_track_btn woo_loop_btn rh-flex-center-align rh-flex-justify-center rh-shadow-sceu add_to_cart_button ajax_add_to_cart product_type_simple"
                    ><svg height="24px" version="1.1" viewBox="0 0 64 64" width="24px" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M56.262,17.837H26.748c-0.961,0-1.508,0.743-1.223,1.661l4.669,13.677c0.23,0.738,1.044,1.336,1.817,1.336h19.35   c0.773,0,1.586-0.598,1.815-1.336l4.069-14C57.476,18.437,57.036,17.837,56.262,17.837z"></path>
                        <circle cx="29.417" cy="50.267" r="4.415"></circle>
                        <circle cx="48.099" cy="50.323" r="4.415"></circle>
                        <path d="M53.4,39.004H27.579L17.242,9.261H9.193c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5h4.493l10.337,29.743H53.4   c1.381,0,2.5-1.119,2.5-2.5S54.781,39.004,53.4,39.004z"></path>
                      </g>
                    </svg>
                    Add to cart</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
          `;
    $(skuId).load(window.location.href + skuId);
  });

  return `<div class="row">${view}</div>`;
}
