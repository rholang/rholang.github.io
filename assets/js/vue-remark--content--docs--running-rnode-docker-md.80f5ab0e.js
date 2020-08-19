(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{E9Og:function(e,t,r){"use strict";r.r(t);var o=r("KHd+"),a=r("UQSp"),n=r("Kw5r");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var i={VueRemarkRoot:a.a},c=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===s(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:r[e]=function(){return i[e]}}))},p=n.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",d={excerpt:null,title:"Running RNode (Docker)"};var h=function(e){e.options[l]&&(e.options[l]=d),n.a.util.defineReactive(e.options,l,d),e.options.computed=p.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},u=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"running-rnode-docker"}},[r("a",{attrs:{href:"#running-rnode-docker","aria-hidden":"true"}},[e._v("#")]),e._v("Running RNode (Docker)")]),r("p",[e._v("These are the run commands to start an RNode Observer Node (read-only node). With this you are connecting to existing validator on mainnet.")]),r("h2",{attrs:{id:"docker-for-windows-10-and-linux"}},[r("a",{attrs:{href:"#docker-for-windows-10-and-linux","aria-hidden":"true"}},[e._v("#")]),e._v("Docker for Windows 10 and Linux")]),r("blockquote",[r("p",[e._v("Please fill in the "),r("code",{pre:!0},[e._v("<bootstrap ID>")]),e._v(". The current network ID is posted on "),r("a",{attrs:{href:"https://rchain.atlassian.net/wiki/spaces/CORE/pages/678756429/RChain+public+testnet+information",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("RChain public testnet information")]),e._v(".")])]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("docker run -it --rm --name rnode -v /data/rhoc-daemon-01:/var/lib/rnode rchain/rnode:latest run --network "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("args"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --shard-id "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("args"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --bootstrap "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("args"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -finalization-rate "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("args"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --fault-tolerance-threshold "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("args"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --synchrony-constraint-threshold "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("args"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --fork-choice-stale-threshold "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("args"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --fork-choice-check-if-stale-interval "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("args"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --drop-peer-after-retries "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("args"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --give-up-after-skipped "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("args"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")])])]),r("ul",[r("li",[r("code",{pre:!0},[e._v("--network-id <arg>")]),e._v(" The network to run on (testnet , mainnet).")]),r("li",[r("code",{pre:!0},[e._v("--shard-id <arg>")]),e._v(" The network is splitted into shards for scaling.")]),r("li",[r("code",{pre:!0},[e._v("--bootstrap <arg>")]),e._v(" The bootstrap server for initial connection to the network.")]),r("li",[r("code",{pre:!0},[e._v("--finalization-rate <arg>")]),e._v(" Block finalization is triggered after adding every 'n' blocks. Use this option to configure this.")]),r("li",[r("code",{pre:!0},[e._v("--fault-tolerance-threshold <arg>")]),e._v(" Float value representing that the node tolerates up to fault-tolerance-threshold fraction of the total weight to equivocate.")]),r("li",[r("code",{pre:!0},[e._v("--synchrony-constraint-threshold <arg>")]),e._v("Float value representing that the node waits until at least synchrony-constraint-threshold fraction of the validators (by stake weight) proposed at least one block since is node's last proposal.")]),r("li",[r("code",{pre:!0},[e._v("--fork-choice-stale-threshold <arg>")]),e._v(" Node will request for fork choice tips if the latest FCT is more then ForkChoiceStaleThreshold old.")]),r("li",[r("code",{pre:!0},[e._v("--fork-choice-check-if-stale-interval <arg>")]),e._v(" Interval for check if fork choice tip is stale.")]),r("li",[r("code",{pre:!0},[e._v("--drop-peer-after-retries <arg>")]),e._v(" Fair round robin dispatcher drop inactive peer after round robin rounds. After giving up several times the peer gets dropped from the queue.")]),r("li",[r("code",{pre:!0},[e._v("--give-up-after-skipped <arg>")]),e._v(" Fair round robin dispatcher give up and try next peer after skipped packets. Skipped packets are buffered in other peers packet queues.")])]),r("p",[r("strong",[e._v("Examples:")])]),r("ul",[r("li",[e._v("run rnode")])]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("docker run --rm -d -v C:"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Users"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Nakamoto"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Desktop"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Rnode:/var/lib/rnode --network "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("host")]),e._v(" --name rchain-mainet-peer rchain/rnode:latest run "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--bootstrap "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"rnode://487e2c0c519b450b61253dea0a23b4d184a50089@node0.root-shard.mainnet.rchain.coop?protocol=40400&discovery=40404"')]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--finalization-rate "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" --fault-tolerance-threshold -1 --network-id mainnet --shard-name root --max-number-of-parents "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")])])]),r("blockquote",[r("p",[e._v("please fill in you own userpath "),r("code",{pre:!0},[e._v("-v C:\\Users\\<your-user-name>\\Desktop\\Rnode")]),e._v(". Also copy conf files into Rnode folder: "),r("a",{attrs:{href:"https://github.com/rchain/rchain/blob/dev/node/src/main/resources/defaults.conf",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("link")])])]),r("ul",[r("li",[e._v("help documentation")])]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("docker run rchain/rnode:latest --help")])]),r("blockquote",[r("p",[e._v("if the message: "),r("code",{pre:!0},[e._v("- Waiting for first connection")]),e._v(" is there for more than 1 minute, please check your ports and ip: "),r("a",{attrs:{href:"/docs/network-configuration"}},[e._v("Network Configuration")])])]),r("h2",{attrs:{id:"docker-for-mac"}},[r("a",{attrs:{href:"#docker-for-mac","aria-hidden":"true"}},[e._v("#")]),e._v("Docker for Mac")]),r("blockquote",[r("p",[e._v("Docker for Mac will only work with static NAT and port forwarding. network=host does not work on Mac. See RNode supported network configuration for more information on static NAT and port forwarding.")])]),r("ul",[r("li",[e._v("Bootstrap address - Enter the address of the bootstrap node you want to connect with. See RNode bootstrap addresses for bootstrap nodes supported by the RChain core development team.")]),r("li",[e._v("Validator private key - Insert the key if you are a validator of test net, or if you are creating a private network and have a bonds file included in your genesis block.")]),r("li",[e._v("Network configuration - If you want to specify your ports, include --p in the run command. If you want to specify your host, include --host in the run command.")])]),r("h2",{attrs:{id:"tips-for-working-with-rnode-in-docker"}},[r("a",{attrs:{href:"#tips-for-working-with-rnode-in-docker","aria-hidden":"true"}},[e._v("#")]),e._v("Tips for working with RNode in Docker")]),r("h3",{attrs:{id:"naming-containers"}},[r("a",{attrs:{href:"#naming-containers","aria-hidden":"true"}},[e._v("#")]),e._v("Naming Containers")]),r("p",[e._v("Once the network is created, the server container will be put into the network, and then referenced by the client. It's easier if you give your server container a name. This is an example of of naming a server 'rnode-server-local'.")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("docker run --name rnode-server-local rchain/rnode:latest")])]),r("h3",{attrs:{id:"using-the---host-flag"}},[r("a",{attrs:{href:"#using-the---host-flag","aria-hidden":"true"}},[e._v("#")]),e._v("Using the --host flag")]),r("p",[e._v("If you want to create a local docker network which consists of some nodes and a bootstrap node, you will have to specify the nodes' addresses with the --host flag. Make sure to not use the nodes' IP addresses for the --host flag. Instead use the hostnames. If the network is called 'rnode-net' and you named a docker container 'rnode-server-local', the hostname of that docker container is 'rnode-server-local.rnode-net'.")]),r("h3",{attrs:{id:"sharing-directories-with-containers"}},[r("a",{attrs:{href:"#sharing-directories-with-containers","aria-hidden":"true"}},[e._v("#")]),e._v("Sharing directories with containers")]),r("p",[e._v("To share a directory with a container use the volume command. You will need to create a directory on your local system that will store all of the RNode related files. Once the directory is created, you can share this directory with the Docker container by using the volume command. Below is an example of how the volume parameter can be specified as part of a run command.")]),r("p",[e._v("RNode requires the path /var/lib/rnode exist on startup. Each instance of RNode requires its own separate /var/lib/rnode directory.")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("docker run -v "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"path to local directory"')]),e._v(":/var")])])])}),[],!1,null,null,null);"function"==typeof c&&c(u),"function"==typeof h&&h(u);t.default=u.exports},UQSp:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);