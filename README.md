# navigationBetweenSimplePages
Navigation between Simple pages


https://teammanager.kesug.com/nevigation-between-pages/



# Only &lt;Navbar&gt; component is changed
<link> tag is used navbar component is instead of <a>
If we used <a> during shifting the page, then page will be reloaded. 
The page should not be reloading because we are doing component-rendering.
If you want to use <a> along with <Link>, then use keyword as "legacyBehavior"
