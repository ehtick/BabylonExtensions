[{"Owner":"ozRocker","Date":"2017-08-06T11:57:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDoes anyone know of a way to get the circumference of a mesh at any point on the Y-axis in realtime?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve attached an image below as an example.  I_t_d like to find the circumference around the shoulders_co_ like I wrapped string around it then measured that length of string.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI suppose you could measure the distance from one point to the next_co_ then add them all up for total circumference but there_t_s 2 things I_t_m unsure of_dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\thow to get points from exactly the same place on the Y-axis\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\thow to take into account smooth-shading \n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_14279_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/circumference.jpg.0fde9ee07c9403a38a48c46955f15d4a.jpg_qt_ alt_eq__qt_circumference.jpg.0fde9ee07c9403a38a48c46955f15d4a.jpg_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-08-06T14:23:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI played with Blender to create an edge-loop at the area I want to measure.  I figured that I could somehow save that as a vertex group_co_ but the Babylon.js exporter doesn_t_t store that info.  I tried separating those vertices into a separate mesh_co_ but I think Babylon.js exporter will only save mesh data if it creates a polygon_co_ _t_cos that separate mesh just ended up as an empty array.  I don_t_t think its possible with Blender to store a set of vertices as a _qt_group_qt_ which the exporter will also convert\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-08-07T02:24:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Oz. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tUm... at any level of Y_co_  surround the model with tiny planes... positioned and Y-rotated into a circle.  Perhaps 16 of them_co_ and you can scale their X-axes so that they DON_t_T OVERLAP each other.  As you reduce the diameter of the circle-of-planes_co_ you will need to down-scale each plane_t_s X. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt_IF they overlap whatsoever_lt_/u_gt__co_ you will _lt_u_gt_not_lt_/u_gt_ get an accurate circumference at the end of the procedure.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tKeep reducing the diameter of the circle-of-planes until one of them has an intersectsMesh with the model.  Then _qt_undo_qt_... positioning/scaling planes at the previous diameter/scale of the circle-of-planes_co_ when there was NO intersect.  You are seeking _qt_just barely NOT intersecting_qt_ with the primary model.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNext_co_ merge all the tiny planes together_co_ and make sure you have good refreshBoundingInfo() (probably automatically done in merge code).  Then... use mergedMesh.getBoundingInfo().boundingBox.extendsSizeWorld to get a diameter. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t(You can also subtract primary model position... from ANY tiny-plane position_co_ and that will be circle radius.  Double it for diameter_co_ of course.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen_co_ circumference _eq_ diameter * PI.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow_t_s that for a ridiculous way of doing it?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Edge-loop_co_ the hard way. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-08-07T02:46:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_184561_qt_ data-ipsquote-contentid_eq__qt_32187_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1502072643_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t20 minutes ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi Oz. \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tUm... at any level of Y_co_  surround the model with tiny planes... positioned and Y-rotated into a circle.  Perhaps 16 of them_co_ and you can scale their X-axes so that they DON_t_T OVERLAP each other.  As you reduce the diameter of the circle-of-planes_co_ you will need to down-scale each plane_t_s X. \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_u_gt_IF they overlap whatsoever_lt_/u_gt__co_ you will _lt_u_gt_not_lt_/u_gt_ get an accurate circumference at the end of the procedure.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tKeep reducing the diameter of the circle-of-planes until one of them has an intersectsMesh with the model.  Then _qt_undo_qt_... positioning/scaling planes at the previous diameter/scale of the circle-of-planes_co_ when there was NO intersect.  You are seeking _qt_just barely NOT intersecting_qt_ with the primary model.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tNext_co_ merge all the tiny planes together_co_ and make sure you have good refreshBoundingInfo() (probably automatically done in merge code).  Then... use mergedMesh.getBoundingInfo().boundingBox.extendsSizeWorld to get a diameter.  Then_co_ circumference _eq_ diameter * PI.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tHow_t_s that for a ridiculous way of doing it?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Edge-loop_co_ the hard way. \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat_t_s an interesting way of doing it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIsn_t_t diameter * PI for circles only?  I will have meshes of all kinds of shape\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-08-07T02:48:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOhhhh_co_ you need non-circular circumference?  Okay_co_ never mind me_co_ then.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Sorry_co_ I misunderstood.  You need a cloth tape measure that can follow model contours precisely.  Yuh_co_ yuh_co_ yuh.  hmm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLike a tiny _lt_a href_eq__qt_https_dd_//top10bestpro.com/wp-content/uploads/2017/06/Use-the-Best-Distance-Measuring-Wheels-in-2017-%E2%80%93-Do-not-Guess-with-Distance-770x514.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_police skid-measuring wheel_lt_/a_gt_... that you can roll-around the mesh at any Y-point.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-08-07T13:10:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t(The term should be perimeter not circumference but no nit picking among friends). At first I thought I had a solution but it does not seem to generalize.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsing raycasting I obtained an acceptable result. Taking a box of side 4 I got 15.9 as the circumference which is pretty close to 16. The lower the increment the more accurate the result. Here is the PG_co_ check console for circumference.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#KNE0O%2348_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#KNE0O#48_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever when I tried to do the same thing with the skull the individual picked point results and the circumference do not make sense. According to the boundingInfo the skull is about 46 across which gives a ball park figure of 90 for the circumference at the chosen Y point but I get 9.7.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps I am on the right track and just do not know enough about raycasting to do it properly or maybe it is not the way to do it. Anyway here is PG with skull for what it is worth. (by the way with the skull an increment of 0.01 for the skull locks the browser for a long time).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#KNE0O%2351_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#KNE0O#51_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEDIT\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I showed the rays I found the mistake_co_ the rays were not in the direction I expected. I had modified another playground but found to get rays in right direction I should just use the forward vector not the calculated direction vector.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo this might work\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#KNE0O%2352_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#KNE0O#52_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SvenFrankson","Date":"2017-08-07T15:12:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs far as I_t_ve tried_co_ it might be expensive to cast multiple rays each frame on a high-poly mesh (it loops through triangles when the ray hit the bounding box). A solution in cases you may take an approximation as a result is to use a low-poly (very low-poly) version of your mesh to do it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor example_co_ draw your skull with 60 vertices on Blender_co_ attach the Mesh to the high-poly skull_co_ hide it_co_ and raycast on the low poly version.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(also_co_ once you have a 60 triangles mesh_co_ it_t_s not that expensive to loop through the vertices to evaluate the diameter_co_ and you may drop the use of raycast_co_ you have an _qt_exact result based on approximate mesh_qt__co_ which might be better than _qt_approximate result on exact mesh_qt_).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-08-07T17:05:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_184625_qt_ data-ipsquote-contentid_eq__qt_32187_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1502118759_qt_ data-ipsquote-userid_eq__qt_25742_qt_ data-ipsquote-username_eq__qt_SvenFrankson_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ SvenFrankson said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tonce you have a 60 triangles mesh_co_ it_t_s not that expensive to loop through the vertices\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tPresuming you mean at least a 60 triangles mesh since in that case the facet triangles are small enough to give a good approximation then how expensive is it to determine the the vertices with a y value close enough to the given y value and that the vertices are consecutive by increasing angle. Remember that the contour of the slice at y may not be anywhere close to a circle and so just finding the diameter is not good enough.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-08-07T20:59:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\twhy not just get its bounding box then? circumference is for ellipsoids I believe.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-08-08T13:39:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_184615_qt_ data-ipsquote-contentid_eq__qt_32187_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1502111432_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 07/08/2017 at 2_dd_10 PM_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t(The term should be perimeter not circumference but no nit picking among friends). At first I thought I had a solution but it does not seem to generalize.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tUsing raycasting I obtained an acceptable result. Taking a box of side 4 I got 15.9 as the circumference which is pretty close to 16. The lower the increment the more accurate the result. Here is the PG_co_ check console for circumference.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#KNE0O%2348_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#KNE0O#48_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tHowever when I tried to do the same thing with the skull the individual picked point results and the circumference do not make sense. According to the boundingInfo the skull is about 46 across which gives a ball park figure of 90 for the circumference at the chosen Y point but I get 9.7.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tPerhaps I am on the right track and just do not know enough about raycasting to do it properly or maybe it is not the way to do it. Anyway here is PG with skull for what it is worth. (by the way with the skull an increment of 0.01 for the skull locks the browser for a long time).\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#KNE0O%2351_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#KNE0O#51_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tEDIT\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWhen I showed the rays I found the mistake_co_ the rays were not in the direction I expected. I had modified another playground but found to get rays in right direction I should just use the forward vector not the calculated direction vector.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tSo this might work\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#KNE0O%2352_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#KNE0O#52_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThis seems to work best.  Thanx mate! _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-08-08T14:33:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ using your method here _lt_a href_eq__qt_http_dd_//punkoffice.com/measurements_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//punkoffice.com/measurements_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you compare to the stats on the right it seems pretty accurate.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TimT77","Date":"2018-06-22T08:33:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt__dd_ i wanna do this (_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#KNE0O%2352_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#KNE0O#52_lt_/a_gt_) with simple meshes (like a MeshBuilder Box)_co_ but i ran into an error_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#KNE0O%2393_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#KNE0O#93_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tWhat_t_s the problem?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest regards_lt_br /_gt_\n\tTim\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SvenFrankson","Date":"2018-06-22T09:23:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYour hit variable is never null_co_ there_t_s a boolean property hit.hit telling you wheter your ray touched something or not\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#KNE0O%2394_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#KNE0O#94_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-06-22T12:22:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12544_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/_qt_ rel_eq__qt__qt__gt_@ozRocker_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou always have interesting challenges. However_co_ if this were my challenge_co_ I would use a small texture of a known length to wrap around any specific area of the mesh. Then since it_t_s tiled and I know the PX length_co_ I can handle the rest of the calculations based upon how many times the image is tiled. You can attach this to any event_co_ and hide the texture when you don_t_t need it. That_t_s my thought of the day (_t_night_t_).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TimT77","Date":"2018-06-25T10:38:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25742-svenfrankson/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25742_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25742-svenfrankson/_qt_ rel_eq__qt__qt__gt_@SvenFrankson_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tHi!_lt_br /_gt_\n\tMany thanks for your advice! That was the solution!_lt_br /_gt_\n\t_lt_br /_gt_\n\tBest regards_lt_br /_gt_\n\tTim\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]