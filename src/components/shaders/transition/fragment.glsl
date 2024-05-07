varying vec2 vUv;
uniform sampler2D uTex;
uniform float uValue;

#include ../includes/simplexNoise3d.glsl


void main () {
  vec4 color = texture2D(uTex, vUv);
  color.rgb -= 0.14;

  // 노이즈 트랜지션으로 변경
  float n = simplexNoise3d(vec3(vUv * 5.0, .25)) * 0.5 + 0.5;
  float m = step(uValue, n);



  csm_DiffuseColor = vec4(color.rgb, m);

}