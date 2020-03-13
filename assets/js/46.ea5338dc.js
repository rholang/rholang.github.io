(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{281:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},763:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(54),s=(a(88),a(20),a(34),a(281)),o=a(1),i=(o.a.config.optionMergeStrategies,{VueRemarkRoot:s.a}),h=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===Object(r.a)(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:a[e]=function(){return i[e]}}))},d=o.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",c={excerpt:null,title:"Shards in RChain"};var p=function(e){e.options[l]&&(e.options[l]=c),o.a.util.defineReactive(e.options,l,c),e.options.computed=d.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},v=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[a("h1",{attrs:{id:"shards-in-rchain"}},[a("a",{attrs:{href:"#shards-in-rchain","aria-hidden":"true"}},[e._v("#")]),e._v("Shards in RChain")]),a("h2",{attrs:{id:"definitions"}},[a("a",{attrs:{href:"#definitions","aria-hidden":"true"}},[e._v("#")]),e._v("Definitions")]),a("p",[e._v("Shard - a set of validators working together to validate transactions and create blocks. Validators in one shard can be clients of another shard, but they cannot exchange unforgeable names.")]),a("p",[e._v("What is lost - the ability to use OCaps security between the shards."),a("br"),e._v("\nThe following Code block can be exchanged across shards:")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",{pre:!0,attrs:{class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("x")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])]),a("p",[e._v("not")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",{pre:!0,attrs:{class:"language-javascript"}},[e._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("182")]),e._v("acdb344"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v("fd533"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("bbd5433cfe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")])])]),a("p",[e._v("Shards support unforgeable names within the validator set. A block proposal containing an unforgeable name from a validator within the validator set is fine. Both of the above code blocks are supported within a shard.")]),a("h3",{attrs:{id:"the-sharding-client"}},[a("a",{attrs:{href:"#the-sharding-client","aria-hidden":"true"}},[e._v("#")]),e._v("The Sharding Client")]),a("p",[e._v("The validators in a child shard are clients of the parent shard. This has a few implications:")]),a("p",[e._v("They must listen for events taking place in the depository contract in the parent.\nThey must listen for events taking place in the mint contract on the blockchain they are validating.\nThey have to create events (deployments) based on events both of these chains.")]),a("h3",{attrs:{id:"creating-a-shard"}},[a("a",{attrs:{href:"#creating-a-shard","aria-hidden":"true"}},[e._v("#")]),e._v("Creating a Shard")]),a("p",[e._v("A group of Rev holding validators come together and decide they want to spawn a new child shard.")]),a("p",[e._v("If the shard wants to engage in cross shard transfers, and is not a child of the root shard, then it is advisable that validators in the shard validate transactions in the parent. To do this, they will need to stake that shard separately.")]),a("p",[e._v("Steps")]),a("ol",[a("li",[e._v("The validators go through the process of Initializing the blockchain.")]),a("li",[e._v("A validator creates a depository contract deployment in the parent shard that includes the validator list (ip addresses, node id and public keys), K and shard name. K should be a proportion of N (% needed to pass a vote)")]),a("li",[e._v("All the Validators then send (purse, signature over the above tuple (genesis hash, validator list, k) to the newly created depository.")]),a("li",[e._v("The Mint contract is updated to include the K / N parameters for the shard.")]),a("li",[e._v("When a shard is mounted, Rev minted in Genesis will be backed by Rev in the depository.")])]),a("h3",{attrs:{id:"transferring-value-across-shards"}},[a("a",{attrs:{href:"#transferring-value-across-shards","aria-hidden":"true"}},[e._v("#")]),e._v("Transferring value across Shards")]),a("p",[e._v("By sharding the blockchain, in essence we create 'altcoins' in each shard. Rev will exist in the rchain shard (the root shard). All other shards will have token that will be 'backed' by Rev, much in the same way that currency can be backed by gold. Tokens in shards will be exchanged for Rev in the rchain shard with a 1:1 exchange rate.")]),a("p",[e._v("The process of transferring token between 2 shards requires invoking a contract in the nearest common ancestor of both shards. The platform will only support the atomic transfer from a child to a parent and a parent to a child.")]),a("p",[e._v("Client software will need to provide the following data:")]),a("ul",[a("li",[e._v("The list of shards by which the transfer will take place (path from one account to the other, via an ancestor)")]),a("li",[e._v("Signatures for the transaction")]),a("li",[e._v("Deployments for Payments")])]),a("h3",{attrs:{id:"listening-for-events"}},[a("a",{attrs:{href:"#listening-for-events","aria-hidden":"true"}},[e._v("#")]),e._v("Listening for Events")]),a("p",[e._v("The validators in a shard have to be aware of certain events in the parent shard. These are:")]),a("ol",[a("li",[e._v("Inbound transfers of Rev token into the depository")])]),a("p",[e._v("Events in the child shard they have to be aware of for the purposes of updating the depository parameters:")]),a("ol",[a("li",[e._v("Token transfers to parent shard.")]),a("li",[e._v("Bonding events")]),a("li",[e._v("Unbonding events (immediately updates N, wallet is created and sits in the child until the wait period is over)")]),a("li",[e._v("Slashing events (forced unbonding - same as above, except no wallet is returned, as the bond is slashed)")])]),a("h4",{attrs:{id:"inbound-token-transfers-depository-increase"}},[a("a",{attrs:{href:"#inbound-token-transfers-depository-increase","aria-hidden":"true"}},[e._v("#")]),e._v("Inbound Token transfers (depository increase)")]),a("ol",[a("li",[a("p",[e._v("Validators are listening on the depository contract & receive a message that token has been deposited.")]),a("ol",[a("li",[e._v("The message has to include the address of the wallet (shard identifier), the secret, and the amount being transferred")]),a("li",[e._v("This message is stored in the client.")]),a("li",[e._v("The address of the destination wallet is checked."),a("ol",[a("li",[e._v("If this shard, then the token transfer terminates here")]),a("li",[e._v("If not this shard, locate the K/N contract")])])])])]),a("li",[a("p",[e._v("Monitor the transaction to the depository reaches a level of safety on the parent shard")])]),a("li",[a("p",[e._v("Each node can choose the frequency the node polls the parent shard for messages on the depository)")]),a("ol",[a("li",[e._v("When a node is satisfied with the safety level, it creates a deployment to the mint contract."),a("ol",[a("li",[e._v("The call to Mint is to create a purse and send it to a destination.")]),a("li",[e._v("The destination could be another K/N contract or a wallet (final destination)")]),a("li",[e._v("The Mint contract gathers up deployments until K is met.")]),a("li",[e._v("Token is minted.")])])])])])]),a("h3",{attrs:{id:"parent-child-transfer"}},[a("a",{attrs:{href:"#parent-child-transfer","aria-hidden":"true"}},[e._v("#")]),e._v("Parent-Child Transfer")]),a("ol",[a("li",[e._v("User in parent invokes the "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("transfer")]),e._v(" function of the depository.  args: (purse, public key, return channel); returns session id over return channel.")]),a("li",[e._v("Block containing 1. finalized.")]),a("li",[e._v("Child validators see 2. and each deploys a message to the k-of-n mint contract.")]),a("li",[e._v("Mint creates a wallet with the tokens at "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("rho:uuid:<session id>")]),e._v(".")]),a("li",[e._v("Blocks containing 3., 4. are finalized.")]),a("li",[e._v("Child Validators send messages to parent k-of-n contract.")]),a("li",[e._v("Confirmation sent to user over same return channel as 1.")]),a("li",[e._v("Blocks containing 6., 7. finalized")])]),a("p",[e._v("Note: the session id is also used in the k-of-n contract to relate the validator's message to an active request.")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",{pre:!0,attrs:{class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//session id creation")]),e._v("\ncontract "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("newId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("id")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("toByteArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])]),a("h2",{attrs:{id:"outbound-token-transfers"}},[a("a",{attrs:{href:"#outbound-token-transfers","aria-hidden":"true"}},[e._v("#")]),e._v("Outbound Token Transfers")]),a("h3",{attrs:{id:"child-parent-transfer"}},[a("a",{attrs:{href:"#child-parent-transfer","aria-hidden":"true"}},[e._v("#")]),e._v("Child-Parent Transfer")]),a("ol",[a("li",[e._v("User in parent invokes the "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("transfer")]),e._v(" function of the mint args: (purse, public key, return channel); returns session id over return channel.")]),a("li",[e._v("Block containing 1. finalized.")]),a("li",[e._v("Child Validators send messages to parent k-of-n contract.")]),a("li",[e._v("Depository splits out a purse with the right number of tokens and wraps it in a wallet with the right public key, placing the result at "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("rho:uuid:<session id>")]),e._v(".")]),a("li",[e._v("Blocks containing 3., 4. are finalized.")]),a("li",[e._v("Child validators see 5. and each deploys a message to the k-of-n mint contract.")]),a("li",[e._v("Confirmation sent to user over same return channel as 1.")]),a("li",[e._v("Blocks containing 6., 7. finalized")])]),a("h2",{attrs:{id:"referencing-shards"}},[a("a",{attrs:{href:"#referencing-shards","aria-hidden":"true"}},[e._v("#")]),e._v("Referencing Shards")]),a("p",[e._v("Users are familiar with urls and uri formats. Therefore it's reasonable to treat the hierarchy of shards as one would treat a directory structure, and reference them in the same way.")]),a("p",[e._v("As part of testnet launch, the Core dev team will create the number of shards that are needed to demonstrate network performance of 20,000 tps (40,000 would be even better). The actual number of shards will depend on the performance of a single shard.")]),a("p",[e._v("The root shard will contain the genesis block for the network. It shall be called 'rchain'")]),a("p",[e._v("If shards A and B are both children of the root shard, they would be referenced as rchain/A and rchain/B")]),a("h2",{attrs:{id:"viewing-shards-and-shard-information"}},[a("a",{attrs:{href:"#viewing-shards-and-shard-information","aria-hidden":"true"}},[e._v("#")]),e._v("Viewing Shards and Shard information")]),a("p",[e._v("The blockchain of the parent shard will store information about it's child shards. This information is:")]),a("ul",[a("li",[e._v("The validators in the shard")]),a("li",[e._v("The K/N contract for the shard & amount stored in the depository")]),a("li",[e._v("The name of the shard")])]),a("p",[e._v("The above information should be sufficient for a Read only node or client to build a tree of the shard structure similar to a blockchain explorer.")]),a("p",[e._v("Other information that is available for a shard on the blockchain:")]),a("ul",[a("li",[e._v("Total amounts bonded in the shard")]),a("li",[e._v("Transactions processed / unit of time (so validators can pick profitable shards)")]),a("li",[e._v("Transaction fees / trailing 7 days or unit of time.")]),a("li",[e._v("Performance requirements for a validator.")])]),a("h2",{attrs:{id:"bonding"}},[a("a",{attrs:{href:"#bonding","aria-hidden":"true"}},[e._v("#")]),e._v("Bonding")]),a("ol",[a("li",[e._v("User in child calls "),a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("bond")]),e._v(" function of PoS contract; args: (purse, public key, return channel); returns status over return channel (bond may fail validity conditions).")]),a("li",[e._v("PoS updates k-of-n contract on mint (PoS has authority to do this).")]),a("li",[e._v("Blocks containing 1., 2. are finalized.")]),a("li",[e._v("Child validators (other than new) send messages to k-of-n contract updating it.")]),a("li",[e._v("New public key added to accepted list, k updated to new value.")]),a("li",[e._v("Blocks containing 4., 5. are finalized.")]),a("li",[e._v("New validator sees 6. as their confirmation")])]),a("h2",{attrs:{id:"unbonding"}},[a("a",{attrs:{href:"#unbonding","aria-hidden":"true"}},[e._v("#")]),e._v("Unbonding")]),a("ul",[a("li",[e._v("Similar to bonding")]),a("li",[e._v("PoS contract handles core logic")]),a("li",[e._v("If PoS accepts the unbonding request then validators update K of N contract in parent post finalization")]),a("li",[e._v("Bond is released in the child shard after the unbonding period.")])]),a("p",[e._v("Question: If the validator has funds locked up in the K/N contract, those funds should be held until the unbonding wait period expires.")]),a("h2",{attrs:{id:"the-blessed-mint-contract-and-sharding"}},[a("a",{attrs:{href:"#the-blessed-mint-contract-and-sharding","aria-hidden":"true"}},[e._v("#")]),e._v("The Blessed Mint Contract and Sharding")]),a("p",[e._v("The blessed Mint contract will exist in each shard. While the master Rev mint contract (our version of 'gold') exists only in the rchain shard at the root of the tree, all other shards have pegged their token supply to the token supply in the root shard. The mint contracts in all the shards have to mint tokens at the same time, such that the exchange rate for Rev between the shards remain 1:1 all the way up to the rchain shard (root shard). The blessed Mint contract will be a K/N contract that is created by the K/N Sharding contract")]),a("h2",{attrs:{id:"exodus-block"}},[a("a",{attrs:{href:"#exodus-block","aria-hidden":"true"}},[e._v("#")]),e._v("Exodus Block")]),a("p",[e._v("Transfer the token from fort knox out to the new mount point. The K/N contract is invoked, and the required number of validators need to agree on Exodus.")])])}),[],!1,null,null,null);"function"==typeof h&&h(v),"function"==typeof p&&p(v);t.default=v.exports}}]);