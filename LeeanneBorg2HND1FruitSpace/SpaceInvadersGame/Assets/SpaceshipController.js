#pragma strict

var laserSlot:Rigidbody;
static var score:int;
//health set to 100
static var health:int=100;
// how many aliens are hit
static var hit:int;
// how many grapefruit are fired
static var fired:int;

static var playerName:String = "";

var colours:Material[];

//game over
var gameover:boolean=false;

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag=="enemylaser")
	{
		// pinapple spaceship is hit and it is going to change colors 
		this.renderer.material = colours[1];
		health-=5;
	}
	if (health <=0)
	{
		Application.LoadLevel(3);
	}
}

function OnTriggerExit(other:Collider)
{
	//changes back to normal pinapple color 
	this.renderer.material = colours[0];
}



function OnGUI()
{

	var missed = fired - hit;
	GUI.color = Color.white;
	
	GUI.Label(Rect(55,0,100,25),"Player: "+playerName);
	GUI.Label(Rect(150,0,100,25),"Score: "+score);
	GUI.Label(Rect(230,0,100,25),"Health: "+health);
	GUI.Label(Rect(330,0,100,25),"Aliens Hit: "+hit);
	GUI.Label(Rect(440,0,100,25),"Fired: "+fired);
	GUI.Label(Rect(530,0,120,25),"Missed: "+missed);




if(gameover==true)
{
		GUI.Label(Rect(100,100,250,50),"Pinapple Crashed!, Game Over");
	}
}

function Start () {

//when the game will start again it will restart the following 
	score = 0; 
	health = 100;
	fired = 0;
	hit = 0;
	this.renderer.material = colours[0];
}

function Update () {
	BorderController.EnableBorders(this.transform);
	transform.Translate(Vector3.right * 15 * Input.GetAxis("Horizontal") * Time.deltaTime);
	//shoot the laser
	if(Input.GetKeyDown(KeyCode.Space))
	{
		Instantiate(laserSlot,transform.position,transform.rotation);
		fired++;
	}
	
	var border:float=1.0;

if (transform.position.x < BorderController.leftmost + border)
{
transform.position.x = BorderController.leftmost + border;
}

if (transform.position.x > BorderController.rightmost - border)
{
transform.position.x = BorderController.rightmost - border;
}


transform.Translate(Vector3.right * 10 * Time.deltaTime * Input.GetAxis("Horizontal"));
	
	
	if (health <=0)
	{
		//the game will ends 
	}
}