"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[5211],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35890:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],p={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/developers/pyrsia-with-docker.md"},s="Pyrsia and Docker",l={unversionedId:"developers/pyrsia-with-docker",id:"developers/pyrsia-with-docker",title:"Pyrsia and Docker",description:"Once you have setup your local environment with Pyrsia you are now ready to run Pyrsia with Docker support.",source:"@site/docs/developers/pyrsia-with-docker.md",sourceDirName:"developers",slug:"/developers/pyrsia-with-docker",permalink:"/docs/developers/pyrsia-with-docker",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/developers/pyrsia-with-docker.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/developers/pyrsia-with-docker.md"},sidebar:"tutorialSidebar",previous:{title:"Pyrsia architecture and use cases",permalink:"/docs/developers/pyrsia-architecture-and-use-cases"},next:{title:"Get Involved",permalink:"/docs/community/get_involved/"}},c={},u=[{value:"Integrating and Building with Docker",id:"integrating-and-building-with-docker",level:2},{value:"Configure Docker Daemon for Pyrsia Network",id:"configure-docker-daemon-for-pyrsia-network",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pyrsia-and-docker"},"Pyrsia and Docker"),(0,a.kt)("p",null,"Once you have setup your ",(0,a.kt)("a",{parentName:"p",href:"../get_involved/local_dev_setup.md"},"local environment")," with Pyrsia you are now ready to run Pyrsia with Docker support."),(0,a.kt)("h2",{id:"integrating-and-building-with-docker"},"Integrating and Building with Docker"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Docker"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"macOS and Windows: Compose is included in Docker Desktop"),(0,a.kt)("li",{parentName:"ul"},"Linux: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/docker/compose#linux"},"Downloaded Compose"))))),(0,a.kt)("h2",{id:"configure-docker-daemon-for-pyrsia-network"},"Configure Docker Daemon for Pyrsia Network"),(0,a.kt)("p",null,"Follow these steps to run a Pyrsia node and use it as the registry for all Docker Hub content."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"cd pyrsia/pyrsia_node"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You need to start the Pyrsia Node. To do so, you have 2 options:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Rust: ",(0,a.kt)("inlineCode",{parentName:"li"},"DEV_MODE=on PYRSIA_ARTIFACT_PATH=pyrsia cargo run")),(0,a.kt)("li",{parentName:"ul"},"Docker Compose: ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose up --build"))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Note"),": \u26a0\ufe0f Do not to stop this process, a running node is required for the\nfollowing steps:")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"configure Docker")," to use Pyrsia, which is running at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:7888"),",\nopen your Docker daemon settings and add this entry in the root JSON object:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"On Linux platforms"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  "registry-mirrors": ["http://localhost:7888"]\n')),(0,a.kt)("p",{parentName:"li"},"By default you can find the Docker daemon settings here ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"On other platforms"),":"),(0,a.kt)("p",{parentName:"li"},"You can find the Docker daemon settings in Docker Desktop -> Preferences -> Docker Engine."),(0,a.kt)("p",{parentName:"li"},"If you're running Pyrsia inside Docker, the ",(0,a.kt)("inlineCode",{parentName:"p"},"registry-mirrors")," settings can be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:7888")," as well. However if you're not running inside Docker, you cannot use ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," because localhost will point to the Docker Desktop environment. Instead you have to use the hostname of your host machine. If you don't know/have that, you can add this to ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," (on Mac) or ",(0,a.kt)("inlineCode",{parentName:"p"},"c:\\windows\\system32\\drivers\\etc\\hosts")," (on Windows):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"127.0.0.1       my-pyrsia-host\n")),(0,a.kt)("p",{parentName:"li"},"And then use that name in the Docker configuration file like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"registry-mirrors": ["http://my-pyrsia-host:7888"]\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"using another terminal, use ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," to pull an image from Pyrsia:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull ubuntu\n")),(0,a.kt)("p",{parentName:"li"},"(or pull any other Docker image of your choice)"),(0,a.kt)("p",{parentName:"li"}," Optionally, you can inspect the Pyrsia node logs to check where the image came from. This can be either:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"locally (if it was cached by Pyrsia before)"),(0,a.kt)("li",{parentName:"ul"},"from the Pyrsia network"),(0,a.kt)("li",{parentName:"ul"},"or from Docker Hub (if it wasn't previously available in the Pyrsia network)")))))}m.isMDXComponent=!0}}]);