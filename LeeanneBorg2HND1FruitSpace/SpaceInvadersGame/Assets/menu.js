#pragma strict

var x:float;
var y:float;

var nameInput:boolean;

//theme for menu style
var theme:GUISkin;


function Start () {
	nameInput = false;
}

function Update () {
	
}

function OnGUI()
{
	x = Screen.width/2;
	y = Screen.height/2;
	
	
	//to cusomize the style of the label
	GUI.skin = theme;
	
	if (!nameInput) {
		if(GUI.Button(Rect(x-45,y+110,120,25),"Start Game"))
		{
			
			nameInput = true;
		}
		
			if(GUI.Button(Rect(x-45,y+150,120,25),"Exit Game"))
		{
//quit
			Application.Quit();
		}
	} else {
		SpaceshipController.playerName = GUI.TextField(Rect(x-45, y+110, 120, 25), SpaceshipController.playerName);
		
		if (GUI.Button(Rect(10, 10, 120, 25), "Back")) {
			nameInput = false;
		}
		
		if (GUI.Button(Rect(10, 45, 120, 25), "OK")) {
		//new game was pressed
			//scene 1...the main screen scene
			Application.LoadLevel(1);
		}
	}
}