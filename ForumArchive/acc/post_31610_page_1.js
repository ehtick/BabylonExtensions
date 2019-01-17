[{"Owner":"Hersir","Date":"2017-07-13T10:06:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\twhat would be the best way to crate lamp like mesh_co_ that is half transparent and is lightened from inside (emits light).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-07-13T14:36:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again_co_ Hersir!  I like this one...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1GUOCF%239_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1GUOCF#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMIGHT crash FF occasionally.  Keep trying.  MY Firefox has been getting out-of-memory and many garbage collection pauses_co_ lately.  Not sure why.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo transparency involved in this lamp... because... BJS lights shine right through ANY mesh that isn_t_t included in a shadow map/generator.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust a pointLight inside a sphere_co_ with a little highlightLayer glow_co_ and a shadowGenerator for that light... and a .range set on the light... and there_t_s an optional lens flare system nearby_co_ in case you want to play with that. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe _qt_bulb_qt_ sphere is lit via self-illumination (material.emissiveColor)... an easy way to deal-with that task  If you wish-to light the bulb via the pointLight located inside it (using .diffuseColor instead of .emissiveColor)_co_ then you might need to create the bulb sphere... as _qt_doublesided_qt_.  I_t_ll let YOU play with that challenge_co_ if you want-to.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope this helps.  Others may have better ideas.  Party on!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2017-07-17T07:38:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ Tanks for great example _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]