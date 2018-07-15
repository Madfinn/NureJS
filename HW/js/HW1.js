//Task 1

var arr = [2, 5, 3, 1, 4, 7, -3, -2, 8, 0, 9];
function sortWrap(arr) {
    var N = arr.length;

    function quickSort(arr, N) {
        var buffer;

        function isNumber(arr) {

            for (var i = 0; i < arr.length; i++) {
                if ((typeof(arr[i]) === "number") && !(isNaN(arr[i]))) {
                    continue;
                } else {
                    alert('Array must contains only numbers');
                    return false;
                }
            }
            return true;
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
                } else {
                    continue;
                }
            }
            /*тут должна быть рекурсия
            пока не получается. Работаю над этим*/
            
            console.log(arr);
        }
        return arr;
    }
    quickSort(arr, N);
}

//Task 2
var arr = [2, 5, 3, 1, -3, -2, 8, 0, 9];

function bubbleSort(arr) {
    var N = arr.length;
    var buffer;

    function isNumber(arr) {

        for (var i = 0; i < arr.length; i++) {
            if ((typeof(arr[i]) === "number") && !(isNaN(arr[i]))) {
                continue;
            } else {
                alert('Array must contains only numbers');
                return false;
            }
        }
        return true;
    }
    var valid = isNumber(arr);

    if (valid) {
        for (var i = 0; i < N; i++) {
            for (var j = i + 1; j < N; j++) {
                if (arr[i] > arr[j]) {
                    buffer = arr[i];
                    arr[i] = arr [j];
                    arr[j] = buffer;
                } else {
                    continue;
                }
            }
        }
        return arr;
    }
}
bubbleSort(arr);