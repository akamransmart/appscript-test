'use strict';
import MockBackEnd from './MockBackEnd.js';
import GASBackEnd from './GASBackEnd.js';

class BackEndWrapper
{
	constructor()
	{
		if (typeof google !== 'undefined')
		{
			this.real = new GASBackEnd();
		}
		else
		{
			this.real = new MockBackEnd();
		}
	}

	addSIO()
	{
		return this.real.addSIO();
	}
	
};

export default BackEndWrapper;

