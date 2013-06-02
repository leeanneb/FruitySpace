#pragma strict

//slot for the enemy laser
var enemyLaser:Rigidbody;

function shootLaser()
{
	//create an instance of enemy laser at the position of each alien
	Instantiate(enemyLaser,transform.position,transform.rotation);
}

function Start () {
	var delay:float;
	delay = Random.Range(1.0,3.0);
	InvokeRepeating("shootLaser",delay,delay);
}

function Update () {

}