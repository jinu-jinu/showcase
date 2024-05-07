varying vec2 vUv;

uniform float uTime;
uniform float uRotZ;

vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, s, -s, c);
	return m * v;
}

void main () {
  vec3 pos = position;
  
  float angle = sin(-uTime) * .5 - uRotZ;
  pos.xy = rotate(pos.xy, angle);

  csm_Position = pos;

  vUv = uv;
}