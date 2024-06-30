let current = "" ;
let disp = document.querySelector('#display') ;

disp.value = current ;

input = (n) => {
    current += n ;
    disp.value = current ;
}

back = () => {
    let len = disp.value.length-1 ;
	current = disp.value.substr(0,len) ;
	disp.value = current ;
}

clearAll = () => {
    current = "" ;
    disp.value = current ;
}

equalTo = () => {
    current = eval(current) ;
    disp.value = current ;
}