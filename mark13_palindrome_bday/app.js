function reverseStr(str)
{
    return str.split('').reverse().join('')
}

function isPalindrome(str)
{
    var reverse = reverseStr(str)
    if(reverse === str){
        return true;
    } else {
        return false;
    }
}

// write a function that converts date from number to string

function convertDateToStr(date)
{
    var dateStr = {day:'',month:'',year:''}; 
    dateStr.day = (date.day < 10) ? '0'+date.day : date.day.toString();
    dateStr.month = (date.month < 10) ? '0'+date.month : date.month.toString();
    dateStr.year = date.year.toString();
    return dateStr; 
}



// Write a JS function that takes a date and returns all variations of it

function getAllDateFormats(date) {
    var dateStr = convertDateToStr(date);
    var ddmmyyyy = dateStr.day + dateStr.month+ dateStr.year
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year
    var yyyymmdd = dateStr.year+dateStr.month + dateStr.day
    var ddmmyy =  dateStr.day + dateStr.month+ dateStr.year.slice(-2)
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2)
    var yymmdd = dateStr.year.slice(-2)+dateStr.month + dateStr.day;
    return [ddmmyyyy, mmddyyyy,yyyymmdd, ddmmyy, mmddyy, yymmdd]
}



// Write a function that checks palindrome for all the date formats
function checkPalindromForAllDateFormats(date)
{
    var listOfAllDates = getAllDateFormats(date)
    var flag = false;
    for(var i = 0; i< listOfAllDates.length; i++){
        if(isPalindrome(listOfAllDates[i]))
        {
            flag = true;
            break;
        }
    }
    return flag; 
}

//console.log(checkPalindromForAllDates(date));


//  Find the next palindrome date, also how many days are in between
function isLeapYear(year){
    if(year % 400 === 0) 
        return true;
    if(year % 100 === 0)
        return false;
    if(year % 4 === 0)
        return true;
    return false;
}

function getNextDate(date){
    var day = date.day+1;
    var month = date.month;
    var year = date.year;
    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(month === 2)
    {
        if(isLeapYear(year))
        {
            if(day > 29)
            {
                day = 1;
                month++;
            }

        } else {
            if(day > 28)
            {
                day = 1;
                month++;
            }

        }
    } else {
       if(day >daysInMonth[month-1])
       {
           day = 1;
           month++;
       }
    }
    if(month > 12)
    {
        month = 1;
        year++;
    }
    return {
        day: day,
        month: month,
        year: year
    };
}

function getNextPalindromeDate(date)
{
    var count = 0;
    var nextDate = getNextDate(date);
    while(1){
        count++;
        var flag = checkPalindromForAllDateFormats(nextDate);
        if(flag) break;
        nextDate = getNextDate(nextDate);
    }
    return [count, nextDate];
}

// get the previous date
function getPreviousDate(date)
{
    var day = date.day-1;
    var month = date.month;
    var year = date.year;
    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(month === 3)
    {
        if(isLeapYear(year))
        {
            if(day < 1)
            {
                day = 29;
                month--;
            }

        } else {
            if(day < 1)
            {
                day = 28;
                month--;
            }

        }
    } else {
       if(day <1)
       {
           day = daysInMonth[month-1];
           month--;
       }
    }
    if(month < 1)
    {
        month = 12;
        year--;
    }
    return {
        day: day,
        month: month,
        year: year
    };

}

function getPreviousPalindromeDate(date)
{
    var count = 0;
    var prevDate = getPreviousDate(date);
    while(1){
        count++;
        var flag = checkPalindromForAllDateFormats(prevDate);
        if(flag) break;
        prevDate = getPreviousDate(prevDate);
    }
    return [count, prevDate];
}


var DateInputRef = document.querySelector("#bday-input");
var ShowButtonRef = document.querySelector("#show-btn");
var resultRef = document.querySelector("#result");
function clickHandler(e){
    var textinputdate = DateInputRef.value;
    var listOfValues = textinputdate.split('-');
    var date = {
        day: Number(listOfValues[2]),
        month : Number(listOfValues[1]),
        year : Number(listOfValues[0]),
    }
    if(textinputdate !== ''){
        var isPalindrome = checkPalindromForAllDateFormats(date);
        if(isPalindrome){
            resultRef.innerText = "Yay!! Your Entered number is Palindrome"
        } else {
            var [ctr, nextDate] = getNextPalindromeDate(date);
            resultRef.innerText = `Your next Palindrome is ${ctr} days left!! 
            The date is ${nextDate.day} / ${nextDate.month} / ${nextDate.year}`
        }
    }
}
ShowButtonRef.addEventListener('click', clickHandler)