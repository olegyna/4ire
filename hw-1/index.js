alert('Конвертер валют.Доступные валюты: Австралийский доллар, Евро, доллар США, гривна, кубинское песо. Курс актуален на 02.11.2021');

let repeat;

do {
    let originalCurrency = prompt('Введите код валюты, которую хотите конвектировать.Коды доступных валют: Австралийский доллар - AUD, Евро - EUR, доллар США - USD, гривна - UAH, кубинское песо - CUP', '').toUpperCase();
    let originalAmount;
    let resCurrency;

    if(originalCurrency === 'AUD' || 
    originalCurrency === 'EUR' ||
    originalCurrency === 'USD' ||
    originalCurrency === 'UAH' ||
    originalCurrency === 'CUP') {
        originalAmount = +prompt(`Введите кол-во ваших ${originalCurrency}`, '');
        if(typeof (originalAmount) == "number") {
            resCurrency = prompt('Введите код валюты, которую хотите получить в ходе операции.Коды доступных валют: Австралийский доллар - AUD, Евро - EUR, доллар США - USD, гривна - UAH, кубинское песо - CUP', '').toUpperCase();
            if(resCurrency !== 'AUD' &&
            resCurrency !== 'EUR' &&
            resCurrency !== 'USD' &&
            resCurrency !== 'UAH' &&
            resCurrency !== 'CUP') {
                alert('Повторите ввод');
                resCurrency = prompt('Введите код валюты, которую хотите получить в ходе операции.Коды доступных валют: Австралийский доллар - AUD, Евро - EUR, доллар США - USD, гривна - UAH, кубинское песо - CUP', '').toUpperCase();
            }
        } else {
            alert('Повторите ввод');
            originalAmount = +prompt(`Введите кол-во ваших ${originalCurrency}`, '');
        }
    } else {
        alert('Повторите ввод');
        originalCurrency = prompt('Введите код валюты, которую хотите конвектировать.Коды доступных валют: Австралийский доллар - AUD, Евро - EUR, доллар США - USD, гривна - UAH, кубинское песо - CUP', '').toUpperCase();
    }

    let resAmount;

    if(originalCurrency === 'AUD' && resCurrency === 'AUD') {
        resAmount = originalAmount;
    } else if(originalCurrency === 'AUD' && resCurrency === 'EUR') {
        resAmount = (originalAmount * 0.64).toFixed(2);
    } else if(originalCurrency === 'AUD' && resCurrency === 'USD') {
        resAmount = (originalAmount * 0.75).toFixed(2);
    } else if(originalCurrency === 'AUD' && resCurrency === 'UAH') {
        resAmount = (originalAmount * 19.71).toFixed(2);
    } else if(originalCurrency === 'AUD' && resCurrency === 'CUP') {
        resAmount = (originalAmount * 17.86).toFixed(2);
    }

    if(originalCurrency === 'EUR' && resCurrency === 'EUR') {
        resAmount = originalAmount;
    } else if(originalCurrency === 'EUR' && resCurrency === 'AUD') {
        resAmount = (originalAmount * 1.55).toFixed(2);
    } else if(originalCurrency === 'EUR' && resCurrency === 'USD') {
        resAmount = (originalAmount * 1.16).toFixed(2);
    } else if(originalCurrency === 'AUD' && resCurrency === 'UAH') {
        resAmount = (originalAmount * 30.44).toFixed(2);
    } else if(originalCurrency === 'AUD' && resCurrency === 'CUP') {
        resAmount = (originalAmount * 27.78).toFixed(2);
    }

    if(originalCurrency === 'USD' && resCurrency === 'USD') {
        resAmount = originalAmount;
    } else if(originalCurrency === 'USD' && resCurrency === 'AUD') {
        resAmount = (originalAmount * 1.34).toFixed(2);
    } else if(originalCurrency === 'USD' && resCurrency === 'EUR') {
        resAmount = (originalAmount * 0.86).toFixed(2);
    } else if(originalCurrency === 'USD' && resCurrency === 'UAH') {
        resAmount = (originalAmount * 26.25).toFixed(2);
    } else if(originalCurrency === 'USD' && resCurrency === 'CUP') {
        resAmount = (originalAmount * 23.95).toFixed(2);
    }

    if(originalCurrency === 'UAH' && resCurrency === 'UAH') {
        resAmount = originalAmount;
    } else if(originalCurrency === 'UAH' && resCurrency === 'AUD') {
        resAmount = (originalAmount * 0.051).toFixed(2);
    } else if(originalCurrency === 'UAH' && resCurrency === 'EUR') {
        resAmount = (originalAmount * 0.033).toFixed(2);
    } else if(originalCurrency === 'UAH' && resCurrency === 'USD') {
        resAmount = (originalAmount * 0.038).toFixed(2);
    } else if(originalCurrency === 'UAH' && resCurrency === 'CUP') {
        resAmount = (originalAmount * 0.91).toFixed(2);
    }

    if(originalCurrency === 'CUP' && resCurrency === 'CUP') {
        resAmount = originalAmount;
    } else if(originalCurrency === 'CUP' && resCurrency === 'AUD') {
        resAmount = (originalAmount * 0.056).toFixed(2);
    } else if(originalCurrency === 'CUP' && resCurrency === 'EUR') {
        resAmount = (originalAmount * 0.036).toFixed(2);
    } else if(originalCurrency === 'CUP' && resCurrency === 'USD') {
        resAmount = (originalAmount * 0.042).toFixed(2);
    } else if(originalCurrency === 'CUP' && resCurrency === 'UAH') {
        resAmount = (originalAmount * 1.1).toFixed(2);
    }

    alert(`Заданные ${originalAmount} ${originalCurrency} = ${resAmount} ${resCurrency} по курсу от 02.11.2021`)
    repeat = confirm('Желаете повторить операцию?');
} while (repeat);


