[{"Owner":"Gerente","Date":"2015-08-04T02:36:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co_ I have an app that is a kind of photo gallery_co_ after loading 10 photos in a mobile the browser crash  (Iphone 6)_lt_/p_gt__lt_p_gt_It is probably related with Memory_co_ each image its about 300kb._lt_/p_gt__lt_p_gt_I have been using .dispose() before assign the texture but it does not have effect._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_sphere.material.emissiveTexture.dispose()_sm_sphere.material.emissiveTexture _eq_ texture_sm__lt_/pre_gt__lt_p_gt_I_t_m desperate_co_ I really don_t_t know how to fix this._lt_/p_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Any advice is welcome._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Thanks_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-08-04T05:33:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The image size is usually not the problem. It_t_s the image_t_s resolution that can cause those kinds of things. The image_t_s are stored uncompressed in the gpu._lt_br_gt_Try reducing the resolution of the images._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A simple calculation_dd__lt_/p_gt__lt_p_gt_a JPG needs 24 bits per pixel (thou I am pretty sure that textures are all stored using 32 bits). a 1000x1000 image takes 1000x1000x24 bits_co_ meaning - 24_co_000_co_000 bits. which are ca. 3 MB. A 2000x2000 image will take 112MB. 10 Images will take 1120MB. Your desktop GPU will be able to handle this. a mobile GPU will have a hard time._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gerente","Date":"2015-08-04T13:20:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_91608_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_16198_qt_ data-ipsquote-username_eq__qt_RaananW_qt_ data-cite_eq__qt_RaananW_qt_ data-ipsquote-timestamp_eq__qt_1438666380_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_The image size is usually not the problem. It_t_s the image_t_s resolution that can cause those kinds of things. The image_t_s are stored uncompressed in the gpu._lt_/p_gt__lt_p_gt_Try reducing the resolution of the images._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A simple calculation_dd__lt_/p_gt__lt_p_gt_a JPG needs 24 bits per pixel (thou I am pretty sure that textures are all stored using 32 bits). a 1000x1000 image takes 1000x1000x24 bits_co_ meaning - 24_co_000_co_000 bits. which are ca. 3 MB. A 2000x2000 image will take 112MB. 10 Images will take 1120MB. Your desktop GPU will be able to handle this. a mobile GPU will have a hard time._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for the advice_co_ I_t_ll check if I can change the image resolution without loosing quality._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]