[{"Owner":"bviale","Date":"2017-09-22T08:54:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m trying to cover the visible area of an element through another.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe camera is behind a rectangle_co_ and at the bottom of the scene there is a picture. I_t_m trying to cover the area of the picture visible through the rectangle with a plane just like this _dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_14942_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/image.png.f880ea28c859d47712563267bc1783ae.png_qt_ alt_eq__qt_image.png.f880ea28c859d47712563267bc1783ae.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve set up the scene with my elements but I have troubles to detect which part of the picture is visible through the rectangle.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe I can use BABYLON.Vector3.Project to have a projection of the picture in the rectangle ? That_t_s my only lead at the moment to obtain a point based on the camera position.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you guys have any idea of how I can achieve this ? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is my playground so far _dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/indexstable#QQNCWU_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/indexstable#QQNCWU_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-09-22T14:45:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy first instinct would be using Rays to all four corners of the transparent rectangle. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheck when those rays intersect with the video_co_ and then you have the position in which they intersect on the video mesh itself. Afterwards_co_ it is only a matter of understanding how you need to rescale_co_ but (without really thinking it through) it seems relatively trivial_co_ since you know which corner intersects with it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOf course_co_ I assume that you are always looking from the front of the transparent rectangle.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote - the position from which the ray will be sent should also be calculated. I need to think about this one a bit more _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tEdit 1 - \n_lt_/p_gt_\n\n_lt_p_gt_\n\t4 Rays from the four corners of the transparent in using the camera_t_s direction variable will do the trick.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]