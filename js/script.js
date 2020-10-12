

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var element = document.getElementById("container");


var renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
element.appendChild( renderer.domElement );

var loader = new THREE.OBJLoader(); 
loader.load(

 '3D Model/Tiend3D.obj',

 function ( object ) {
     scene.add( object );
 });

 function render() {

   window.requestAnimationFrame( render );
   renderer.render( scene, camera );

 }

 render();

