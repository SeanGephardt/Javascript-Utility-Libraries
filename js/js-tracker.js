/* 
Copyright 2017 Sean Gephardt. http://seangephardt.com/
Used for extreme interactivity tracking.
All events are capture and sent to a service for BI.
http://www.quirksmode.org/js/events_order.html
 */
"use strict";
( function ()
{
	try
	{
		console.info( "Begin JavaScript Tracking" );

		var _start_time = new Date().toJSON();
		var _end_time = new Date().toJSON();

		window.document.addEventListener( "DOMContentLoaded", function ( event )
		{
			console.log( "JavaScript Tracking enabled" );
			//console.log( "event:", event );
			return;
		} );
		window.onmousemove = function (event)
		{
			// wrap only the event data that is needed.
			//_end_time = new Date().toJSON();
			//console.log( event.x, event.y, _start_time, _end_time );
			return;
		};
		window.onload = function ()
		{	// very invasive, always prompts users
			// blocked for whatever reason - alert( "onbeforeunload" );
			_end_time = new Date().toJSON();
			console.log( "onload", _start_time, _end_time );
			// ajax post
			return;	//"Bye now!";
		};
		window.onbeforeunload = function ()
		{	// very invasive, always prompts users
			// blocked for whatever reason - alert( "onbeforeunload" );
			//	_start_time = Date.now();
			_end_time = new Date().toJSON();
			console.log( "onbeforeunload", _start_time, _end_time );
			// ajax post
			return;	//"Bye now!";
		};
		window.onunload = function ()
		{	// very invasive, always prompts users
			// blocked for whatever reason - alert( "onbeforeunload" );
			//	_start_time = Date.now();
			_end_time = new Date().toJSON();
			console.log( "onunload", _start_time, _end_time );
			// ajax post
			return;	//"Bye now!";
		};
	}
	catch ( ex )
	{
		console.error( ex.number, ":", ex.name, ":", ex.message );
		console.error( "exception stack::", ex.stack );
		return;
	}
	finally
	{
		console.info( "END JavaScript Tracking" );
	}
	return;
} )();