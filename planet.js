const container=document.getElementById('planet-container');
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(50,container.clientWidth/container.clientHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
renderer.setSize(container.clientWidth,container.clientHeight);
container.appendChild(renderer.domElement);
const geometry=new THREE.SphereGeometry(1,32,32);
const texture=new THREE.TextureLoader().load('https://threejsfundamentals.org/threejs/resources/images/earth-day.jpg');
const material=new THREE.MeshBasicMaterial({map:texture});
const sphere=new THREE.Mesh(geometry,material);
scene.add(sphere);
camera.position.z=2.5;
function animate(){
  requestAnimationFrame(animate);
  sphere.rotation.y -= 0.002;
  renderer.render(scene,camera);
}
animate();
