(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{281:function(e,n,o){"use strict";n.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},769:function(e,n,o){"use strict";o.r(n);var t=o(0),r=o(54),a=(o(88),o(20),o(34),o(281)),i=o(1),s=(i.a.config.optionMergeStrategies,{VueRemarkRoot:a.a}),l=function(e){var n=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===Object(r.a)(s[e])&&"function"==typeof s[e].render?n[e]=s[e]:o[e]=function(){return s[e]}}))},h=i.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",p={excerpt:null,title:"Rholang"};var u=function(e){e.options[c]&&(e.options[c]=p),i.a.util.defineReactive(e.options,c,p),e.options.computed=h.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},g=Object(t.a)({},(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("VueRemarkRoot",[o("h1",{attrs:{id:"rholang"}},[o("a",{attrs:{href:"#rholang","aria-hidden":"true"}},[e._v("#")]),e._v("Rholang")]),o("p",[e._v("Rholang is a new programming language designed for use in distributed systems. This document describes the syntax in Rholang.")]),o("p",[e._v('Rholang is "process-oriented": all computation is done by means of message passing. Messages are passed on "channels", which are rather like message queues; however, the channels behave more like bags (multisets) rather than queues, since there is no implicit ordering on messages.')]),o("p",[e._v("Rholang is completely asynchronous, in the sense that while you can read a message from a channel and then do something with it, you can't send a message and then do something once it has been received, at least, not without explicitly waiting for an acknowledgment message from the receiver. Every channel has a name, and every name denotes a unique channel.")]),o("p",[o("strong",[e._v("Rholang language specification:")])]),o("p",[o("g-link",{attrs:{to:"https://developer.rchain.coop/assets/rholang-spec-0.2.pdf",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Language specification")])],1),o("h2",{attrs:{id:"rchain-cloud"}},[o("a",{attrs:{href:"#rchain-cloud","aria-hidden":"true"}},[e._v("#")]),e._v("RChain Cloud")]),o("p",[e._v("Members of the RChain community provide a public web-based "),o("g-link",{attrs:{to:"http://rchain.cloud",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("online rholang interpreter")]),e._v(" ("),o("g-link",{attrs:{to:"https://rchaincloud.inblock.io",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("mirror")]),e._v("). This tool is the easiest way to get started and does not require installing any software.")],1),o("h2",{attrs:{id:"vscode-plugin"}},[o("a",{attrs:{href:"#vscode-plugin","aria-hidden":"true"}},[e._v("#")]),e._v("VSCode Plugin")]),o("p",[e._v("This is the Visual Studio Code extension for the Rholang programming language. It has support for syntax highlighting and code evaluation with error highlighting.\n"),o("g-link",{attrs:{to:"https://marketplace.visualstudio.com/items?itemName=tgrospic.rholang",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Marketplace VSCode")])],1),o("h2",{attrs:{id:"cryptofex-ide"}},[o("a",{attrs:{href:"#cryptofex-ide","aria-hidden":"true"}},[e._v("#")]),e._v("Cryptofex IDE")]),o("p",[e._v("Pyrofex is developing an up-and-coming integrated development environment called "),o("g-link",{attrs:{to:"https://cryptofex.io/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Cryptofex")]),e._v(". Cryptofex runs natively on windows, mac, and linux/. It offers rholang syntax highlighting and is capable of evaluating rholang code internally or with a running RNode. The IDE also supports ethereum development.")],1),o("ul",[o("li",[o("strong",[e._v("Write Rholang using an IntelliJ plugin")]),e._v(" - This "),o("a",{attrs:{href:"https://github.com/tgrospic/rholang-idea",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Rholang IntelliJ plugin")]),e._v(" was created by a RChain community member.")])]),o("h2",{attrs:{id:"local-node"}},[o("a",{attrs:{href:"#local-node","aria-hidden":"true"}},[e._v("#")]),e._v("Local Node")]),o("p",[e._v("The tried and true way to run rholang code is to start up your own local RNode and use its rholang interpreter. First, you'll have to "),o("a",{attrs:{href:"https://rchain.atlassian.net/wiki/spaces/CORE/pages/428376065/User+guide+for+running+RNode",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("install RNode")]),e._v(" for your platform.")]),o("p",[e._v("For novice learners there are step-by-step guides on setting up a node using "),o("a",{attrs:{href:"https://blog.rchain.coop/running-rnode-0-5-3-on-amazon-ec2/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("AWS")]),e._v(" or "),o("a",{attrs:{href:"https://blog.rchain.coop/running-rnodev-0-6-x-with-docker/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Docker")]),e._v(".")]),o("p",[e._v("Once RNode is installed, you can run a basic standalone node")]),o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("$ rnode run -s -n")])])])}),[],!1,null,null,null);"function"==typeof l&&l(g),"function"==typeof u&&u(g);n.default=g.exports}}]);