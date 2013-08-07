/*
 *                 _       _       _
 *   ___  ___ _ __(_)_ __ | |_    (_)___
 *  / __|/ __| '__| | '_ \| __|   | / __|
 *  \__ \ (__| |  | | |_) | |_    | \__ \
 *  |___/\___|_|  |_| .__/ \__|  _/ |___/
 *                  |_|         |__/
 *
 *
 * $script.js Async loader & dependency manager
 * https://github.com/ded/script.js
 * (c) Dustin Diaz, Jacob Thornton 2011
 * License: MIT
 */
(function(a,b,c){typeof c["module"]!="undefined"&&c.module.exports?c.module.exports=b():typeof c["define"]!="undefined"&&c["define"]=="function"&&c.define.amd?define(a,b):c[a]=b()})("$script",function(){function p(a,b){for(var c=0,d=a.length;c<d;++c)if(!b(a[c]))return j;return 1}function q(a,b){p(a,function(a){return!b(a)})}function r(a,b,i){function o(a){return a.call?a():d[a]}function t(){if(!--n){d[m]=1,l&&l();for(var a in f)p(a.split("|"),o)&&!q(f[a],o)&&(f[a]=[])}}a=a[k]?a:[a];var j=b&&b.call,l=j?b:i,m=j?a.join(""):b,n=a.length;return setTimeout(function(){q(a,function(a){if(h[a])return m&&(e[m]=1),h[a]==2&&t();h[a]=1,m&&(e[m]=1),s(!c.test(a)&&g?g+a+".js":a,t)})},0),r}function s(c,d){var e=a.createElement("script"),f=j;e.onload=e.onerror=e[o]=function(){if(e[m]&&!/^c|loade/.test(e[m])||f)return;e.onload=e[o]=null,f=1,h[c]=2,d()},e.async=1,e.src=c,b.insertBefore(e,b.firstChild)}var a=document,b=a.getElementsByTagName("head")[0],c=/^https?:\/\//,d={},e={},f={},g,h={},i="string",j=!1,k="push",l="DOMContentLoaded",m="readyState",n="addEventListener",o="onreadystatechange";return!a[m]&&a[n]&&(a[n](l,function t(){a.removeEventListener(l,t,j),a[m]="complete"},j),a[m]="loading"),r.get=s,r.order=function(a,b,c){(function d(e){e=a.shift(),a.length?r(e,d):r(e,b,c)})()},r.path=function(a){g=a},r.ready=function(a,b,c){a=a[k]?a:[a];var e=[];return!q(a,function(a){d[a]||e[k](a)})&&p(a,function(a){return d[a]})?b():!function(a){f[a]=f[a]||[],f[a][k](b),c&&c(e)}(a.join("|")),r},r},this)
/*
 *                       _                 _
 *   _ __ ___   ___   __| | ___ _ __ _ __ (_)_____ __
 *  | '_ ` _ \ / _ \ / _` |/ _ \ '__| '_ \| |_  / '__|
 *  | | | | | | (_) | (_| |  __/ |  | | | | |/ /| |
 *  |_| |_| |_|\___/ \__,_|\___|_|  |_| |_|_/___|_|
 *
 *
 *
 * Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-mq-cssclasses-teststyles-prefixes
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(m.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return t("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var C in n)w(n,C)&&(s=C.toLowerCase(),e[s]=n[C](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,e._version=d,e._prefixes=m,e.mq=u,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document);
// @codekit append 'shared-ro/piwik.min.js'
/* jshint strict: false */
/* jshint eqnull:true */
/* jshint camelcase: false */

/*  START ANONYMOUS WRAPPER FUNCTION
 *  - Wraps the core object and general functions
 *  - Provides acces to document and window objects
 *  - Doesn't clutter global scope with any variables or constants
 */
var Core = {};

(function(d, w) {


    /*
     *   _         __ _
     *  (_) ___   / _(_)_  _____  ___
     *  | |/ _ \ | |_| \ \/ / _ \/ __|
     *  | |  __/ |  _| |>  <  __/\__ \
     *  |_|\___| |_| |_/_/\_\___||___/
     *
     *
     *
     *  ADD UNSUPPORTED METHODS TO IE
     */
    if (typeof String.prototype.trim !== 'function') {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, '');
        };
    }

    if (typeof w.console === 'undefined' || typeof w.console.log === 'undefined') {
        w.console = {
            log: function() {}
        };
    }

    if (!d.getElementsByClassName) {
        w.getElementsByClassName = function(sClassName, oNode) {
            if (oNode == null) {
                oNode = document;
            }
            if (oNode.querySelectorAll) { // IE8
                return oNode.querySelectorAll("." + sClassName);
            } else { // IE7
                var aoFoundElements = [],
                    aoAllChildElements = oNode.getElementsByTagName('*');

                for (var i = 0, j = aoAllChildElements.length; i < j; i++) {
                    if (aoAllChildElements[i].className.indexOf(sClassName) > -1) {
                        aoFoundElements.push(aoAllChildElements[i]);
                    }
                }
                return aoFoundElements;
            }
        };

        d.getElementsByClassName = function(className) {
            return w.getElementsByClassName(className, document);
        };

    }


    /*
     *
     *    ___ ___  _ __ ___  _ __ ___   ___  _ __  ___
     *   / __/ _ \| '_ ` _ \| '_ ` _ \ / _ \| '_ \/ __|
     *  | (_| (_) | | | | | | | | | | | (_) | | | \__ \
     *   \___\___/|_| |_| |_|_| |_| |_|\___/|_| |_|___/
     *
     *
     */


	/**
	 *   This function checks if a class is in a specified element
	 *   @param {object} oElement    element
	 *   @param {string} sClassName  classname
	 *   @returns    {boolean}
	 */

	function isClassInElement(oElement, sClassName) {
		var reg = new RegExp('\\b' + sClassName + '\\b');
		return (sClassName === '*' || reg.test(oElement.className));
	}

    /**
     * removes a class from an element
     *   @param {node} oElement    domelement
     *   @param {string} sClassName  classname
     */

    function removeClassFromElement(oElement, sClassName) {
        if (oElement == null) {
            return false;
        }
        if (isClassInElement(oElement, sClassName)) {
            var oPattern = oElement.className.match(' ' + sClassName) ? (' ' + sClassName) : sClassName;
            oElement.className = oElement.className.replace(oPattern, '');
        }
        return oElement;
    }

    /**
     *   adds a class on an element
     *   @param {node} oElement    element
     *   @param {string} sClassName  added classname
     */

    function addClassToElement(oElement, sClassName) {
        if (oElement == null) {
            return false;
        }
        if (!isClassInElement(oElement, sClassName)) {
            oElement.className += oElement.className ? (' ' + sClassName) : sClassName;
        }
        return oElement;
    }

    /**
     *   adds or removes a class on an element if its there
     *   @param {Object} oElement    domelement
     *   @param {string} sClassName  classname
     */

    function toggleClassInElement(oElement, sClassName) {
        if (oElement == null) {
            return false;
        }
        if (isClassInElement(oElement, sClassName)) {
            removeClassFromElement(oElement, sClassName);
        } else {
            addClassToElement(oElement, sClassName);
        }
        return oElement;
    }

    /**
     *   swap one element to a new target
     *   @param {Object} oElement    domelement
     *   @param {Object} oTarget     domelement
     */

    function moveElement(oElement, oTarget) {
        oElement.parentNode.removeChild(oElement);
        oTarget.parentNode.insertBefore(oElement, oTarget);
        return oElement;
    }


    /*
     *                              _     _           _
     *    ___ ___  _ __ ___    ___ | |__ (_) ___  ___| |_
     *   / __/ _ \| '__/ _ \  / _ \| '_ \| |/ _ \/ __| __|
     *  | (_| (_) | | |  __/ | (_) | |_) | |  __/ (__| |_
     *   \___\___/|_|  \___|  \___/|_.__// |\___|\___|\__|
     *                                 |__/
     *
     */

	/*  START OF CORE OBJECT */
	Core = {

		debug: false,

		scriptpath: 'behaviour/',

		minify: '.min',

		languages: {
			'common':
			{
				'NL-NL': {
					'expand-all': 'Alles uitklappen',
					'collapse-all': 'Alles inklappen'
				},
				'EN-GB': {
					'expand-all': 'Expand all',
					'collapse-all': 'Collapse all'
				},
				'PAP-AN': {
					'expand-all': 'Habri tur kos',
					'collapse-all': 'Sera tur kos'
				},
				'PAP-AW': {
					'expand-all': 'Habri tur cos',
					'collapse-all': 'Cera tur cos'
				}
			},

			'referrer':
			{
				'NL-NL': {
					'start': 'De informatie van ',
					'mid': ' staat nu op www.rijksoverheid.nl.',
					'end': 'Pas indien nodig uw favorieten aan. Wij danken u voor uw begrip.'
				},
				'EN-GB': {
					'start': 'Information formerly on ',
					'mid': ' is now available on www.government.nl.',
					'end': 'Please update your bookmarks if necessary. We thank you for your understanding.'
				},
				'PAP-AN': {
					'start': 'E informashon ',
					'mid': ' e ta para awor riba www.rijksoverheid.nl.',
					'end': 'Si e ta nesesario adapta bo preferido, nos ta gradis&iacute; bo pa bo koperashon'
				},
				'PAP-AW': {
					'start': 'E informacion di ',
					'mid': ' e ta para awor riba www.rijksoverheid.nl.',
					'end': 'Si ta necesario adapta bo preferido, nos ta gradici bo pa bo cooperacion.'
				}
			}
		},

		langcode: '',

		interactions:
		{
            'jquery': {
                'test': ['.form', '#rent-calculator', '.legislation', '#priority', '.lazy', '.content-image-left', '.anchors', '.index', '.block-photo-gallery', 'textarea', 'table', '.infographic'],
                'scripts': ['shared-ro/jquery-1.8.1-ui-1.8.23.custom']
            },
			'datepicker': {
				'test': ['.date'],
				'scripts': ['shared-ro/jquery-datepicker-1.2']
			},
			'autogrow': {
				'test': ['textarea'],
				'scripts': ['shared-ro/jquery-autogrow']
			},
			'autocomplete': {
				'test': ['.autocomplete'],
				'scripts': ['shared-ro/jquery-autocomplete']
			},
			'forms': {
				'test': ['.form','#rent-calculator','.legislation'],
				'scripts': ['shared-ro/forms']
			},
			'audiovideo': {
				'test': ['.block-audio-video'],
				'scripts': 'shared-ro/govvid'
			},
			'swipebox': {
				'test': ['.block-photo-gallery'],
				'scripts': ['shared-ro/jquery-swipebox']
			},
            'miscellaneous': {
                'test': ['#priority', '.lazy', '.content-image-left', '.anchors', '.index', '.block-photo-gallery', 'table'],
                'scripts': 'shared-ro/miscellaneous'
            },
			'raphael':
			{
				'test': ['.infographic'],
				'scripts': 'infographics/raphael'
			},
			'chroma':
			{
				'test': ['.infographic'],
				'scripts': 'infographics/chroma'
			},
			'infographics':
			{
				'test': ['.infographic'],
				'scripts': 'infographics'
			}
		},


		testSingleSelector: function(selector) {
			return (selector.charAt(0) === '.') ? (d.getElementsByClassName(selector.substr(1)).length > 0)
			     : (selector.charAt(0) === '#') ? (d.getElementById(selector.substr(1)))
			                                    : (d.getElementsByTagName(selector).length > 0);
		},


        testSelectors: function(selectors) {
            var result = false,
                i = 0;
            for (i in selectors) {
                result = result || this.testSingleSelector(selectors[i]);
            }
            return result;
        },

        sizer: function(size) {
            var sizeStr = size + '';
            if (sizeStr === 'small') {
                return Modernizr.mq('screen and (max-width:35.99em)');
            }
            if (sizeStr === 'medium') {
                return Modernizr.mq('screen and (min-width:36em) and (max-width:49.99em)');
            } else if (sizeStr === 'big') {
                return Modernizr.mq('screen and (min-width:50em)');
            } else if (sizeStr.indexOf('em') !== -1) {
                return Modernizr.mq('screen and (min-width:' + sizeStr + ')');
            } else {
                return Modernizr.mq('screen and (min-width:' + sizeStr + 'px)');
            }
        },

        /**
         * Relocate elements
         * @param  {[node]} element moving element
         * @param  {[type]} target  Element is inserted BEFORE the target
         * @return none;
         */
        replaceMenu: function() {
            var mainMenu = d.getElementById('navigation'),
                skipMenu = d.getElementById('skip-to-menu'),
                mainTarget = d.getElementById('main'),
                c = this;

            toggleClassInElement(mainMenu, 'hide');
            toggleClassInElement(skipMenu, 'active');

            skipMenu.onclick = function() {
                toggleClassInElement(mainMenu, 'hide');
                toggleClassInElement(skipMenu, 'active');
                c.swapElement(mainMenu, mainTarget, 'hide');
                return false;
            };
        },
        fold: function(element, trigger) {
            toggleClassInElement(element, 'hide');
            //toggle(trigger, 'active');
            trigger.onclick = function() {
                toggleClassInElement(element, 'hide');
                toggleClassInElement(trigger, 'active');
                return false;
            };
        },
        swapElement: function(element, target, toggleclass) {
            // does attribute contain one of our classes?
            if (isClassInElement(element, toggleclass)) {
                moveElement(target, element);
            } else {
                moveElement(element, target);
            }
        },


        /**
         * set side by side topics the same height
         **/
        setTopicHeight: function() {
            var topics = d.getElementsByClassName('topics')[0].getElementsByTagName('div')[0],
                columns, i, l, lis, smallwindow = Core.sizer('small');

            if (topics.getElementsByClassName) {
                columns = topics.getElementsByClassName('column');
                lis = [columns[0].getElementsByClassName('topic'), columns[1].getElementsByClassName('topic')];
            } else {
                columns = w.getElementsByClassName('column', topics);
                lis = [w.getElementsByClassName('topic', columns[0]), w.getElementsByClassName('topic', columns[1])];
            }

            for (i = 0, l = lis[1].length; i < l; i++) {
                var left = lis[0][i],
                    right = lis[1][i];

                if (typeof right === 'undefined'){
                	continue; // Skip iteration if no items are left in right column
                }

                if (smallwindow) {
                    right.style.height = left.style.height = 'auto';
                } else {
                    if (left.offsetHeight === '0') {
                        right.style.height = left.style.height = 'auto';
                    } // IE7
                    var maxheight = Math.max(left.offsetHeight, right.offsetHeight);
                    right.style.height = left.style.height = (maxheight - 15) + 'px'; // 15px correction for padding.
                }
            }
        },


        /**
         * fold the topic list with subtopics on small screen
         * @return {none}
         */
        foldList: function() {
            var c = this,
                topics = d.getElementsByClassName('topic'),
                thematic = (d.getElementsByClassName('thematic').length > 0),
                sitemap = d.getElementById('sitemap'),
                siteheading, sitelink, sitelist, tsub, theading, tlabel, tcheck, tlink, plink, ttext, tpar, i, tl;

            // Collapse topics
            for (i = 0, tl = topics.length; i < tl; i++) {
                theading = topics[i].getElementsByTagName('h2')[0];

                if (typeof theading === 'undefined'){
                	continue;
                }

                tlabel = theading.getElementsByTagName('label')[0];

                if (topics[i].getElementsByClassName) {
                    tsub = topics[i].getElementsByClassName('subtopics')[0];
                } else {
                    tsub = window.getElementsByClassName('subtopics', topics[i])[0];
                }

                c.fold(tsub, theading);

                if (typeof tlabel !== 'undefined') {
                    tcheck = tlabel.getElementsByTagName('input')[0];

                    c.stopClick(tcheck);
                    c.stopClick36emUp(tlabel);
                }

                if (thematic) {
                    // Clone link from heading
                    tlink = theading.getElementsByTagName('a')[0];
                    ttext = tlink.childNodes[0].nodeValue;
                    plink = tlink.cloneNode(true);

                    // Create paragraph with link in dom
                    tpar = d.createElement('p');
                    tpar.className = 'more';
                    tpar.appendChild(plink);
                    tsub.insertBefore(tpar, tsub.childNodes[0]);

                    c.stopClick36emUp(tlink);
                }
            }

            // Collapse sitemap if present.
            if (sitemap !== null) {
                siteheading = sitemap.getElementsByTagName('h2')[0];
                sitelink = siteheading.getElementsByTagName('a')[0];
                sitelist = sitemap.getElementsByTagName('div')[0];

                c.fold(sitelist, siteheading);

                if (typeof sitelink !== 'undefined') {
                    c.stopClick36emUp(sitelink);
                }
            }
        },

        stopClick: function(elem) {
            elem.onclick = function(evt) {
                var event = evt || window.event;
                event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
            };
        },

        stopClick36emUp: function(elem) {
            elem.onclick = function(evt) {
                // Allow heading link in sitemap to be followed in tablet/wide views.
                if (!Core.sizer('small')) {
                    // prevent propagation of click
                    var event = evt || window.event;
                    event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
                }
            };
        },


        /**
         * [initTouchEvents description]
         * @return {[type]} [description]
         */
        initTouchEvents: function() {
            // init touchevents
        },


        //  CORE OBJECT INIT
        //
        //
        init: function() {
            var c = this,
                h = d.getElementsByTagName('html')[0],
                b = d.getElementsByTagName('body')[0],
                ie = (h.className.indexOf('ie') > -1);

            //  SET CORE GLOBALS
            c.debug = c.debug || (w.location.hash.indexOf('debug') > -1);
            c.scriptpath = (b.getAttribute('data-scriptpath') + '/') || 'behaviour/';
            c.minify = !c.debug ? '.min' : '';
            c.langcode = h.getAttribute('xml:lang').toUpperCase();

            //  SET UP FOLDING MAIN MENU FOR MOBILE VIEW
            if (!ie) {
                c.replaceMenu();
            }

            // ON TOPICS MAIN ENTRY PAGE, FOLD LIST ON MOBILE VIEW
            if (!ie && b.className.indexOf('home') < 0) {
                c.foldList();
            }

            //  ON HOMEPAGE, FIX HEIGHT DIFFERENCES IN TOPICS LIST
            if (b.className.indexOf('home') > -1 && d.getElementsByClassName('topics').length) {
                c.setTopicHeight();
            }

            //  LOOP THROUGH INTERACTIONS AND LAZY LOAD SCRIPTS IF NECESSARY
            for (var j in c.interactions) {
                if (c.testSelectors(c.interactions[j].test)) {
                    $script(c.scriptpath + c.interactions[j].scripts + c.minify + '.js', j);
                }
            }

            //  INIT TOUCH ENHANCEMENTS
            if (Modernizr.touch) {
                c.initTouchEvents();
                // bind to touchstart, touchmove, etc and watch `event.streamId`
            } else {
                // bind to normal click, mousemove, etc
            }
        }
    }; /* END CORE OBJECT */



    /*
     *         _          _ _               _
     *   _ __ (_)_      _(_) | __  ___  ___| |_ _   _ _ __
     *  | '_ \| \ \ /\ / / | |/ / / __|/ _ \ __| | | | '_ \
     *  | |_) | |\ V  V /| |   <  \__ \  __/ |_| |_| | |_) |
     *  | .__/|_| \_/\_/ |_|_|\_\ |___/\___|\__|\__,_| .__/
     *  |_|                                          |_|
     *
     */

    // START PIWIK SETUP FOR RO AND GOV
/*
		w._paq = w._paq || [];
		var siteID = (w.location.hostname.indexOf('government.nl') > -1) ? '2' : '1';
		var stats = d.getElementsByTagName('body')[0].getAttribute('data-stats').split(',');
		var stat, i, l;
		w._paq.push(['setSiteId', siteID]);
		w._paq.push(['setTrackerUrl', '//www.rijksoverheid.nl/stats/piwik']);
		w._paq.push(['setCookieDomain', '*.rijksoverheid.nl']);
		w._paq.push(['enableLinkTracking']);
		w._paq.push(['setLinkTrackingTimer', 750]);
		w._paq.push(['trackPageView']);
		for (i = 0, l = stats.length; i < l; i++) {
			stat = stats[i].split(':');
			w._paq.push(['setCustomVariable', '' + (i + 1), stat[0], stat[1], 'page']);
		}
	*/

})(document, window); /* END ANONYMOUS WRAPPER FUNCTION */



/*  CORE INIT
 *
 */
Core.init();



/*
 *         _          _ _
 *   _ __ (_)_      _(_) | __
 *  | '_ \| \ \ /\ / / | |/ /
 *  | |_) | |\ V  V /| |   <
 *  | .__/|_| \_/\_/ |_|_|\_\
 *  |_|
 *
 *
 * Piwik - Web Analytics
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source http://dev.piwik.org/trac/browser/trunk/js/piwik.js
 * @license http://www.opensource.org/licenses/bsd-license.php Simplified BSD
 */
//if(!this.JSON2){this.JSON2={}}(function(){function d(f){return f<10?"0"+f:f}function l(n,m){var f=Object.prototype.toString.apply(n);if(f==="[object Date]"){return isFinite(n.valueOf())?n.getUTCFullYear()+"-"+d(n.getUTCMonth()+1)+"-"+d(n.getUTCDate())+"T"+d(n.getUTCHours())+":"+d(n.getUTCMinutes())+":"+d(n.getUTCSeconds())+"Z":null}if(f==="[object String]"||f==="[object Number]"||f==="[object Boolean]"){return n.valueOf()}if(f!=="[object Array]"&&typeof n.toJSON==="function"){return n.toJSON(m)}return n}var c=new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]","g"),e='\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',i=new RegExp("["+e,"g"),j,b,k={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;function a(f){i.lastIndex=0;return i.test(f)?'"'+f.replace(i,function(m){var n=k[m];return typeof n==="string"?n:"\\u"+("0000"+m.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+f+'"'}function g(s,p){var n,m,t,f,q=j,o,r=p[s];if(r&&typeof r==="object"){r=l(r,s)}if(typeof h==="function"){r=h.call(p,s,r)}switch(typeof r){case"string":return a(r);case"number":return isFinite(r)?String(r):"null";case"boolean":case"null":return String(r);case"object":if(!r){return"null"}j+=b;o=[];if(Object.prototype.toString.apply(r)==="[object Array]"){f=r.length;for(n=0;n<f;n+=1){o[n]=g(n,r)||"null"}t=o.length===0?"[]":j?"[\n"+j+o.join(",\n"+j)+"\n"+q+"]":"["+o.join(",")+"]";j=q;return t}if(h&&typeof h==="object"){f=h.length;for(n=0;n<f;n+=1){if(typeof h[n]==="string"){m=h[n];t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}else{for(m in r){if(Object.prototype.hasOwnProperty.call(r,m)){t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}t=o.length===0?"{}":j?"{\n"+j+o.join(",\n"+j)+"\n"+q+"}":"{"+o.join(",")+"}";j=q;return t}}if(typeof JSON2.stringify!=="function"){JSON2.stringify=function(o,m,n){var f;j="";b="";if(typeof n==="number"){for(f=0;f<n;f+=1){b+=" "}}else{if(typeof n==="string"){b=n}}h=m;if(m&&typeof m!=="function"&&(typeof m!=="object"||typeof m.length!=="number")){throw new Error("JSON.stringify")}return g("",{"":o})}}if(typeof JSON2.parse!=="function"){JSON2.parse=function(o,f){var n;function m(s,r){var q,p,t=s[r];if(t&&typeof t==="object"){for(q in t){if(Object.prototype.hasOwnProperty.call(t,q)){p=m(t,q);if(p!==undefined){t[q]=p}else{delete t[q]}}}}return f.call(s,r,t)}o=String(o);c.lastIndex=0;if(c.test(o)){o=o.replace(c,function(p){return"\\u"+("0000"+p.charCodeAt(0).toString(16)).slice(-4)})}if((new RegExp("^[\\],:{}\\s]*$")).test(o.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})',"g"),"@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',"g"),"]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+","g"),""))){n=eval("("+o+")");return typeof f==="function"?m({"":n},""):n}throw new SyntaxError("JSON.parse")}}}());var _paq=_paq||[],Piwik=Piwik||(function(){var e,a={},n=document,c=navigator,z=screen,w=window,k=false,u=[],g=w.encodeURIComponent,v=w.decodeURIComponent,d=unescape,A,D;function p(i){return"undefined"!==typeof i}function l(i){return typeof i==="function"}function y(i){return typeof i==="object"}function h(i){return typeof i==="string"||i instanceof String}function G(){var L,N,M;for(L=0;L<arguments.length;L+=1){M=arguments[L];N=M.shift();if(h(N)){A[N].apply(A,M)}else{N.apply(A,M)}}}function J(N,M,L,i){if(N.addEventListener){N.addEventListener(M,L,i);return true}if(N.attachEvent){return N.attachEvent("on"+M,L)}N["on"+M]=L}function E(M,P){var L="",O,N;for(O in a){if(Object.prototype.hasOwnProperty.call(a,O)){N=a[O][M];if(l(N)){L+=N(P)}}}return L}function H(){var i;E("unload");if(e){do{i=new Date()}while(i.getTimeAlias()<e)}}function F(){var L;if(!k){k=true;E("load");for(L=0;L<u.length;L++){u[L]()}}return true}function j(){var L;if(n.addEventListener){J(n,"DOMContentLoaded",function i(){n.removeEventListener("DOMContentLoaded",i,false);F()})}else{if(n.attachEvent){n.attachEvent("onreadystatechange",function i(){if(n.readyState==="complete"){n.detachEvent("onreadystatechange",i);F()}});if(n.documentElement.doScroll&&w===w.top){(function i(){if(!k){try{n.documentElement.doScroll("left")}catch(M){setTimeout(i,0);return}F()}}())}}}if((new RegExp("WebKit")).test(c.userAgent)){L=setInterval(function(){if(k||/loaded|complete/.test(n.readyState)){clearInterval(L);F()}},10)}J(w,"load",F,false)}function q(){var i="";try{i=w.top.document.referrer}catch(M){if(w.parent){try{i=w.parent.document.referrer}catch(L){i=""}}}if(i===""){i=n.referrer}return i}function f(i){var M=new RegExp("^([a-z]+):"),L=M.exec(i);return L?L[1]:null}function b(i){var M=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),L=M.exec(i);return L?L[1]:i}function x(M,L){var P=new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"),O=P.exec(M),N=new RegExp("(?:^|&)"+L+"=([^&]*)"),i=O?N.exec(O[1]):0;return i?v(i[1]):""}function m(i){return d(g(i))}function I(ab){var N=function(W,i){return(W<<i)|(W>>>(32-i))},ac=function(ai){var ah="",ag,W;for(ag=7;ag>=0;ag--){W=(ai>>>(ag*4))&15;ah+=W.toString(16)}return ah},Q,ae,ad,M=[],U=1732584193,S=4023233417,R=2562383102,P=271733878,O=3285377520,aa,Z,Y,X,V,af,L,T=[];ab=m(ab);L=ab.length;for(ae=0;ae<L-3;ae+=4){ad=ab.charCodeAt(ae)<<24|ab.charCodeAt(ae+1)<<16|ab.charCodeAt(ae+2)<<8|ab.charCodeAt(ae+3);T.push(ad)}switch(L&3){case 0:ae=2147483648;break;case 1:ae=ab.charCodeAt(L-1)<<24|8388608;break;case 2:ae=ab.charCodeAt(L-2)<<24|ab.charCodeAt(L-1)<<16|32768;break;case 3:ae=ab.charCodeAt(L-3)<<24|ab.charCodeAt(L-2)<<16|ab.charCodeAt(L-1)<<8|128;break}T.push(ae);while((T.length&15)!==14){T.push(0)}T.push(L>>>29);T.push((L<<3)&4294967295);for(Q=0;Q<T.length;Q+=16){for(ae=0;ae<16;ae++){M[ae]=T[Q+ae]}for(ae=16;ae<=79;ae++){M[ae]=N(M[ae-3]^M[ae-8]^M[ae-14]^M[ae-16],1)}aa=U;Z=S;Y=R;X=P;V=O;for(ae=0;ae<=19;ae++){af=(N(aa,5)+((Z&Y)|(~Z&X))+V+M[ae]+1518500249)&4294967295;V=X;X=Y;Y=N(Z,30);Z=aa;aa=af}for(ae=20;ae<=39;ae++){af=(N(aa,5)+(Z^Y^X)+V+M[ae]+1859775393)&4294967295;V=X;X=Y;Y=N(Z,30);Z=aa;aa=af}for(ae=40;ae<=59;ae++){af=(N(aa,5)+((Z&Y)|(Z&X)|(Y&X))+V+M[ae]+2400959708)&4294967295;V=X;X=Y;Y=N(Z,30);Z=aa;aa=af}for(ae=60;ae<=79;ae++){af=(N(aa,5)+(Z^Y^X)+V+M[ae]+3395469782)&4294967295;V=X;X=Y;Y=N(Z,30);Z=aa;aa=af}U=(U+aa)&4294967295;S=(S+Z)&4294967295;R=(R+Y)&4294967295;P=(P+X)&4294967295;O=(O+V)&4294967295}af=ac(U)+ac(S)+ac(R)+ac(P)+ac(O);return af.toLowerCase()}function C(M,i,L){if(M==="translate.googleusercontent.com"){if(L===""){L=i}i=x(i,"u");M=b(i)}else{if(M==="cc.bingj.com"||M==="webcache.googleusercontent.com"||M.slice(0,5)==="74.6."){i=n.links[0].href;M=b(i)}}return[M,i,L]}function r(L){var i=L.length;if(L.charAt(--i)==="."){L=L.slice(0,i)}if(L.slice(0,2)==="*."){L=L.slice(1)}return L}function K(L){if(!h(L)){L=L.text||"";var i=n.getElementsByTagName("title");if(i&&p(i[0])){L=i[0].text}}return L}function s(O,S){var U="Piwik_Overlay";var R=n.referrer;var i=O;i=i.substring(0,i.length-9);i.substring(i.substring(0,7)==="http://"?7:8,i.length);R.substring(R.substring(0,7)==="http://"?7:8,R.length);if(R.substring(0,i.length)===i){var M=new RegExp("^"+i+"index\\.php\\?module=Overlay&action=startOverlaySession&idsite=([0-9]+)&period=([^&]+)&date=([^&]+)$");var N=R.match(M);if(N){var P=N[1];if(parseInt(P,10)!==S){return false}var Q=N[2];var L=N[3];window.name=U+"###"+Q+"###"+L}}var T=w.name.split("###");return T.length===3&&T[0]===U}function B(M,S){var T=window.name.split("###");var R=M.substring(0,M.length-9);var N=T[1];var i=T[2];var L=false;var O=function(){if(!L){L=true;Piwik_Overlay_Client.initialize(R,S,N,i)}};var Q=document.createElement("script");Q.type="text/javascript";Q.onreadystatechange=function(){if(this.readyState==="loaded"||this.readyState==="complete"){O()}};Q.onload=O;Q.src=R+"plugins/Overlay/client/client.js?v=1";var P=document.getElementsByTagName("head")[0];P.appendChild(Q)}function t(af,aE){var O=C(n.domain,w.location.href,q()),aX=r(O[0]),bb=O[1],aK=O[2],aI="GET",N=af||"",a1=aE||"",av,al=n.title,an="7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|ppt|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xls|xml|z|zip",aG=[aX],R=[],az=[],ae=[],aF=500,S,ag,T,U,ap=["pk_campaign","piwik_campaign","utm_campaign","utm_source","utm_medium"],ak=["pk_kwd","piwik_kwd","utm_term"],a9="_pk_",X,ba,V=false,a4,ar,au,ac=63072000000,ad=1800000,aw=15768000000,aa=n.location.protocol==="https",Q=false,aA={},a5=200,aQ={},a2={},aN=false,aL=false,aJ,aB,Y,ao=I,aM,at;function aS(bk,bh,bg,bj,bf,bi){if(V){return}var be;if(bg){be=new Date();be.setTime(be.getTime()+bg)}n.cookie=bk+"="+g(bh)+(bg?";expires="+be.toGMTString():"")+";path="+(bj||"/")+(bf?";domain="+bf:"")+(bi?";secure":"")}function ab(bg){if(V){return 0}var be=new RegExp("(^|;)[ ]*"+bg+"=([^;]*)"),bf=be.exec(n.cookie);return bf?v(bf[2]):0}function a6(be){var bf;if(T){bf=new RegExp("#.*");return be.replace(bf,"")}return be}function aW(bg,be){var bh=f(be),bf;if(bh){return be}if(be.slice(0,1)==="/"){return f(bg)+"://"+b(bg)+be}bg=a6(bg);if((bf=bg.indexOf("?"))>=0){bg=bg.slice(0,bf)}if((bf=bg.lastIndexOf("/"))!==bg.length-1){bg=bg.slice(0,bf+1)}return bg+be}function aH(bh){var bf,be,bg;for(bf=0;bf<aG.length;bf++){be=r(aG[bf].toLowerCase());if(bh===be){return true}if(be.slice(0,1)==="."){if(bh===be.slice(1)){return true}bg=bh.length-be.length;if((bg>0)&&(bh.slice(bg)===be)){return true}}}return false}function bd(be){var bf=new Image(1,1);bf.onload=function(){};bf.src=N+(N.indexOf("?")<0?"?":"&")+be}function aT(be){try{var bg=w.XMLHttpRequest?new w.XMLHttpRequest():w.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;bg.open("POST",N,true);bg.onreadystatechange=function(){if(this.readyState===4&&this.status!==200){bd(be)}};bg.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");bg.send(be)}catch(bf){bd(be)}}function aq(bg,bf){var be=new Date();if(!a4){if(aI==="POST"){aT(bg)}else{bd(bg)}e=be.getTime()+bf}}function aR(be){return a9+be+"."+a1+"."+aM}function P(){if(V){return"0"}if(!p(c.cookieEnabled)){var be=aR("testcookie");aS(be,"1");return ab(be)==="1"?"1":"0"}return c.cookieEnabled?"1":"0"}function aC(){aM=ao((X||aX)+(ba||"/")).slice(0,4)}function Z(){var bf=aR("cvar"),be=ab(bf);if(be.length){be=JSON2.parse(be);if(y(be)){return be}}return{}}function M(){if(Q===false){Q=Z()}}function a0(){var be=new Date();aJ=be.getTime()}function W(bi,bf,be,bh,bg,bj){aS(aR("id"),bi+"."+bf+"."+be+"."+bh+"."+bg+"."+bj,ac,ba,X,aa)}function L(){var bf=new Date(),be=Math.round(bf.getTime()/1000),bh=ab(aR("id")),bg;if(bh){bg=bh.split(".");bg.unshift("0")}else{if(!at){at=ao((c.userAgent||"")+(c.platform||"")+JSON2.stringify(a2)+be).slice(0,16)}bg=["1",at,be,0,be,"",""]}return bg}function i(){var be=ab(aR("ref"));if(be.length){try{be=JSON2.parse(be);if(y(be)){return be}}catch(bf){}}return["","",0,""]}function am(bg,bF,bG,bi){var bD,bf=new Date(),bo=Math.round(bf.getTime()/1000),bI,bE,bk,bw,bA,bn,by,bl,bC,bj=1024,bJ,br,bz=Q,bu=aR("id"),bp=aR("ses"),bq=aR("ref"),bK=aR("cvar"),bx=L(),bt=ab(bp),bB=i(),bH=av||bb,bm,be;if(V){V=false;aS(bu,"",-86400,ba,X);aS(bp,"",-86400,ba,X);aS(bK,"",-86400,ba,X);aS(bq,"",-86400,ba,X);V=true}if(a4){return""}bI=bx[0];bE=bx[1];bw=bx[2];bk=bx[3];bA=bx[4];bn=bx[5];if(!p(bx[6])){bx[6]=""}by=bx[6];if(!p(bi)){bi=""}var bs=document.characterSet||document.charset;if(!bs||bs.toLowerCase()==="utf-8"){bs=null}bm=bB[0];be=bB[1];bl=bB[2];bC=bB[3];if(!bt){bk++;bn=bA;if(!au||!bm.length){for(bD in ap){if(Object.prototype.hasOwnProperty.call(ap,bD)){bm=x(bH,ap[bD]);if(bm.length){break}}}for(bD in ak){if(Object.prototype.hasOwnProperty.call(ak,bD)){be=x(bH,ak[bD]);if(be.length){break}}}}bJ=b(aK);br=bC.length?b(bC):"";if(bJ.length&&!aH(bJ)&&(!au||!br.length||aH(br))){bC=aK}if(bC.length||bm.length){bl=bo;bB=[bm,be,bl,a6(bC.slice(0,bj))];aS(bq,JSON2.stringify(bB),aw,ba,X,aa)}}bg+="&idsite="+a1+"&rec=1&r="+String(Math.random()).slice(2,8)+"&h="+bf.getHours()+"&m="+bf.getMinutes()+"&s="+bf.getSeconds()+"&url="+g(a6(bH))+(aK.length?"&urlref="+g(a6(aK)):"")+"&_id="+bE+"&_idts="+bw+"&_idvc="+bk+"&_idn="+bI+(bm.length?"&_rcn="+g(bm):"")+(be.length?"&_rck="+g(be):"")+"&_refts="+bl+"&_viewts="+bn+(String(by).length?"&_ects="+by:"")+(String(bC).length?"&_ref="+g(a6(bC.slice(0,bj))):"")+(bs?"&cs="+g(bs):"");var bh=JSON2.stringify(aA);if(bh.length>2){bg+="&cvar="+g(bh)}for(bD in a2){if(Object.prototype.hasOwnProperty.call(a2,bD)){bg+="&"+bD+"="+a2[bD]}}if(bF){bg+="&data="+g(JSON2.stringify(bF))}else{if(U){bg+="&data="+g(JSON2.stringify(U))}}if(Q){var bv=JSON2.stringify(Q);if(bv.length>2){bg+="&_cvar="+g(bv)}for(bD in bz){if(Object.prototype.hasOwnProperty.call(bz,bD)){if(Q[bD][0]===""||Q[bD][1]===""){delete Q[bD]}}}aS(bK,JSON2.stringify(Q),ad,ba,X,aa)}W(bE,bw,bk,bo,bn,p(bi)&&String(bi).length?bi:by);aS(bp,"*",ad,ba,X,aa);bg+=E(bG);return bg}function aV(bh,bg,bl,bi,be,bo){var bj="idgoal=0",bk,bf=new Date(),bm=[],bn;if(String(bh).length){bj+="&ec_id="+g(bh);bk=Math.round(bf.getTime()/1000)}bj+="&revenue="+bg;if(String(bl).length){bj+="&ec_st="+bl}if(String(bi).length){bj+="&ec_tx="+bi}if(String(be).length){bj+="&ec_sh="+be}if(String(bo).length){bj+="&ec_dt="+bo}if(aQ){for(bn in aQ){if(Object.prototype.hasOwnProperty.call(aQ,bn)){if(!p(aQ[bn][1])){aQ[bn][1]=""}if(!p(aQ[bn][2])){aQ[bn][2]=""}if(!p(aQ[bn][3])||String(aQ[bn][3]).length===0){aQ[bn][3]=0}if(!p(aQ[bn][4])||String(aQ[bn][4]).length===0){aQ[bn][4]=1}bm.push(aQ[bn])}}bj+="&ec_items="+g(JSON2.stringify(bm))}bj=am(bj,U,"ecommerce",bk);aq(bj,aF)}function aU(be,bi,bh,bg,bf,bj){if(String(be).length&&p(bi)){aV(be,bi,bh,bg,bf,bj)}}function a8(be){if(p(be)){aV("",be,"","","","")}}function ay(bh,bi){var be=new Date(),bg=am("action_name="+g(K(bh||al)),bi,"log");aq(bg,aF);if(S&&ag&&!aL){aL=true;J(n,"click",a0);J(n,"mouseup",a0);J(n,"mousedown",a0);J(n,"mousemove",a0);J(n,"mousewheel",a0);J(w,"DOMMouseScroll",a0);J(w,"scroll",a0);J(n,"keypress",a0);J(n,"keydown",a0);J(n,"keyup",a0);J(w,"resize",a0);J(w,"focus",a0);J(w,"blur",a0);aJ=be.getTime();setTimeout(function bf(){var bj=new Date(),bk;if((aJ+ag)>bj.getTime()){if(S<bj.getTime()){bk=am("ping=1",bi,"ping");aq(bk,aF)}setTimeout(bf,ag)}},ag)}}function aj(be,bh,bf,bi){var bg=am("search="+g(be)+(bh?"&search_cat="+g(bh):"")+(p(bf)?"&search_count="+bf:""),bi,"sitesearch");aq(bg,aF)}function aD(be,bh,bg){var bf=am("idgoal="+be+(bh?"&revenue="+bh:""),bg,"goal");aq(bf,aF)}function aZ(bf,be,bh){var bg=am(be+"="+g(a6(bf)),bh,"link");aq(bg,aF)}function a3(bf,be){if(bf!==""){return bf+be.charAt(0).toUpperCase()+be.slice(1)}return be}function ai(bj){var bi,be,bh=["","webkit","ms","moz"],bg;if(!ar){for(be=0;be<bh.length;be++){bg=bh[be];if(Object.prototype.hasOwnProperty.call(n,a3(bg,"hidden"))){if(n[a3(bg,"visibilityState")]==="prerender"){bi=true}break}}}if(bi){J(n,bg+"visibilitychange",function bf(){n.removeEventListener(bg+"visibilitychange",bf,false);bj()});return}bj()}function ah(bg,bf){var bh,be="(^| )(piwik[_-]"+bf;if(bg){for(bh=0;bh<bg.length;bh++){be+="|"+bg[bh]}}be+=")( |$)";return new RegExp(be)}function aY(bh,be,bi){var bg=ah(az,"download"),bf=ah(ae,"link"),bj=new RegExp("\\.("+an+")([?&#]|$)","i");return bf.test(bh)?"link":(bg.test(bh)||bj.test(be)?"download":(bi?0:"link"))}function aP(bj){var bh,bf,be;while((bh=bj.parentNode)!==null&&p(bh)&&((bf=bj.tagName.toUpperCase())!=="A"&&bf!=="AREA")){bj=bh}if(p(bj.href)){var bk=bj.hostname||b(bj.href),bl=bk.toLowerCase(),bg=bj.href.replace(bk,bl),bi=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):","i");if(!bi.test(bg)){be=aY(bj.className,bg,aH(bl));if(be){bg=d(bg);aZ(bg,be)}}}}function bc(be){var bf,bg;be=be||w.event;bf=be.which||be.button;bg=be.target||be.srcElement;if(be.type==="click"){if(bg){aP(bg)}}else{if(be.type==="mousedown"){if((bf===1||bf===2)&&bg){aB=bf;Y=bg}else{aB=Y=null}}else{if(be.type==="mouseup"){if(bf===aB&&bg===Y){aP(bg)}aB=Y=null}}}}function aO(bf,be){if(be){J(bf,"mouseup",bc,false);J(bf,"mousedown",bc,false)}else{J(bf,"click",bc,false)}}function ax(bf){if(!aN){aN=true;var bg,be=ah(R,"ignore"),bh=n.links;if(bh){for(bg=0;bg<bh.length;bg++){if(!be.test(bh[bg].className)){aO(bh[bg],bf)}}}}}function a7(){var bf,bg,bh={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"},be=(new RegExp("Mac OS X.*Safari/")).test(c.userAgent)?w.devicePixelRatio||1:1;if(!((new RegExp("MSIE")).test(c.userAgent))){if(c.mimeTypes&&c.mimeTypes.length){for(bf in bh){if(Object.prototype.hasOwnProperty.call(bh,bf)){bg=c.mimeTypes[bh[bf]];a2[bf]=(bg&&bg.enabledPlugin)?"1":"0"}}}if(typeof navigator.javaEnabled!=="unknown"&&p(c.javaEnabled)&&c.javaEnabled()){a2.java="1"}if(l(w.GearsFactory)){a2.gears="1"}a2.cookie=P()}a2.res=z.width*be+"x"+z.height*be}a7();aC();return{getVisitorId:function(){return(L())[1]},getVisitorInfo:function(){return L()},getAttributionInfo:function(){return i()},getAttributionCampaignName:function(){return i()[0]},getAttributionCampaignKeyword:function(){return i()[1]},getAttributionReferrerTimestamp:function(){return i()[2]},getAttributionReferrerUrl:function(){return i()[3]},setTrackerUrl:function(be){N=be},setSiteId:function(be){a1=be},setCustomData:function(be,bf){if(y(be)){U=be}else{if(!U){U=[]}U[be]=bf}},getCustomData:function(){return U},setCustomVariable:function(bf,be,bi,bg){var bh;if(!p(bg)){bg="visit"}if(bf>0){be=p(be)&&!h(be)?String(be):be;bi=p(bi)&&!h(bi)?String(bi):bi;bh=[be.slice(0,a5),bi.slice(0,a5)];if(bg==="visit"||bg===2){M();Q[bf]=bh}else{if(bg==="page"||bg===3){aA[bf]=bh}}}},getCustomVariable:function(bf,bg){var be;if(!p(bg)){bg="visit"}if(bg==="page"||bg===3){be=aA[bf]}else{if(bg==="visit"||bg===2){M();be=Q[bf]}}if(!p(be)||(be&&be[0]==="")){return false}return be},deleteCustomVariable:function(be,bf){if(this.getCustomVariable(be,bf)){this.setCustomVariable(be,"","",bf)}},setLinkTrackingTimer:function(be){aF=be},setDownloadExtensions:function(be){an=be},addDownloadExtensions:function(be){an+="|"+be},setDomains:function(be){aG=h(be)?[be]:be;aG.push(aX)},setIgnoreClasses:function(be){R=h(be)?[be]:be},setRequestMethod:function(be){aI=be||"GET"},setReferrerUrl:function(be){aK=be},setCustomUrl:function(be){av=aW(bb,be)},setDocumentTitle:function(be){al=be},setDownloadClasses:function(be){az=h(be)?[be]:be},setLinkClasses:function(be){ae=h(be)?[be]:be},setCampaignNameKey:function(be){ap=h(be)?[be]:be},setCampaignKeywordKey:function(be){ak=h(be)?[be]:be},discardHashTag:function(be){T=be},setCookieNamePrefix:function(be){a9=be;Q=Z()},setCookieDomain:function(be){X=r(be);aC()},setCookiePath:function(be){ba=be;aC()},setVisitorCookieTimeout:function(be){ac=be*1000},setSessionCookieTimeout:function(be){ad=be*1000},setReferralCookieTimeout:function(be){aw=be*1000},setConversionAttributionFirstReferrer:function(be){au=be},disableCookies:function(){V=true;a2.cookie="0"},setDoNotTrack:function(bf){var be=c.doNotTrack||c.msDoNotTrack;a4=bf&&(be==="yes"||be==="1");if(a4){this.disableCookies()}},addListener:function(bf,be){aO(bf,be)},enableLinkTracking:function(be){if(k){ax(be)}else{u.push(function(){ax(be)})}},setHeartBeatTimer:function(bg,bf){var be=new Date();S=be.getTime()+bg*1000;ag=bf*1000},killFrame:function(){if(w.location!==w.top.location){w.top.location=w.location}},redirectFile:function(be){if(w.location.protocol==="file:"){w.location=be}},setCountPreRendered:function(be){ar=be},trackGoal:function(be,bg,bf){ai(function(){aD(be,bg,bf)})},trackLink:function(bf,be,bg){ai(function(){aZ(bf,be,bg)})},trackPageView:function(be,bf){if(s(N,a1)){ai(function(){B(N,a1)})}else{ai(function(){ay(be,bf)})}},trackSiteSearch:function(be,bg,bf){ai(function(){aj(be,bg,bf)})},setEcommerceView:function(bh,be,bg,bf){if(!p(bg)||!bg.length){bg=""}else{if(bg instanceof Array){bg=JSON2.stringify(bg)}}aA[5]=["_pkc",bg];if(p(bf)&&String(bf).length){aA[2]=["_pkp",bf]}if((!p(bh)||!bh.length)&&(!p(be)||!be.length)){return}if(p(bh)&&bh.length){aA[3]=["_pks",bh]}if(!p(be)||!be.length){be=""}aA[4]=["_pkn",be]},addEcommerceItem:function(bi,be,bg,bf,bh){if(bi.length){aQ[bi]=[bi,be,bg,bf,bh]}},trackEcommerceOrder:function(be,bi,bh,bg,bf,bj){aU(be,bi,bh,bg,bf,bj)},trackEcommerceCartUpdate:function(be){a8(be)}}}function o(){return{push:G}}J(w,"beforeunload",H,false);j();Date.prototype.getTimeAlias=Date.prototype.getTime;A=new t();for(D=0;D<_paq.length;D++){G(_paq[D])}_paq=new o();return{addPlugin:function(i,L){a[i]=L},getTracker:function(i,L){return new t(i,L)},getAsyncTracker:function(){return A}}}()),piwik_track,piwik_log=function(b,f,d,g){function a(h){try{return replacedEvilString("piwik_"+h)}catch(i){}return}var c,e=Piwik.getTracker(d,f);e.setDocumentTitle(b);e.setCustomData(g);c=a("tracker_pause");if(c){e.setLinkTrackingTimer(c)}c=a("download_extensions");if(c){e.setDownloadExtensions(c)}c=a("hosts_alias");if(c){e.setDomains(c)}c=a("ignore_classes");if(c){e.setIgnoreClasses(c)}e.trackPageView();if(a("install_tracker")){piwik_track=function(i,k,j,h){e.setSiteId(k);e.setTrackerUrl(j);e.trackLink(i,h)};e.enableLinkTracking()}};
/* ASCII ART via http://www.network-science.de/ascii/ */