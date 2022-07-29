module.exports = function toReadable (number) {

    // var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    // var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    
    //     if ((number = number.toString()).length > 9) return 'overflow';
    //     n = ('000000000' + number).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    //     if (!n) return; var str = '';
    //     str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    //     str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    //     str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    //     str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    //     str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    //     return str;

    // function humanize(num){
        var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                    'seventeen', 'eighteen', 'nineteen'];
        var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
                    'ninety'];
      
        var numString = number.toString();
      
        if (number < 0) throw new Error('Negative numbers are not supported.');
      
        if (number === 0) return 'zero';
      
        //the case of 1 - 20
        if (number < 20) {
          return ones[number];
        }
      
        if (numString.length === 2) {
          return tens[numString[0]] + ' ' + ones[numString[1]];
        }
      
        //100 and more
        if (numString.length == 3) {
          if (numString[1] === '0' && numString[2] === '0')
            return ones[numString[0]] + ' hundred';
          else
            return ones[numString[0]] + ' hundred ' + toReadable(+(numString[1] + numString[2]));
        }
      
        if (numString.length === 4) {
          var end = +(numString[1] + numString[2] + numString[3]);
          if (end === 0) return ones[numString[0]] + ' thousand';
          if (end < 100) return ones[numString[0]] + ' thousand ' + toReadable(end);
          return ones[numString[0]] + ' thousand ' + toReadable(end);
        }
      }
   
//  }