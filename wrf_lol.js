
function check_password(password) {
	var stack = "qwertyuiopasdfghjklzxcvbnm".split("");
	var tmp = {
		"t" : 9, "h" : 6, "e" : 5,
		"f" : 1, "l" : 2, "a" : 3, "g" : 4,
		"i" : 7, "s" : 8, 
		"j" : 10, "u" : 11, "m" : 12, "p" : 13,
		"b" : 14, "r" : 15, "o" : 16, "w" : 17, "n" : 18,
		"c" : 19, "d" : 20, "j" : 21, "k" : 22, "q" : 23, 
		"v" : 24, "x" : 25, "z" : 26
	};
	console.log(stack.length)
	var i = 2;
	var a1 = Number.prototype.valueOf;
	var a2 = Number.prototype.toString;
	var a3 = Array.prototype.valueOf;
	var a4 = Array.prototype.toString;
	var a5 = Object.prototype.valueOf;
	var a6 = Object.prototype.toString;

	function f1() { return stack[ i++ % stack.length ].charCodeAt(0); console.log('f1runs');}
	function f2() { i += 3; return stack.pop(); console.log('f2runs'); }
	function f3() { 
		for (k in this) { 
			if (this.hasOwnProperty(k)) {
				i += stack.indexOf(this[k][0]);	
				stack.push(this[k]); 
			} 
		} 
		return String.fromCharCode(new Number(stack[ i % stack.length ].charCodeAt(0))); 
	}
	console.log('here1')
	Number.prototype.valueOf = Number.prototype.toString = f1;
	Array.prototype.valueOf  = Array.prototype.toString  = f2;
	console.log('here2')
	Object.prototype.valueOf = Object.prototype.toString = f3;
	console.log('here3')

	var a  = (tmp[ [] ] * tmp[ [] ] * 1337 + tmp[ "" + { "wtf": password[1] } ]) / (tmp[ "" + { "wtf": password[0] } ] - tmp[ [] ]);
	console.log('here4')
	var b  = (tmp[ [] ] * tmp[ [] ] * 7331 + tmp[ "" + { "lol": "o" } ]) / (tmp[ "" + { "wtf": password[1] } ] - tmp[ [] ]);
	console.log('here5')
	var c  = (tmp[ [] ] * tmp[ [] ] * 1111 + tmp[ "" + { "wtf": password[3] } ]) / (tmp[ "" + { "lol": password[2] } ] - tmp[ [] ]);
	console.log('here6')
	var d  = (tmp[ [] ] * tmp[ [] ] * 3333 + tmp[ "" + { "wtf": "g" } ]) / (tmp[ "" + { "wtf": password[3] } ] - tmp[ [] ]);
	console.log('here7')
	var e  = (tmp[ [] ] * tmp[ [] ] * 7777 + tmp[ "" + { "wtf": "a" } ]) / (tmp[ "" + { "wtf": password[7] } ] - tmp[ [] ]);
	console.log('here8')
	var f  = (tmp[ [] ] * tmp[ [] ] * 2222 + tmp[ "" + { "wtf": password[7] } ]) / (tmp[ "" + { "lol": password[5] } ] - tmp[ [] ]);
	console.log('here9')
	var g  = (tmp[ [] ] * tmp[ [] ] * 6666 + tmp[ "" + { "lol": password[4] } ]) / (tmp[ "" + { "wtf": password[6] } ] - tmp[ [] ]);
	console.log('here10')
	var h  = (tmp[ [] ] * tmp[ [] ] * 1234 + tmp[ "" + { "wtf": "a" } ]) / (tmp[ "" + { "wtf": password[4] } ] - tmp[ [] ]);
	console.log('here11')
	var ii = (tmp[ [] ] * tmp[ [] ] * 2345 + tmp[ "" + { "wtf": "h" } ]) / (tmp[ "" + { "wtf": password[9] } ] - tmp[ [] ]);
	console.log('here12')
	var j  = (tmp[ [] ] * tmp[ [] ] * 3456 + tmp[ "" + { "wtf": password[9] } ]) / (tmp[ "" + { "lol": password[8] } ] - tmp[ [] ]);
	console.log('here13')
	var kk = (tmp[ [] ] * tmp[ [] ] * 4567 + tmp[ "" + { "lol": password[11] } ]) / (tmp[ "" + { "wtf": password[10] } ] - tmp[ [] ]);
	console.log('here14')
	var l  = (tmp[ [] ] * tmp[ [] ] * 9999 + tmp[ "" + { "wtf": "o" } ]) / (tmp[ "" + { "wtf": password[11] } ] - tmp[ [] ]);
	console.log("heremy")
	Number.prototype.valueOf   = a1;
	console.log("heremy")
	Number.prototype.toString  = a2;
	console.log('heremy')
	Array.prototype.valueOf    = a3;
	console.log('hereyo')
	Array.prototype.toString   = a4;
	Object.prototype.valueOf   = a5;
	Object.prototype.toString  = a6;
	console.log('here_final')

	var m = a === b && b === c && c === d && d === e && e === f && f === g && g === h && h === ii && ii === j && j === kk && kk === l;
	var n = password[0] != password[1] && password[2] != password[3] && password[4] != password[5]  && password[6] != password[7]  && password[8] != password[9] && password[10] != password[11]

	return m && n;
}

function btn_click(value) {
	try {
		if (check_password(document.getElementById('pwd').value)) {
			alert('That\'s the flag !');
			return;
		}
	} catch(e) {}

	alert('Nope !');
}


function gimmeWord(){
	p = String.fromCharCode(74,97,118,97,83,99,114,105,112,116,73,115,83,101,99,117,114,101)
	console.log(p)
}

check_password("Mello")