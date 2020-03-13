(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{281:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},757:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o(54),i=(o(88),o(20),o(34),o(281)),r=o(1),s=(r.a.config.optionMergeStrategies,{VueRemarkRoot:i.a}),c=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===Object(a.a)(s[e])&&"function"==typeof s[e].render?t[e]=s[e]:o[e]=function(){return s[e]}}))},h=r.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",u={excerpt:null,title:"Rholang and Lambda Calculus"};var d=function(e){e.options[l]&&(e.options[l]=u),r.a.util.defineReactive(e.options,l,u),e.options.computed=h.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},p=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h1",{attrs:{id:"rholang-and-lambda-calculus"}},[o("a",{attrs:{href:"#rholang-and-lambda-calculus","aria-hidden":"true"}},[e._v("#")]),e._v("Rholang and Lambda Calculus")]),o("p",[e._v("Written by Lucius Gregory Meredith and Alex Bulkin")]),o("h2",{attrs:{id:"introduction-and-motivation"}},[o("a",{attrs:{href:"#introduction-and-motivation","aria-hidden":"true"}},[e._v("#")]),e._v("Introduction and motivation")]),o("p",[e._v("One of the most remarkable discoveries of the computational calculi, such as the 𝛌-calculus, and the π-calculus, comes under the heading “data as behavior”. The paradigmatic example is Church’s encoding of the natural numbers "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Church_encoding",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://en.wikipedia.org/wiki/Church_encoding")]),e._v(", building on the insights of Peano Arithmetic "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Peano_axioms",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://en.wikipedia.org/wiki/Peano_axioms")]),e._v(". Essentially the idea isID that numbers are computations, aka programs, or processes. In this scheme 0 is the program that does nothing, and we have a higher order program, sometimes called successor, that takes a program representing a number and adds 1 to it. ")]),o("p",[e._v("The programmatic interpretation of data, such as quantity or number is as useful as it is possible to interpret other arithmetic operations, such as multiplication, calculation of inverses, and radicals, consistently within the representation. The extent to which this can be done efficiently within the model is the extent to which it affords a number of potentially interesting capabilities, such as using programmatic representations of quantity to capture notions such as infinite precision calculation.")]),o("p",[e._v("Another example of data as behavior is Church’s encoding of the booleans "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Church_encoding",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://en.wikipedia.org/wiki/Church_encoding")]),e._v(". Such encodings also have the added benefit of providing a rich set of examples through which to understand the model of computation being used to represent the familiar data types. As such, any model of computation worth its salt needs to be able to provide this basic account of data as behavior for the bulk of the familiar data types, such as the natural numbers and the booleans.")]),o("p",[e._v("The mobile process calculi are no different in this respect and Milner understood this, which was part of the motivation for the paper: "),o("a",{attrs:{href:"http://www.lfcs.inf.ed.ac.uk/reports/91/ECS-LFCS-91-180/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("the Polyadic π-calculus: a Tutorial")]),e._v(" in which he provides just such encodings, and then goes on to provide encodings of the fundamental collection type, the linked list. The rho calculus, and rholang (the blockchain contracting language based on it), being derived from the π-calculus, and into which one can give a full and faithful translation of the π-calculus is able to directly support Milner’s encoding of these basic data types.")]),o("p",[e._v("However, the higher-order nature, as well as the reflective nature of the calculus makes it possible to not only give much more compact encodings, but also to encode quite simply and directly much more sophisticated notions of numbers, such as Conway’s surreal numbers. Here we provide a brief description of these encodings with a discussion of the intuitions behind them.")])])}),[],!1,null,null,null);"function"==typeof c&&c(p),"function"==typeof d&&d(p);t.default=p.exports}}]);