/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if(!num) return 'Zero';

    const billion = Math.floor(num / 1000000000);
    const million = Math.floor((num - (billion * 1000000000)) / 1000000);
    const thousand = Math.floor((num - (billion * 1000000000) - (million * 1000000)) / 1000);
    const rest = num - (billion * 1000000000) - (million * 1000000) - (thousand * 1000);

    let result = '';
    if(billion) result = three(billion) + ' Billion';
    if(million) {
        result ? result += ' ' : result += '';
        result += three(million) + ' Million';
    }
    if(thousand){
        result ? result += ' ' : result += '';
        result += three(thousand) + ' Thousand';
    }
    if(rest){
        result ? result += ' ' : result += '';
        result += three(rest);
    }

    return result;
};

function one(num){
    const mapper = {
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine'
    };
    return mapper[num];
}

function two(num){
    if(!num){
        return '';
    }else if(num < 10){
        return one(num);
    }else if(num < 20){
        return two_less_20(num);
    }else{
        const tenner = Math.floor(num / 10);
        const rest = num - tenner * 10;
        if(rest){
            return ten(tenner) + ' ' + one(rest);
        } else {
            return ten(tenner);
        }
    }
}

function two_less_20(num){
    const mapper = {
        10: 'Ten',
        11: 'Eleven',
        12: 'Twelve',
        13: 'Thirteen',
        14: 'Fourteen',
        15: 'Fifteen',
        16: 'Sixteen',
        17: 'Seventeen',
        18: 'Eighteen',
        19: 'Nineteen'
    };
    return mapper[num];
}

function three(num){
    const hundred = Math.floor(num / 100);
    const rest = num - hundred * 100;
    if(hundred && rest){
        return one(hundred) + ' Hundred ' + two(rest);
    }
    if(hundred && !rest){
        return one(hundred) + ' Hundred';
    }
    if(!hundred && rest){
        return two(rest);
    }
}

function ten(num){
    const mapper = {
        2: 'Twenty',
        3: 'Thirty',
        4: 'Forty',
        5: 'Fifty',
        6: 'Sixty',
        7: 'Seventy',
        8: 'Eighty',
        9: 'Ninety'
    };
    return mapper[num];
}
