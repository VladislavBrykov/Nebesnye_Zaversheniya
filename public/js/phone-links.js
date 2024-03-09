/*

jQuery(function($){
	//создаёт строковую регулярку с логическим ИЛИ между элементами массива arr
	function regOr(arr){
		if (arr.length == 0) return '';
		let str = '(' + arr[0] + ')';
		for (let i = 1; i < arr.length; i++) {
			str += '|' + '(' + arr[i] + ')';
		}
		return '(' + str + ')';
	}
	//создаёт строковую регулярку с повтором строки str num раз и с разделителем splitter
	let regRepeat = (str, num, splitter = '') => {
		if (num <= 0) return '';
		if (num == 1) return str;
		if (splitter == '') return '(' + str + '){' + num + '}';
		if (num == 2) return str + splitter + str;
		return str + '(' + splitter + str + '){' + (num-1) + '}';
	}
	
	let split = '([\\s-]|&nbsp;)?'; //разделитель между цифрами (пробельные символы, неразрывный пробел в HTML, тире)
	let digit = '\\d'; //цифра
	
	//код города/оператора от min до max чисел в скобках
	function mobileCodeReg(min, max){
		let symbs = max - min; //количество символов, достаточное для вариантов со скобками
		let arr = []; //массив со списком вариантов со скобками, от min до max чисел в скобках
		for (let i = 0; i <= symbs; i++) arr.push(
			regRepeat(split + digit, symbs - i) +
			split + '[)]' +
			regRepeat(split + digit, i)
		);
		return regOr([
			'[(]' + regRepeat(split + digit, min) + regOr(arr),
			regRepeat(digit, max, split) //учитываем вариант без скобок
		]);
	}
	
	let mobileReg = new RegExp(['(',
		'((\\+' + split + '7)|8)',
		split,
		mobileCodeReg(3, 5),
		regRepeat(split + digit, 5),
	')'].join(''), 'g');
	console.log(mobileReg);
	
	function getPhoneLink(phoneFull, phoneShort=phoneFull){
		return '<a href="tel:'+phoneShort+'">'+phoneFull+'</a>';
	}
	
	$('.block-block .content, .field').find('*:not(a)').each(function(){
		if (this.childElementCount > 0) return;
		if (!mobileReg.test(this.innerHTML)) return;
		
		this.innerHTML = this.innerHTML.replace(mobileReg,getPhoneLink('$1'));
		this.querySelectorAll('a').forEach(function(val){
			//убираем из аттрибута href все символы, кроде цифр и плюса
			val.href = val.href.replace(/[^+\d]+/g, '');
		});
	})
})

*/