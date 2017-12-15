# JSMatrixRain
MatrixRain implementation in JavaScript.

## Usage ##

#### HTML ####
```
<script type="text/javascript" src="matrixRain.js"></script>
```
#### JavaScript ####
```
var init = function(){
  cMatrixRain.width = window.innerWidth;
  cMatrixRain.height = window.innerHeight;
  matrixRain.init(
    'cMatrixRain', //idCanvas
    15, //FontSize
    30, //fps (optional)
    0.975 //rnd (optional)
  );
};
window.addEventListener('load', function() { init(); });
window.addEventListener('resize', function() { init(); });
```

#### CSS ####
```
@font-face{font-family: 'MatrixCode'; src: url(matrix_code_nfi.otf);}
```

## TODO ##
* colors
* auto resize
