[{"Owner":"JackFalcon","Date":"2017-12-10T20:32:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t&gt_sm_StageLeft_dd_ enters afalcon...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI know not what sir _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ speaks except... that these playgrounds are pretty awesome.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe nudgies_co_ confound. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSuper curious_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/27658-arte/?do_eq_hovercard_qt_ data-mentionid_eq__qt_27658_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/27658-arte/_qt_ rel_eq__qt__qt__gt_@Arte_lt_/a_gt_ what you are using this for?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tReason... wingy is correct_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHover vertex and edges would be great for _lt_em_gt_run-time-_lt_/em_gt__lt_em_gt_mesh-editor-behavior_lt_/em_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs that what you are up to!?!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_  likes ... very much. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tFell into a Mesh Editing Mode trench recently_co_  and --&gt_sm_hover edge/vertex mode&lt_sm_-- would work very well there...\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed3475563771_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/34397-solved-mesh-editor-edit-ribbon-vertices/?do_eq_embed_qt_ style_eq__qt_height_dd_325px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tProblem was 15k nodes (above)_co_ but maybe hover saves editmode fps? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHappy Holidays.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&gt_sm_StageLeft_dd_ aFalcon Exits...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUPDATE_dd_ insight on nudgies becomes clearer...with Z fighting. Thx.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-12-10T21:01:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Boxes only_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25131-afalcon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25131_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25131-afalcon/_qt_ rel_eq__qt__qt__gt_@aFalcon_lt_/a_gt_.  The frame is derived from the bounding box.  Anything fancier_co_ and Wingnut would get a brain tumor.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tA _qt_nudge_qt_ is simply a tiny value added to positions... to avoid z-fighting.  On the _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#35HAW1%2323_qt_ rel_eq__qt_external nofollow_qt__gt_#23 PG_lt_/a_gt__co_ the nudge/nudgie is the _t_n_t_ variable defined at line 203.  It is used in the next 6 position-setting code lines.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExciting_co_ eh?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I_t_ll try to turn ANYTHING into comedy.  _t_Nudgies_t_ is surely not the correct term_co_ but it_t_s kind of fun to say.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2017-12-10T23:08:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25131-afalcon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25131_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25131-afalcon/_qt_ rel_eq__qt__qt__gt_@aFalcon_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_font-size_dd_14px_sm__qt__gt_\n\t“POINT-BEING_dd_ Hover vertex and edges would be great for _lt_em_gt_run-time-_lt_/em_gt__lt_em_gt_mesh-editor-behavior_lt_/em_gt_.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_font-size_dd_14px_sm__qt__gt_\n\tIs that what you are up to!?!”        Spot on!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2017-12-11T12:52:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWeekend is over!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat about this _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#AWML5U%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#AWML5U#1_lt_/a_gt_ _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2017-12-11T13:23:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tEvery second ridge/edge is missing _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#AWML5U%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#AWML5U#2_lt_/a_gt_ _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAny suggestion?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2017-12-11T14:26:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tArte you have just 8 points. From 8 points you can draw just 8 lines!!! _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBack to work!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2017-12-11T15:34:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy arm_t_s on my head (holding from spinning) _lt_img alt_eq__qt__dd_wacko_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wacko.png_qt_ title_eq__qt__dd_wacko_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ for edges i will try your option_t_s\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-12-11T15:50:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t[ Wingnut points to the warning on the side of Babylon.Geometry class objects_dd_  _qt_Vertex-wrangling is known to cause brain tumors in adult Wallabies_qt_  ]\n_lt_/p_gt_\n\n_lt_p_gt_\n\theh.  You had dreams of trying to satisfy _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25131-afalcon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25131_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25131-afalcon/_qt_ rel_eq__qt__qt__gt_@aFalcon_lt_/a_gt__t_s _qt_Let_t_s use this to edit ANY mesh_qt_ proposal from hell_co_ right?  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDidja know that aFalconoid is aRoboDroid?  Not only is he a robot_co_ but he drinks top-fuel-dragster-grade nitro-methane ALL DAY LONG!   When he starts dreaming_co_ small animals RUN!  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tJust kidding_co_ of course.  No_co_ I hovered your morning post... there_co_ and noticed that you dove back into vert-ville_co_ and I ran for the hills.  (I spray Glade French Vanilla air freshener behind me while I run... as droids can_t_t track me that way.)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-12-11T16:16:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\the is correct... falcon is a bot.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNew solution... _qt_printing_qt_ vertices in 3d space... with freecam position_dd_ MOVE-&gt_sm_click&lt_sm_-MOVE-&gt_sm_click&lt_sm_-...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen second button...dots become lines. Third...lines become ribbons...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4) animals return to vert-ville... because wild-west tamed by a team of d3-cowboys...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLol_co_ Vanilla bot joke is... classic! _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-12-11T16:38:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/27658-arte/?do_eq_hovercard_qt_ data-mentionid_eq__qt_27658_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/27658-arte/_qt_ rel_eq__qt__qt__gt_@Arte_lt_/a_gt_ - great stuff above. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMissing Edges_dd_ (interesting) looking into it... found it...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_i_gt_I owe you a playground with_dd_ quad-state R-G-B selection logic_co_ under hoververts &amp_sm_ edges..._lt_/i_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUPDATE_dd_ have the code... needs to stuffs it into a playground...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tnot compatible(yet).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t... \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2017-12-11T19:58:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ Thank you for everything! I really appreciate it _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll go with option you created (I will _qt_shrug 50%_qt_) _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not smart enough to finish my option. _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ (One day)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-12-11T20:30:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy pleasure.  There may be 3rd and 4th options_co_ too. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#35HAW1%2324_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#35HAW1#24_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s one _qt_modification_qt_ I can tell you about.  IF you are willing to use non-actionManager _qt_pick_qt_ (pointer down) instead of actionManager pointerEnterTrigger (mouse over)... then you can get a faceID from the click.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee console_co_ while clicking the sides of the box.  For each box side_co_ there are two triangular faces_co_ of course.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy using this method_co_ you can eliminate the panels.  Instead of case _qt_panel1_qt__co_ case _qt_panel2_qt__co_ etc... you can instead do case faceID _eq__eq_ 0  || faceID _eq_ 1_co_ etc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt doesn_t_t change much.  You can eliminate the 6 panels and their actionManagers.  Not a very large change... probably not worth bothering-with.  Just thought I_t_d mention it.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-12-11T20:34:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_span_gt_@wingnut - _lt_/span_gt_you can on mouse over call scene.pick(...) as well - hard on resources.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2017-12-11T20:51:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI won_t_t give up!!! _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tFor panel1_co_ panel2..... I can use this _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#AWML5U%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#AWML5U#4_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2018-06-26T07:18:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just want to share how I done this. Maybe it will help someone. _lt_img alt_eq__qt__dd_rolleyes_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_rolleyes.gif_qt_ title_eq__qt__dd_rolleyes_dd__qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt works very well on box and plane (this is what i was looking for)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#35HAW1%2325_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#35HAW1#25_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-26T07:55:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCongrats_co_ Arte!  Nice work!  I bookmarked it 4 times.  Now what the heck do I name it_co_ so I can find it again_co_ later?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAre you thinking about doing the same... with the faces?  Add-on feature?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWait_co_ what IS a _qt_face_qt_?  Is a face... triangular? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I mean... is the square/rectangle area_co_ nothing triangular.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA _qt_side_qt__co_ maybe?  Yeah_co_ that_t_s a better term.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2018-06-26T11:40:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWingnut_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI forgot to share it. _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ All this I done some time ago.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor face pick I_t_m using scene.pick (it covers my needs) for now?!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]