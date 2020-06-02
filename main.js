
window.addEventListener('load', function () {

  ribbonText = (typeof ribbonText !== 'undefined') ? ribbonText : "Hoy y siempre Maikel";
  ribbonUrl =  typeof ribbonUrl !== 'undefined' ? ribbonUrl : "https://github.com/llamaret/";
  ribbonPosition =  typeof ribbonPosition !== 'undefined' ? ribbonPosition : ""; // "right-bottom", "left-top", "left-bottom"
  ribbonFixed =  typeof ribbonFixed !== 'undefined' ? ribbonFixed : true;
  grayscaleValue = typeof grayscaleValue !== 'undefined' ? grayscaleValue : "grayscale(1)";
  setGrayscale = typeof setGrayscale !== 'undefined' ? setGrayscale : true;

  let htmlTag = document.getElementsByTagName('html')[0];
  let bodyTag = document.getElementsByTagName('body')[0];

  let anchor = document.createElement("a");
  anchor.href = ribbonUrl;
  anchor.className = "mourning-ribbon "+ribbonPosition+(ribbonFixed ? " fixed" : "");
  anchor.setAttribute("data-ribbon", ribbonText);
  anchor.title = ribbonText;
  anchor.text = ribbonText;
  anchor.target = "_blank"
  bodyTag.appendChild(anchor);

  if (setGrayscale){
    htmlTag.style.webkitFilter = grayscaleValue;
    htmlTag.style.filter = grayscaleValue;
  }

  var styles = `
                  .mourning-ribbon {
                    width: 12.1em;
                    height: 12.1em;
                    position: absolute;
                    overflow: hidden;
                    top: 0;
                    right: 0;
                    z-index: 9999;
                    pointer-events: none;
                    font-size: 13px;
                    text-decoration: none;
                    text-indent: -999999px;
                  }
                  
                  .mourning-ribbon.fixed {
                    position: fixed;
                  }
                  
                  .mourning-ribbon:hover, .mourning-ribbon:active {
                    background-color: rgba(0, 0, 0, 0.0);
                  }
                  
                  .mourning-ribbon:before, .mourning-ribbon:after {
                    /* The right and left classes determine the side we attach our banner to */
                    position: absolute;
                    display: block;
                    width: 15.38em;
                    height: 1.54em;
                  
                    top: 3.23em;
                    right: -3.23em;
                  
                    -webkit-box-sizing: content-box;
                    -moz-box-sizing: content-box;
                    box-sizing: content-box;
                  
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    transform: rotate(45deg);
                  }
                  
                  .mourning-ribbon:before {
                    content: "";
                  
                    /* Add a bit of padding to give some substance outside the "stitching" */
                    padding: .38em 0;
                  
                    /* Set the base colour */
                    background-color: #333;
                  
                    /* Set a gradient: transparent black at the top to almost-transparent black at the bottom */
                    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.15)));
                    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
                    background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
                    background-image: -ms-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
                    background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
                    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
                  
                    /* Add a drop shadow */
                    -webkit-box-shadow: 0 .15em .23em 0 rgba(0, 0, 0, 0.5);
                    -moz-box-shadow: 0 .15em .23em 0 rgba(0, 0, 0, 0.5);
                    box-shadow: 0 .15em .23em 0 rgba(0, 0, 0, 0.5);
                  
                    pointer-events: auto;
                  }
                  
                  .mourning-ribbon:after {
                    /* Set the text from the data-ribbon attribute */
                    content: attr(data-ribbon);
                  
                    /* Set the text properties */
                    color: #fff;
                    font: 700 1em "Helvetica Neue", Helvetica, Arial, sans-serif;
                    line-height: 1.54em;
                    text-decoration: none;
                    text-shadow: 0 -.08em rgba(0, 0, 0, 0.5);
                    text-align: center;
                    text-indent: 0;
                  
                    /* Set the layout properties */
                    padding: .15em 0;
                    margin: .15em 0;
                  
                    /* Add "stitching" effect */
                    border-width: .08em 0;
                    border-style: dotted;
                    border-color: #fff;
                    border-color: rgba(255, 255, 255, 0.7);
                  }
                  
                  .mourning-ribbon.left-top, .mourning-ribbon.left-bottom {
                    right: auto;
                    left: 0;
                  }
                  
                  .mourning-ribbon.left-bottom, .mourning-ribbon.right-bottom {
                    top: auto;
                    bottom: 0;
                  }
                  
                  .mourning-ribbon.left-top:before, .mourning-ribbon.left-top:after, .mourning-ribbon.left-bottom:before, .mourning-ribbon.left-bottom:after {
                    right: auto;
                    left: -3.23em;
                  }
                  
                  .mourning-ribbon.left-bottom:before, .mourning-ribbon.left-bottom:after, .mourning-ribbon.right-bottom:before, .mourning-ribbon.right-bottom:after {
                    top: auto;
                    bottom: 3.23em;
                  }
                  
                  .mourning-ribbon.left-top:before, .mourning-ribbon.left-top:after, .mourning-ribbon.right-bottom:before, .mourning-ribbon.right-bottom:after {
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -ms-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                  }
                `;

  let styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

});