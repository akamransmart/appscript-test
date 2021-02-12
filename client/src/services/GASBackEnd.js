'use strict';

class GASBackEnd
{
	constructor()
	{

	}
	addSIO() {
		return new Promise(function(resolve,reject) 
		{
			google.script.run.withSuccessHandler(function(res)
			{
				resolve(res);
			})
			.withFailureHandler(function()
			{
				reject();
			}).addSIO();
		});
	}
}

export default GASBackEnd;