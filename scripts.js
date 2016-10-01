function problemOne() 
{
	// Get all the numbers from the form.

	let scoreList = [];

	for(let i = 1; i <= 6; i++)
		scoreList.push(parseFloat(document.getElementById('num' + i).value));

	// Get rid of NaNs from invalid input

	scoreList = scoreList.map(function(v){ return isNaN(v) ? 0 : v; });

	// Find the average, not including the lowest score.

	let min = getMinIdx(scoreList);
	let average = 0;

	for(let i = 0; i < scoreList.length; i++)
		if(min != i)
			average += scoreList[i];
	  
	average /= scoreList.length - 1;

	// Print it to the console.

	console.log(average);
}

function problemOneBonus()
{
	// Split up the list of scores

	scoreList = document.getElementById('bonusField').value.split(",");

	// Trim, and turn them into floats

	scoreList = scoreList.map(function(v){ return parseFloat(v.trim()); });
	
	// Find the average, not including the lowest score.

	let min = getMinIdx(scoreList);
	let average = 0;

	for(let i = 0; i < scoreList.length; i++)
		if(min != i)
			average += scoreList[i];
	  
	average /= scoreList.length - 1;
	
	if(scoreList.length == 1)
		average = scoreList[0];

	// Print it to the console.

	console.log(average);
}

function problemTwo()
{
	// Get all the letter grades from the form.

	let gradeList = [];

	for(let i = 1; i <= 6; i++)
		gradeList.push([document.getElementById('grade' + i).value, document.getElementById('gradeHonors' + i).checked]);
	
	// Compute the GPA.
	
	let GPA = getNumericalGPAFromLetter(gradeList);
	
	// Print it to the console.
	
	console.log(GPA);
	
	// If it is 3.0 or above, turn the div with id="box" green. Otherwise, turn it red.
	
	document.getElementById("box").style.backgroundColor = GPA >= 3.0 ? "green" : "red";
}

function getMinIdx(numList)
{
	let min = 0;
	
	for(let i = 0; i < numList.length; i++)
		if(numList[i] < numList[min])
			min = i;
		
	return min;
}

function getNumericalGPAFromLetter(grades)
{
	let sum = 0;
	
	for(let i = 0; i < grades.length; i++)
	{
		let letter = grades[i][0]
		
		switch(true)
		{
			case letter == 'a' || letter == 'A':
				sum += 4 + (grades[i][1] ? 1 : 0);
				
				break;
				
			case letter == 'b' || letter == 'B':
				sum += 3 + (grades[i][1] ? 1 : 0);
				
				break;
				
			case letter == 'c' || letter == 'C':
				sum += 2;
				
				break;
				
			case letter == 'd' || letter == 'D':
				sum += 1;
				
				break;
				
			default:
				break;
		}
	}
	
	return sum / grades.length;
}