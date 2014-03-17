/*
jsim - tiny JavaScript library for initialization.
Copyright (C) 2013  Dmitry Volokh.
email: volokh.dmitry@gmail.com.

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

(function () {
	var INIT = "data-init",
		FUNCTION = "function",
		PARAMETERS = "params",
		READY_TYPE = "ready",
		LOAD_TYPE = "load";
 
	/**
	 * Binds Ready and Load handlers 
	 */
	var bind = function() {
		$(document).ready(initReadyCalls);
		$(window).load(initLoadCalls);
	};
	
	/**
	 * Finds DOMElemnts with READY type and performs initialization
	 */
	var initReadyCalls = function() {
		performInit($("*[" + INIT + "=" + READY_TYPE + "]"));
	};
	
	/**
	 * Finds DOMElemnts with Load type and performs initialization
	 */
	var initLoadCalls = function() {
		performInit($("*[" + INIT + "=" + LOAD_TYPE + "]"));
	};
	
	/**
	 * Call initialization function with parameters for each element
	 */
	var performInit = function($domElements) {
		$domElements.each(function() {
			var $element = $(this);
			var fullQualifiedName = $.data($element, FUNCTION).split(".");
		    var functionName = fullQualifiedName.pop();
		    var namespace = fullQualifiedName.join('.');
		    if (!namespace) { namespace = 'window'; }
		    var namespaceObject = eval(namespace);
		    namespaceObject[functionName].apply(namespaceObject, $.data($element, PARAMETERS).split(","));
		});
	};
  
	bind();

})();
