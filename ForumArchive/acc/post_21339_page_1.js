[{"Owner":"SuperPudding","Date":"2016-03-21T17:24:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello to everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m new to web developing and to babylon js. I_t_m building a web application for simulating simple physical systems as a high school computer science project._lt_br_gt_\n\tRight now I_t_m struggling with collisions. I know what calculations to do when two meshes collide assuming I know the collision point_co_ but I couldn_t_t find a way to get that._lt_br_gt_\n\tI_t_m trying to create my own physics so preferably this would be done without an external physics engine. All I need is to know when and where meshes intersect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also have an idea but I could not make it work. Perhaps someone here can help with this._lt_br_gt_\n\tI thought to check for intersection using mesh.IntersectsMesh(otherMesh) and then dividing the meshes into sub-meshes. I can than check intersection between sub-meshes. By dividing the meshes into smaller and smaller sub-meshes I can get the point of intersection (for the desired accuracy) if I know which sub-meshes intersect and which do not._lt_br_gt_\n\tMy problem is that I can_t_t find a way to check intersection between sub-meshes_co_ as they do not behave exactly like normal_co_ independent meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf anyone has a way to help with that_co_ or alternatively another way to go about it_co_ I would be very thankful._lt_br_gt_\n\tThanks in advance\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eboo","Date":"2016-03-21T18:22:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/21185-moving-mesh-with-free-camera-does-not-collide-with-another-mesh/?do_eq_embed_qt__gt__lt_/iframe_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\thave you read this?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-03-21T18:48:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi SuperPudding_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tinteresting moniker _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tHave you checked the collision demo on the playground? might provide you with some insight as to how to use collisions in babylon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can also search for information about intersections here - _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Intersect_Collisions_-_mesh_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Intersect_Collisions_-_mesh_lt_/a_gt_ and here - _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Cameras_co__Mesh_Collisions_and_Gravity_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Cameras_co__Mesh_Collisions_and_Gravity_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SuperPudding","Date":"2016-03-22T14:08:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for your answers. Unfortunately it still wasn_t_t what I was looking for.\n_lt_/p_gt_\n\n_lt_p_gt_\n\teboo_co_ the post you sent me to was about not being able to detect a collision. I actually can detect collisions_co_ I_t_m looking for a way to get the point of contact.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRaananW_co_ I checked those tutorials out already. They are not very clear as to how all the methods work and how to use them.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll try to explain exactly what I_t_m looking for_dd__lt_br_gt_\n\tAs I uderstand there are two ways to go about collisions natively. Either using the _qt_scene.collisionsEnabled _eq_ true_qt_ and then _qt_mesh.checkCollisions _eq_ true_qt_ for meshes_co_ or using _qt_mesh.intersectrsMesh()_qt_._lt_br_gt_\n\tThe first method doesn_t_t work for me. It stops only the camera from intersecting a mesh but it does nothing for mesh to mesh collisions for some reason. The second method works but it isn_t_t very accurate and it doesn_t_t give me information about the contact point_co_ only a boolean about whether or not the collision takes place.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy idea was to devide colliding meshes into sub-meshes and checking intersection between them. If the sub-meshes are small I can approximately know the region in which the point of contact is by knowing which sub-meshes intersect._lt_br_gt_\n\tThe problem with that is that I don_t_t know how to check for intersection between sub-meshes_co_ only between regular meshes_co_ and that I don_t_t know how to get the position of a sub-mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes anybody know of a way to do that?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy the way_co_ I_t_ve found a mesh property called _qt_onCollide_qt_ but I can_t_t get it to work. can someone please explain what it is and how to use it? Can it help me with my problem?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-03-22T23:05:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tquick answer - \n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheck the moveWithCollisions function (_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Cameras_co__Mesh_Collisions_and_Gravity_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Cameras_co__Mesh_Collisions_and_Gravity_lt_/a_gt_ you can find the function here).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis will mvoe meshes using the collision system. the onCollide function is triggered when a mesh collides using this method.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SuperPudding","Date":"2016-04-25T13:55:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18969-eboo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18969_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18969-eboo/_qt_ rel_eq__qt__qt__gt_@eboo_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHello again_co_ I_t_ve left this problem aside for a while but it_t_s time I found a solution._lt_br /_gt_\n\tI can_t_t get my head around the implementation of collision response in babylon. Most tutorials aren_t_t very clear and everything I have tried so far hasn_t_t worked like I meant it to.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI really need someone to explain this to me_co_ and possibly point me to a working playground._lt_br /_gt_\n\tJust to be clear I_t_m trying to program mesh-mesh collisions_co_ not camera-mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I really want to do is find an impulse based model. I found a page on Wikipedia called _qt_collision response_qt_ that explained it really well_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_table border_eq__qt_0_qt_ style_eq__qt_font-size_dd_14px_sm_color_dd_rgb(37_co_37_co_37)_sm_font-family_dd_sans-serif_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt_ width_eq__qt_100%_qt__gt__lt_tbody_gt__lt_tr_gt__lt_td align_eq__qt_center_qt_ width_eq__qt_34%_qt__gt_\n\t\t\t\t_lt_p_gt_\n\t\t\t\t\t_lt_img alt_eq__qt_j_r _eq_ \\frac { -(1+e) \\mathbf{v}_r \\cdot \\mathbf{\\hat{n}} } { {m_1}^{-1} + {m_2}^{-1} + ({\\mathbf{I}_1}^{-1} (\\mathbf{r}_1 \\times \\mathbf{\\hat{n}} ) \\times \\mathbf{r}_1 + {\\mathbf{I}_2}^{-1} (\\mathbf{r}_2 \\times \\mathbf{\\hat{n}} ) \\times \\mathbf{r}_2) \\cdot \\mathbf{\\hat{n}} }_qt_ src_eq__qt_https_dd_//upload.wikimedia.org/math/a/f/9/af9c5d7c7adbe0a48a584de0b5cbb794.png_qt_ style_eq__qt_border_dd_none_sm_vertical-align_dd_middle_sm__qt_ /_gt__lt_/p_gt_\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_/tbody_gt__lt_/table_gt__lt_p_gt_\n\t_lt_br /_gt_\n\tI have most of the variables here_co_ what I really need is a way to know when two meshes collide_co_ and to get their point of contact.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m willing to take any other suggestion_co_ this way might not even be doable._lt_br /_gt_\n\tI tried a lot and nothing worked so far (for example I tried using the _qt_onCollide_qt_ callback and it didn_t_t fire at all)._lt_br /_gt_\n\tAnyone with a working playground?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-04-26T12:34:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tInstead of implementing complicated mathematical collision systems_co_ why not give a physics engine a try? They actually have impulse-based colliders.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn this case you will need to disable the internal collision system_co_ and enable one of the physics engines integrated in babylon.js. Read the getting started tutorial_co_ see if it fits your needs - _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/Using_The_Physics_Engine_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/Using_The_Physics_Engine_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SuperPudding","Date":"2016-04-28T12:45:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe project I_t_m trying to build is a simulator for simple physical phenomena. I want it to be as mathematically accurate as possible_co_ that_t_s why my first choise was this model.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I_t_ve looked at the tutorial for the physics engine and it looks great_co_ I just have a few questions_dd__lt_br /_gt_\n\t1. Is there a way to enable only the collision response? (I already have everything else working and having to switch to the engine would require quite a lot of work)_lt_br /_gt_\n\t2. Can I only get the new velocities after a collision and assign them myself instead of the engine doing it automatically? (Again_co_ I have many working property updates done using timers and registerBeforeRender and I_t_m afraid of changing too much.)_lt_br /_gt_\n\t3. Can I set the center of mass of an object manually? Is there a way to move it from it_t_s geometric center?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy main problem with an external engine is that it does _qt_too much_qt_ of the work for me. It_t_s a great thing but I already have kind of a physics engine I created myself (which was part of the goal of my project)_co_ and messing with that now that I_t_m close to finishing could take a lot of work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf it were possible to do the things I asked about it would be an easy solution for me._lt_br /_gt_\n\tThanks in advance\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SuperPudding","Date":"2016-04-28T16:12:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI feel like this is too complicated. I_t_ve been trying things in the playground for hours._lt_br /_gt_\n\tAll I really need is collision detection_co_ not even the response._lt_br /_gt_\n\tI want to know when and where meshes intersect. Cannon.js is definitely capable of providing this information but I don_t_t know how to get it specifically.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne of my problems is that the engine assumes the center of mass of the body is the same as mesh.position_co_ which is not always true in my project._lt_br /_gt_\n\tAnother one is that it assumes there is air resistance (it slows down objects without them colliding with anything).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not even sure it_t_s worth integrating a physics engine just for collision detection._lt_br /_gt_\n\tI am really looking for a way to do that manually but after weeks of searching I still haven_t_t found how.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy the way I_t_m sorry if I_t_m bothering you _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ but you have been great help before and I_t_m really short on time with those collisions.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-04-28T16:39:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ I_t_ll be on my desktop in a few hours only_co_ but a few points_co_ as always _dd__lt_span style_eq__qt_line-height_dd_1.6_sm__qt__gt_)_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_line-height_dd_1.6_sm__qt__gt_the physics engine actually has no air resistance. A new velocity is calculated only when bodies collide. You can fake air resistance_co_ but it_t_s off per default as far as I remember._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_line-height_dd_1.6_sm__qt__gt_Physics engines are able to provide you with all of the things you needed and more. To do that you will have to interface directly with the physics engine_co_ as this is not the scope of the Babylon plugin system._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_line-height_dd_1.6_sm__qt__gt_I_t_m not sure what you mean with collision only. You don_t_t want the body to change velocities? Just detect collisions? Cannon collision groups might be helpful_co_ but I_t_m not really sure as I have never tested......._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_line-height_dd_1.6_sm__qt__gt_if you need collision only_co_ constantly check for intersection using the mesh.intersects function. Would that be enough? This way you have no external system disturbing your calculations._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SuperPudding","Date":"2016-04-28T16:59:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I say I want detection only I mean that I want to set the new velocities myself. This is because I already have a lot of physics that I created manually (again_co_ I know it_t_s probably not as good as an external engine but the whole point of my project was to create the physics myself).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe use of a physics engine for that seems complicated to me because it_t_s doing a lot of things automatically and those things interfere with the physics I already have.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe Idea of checking for intersection without an external engine is what I wanted to do from the beginning_co_ it_t_s simpler._lt_br /_gt_\n\tMy problem with this method is that I don_t_t know how to get the point of intersection (not just a boolean about the intersection happening but also where it_t_s happening)._lt_br /_gt_\n\tI actually wrote about this in earlier comments on this topic._lt_br /_gt_\n\tIf it_t_s not possible to get it directly I_t_ve had an idea about dividing meshes into submeshes and intersecting them but I don_t_t know if that is possible as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother reason I looked into submeshes is to make the detection more accurate (if I check intersection for a whole mesh I get a bounding box that is usually very inaccurate).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the end my problems are from lack of experience and knowledge about Babylon. In many cases I just don_t_t know if what I want to do is possible and where to find it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnrelated to the rest_dd_ If there is not supposed to be air resistance defaultly in Cannon.js then there seem to be a problem_co_ because it lowers the speed of bodies slowly as they move even when they don_t_t collide with anything (I put an alert of the velocity inside the registerBeforeRender() function to check that).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SuperPudding","Date":"2016-04-28T17:18:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI feel like my previous comment was a bit messy so I_t_ll dedicate this one to my problems_co_ without rambling about the rest_dd_\n_lt_/p_gt_\n\n_lt_ol_gt__lt_li_gt_\n\t\tI need to know when a collision happens_co_ and that is solved with _qt_mesh.intersectsMesh()_qt__co_ but quite inaccurately.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tI need to know where a collision happens (a vector3). I still wasn_t_t able to solve this and that is my main problem.\n\t_lt_/li_gt_\n_lt_/ol_gt__lt_p_gt_\n\t_lt_br /_gt_\n\tAn idea I had for making checking intersections more accurately and for finding an approximate intersection point is using submeshes._lt_br /_gt_\n\tMy idea for an algorithm was_dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tChecking intersection between two meshes.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tIf they intersect_co_ deviding each mesh into 2 submeshes and checking which half of the first mesh intersect which half of the second mesh.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tIf any submeshes intersect_co_ deviding those submeshes further and checking intersection again.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tThis is to be repeated until the desired accuracy has been achived.\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\tThis method will create smaller and smaller bounding boxes_co_ which will create a more accurate detection._lt_br /_gt_\n\tAnother thing it will do is narrow down the volume in which the intersection point can be (in the desired level of accuracy I can just take the position of the submesh as the point of intersection).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just don_t_t know if it_t_s possible to access the properties of submeshes like you would for normal meshes_co_ and if it is I don_t_t know how to do it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOf course_co_ I_t_m open for other ideas for how to do this_co_ but I would really like some feedback about this one (no one commented about it when I mentioned it previously).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SuperPudding","Date":"2016-05-25T16:50:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf anyone is looking at this for help_co_ I haven_t_t managed to pull this off._lt_br /_gt_\n\tI_t_ve built an algorithm for approximately finding the point of intersection of two meshes (using my submesh idea)_co_ and for calculationg the impulse acting on them_co_ but no matter what I_t_ve tried the approximations have never been good enough_co_ it still looks strange.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInspite of that I do have a solution that mostly lets me keep my own physiscs engine_dd__lt_br /_gt_\n\tI check in each frame if the meshes are colliding using _qt_mesh.intersectsMesh(otherMesh)_qt__co_ if they do_co_ I disable my local physics and enable Cannon.js for these particular meshses._lt_br /_gt_\n\tAfter they seperate I perform the reverse procedure.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I consider this topic closed._lt_br /_gt_\n\tThanks for everyone that helped me_co_ especially _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt__co_ I trully appreciate it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MrVR","Date":"2017-03-31T16:02:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24012_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/_qt_ rel_eq__qt__qt__gt_@MackeyK24_lt_/a_gt_ to delete the mesh I use this \n_lt_/p_gt_\n\n_lt_div_gt_\n\t_lt_div style_eq__qt_color_dd_rgb(248_co_248_co_242)_sm__qt__gt_\n\t\t_lt_span style_eq__qt_color_dd_#d35400_sm__qt__gt_this.manager.safeDestroy(this.mesh)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div style_eq__qt_color_dd_rgb(248_co_248_co_242)_sm__qt__gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_font color_eq__qt_#000000_qt__gt_but how to apply it to the collision system if I want to make the function safeDestroy () execute in the call back or what actions should I use?_lt_/font_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_pre_gt_\n_lt_code_gt_   public start()_dd_ void {\n            \n            // The trigger is OnIntersectionEnterTrigger\n            this.mesh.actionManager _eq_  new BABYLON.ActionManager(this.scene)_sm_\n            var sphere _eq_ this.scene.getMeshByName(_t_sphere_t_)_sm_\n            var triggerOptions _eq_ { trigger_dd_ BABYLON.ActionManager.OnIntersectionEnterTrigger_co_ parameter_dd_sphere}_sm_\n            \n            var action _eq_ new BABYLON.SetValueAction(triggerOptions_co_ this.manager_co_ _t_safeDestroy_t__co_this.mesh)_sm_\n            this.mesh.actionManager.registerAction(action)_sm_                     \n        }\n\n\n// or maybe this will do it\n\n export class ExecuteCodeAction extends Action {\n        constructor(triggerOptions_dd_ any_co_ public func_dd_ (evt_dd_ ActionEvent) _eq_&gt_sm_ void_co_ condition?_dd_ Condition) {\n            super(triggerOptions_co_ condition)_sm_\n        }\n\n        public execute(evt_dd_ ActionEvent)_dd_ void {\n            this.func(evt)_sm_\n        }\n    }_lt_/code_gt__lt_/pre_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-04-07T10:49:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_169299_qt_ data-ipsquote-contentid_eq__qt_21339_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1490976177_qt_ data-ipsquote-userid_eq__qt_24197_qt_ data-ipsquote-username_eq__qt_MrVR_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 3/31/2017 at 6_dd_02 AM_co_ MrVR said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24012_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/_qt_ rel_eq__qt__qt__gt_@MackeyK24_lt_/a_gt_ to delete the mesh I use this \n\t\t_lt_/p_gt_\n\n\t\t_lt_div_gt_\n\t\t\t_lt_div style_eq__qt_color_dd_rgb(248_co_248_co_242)_sm__qt__gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#d35400_sm__qt__gt_this.manager.safeDestroy(this.mesh)_sm__lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div style_eq__qt_color_dd_rgb(248_co_248_co_242)_sm__qt__gt_\n\t\t\t\t \n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_font color_eq__qt_#000000_qt__gt_but how to apply it to the collision system if I want to make the function safeDestroy () execute in the call back or what actions should I use?_lt_/font_gt_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t \n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_pre_gt_\n\n_lt_code_gt_   public start()_dd_ _lt_span_gt_void_lt_/span_gt_ {\n            \n            _lt_span_gt_//_lt_/span_gt_ The trigger _lt_span_gt_is_lt_/span_gt_ OnIntersectionEnterTrigger\n            _lt_span_gt_this_lt_/span_gt_.mesh.actionManager _eq_  _lt_span_gt_new_lt_/span_gt_ BABYLON.ActionManager(_lt_span_gt_this_lt_/span_gt_.scene)_sm_\n            _lt_span_gt_var_lt_/span_gt_ sphere _eq_ _lt_span_gt_this_lt_/span_gt_.scene.getMeshByName(_lt_span_gt__t_sphere_t__lt_/span_gt_)_sm_\n            _lt_span_gt_var_lt_/span_gt_ triggerOptions _eq_ { _lt_span_gt_trigger_lt_/span_gt__dd_ BABYLON.ActionManager.OnIntersectionEnterTrigger_co_ _lt_span_gt_parameter_lt_/span_gt__dd_sphere}_sm_\n            \n            _lt_span_gt_var_lt_/span_gt_ action _eq_ _lt_span_gt_new_lt_/span_gt_ BABYLON.SetValueAction(triggerOptions_co_ _lt_span_gt_this_lt_/span_gt_.manager_co_ _lt_span_gt__t_safeDestroy_t__lt_/span_gt__co__lt_span_gt_this_lt_/span_gt_.mesh)_sm_\n            _lt_span_gt_this_lt_/span_gt_.mesh.actionManager.registerAction(action)_sm_                     \n        }\n\n\n_lt_span_gt_//_lt_/span_gt_ _lt_span_gt_or_lt_/span_gt_ maybe _lt_span_gt_this_lt_/span_gt_ will _lt_span_gt_do_lt_/span_gt_ it\n\n _lt_span_gt_export_lt_/span_gt_ _lt_span_gt__lt_span_gt_class_lt_/span_gt_ _lt_span_gt_ExecuteCodeAction_lt_/span_gt_ _lt_span_gt_extends_lt_/span_gt_ _lt_span_gt_Action_lt_/span_gt_ {_lt_/span_gt_\n        constructor_lt_span_gt__lt_span_gt_(triggerOptions_dd_ any_co_ public func_dd_ (evt_dd_ ActionEvent) _eq_&gt_sm_ _lt_span_gt_void_lt_/span_gt__co_ condition?_dd_ Condition)_lt_/span_gt_ {\n            _lt_span_gt_super_lt_/span_gt__lt_span_gt_(triggerOptions_co_ condition)_lt_/span_gt__sm_\n        }\n\n        _lt_span_gt_public_lt_/span_gt_ _lt_span_gt_execute_lt_/span_gt__lt_span_gt_(evt_dd_ ActionEvent)_lt_/span_gt__dd_ _lt_span_gt_void_lt_/span_gt_ {\n            _lt_span_gt_this_lt_/span_gt_._lt_span_gt_func_lt_/span_gt__lt_span_gt_(evt)_lt_/span_gt__sm_\n        }\n    }_lt_/span_gt__lt_/code_gt__lt_/pre_gt_\n\t\t\t_lt_/div_gt_\n\t\t_lt_/div_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is already a API in the scene Manager to handle intersections _dd_ this.setIntersectionMeshes then can use this.OnIntersectionEnter and this.OnIntersectionStay and this.OnIntersectionExit...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will list some of Space Shoot example script that show the usage in more detail.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-04-07T10:54:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24197-mrvr/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24197_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24197-mrvr/_qt_ rel_eq__qt__qt__gt_@MrVR_lt_/a_gt_ ... Take a look_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_/* Babylon Mesh Component Template */\n/* &lt_sm_reference path_eq__qt_{*path*}/Assets/Babylon/Library/babylon.d.ts_qt_ /&gt_sm_ */\n\nmodule PROJECT {\n    export class AsteroidController extends BABYLON.MeshComponent {\n\n        private asteroidName_dd_string_sm_\n        private asteroidInstance_dd_BABYLON.InstancedMesh_sm_\n\n        public start() _dd_void {\n            // Detail Mesh Instance\n            this.asteroidInstance _eq_ SceneController.MasterAsteroid.createInstance(SceneController.MasterAsteroid.name + _qt_._qt_ + this.mesh.name)_sm_\n            this.asteroidInstance.position _eq_ BABYLON.Vector3.Zero()_sm_\n            this.asteroidInstance.parent _eq_ this.mesh_sm_\n\n            // Boundry Exit            \n            this.asteroidName _eq_ this.mesh.name_sm_\n            this.setIntersectionMeshes([SceneController.ShotBoundry])_sm_\n            this.onIntersectionExit _eq_ (collider_dd_BABYLON.AbstractMesh) _eq_&gt_sm_ {\n                if (this.mesh !_eq_ null &amp_sm_&amp_sm_ collider.name _eq__eq__eq_ _qt_Boundry_qt_) {\n                    //console.log(_qt__eq__eq__eq_&gt_sm_ Asteroid Exiting Boundry_dd_ _qt_ + this.asteroidName)_sm_\n                    this.manager.safeDestroy(this.mesh)_sm_\n                }\n            }_sm_\n           \n            // Asteroid movement\n            if (this.mesh.physicsImpostor !_eq_ null) {\n                var speed_dd_number _eq_ this.getProperty(_qt_moveSpeed_qt__co_ -1)_sm_\n                var tumble_dd_number _eq_ this.getProperty(_qt_tumbleRate_qt__co_ 1)_sm_\n                this.mesh.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0_co_ 0_co_ (1 * speed)))_sm_\n                this.mesh.physicsImpostor.setAngularVelocity(new BABYLON.Vector3(this.manager.randomNumber(0_co_ 1) * tumble_co_ this.manager.randomNumber(0_co_ 1) * tumble_co_ this.manager.randomNumber(0_co_ 1) * tumble))_sm_\n            }\n        }\n\n        public destroy()_dd_void {\n            if (this.asteroidInstance !_eq_ null){\n                this.asteroidInstance.dispose()_sm_\n                this.asteroidInstance _eq_ null_sm_\n            }\n            //console.log(_qt__eq__eq__eq_&gt_sm_ Destroyed asteroid_dd_ _qt_ + this.asteroidName)_sm_\n        }\n    }\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote this part_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_          this.setIntersectionMeshes([SceneController.ShotBoundry])_sm_\n            this.onIntersectionExit _eq_ (collider_dd_BABYLON.AbstractMesh) _eq_&gt_sm_ {\n                if (this.mesh !_eq_ null &amp_sm_&amp_sm_ collider.name _eq__eq__eq_ _qt_Boundry_qt_) {\n                    //console.log(_qt__eq__eq__eq_&gt_sm_ Asteroid Exiting Boundry_dd_ _qt_ + this.asteroidName)_sm_\n                    this.manager.safeDestroy(this.mesh)_sm_\n                }\n            }_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEasy Peezy _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]