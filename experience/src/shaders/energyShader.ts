// Custom GLSL Shader for ethereal computational energy glow

export const EnergyShader = {
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      // Fresnel effect for rim glow
      vec3 viewDirection = normalize(-vPosition);
      float fresnel = 1.0 - max(0.0, dot(viewDirection, vNormal));
      fresnel = pow(fresnel, 2.5);

      // Subtle pulse
      float pulse = 0.85 + 0.15 * sin(uTime * 1.5 + vPosition.y * 3.0);
      vec3 color = mix(uColorA, uColorB, vUv.y + 0.2 * sin(uTime + vUv.x * 6.28));
      
      float alpha = fresnel * 0.85 * pulse;
      gl_FragColor = vec4(color, alpha);
    }
  `
};
