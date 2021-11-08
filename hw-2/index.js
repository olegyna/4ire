let n = +prompt('Введите порядковый номер числа Фибоначчи', '');

function fibo(f0 = 0, f1 = 1, n) {
    
    if(n == 0){
        alert(`${n} элемент ряда Фибоначчи равен ${f0}`);
        return f0;
    }

    if(n == 1) {
        alert(`${n} элемент ряда Фибоначчи равен ${f1}`);
        return f1;
    }

    if(n < 0) {
        let i = 0;
        while(i > (n+2)) {
            let fibrevers = f0 - f1;
            f1 = f0;
            f0 = fibrevers;
            i--;
        }
        alert(`${n} элемент ряда Фибоначчи равен ${f0}`);
        return f0;
    } else {
        let i = 0;
        while(i < (n-2)) {
            let fibsum = f0 + f1;
            f0 = f1;
            f1 = fibsum;
            i++;
        }
        alert(`${n} элемент ряда Фибоначчи равен ${f1}`);
        return f1;}
    
}