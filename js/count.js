
let sum = 0;
document.getElementById('plus-btn').addEventListener('click', function () {
    const p = document.getElementById('count');
    sum = sum + 1;
    p.innerHTML = sum;
});

document.getElementById('minus-btn').addEventListener('click', function () {
    const p = document.getElementById('count');
    if (sum > 0) {
        sum -= 1;
        p.innerHTML = sum;
    }
})