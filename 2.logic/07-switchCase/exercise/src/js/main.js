const h1 = document.querySelector('.container h1');
const nowDate = new Date
const options = {
    dateStyle: 'full',
};
console.log(nowDate.getMonth)
h1.innerHTML = nowDate.toLocaleDateString('en-US', options)

// or h1.innerHTML = nowDate.toLocaleDateString('en-US', { dateStyle: 'full' })

/*
    other Resolution

    function getMonthName(monthNumber) {
        const months = ['January', 'February', ...];
        return months[monthNumber];
    }

    return getMonthName(nowDate.getMonth())

*/