// Three.js Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('cube-container').appendChild(renderer.domElement);

// Floating Cube
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshPhongMaterial({ 
    color: 0x4a90e2,
    transparent: true,
    opacity: 0.8
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0x4a90e2, 1);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Camera Position
camera.position.z = 5;

// GSAP Animation for Cube Rotation
gsap.to(cube.rotation, {
    x: Math.PI * 2,
    y: Math.PI * 2,
    duration: 10,
    repeat: -1,
    ease: "none"
});

// Hover Interaction
document.addEventListener('mousemove', (e) => {
    cube.rotation.x = (e.clientY / window.innerHeight) * 2;
    cube.rotation.y = (e.clientX / window.innerWidth) * 2;
});

// Render Loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
// GSAP Scroll Triggers
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section").forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
    });
});

// Animate Skill Tags
gsap.from(".skill-tag", {
    opacity: 0,
    x: -50,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#about",
        start: "top 60%",
    },
});