#pragma strict

function Start () {

}

function Update () { // 一定時間ごとに行われる処理
	if (this.rigidbody.useGravity == false) {
	transform.position.x +=
		Input.GetAxis("Horizontal") * (30.0 * Time.deltaTime);
	if (transform.position.x >= 50) {
		transform.position.x = -50;
	} else if (transform.position.x <= -50) {
		transform.position.x = 50;
	}
		}
}