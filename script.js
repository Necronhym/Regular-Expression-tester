console.log("JS Loaded");
document.getElementById("B").addEventListener("click",Test );
document.getElementById("Test").style = 'border: 1px solid grey; height:30px;';
document.getElementById("Ex").style = 'border: 1px solid grey; height:30px;';
function Test()
	{
		var Ex = new RegExp(document.getElementById("Ex").value);
		var T = document.getElementById("Test").value;
		if (Ex.test(T))
			{
				document.getElementById("Test").style = 'border: 1px solid green; height:30px;';
			}
		else
			{
				document.getElementById("Test").style = 'border: 1px solid red; height: 30px;';
			}
	}
