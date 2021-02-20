import { DirectionalLight } from '/fakher/intro/threejs/node_modules/three/build/three.module.js';
import { MeshPhongMaterial } from '/fakher/intro/threejs/node_modules/three/build/three.module.js';
import {Scene} from '/fakher/intro/threejs/node_modules/three/build/three.module.js';
import {WebGLRenderer} from '/fakher/intro/threejs/node_modules/three/build/three.module.js';
import {PerspectiveCamera} from '/fakher/intro/threejs/node_modules/three/build/three.module.js';
import {BoxGeometry} from '/fakher/intro/threejs/node_modules/three/build/three.module.js';
import * as THREE from '/fakher/intro/threejs/node_modules/three/build/three.module.js';
import {Mesh} from '/fakher/intro/threejs/node_modules/three/build/three.module.js';
import {GLTFLoader}  from '/fakher/intro/threejs/node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {SphereGeometry} from  '/fakher/intro/threejs/node_modules/three/build/three.module.js';
import {IcosahedronGeometry} from  '/fakher/intro/threejs/node_modules/three/build/three.module.js';
window.onload=()=>{
  let canvas=document.querySelector('canvas')
  const renderer=new WebGLRenderer({canvas})
  const fov=75
  const near=0.1
  const far = 10 
  const aspect=2
  const camera = new PerspectiveCamera(fov,aspect,near,far)
  camera.position.z=8
  const scene= new Scene()
  const geometry= new SphereGeometry(1,24,24)
  const material=new MeshPhongMaterial({color:0xFFA500})
  const mesh = new Mesh(geometry,material)
  const light = new DirectionalLight(0xFFFFFF,1)
  light.position.set(-2,2,8)
  scene.add(light)
  const vector=new THREE.Vector3(1,0,1)
 const object = new THREE.Object3D()
 const object0 = new THREE.Object3D()
 const object1 = new THREE.Object3D()
 const geo0=new SphereGeometry(0.5,24,24)
 const mat0=new MeshPhongMaterial({color:0x1167b1})
 const earthmesh=new Mesh(geo0,mat0)
 const geo1=new SphereGeometry(0.2,24,24)
 const mat1=new MeshPhongMaterial({color:0xffffff})
 const moonmesh=new Mesh(geo1,mat1)
 object0.add(earthmesh)
 object.add(object0)
 object0.position.set(0,0,0)
 object0.rotation.z=(15*Math.PI)/180
 object1.rotation.y=(15*Math.PI)/180
 object1.position.set(5,0,0)
 object1.add(moonmesh)
 object0.add(object1)
 earthmesh.position.set(5,0,0)
 moonmesh.position.set(0,1,0)
 mesh.position.set(0,0,0)
  object.position.set(0,1,2)
 object.add(mesh)
 scene.add(object)
  function render(time){
    if(resizerenderertodisplaysize(renderer))
    {
      canvas=renderer.domElement
      camera.aspect=canvas.clientWidth/canvas.clientHeight
      camera.updateProjectionMatrix()
    }
    let speed=time*0.001
    object0.rotateY(Math.PI*0.001)
    object1.rotateX(Math.PI*0.01)
   renderer.render(scene,camera)
    requestAnimationFrame(render)
  }
  requestAnimationFrame(render)
function resizerenderertodisplaysize(renderer){
  let canvas=renderer.domElement
  let width=canvas.clientWidth
  let height=canvas.clientHeight
  let need=(canvas.width!==width || canvas.height!==height)
  if(need){
    renderer.setSize(width,height,false)
  }
  return need
}
}
