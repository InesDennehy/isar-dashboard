const scene = new THREE.Scene();

const background = new THREE.Color(0x1e293b);
scene.background = background;

let chart = document.getElementById('velocityChart');
const camera = new THREE.PerspectiveCamera(
  45,
  chart.offsetWidth / chart.offsetHeight,
  1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(chart.offsetWidth, chart.offsetHeight);
document.getElementById('velocityChart').appendChild(renderer.domElement);

//coordenates
//x
const xDirectionVector = new THREE.Vector3(1, 0, 0);
// xDirectionVector.normalize();
const xOrigin = new THREE.Vector3(0, 0, 0);
const xLength = 1.05;
const xColorHex = 0x94a3b8;
const xHelper = new THREE.ArrowHelper(
  xDirectionVector,
  xOrigin,
  xLength,
  xColorHex,
  0.1, 0.05
);
scene.add(xHelper);

//y
const yDirectionVector = new THREE.Vector3(0, 1, 0);
// yDirectionVector.normalize();
const yOrigin = new THREE.Vector3(0, 0, 0);
const yLength = 1.05;
const yColorHex = 0x94a3b8;
const yHelper = new THREE.ArrowHelper(
  yDirectionVector,
  yOrigin,
  yLength,
  yColorHex,
  0.1, 0.05
);
scene.add(yHelper);

//z
const zDirectionVector = new THREE.Vector3(0, 0, 1);
// zDirectionVector.normalize();
const zOrigin = new THREE.Vector3(0, 0, 0);
const zLength = 1.05;
const zColorHex = 0x94a3b8;
const zHelper = new THREE.ArrowHelper(
  zDirectionVector,
  zOrigin,
  zLength,
  zColorHex,
  0.1, 0.05
);
scene.add(zHelper);

var arrowDirectionVector = new THREE.Vector3(0, 0, 0);
// arrowDirectionVector.normalize();
const arrowOrigin = new THREE.Vector3(0, 0, 0);
const arrowLength = 0;
const arrowColorHex = 0x691291;
var arrowHelper = new THREE.ArrowHelper(
  arrowDirectionVector,
  arrowOrigin,
  arrowLength,
  arrowColorHex,
  0.1, 0.05
);
scene.add(arrowHelper);

camera.position.set(2.5,2.5,2.5);
camera.lookAt(new THREE.Vector3(0,0,0));

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

function setVectorDirection(x, y, z) {
  arrowDirectionVector.set(x, z, y);
  arrowHelper.setDirection(arrowDirectionVector);
  let module = Math.sqrt(x**2 + y**2 + z**2);
  arrowHelper.setLength(module / 1000, 0.1, 0.05);
}