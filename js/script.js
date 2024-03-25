const dataset = new Map([
    ["1", "https://codeforces.com/contest/1941/problem/A"],
    ["2", "https://www.hackerrank.com/challenges/birthday-cake-candles/problem"]
]);


submitInput = document.getElementById('submit-button')

submitInput.addEventListener('click', function() {
    link = document.getElementById('link-number-input')
    if(link.value.length) {
        linkFromDataset = dataset.get(link.value)
        if(linkFromDataset) {
            window.open(linkFromDataset)
        } else {
            alert('The number is not exist !')
        }
    } else {
        alert('Enter valid number please')
    }
});
