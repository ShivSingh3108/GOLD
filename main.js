import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
 canvas: document.querySelector('#bg'),
});

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.render(scene, camera);

document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const texture = new THREE.TextureLoader().load('/AU.jpg')
const material = new THREE.MeshBasicMaterial({map: texture});

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );



const donut_geo2 = new THREE.TorusGeometry(0.5, 0.1, 16, 100);
const donut_texture = new THREE.TextureLoader().load('/ring.jpg')
const gold = new THREE.MeshBasicMaterial({map: donut_texture});
const donut2 = new THREE.Mesh(donut_geo2, gold );
donut2.position.set(37, 0, 0);
scene.add(donut2); 

const chip = new THREE.BoxGeometry(1.5,0.05,0.8);
const chip_texture = new THREE.TextureLoader().load('/circuit.jpg')
const color = new THREE.MeshBasicMaterial({color : 0x013220});
const ttopchip_material = new THREE.MeshBasicMaterial({map: chip_texture});

const chip_material = [color, color, ttopchip_material, ttopchip_material, color, color
]




const chip_mesh = new THREE.Mesh(chip, chip_material);
chip_mesh.position.set(39, 0, 0);
scene.add(chip_mesh);




camera.position.z = 2;

function animate() {
  requestAnimationFrame( animate );

 
  cube.rotation.y += 0.01;

  chip_mesh.rotation.y += 0.01;
  chip_mesh.rotation.x += 0.01;

  
  donut2.rotation.y += 0.02;
  

  renderer.render( scene, camera );

}

animate();
 function add_star() {
  const star_geometry = new THREE.PlaneGeometry(0.25, 24, 24);
  const star_material = new THREE.MeshBasicMaterial({ color: 0x8a7148 ,opacity: 0.8, transparent: true  });
  const star = new THREE.Mesh(star_geometry, star_material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(200));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(add_star);
 function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  cube.rotation.y += 0.01;
 
  

  camera.position.x = t * -0.1;
  camera.position.y = t * -0.000;
  camera.rotation.y = t * -0.000;
  

}

document.body.onscroll = moveCamera;
moveCamera();
 textmesh.position.z = 3;
 scene.add(textmesh);







