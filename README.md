jsim
=====

JavaScriptInitializationManager

Small JS-library performs adjourned js-function calls.

Requires jQuery.

Library allows to make deffered function calls (ready/load events). Usefull for cases, when all js-files are included in page footer and page is combination of reusable blocks.
HTML5 data-attributes used for defining names, call types and parameters.


**Example:**

````html
<div id="js-graceful-block" data-type="ready" data-function="gracefulMethod" data-param="#blockName">
   
   ...
   
</div>
````


***It's like you manualy write the next:***

````js
$(document).ready(function() {
 appNameSpace.gracefulMethod("#blockName");
});
````
