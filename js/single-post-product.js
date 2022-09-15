$.map(newDataProduct, function (t, v) {
  return (
    (sku = t.productSku),
    (title = t.productTitle),
    (version = t.productVersion),
    (upDate = t.productUpDate),
    (price = t.productPrice),
    (sale = t.priceSale),
    (developer = t.productDeveloper),
    (developerLogo = t.developerLogo),
    (futureImage = t.imageFuture),
    (imagesGallery = t.imageGallery),
    (video = t.productVideo),
    (category = t.category),
    (subCategory = t.subCategory),
    (subSubCategory = t.subSubCategory),
    (starRating = t.fakeStarRating),
    (view = t.fakeView),
    (review = t.fakeReview),
    (reviewerName = t.fakeTopReviewerName),
    (reviewerMessage = t.fakeReviewMessage),
    (reviewerimage = t.fakeImageReviewer),
    (summaryHeading = t.summaryHeading),
    (summaryContent = t.summaryContent),
    (scoreCriteria = t.scoreCriteria),
    (summaryPro = t.summaryPro),
    (summaryCons = t.summaryCons),
    (commentUser = t.commentUser),
    (commentUserPhoto = t.commentUserPhoto),
    (commentDate = t.commentDate),
    (commentMessage = t.commentMessage),
    (showRibbon = t.showRibbon),
    (ribbonText = t.ribbonText),
    (wishCount = t.fakeWishList)
  );
});
let findSku = products.find((i) => i.sku === sku);
let dataFutureImage = findSku.imglink;
let discount = "";
let priceAmount = "";
price = parseInt(price) || parseInt(findSku.harga);
if (parseInt(sale) < 99) {
  discount = parseInt(sale);
  priceAmount = price - ((price * discount) / 100).toFixed(0);
} else {
  priceAmount = parseInt(sale);
  discount = (100 - (priceAmount * 100) / price).toFixed(0);
}
let productShortDescription = $(".product-short-description").html();
let descSection1 = $(".description-section1").html();
let descSection2 = $(".description-section2").html();
let descSection3 = $(".description-section3").html();
let additionalInformation = $(".addtional-description").html();
let sellerNotice = $(".seler-notif-information").html();
let linkPostProduct = "";

let avgScore = 0;
let totalScore = Object.values(scoreCriteria)
  .map((x) => x.score)
  .reduce((x, y) => x + y, 0);
avgScore = (totalScore / scoreCriteria.length).toFixed(1);

let scoreCalled = "";

if (avgScore <= 4.5) {
  scoreCalled = "Jelek...";
} else if (avgScore > 4.5 && avgScore <= 5.8) {
  scoreCalled = "B aja...";
} else if (avgScore > 5.8 && avgScore <= 7.0) {
  scoreCalled = "Boleh lah...";
} else if (avgScore > 7.0 && avgScore <= 8.6) {
  scoreCalled = "Bagus banget...";
} else if (avgScore > 8.6) {
  scoreCalled = "Mantap kalee...";
}

let rateBar = "";
$.each(scoreCriteria, function (index, value) {
  return (rateBar += `<div class="rate-bar clearfix" data-percent="${value.score * 10}%">
  <div class="rate-bar-title"><span>${value.title}</span></div>
  <div class="rate-bar-bar r_score_${value.score.toFixed(0)}"></div>
  <div class="rate-bar-percent">${value.score}</div>
</div>`);
});

let pros = "";
$.each(summaryPro, function (index, value) {
  return (pros += "<li>" + value + "</li>");
});
let cons = "";
$.each(summaryCons, function (index, value) {
  return (cons += "<li>" + value + "</li>");
});

starRatingHtml = "";
$.each(starRating, function (index, value) {
  let { fiveStar, fourStar, threeStar, twoStar, oneStar } = value;
  let totalStar = fiveStar + fourStar + threeStar + twoStar + oneStar;
  let fiveStarScale = fiveStar * 5;
  let fourStarScale = fourStar * 4;
  let threeStarScale = threeStar * 3;
  let twoStarScale = twoStar * 2;
  let oneStarScale = oneStar * 1;
  let totalStarScale = fiveStarScale + fourStarScale + threeStarScale + twoStarScale + oneStarScale;
  starScale = totalStarScale / totalStar;
  percentFiveStar = ((fiveStar / totalStar) * 100).toFixed(0);
  percentFourStar = ((fourStar / totalStar) * 100).toFixed(0);
  percentThreeStar = ((threeStar / totalStar) * 100).toFixed(0);
  percentTwoStar = ((twoStar / totalStar) * 100).toFixed(0);
  percentOneStar = ((oneStar / totalStar) * 100).toFixed(0);

  return (starRatingHtml = `
          <div class="woo-rev-part pr30 pl30 text-center">
					  <div class="woo-avg-rating">
						  <span class="orangecolor font200 fontbold">${starScale.toFixed(1)}</span>
						  <span class="greycolor font90">out of 5</span>
					    <div class="clearfix"></div>
					  </div>
				  </div>
				  <div class="woo-rev-part pl20 pr20 rh-line-left rh-line-right rh-flex-grow1">
					  <div class="woo-rating-bars">
						  <div class="rating-bar">
							  <div class="star-rating-wrap">
								  <div class="rh_woo_star" title="Rated 5 out of 5">
									  <span class="rhwoostar rhwoostar1 active">&#9733;</span>
									  <span class="rhwoostar rhwoostar2 active">&#9733;</span>
									  <span class="rhwoostar rhwoostar3 active">&#9733;</span>
									  <span class="rhwoostar rhwoostar4 active">&#9733;</span>
									  <span class="rhwoostar rhwoostar5 active">&#9733;</span>
								  </div>
						    </div>
							  <div class="rating-percentage-bar-wrap">
						      <div class="rating-percentage-bar">
								    <span style="width: ${percentFiveStar}%" class="rating-percentage"></span>
												</div>
											  </div>
											  <div class="rating-count zero">${fiveStar}</div>
											</div>
											<div class="rating-bar">
											  <div class="star-rating-wrap">
												<div class="rh_woo_star" title="Rated 4 out of 5">
												  <span class="rhwoostar rhwoostar1 active">&#9733;</span>
												  <span class="rhwoostar rhwoostar2 active">&#9733;</span>
												  <span class="rhwoostar rhwoostar3 active">&#9733;</span>
												  <span class="rhwoostar rhwoostar4 active">&#9733;</span>
												  <span class="rhwoostar rhwoostar5">&#9733;</span>
												</div>
											  </div>
											  <div class="rating-percentage-bar-wrap">
												<div class="rating-percentage-bar">
												  <span style="width: ${percentFourStar}%" class="rating-percentage"></span>
												</div>
											  </div>
											  <div class="rating-count zero">${fourStar}</div>
											</div>
											<div class="rating-bar">
											  <div class="star-rating-wrap">
												<div class="rh_woo_star" title="Rated 3 out of 5">
												  <span class="rhwoostar rhwoostar1 active">&#9733;</span>
												  <span class="rhwoostar rhwoostar2 active">&#9733;</span>
												  <span class="rhwoostar rhwoostar3 active">&#9733;</span>
												  <span class="rhwoostar rhwoostar4">&#9733;</span>
												  <span class="rhwoostar rhwoostar5">&#9733;</span>
												</div>
											  </div>
											  <div class="rating-percentage-bar-wrap">
												<div class="rating-percentage-bar">
												  <span style="width: ${percentThreeStar}%" class="rating-percentage"></span>
												</div>
											  </div>
											  <div class="rating-count zero">${threeStar}</div>
											</div>
											<div class="rating-bar">
											  <div class="star-rating-wrap">
												<div class="rh_woo_star" title="Rated 2 out of 5">
												  <span class="rhwoostar rhwoostar1 active">&#9733;</span>
												  <span class="rhwoostar rhwoostar2 active">&#9733;</span>
												  <span class="rhwoostar rhwoostar3">&#9733;</span>
												  <span class="rhwoostar rhwoostar4">&#9733;</span>
												  <span class="rhwoostar rhwoostar5">&#9733;</span>
												</div>
											  </div>
											  <div class="rating-percentage-bar-wrap">
												<div class="rating-percentage-bar">
												  <span style="width: ${percentTwoStar}%" class="rating-percentage"></span>
												</div>
											  </div>
											  <div class="rating-count zero">${twoStar}</div>
											</div>
											<div class="rating-bar">
											  <div class="star-rating-wrap">
												<div class="rh_woo_star" title="Rated 1 out of 5">
												  <span class="rhwoostar rhwoostar1 active">&#9733;</span>
												  <span class="rhwoostar rhwoostar2">&#9733;</span>
												  <span class="rhwoostar rhwoostar3">&#9733;</span>
												  <span class="rhwoostar rhwoostar4">&#9733;</span>
												  <span class="rhwoostar rhwoostar5">&#9733;</span>
												</div>
											  </div>
											  <div class="rating-percentage-bar-wrap">
												<div class="rating-percentage-bar">
												  <span style="width: ${percentOneStar}%" class="rating-percentage"></span>
												</div>
											  </div>
											  <div class="rating-count zero">${oneStar}</div>
											</div>
										  </div>
										</div>`);
});

FWDEVPUtils.onReady(function () {
  FWDEVPlayer.videoStartBehaviour = "pause";

  new FWDEVPlayer({
    //main settings
    instanceName: "player1",
    parentId: "massCreativeVideoPlayer" + sku,
    mainFolderPath: "assets",
    initializeOnlyWhenVisible: "no",
    skinPath: "modern_skin_dark",
    displayType: "responsive",
    autoScale: "yes",
    fillEntireVideoScreen: "no",
    openDownloadLinkOnMobile: "no",
    useHEXColorsForSkin: "no",
    normalHEXButtonsColor: "#FF0000",
    selectedHEXButtonsColor: "#FFFFFF",
    privateVideoPassword: "428c841430ea18a70f7b06525d4b748a",
    startAtTime: "",
    stopAtTime: "",
    startAtVideoSource: 2,
    videoSource: [{ source: video || findSku.video, label: "hd1080" }],
    posterPath: futureImage || findSku.imglink,
    showErrorInfo: "yes",
    fillEntireScreenWithPoster: "yes",
    rightClickContextMenu: "developer",
    disableDoubleClickFullscreen: "no",
    useChromeless: "no",
    showPreloader: "yes",
    addKeyboardSupport: "yes",
    autoPlay: "no",
    loop: "no",
    scrubAtTimeAtFirstPlay: "00:00:00",
    maxWidth: 1920,
    maxHeight: 1080,
    volume: 0.8,
    greenScreenTolerance: 200,
    backgroundColor: "#000000",
    posterBackgroundColor: "#0099FF",
    //logo settings
    showLogo: "yes",
    hideLogoWithController: "yes",
    logoPosition: "topLeft",
    logoLink: "https://tokopedia.com/masscreativeid",
    logoMargins: 15,
    //controller settings
    showController: "yes",
    showControllerWhenVideoIsStopped: "yes",
    showVolumeScrubber: "yes",
    showVolumeButton: "yes",
    showTime: "yes",
    showQualityButton: "yes",
    showSubtitleButton: "yes",
    showShareButton: "yes",
    showEmbedButton: "yes",
    showDownloadButton: "yes",
    showFullScreenButton: "yes",
    repeatBackground: "yes",
    controllerHeight: 43,
    controllerHideDelay: 3,
    startSpaceBetweenButtons: 8,
    spaceBetweenButtons: 12,
    mainScrubberOffestTop: 15,
    scrubbersOffsetWidth: 4,
    timeOffsetLeftWidth: 1,
    timeOffsetRightWidth: -2,
    volumeScrubberWidth: 90,
    volumeScrubberOffsetRightWidth: 2,
    timeColor: "#777777",
    youtubeQualityButtonNormalColor: "#777777",
    youtubeQualityButtonSelectedColor: "#FFFFFF",
    //cuepoints
    executeCuepointsOnlyOnce: "no",
    //annotations
    annotiationsListId: "none",
    showAnnotationsPositionTool: "no",
    //subtitles
    showSubtitleButton: "yes",
    subtitlesOffLabel: "Subtitle off",
    startAtSubtitle: 1,
    subtitlesSource: [
      { subtitlePath: "content/english_subtitle.txt", subtileLabel: "English" },
      { subtitlePath: "content/romanian_subtitle.txt", subtileLabel: "Romanian" },
      { subtitlePath: "content/spanish_subtitle.txt", subtileLabel: "Spanish" },
    ],
    //audio visualizer
    audioVisualizerLinesColor: "#0099FF",
    audioVisualizerCircleColor: "#FFFFFF",
    //advertisement on pause window
    aopwTitle: "Advertisement",
    aopwSource: "",
    aopwWidth: 400,
    aopwHeight: 240,
    aopwBorderSize: 6,
    aopwTitleColor: "#FFFFFF",
    //playback rate / speed
    showPlaybackRateButton: "yes",
    defaultPlaybackRate: "1", //0.25, 0.5, 1, 1.25, 1.5, 2
    //embed window
    embedWindowCloseButtonMargins: 7,
    borderColor: "#333333",
    mainLabelsColor: "#FFFFFF",
    secondaryLabelsColor: "#a1a1a1",
    shareAndEmbedTextColor: "#5a5a5a",
    inputBackgroundColor: "#000000",
    inputColor: "#FFFFFF",
  });
});

let postProductHtml = `
    <div id="" class="product type-product">
      <div class="top-woo-area position-relative" id="rh_woo_layout_inimage">
        <div class="rh-container position-static flowhidden pt15 pb30">
          <div class="rh-360-content-area tabletsblockdisplay woo_white_text_layout whitecolor">
            <nav class="woocommerce-breadcrumb">
              <a href="/">Home</a>
              <span class="delimiter"><i class="rhicon rhi-angle-right"></i></span>
              <a href='${category.replace(/\s+/g, "-").toLowerCase() + ".html" || findSku.category.replace(/\s+/g, "-").toLowerCase() + ".html"}'>${category || findSku.category}</a>
              <span class="delimiter"><i class="rhicon rhi-angle-right"></i></span>
              <a href='${subCategory.replace(/\s+/g, "-").toLowerCase() + ".html" || findSku.subcategory.replace(/\s+/g, "-").toLowerCase() + ".html"}'>${subCategory || findSku.subcategory}</a>
              <span class="delimiter"><i class="rhicon rhi-angle-right"></i></span>
              <a href='${subSubCategory.replace(/\s+/g, "-").toLowerCase() + ".html" || findSku.subsubcategory.replace(/\s+/g, "-").toLowerCase() + ".html"}'>${subSubCategory || findSku.subsubcategory}</a>
              <span class="delimiter"><i class="rhicon rhi-angle-right"></i></span>${title || findSku.itemname}
            </nav>
            <div class="woocommerce-notices-wrapper"></div>
            <div class="woo-title-area mb10 flowhidden">
              <h1 class="product_title entry-title">${title || findSku.itemname}</h1>
            </div>
          </div>
          <div class="rh-360-sidebar tabletsblockdisplay summary whitebg rh-shadow3 rehub-sec-smooth calcposright float_p_trigger">
            <div class="woo-image-part position-relative modulo-lightbox">
              <span class="re-ribbon-badge left-badge badge_1">
                <span>${ribbonText}</span>
              </span>
              <div class="pt15 pl15 pr15 text-center">
                <div class="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-5 images gallery-thumbnails-enabled flowhidden" data-columns="5" style="opacity: 0; transition: opacity 0.25s ease-in-out">
                  <figure class="woocommerce-product-gallery__wrapper">
                    <div data-thumb="${futureImage || dataFutureImage}" data-thumb-alt="${title}" class="woocommerce-product-gallery__image product-future-image">
                      <a href="${futureImage || dataFutureImage}">
                        <img width="1200" height="900" src="${futureImage || dataFutureImage}" class="wp-post-image" alt="${title}" loading="lazy" title="${title}" data-caption="${title}" data-src="${futureImage || dataFutureImage}" data-large_image="${
  futureImage || dataFutureImage
}" data-large_image_width="1200" data-large_image_height="900" />
                      </a>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
            <div class="re_wooinner_cta_wrapper padd20">
              <div class="woo-price-area">
                <span class="onsale">
                 <span>- ${discount} %</span>
                </span>
                <p class="price">
                  <del aria-hidden="true">
                    <span class="woocommerce-Price-amount amount">
                      <bdi> <span class="woocommerce-Price-currencySymbol">  </span>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") || findSku.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</bdi>
                    </span>
                  </del>
                  <ins>
                    <span class="woocommerce-Price-amount amount">
                      <bdi> <span class="woocommerce-Price-currencySymbol">Rp  </span>${priceAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</bdi>
                    </span>
                  </ins>
                </p>
              </div>
              <div class="woo-button-actions-area mb15">
                <div class="heart_thumb_wrap text-center">
                  <span class="flowhidden cell_wishlist">
                    <span class="heartplus" data-post_id="${sku}" data-informer="4">
                      <span class="ml5 rtlmr5 wishaddwrap" id="wishadd${sku}">Add to wishlist</span>
                      <span class="ml5 rtlmr5 wishaddedwrap" id="wishadded${sku}">Added to wishlist</span>
                      <span class="ml5 rtlmr5 wishremovedwrap" id="wishremoved${sku}">Removed from wishlist</span>
                    </span>
                  </span>
                  <span id="wishcount${sku}" class="thumbscount">${wishCount}</span>
                </div>
              </div>
              <div class="woo-button-area mb30" id="woo-button-area">
                <form class="cart" action="" method="post" enctype="multipart/form-data">
                  <div class="quantity">
                    <label class="screen-reader-text" for="quantity_${sku}">${title || findSku.itemname}</label>
                    <input type="number" id="quantity_${sku}" class="input-text qty text" step="1" min="1" max="" name="quantity" value="1" title="Qty" size="4" placeholder="" inputmode="numeric" autocomplete="off" />
                  </div>
                  <a type="submit" name="add-to-cart" value="${sku}" class="single_add_to_cart_button button alt">Add to cart</a>
                </form>
              </div>
              <div class="clearfix"></div>

              <div class="rh-line mb10 mt10"></div>
              <table class="woocommerce-group-attributes-public">
                <tr class="attribute_row attribute_row_rhothergroup">
                  <td>
                    <table class="woocommerce-product-attributes shop_attributes">
                      <tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_color">
                        <th class="woocommerce-product-attributes-item__label">versi</th>
                        <td class="woocommerce-product-attributes-item__value">
                          <p class="versi">${version || findSku.version}</p>
                        </td>
                      </tr>
                      <tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_display">
                        <th class="woocommerce-product-attributes-item__label">update</th>
                        <td class="woocommerce-product-attributes-item__value tglupdate">
                          <p class="tglupdate">${upDate || findSku.uploaddate}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <div class="re_wooinner_info"></div>
              <div class="mb15 mt15 pt15 border-top font90 hideonfloattablet">
                <div class="product_meta developer-logo">
                  <div class="woostorewrap flowhidden mb10 rh-flex-center-align">
                    <div class="brand_logo_small">
                      <a href="/p/${(developer || findSku.developer).replace(/\s+/g, "-").toLowerCase()}.html">
                        <img class="lazyload" data-skip-lazy="" data-src="${developerLogo || findSku.devlogo}" height="30" alt="${developer || findSku.developer}" src="https://rawcdn.githack.com/masscreative/mcid-theme/c588f069d6ab8c7eb9e9b6d8845c901c56328a5e/assets/blank.gif"/></a>
                    </div>
                    <div class="store_tax">
                      <span class="tag_woo_meta">
                        <span class="tag_woo_meta_item">
                          <a href="/p/${(developer || findSku.developer).replace(/\s+/g, "-").toLowerCase()}.html" rel="tag">${developer || findSku.developer}</a>
                        </span>
                      </span>
                    </div>
                  </div>
                  <span class="posted_in">Category: <a href="/p/${(category || findSku.category).replace(/\s+/g, "-").toLowerCase()}.html" rel="tag">${subCategory || findSku.subcategory}</a></span>
                </div>
              </div>
            </div>
          </div>
          <div class="rh-360-content-area tabletsblockdisplay woo_white_text_layout whitecolor">
            <div class="mb20 font120 woo_single_excerpt fontbold">
              <div class="woocommerce-product-details__short-description">
                <div id="massCreativeVideoPlayer${sku}"></div>
                ${productShortDescription}
              </div>
            </div>

            <div class="rh-flex-center-align woo_top_meta mobileblockdisplay mb20">
              <div class="floatleft mr15 disablefloatmobile rtlml15">
                <span data-scrollto="#reviews" class="rehub_scroll cursorpointer font80">Kasih Review Yuk!</span>
              </div>

              <span class="floatleft meta post-meta mt0 mb0 disablefloatmobile">
                <span class="postview_meta mr10">${view}</span>
              </span>
            </div>
            <div class="top_share_small top_share notextshare">
              <div class="post_share">
                <div class="social_icon row_social_inpost">
                  <span data-href="https://www.facebook.com/sharer/sharer.php?u=${linkPostProduct}" class="fb share-link-image" data-service="facebook">
                    <i class="rhicon rhi-facebook"></i>
                  </span>
                  <span data-href="https://twitter.com/share?url=${linkPostProduct}" class="tw share-link-image" data-service="twitter">
                    <i class="rhicon rhi-twitter"></i>
                  </span>
                  <span data-href="https://pinterest.com/pin/create/button/?url=${linkPostProduct}&amp;media=${futureImage || findSku.imglink}&amp;description=${title || findSku.itemname}" class="pn share-link-image" data-service="pinterest">
                    <i class="rhicon rhi-pinterest-p"></i>
                  </span>
                  <span data-href="mailto:?subject=${title || findSku.itemname}80%B3&body=Check out: ${title || findSku.itemname}" class="in share-link-image" data-service="email">
                    <i class="rhicon rhi-envelope"></i>
                  </span>
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
              <a href="#section-description">Deskripsi</a>
            </li>
            <li class="below-border rh-hov-bor-line rh-big-tabs-li reviews_tab" id="tab-title-reviews">
              <a href="#section-reviews">Reviews (${review})</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="woo-content-area">
        <div class="content-woo-section pt30 pb10">
          <div class="rh-container">
            <div class="rh-360-content-area tabletsblockdisplay">
              ${descSection1}
            </div>
          </div>
        </div>
        <div class="content-woo-section pt30 pb20 content-woo-section--description" id="section-description">
          <div class="rh-container">
            <div class="rh-360-content-area tabletsblockdisplay">
              <div class="clearfix"></div>
              ${descSection2}
              <div class="wpsm-table wpsm-table-main-color">
                <table>
                  <tbody>
                    <tr>
                      <th></th>
                      <th>Informasi Item</th>
                    </tr>
                    <tr>
                      <td><strong>Kategori</strong></td>
                      <td> ${category} <i class="fa-solid fa-caret-right"></i> ${subCategory} <i class="fa-solid fa-caret-right"></i> ${subSubCategory} <i class="fa-solid fa-caret-right"></i></td>
                    </tr>
                    <tr>
                      <td><strong>SKU</strong></td>
                      <td>${sku}</td>
                    </tr>
                    <tr>
                      <td><strong>Pengembang</strong></td>
                      <td>${developer || findSku.developer}</td>
                    </tr>
                    <tr>
                      <td><strong>Versi</strong></td>
                      <td>${version}</td>
                    </tr>
                    <tr>
                      <td><strong>Ukuran File</strong></td>
                      <td>${findSku.filesize}</td>
                    </tr>
                    <tr>
                      <td><strong>Update</strong></td>
                      <td>${findSku.uploaddate}</td>
                    </tr>
                    <tr>
                      <td colspan="2"><em>* Ukuran file bisa berbeda, berdasarkan hasil kompres</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              ${descSection3}
              <h2>Feedbacks</h2>
              <div class="wpsm-testimonial">
                <div class="wpsm-testimonial-content">
                  ${reviewerMessage}
                </div>
                <div class="wpsm-testimonial-author">
                <img src="${reviewerimage}" alt="${reviewerName}" class="author_image">${reviewerName}
                </div>
              </div>
              <div class="wpsm_update mobfont90 seller-notice">
                <span class="label-info">Update - 2019.06.17</span>
                ${sellerNotice}
              </div>
              <div class="rate_bar_wrap">
                <div class="review-top">
                  <div class="overall-score">
                    <span class="overall r_score_${avgScore}">${avgScore}</span>
                    <span class="overall-text">${scoreCalled}</span>
                  </div>
                  <div class="review-text">
                    <div>
                      <div class="rehub-main-font font150 fontbold mb15">${summaryHeading}</div>
                      ${summaryContent}
                    </div>
                  </div>
                </div>
                <div class="rh-line mb10 mt10"></div>
                <div class="pt30 mt10">
                  ${rateBar}
                </div>
                <div class="mt20 flowhidden">
                  <div class="wpsm-one-half wpsm-column-first">
                    <div class="wpsm_pros">
                      <div class="title_pros">PROS</div>
                      <ul>
                        ${pros}
                      </ul>
                    </div>
                  </div>
                <div class="wpsm-one-half wpsm-column-last">
                  <div class="wpsm_cons">
                    <div class="title_cons">CONS</div>
                      <ul>
                        ${cons}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-woo-section pt30 pb20 content-woo-section--reviews" id="section-reviews">
          <div class="rh-container">
            <div class="rh-360-content-area tabletsblockdisplay">
              <div id="reviews" class="woocommerce-Reviews">
                <h2 class="rh-heading-icon woocommerce-Reviews-title mb15 fontnormal font120">User Reviews</h2>
                <div class="mb20 rh-line"></div>
                <div class="mobileblockdisplay rh-flex-center-align">
                  ${starRatingHtml}
                    <div class="woo-rev-part pl30 ml10 pr30 pt25 pb25 mobilecenterdisplay">
                    <span class="wpsm-button medium rehub_main_btn rehub-main-smooth rehub_scroll" data-scrollto="#woo_comm_form">Beri Review</span>
                    </div>
                </div>
                <div class="mb20 mt20 rh-line"></div>

                <div id="comments">
                    <div id="rehub-comments-tabs" class="rh_grey_tabs_span mb20 font90 lineheight20" data-postid="3336">
                    <span data-tabID="1" data-posttype="product" class="active">Semua</span>
                    <span data-tabID="2" data-posttype="product">Paling Membantu</span>
                    <span data-posttype="product" data-tabID="3">Rating Tertinggi</span>
                    <span data-posttype="product" data-tabID="4">Rating Terendah</span>
                    </div>
                    <div id="tab-1">
                    <ol class="commentlist">
                        <li class="comment byuser comment-author-masscreative bypostauthor even thread-even depth-1" id="li-comment-18">
                        <div id="comment-18" class="comment_container">
                            <div class="wc-comment-author vcard floatleft">
                            <img alt="" src="${commentUserPhoto}" srcset="${commentUserPhoto}" class="avatar avatar-80 photo" height="80" width="80" loading="lazy" />
                            <div class="text-center font80 lineheight20"></div>
                            </div>

                            <div class="comment-text">
                            <p class="meta">
                                <strong class="woocommerce-review__author">${commentUser} </strong>
                                <span class="woocommerce-review__dash">&ndash;</span> <time class="woocommerce-review__published-date" datetime="2022-09-14T12:04:07+00:00">${commentDate}</time>
                            </p>

                            <div class="description">
                                <p>
                                ${commentMessage}
                                </p>
                            </div>
                            <div class="user-review-vote lineheight20 pt10 mt10 border-top flowhidden" id="commhelp18">
                                <span class="font80 lineheight15 floatleft mr10 rtlml10 cursorpointer padforbuttonsmall csstransall us-rev-vote-up" data-post_id="18" data-informer="0">
                                <i class="floatleft mr5 rhi-thumbs-up rhicon rtlml5"></i>
                                <span class="comm_help_title floatleft mr5 rtlml5">Cocok dirasa?</span>( <span class="help_up_count" id="commhelpplus18">97</span>)
                                </span>
                                <span class="font80 lineheight15 floatleft mr10 rtlml10 cursorpointer padforbuttonsmall csstransall us-rev-vote-down" data-post_id="18" data-informer="0">
                                <i class="rhicon rhi-thumbs-down floatleft mr5 rtlml5"></i>
                                <span class="comm_help_title floatleft mr5 rtlml5"> hmmm... Gak begitu juga!</span>( <span class="help_up_count" id="commhelpminus18">652</span>)
                                </span>
                                <span class="already_commhelp clearbox mt5 font70 rhhidden">You have already voted this</span>
                            </div>
                            </div>
                        </div>
                        </li>
                    </ol>
                    </div>
                    <ol id="loadcomment-list" class="commentlist"></ol>
                </div>

                <div id="woo_comm_form">
                    <div id="review_form_wrapper">
                    <div id="review_form">
                        <div id="respond" class="comment-respond">
                        <h3 id="reply-title" class="comment-reply-title">
                            Add a review <small><a rel="nofollow" id="cancel-comment-reply-link" href="/product/samsung-q7cn-qled-curved-smart-4k-uhd-tv-55-2/#respond" style="display: none">Cancel reply</a></small>
                        </h3>

                        <form action="./wp-comments-post.php" method="post" id="commentform" class="comment-form">
                            <p class="comment-notes">
                            <span id="email-notes">Your email address will not be published.</span> <span class="required-field-message" aria-hidden="true">Required fields are marked <span class="required" aria-hidden="true">*</span></span>
                            </p>
                            <p class="comment-form-rating">
                            <label for="rating">Your Rating</label>
                            <select name="rating" id="rating" required>
                                <option value="">Rate&hellip;</option>
                                <option value="5">Perfect</option>
                                <option value="4">Good</option>
                                <option value="3">Average</option>
                                <option value="2">Not that bad</option>
                                <option value="1">Very Poor</option>
                            </select>
                            </p>
                            <p class="comment-form-comment">
                            <label for="comment">Your Review <span class="required">*</span></label>
                            <textarea id="comment" name="comment" cols="45" rows="8" required></textarea>
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
                            <p class="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" /> <label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label></p>
                            <p class="form-submit">
                            <input name="submit" type="submit" id="submit" class="submit" value="Submit" /> <input type="hidden" name="comment_post_ID" value="133" id="comment_post_ID" />
                            <input type="hidden" name="comment_parent" id="comment_parent" value="0" />
                            </p>
                        </form>
                        </div>
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
                <img class="nolazyftheme" src="${futureImage || dataFutureImage}" width="50" height="50" alt="${title || findSku.itemname}" />
            </div>
            <div class="float-panel-woo-info pl20">
                <div class="float-panel-woo-title rehub-main-font mb5 font110 whitecolor">${title || findSku.itemname}</div>
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
                    <del aria-hidden="true">
                    <span class="woocommerce-Price-amount amount">
                        <bdi><span class="woocommerce-Price-currencySymbol">Rp </span> ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") || findSku.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</bdi>
                    </span>
                    </del>
                    <ins>
                    <span class="woocommerce-Price-amount amount">
                        <bdi><span class="woocommerce-Price-currencySymbol">Rp </span> ${priceAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</bdi>
                    </span>
                    </ins>
                </p>
                </div>
                <div class="float-panel-woo-button rh-flex-center-align rh-flex-right-align">
                <a href="?add-to-cart=3336" data-product_id="3336" data-product_sku="1465713436" class="re_track_btn btn_offer_block single_add_to_cart_button add_to_cart_button ajax_add_to_cart product_type_simple">Add to cart</a>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div class="other-woo-area clearfix">
        <div class="related-woo-section pt30 pb20">
            <div class="rh-container">
            <div class="rh-360-content-area tabletsblockdisplay">
                <div class="clearfix"></div>
                <div class="related-woo-area">
                <h3>Related Products</h3>
                <div class="woocommerce">
                    <div
                    class="rh-flex-eq-height products col_wrap_fourth grid_woo"
                    data-filterargs='{"post__in":["133"],"orderby":"post__in","post_type":"product","posts_per_page":4,"tax_query":[{"relation":"AND","0":{"taxonomy":"product_visibility","field":"name","terms":"exclude-from-catalog","operator":"NOT IN"}}],"no_found_rows":1}'
                    data-template="woogridpart"
                    id="rh_woogrid_725474315"
                    data-innerargs='{"columns":"4_col","woolinktype":"product","disable_thumbs":"","gridtype":"","soldout":"","attrelpanel":""}'
                    >
                    <div class="product col_item woo_grid_compact two_column_mobile type-product">
                        <div class="button_action rh-shadow-sceu pt5 pb5">
                        <div>
                            <div class="heart_thumb_wrap text-center">
                            <span class="flowhidden cell_wishlist"
                                ><span class="alreadywish heartplus" data-post_id="133" data-informer="5" data-wishlink=""
                                ><span class="ml5 rtlmr5 wishaddedwrap" id="wishadded133">Added to wishlist</span><span class="ml5 rtlmr5 wishremovedwrap" id="wishremoved133">Removed from wishlist</span>
                                </span></span
                            ><span id="wishcount133" class="thumbscount">5</span>
                            </div>
                        </div>
                        <span class="compare_for_grid">
                            <span class="wpsm-button wpsm-button-new-compare addcompare-id-133 white small not-incompare comparecompact" data-addcompare-id="133"><i class="rhicon re-icon-compare"></i><span class="comparelabel">Add to compare</span></span>
                        </span>
                        </div>

                        <figure class="mb15 mt25 position-relative">
                        <a class="img-centered-flex rh-flex-justify-center rh-flex-center-align" href="${futureImage || dataFutureImage}">
                            <img
                            src="ttps://rawcdn.githack.com/masscreative/mcid-theme/c588f069d6ab8c7eb9e9b6d8845c901c56328a5e/blank.gif"
                            data-src="${futureImage || dataFutureImage}"
                            alt="${title || findSku.itemname}"
                            data-skip-lazy=""
                            class="lazyload"
                            width="300"
                            height="300"
                            />
                        </a>

                        <div class="gridcountdown"></div>
                        </figure>
                        <div class="cat_for_grid lineheight15">
                        <a href="${futureImage || dataFutureImage}" class="woocat">TV sets</a>
                        </div>

                        <h3 class="text-clamp text-clamp-2">
                        <a href="${findSku.postlink}">${title || findSku.itemname}</a>
                        </h3>

                        <div class="border-top pt10 pr10 pl10 pb10 rh-flex-center-align abposbot">
                        <div class="price_for_grid redbrightcolor floatleft rehub-btn-font mr10">
                            <span class="price">
                            <span class="woocommerce-Price-amount amount">
                                <bdi> <span class="woocommerce-Price-currencySymbol">Rp </span> ${priceAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} </bdi>
                            </span>
                            </span>
                        </div>
                        <div class="rh-flex-right-align btn_for_grid floatright">
                            <a href="?add-to-cart=133" data-product_id="133" data-product_sku="" class="re_track_btn woo_loop_btn rh-flex-center-align rh-flex-justify-center rh-shadow-sceu add_to_cart_button ajax_add_to_cart product_type_simple">
                            <svg height="24px" version="1.1" viewBox="0 0 64 64" width="24px" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                <path d="M56.262,17.837H26.748c-0.961,0-1.508,0.743-1.223,1.661l4.669,13.677c0.23,0.738,1.044,1.336,1.817,1.336h19.35   c0.773,0,1.586-0.598,1.815-1.336l4.069-14C57.476,18.437,57.036,17.837,56.262,17.837z" />
                                <circle cx="29.417" cy="50.267" r="4.415" />
                                <circle cx="48.099" cy="50.323" r="4.415" />
                                <path d="M53.4,39.004H27.579L17.242,9.261H9.193c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5h4.493l10.337,29.743H53.4   c1.381,0,2.5-1.119,2.5-2.5S54.781,39.004,53.4,39.004z" />
                                </g>
                            </svg>
                            Add to cart
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="clearfix"></div>
                </div>
            </div>
            </div>
        </div>
        </div>
      </div>
    `;
if (sku.length !== 0) {
  $(".post-product-template").after(postProductHtml);

  if (showRibbon === false) {
    $(".re-ribbon-badge").remove();
  }

  $(imagesGallery).each(function (key, value) {
    $(".product-future-image").after(`
    <div data-thumb="${value}" data-thumb-alt="alt" class="woocommerce-product-gallery__image">
      <a href="${value}">
        <img width="1200" height="900" src="${value}" class="" alt="${title}" loading="lazy" title="${title}" data-caption="${title}" data-src="${value}" data-large_image="${value}" data-large_image_width="1200" data-large_image_height="900" />
      </a>
    </div>`);
  });

  if ($(sale).length === 0) {
    $(".price > del").remove();
    $(".onsale").remove();
    $(".woo-price-area").html(`<p class="price">
        <span class="woocommerce-Price-amount amount">
          <bdi>
            <span class="woocommerce-Price-currencySymbol">Rp </span> 
            ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") || findSku.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </bdi>
        </span>
      </p>`);
  }
}

function fbshareCurrentPage() {
  window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href) + "&t=" + document.title, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");
  return false;
}
