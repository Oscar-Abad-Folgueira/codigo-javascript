/**
 * @snippet       JavaScript Snippet: Habilitar el uso de jQuery en la consola del navegador web
 * @author        Oscar Abad Folgueira
 * @author_url    https://www.oscarabadfolgueira.com
 */

var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
jQuery.noConflict();