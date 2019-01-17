[{"Owner":"digEmAll","Date":"2018-01-04T16:01:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi All_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe issue I_t_m facing is probably trivial to solve but I couldn_t_t find a solution.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically I need to set the parent of a mesh (used as rotation pivot) to null after a rotation_co_ because I need to use that pivot again for another group of meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried to use the following approach_dd_\n_lt_/p_gt_\n\n_lt_div style_eq__qt_color_dd_#000000_sm_background-color_dd_#fffffe_sm_font-family_dd_Consolas_co_ _t_Courier New_t__co_ monospace_sm_font-weight_dd_normal_sm_font-size_dd_14px_sm_line-height_dd_19px_sm_white-space_dd_pre_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_pre_gt_\n_lt_code_gt_var pos _eq_ box.getAbsolutePosition()_sm_\nvar rot _eq_ box.rotation_sm_\nbox.parent _eq_ null_sm_\nbox.setAbsolutePosition(pos)_sm_\nbox.rotation _eq_ rot_sm_\n_lt_/code_gt__lt_/pre_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tbut it seem to keep only the position_co_ but not the rotation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have created a simple playground to reproduce the problem _dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#S13YXG%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#S13YXG#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you can see_co_ when the animation is completed the bigger box returns to the original rotation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny suggestion ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks a lot in advance\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2018-01-04T16:22:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18362-digemall/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18362_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18362-digemall/_qt_ rel_eq__qt__qt__gt_@digEmAll_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tAs you_t_re using rotationQuaternion_co_ box.rotation won_t_t do anything.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfurthermore_co_ you should clone the values instead of referencing them (reference will change as the box.parent is removed)_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var pos _eq_ box.getAbsolutePosition().clone()_sm_\nvar rot _eq_ box.parent.rotationQuaternion.clone()_sm_\n\n    box.parent _eq_ null_sm_\n    box.setAbsolutePosition(pos)_sm_\n    box.rotationQuaternion _eq_ rot_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#S13YXG%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#S13YXG#4_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"digEmAll","Date":"2018-01-04T16:28:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks a lot! It was easy after all _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-01-04T18:20:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThat code might work in your case_co_ but I think a better way to do it is in one line with mesh.setParent(null)_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.transformNode.ts#L464_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.transformNode.ts#L464_lt_/a_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#S13YXG%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#S13YXG#6_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"digEmAll","Date":"2018-01-05T07:39:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks _lt_span_gt_@_lt_/span_gt_brianzinn_co_ that_t_s great !\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]