#pragma strict

static var leftmost:float;
static var rightmost:float;
static var topmost:float;
static var bottommost:float;


function Start () {

}

function Update () {

	//calculate borders
	//leftmost border
	leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	

	// the x position in the right most border attached to the center
	rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	
	// the y position in the top most border attached to the center
	topmost = Camera.main.ScreenToWorldPoint(Vector3(0,Screen.height,0)).y;
	
	// the y position in the bottom most border attached to the center
	bottommost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y;
	
}


static function EnableBorders(object:Transform)
{

	//if the object leaves the screen to the left
	if (object.position.x < leftmost)
	{
		object.position.x = rightmost;
	}

	//if object leaves the screen to the right
	if (object.position.x > rightmost)
	{
		object.position.x = leftmost;
	}
	
	
}