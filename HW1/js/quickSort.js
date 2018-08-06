var arr = [2, 5, 3, 1, 4, 7, -3, -2, 8, 0, 9];

function quickSort(arr) {
    var buffer;
    var N = arr.length;

    for (var i = 0; i < arr.length; i++) {
        if ((typeof(arr[i]) === "number") && !(isNaN(arr[i]))) {
            continue;
        } else {
            alert('Array must contains only numbers');
            return;
        }
    }

    var valid = isNumber(arr);
    if (valid) {
        var pivot = arr[parseInt(N / 2)];
        console.log('pivot' + pivot);

        for (var i = 0; i < N; i++) {
            if (arr[i] >= pivot) {
                for (var j = (N - 1); j >= 0; j--) {
                    if (arr[j] <= pivot) {

                        if (i <= j) {
                            buffer = arr[i];
                            arr[i] = arr[j];
                            arr[j] = buffer;
                        }
                    }
                }
            }
        }
        /*тут должна быть рекурсия
        пока не получается. Работаю над этим*/

        console.log(arr);
    }
    return arr;
}
