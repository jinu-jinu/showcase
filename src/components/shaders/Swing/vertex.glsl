varying vec2 vUv;

uniform float uTime;

vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, s, -s, c);
	return m * v;
}

void main () {
  vec3 pos = position;
  
  float angle = sin(-uTime);
  pos.xz = rotate(pos.xz, angle);

  csm_Position = pos;

  vUv = uv;
}