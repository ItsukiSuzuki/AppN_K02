#pragma strict

function Start () {

}

function Update () {
	transform.position.x += (30.0 * Time.deltaTime);
	if (transform.position.x >= 80){
		transform.position.x = -80;
	}
}