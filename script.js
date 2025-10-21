const body = document.body;
body.innerHTML = '<form><input name="question" type="text" placeholder="Will it rain today?"></form><div id="ball" class="ball"><span class="answer">Click to ask!</span></div>';

const answers = 
[
	"Yes",
	"Difinitely",
	"For sure!",
	"Maybe",
	"Not today",
	"No",
	"Not a chance!"
];

document.getElementById("ball").onclick = () => 
{
	let question = document.forms[0].question.value.trim();
	let response = "";
	
	if(question.length < 5)
	{
		response = "Question too short!";
	}
	else if(question[question.length - 1] != '?')
	{
		response = "Not a question!";
	}
	else 
	{
		response = answers[Math.floor(Math.random() * answers.length)];
	}
	
	ball.innerHTML = '<span class="answer">' + response + '</span>';
};