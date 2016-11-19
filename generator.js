var fs = require('fs');

function generate (node) {

var duration = node.duration;
var button0Dest = node.buttons[0].dest === null? '#' : node.buttons[0].dest.name + '.html';
var button0Opacity = node.buttons[0].dest === null? ' opacity: 0.7; filter: grayscale(100);' : '';
var button1Dest = node.buttons[1].dest === null? '#' : node.buttons[1].dest.name + '.html';
var button1Opacity = node.buttons[1].dest === null? '  opacity: 0.7; filter: grayscale(100);' : '';
return `
<html>
    <head>
        <link href="normalize.css" rel="stylesheet">
        <link href="main.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Nothing+You+Could+Do" rel="stylesheet">
        <script src="popcorn-complete.min.js"></script>
        <script>
            document.addEventListener("DOMContentLoaded", function(){
                var popcorn = Popcorn("#video");
                popcorn.play();
                popcorn.code({
                    start: ${duration},
                    onStart: function() {
                        document.getElementById("buttonOne").style.visibility="visible";
                    }
                });
                popcorn.code({
                    start: ${duration},
                    onStart: function() {
                        document.getElementById("buttonTwo").style.visibility="visible";
                    }
                });
            }, false);
        </script>
        <title>Shonnie's Daycare Quest</title>
    </head>
    <body>
        <div id="videoBox">
            <video width="1280" height="720" id="video">
                <source src="${node.name}.mp4">
            </video>
            <div style="position:relative; left: ${node.offset[0]}px; top:${node.offset[1]}px;">
                <div id="buttonOne" class="button" style="position:absolute; left:0px; top:0px; visibility:hidden;${button0Opacity}">
                    <a href="${button0Dest}" style="text-decoration:none;"><img src="images/${node.buttons[0].image}.png" width="200px"></a>
                </div>
                <div id="buttonTwo" class="button" style="position:absolute; left:310px; top:0px; visibility:hidden;${button1Opacity}">
                    <a href="${button1Dest}" style="text-decoration:none;"><img src="images/${node.buttons[1].image}.png" width="200px"></a>
                </div>
            </div>
        <h1>Shonnie's Daycare Quest</h1>
        <p class='subtitle'> a Picture Book for Grown-Ups</p>
        <p class='subtitle'>by <a href="http://itslishan.com/">Lishan AZ</a></p>
        </div>
    </body>
</html>
`
};

// function generate (node) {

// var duration = node.duration;
// var button0Dest = node.buttons[0].dest === null? node.name : node.buttons[0].dest.name;
// var button1Dest = node.buttons[1].dest === null? node.name : node.buttons[1].dest.name;
// return `
// <html>
//     <head>
//         <link href="main.css" rel="stylesheet">
//         <link href="https://fonts.googleapis.com/css?family=Nothing+You+Could+Do" rel="stylesheet">
//         <script src="popcorn-complete.min.js"></script>
//         <script>
//             document.addEventListener("DOMContentLoaded", function(){
//                 var popcorn = Popcorn("#video");
//                 popcorn.play();
//                 popcorn.code({
//                     start: ${duration},
//                     onStart: function() {
//                          document.getElementById("buttonOne").style.visibility="visible";
//                     }
//                 });
//                 popcorn.code({
//                     start: ${duration},
//                     onStart: function() {
//                         document.getElementById("buttonTwo").style.visibility="visible";
//                     }
//                 });
//             }, false);
//         </script>
//         <title>Shonnie's Daycare Quest</title>
//     </head>
//     <body>
//         <div id="videoBox">
//             <h1>Shonnie's Daycare Quest</h1>
//             <p class='subtitle'> a Picture Book for Grown-Ups</p>

//             <video width="1280" height="720" id="video" autoplay>
//                 <source src="${node.name}.mp4">
//             </video>
//             <div style="position:relative; left: 150px; top:-250px;">
//                 <div id="buttonOne" class="button" style="position:absolute; left:0px; top:0px; visibility:hidden;">
//                     <a href="${button0Dest}.html" style="text-decoration:none;"><img src="images/${node.buttons[0].image}.png" width="200px"></a>
//                 </div>
//                 <div id="buttonTwo" class="button" style="position:absolute; left:310px; top:0px; visibility:hidden;">
//                     <a href="${button1Dest}" style="text-decoration:none;"><img src="images/${node.buttons[1].image}.png" width="200px"></a>
//                 </div>
//             </div>
//         </div>
//     </body>
// </html>
// `
// };
var GovA2 =
  { name: "GovA2"
  , offset: [556, -503]
  , duration: 0
  , buttons: [
    { image: 'Daycare1_GU'
    , dest: null
    , pos: [250, -350]
    }
  , { image: 'Daycare1_Daycare2'
    , dest: null
    , pos: [250+310, -350]
    }
  ] 
  };

var Quit =
  { name: "Quit"
  , offset: [556, -503]
  , duration: 39.3
  , buttons: [
    { image: 'Quit_GU'
    , dest: null
    , pos: [250, -350]
    }
  , { image: 'Quit_GovA2'
    , dest: GovA2
    , pos: [250+310, -350]
    }
  ] 
  };



var Pocket =
  { name: "Pocket"
  , offset: [75, -479]
  , duration: 10.5-1
  , buttons: [
    { image: 'Daycare3_Pocket'
    , dest: null
    , pos: [250, -350]
    }
  , { image: 'Daycare3_Quit'
    , dest: Quit
    , pos: [250+310, -350]
    }
  ] 
  };



var Daycare3 =
  { name: "Daycare3"
  , offset: [332,-353]
  , duration: 62.6-1
  , buttons: [
    { image: 'Daycare3_Pocket'
    , dest: Pocket
    , pos: [250, -350]
    }
  , { image: 'Daycare3_Quit'
    , dest: Quit
    , pos: [250+310, -350]
    }
  ] 
  };

var Daycare2 =
  { name: "Daycare2"
  , offset: [216, -483]
  , duration: 12.9
  , buttons: [
    { image: 'Daycare2_GU'
    , dest: null
    , pos: [250, -350]
    }
  , { image: 'Daycare2_Daycare3'
    , dest: Daycare3
    , pos: [250+310, -350]
    }
  ] 
  };

var Job2Daycare1 =
  { name: "Job2Daycare1"
  , offset: [406, -433]
  , duration: 47
  , buttons: [
    { image: 'Daycare1_GU'
    , dest: null
    , pos: [250, -350]
    }
  , { image: 'Daycare1_Daycare2'
    , dest: Daycare2
    , pos: [250+310, -350]
    }
  ] 
  };

var Assist2 =
  { name: "Assist2"
  , offset: [76, -473]
  , duration: 39.8 - 2
  , buttons: [
    { image: 'Job1_Job2'
    , dest: Job2Daycare1
    , pos: [250, -350]
    }
  , { image: 'Job1_Assist'
    , dest: null
    , pos: [250+310, -350]
    }
  ] 
  };


// var Job1b =
//   { name: "Job1b"
// , offset: [556, -503]
// , duration: 0
//   , buttons: [
//     { image: 'Job1_Assist'
//     , dest: Assist
//     , pos: [250, -350]
//     }
//   , { image: 'Job1_Job2'
//     , dest: Job2Daycare1
//     , pos: [250+310, -350]
//     }
//   ] 
//   };

var Assist =
  { name: "Assist"
  , offset: [76, -473]
  , duration: 39.8 - 2
  , buttons: [
    { image: 'Gov3_Job1'
    , dest: null
    , pos: [250, -350]
    }
  , { image: 'Gov3_Assist'
    , dest: null
    , pos: [250+310, -350]
    }
  ] 
  };

var Job1 =
  { name: "Job1"
  , offset: [478, -566]
  , duration: 26
  , buttons: [
    { image: 'Job1_Assist'
    , dest: Assist2
    , pos: [250, -350]
    }
  , { image: 'Job1_Job2'
    , dest: Job2Daycare1
    , pos: [250+310, -350]
    }
  ] 
  };

  Assist.buttons[0].dest = Job1;

var Gov3 =
  { name: "Gov3"
  , offset: [325, -273]
  , duration: 89 - 3
  , buttons: [
    { image: 'Gov3_Job1'
    , dest: Job1
    , pos: [250, -350]
    }
  , { image: 'Gov3_Assist'
    , dest: Assist
    , pos: [250+310, -350]
    }
  ] 
  };

var Gov2 =
  { name: "Gov2"
  , offset: [589, -419]
  , duration: 52.9
  , buttons: [
    { image: 'Gov2_GU'
    , dest: null //GRAYED OUT
    , pos: [0, -350]
    , disabled: true
    }
  , { image: 'Gov2_Gov3'
    , dest: Gov3
    , pos: [310, -350]
    }
  ] 
  };

var Gov1 =
  { name: "Gov1"
  , offset: [556, -503]
  , duration: 94
  , buttons: [
    { image: 'Gov1_GU'
    , dest: null //GRAYED OUT
    , pos: [150, -250]
    , disabled: true
    }
  , { image: 'Gov1_Gov2'
    , dest: Gov2
    , pos: [150+310, -250]
    }
  ]  
  };


var nodes = [
  //GovA2 Not generating because it doesn't need butons
  Pocket
, Quit
, Daycare3
, Daycare2
, Job2Daycare1
, Assist2
, Assist
, Job1
, Gov3
, Gov2
, Gov1
];

for (var node of nodes) {
    console.log(`TRYING: ${node.name}`);
    fs.writeFileSync(`${node.name}.html`, generate(node));
    console.log(`Wrote out: ${node.name}`);
}