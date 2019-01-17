[{"Owner":"Thibault","Date":"2018-05-09T23:47:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve searched and didn_t_t find an answer_co_ apologize if it was already asked_co_ I_t_m fairly new to the shader world.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m working on a custom material shader for a height ground mesh that gets a different texture depending on elevation _co_ slope ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a prototype working_co_ but now I want to add some light to my scene and I_t_m struggling to figure out how to replicate the same behaviour as the standard material fragment shader.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have only one Hemi Light in my scene and I want only diffuse lighting_co_ I tried to do as the Phong example in the CYOS_co_ compute the angle between normal and light vector_co_ and it works_co_ but this is behaving like a PointLight_co_ not HemiLight\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the example with StandardMaterial (the lighting I want)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//tdurand.github.io/3d-experiments/postlighting-withstandardmaterial.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//tdurand.github.io/3d-experiments/postlighting-withstandardmaterial.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the example with my CustomMaterial_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//tdurand.github.io/3d-experiments/postlighting-withcustommaterial.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//tdurand.github.io/3d-experiments/postlighting-withcustommaterial.html_lt_/a_gt__lt_span_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe shader code_dd_ _lt_a href_eq__qt_https_dd_//github.com/tdurand/3d-experiments/blob/gh-pages/terrain.fragment.fx#L22_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/tdurand/3d-experiments/blob/gh-pages/terrain.fragment.fx#L22 _lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCould you point me to some ressources to get the fragment shader behave like the standard material for an HemiLight ? What is exactly the difference between an HemiLight and a point light far away?  I tried to investigate the code of the standard material fragment shader without success for now_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/default.fragment.fx_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/default.fragment.fx_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThibault\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-05-09T23:50:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//cyos.babylonjs.com/#B0VYMZ_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//cyos.babylonjs.com/#B0VYMZ_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tMaybe I should read... you already did this my bad.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Thibault","Date":"2018-05-09T23:57:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes I already tried this great example . I think my main question is how to modify this to take in input an Hemi Light and not a Point Light\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-05-10T00:01:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/hughsk/glsl-hemisphere-light/blob/master/index.glsl_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/hughsk/glsl-hemisphere-light/blob/master/index.glsl_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Thibault","Date":"2018-05-10T00:40:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGreat ! thanks_co_ I_t_ll give it a shot tomorrow and I_t_ll let you know\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Thibault","Date":"2018-05-10T13:02:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tReally good_co_ for the record the hemi light is mixing influence of both ground and light source. I could replicate the same effect as in Standard material by setting the ground color to black and the sky to white.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe crucial part of the fragment shader was_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// Compute diffuse weight from normal and light vector\nfloat diffuseWeight _eq_ 0.5 * dot(vNormalW_co_ lightVectorW) + 0.5_sm_\n// Mix black_co_ white with our diffuse weight\nvec3 diffuseColor _eq_ mix(vec3(0.0_co_0.0_co_0.0)_co_ vec3(1.0_co_1.0_co_1.0)_co_ diffuseWeight)_sm_\n// Apply diffuse effect to final color\ngl_FragColor _eq_ color * vec4(diffuseColor_co_ 1.0)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks a lot\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]