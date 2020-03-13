(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{281:function(t,a,s){"use strict";a.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},751:function(t,a,s){"use strict";s.r(a);var e=s(0),n=s(54),r=(s(88),s(20),s(34),s(281)),o=s(1),p=(o.a.config.optionMergeStrategies,{VueRemarkRoot:r.a}),c=function(t){var a=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===Object(n.a)(p[t])&&"function"==typeof p[t].render?a[t]=p[t]:s[t]=function(){return p[t]}}))},i=o.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",v={excerpt:null,title:"Object Capabilities"};var _=function(t){t.options[l]&&(t.options[l]=v),o.a.util.defineReactive(t.options,l,v),t.options.computed=i.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},u=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("VueRemarkRoot",[s("h1",{attrs:{id:"object-capabilities"}},[s("a",{attrs:{href:"#object-capabilities","aria-hidden":"true"}},[t._v("#")]),t._v("Object Capabilities")]),s("p",[t._v("Recently we learned how unforgeable names can restrict the use of a channel to those who know the name. We've also see how state channels can be used to store data and methods can be used to modify encapsulated data. In this lesson we'll see how methods that are placed on unforgeable names lead to a tremendously useful design pattern known as \"object capabilities\".")]),s("p",[t._v("An everyday example of an object capability is the key to your home or car. Possessing the object gives you the capability to enter the home or start the car. With object you also have the ability to delegate by giving to key or a copy of the key to someone else.")]),s("p",[t._v("In this lesson we'll build up a few example projects that uses state channels, and object capabilities. We'll see that object capabilities can be used more generally than bundles to grant permissions such as reading and writing data, but also more abstract capabilities like reseting a counter or deleting a facebook account.")]),s("h2",{attrs:{id:"atc-revisited"}},[s("a",{attrs:{href:"#atc-revisited","aria-hidden":"true"}},[t._v("#")]),t._v("ATC Revisited")]),s("p",[t._v("Let's revisit the air traffic control example from lesson 4. Previously controllers were able to broadcast weather and runway information by using a repeated send. But they were not able to update the information. And we all know weather can change unpredictably. So in this example we'll store the current information on a state channel, and give the controllers a capability to update it as necessary.")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",{pre:!0,attrs:{class:"language-javascript"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("stationFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stdout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("rho:io:stdout")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  contract "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stationFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initialMessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("currentMessage")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Populate the initial message")]),t._v("\n      currentMessage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("initialMessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Owner can update the message anytime")]),t._v("\n      contract "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newMessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" currentMessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          currentMessage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("newMessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// User tunes in for latest message")]),t._v("\n      contract "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" currentMessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n          currentMessage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Controllers create new station with private set capability")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and public get capability")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("airportInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    stationFactory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Weather is nice"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("airportInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Listener tunes in to receive latest message")]),t._v("\n  airportInfo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("stdout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("p",[t._v("It may seem natural to use a read-only bundle for tuning into the station. However, if we use a bundle, then the first listener to receive the message, would consume it from the state channel. It wouldn't be left for other pilots to receive. In order to ensure that the message is persisted like we want, we handle all access to the state channel ourselves, and only give the pilots a capability to query for the the correct message.")]),s("p",[t._v("How would the ATCs update the information?")]),s("ul",[s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",checked:"",disabled:""}}),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v('set!("Strong crosswinds, be advised")')])]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v('setInfo!("Strong crosswinds, be advised")')])]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v('getInfo!("Strong crosswinds, be advised")')])]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v('stationFactory.setInfo!("Strong crosswinds, be advised")')])])]),s("h3",{attrs:{id:"exercise"}},[s("a",{attrs:{href:"#exercise","aria-hidden":"true"}},[t._v("#")]),t._v("Exercise")]),s("p",[t._v("Write more thorough tests to make sure the ATCs can update the status successfully, and that pilots cannot")]),s("h2",{attrs:{id:"savings-account"}},[s("a",{attrs:{href:"#savings-account","aria-hidden":"true"}},[t._v("#")]),t._v("Savings Account")]),s("p",[t._v("In this example we'll write code to model a simple savings account in rholang. It will have deposit, withdraw, and check methods.")]),s("p",[t._v("Unlike with our counter, a savings account needs to be secure. We don't want just anyone knowing our balance, or worse, withdrawing it.")]),s("p",[t._v("Here is some starter code to consider")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",{pre:!0,attrs:{class:"language-javascript"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("openAccount")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This contract registers a new account and creates its methods.")]),t._v("\n  contract "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("openAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initialDeposit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deposit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" withdraw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" check"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("balanceCh")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      balanceCh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("initialDeposit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Withdraw Contract")]),t._v("\n      contract "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withdraw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("old "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" balanceCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          balanceCh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("old "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n          ack"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Nil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Deposit Contract")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Check contract")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Customer Sarah creates an uses an account")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("sarahDeposit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sarahWithdraw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sarahCheck"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ack "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    openAccount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("sarahDeposit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("sarahWithdraw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("sarahCheck"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    sarahWithdraw"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" ack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      Nil"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO check balance here")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("h3",{attrs:{id:"exercise-1"}},[s("a",{attrs:{href:"#exercise-1","aria-hidden":"true"}},[t._v("#")]),t._v("Exercise")]),s("p",[t._v("Fill in the remaining methods in the account.")]),s("p",[t._v("Which contract serves as a factory?")]),s("ul",[s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("check")])]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("withdraw")])]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("deposit")])]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",checked:"",disabled:""}}),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("openAccount")])])]),s("p",[t._v("Our current savings account allows negative balances, but probably it shouldn't. Think about how you might try to solve that issue. We'll learn the proper tool to do that in our next lesson.")]),s("h2",{attrs:{id:"stealing-funds"}},[s("a",{attrs:{href:"#stealing-funds","aria-hidden":"true"}},[t._v("#")]),t._v("Stealing Funds")]),s("p",[t._v("Try to write the code Eve would need to par in to steal Sarah's funds. I bet you can't think of any. That's because only Sarah has access to the unforgeable names that control the account.")]),s("p",[t._v("If Sarah wanted to allow her friend Stephanie to deposit into her bank account, but not check or withdraw, what code should she run?")]),s("ul",[s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("stephanie!(*sarahWithdraw)")])]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",checked:"",disabled:""}}),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("stephanie!(*sarahDeposit)")])]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v('sarahWithdraw!("enable", *stephanie)')])]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v('openAccount!(10, *sarahDeposit, @"sarahWithdraw", @"sarahCheck")')])])]),s("h2",{attrs:{id:"two-kinds-of-factories"}},[s("a",{attrs:{href:"#two-kinds-of-factories","aria-hidden":"true"}},[t._v("#")]),t._v("Two Kinds of Factories")]),s("p",[t._v("So far all of our factory methods have required us to pass in names on which to build the contracts. In the savings account example, those names were "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("check")]),t._v(", "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("deposit")]),t._v(", and "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("withdraw")]),t._v('. I call this a "BYOC" or "bring your own channel" factory. The BYOC technique has the advantage that the user can supply any names she likes including names she got from other contracts or public names.')]),s("p",[t._v('Another technique is to allow the factory to create the necessary unforgeable names and send them back to the caller. I call this the a "full service" factory. If you don\'t require the flexibility of passing in arbitrary names, a full service factory is often less hassle.')]),s("h3",{attrs:{id:"exercise-2"}},[s("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[t._v("#")]),t._v("Exercise")]),s("p",[t._v("Convert the savings account from byoc factory to to full service factory.")]),s("p",[t._v("Now that you've converted the savings account, is it still possible for Sarah to make her deposit capability public?")]),s("ul",[s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" No; she can no longer pass in a public name")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" No; she doesn't have access to do so")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",checked:"",disabled:""}}),t._v(" Yes; she just needs to make the new capability public herself")]),s("li",{staticClass:"task-list-item"},[s("input",{attrs:{type:"checkbox",disabled:""}}),t._v(" Yes; just like before")])]),s("h2",{attrs:{id:"abortable-rocket-launch"}},[s("a",{attrs:{href:"#abortable-rocket-launch","aria-hidden":"true"}},[t._v("#")]),t._v("Abortable Rocket Launch")]),s("p",[t._v("Back when we first learned the join operator we considered a scenario in which two operators must both give clearance to launch a rocket. We desired that they should also be able to retract the clearance.")]),s("p",[t._v("This problem can be solved by giving the operator an abort button when they give their launch command.")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",{pre:!0,attrs:{class:"language-javascript"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("rocketFactory")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// When a new rocket is setup, a launch capability for each for each operator is passed in")]),t._v("\n  contract "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rocketFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aliceLaunch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bobLaunch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("aliceReadyCh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bobReadyCh "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Start out neither ready")]),t._v("\n      aliceReadyCh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n      bobReadyCh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n\n      contract "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("aliceLaunch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("aliceAbort")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" aliceReadyCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            aliceReadyCh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n          contract "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("aliceAbort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" aliceReadyCh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              aliceReadyCh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n              ack"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Nil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n          ack"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("aliceAbort"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n      Nil "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Bob contract goes here")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ack"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Nil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Make a new rocket to test")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("aliceLaunch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bobLaunch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ack "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rocketFactory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("aliceLaunch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("bobLaunch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" ack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      Nil "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Tests go here")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("h3",{attrs:{id:"exercise-3"}},[s("a",{attrs:{href:"#exercise-3","aria-hidden":"true"}},[t._v("#")]),t._v("Exercise")]),s("p",[t._v("Complete the above code with bob's launch logic and integration tests.")]),s("h2",{attrs:{id:"design-patterns"}},[s("a",{attrs:{href:"#design-patterns","aria-hidden":"true"}},[t._v("#")]),t._v("Design Patterns")]),s("p",[t._v("There are many common Object Capability design patterns. Many of the are explained and illustrated in "),s("g-link",{attrs:{to:"http://erights.org/talks/efun/SecurityPictureBook.pdf",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("A Picturebook of Secure Cooperation")])],1),s("h3",{attrs:{id:"exercise-4"}},[s("a",{attrs:{href:"#exercise-4","aria-hidden":"true"}},[t._v("#")]),t._v("Exercise")]),s("p",[t._v("We will encounter many of these patterns as we work through the upcoming examples, but I encourage you to implement one or two of them in rholang right now.")])])}),[],!1,null,null,null);"function"==typeof c&&c(u),"function"==typeof _&&_(u);a.default=u.exports}}]);