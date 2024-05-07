varying vec2 vUv;
uniform float uValue;

#include ../includes/simplexNoise3d.glsl


void main () {
  vec3 color = vec3(0.1);

  float n = simplexNoise3d(vec3(vUv * 5.0, .25)) * 0.5 + 0.5;
  float m = step(uValue, n);

  csm_DiffuseColor = vec4(color, m);

}