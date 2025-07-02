// Three.js utility functions for 3D animations
export const createFloatingCubes = () => {
  if (typeof window === 'undefined' || !window.THREE) return;

  const scene = new window.THREE.Scene();
  const camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new window.THREE.WebGLRenderer({ alpha: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  
  // Create floating cubes
  const geometry = new window.THREE.BoxGeometry();
  const material = new window.THREE.MeshBasicMaterial({ 
    color: 0x00FF88,
    wireframe: true,
    transparent: true,
    opacity: 0.3
  });
  
  const cubes: any[] = [];
  
  for (let i = 0; i < 5; i++) {
    const cube = new window.THREE.Mesh(geometry, material);
    cube.position.x = (Math.random() - 0.5) * 10;
    cube.position.y = (Math.random() - 0.5) * 10;
    cube.position.z = (Math.random() - 0.5) * 10;
    scene.add(cube);
    cubes.push(cube);
  }
  
  camera.position.z = 5;
  
  const animate = () => {
    requestAnimationFrame(animate);
    
    cubes.forEach((cube, index) => {
      cube.rotation.x += 0.01 * (index + 1);
      cube.rotation.y += 0.01 * (index + 1);
      cube.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
    });
    
    renderer.render(scene, camera);
  };
  
  return { renderer, animate };
};

export const initParticleSystem = (container: HTMLElement) => {
  if (typeof window === 'undefined' || !window.THREE) return;

  const scene = new window.THREE.Scene();
  const camera = new window.THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new window.THREE.WebGLRenderer({ alpha: true });
  
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);
  
  // Create particle system
  const particleCount = 100;
  const particles = new window.THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 100;
  }
  
  particles.setAttribute('position', new window.THREE.BufferAttribute(positions, 3));
  
  const particleMaterial = new window.THREE.PointsMaterial({
    color: 0x00FF88,
    size: 2,
    transparent: true,
    opacity: 0.6
  });
  
  const particleSystem = new window.THREE.Points(particles, particleMaterial);
  scene.add(particleSystem);
  
  camera.position.z = 50;
  
  const animate = () => {
    requestAnimationFrame(animate);
    
    particleSystem.rotation.y += 0.001;
    
    const positions = particleSystem.geometry.attributes.position.array as Float32Array;
    for (let i = 1; i < positions.length; i += 3) {
      positions[i] += Math.sin(Date.now() * 0.001 + i) * 0.01;
    }
    particleSystem.geometry.attributes.position.needsUpdate = true;
    
    renderer.render(scene, camera);
  };
  
  animate();
  
  return { renderer, scene, camera };
};
