[{"Owner":"dsman","Date":"2018-01-15T12:35:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor the normal camera_co_ we can have bounding mesh which has collision enabled and that way we can restrict camera movement to the certain area.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut the WebVR camera is free and doesn_t_t respect the collision_co_ So how to restrict the movement of the user in the model?  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_ This is not about Room Scale and guardian system. This is about restricting camera movement including teleportation to a certain area inside VR. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-01-15T17:09:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can restrict teleportation to a set of meshes by specifying the name of the floor mesh or a list of meshes_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\taddTeleportation() has a parameter vrTeleportationOptions_lt_br /_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/VR/babylon.vrExperienceHelper.ts#L670_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/VR/babylon.vrExperienceHelper.ts#L670_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can add/remove meshes on the fly with addFloorMesh(mesh) and removeFloorMesh(mesh).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat about attaching (parenting) a bounded mesh to the camera to restrict movement of the user?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2018-01-17T11:37:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25365_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/_qt_ rel_eq__qt__qt__gt_@brianzinn_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe have our own implementation of teleportation etc and not using vrExperienceHelper. (We did it before vrExperienceHelper was introduced). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe could do same in our implementation (having floor meshes or teleportation enabled meshes) but the problem is we have secondary navigation which works with joystick and that can_t_t be limited that way. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan_t_t ellipsoid based camera collision on webVRCamera be possible like it does in free camera?  \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-17T16:22:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is still possible. Nothing prevents it\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe WebVR camera IS a free camera. You should be able to move it with a gamepad for instance if you call camera.inputs.addGamepad()\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]