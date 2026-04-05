import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const vertexShader = /* glsl */ `
uniform float uTime;
uniform vec2 uPointer;

void main() {
  vec3 pos = position;
  vec2 p = pos.xy;
  float t = uTime;

  // Horizontal wavefronts: phase from y so bands run left–right and travel vertically
  float ripples = sin(p.y * 2.55 - t * 1.85) * 0.09;
  ripples += sin(p.y * 5.1 - t * 1.85) * 0.03;

  float driftPhaseA = sin(t * 0.055) * 1.15;
  ripples += sin(p.y * 3.15 + driftPhaseA - t * 2.1) * 0.052;

  float driftPhaseB = cos(t * 0.042) * 1.0;
  ripples += sin(p.y * 2.75 + driftPhaseB - t * 1.72) * 0.044;

  float sheet =
    sin(p.x * 0.22 + t * 0.19) * 0.032 + sin(p.x * 0.18 - t * 0.14) * 0.026;

  vec2 d = p - uPointer;
  float distSq = dot(d, d);
  float bulge = exp(-distSq * 0.065) * 0.42;

  pos.z += ripples + sheet + bulge;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const fragmentShader = /* glsl */ `
uniform vec3 uColor;
uniform float uAlpha;

void main() {
  gl_FragColor = vec4(uColor, uAlpha);
}
`;

const DIVISIONS = 80;

function buildAxisAlignedGrid(nx, ny, gw, gh) {
  const halfW = gw / 2;
  const halfH = gh / 2;
  const dx = gw / nx;
  const dy = gh / ny;
  const positions = [];

  for (let j = 0; j <= ny; j++) {
    const y = -halfH + j * dy;
    for (let i = 0; i < nx; i++) {
      const x0 = -halfW + i * dx;
      const x1 = -halfW + (i + 1) * dx;
      positions.push(x0, y, 0, x1, y, 0);
    }
  }

  for (let i = 0; i <= nx; i++) {
    const x = -halfW + i * dx;
    for (let j = 0; j < ny; j++) {
      const y0 = -halfH + j * dy;
      const y1 = -halfH + (j + 1) * dy;
      positions.push(x, y0, 0, x, y1, 0);
    }
  }

  return new Float32Array(positions);
}

function WireMesh({ isDark }) {
  const { viewport, gl, camera } = useThree();
  const targetPointer = useRef(new THREE.Vector2(0, 0));
  const smoothPointer = useRef(new THREE.Vector2(0, 0));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(0, 0) },
      uColor: { value: new THREE.Vector3(0.55, 0.58, 0.65) },
      uAlpha: { value: 0.14 },
    }),
    []
  );

  useEffect(() => {
    if (isDark) {
      uniforms.uColor.value.set(0.55, 0.58, 0.65);
      uniforms.uAlpha.value = 0.14;
    } else {
      uniforms.uColor.value.set(0.42, 0.45, 0.52);
      uniforms.uAlpha.value = 0.2;
    }
  }, [isDark, uniforms]);

  const { width, height } = viewport;
  const gw = Math.max(width, 0.01) * 2.35;
  const gh = Math.max(height, 0.01) * 2.35;

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const arr = buildAxisAlignedGrid(DIVISIONS, DIVISIONS, gw, gh);
    geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return geo;
  }, [gw, gh]);

  useEffect(() => {
    return () => geometry.dispose();
  }, [geometry]);

  useEffect(() => {
    const el = gl.domElement;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const ndcX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ndcY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), camera);
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const hit = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, hit);
      targetPointer.current.set(hit.x, hit.y);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [gl, camera]);

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime;
    const s = smoothPointer.current;
    const t = targetPointer.current;
    const k = 0.1;
    s.x += (t.x - s.x) * k;
    s.y += (t.y - s.y) * k;
    uniforms.uPointer.value.copy(s);
  });

  return (
    <lineSegments geometry={geometry}>
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
      />
    </lineSegments>
  );
}

function Scene({ isDark }) {
  const bg = isDark ? "#151515" : "#ffffff";
  return (
    <>
      <color attach="background" args={[bg]} key={bg} />
      <WireMesh isDark={isDark} />
    </>
  );
}

export default function HeroMesh() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-page" aria-hidden />;
  }

  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 48 }}
        gl={{
          alpha: false,
          antialias: true,
          powerPreference: "high-performance",
        }}
        style={{ width: "100%", height: "100%", pointerEvents: "none" }}
        dpr={[1, 2]}
      >
        <Scene isDark={isDark} />
      </Canvas>
    </div>
  );
}
