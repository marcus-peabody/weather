var weather;
var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=291a383bdad6625e94db394627243e63';
var units = '&units=imperial';
var input;
var cloudVal;
var cloudImg;
var art;
var clothVal;
var clothImg;
var wV;
var cloudText;
var clothText
var weaVal
var weaImg
var weaText;
var cX
var cY
var sX
var sY
var wX
var wY 
var CITY
var cxoff = 0;
var cyoff = 10000;
var sxoff = 20000;
var syoff = 30000;
var wxoff = 40000;
var wyoff = 50000;


var c_10, c_15, c_20, c_25, c_30, c_35, c_40, c_45, c_50, c_55, c_60, c_65, c_70, c_75, c_80, c_85, c_90, c_95, c_100, s_0, s_10, s_20, s_30, s_40, s_50, s_60, s_70, s_80, s_90, s_100, w_2, w_3a, w_3b, w_5a, w_5b, w_6, w_7, w_8, w_9;



function preload() {
    
    c_10 = loadImage("weather/c_10.jpg");
    c_15 = loadImage("weather/c_15.jpg");
    c_20 = loadImage("weather/c_20.jpg");
    c_25 = loadImage("weather/c_25.jpg");
    c_30 = loadImage("weather/c_30.jpg");
    c_35 = loadImage("weather/c_35.jpg");
    c_40 = loadImage("weather/c_40.jpg");
    c_45 = loadImage("weather/c_45.jpg");
    c_50 = loadImage("weather/c_50.jpg");
    c_55 = loadImage("weather/c_55.jpg");
    c_60 = loadImage("weather/c_60.jpg");
    c_65 = loadImage("weather/c_65.jpg");
    c_70 = loadImage("weather/c_70.jpg");
    c_75 = loadImage("weather/c_75.jpg");
    c_80 = loadImage("weather/c_80.jpg");
    c_85 = loadImage("weather/c_85.jpg");
    c_90 = loadImage("weather/c_90.jpg");
    c_95 = loadImage("weather/c_95.jpg");
    c_100 = loadImage("weather/c_100.jpg");
    
    s_0 = loadImage("weather/s_0.jpg");
    s_10 = loadImage("weather/s_10.jpg");
    s_20 = loadImage("weather/s_20.jpg");
    s_30 = loadImage("weather/s_30.jpg");
    s_40 = loadImage("weather/s_40.jpg");
    s_50 = loadImage("weather/s_50.jpg");
    s_60 = loadImage("weather/s_60.jpg");
    s_70 = loadImage("weather/s_70.jpg");
    s_80 = loadImage("weather/s_80.jpg");
    s_90 = loadImage("weather/s_90.jpg");
    s_100 = loadImage("weather/s_100.jpg");
    
    w_2 = loadImage("weather/w_2.jpg");
    w_3a = loadImage("weather/w_3a.jpg");
    w_3b = loadImage("weather/w_3b.jpg");
    w_5a = loadImage("weather/w_5a.jpg");
    w_5b = loadImage("weather/w_5b.jpg");
    w_6 = loadImage("weather/w_6.jpg");
    w_7 = loadImage("weather/w_7.jpg");
    w_7b = loadImage("weather/w_7b.jpg");
    w_8 = loadImage("weather/w_8.jpg");
    w_9b = loadImage("weather/w_9b.jpg");
    w_9 = loadImage("weather/w_9.jpg");
    
    art = loadJSON("art.json");
}

function weatherAsk() {
    var url = api + CITY + apiKey + units
    loadJSON(url, gotData);  
    console.log(url);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  CITY = "Providence";
  weatherAsk();
    
}

function newCity() {
    input = select('#city');
    CITY = input.value();
    console.log(CITY);
    weatherAsk();
    var atThe = document.getElementById("i");
    atThe.innerHTML = "in"; 
}

function gotData(data) {
    weather = data;
    
//       cX = random(width*0.0, width*0.1)
//        cY = random(height*0.1, height*0.2)
//        sX = random(width*0.65, width*0.7)
//        sY = random(height*0.2, height*0.3)
//        wX = random(width*0.2)
//        wY = random(height*0.6, height*0.7)


////change "at the" to "in"
//var atThe = document.getElementById("i");
//var museum = document.getElementById("city");
//
//  if (CITY === "Providence") {
//    atThe.innerHTML = "at the"; 
//    museum.innerHTML = "RISD Museum";  
//  
//  } else if (CITY === "providence") {
//    atThe.innerHTML = "at the"; 
//    museum.innerHTML = "RISD Museum";  
//  
//  }else {
//    atThe.innerHTML = "in"; 
//    museum.innerHTML = CITY  
//  }
    
}



//about button
function about(){
    
      var x = document.getElementById("c");
    var aboutText = document.getElementById("aboutBtn");
  if (x.style.display === "block") {
    x.style.display = "none";
      aboutText.innerHTML = "About";
      aboutText.style.color = "darkgrey";
  } else {
    x.style.display = "block";
      aboutText.innerHTML = "Hide";
      aboutText.style.color = "white";
  }
}

  function drawCaptions (){
          document.getElementById("one").innerHTML = weaText
          document.getElementById("two").innerHTML = cloudText
          document.getElementById("three").innerHTML = clothText
      }

function draw() {  
background(238);        
if (weather) {
        
    
    
    //wind speed 0.001 is slow, 0.02 is fast
    var w = map(weather.wind.speed, 0, 100, 0.001, 0.04)
    
    cX = map(noise(cxoff), 0, 1, 0, width-300);
    cxoff +=w;
    cY = map(noise(cyoff), 0, 1, 0, height-400);
    cyoff +=w;
    
    sX = map(noise(sxoff), 0, 1, 0, width);
    sxoff +=w;
    sY = map(noise(syoff), 0, 1, 0, height);
    syoff +=w;
    
    wX = map(noise(wxoff), 0, 1, 0, width);
    wxoff +=w;
    wY = map(noise(wyoff), 0, 1, 0, height);
    wyoff +=w;
    
    
        //clothes
        temp = weather.main.temp
        if(temp < 10){
            clothVal = 0
        }
        else if (temp > 100){
            clothVal = 18
        }
        else {
             clothVal = int((weather.main.temp - 10)/5);
        } 
    
        push()
        rotate(map(noise(cxoff), 0, 1, 0.4, -0.4))
        clothImg = art.clothes[clothVal].img;
        clothText = art.clothes[clothVal].title;
        image(eval(clothImg), cX, cY, eval(clothImg).width/2.5, eval(clothImg).height/2.5);
        pop()
      
        //clouds
        push()
        rotate(map(noise(sxoff), 0, 1, 0.3, -0.3))
        cloudVal = int(weather.clouds.all / 10);
        cloudImg = art.clouds[cloudVal].img;
        cloudText = art.clouds[cloudVal].title;
        image(eval(cloudImg), sX, sY, eval(cloudImg).width/2, eval(cloudImg).height/2);
        pop()
   
       
        //weather
        wV = weather.weather[0].id
   
        //thunder
      if(199 < wV && wV < 240){
          weaVal = 0; 
      }
        //drizzle1
      else if(299 < wV && wV  < 310.5){
          weaVal = 1;
      }
        //drizzle2
       else if(311 < wV && wV  < 322){
          weaVal = 2; 
      }
        //rain1
       else if(499 < wV && wV  < 501.5){
          weaVal = 3;
      }
        //rain2
      else if(501.5 < wV && wV  < 512){
          weaVal = 4; 
      }
        //rain other
      else if(512 < wV && wV  < 533){
         weaVal = 3; 
      }
        //snow
       else if(599 < wV && wV < 623){
         weaVal = 5; 
      }
        //fog
       else if(699 < wV && wV  < 732){
         weaVal = 6;
      }
    //mist
       else if(733 < wV && wV  < 782){
         weaVal = 7;
      }
        //clear
       else if(799 < wV && wV < 801){
         weaVal = 7;
      }
        //cloud
       else if(800 < wV && wV  < 802.5){
         weaVal = 8; 
      }
      //more cloud
       else if(802 < wV && wV  < 899){
         weaVal = 9; 
      }
      push()
      rotate(map(noise(wxoff), 0, 1, 0.35, -0.35))
      weaImg = art.weath[weaVal].img;
      image(eval(weaImg), wX, wY, eval(weaImg).width/2.5, eval(weaImg).height/2.5); 
      weaText = art.weath[weaVal].title;
      pop()
    
    drawCaptions() 
    }     
}



