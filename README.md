# JsLazyLoader

Defers loading a JS file on mousemove or scroll for improved page load speed.


## Usage

Add this to your page:

```
window.onload = (e) => {
    new JsLazyLoader('https://someurl.com/script.js', function(){
      //init script
    });
};
```
