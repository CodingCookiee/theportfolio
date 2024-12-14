import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const loadGLTF = (url) => {
  return new Promise((resolve) => {
    const loader = new GLTFLoader();
    loader.load(url, 
      (gltf) => resolve(true),
      undefined,
      () => resolve(false)
    );
  });
};

const loadFBX = (url) => {
  return new Promise((resolve) => {
    const loader = new FBXLoader();
    loader.load(url, 
      (fbx) => resolve(true),
      undefined,
      () => resolve(false)
    );
  });
};


export const preloadResources = async () => {
    try {
      // Models preloading using URLs
      const modelUrls = [
        "/models/model.glb",
        "/models/computer.glb",
        "/models/cube.glb",
        "/models/react.glb",
        "/models/desk.glb",
        "/models/animations/developer.glb",
        "/models/animations/clapping.fbx",
        "/models/animations/idle.fbx",
        "/models/animations/salute.fbx",
        "/models/animations/victory.fbx",
      ];
  
      // Assets preloading
      const staticAssets = [
        "/assets/textures/cube.png",
        "/assets/textures/rings.png",
        "/assets/textures/desk/screen.png",
        "/assets/textures/desk/screen-dark.png",
        "/assets/favicon-light.svg",
        "/assets/favicon-dark.svg",
        "/assets/textures/desk/chair.png",
        "/assets/textures/desk/cpu.png",
        "/assets/textures/desk/cushion.png",
        "/assets/textures/desk/monitor.png",
        "/assets/textures/desk/table.png",
        "/assets/textures/desk/cpu.png",
        "/assets/sun.png",
        "/assets/moon.png",
        "/assets/circle.svg",
        "/assets/waving.svg",
        "/assets/arrow-up.png",
        "/assets/left-arrow.svg",
        "/assets/right-arrow.svg"
      ];
  
      const videoAssets = [
        "/textures/projects/pandaai.mp4",
        "/textures/projects/pandaplay.mp4",
        "/textures/projects/fiverr.mp4",
        "/textures/projects/Zentry.mp4"
      ];
  
      const audioAssets = [
        "/audios/mouse-click.wav",
        "/audios/modern-tech.wav",
        "/audios/background_music.mp3"
      ];
  
      await Promise.all([
        // Models loading
        ...modelUrls.map(url => {
          if (url.endsWith('.glb')) {
            return loadGLTF(url);
          } else if (url.endsWith('.fbx')) {
            return loadFBX(url);
          }
          return Promise.resolve(true);
        }),

        // Static assets preloading
        ...staticAssets.map(url => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
          });
        }),
  
        // Video preloading
        ...videoAssets.map(url => {
          return new Promise((resolve, reject) => {
            const video = document.createElement('video');
            video.src = url;
            video.preload = 'auto';
            video.onloadeddata = resolve;
            video.onerror = reject;
          });
        }),
  
        // Audio preloading
        ...audioAssets.map(url => {
          return new Promise((resolve, reject) => {
            const audio = new Audio();
            audio.src = url;
            audio.preload = 'auto';
            audio.oncanplaythrough = resolve;
            audio.onerror = reject;
          });
        })
      ]);
      return true;
    } catch (error) {
      console.error("Resource preloading failed:", error);
      return false;
    }
  };
