(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{687:function(t,e,n){var r=n(34),o=n(18),l="["+n(688)+"]",d=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),y=function(t){return function(e){var n=o(r(e));return 1&t&&(n=n.replace(d,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:y(1),end:y(2),trim:y(3)}},688:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},689:function(t,e,n){var content=n(698);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("bad8e090",content,!0,{sourceMap:!1})},691:function(t,e,n){"use strict";var r=n(13),o=n(68),l=n(692),d=n(355),c=n(14),y=1..toFixed,m=Math.floor,f=function(t,e,n){return 0===e?n:e%2==1?f(t,e-1,n*t):f(t*t,e/2,n)},v=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=m(r/1e7)},x=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=m(n/t),n=n%t*1e7},w=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+d.call("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:y&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){y.call({})}))},{toFixed:function(t){var e,n,r,c,y=l(this),m=o(t),data=[0,0,0,0,0,0],h="",_="0";if(m<0||m>20)throw RangeError("Incorrect fraction digits");if(y!=y)return"NaN";if(y<=-1e21||y>=1e21)return String(y);if(y<0&&(h="-",y=-y),y>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(y*f(2,69,1))-69)<0?y*f(2,-e,1):y/f(2,e,1),n*=4503599627370496,(e=52-e)>0){for(v(data,0,n),r=m;r>=7;)v(data,1e7,0),r-=7;for(v(data,f(10,r,1),0),r=e-1;r>=23;)x(data,1<<23),r-=23;x(data,1<<r),v(data,1,1),x(data,2),_=w(data)}else v(data,0,n),v(data,1<<-e,0),_=w(data)+d.call("0",m);return _=m>0?h+((c=_.length)<=m?"0."+d.call("0",m-c)+_:_.slice(0,c-m)+"."+_.slice(c-m)):h+_}})},692:function(t,e,n){var r=n(67);t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},693:function(t,e,n){var r=n(13),o=n(694);r({target:"Number",stat:!0,forced:Number.parseFloat!=o},{parseFloat:o})},694:function(t,e,n){var r=n(11),o=n(18),l=n(687).trim,d=n(688),c=r.parseFloat,y=1/c(d+"-0")!=-1/0;t.exports=y?function(t){var e=l(o(t)),n=c(e);return 0===n&&"-"==e.charAt(0)?-0:n}:c},695:function(t,e,n){"use strict";var r=n(22),o=n(11),l=n(152),d=n(29),c=n(23),y=n(67),m=n(354),f=n(113),v=n(353),x=n(14),w=n(89),h=n(114).f,_=n(51).f,T=n(28).f,C=n(687).trim,k="Number",M=o.Number,I=M.prototype,E=y(w(I))==k,A=function(t){if(f(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,o,l,d,c,code,y=v(t,"number");if("string"==typeof y&&y.length>2)if(43===(e=(y=C(y)).charCodeAt(0))||45===e){if(88===(n=y.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(y.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+y}for(d=(l=y.slice(2)).length,c=0;c<d;c++)if((code=l.charCodeAt(c))<48||code>o)return NaN;return parseInt(l,r)}return+y};if(l(k,!M(" 0o1")||!M("0b1")||M("+0x1"))){for(var N,F=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof F&&(E?x((function(){I.valueOf.call(n)})):y(n)!=k)?m(new M(A(e)),n,F):A(e)},B=r?h(M):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;B.length>S;S++)c(M,N=B[S])&&!c(F,N)&&T(F,N,_(M,N));F.prototype=I,I.constructor=F,d(o,k,F)}},696:function(t,e){t.exports=[[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"MAX_NFT_SUPPLY",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX_PURCHASABLE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"PROVENANCE_HASH",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"UGLY_BABY_KIRBY_PRICE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"approvedToMint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"checkMintAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getTokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"hasMinted",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountToMint",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pauseSale",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenOne",type:"uint256"},{internalType:"uint256",name:"_tokenTwo",type:"uint256"}],name:"resetWallet",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"saleStarted",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_hash",type:"string"}],name:"setProvenanceHash",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"setTokenKey",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"startSale",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"tokenHolderBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokenHolderMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}]]},697:function(t,e,n){"use strict";n(689)},698:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\ninput[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{\n  -webkit-appearance:none;\n  margin:0\n}\n.custom-number-input button:focus,.custom-number-input input:focus{\n  outline:none!important\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},701:function(t,e,n){"use strict";n.r(e);var r=n(15),o=(n(24),n(115),n(691),n(693),n(695),n(90),n(696)),l=n.n(o),d={data:function(){return{contractAddress:"0x749079802D04bcCdcf034eDfF6135b1Cd3Ee164A",ethereumSupported:!1,walletConnected:!1,mintedSupply:0,hasMinted:!1,checkMintAmount:0,tokenHolderBalance:0,ethMint:1,address:null}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.isEthereumSupported();case 2:t.ethereumSupported=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{increment:function(){this.ethMint>=30||(this.ethMint+=1)},decrement:function(){this.ethMint<=1||(this.ethMint-=1)},mintTokenHolder:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=5;break}return n=new window.web3.eth.Contract(l.a[0],t.contractAddress),e.next=4,n.methods.tokenHolderMint().send({from:t.address});case 4:t.tokenHolderBalance=e.sent;case 5:case"end":return e.stop()}}),e)})))()},mintEthHolder:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=6;break}return n=new window.web3.eth.Contract(l.a[0],t.contractAddress),r=window.web3.utils.toWei(Number.parseFloat(.5*t.ethMint).toFixed(2).toString(),"ether"),e.next=5,n.methods.mint(t.ethMint).send({from:t.address,value:window.web3.utils.toBN(r)});case 5:t.tokenHolderBalance=e.sent;case 6:case"end":return e.stop()}}),e)})))()},isEthereumSupported:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=30;break}return window.web3=new t.$Web3(window.ethereum),e.prev=2,e.next=5,window.ethereum.enable();case 5:return console.log(window.web3),console.log("This browser is supported for ethereum"),t.walletConnected=!0,n=new window.web3.eth.Contract(l.a[0],t.contractAddress),new window.web3.eth.getAccounts((function(e,n){e?console.log(e):t.address=n[0]})),e.next=12,n.methods.totalSupply().call();case 12:return t.mintedSupply=e.sent,e.next=15,n.methods.hasMinted(t.address).call();case 15:return t.hasMinted=e.sent,e.next=18,n.methods.checkMintAmount(t.address).call();case 18:return t.checkMintAmount=e.sent,e.next=21,n.methods.tokenHolderBalance(t.address).call();case 21:t.tokenHolderBalance=e.sent,e.next=28;break;case 24:e.prev=24,e.t0=e.catch(2),console.log(e.t0),t.walletConnected=!1;case 28:e.next=31;break;case 30:console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");case 31:case"end":return e.stop()}}),e,null,[[2,24]])})))()}}},c=(n(697),n(77)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.walletConnected?n("div",{staticClass:"bg-gray-900"},[n("div",{staticClass:"pt-12 sm:pt-16 lg:pt-24"},[n("div",{staticClass:"max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8"},[n("div",{staticClass:"max-w-3xl mx-auto space-y-2 lg:max-w-none"},[n("h2",{staticClass:"\n              text-lg\n              leading-6\n              font-semibold\n              text-gray-300\n              uppercase\n              tracking-wider\n            "},[t._v("\n            "+t._s(Number(t.mintedSupply).toLocaleString())+" / 11,160 Minted\n          ")]),t._v(" "),n("p",{staticClass:"text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"},[t._v("\n            Free NFTs for Kirby Inu Holders\n          ")]),t._v(" "),n("p",{staticClass:"text-xl text-gray-300"},[t._v("\n            The first token to offer free NFTs, just by holding the token\n            where every NFT is 100% unique and minting only one mint per\n            wallet.\n          ")])])])]),t._v(" "),n("div",{staticClass:"mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24"},[n("div",{staticClass:"relative"},[n("div",{staticClass:"absolute inset-0 h-3/4 bg-gray-900"}),t._v(" "),n("div",{staticClass:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[n("div",{staticClass:"\n              max-w-md\n              mx-auto\n              space-y-4\n              lg:max-w-5xl\n              lg:grid lg:grid-cols-2\n              lg:gap-5\n              lg:space-y-0\n            "},[n("div",{staticClass:"flex flex-col rounded-lg shadow-lg overflow-hidden"},[t._m(0),t._v(" "),n("div",{staticClass:"\n                  flex-1 flex flex-col\n                  justify-between\n                  px-6\n                  pt-6\n                  pb-8\n                  bg-gray-50\n                  space-y-6\n                  sm:p-10\n                  sm:pt-6\n                "},[n("ul",{staticClass:"space-y-4",attrs:{role:"list"}},[n("li",{staticClass:"flex items-start"},[n("div",{staticClass:"flex-shrink-0"},[n("svg",{staticClass:"h-6 w-6 text-green-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]),t._v(" "),n("p",{staticClass:"ml-3 text-base text-gray-700"},[t._v("\n                      You hold\n                      "),n("b",[t._v("\n                        "+t._s(Number(t.tokenHolderBalance).toLocaleString()))]),t._v("\n                      Kirby Inu\n                    ")])]),t._v(" "),n("li",{staticClass:"flex items-start"},[n("div",{staticClass:"flex-shrink-0"},[n("svg",{staticClass:"h-6 w-6 text-green-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]),t._v(" "),n("p",{staticClass:"ml-3 text-base text-gray-700"},[t._v("\n                      Every mint will yield "),n("b",[t._v(t._s(t.checkMintAmount))]),t._v(" Ugly\n                      Baby Kirbys\n                    ")])]),t._v(" "),t.hasMinted?n("li",{staticClass:"flex items-start"},[n("div",{staticClass:"flex-shrink-0"},[n("svg",{staticClass:"h-6 w-6 text-red-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])]),t._v(" "),t._m(1)]):n("li",{staticClass:"flex items-start"},[n("div",{staticClass:"flex-shrink-0"},[n("svg",{staticClass:"h-6 w-6 text-green-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]),t._v(" "),t._m(2)])]),t._v(" "),n("div",{staticClass:"rounded-md shadow"},[n("div",{staticClass:"\n                      flex\n                      items-center\n                      justify-center\n                      px-5\n                      py-3\n                      border border-transparent\n                      text-base\n                      font-medium\n                      rounded-md\n                      text-white\n                    ",class:t.hasMinted?"bg-gray-200 text-gray-500":"cursor-pointer bg-gray-800 hover:bg-gray-900",attrs:{disabled:t.hasMinted,"aria-describedby":"tier-standard"},on:{click:function(e){return t.mintTokenHolder()}}},[t._v("\n                    Mint "+t._s(t.checkMintAmount)+" Ugly Baby Kirbys!\n                  ")])])])]),t._v(" "),n("div",{staticClass:"flex flex-col rounded-lg shadow-lg overflow-hidden"},[t._m(3),t._v(" "),n("div",{staticClass:"\n                  flex-1 flex flex-col\n                  justify-between\n                  px-6\n                  pt-6\n                  pb-8\n                  bg-gray-50\n                  space-y-6\n                  sm:p-10\n                  sm:pt-6\n                "},[n("div",{staticClass:"mt-4 flex items-baseline"},[n("center",[n("p",{staticClass:"text-6xl font-extrabold text-center"},[t._v("\n                      "+t._s(Number.parseFloat(.15*t.ethMint).toFixed(2))+" ETH\n                    ")])])],1),t._v(" "),n("div",{staticClass:"container w-40 m-auto"},[n("div",{staticClass:"vertical-center"},[n("div",{staticClass:"custom-number-input h-10 w-32"},[n("div",{staticClass:"\n                          flex flex-row\n                          h-10\n                          w-full\n                          rounded-lg\n                          border\n                          relative\n                          bg-transparent\n                          mt-1\n                        "},[n("button",{staticClass:"\n                            justify-center\n                            rounded-l\n                            hover:bg-gray-200\n                            focus:outline-none\n                            w-20\n                            shadow-sm\n                            hover:text-gray-700\n                            cursor-pointer\n                          ",attrs:{"data-action":"decrement"},on:{click:function(e){return t.decrement()}}},[n("span",{staticClass:"m-auto text-2xl font-thin"},[t._v("−")])]),t._v(" "),n("input",{staticClass:"\n                            cursor-pointer\n                            focus:outline-none\n                            focus:text-black\n                            font-semibold\n                            hover:text-black\n                            items-center\n                            justify-center\n                            md:text-basecursor-default\n                            outline-none\n                            shadow-sm\n                            text-center text-gray-700\n                            w-full\n                          ",attrs:{type:"number",name:"custom-input-number",readonly:""},domProps:{value:t.ethMint}}),t._v(" "),n("button",{staticClass:"\n                            justify-center\n                            rounded-r\n                            hover:bg-gray-200\n                            focus:outline-none\n                            w-20\n                            shadow-sm\n                            hover:text-gray-700\n                            cursor-pointer\n                          ",attrs:{"data-action":"increment"},on:{click:function(e){return t.increment()}}},[n("span",{staticClass:"m-auto text-2xl font-thin"},[t._v("+")])])])])])]),t._v(" "),n("div",{staticClass:"rounded-md shadow"},[n("div",{staticClass:"\n                      flex\n                      items-center\n                      justify-center\n                      px-5\n                      py-3\n                      border border-transparent\n                      text-base\n                      font-medium\n                      rounded-md\n                      text-white\n                      bg-gray-800\n                      hover:bg-gray-900\n                    ",attrs:{"aria-describedby":"tier-standard"},on:{click:function(e){return t.mintEthHolder()}}},[t._v("\n                    Mint "+t._s(t.ethMint)+" Ugly Baby Kirbys!\n                  ")])])])])])])]),t._v(" "),t._m(4)])]):n("div",{staticClass:"rounded-md shadow"},[n("div",{staticClass:"\n        cursor-pointer\n        flex\n        items-center\n        justify-center\n        px-5\n        py-3\n        border border-transparent\n        text-base\n        font-medium\n        rounded-md\n        text-white\n        bg-gray-800\n        hover:bg-gray-900\n      ",attrs:{"aria-describedby":"tier-standard"},on:{click:function(e){return t.isEthereumSupported()}}},[t._v("\n      Connect Wallet\n    ")])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-6 py-8 bg-white sm:p-10 sm:pb-6"},[n("div",[n("h3",{staticClass:"\n                      inline-flex\n                      px-4\n                      py-1\n                      rounded-full\n                      text-sm\n                      font-semibold\n                      tracking-wide\n                      uppercase\n                      bg-indigo-100\n                      text-indigo-600\n                    ",attrs:{id:"tier-standard"}},[t._v("\n                    Kirby Inu Holder\n                  ")])]),t._v(" "),n("div",{staticClass:"mt-4 flex items-baseline text-6xl font-extrabold"},[t._v("\n                  FREE\n                  "),n("span",{staticClass:"ml-1 text-2xl font-medium text-gray-500"},[t._v("\n                    /Ugly Baby Kirby\n                  ")])]),t._v(" "),n("p",{staticClass:"mt-5 text-lg text-gray-500"},[t._v("\n                  Mint one Ugly Baby Kirby per 100 Billion Kirby Inu your\n                  wallet holds. One mint per wallet.\n                ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"ml-3 text-base text-gray-700"},[t._v("\n                      You have already used your one "),n("b",[t._v("mint")]),t._v(" per wallet!\n                    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"ml-3 text-base text-gray-700"},[t._v("\n                      You have "),n("b",[t._v("not used")]),t._v(" your free mint yet!\n                    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-6 py-8 bg-white sm:p-10 sm:pb-6"},[n("div",[n("h3",{staticClass:"\n                      inline-flex\n                      px-4\n                      py-1\n                      rounded-full\n                      text-sm\n                      font-semibold\n                      tracking-wide\n                      uppercase\n                      bg-indigo-100\n                      text-indigo-600\n                    ",attrs:{id:"tier-standard"}},[t._v("\n                    ETH Holder\n                  ")])]),t._v(" "),n("div",{staticClass:"mt-4 flex items-baseline text-6xl font-extrabold"},[t._v("\n                  .15 ETH\n                  "),n("span",{staticClass:"ml-1 text-2xl font-medium text-gray-500"},[t._v("\n                    /Ugly Baby Kirby\n                  ")])]),t._v(" "),n("p",{staticClass:"mt-5 text-lg text-gray-500"},[t._v("\n                  Mint one Ugly Baby Kirby per .15 ETH. Limit 30 mints per tx.\n                ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5"},[n("div",{staticClass:"max-w-md mx-auto lg:max-w-5xl"},[n("div",{staticClass:"\n              rounded-lg\n              bg-gray-100\n              px-6\n              py-8\n              sm:p-10\n              lg:flex\n              lg:items-center\n            "},[n("div",{staticClass:"flex-1"},[n("div",[n("h3",{staticClass:"\n                    inline-flex\n                    px-4\n                    py-1\n                    rounded-full\n                    text-sm\n                    font-semibold\n                    tracking-wide\n                    uppercase\n                    bg-white\n                    text-gray-800\n                  "},[t._v("\n                  Coming Soon\n                ")])]),t._v(" "),n("div",{staticClass:"mt-4 text-lg text-gray-600"},[t._v("\n                Reset your wallet by burning 2 Ugly Baby Kirbys which will\n                allow you to mint 1 Ugly Baby Kirby for every 100 Billion\n                Kirby Inu you hold.\n                "),n("span",{staticClass:"font-semibold text-gray-900"},[t._v("Buy more Kirby Inu today!")]),t._v(".\n              ")])]),t._v(" "),n("div",{staticClass:"mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0"},[n("a",{staticClass:"\n                  flex\n                  items-center\n                  justify-center\n                  px-5\n                  py-3\n                  border border-transparent\n                  text-base\n                  font-medium\n                  rounded-md\n                  text-gray-900\n                  bg-white\n                  hover:bg-gray-50\n                ",attrs:{href:"https://www.dextools.io/app/uniswap/pair-explorer/0x0a15b674f347f4952370f2c5596ba8012bc95f38",target:"_blank"}},[t._v("\n                Buy Kirby Inu\n              ")])])])])])}],!1,null,null,null);e.default=component.exports}}]);