/** 
 * Note: Do not include any external libraries. 
 * You may only use the drawing functions provided to complete this assignment. 
 */ 
 
/** 
 * Draws a line segment on the screen connecting (x1, y1) and (x2, y2). This is the only function 
 * you may call to draw. 
 * @param  {DOMString} ctx - Canvas context to draw to. Simply pass in the given ctx variable 
 * @param  {number} x1 - X coordinate of the start point 
 * @param  {number} y1 - Y coordinate of the start point 
 * @param  {number} x2 - X coordinate of the end point 
 * @param  {number} y2 - Y coordinate of the end point 
 * @param  {String} style - A string giving the colour of the line. Default is black. 
 * @return {undefined} 
 */ 
function drawLineSegment(ctx, x1, y1, x2, y2, style="#ff8095") 
{ 
  ctx.beginPath(); 
  ctx.moveTo(x1,y1); 
  ctx.lineTo(x2,y2); 
  ctx.strokeStyle = style; 
  ctx.stroke(); 
} 
 
/** 
 * Takes a point defined as an array of numbers [x, y] and treats it as a homogeneous coordinate [x, y, 1] 
 * The transformation T is a 2x3 matrix defined as an array of arrays 
 * T = [[T11, T12, T13], 
 *      [T21, T22, T23]] 
 * The result is a new transformed point [x', y'] = T * [p[0], p[1], 1] 
 * @param  {array} p - Point to transform 
 * @param  {array} T - Transformation to apply 
 * @return {array} New transformed point 
 */ 
function transformPoint(p,T) 
{ 
  var q = new Array(); 
   
  for(var i = 0; i<T.length; i++) 
  { 
    q[i] = 0; 
    for(var j = 0; j<p.length; j++) 
      q[i] +=  T[i][j]*p[j];
	  // Translation 
      q[i] += T[i][j]; 
  } 
   
  return q; 
} 
 
/** 
 * Given two transformations T1 and T2, returns a new transformation equivalent to applying 
 * T1 followed by T2. 
 * @param  {array} T1 - The first transform to apply 
 * @param  {array} T2 - The second transfrom to apply 
 * @return {array} A new transformation 
 */ 
function composeTransforms(T1, T2) { 
  var T_new = [ 
    [0, 0, 0], 
    [0, 0, 0] 
  ]; 
 
  for (var i = 0; i < 2; i++) { 
    for (var j = 0; j < 3; j++) { 
      for(var k = 0; k < 3; k++) { 
        T_new[i][j] += T2[i][k] * (k === 2 ? (j === 2 ? 1 : 0) : T1[k][j]); 
      } 
    } 
  } 
  
  return T_new; 
} 
 
/** 
 * This function should take a list of points and draw a closed polygon connecting the points. 
 * Each point is an array containing two numbers [x, y]. 
 * @param  {DOMString} ctx - Canvas context to draw to. Simply pass in the given ctx variable 
 * @param  {array} poly - Array of points corresponding to the vertices of the polygon [p1, p2, p3, ..., pn] 
 * @return {undefined} 
 */ 
function drawPolygon(ctx, poly) 
{ 
  /** Fill in your answer here **/ 
  // Hint: call drawLineSegment to help you
  //poly = [p1, p2, p3, ..., pn]
  for (var i = 0; i < poly.length; i++) { 
        if (i < (poly.length-1)){    
              drawLineSegment(ctx,poly[i][0],poly[i][1],poly[i+1][0],poly[i+1][1])
          }
          else{
            drawLineSegment(ctx,poly[i][0],poly[i][1],poly[0][0],poly[0][1])          
          }
  } 
} 
 
/** 
 * Given an array of points defining a polygon, return a new array of points for a polygon transformed by 
 * the transformation T. 
 * @param  {array} poly - Array of points corresponding to the vertices of the polygon [p1, p2, p3, ..., pn] 
 * @param  {array} T - T transformation to apply. Same definition as in transformPoint() 
 * @return {array} Array of vertex locations for the transformed polygon 
 */ 
function transformPolygon(poly, T) 
{ 
  /** Fill in your answer here **/ 
  // Hint: call transformPoint to help you
   
  for (var i = 0; i < poly.length; i++) {
          poly[i] = transformPoint(poly[i],T) 
  }
  
  return poly; 
} 
 
/** 
 * Draws a circle of radius r around point [cx, cy]. 
 * @param  {DOMString} ctx - Canvas context to draw to. Simply pass in the given ctx variable 
 * @param  {number} cx - X coordinate of the circle center 
 * @param  {number} cy - Y coordinate of the circle center 
 * @param  {number} r - Radius of the circle 
 * @return {undefined} 
 */ 
function drawCircle(ctx, cx, cy, r) 
{ 
  // Hint: call drawLineSegment to help you 
  var theta = 0;
  for(var i = 0; i < 100; i++){
	  theta_prev = theta;
	  theta = i*((Math.PI*2)/100);
	  drawLineSegment(ctx, cx + r*Math.sin(theta_prev), cy + r*Math.cos(theta_prev), cx + r*Math.sin(theta), cy + r*Math.cos(theta));
  }
  // if it was a rhombus instead of a circle
  //drawLineSegment(ctx,cx,cy-r,cx+r,cy)
  //drawLineSegment(ctx,cx+r,cy,cx,cy+r)
  //drawLineSegment(ctx,cx,cy+r,cx-r,cy)
  //drawLineSegment(ctx,cx-r,cy,cx,cy-r)
} 


 
/** 
 * T R A N S L A T I O N * 
 * Returns a transformation matrix T that defines a translation in homogeneous coordinates 
 * by the vector offset [x, y]. 
 * That is, if applied to a point p = [p1, p2, 1] then it will be 
 * translated to p' = [p1 + x, p2 + y, 1] 
 * @param  {array} offset - The offset to translate by 
 * @return {array} A 2x3 transformation matrix 
 */ 
function translateByOffset(offset) 
{ 
  var T = [ 
    [1, 0, 0], 
    [0, 1, 0]
  ]; 
 
  T[0][2] = offset[0] 
  T[1][2] = offset[1]  

  return T; 
} 
 
/**
 * R O T A T I O N * 
 * Returns a transformation matrix T that defines 
 * a rotation by angle radians around a point joint. 
 * @param  {number} angle - Angle in radians 
 * @param  {array} joint - point [x, y] to rotate around  
 * @return {array} T - 2x3 transformation matrix defining the rotation 
 */ 
function rotationAboutPoint(angle, joint) 
{ 
  var T = [ 
    [1, 0, 0], 
    [0, 1, 0] 
  ]; 

  // Hint: Use Math.cos() and Math.sin() 
  
  //1. Move it to about origin (translate x, y)   
  
  var neg_joint = new Array()
  neg_joint[0] = -1*joint[0]
  neg_joint[1] = -1*joint[1]

  
  //2. Rotate by the given angle
  
  var Rotation = [
    [Math.cos(angle), (-1)*Math.sin(angle),0],
    [Math.sin(angle), Math.cos(angle), 0],
    [0, 0 , 1]
  ];
 
 
  //3. Translate it back to original joint point                            
  
	result1 = composeTransforms(translateByOffset(neg_joint),Rotation)
    result2 = composeTransforms(result1,translateByOffset(joint))
	
    return result2; 
} 
 
 
function drawPenguin(ctx) 
{ 
  /** GET UI SLIDER VARIABLES **/ 
  /** You do not need to change this code **/ 
  var deg_to_rad = Math.PI / 180.0; 
  var torso_x_offset = parseFloat(document.getElementById("slider_torso_x").value); 
  var torso_y_offset = parseFloat(document.getElementById("slider_torso_y").value); 
  var arm_angle = parseFloat(document.getElementById("slider_arm_angle").value) * deg_to_rad; 
  var head_angle = parseFloat(document.getElementById("slider_head_angle").value) * deg_to_rad; 
  var mouth_gap = parseFloat(document.getElementById("slider_mouth_gap").value); 
  var hip_angles = [ 
    parseFloat(document.getElementById("slider_hip_angle0").value) * deg_to_rad, 
    parseFloat(document.getElementById("slider_hip_angle1").value)  * deg_to_rad 
  ]; 
  var ankle_angles = [ 
    parseFloat(document.getElementById("slider_ankle_angle0").value)  * deg_to_rad, 
     parseFloat(document.getElementById("slider_ankle_angle1").value)  * deg_to_rad 
  ]; 
  /** END OF GET UI SLIDER VARIABLES **/ 
 
 
  /** POLYGON DEFINITIONS **/ 
  /** 
   * The polygons defining each body region are provided *relative to the origin* 
   * It is your responsibility to transform and draw these polygons to construct a hierarchical model 
   * that can be manipulated by the sliders.  
   * 
   * You may not change these values manually. 
   */ 
  //  
  var torso_poly = [[149, -196], [71, 99], [154, 188], [236, 196], [329, 116], [210, -196]]; 
  var arm_poly = [[180, -78], [162, 78], [228, 78], [220, -74]]; 
 
  var head_poly = [[160, -70], [160, 50], [220, 48], [220, -70]]; 
  var upper_beak_poly = [[241, -13], [156, 2], [159, 13], [243, 13]]; 
  var lower_beak_poly = [[160, -3], [158, 3], [241, 3], [241, -3]]; 
   
  var leg_poly = [[185, -53], [180, 32], [220,  32], [212, -53]]; 
  var leg_poly_2 = [[185, -53], [180, 32], [220,  32], [212, -53]];
  var foot_poly = [[254, -31], [258, -9], [152,  -9], [142, -31]]; 
  var foot_poly_2 = [[254, -31], [258, -9], [152,  -9], [142, -31]];
   
  // These will be drawn as circles 
  var eye = [0, 0]; 
  var iris = [0, 0]; 
   
  // Radii of circles 
  var eye_r = 10; 
  var iris_r = 5; 
  var arm_joint_r = 5; 
  var head_joint_r = 5; 
  var hip_joint_r = 5; 
  var ankle_joint_r = 5; 
   
  // Joint positions 
  var hip_joints = [[0, 0], [0, 0]]; 
  var ankle_joints = [[0, 0], [0, 0]]; 
  var arm_joint = [0, 0]; 
  var head_joint = [0, 0]; 
  /** END OF POLYGON DEFINITIONS **/ 
 
 
  /*********************************/ 
  /** YOUR DRAWING CODE GOES HERE **/ 
  /*********************************/ 
 
  /** The torso and head are given as examples **/ 
  
  // T O R S O //
  // Define the center of the torso in screen space 
  // and a transformation to translate the torso to its origin 
  var torso_origin = [360, 360]; 
  var torso_T = translateByOffset([torso_origin[0] + torso_x_offset, torso_origin[1] + torso_y_offset]); 
   
  torso_poly = transformPolygon(torso_poly, torso_T); 
  drawPolygon(ctx, torso_poly); 
 
 
 
  // A R M //
  var arm_offset = [24, -20]; // The location of the arm relative to the body
  var arm_joint_offset = [201,-60]; // The location of the arm joint relative to the arm centre
  var arm_T = composeTransforms(
    rotationAboutPoint(arm_angle, arm_joint_offset),
	translateByOffset(arm_offset)
  );
  
  arm_poly = transformPolygon(arm_poly, arm_T);
  arm_poly = transformPolygon(arm_poly, torso_T); 
  drawPolygon(ctx, arm_poly); 
 
  
  // Now draw the arm joint 
  arm_joint = transformPoint(arm_joint_offset, arm_T); 
  arm_joint = transformPoint(arm_joint, torso_T); 
  drawCircle(ctx, arm_joint[0], arm_joint[1], arm_joint_r); 
  
 
 
 
  // H E A D  &&  U P P E R  B E A K   &&  L O W E R  B E A K //
  // Define  the transformation for the head as a rotation and then a translation 
  var head_offset = [-10, -220]; // The location of the head relative to the body 
  var Ubeak_offset = [-90, 0]; // The location of upper beak relative to the head
  var Lbeak_offset = [-90, 27]; // The location of lower beak relative to the head
  
  var eye_offset = [170,-20];
  
  var head_joint_offset = [200, 35]; // The location of the head joint relative to the head center 

  
  var Ubeak_head_joint_offset = [285, 35];  //The location of the head joint relative to the beak
  var Lbeak_head_joint_offset = [285, 15];
  var eye_head_joint_offset = [35, 70];
  
  var head_T = composeTransforms( 
    rotationAboutPoint(head_angle, head_joint_offset), 
    translateByOffset(head_offset) 
  ); 
  
  var Ubeak_T = composeTransforms( 
    rotationAboutPoint(head_angle, Ubeak_head_joint_offset), 
    translateByOffset(head_offset) 
  ); 

  var Lbeak_T = composeTransforms( 
    rotationAboutPoint(head_angle, Lbeak_head_joint_offset), 
    translateByOffset(head_offset) 
  );
  
  var eye_T = composeTransforms( 
    rotationAboutPoint(head_angle, eye_head_joint_offset), 
    translateByOffset(head_offset) 
  );
  
  Ubeak_T = composeTransforms(Ubeak_T,translateByOffset(Ubeak_offset))
  Lbeak_T = composeTransforms(Lbeak_T,translateByOffset(Lbeak_offset))
  Lbeak_T = composeTransforms(Lbeak_T, translateByOffset([0,mouth_gap]))
  eye_T = composeTransforms(eye_T,translateByOffset(eye_offset))
  
  // Transform and draw the head in a hierarchical fashion:  if the body moves, then the head will move with it. 
  head_poly = transformPolygon(head_poly, head_T); 
  Ubeak_poly = transformPolygon(upper_beak_poly, Ubeak_T);
  Lbeak_poly = transformPolygon(lower_beak_poly, Lbeak_T);
  
 
  head_poly = transformPolygon(head_poly, torso_T); 
  Ubeak_poly = transformPolygon(Ubeak_poly, torso_T);
  Lbeak_poly = transformPolygon(Lbeak_poly, torso_T);
  //eye_T = composeTransforms(eye_T, torso_T);  
  
  drawPolygon(ctx, head_poly); 
  console.log("head");
  drawPolygon(ctx, Ubeak_poly); 
  drawPolygon(ctx, Lbeak_poly); 
  

 // Now draw the head joint 
  head_joint = transformPoint(head_joint_offset, head_T); 
  head_joint = transformPoint(head_joint, torso_T); 
  drawCircle(ctx, head_joint[0], head_joint[1], head_joint_r); 
  
  
  // Draw the eye & iris (also move with head)
  eye = transformPoint(eye,eye_T);
  eye = transformPoint(eye, torso_T); 
  //drawCircle(ctx, eye[0], eye[1], eye_r);
  drawCircle(ctx, eye[0], eye[1], iris_r);  
  
 
  // L E G 1  &  F E E T 1 // 
  var leg_1_offset = [-70, 185]; // The location of the leg relative to the body
  var ft_1_offset = [-55, 40]; // The location of 1st foot relative to the 1st leg
  
  var leg_1_T = composeTransforms(torso_T,translateByOffset(leg_1_offset))   //performing torso_T transformation first 
  var ft_1_T = composeTransforms(torso_T,translateByOffset(leg_1_offset))
  ft_1_T = composeTransforms(ft_1_T, translateByOffset(ft_1_offset))
  
  var leg_1_joint_offset = [200,-40]; // The location of the leg joint relative to the leg centre
  var ft_leg_1_joint_offset = [255, -85];  //The location of the feet1 joint relative to the leg centre
 
  leg_1_T = composeTransforms(rotationAboutPoint(hip_angles[0],leg_1_joint_offset),leg_1_T)
  ft_1_T = composeTransforms(rotationAboutPoint(hip_angles[0],ft_leg_1_joint_offset),ft_1_T)
  
  leg_1_poly = transformPolygon(leg_poly,leg_1_T);
  drawPolygon(ctx, leg_1_poly);  
  
  var ft_1_joint_offset = [245,-20]; // The location of 1st foot joint relative to its centre
  ft_1_T = composeTransforms(rotationAboutPoint(ankle_angles[0],ft_1_joint_offset),ft_1_T)

  ft_1_poly = transformPolygon(foot_poly,ft_1_T);
  drawPolygon(ctx, ft_1_poly);   
  

  // Now draw the joints 
  hip_joints[0] = transformPoint(leg_1_joint_offset, leg_1_T); 
  drawCircle(ctx, hip_joints[0][0], hip_joints[0][1], hip_joint_r);
  
  ankle_joints[0] = transformPoint(ft_1_joint_offset, ft_1_T); 
  drawCircle(ctx, ankle_joints[0][0], ankle_joints[0][1], ankle_joint_r); 
  
  
  
  
  // L E G 2  &  F E E T 2// 
  var leg_2_offset = [65, 200]; // The location of the 2ND leg relative to the body
  var ft_2_offset = [-55, 40]; // The location of 2nd foot relative to the 2nd leg
  var leg_2_T = composeTransforms(torso_T,translateByOffset(leg_2_offset))
  var ft_2_T = composeTransforms(torso_T,translateByOffset(leg_2_offset))
  ft_2_T = composeTransforms(ft_2_T, translateByOffset(ft_2_offset))
  
  var leg_2_joint_offset = [200,-40]; 
  var ft_leg_2_joint_offset = [255, -85];
 
  leg_2_T = composeTransforms(rotationAboutPoint(hip_angles[1],leg_2_joint_offset),leg_2_T)
  ft_2_T = composeTransforms(rotationAboutPoint(hip_angles[1],ft_leg_2_joint_offset),ft_2_T)
  
  leg_2_poly = transformPolygon(leg_poly_2,leg_2_T);
  drawPolygon(ctx, leg_2_poly);

  var ft_2_joint_offset = [245,-20]; 
  ft_2_T = composeTransforms(rotationAboutPoint(ankle_angles[1],ft_2_joint_offset),ft_2_T)

  ft_2_poly = transformPolygon(foot_poly_2,ft_2_T);
  drawPolygon(ctx, ft_2_poly); 
  
  //draw the joints
  hip_joints[1] = transformPoint(leg_2_joint_offset, leg_2_T); 
  drawCircle(ctx, hip_joints[1][0], hip_joints[1][1], hip_joint_r); 
 
  ankle_joints[1] = transformPoint(ft_2_joint_offset, ft_2_T); 
  drawCircle(ctx, ankle_joints[1][0], ankle_joints[1][1], ankle_joint_r); 
  
} 
 
 
/**        BOILERPLATE DRAWING CODE        **/ 
/**   You do not need to modify this code  **/ 
function drawAxis(ctx) 
{ 
  drawLineSegment(ctx, 0, 0, 100, 0, "red"); 
  drawLineSegment(ctx, 0, 0, 0, 100, "green"); 
  ctx.fillText("0,0", 4, 12); 
  ctx.fillText("100,0", 98, 10); 
  ctx.fillText("0,100", 5, 100); 
} 
 
// This function is called to draw the current frame. It is called whenever the 
// sliders are changed. 
function draw()  
{ 
  // you do not need to modify this function 
  // this is help function 
  // Boilerplate code to setup the canvas 
  var canvas = document.getElementById('canvas'); 
  if (!canvas.getContext) 
  { 
    alert("Your browser is too old! Please upgrade to a canvas-capable browser."); 
  } 
  var ctx = canvas.getContext('2d'); 
  // clear canvas so we can draw a new frame 
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
  // set global line width and smooth lines 
  ctx.lineWidth = 2; 
  ctx.lineJoin = 'round'; 
  ctx.lineCap = 'round'; 
  // draw a small axis to demonstrate the inverted coordinate system 
  //drawAxis(ctx); 
  // draw the current Penguin 
  drawPenguin(ctx); 
} 

function first()
{	
	head_angle = -12.5;
	document.getElementById("hi").style.display = "none";
	document.getElementById("where").style.display = "block";
	document.getElementById("ans").style.display = "block";
	document.getElementById("ans_button").style.display = "block";
}

function escape()
{	
	document.getElementById("final").style.display = "none";
	document.getElementById("final_button").style.display = "none";
	document.getElementById("whynot").style.display = 'none';
	document.getElementById("why").style.display = 'none';

	var consc = parseFloat(document.getElementById("consc").value); 
	op = 0.8*(consc/10 + 1);
	var delay1 = 2000; 
	var delay2 = 2500; 
	var delay3 = 5500;
	setTimeout(function() {
		document.getElementById("door").style.display = 'block';
	}, delay1);

	setTimeout(function() {
	  document.getElementById("penguin").style.display = 'block';
	}, delay1);
	
	setTimeout(function() {
	  document.getElementById("aft").style.display = 'block';
	}, delay1);
	
	setTimeout(function() {
	  document.getElementById("penguin_2").style.display = 'block';
	}, delay2);
	
	setTimeout(function() {
	document.getElementById("mytable").style.display = "none";
	}, delay3);
	
	document.getElementById("hi").style.display = "none";
	
	setTimeout(function() {
	document.getElementById("full").style.display = "block";
	}, delay3);
	
	setTimeout(function() {
	document.getElementById("gone").style.display = "block";
	}, delay2);
	
	document.getElementById('bonjr').play();
}
/**     END OF BOILERPLATE DRAWING CODE       **/ 
