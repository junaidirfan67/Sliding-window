/*
====================================================
             SLIDING WINDOW TECHNIQUE
====================================================

Sliding Window is a technique used to solve problems
involving continuous parts of an array or string.

It works by creating a window and moving it through
the data instead of recalculating everything again.

Types:
1. Fixed Size Sliding Window
2. Variable Size Sliding Window

====================================================
*/


// ==================================================
// 1. FIXED SIZE SLIDING WINDOW
// ==================================================

/*
Example:
Find the maximum sum of a subarray of size k.

Array:
[2, 1, 5, 1, 3, 2]

k = 3

Windows:
[2,1,5] = 8
[1,5,1] = 7
[5,1,3] = 9
[1,3,2] = 6

Answer = 9
*/


function maxSumSubarray(arr, k) {

    let windowSum = 0;

    // Create first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    let maxSum = windowSum;


    // Slide the window
    for (let i = k; i < arr.length; i++) {

        // Add new element
        windowSum += arr[i];

        // Remove old element
        windowSum -= arr[i - k];

        // Update maximum
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}


console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3));

// Output:
// 9



// ==================================================
// 2. VARIABLE SIZE SLIDING WINDOW
// ==================================================

/*
Example:
Find the longest substring without repeating characters.

String:
"abcabcbb"

Longest substring:
"abc"

Length:
3
*/


function longestSubstring(s) {

    let window = new Set();

    let left = 0;
    let maxLength = 0;


    for (let right = 0; right < s.length; right++) {


        // If duplicate exists,
        // remove characters from left
        while (window.has(s[right])) {

            window.delete(s[left]);

            left++;
        }


        // Add current character
        window.add(s[right]);


        // Calculate window length
        maxLength = Math.max(
            maxLength,
            right - left + 1
        );
    }


    return maxLength;
}


console.log(longestSubstring("abcabcbb"));

// Output:
// 3
