// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    initThreeJS();
});

function initThreeJS() {
    // 1. Scene Setup
    const scene = new THREE.Scene();

    // Add some subtle ambient fog to blend with the dark background
    scene.fog = new THREE.FogExp2(0x050505, 0.0015);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30; // Move camera back so we can see the geometry

    // 3. Renderer Setup
    const canvas = document.querySelector('#bg-canvas');
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true, // Transparent background to let CSS colors show through if needed occasionally
        antialias: true
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 4. Geometry and Material Setup
    // We will create a complex 3D shape, like an Icosahedron, paired with a wireframe for a techy look
    
    // Core shape
    const geometry = new THREE.IcosahedronGeometry(10, 1);
    
    // Vibrant material reflecting light
    const material = new THREE.MeshStandardMaterial({
        color: 0x8b5cf6, // Purple accent matching CSS
        roughness: 0.1,
        metalness: 0.8,
        flatShading: true, // Gives it a nice low-poly faceted look
    });
    
    const coreMesh = new THREE.Mesh(geometry, material);
    scene.add(coreMesh);

    // Glowing Wireframe shape surrounding the core
    const wireframeGeo = new THREE.IcosahedronGeometry(14, 1);
    const wireframeMat = new THREE.MeshBasicMaterial({
        color: 0x00f0ff, // Cyan accent matching CSS
        wireframe: true,
        transparent: true,
        opacity: 0.15
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    scene.add(wireframeMesh);
    
    // Tiny floating particles in the background
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 700;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.1,
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.8
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // 5. Lighting Setup
    // Ambient light so the shadows aren't pitch black
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Point lights for dramatic color highlights
    const pointLightCyan = new THREE.PointLight(0x00f0ff, 2, 50);
    pointLightCyan.position.set(20, 10, 10);
    scene.add(pointLightCyan);

    const pointLightPurple = new THREE.PointLight(0x8b5cf6, 2, 50);
    pointLightPurple.position.set(-20, -10, 10);
    scene.add(pointLightPurple);

    // 6. Interaction Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    // Listen to mouse movement for interactive parallax
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    });

    // 7. Animation Loop
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        
        const elapsedTime = clock.getElapsedTime();

        // Base rotation logic
        coreMesh.rotation.y += 0.002;
        coreMesh.rotation.x += 0.002;
        
        wireframeMesh.rotation.y -= 0.003;
        wireframeMesh.rotation.x -= 0.001;
        
        // Gentle floating animation
        coreMesh.position.y = Math.sin(elapsedTime * 0.5) * 2;
        wireframeMesh.position.y = Math.sin(elapsedTime * 0.5) * 2;

        // Animate particles slowly
        particlesMesh.rotation.y = -elapsedTime * 0.05;

        // Interactive mouse parallax logic
        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;

        // Smoothly interpolate current rotation towards target based on mouse
        coreMesh.rotation.y += 0.05 * (targetX - coreMesh.rotation.y);
        coreMesh.rotation.x += 0.05 * (targetY - coreMesh.rotation.x);
        
        // Slightly move the camera based on scroll for depth
        const scrollY = window.scrollY;
        camera.position.y = -(scrollY * 0.01);
        
        // Slightly shift the core mesh horizontally based on scroll to make room for text visually
        coreMesh.position.x = (scrollY * 0.002) + 10;
        wireframeMesh.position.x = (scrollY * 0.002) + 10;

        renderer.render(scene, camera);
    }

    animate();

    // 8. Handle Window Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}
