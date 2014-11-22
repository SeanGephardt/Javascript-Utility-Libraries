/* 
Copyright 2014 Sean Gephardt. http://seangephardt.com/
Used as a testing function.
 To be included in a html page.
 Requires jQuery.
 */
"use strict";
$( function ()
{
	try
	{
		console.clear();
		console.info( "BEGIN" );

		/* begin testing of 'supergood' here */
		console.log( "SuperGood.Random.GreyColors()", SuperGood.Random.GreyColors() );
	}
	catch ( err )
	{
		console.error( err.number, err.name, err.message, err.stack );
	}
	finally
	{
		console.info( "END" );
	}
	return;
} );