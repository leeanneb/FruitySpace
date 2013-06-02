#pragma strict

var x:float;
var y:float;

//theme for menu style
var theme:GUISkin;


function Start () {

}

function Update () {
	
}

function OnGUI()
{
	x = Screen.width/2;
	y = Screen.height/2;
	
	
	//to cusomize the style of the label
	GUI.skin = theme;
	

	if(GUI.Button(Rect(x-30,y+110,120,25),"Main Menu"))
	{
		//new game was pressed
		//scene 1...the main screen scene
		Application.LoadLevel(0);
	}
}