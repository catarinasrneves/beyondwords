let sSlider, pSlider, hSlider, iSlider;
let crSlider, cgSlider, cbSlider;
let dSlider;

var button1, button2, button3;
var buttoncaps, bottonLower;


var buttoncolorw ,buttoncolorb;
let input, buttongo;

var buttonbrexit;

let inputimg;
let img;

var p;

let dropdown;






function setup() {

   createCanvas(window.innerWidth, window.innerHeight);
   
  textSize(15);
  noStroke();

    

  // create sliders type
  sSlider = createSlider(10,40, 30);
  sSlider.position(20, 180);
    //sSlider.style('width', '10vw');
    
        sSlider.input(updateSize);
    
  pSlider = createSlider(15,50, 35);
  pSlider.position(20, 210);
    
        pSlider.input(updateLine);
    
    hSlider = createSlider(1,150, 20);
  hSlider.position(20, 240);
    
    hSlider.input(updateMargin);
    
    iSlider = createSlider(1,150, 30);
  iSlider.position(20, 270);
    
    iSlider.input(updateIndent);
    

    
    
 
   //dropdown
    
    style= createP('Font Style');
    style.position(20,105);
    style.style('font-family', 'GT SetraMedium');
    style.style('font-size', '16px')
    
    dropdown = createSelect();
  dropdown.option('Universal');
  dropdown.option('Legible');
  dropdown.option('Readable');
    dropdown.option('Democratic');
    dropdown.option('Propaganda');
    
  dropdown.changed(newSelection);
    
    
//style dropdown 

    dropdown.position(100,100);
    dropdown.style ('width', '130px');
    dropdown.style ('height','5vh');
    dropdown.style('background-color', 'transparent');
    dropdown.style('border', 'none');
    dropdown.style('border-bottom', 'solid', '5px', 'blue');
    dropdown.style('font-family', 'GT SetraMedium');
    dropdown.style('font-size', '16px');
    dropdown.style('padding-left', '0.1em');
    dropdown.style('padding-rigth', '1em');
    
    
    

    //sliders background colour
    
    colour= createP('Background Colour');
    colour.position(20,360);
    colour.style('font-family', 'GT SetraMedium');
    colour.style('font-size', '16px')
    
 crSlider = createSlider(0, 255, 255);
crSlider.position(20, 400);
 cgSlider = createSlider(0, 255, 255);
  cgSlider.position(20, 430);
  cbSlider = createSlider(0, 255, 255);
  cbSlider.position(20, 460);
    
    
    
    
    
    //depth slider
    
   depth=createP('Reading Speed');
   depth.position(20,545);
   depth.style('font-family', 'GT SetraMedium');
   depth.style('font-size', '16px')
    
    dSlider = createSlider(1,3);
    dSlider.position(20, 580);
    dSlider.input(updateDepth);
    
   
    
}


function newSelection() {
  console.log(dropdown.value()); 
}




function draw() { 
    

  
 push();   

const r = crSlider.value();
const g = cgSlider.value();
const b = cbSlider.value();
    
//fill(r,g,b);
//rect(width/5,0,width,height);
background(r,g,b);

    
  pop(); 
    

text('red', crSlider.x * 2 + crSlider.width, 415);
text('green', cgSlider.x * 2 + cgSlider.width, 445);
text('blue', cbSlider.x * 2 + cbSlider.width, 475);
    
//p.style('font-size' ,sSlider.value()+'px');
//p.style('text-align', 'center');
//p.position(pSlider.value(),hSlider.value());

   
  
    
    text('font size', sSlider.x * 2 + sSlider.width, 195);
    text('spacing', pSlider.x * 2 + pSlider.width, 225);
    text('width', hSlider.x * 2 + hSlider.width, 255); 
    text('indent', iSlider.x * 2 + iSlider.width, 285); 
    
    
    text('depth', dSlider.x * 2 + dSlider.width, 595)
    
    
  if (dropdown.value() == 'Universal') {
      var essay = select ('#essay');
      var title = select ('#title')
        var subtitle = select('#subtitle');
    essay.style('font-family', 'Helvetica');
      title.style('font-family', 'Helvetica');
      subtitle.style('font-family', 'Helvetica');
      
  } 
    if (dropdown.value() == 'Legible') {
     var essay = select ('#essay');
        var title = select ('#title')
        var subtitle = select('#subtitle');
    essay.style('font-family', 'San Francisco');
        title.style('font-family', 'San Francisco');
        subtitle.style('font-family', 'San Francisco');
  } 
     if (dropdown.value() == 'Readable') {
     var essay = select ('#essay');
        var title = select ('#title')
        var subtitle = select('#subtitle');
    essay.style('font-family', 'Times New Roman');
        title.style('font-family', 'Times New Roman');
        subtitle.style('font-family', 'Times New Roman');
  } 
   if (dropdown.value() == 'Democratic') {
     var essay = select ('#essay');
        var title = select ('#title')
        var subtitle = select('#subtitle');
    essay.style('font-family', 'GothamBook');
        title.style('font-family', 'GothamBook');
        title.style('margin-top', '1em');
        subtitle.style('font-family', 'GothamBook');
   }
    
    if (dropdown.value() == 'Propaganda') {
     var essay = select ('#essay');
        var title = select ('#title')
        var subtitle = select('#subtitle');
    essay.style('font-family', 'GT SetraRegular');
        title.style('font-family', 'GT SetraRegular');
        subtitle.style('font-family', 'GT SetraRegular');
   }
}
  

 function updateSize(){
     var essay = select ('#essay');
    essay.style('font-size' ,sSlider.value()+'px');
 }

function updateLine(){
    var essay = select ('#essay');
    essay.style('line-height', pSlider.value()+'px');
}

function updateMargin(){
    var essay = select ('#essay');
    var title = select ('#title')
    var subtitle = select('#subtitle');
    
    essay.style('padding-left',hSlider.value());
    essay.style('padding-right',hSlider.value() + 'px' );
    title.style('padding-left',hSlider.value());
    title.style('padding-right',hSlider.value());
    subtitle.style('padding-left',hSlider.value());
    subtitle.style('padding-right',hSlider.value());
    
}

function updateIndent(){
    var essay = select ('#essay');
    essay.style('text-indent', iSlider.value()+'px');
}



function updateDepth(){
    
    if (dSlider.value() == '1'){
        var essay = select ('#essay');
        var title = select ('#title')
        var subtitle = select('#subtitle');
        
        
        essay.style('display','none');
        title.style('font-size', '120px');
        title.style('line-height','110px');
        title.style('text-align', 'center');
        title.style('margin-bottom', '30px');
        title.style('margin-top', '200px');
        subtitle.style('font-size', '55px');
        subtitle.style('line-height', '55px');
        subtitle.style('text-align', 'center');
        
       
    }
    
    if (dSlider.value() == '2'){
       var essay = select ('#essay');
        var title = select ('#title')
        var subtitle = select('#subtitle');
        var par1 = select('#par1');
        var par2 = select('#par2');
        var par3 = select('#par3');
        var par4 = select('#par4');
        var par5 = select('#par5');
        var par6 = select('#par6');
        var par7 = select('#par7');
        var par8 = select('#par8');
        var par9 = select('#par9');
        var par10 = select('#par10');
        var par11 = select('#par11');
        var par12 = select('#par12');
        var par13 = select('#par13');
        var par14 = select('#par14');
        var par15 = select('#par15');
        var par16 = select('#par16');
        var par17 = select('#par17');
        var par18 = select('#par18');
        var par19 = select('#par19');
        var par20 = select('#par20');
        var par21 = select('#par21');
        
        essay.style('display','block');
        title.style('font-size', '60px');
        title.style('line-height','70px');
        title.style('text-align', 'left');
        title.style('margin-bottom', '10px');
        title.style('margin-top', '0.1em');
        subtitle.style('font-size', '25px');
        subtitle.style('line-height', '30px');
        subtitle.style('text-align', 'left');
        
        par1.style('display','none');
        par2.style('display','none');
        par3.style('display','block');
        par4.style('display','block');
        par5.style('display','none');
        par6.style('display','none');
        par7.style('display','none');
        par8.style('display','none');
        par9.style('display','none');
        par10.style('display','none');
        par11.style('display','block');
        par12.style('display','none');
        par13.style('display','none');
        par14.style('display','none');
        par15.style('display','block');
        par16.style('display','block');
        par17.style('display','none');
        par18.style('display','block');
        par19.style('display','none');
        par20.style('display','block');
        par21.style('display','block');
        
        
        
    }
    
    if (dSlider.value() == '3'){
        var essay = select ('#essay');
        var title = select ('#title')
        var subtitle = select('#subtitle');
        var par1 = select('#par1');
        var par2 = select('#par2');
        var par3 = select('#par3');
        var par4 = select('#par4');
        var par5 = select('#par5');
        var par6 = select('#par6');
        var par7 = select('#par7');
        var par8 = select('#par8');
        var par9 = select('#par9');
        var par10 = select('#par10');
        var par11 = select('#par11');
        var par12 = select('#par12');
        var par13 = select('#par13');
        var par14 = select('#par14');
        var par15 = select('#par15');
        var par16 = select('#par16');
        var par17 = select('#par17');
        var par18 = select('#par18');
        var par19 = select('#par19');
        var par20 = select('#par20');
        var par21 = select('#par21');
        
        
        title.style('font-size', '60px');
        title.style('line-height','70px');
        title.style('text-align', 'left');
        title.style('margin-bottom', '10px');
        title.style('margin-top', '0.1em');
        subtitle.style('font-size', '25px');
        subtitle.style('line-height', '30px');
        subtitle.style('text-align', 'left');
        
        par1.style('display','block');
        par2.style('display','block');
        par3.style('display','block');
        par4.style('display','block');
        par5.style('display','block');
        par6.style('display','block');
        par7.style('display','block');
        par8.style('display','block');
        par9.style('display','block');
        par10.style('display','block');
        par11.style('display','block');
        par12.style('display','block');
        par13.style('display','block');
        par14.style('display','block');
        par15.style('display','block');
        par16.style('display','block');
        par17.style('display','block');
        par18.style('display','block');
        par19.style('display','block');
        par20.style('display','block');
        par21.style('display','block');
    }
    
}



function drawWord (){
   
   p = createP(input.value());
      
    for(var i=0; i < 30; i++) {
    text(p);
   
       
    }
  
}



function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}





