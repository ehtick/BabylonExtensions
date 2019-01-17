[{"Owner":"MichaelD","Date":"2018-01-24T16:34:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a way to get the size of an object after the window has been resized? (Whole scene gets scaled down/up).\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_planet2.getBoundingInfo().boundingBox.vectorsWorld_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tbut it only displays 1.25 no matter how much I resize my browser window\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-24T16:58:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ this is correct as the size is expressed in world unit and not screen space\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut you can take every vectors of your bounding box and use BABYLON.Vector3.Project to get the screen projected coordinates_dd_\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_ color_dd_#000000_sm_ font-size_dd_14px_qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_qt__gt_ vect _eq_ BABYLON.Vector3.Project(position_co_ BABYLON.Matrix.Identity()_co_ scene.getTransformMatrix()_co_ camera.viewport.toGlobal(engine))_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-24T17:01:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDelta beat me to it.  I posted an example in your other thread.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]