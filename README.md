# navigationBetweenSimplePages
Navigation between Simple pages


https://teammanager.kesug.com/nevigation-between-pages/



# Only &lt;Navbar&gt; component is changed
&lt;link&gt; tag is used navbar component is instead of &lt;a&gt;
If we used &lt;a&gt; during shifting the page, then page will be reloaded. 
The page should not be reloading because we are doing component-rendering.
If you want to use &lt;a&gt; along with &lt;Link&gt;, then use keyword as "legacyBehavior"
