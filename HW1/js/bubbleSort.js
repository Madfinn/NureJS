var arr = [2, 5, 3, 1, -3, -2, 8, 0, 9];

function bubbleSort(arr) {
    var N = arr.length;
    var buffer;

    for (var i = 0; i < arr.length; i++) {
        if ((typeof(arr[i]) === "number") && !(isNaN(arr[i]))) {
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
        } else {
            alert('Array must contains only numbers');
            return false;
        }
    }
}

bubbleSort(arr);