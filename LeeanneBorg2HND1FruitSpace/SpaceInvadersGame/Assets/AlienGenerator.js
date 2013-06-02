#pragma strict
var alien:Rigidbody;
var rows:int;
var columns:int;
var level:int = 1;
static var score:int;

var backgroundMaterials:Material[];

function generateAliens(rows:int,columns:int)
{
	transform.position.x = 0;
	var ypos = transform.position.y;
	// rows 
	for(var rowscounter=0;rowscounter<rows;rowscounter++)
	{
		var tempAlien:Rigidbody;
		//repeat for COLUMNS times
		for(var counter=0;counter<columns;counter++)
		{
			//y position is the position of the alien swarm.  .
			tempAlien = Instantiate(alien,Vector3(counter*2,ypos-(rowscounter*1.5),1),Quaternion.identity);
			//this is placed in the alien swarm
			tempAlien.transform.parent = this.transform;
	
		}
	}
}



function Start () {
	generateAliens(rows,columns);
	score = 0;
}

function Update () {
	if (GameObject.FindGameObjectsWithTag("alien").Length == 0) { // if aliens are all killed it will go to the next level
		NextLevel();
		
		// the score will always reset in the next 2 levels 
	SpaceshipController.score = 0;
	}
}

function NextLevel() {
	level++;
	//change level 2
	switch (level) {
		case 2:
		score = 0;
			generateAliens(3, 6); // setting the aliens 
			this.GetComponent(SwarmController).rightmargin = 3; //setting the border
			break;
			//change level 3
		case 3:
		score = 0;
			generateAliens(5, 8);
			this.GetComponent(SwarmController).rightmargin = -1;
			break;
		case 4: //if the player passes the level it will go to the win page
			Application.LoadLevel(2);
			break;
	}
	
	GameObject.Find("Plane").renderer.material = backgroundMaterials[level - 2]; //changing the background
}