"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[5529],{94977:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return n},metadata:function(){return u},toc:function(){return p}});var o=a(87462),r=a(63366),i=(a(67294),a(3905)),s=(a(8209),["components"]),n={title:"Why Pyrsia is being built in Rust?",authors:"sudhindra",tags:["blockchain","consensus","cryptocurrency","proof-of-work","proof-of-stake","security","transparency","provenance"]},l=void 0,u={permalink:"/blog/2022/09/30/why-pyrsia-is-being-built-in-rust",source:"@site/blog/2022-09-30-why-pyrsia-is-being-built-in-rust.md",title:"Why Pyrsia is being built in Rust?",description:"When we started working on Pyrsia we had the difficult and exciting task of choosing a language that would work for building secure supply chain software. We will share some details of how we decided to build Pyrsia in Rust and how it fits the problem we are set to solve.",date:"2022-09-30T00:00:00.000Z",formattedDate:"September 30, 2022",tags:[{label:"blockchain",permalink:"/blog/tags/blockchain"},{label:"consensus",permalink:"/blog/tags/consensus"},{label:"cryptocurrency",permalink:"/blog/tags/cryptocurrency"},{label:"proof-of-work",permalink:"/blog/tags/proof-of-work"},{label:"proof-of-stake",permalink:"/blog/tags/proof-of-stake"},{label:"security",permalink:"/blog/tags/security"},{label:"transparency",permalink:"/blog/tags/transparency"},{label:"provenance",permalink:"/blog/tags/provenance"}],readingTime:5.51,hasTruncateMarker:!1,authors:[{name:"Sudhindra Rao",title:"Pyrsia Maintainer",url:"https://github.com/betarelease",imageURL:"https://github.com/betarelease.png",key:"sudhindra"}],frontMatter:{title:"Why Pyrsia is being built in Rust?",authors:"sudhindra",tags:["blockchain","consensus","cryptocurrency","proof-of-work","proof-of-stake","security","transparency","provenance"]},prevItem:{title:"Why does Pyrsia use a Blockchain (but not Cryptocurrency)?",permalink:"/blog/2022/10/10/why-does-pyrsia-use-a-blockchain"},nextItem:{title:"Peer Metrics in the Pyrsia Network",permalink:"/blog/2022/06/03/peer-metrics"}},c={authorsImageUrls:[void 0]},p=[{value:"Securing Open Source Software",id:"securing-open-source-software",level:2},{value:"Secure Software needs a secure platform",id:"secure-software-needs-a-secure-platform",level:3},{value:"Choosing a programming language",id:"choosing-a-programming-language",level:2},{value:"RUST Language",id:"rust-language",level:2},{value:"Rust philosophy 1",id:"rust-philosophy-1",level:3},{value:"History of Rust 2",id:"history-of-rust-2",level:3},{value:"Rust language ecosystem",id:"rust-language-ecosystem",level:3},{value:"Summary",id:"summary",level:2},{value:"References",id:"references",level:3}],h={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When we started working on Pyrsia we had the difficult and exciting task of choosing a language that would work for building secure supply chain software. We will share some details of how we decided to build Pyrsia in Rust and how it fits the problem we are set to solve."),(0,i.kt)("h2",{id:"securing-open-source-software"},"Securing Open Source Software"),(0,i.kt)("p",null,"Open source software is built mostly by people passionate about solving a problem and sharing their solutions widely. One of the differences in how we build proprietary software vs open source is that we find that many of those original developers do their best in keeping the software upto date and try to patch vulnerabilities as soon as they can. Although their efforts are usually the best they can do. In some well publicized cases, developers have experienced burnout and lack of interest in supporting what they built, due to resource constraints."),(0,i.kt)("p",null,"For proprietary software, there are well published processes and patterns which are used to build software and record how it was done. Open Source software usually does not get this rigor and often is found vulnerable."),(0,i.kt)("p",null,"On Pyrsia we focus on this missing piece of building open source software and are building a platform that offers build from source service while providing a record of how it was done. Pyrsia leverages a peer-to-peer distribution model for these binaries thus making the network resilient to failures."),(0,i.kt)("h3",{id:"secure-software-needs-a-secure-platform"},"Secure Software needs a secure platform"),(0,i.kt)("p",null,"While the aim of Pyrsia is to secure the software that it builds, a lot of trust/community involvement expects the network itself to be secure. Pyrsia as a platform has taken this expectation seriously and from the initial days invested a lot of energy into building it right."),(0,i.kt)("p",null,"A few other considerations that were made during the initial discussions of Pyrsia include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Decentralized network (think Web3) to leverage distribution of binaries across regions"),(0,i.kt)("li",{parentName:"ul"},"Build from source using independent randomly chosen nodes to ensure security by reducing surface of attack"),(0,i.kt)("li",{parentName:"ul"},"Consensus mechanism to ensure that multiple nodes participate in the build and verification process"),(0,i.kt)("li",{parentName:"ul"},"Deploying Pyrsia node instances on wide variety of architectures, operating systems, as well as footprints(think Intel Xeon all the way to Raspberry * Pi and beyond)"),(0,i.kt)("li",{parentName:"ul"},"Ensuring wide deployments have a minimal footprint - for transportation, but more importantly to further reduce the possibility of attacks"),(0,i.kt)("li",{parentName:"ul"},"Modern software that allows system programming - to enhance experience and also to restrict how the data structures can be used. Constraining how the software is built is key to making it more secure.")),(0,i.kt)("h2",{id:"choosing-a-programming-language"},"Choosing a programming language"),(0,i.kt)("p",null,"For Pyrsia to address the above considerations we weighed them against a few popular languages with decent community voice and size."),(0,i.kt)("p",null,"Specifically we were looking for the following in a programming language ecosystem:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Welcoming community - People come first"),(0,i.kt)("li",{parentName:"ul"},"Modern language constructs that help us focus on the problem instead of the language"),(0,i.kt)("li",{parentName:"ul"},"Secure or easily to build for security"),(0,i.kt)("li",{parentName:"ul"},"Multiple OS and Arch support"),(0,i.kt)("li",{parentName:"ul"},"Ability to drop down to lower level to help implement any cryptography, improve performance"),(0,i.kt)("li",{parentName:"ul"},"Support for web3 implementations like p2p networking, blockchain, cryptography"),(0,i.kt)("li",{parentName:"ul"},"Installed base of system software in the language")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://rustlang.org"},"Rust")," seemed to satisfy all these requirements, in fact with flying colors."),(0,i.kt)("h2",{id:"rust-language"},"RUST Language"),(0,i.kt)("h3",{id:"rust-philosophy-1"},"Rust philosophy ","[1]"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Today we are very proud to announce the 1.0 release of Rust, a new programming language aiming to make it easier to build reliable, efficient systems. Rust combines low-level control over performance with high-level convenience and safety guarantees. Better yet, it achieves these goals without requiring a garbage collector or runtime, making it possible to use Rust libraries as a "drop-in replacement" for C.')),(0,i.kt)("p",null,'What makes Rust different from other languages is its type system, which represents a refinement and codification of "best practices" that have been hammered out by generations of C and C++ programmers. As such, Rust has something to offer for both experienced systems programmers and newcomers alike: experienced programmers will find they save time they would have spent debugging, whereas newcomers can write low-level code without worrying about minor mistakes leading to mysterious crashes.'),(0,i.kt)("h3",{id:"history-of-rust-2"},"History of Rust ","[2]"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Rust began as a side project of Graydon Hoare, an employee at Mozilla. In short order, Mozilla saw the potential of the new language and began sponsoring it, before revealing it to the world in 2010.\nOne possible source of the name, according to Hoare, is the rust fungus. This has caused Rust programmers to adopt \u201cRustaceans\u201d as their moniker of choice."),(0,i.kt)("p",{parentName:"blockquote"},"Despite its relative youth, Rust has steadily risen in the ranks of popular programming languages. In fact, while it ranked 33 in July 2019, by July 2020 it had risen to the 18th spot on the ",(0,i.kt)("a",{parentName:"p",href:"https://www.tiobe.com/tiobe-index/"},"TIOBE Programming Community Index"),". Similarly, according to ",(0,i.kt)("a",{parentName:"p",href:"https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages-loved"},"Stack Overflow Developer Survey"),", Rust has been the ",(0,i.kt)("inlineCode",{parentName:"p"},"most loved")," language since 2016.")),(0,i.kt)("h3",{id:"rust-language-ecosystem"},"Rust language ecosystem"),(0,i.kt)("p",null,"The above philosophy made Rust a great candidate for use in security solutions like Pyrsia. Some other aspects that sealed the deal as a programming language for us were:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Performance close to equivalent C level programs ","[3]"),(0,i.kt)("li",{parentName:"ul"},"Concurrent programming without the garbage collection ","[4]"),(0,i.kt)("li",{parentName:"ul"},"Rust has a borrow checker which ensures references do not outlive the data"),(0,i.kt)("li",{parentName:"ul"},"Rust can be compiled to reduced instruction set architectures")),(0,i.kt)("p",null,"Along with the above, we also found that the initial set of libraries(libp2p, AlephBFT) we were looking to support, had mature implementations in rust. Also we found that the communities that supported these libraries were welcoming all implementers and learners alike. This openness within the Rust community in general made the choice easier for us.\nA lot of these appealing features of the Rust ecosystem are well summarized in ","[5]","."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"When we set out to change how open source software is secured we had a choice to make - the language to build the security solution with. When we surveyed what was available there were multiple options. C due to its performance, Golang because of its mature installations in the wild, Rust as an up and coming community with performance and modern language features."),(0,i.kt)("p",null,"In the end it was clear to us that Rust was the right choice to make and we have started building Pyrsia in Rust. We realize that we have a steep learning curve and we are learning as a group. Come join us on our ",(0,i.kt)("a",{parentName:"p",href:"https://join.slack.com/t/cdeliveryfdn/shared_invite/zt-1eryue9cw-9YpgrfIfsTcDS~hGHchURg"},"Slack channel")," to discuss more."),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.rust-lang.org/2015/05/15/Rust-1.0.html"},"Rust Philosophy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.talentopia.com/news/the-rust-programming-language-its-history-and-why/"},"Rust History")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://codilime.com/blog/rust-vs-c-safety-and-performance-in-low-level-network-programming/"},"Rust vs C")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discord.com/blog/why-discord-is-switching-from-go-to-rust"},"Garbage collection issues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://codilime.com/blog/why-is-rust-programming-language-so-popular/#:~:text=High%20performance%20and%20safety%20are,amounts%20of%20data%20very%20quickly"},"Why projects use Rust?"))))}m.isMDXComponent=!0}}]);