# JSMatrixRain

# Usage #
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

## TODO ##
* colors
* auto resize
