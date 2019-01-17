[{"Owner":"Stalker","Date":"2015-11-02T22:14:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ Hi!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I successful rigged and animated a model in Blender and exported it to .babylon format._lt_/p_gt__lt_p_gt_After loading and running everything_co_ the results is not what I expected. A running demo _lt_a href_eq__qt_http_dd_//plnkr.co/edit/OowtQ6OlNp0cTxg5zx2X_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_ on plunker (press run to start_co_ and detach a window to be able to move). It should be a single step where all of the parts hold together (as it can be seen in Blender)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I also attached a Blender file for example above._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_After experimenting a bit I_t_d say that the problem lies in inverse kinematics_co_ but can_t_t confirm that._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Has anyone experienced such problem? What causes it and the way to solve it?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_5484_qt__gt_Robot.zip_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-11-03T00:00:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Welcome to the BJS forum stalker_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_i_t_ll take a look stalker see if I can find any issues._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stalker","Date":"2015-11-03T08:08:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks!_lt_br_gt__lt_br_gt_please let me know if you succeed or not_co_ just so that I know how doomed am I _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_._lt_/p_gt__lt_p_gt_Otherwise entire idea is that rig is controlled via handles (small circle at an ankle at a example). I_t_m currently going through actions and dope sheet_co_ to see if any actions might overlap causing this strange movement (and a tutorial just in case I didn_t_t screw up anything in Blender)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mikhluz","Date":"2015-11-03T11:27:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m not so familiar with babylon.js_co_ but may be you need to rebake you IK animation into direct animation? Also_co_ if you are using blender may be it will more comfortable to use _lt_a href_eq__qt_http_dd_//blend4web.com_qt_ rel_eq__qt_external nofollow_qt__gt_Blend4Web_lt_/a_gt_ engine_co_ it allow you to export your model dircetly from the blender to the webgl engine without converting into another format. There_t_s also you can find some tools for baking IK animation into direct animation and so on._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-03T15:21:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I disagree with Mikhluz_dd_) we have an excellent Blender exporter and I do not think that Blend4Web has the same goal than Babylon.js._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stalker","Date":"2015-11-03T18:55:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Blend4Web looks like a cool project_co_ but I share my opinion with Delkatosh - seems like a different goal (not primary game oriented)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_After a day figuring out what the problem might be I found out that the problem is in Blender as the _qt_bug_qt_ can be recreated in it._lt_/p_gt__lt_p_gt_I recreated all of the handles_co_ linked to Inverse Kinematics bone modifiers_co_ reanimated and it works (for now). But am still interested what went front the first time_co_ because I did everything exactly the same (not exactly I guess)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-11-03T19:47:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well stalker_co_ is this what you are looking for?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/stalker/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_Robot_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2015-11-03T20:04:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I cannot export my scene from Blender to babylon_co_ (animated rig with IK too)._lt_/p_gt__lt_p_gt_I don_t_t know yet what to do with this... A bit similar problem._lt_/p_gt__lt_p_gt__qt_ recipe _eq_ BakingRecipe(object) _qt__lt_/p_gt__lt_p_gt_Looks like something about baking animation_co_ but I don_t_t have a clue - yet._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Log_dd__lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_Exporter version_dd_ 3.0.0_co_ Blender version_dd_ 2.75 (sub 0)_eq__eq__eq__eq__eq__eq__eq__eq__eq_ Conversion from Blender to Babylon.js _eq__eq__eq__eq__eq__eq__eq__eq__eq_Python World class constructor completedprocessing begun of skeleton_dd_  Armature_co_ id_dd_  0processing begun of bone_dd_  elbowR_co_ index_dd_  0animation begun of bone_dd_  elbowRprocessing begun of bone_dd_  kneeR_co_ index_dd_  1animation begun of bone_dd_  kneeRprocessing begun of bone_dd_  legIKR_co_ index_dd_  2animation begun of bone_dd_  legIKRprocessing begun of bone_dd_  footR_co_ index_dd_  3animation begun of bone_dd_  footRprocessing begun of bone_dd_  armIKR_co_ index_dd_  4animation begun of bone_dd_  armIKRprocessing begun of bone_dd_  elbowL_co_ index_dd_  5animation begun of bone_dd_  elbowLprocessing begun of bone_dd_  kneeL_co_ index_dd_  6animation begun of bone_dd_  kneeLprocessing begun of bone_dd_  legIKL_co_ index_dd_  7animation begun of bone_dd_  legIKLprocessing begun of bone_dd_  footL_co_ index_dd_  8animation begun of bone_dd_  footLprocessing begun of bone_dd_  armIKL_co_ index_dd_  9animation begun of bone_dd_  armIKLprocessing begun of bone_dd_  fsceIK_co_ index_dd_  10animation begun of bone_dd_  fsceIKprocessing begun of bone_dd_  hip_co_ index_dd_  11animation begun of bone_dd_  hipprocessing begun of bone_dd_  upperlegR_co_ index_dd_  12animation begun of bone_dd_  upperlegRprocessing begun of bone_dd_  lowerlegR_co_ index_dd_  13animation begun of bone_dd_  lowerlegRprocessing begun of bone_dd_  chest_co_ index_dd_  14animation begun of bone_dd_  chestprocessing begun of bone_dd_  head_co_ index_dd_  15animation begun of bone_dd_  headprocessing begun of bone_dd_  upperarmR_co_ index_dd_  16animation begun of bone_dd_  upperarmRprocessing begun of bone_dd_  lowerarmR_co_ index_dd_  17animation begun of bone_dd_  lowerarmRprocessing begun of bone_dd_  handR_co_ index_dd_  18animation begun of bone_dd_  handRprocessing begun of bone_dd_  upperlegL_co_ index_dd_  19animation begun of bone_dd_  upperlegLprocessing begun of bone_dd_  lowerlegL_co_ index_dd_  20animation begun of bone_dd_  lowerlegLprocessing begun of bone_dd_  upperarmL_co_ index_dd_  21animation begun of bone_dd_  upperarmLprocessing begun of bone_dd_  lowerarmL_co_ index_dd_  22animation begun of bone_dd_  lowerarmLprocessing begun of bone_dd_  handL_co_ index_dd_  23animation begun of bone_dd_  handLprocessing complete of skeleton_dd_  Armatureprocessing begun of mesh_dd_  archerprocessing begun of baked material_dd_  archerInternal baking texture_co_ type_dd_ TEXTURE_co_ mapped using_dd_ BakingUVnum positions      _dd_  2448num normals        _dd_  2448num uvs            _dd_  4896num uvs2           _dd_  0num colors         _dd_  0num indices        _dd_  2448num skeletonWeights_dd_  9792num skeletonIndices_dd_  9792processing begun of mesh_dd_  kopeny_eq__eq__eq__eq__eq__eq__eq__eq__eq_ An error was encountered _eq__eq__eq__eq__eq__eq__eq__eq__eq_  File _qt_X_dd_\\programfiles\\blender\\2.75\\scripts\\addons\\io_export_babylon.py_qt__co_ line 287_co_ in execute    mesh _eq_ Mesh(object_co_ scene_co_ nextStartFace_co_ forcedParent_co_ nameID_co_ self)  File _qt_X_dd_\\programfiles\\blender\\2.75\\scripts\\addons\\io_export_babylon.py_qt__co_ line 687_co_ in __init__    recipe _eq_ BakingRecipe(object)  File _qt_X_dd_\\programfiles\\blender\\2.75\\scripts\\addons\\io_export_babylon.py_qt__co_ line 1602_co_ in __init__    self.billboardMode _eq_ BILLBOARDMODE_ALL if len(mesh.material_slots) _eq__eq_ 1 and mesh.material_slots[0].material.game_settings.face_orientation _eq__eq_ _t_BILLBOARD_t_ else BILLBOARDMODE_NONEERROR_dd_  _t_NoneType_t_ object has no attribute _t_game_settings_t__eq__eq__eq__eq__eq__eq__eq__eq__eq_ end of processing _eq__eq__eq__eq__eq__eq__eq__eq__eq_elapsed time_dd_  0 min_co_ 5.2462 secs_lt_/pre_gt__lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_5499_qt__gt_ijasz1.zip_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-11-03T20:39:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You have some really strange meshes in this .blend.  Nothing even appears on the materials property tab when you select the kopeny_co_ fej_co_ or test meshes.  I deleted them.  It ran.  Here is a log run on an unreleased version of the exporter_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_      Exporter version_dd_ 4.0.0_co_ Blender version_dd_ 2.75 (sub 0)      _eq__eq__eq__eq__eq__eq__eq__eq__eq_ Conversion from Blender to Babylon.js _eq__eq__eq__eq__eq__eq__eq__eq__eq_      \tScene settings used_dd_      \t\tselected layers only_dd_  false      \t\tno vertex optimization_dd_  false      \t\tinline textures_dd_  false00_dd_00 \tPython World class constructor completed00_dd_00 \tprocessing begun of skeleton_dd_  Armature_co_ id_dd_  000_dd_00 \t\tprocessing begun of bone_dd_  elbowR_co_ index_dd_  000_dd_00 \t\t\tanimation begun of bone_dd_  elbowR00_dd_00 \t\tprocessing begun of bone_dd_  kneeR_co_ index_dd_  100_dd_00 \t\t\tanimation begun of bone_dd_  kneeR00_dd_00 \t\tprocessing begun of bone_dd_  legIKR_co_ index_dd_  200_dd_00 \t\t\tanimation begun of bone_dd_  legIKR00_dd_00 \t\tprocessing begun of bone_dd_  footR_co_ index_dd_  300_dd_00 \t\t\tanimation begun of bone_dd_  footR00_dd_00 \t\tprocessing begun of bone_dd_  armIKR_co_ index_dd_  400_dd_00 \t\t\tanimation begun of bone_dd_  armIKR00_dd_00 \t\tprocessing begun of bone_dd_  elbowL_co_ index_dd_  500_dd_00 \t\t\tanimation begun of bone_dd_  elbowL00_dd_00 \t\tprocessing begun of bone_dd_  kneeL_co_ index_dd_  600_dd_00 \t\t\tanimation begun of bone_dd_  kneeL00_dd_00 \t\tprocessing begun of bone_dd_  legIKL_co_ index_dd_  700_dd_00 \t\t\tanimation begun of bone_dd_  legIKL00_dd_00 \t\tprocessing begun of bone_dd_  footL_co_ index_dd_  800_dd_00 \t\t\tanimation begun of bone_dd_  footL00_dd_00 \t\tprocessing begun of bone_dd_  armIKL_co_ index_dd_  900_dd_00 \t\t\tanimation begun of bone_dd_  armIKL00_dd_00 \t\tprocessing begun of bone_dd_  fsceIK_co_ index_dd_  1000_dd_00 \t\t\tanimation begun of bone_dd_  fsceIK00_dd_00 \t\tprocessing begun of bone_dd_  hip_co_ index_dd_  1100_dd_00 \t\t\tanimation begun of bone_dd_  hip00_dd_00 \t\tprocessing begun of bone_dd_  upperlegR_co_ index_dd_  1200_dd_00 \t\t\tanimation begun of bone_dd_  upperlegR00_dd_00 \t\tprocessing begun of bone_dd_  lowerlegR_co_ index_dd_  1300_dd_00 \t\t\tanimation begun of bone_dd_  lowerlegR00_dd_00 \t\tprocessing begun of bone_dd_  chest_co_ index_dd_  1400_dd_00 \t\t\tanimation begun of bone_dd_  chest00_dd_00 \t\tprocessing begun of bone_dd_  head_co_ index_dd_  1500_dd_00 \t\t\tanimation begun of bone_dd_  head00_dd_00 \t\tprocessing begun of bone_dd_  upperarmR_co_ index_dd_  1600_dd_00 \t\t\tanimation begun of bone_dd_  upperarmR00_dd_00 \t\tprocessing begun of bone_dd_  lowerarmR_co_ index_dd_  1700_dd_00 \t\t\tanimation begun of bone_dd_  lowerarmR00_dd_00 \t\tprocessing begun of bone_dd_  handR_co_ index_dd_  1800_dd_00 \t\t\tanimation begun of bone_dd_  handR00_dd_00 \t\tprocessing begun of bone_dd_  upperlegL_co_ index_dd_  1900_dd_00 \t\t\tanimation begun of bone_dd_  upperlegL00_dd_00 \t\tprocessing begun of bone_dd_  lowerlegL_co_ index_dd_  2000_dd_00 \t\t\tanimation begun of bone_dd_  lowerlegL00_dd_00 \t\tprocessing begun of bone_dd_  upperarmL_co_ index_dd_  2100_dd_00 \t\t\tanimation begun of bone_dd_  upperarmL00_dd_00 \t\tprocessing begun of bone_dd_  lowerarmL_co_ index_dd_  2200_dd_00 \t\t\tanimation begun of bone_dd_  lowerarmL00_dd_00 \t\tprocessing begun of bone_dd_  handL_co_ index_dd_  2300_dd_00 \t\t\tanimation begun of bone_dd_  handL00_dd_00 \tprocessing complete of skeleton_dd_  Armature00_dd_00 \tprocessing begun of mesh_dd_  archer00_dd_00 \t\tprocessing begun of Standard material_dd_  Material00_dd_00 \tprocessing begun of mesh_dd_  archer00_dd_00 \t\tnum positions      _dd_  244800_dd_00 \t\tnum normals        _dd_  244800_dd_00 \t\tnum uvs            _dd_  000_dd_00 \t\tnum uvs2           _dd_  000_dd_00 \t\tnum colors         _dd_  000_dd_00 \t\tnum indices        _dd_  244800_dd_00 \t\tSkeleton stats_dd_  00_dd_00 \t\t\tTotal Influencers_dd_  373400_dd_00 \t\t\tAvg # of influencers per vertex_dd_  1.525300_dd_00 \t\t\tHighest # of influencers observed_dd_  400_dd_00 \t\t\texported as 4 influencers00_dd_00 \t\t\tCompute bones using shaders_dd_  true00_dd_00 \t\t\tnum skeletonWeights_dd_  979200_dd_00 \t\t\tnum skeletonIndices_dd_  979200_dd_00 \tprocessing begun of camera (FreeCamera)_dd_  Camera00_dd_00 \tprocessing begun of light (HEMI)_dd_  Hemi00_dd_00 \tprocessing begun of light (SUN)_dd_  Lamp00_dd_00 _eq__eq__eq__eq__eq__eq__eq__eq__eq_ Writing of javascript file started _eq__eq__eq__eq__eq__eq__eq__eq__eq_00_dd_00 _eq__eq__eq__eq__eq__eq__eq__eq__eq_ Writing of javascript file completed _eq__eq__eq__eq__eq__eq__eq__eq__eq_00_dd_00 _eq__eq__eq__eq__eq__eq__eq__eq__eq_ end of processing _eq__eq__eq__eq__eq__eq__eq__eq__eq_00_dd_00 elapsed time_dd_  0 min_co_ 4.044 secs_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2015-11-03T20:56:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you very much!_lt_/p_gt__lt_p_gt_Runs without problems._lt_/p_gt__lt_p_gt_Those meshes had modifiers_co_ not applied _eq_ source of other mesh._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stalker","Date":"2015-11-03T21:16:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_104073_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_18329_qt_ data-ipsquote-username_eq__qt_gryff_qt_ data-cite_eq__qt_gryff_qt_ data-ipsquote-timestamp_eq__qt_1446580032_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Well stalker_co_ is this what you are looking for?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/stalker/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_Robot_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yes! Did you delete animation and recreate or just fix something?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-11-04T02:15:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_Did you delete animation and recreate or just fix something?_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I just applied some fixes. However_co_ some of them I think are not needed so I_t_m trying various combos to try to get the minimum number of steps. Hopefully_co_ I will be able to give you a step by step guide tomorrow._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-11-04T17:27:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_OK stalker_co_ as promised_co_ I have slimmed down the number of steps for fixing your robot leg. You can find the files I started with and finished up with _lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/stalker/robot1.zip_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_._lt_br_gt__lt_br_gt_The start file is your file but I have removed the _qt_Area_qt_ light (not supported by BJS) and added a _qt_Hemi_qt_ light instead_co_ added a ground plane_co_ and then I just rearranged the Blender interface a little. So best if you use my start file - but you can use yours if you want._lt_br_gt__lt_br_gt_Step 1._lt_br_gt_a.) If you use your file_co_ make sure that the 3D cursor is at the _qt_origin_qt_. Mouse cursor in the 3D window then _qt_Shift + C keys_qt_ will put the cursor  it at 0_co_0_co_0._lt_br_gt_b.) Open the 3D window _qt_Properties_qt_ panel - the mouse cursor still in the 3D window and hit the _qt_N key_qt_._lt_br_gt__lt_br_gt_Step 2._lt_br_gt_a.) Select the _qt_Robot_qt_ (the mesh) in the Object Mode and look in the _qt_Properties_qt_ panel you will see that the _qt_Location_qt_ values (x_co_y_co_z) are not zero_co_ so with the Robot still selected go_dd__lt_br_gt__lt_u_gt_Object -&gt_sm_ Transform -&gt_sm_ Origin to 3D Cursor_lt_/u_gt_. This will zero the location values._lt_br_gt_b.) Now select the _qt_Robot.Armature_qt_. Again you will see that the _qt_Location_qt_ values are not zero_co_ so again  _lt_u_gt_Object -&gt_sm_ Transform -&gt_sm_ Origin to 3D Cursor_lt_/u_gt_._lt_br_gt_c.) You will also notice that the Scale values for the armature are not 1_co_ so with the armature still selected go _lt_u_gt_Object -&gt_sm_ Apply -&gt_sm_ Scale_lt_/u_gt_._lt_br_gt__lt_br_gt_I know not much seems to have changed_co_ but you would not be the first person on this forum to see the chaos that hits the export of animations to BJS when the Location_co_ Rotation and Scale values of the armature and mesh are different._lt_br_gt__lt_br_gt_Step 3._lt_br_gt_Now to create a frame animation for the armature as currently with the IK setup the _qt_Circle_qt_ constraint is being animated and it in turn moves the armature in Blender - so we have to _qt_bake_qt_ out the frames for the armature itself._lt_br_gt__lt_br_gt_a.) Select the _qt_Robot.Armature_qt_ and go into _qt_Pose Mode_qt_._lt_br_gt_b.) Make sure _lt_u_gt_ALL_lt_/u_gt_ the bones are selected then -_lt_br_gt_c.) From the menu bar for the 3D window - _lt_u_gt_Pose -&gt_sm_ Animation -&gt_sm_ Bake Action_lt_/u_gt_ and a little box pops up_lt_br_gt_d.) Make sure that the three boxes _qt__lt_em_gt_Only Selected_co_ Visual Keying_co_ and Clear Constraints_lt_/em_gt__qt_ are all checked (a little tick). And hit the OK button._lt_br_gt__lt_br_gt_You will see 24 frames appear in the _qt_Timeline and Action Editor_qt_ and _qt_Action_qt_ appear as the name of the new animation that has been created. That is the animation we want. Make sure it appears in that box when you export to BJS._lt_br_gt__lt_br_gt_Step 4._lt_br_gt_Now we need to bind that animation to the mesh._lt_br_gt_a.) Select the Robot (mesh) and then _lt_u_gt_Shift + Select _lt_/u_gt_the Robot.Armature and with the mouse in the 3D window_lt_br_gt_b.) _lt_u_gt_CTRL + P_lt_/u_gt_ - to make the armature the parent of the mesh. Use the _qt__lt_u_gt_Use Automatic Weights_lt_/u_gt__qt_ option._lt_br_gt__lt_br_gt_Step 5._lt_br_gt_a.) Select the _qt_Circle_qt_ and delete it._lt_br_gt_b.) And if you wish clean out all the other animations making sure to return to the new animation - _qt_Action_qt_ - you created as the chosen named animation. It will work without doing this - but it always feels better if unused stuff is cleared out._lt_br_gt__lt_br_gt_Now export your animated leg._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is the _lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/stalker/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_Animated Leg_lt_/a_gt_ exported from the finished file you will find in the .zip file above. It uses an ArcRotate camera - so you can examine it._lt_br_gt__lt_br_gt_Looking at your file_co_ I get the feeling the _qt_leg_qt_ is part of a bigger project (all those vertex groups like head and arm etc.). All the above should work fine on a whole robot though you may have a lot more _t_Circle_qt_ constraints to delete._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Please don_t_t be offended if you think I am being too simple - bitter experience at the Unity forums taught me to include detail _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_. In the other hand_co_ if you need more info about it - just post here  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stalker","Date":"2015-11-04T23:41:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi gryff_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not offended at all_co_ a lot of info is quite welcome (I_t_m not really a Blender expert) and your detailed explanation might help save some desperate souls _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That leg it is indeed part of a bigger mesh_co_ it can be seen in this _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/18315-best-practice-for-meshes-and-rigging/_qt__gt_thread_lt_/a_gt__co_ but I removed most of it because all that moving everywhere it was just hilarious_co_ sad and confusing. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_While recreating my animation (a couple of posts back) I managed to successfully export it with Inverse Kinematics (no need to bake)_co_ I_t_ll see if I can succeed again following your steps with IK._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ll try first thing in the morning!_lt_br_gt__lt_br_gt_Thanks for all of the help _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_! Look like you really put a lot of effort into it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-11-05T04:43:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well let me know how it works out. I was unaware that it was possible to use IK in BJS. About 5 years ago I was using some IK rigged models and had a similar issue with Unity 3D basically ignoring the IK rig - so I adopted the baking technique.  I guess that has changed now._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Do you mind if I use your leg model - as I have been thinking of maybe creating some video tutorials about issues with animations in BJS?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sorry that I could not be of more help._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stalker","Date":"2015-11-05T09:29:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I tested it out and it works! _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I currently went only through the first two steps (didn_t_t bake the frames and left IK as it is). Works without any problems!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Of course you can_co_ I attached the full model if you want it (a friend of mine helped me with rigging_co_ that_t_s why it looks cool IMHO). In attached model curves are used as a handles (to control IK)_co_ which are perfect because they aren_t_t exported leaving all of the clutter in blender file (or they can be moved to another layer). There are also a couple of bugs left_co_ but I_t_ll get there soon._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A big thanks! I couldn_t_t have asked for more help._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_5515_qt__gt_Robot.zip_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-11-05T15:44:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Glad it works stalker. As I said above_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_I know not much seems to have changed_co_ but you would not be the first person on this forum to see the chaos that hits the export of animations to BJS when the Location_co_ Rotation and Scale values of the armature and mesh are different._lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/18033-blender-animation-export-issue/_qt__gt_Blender Animation Export Issue_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What are the _qt__lt_em_gt_couple of bugs left_qt_ ?_lt_/em_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stalker","Date":"2015-11-05T23:59:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I recall a few thing back from my Blender days_co_ but I forgot most of it._lt_/p_gt__lt_p_gt_A couple of bugs in a model_co_ flickering right arm_co_ a couple of things could be better_co_ a few normals to fix etc... small things_co_ nothing Babylon related._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I really don_t_t know how I missed that..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]