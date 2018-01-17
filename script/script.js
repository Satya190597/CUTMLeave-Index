/**
Author : Satya Prakash Nandy
Date   : 17 January 2018
Objective : To change background image
*/
$(document).ready(function(){
	var images = ["four","three","two"]
	var index = 0;
	var flag = 0;

	//--------------- Set Interval ------------
	setInterval(image_change,4000)

	//--------------- Change Image ------------
	function image_change()
	{
		//------------ Decrement Image -------------
		if(index>=images.length || flag==1)
		{
			flag = 1;
			if(flag==1)
			{
				$("#"+images[--index]).fadeIn(2000);
				if(index==-1)
				{
					index=0;
					flag=0;
				}	
			}	
		}
		//------------ Increment Image -------------
		else
		{
			$("#"+images[index]).fadeOut(2000);	
			index++;
		}
	}
});
