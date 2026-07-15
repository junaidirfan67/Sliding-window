/*
====================================================
             SLIDING WINDOW TECHNIQUE
====================================================

Definition:

Sliding Window is an algorithm technique used to solve
problems where we need to work with a continuous part
of an array or string.

A "window" means a range of elements that we are
currently looking at.

Instead of checking every possible group of elements,
we create a window and move it step by step.

When the window moves:
- New elements enter the window
- Old elements leave the window

This avoids repeating calculations and makes the
solution faster.


Simple Example:

Array:

[2, 1, 5, 1, 3, 2]

If we want to check 3 elements at a time:

Window 1:
[2, 1, 5] = 8

Move window:

[1, 5, 1] = 7

Move window:

[5, 1, 3] = 9

Move window:

[1, 3, 2] = 6

The largest sum is 9.


====================================================
                 TYPES OF SLIDING WINDOW
====================================================


1. FIXED SIZE SLIDING WINDOW
----------------------------------------------------

Definition:

In a fixed-size sliding window, the size of the window
remains the same while moving through the data.

Example:

Find maximum sum of 3 consecutive numbers.

Array:

[2, 1, 5, 1, 3, 2]

Window size = 3

The window always contains 3 elements:

[2,1,5]
[1,5,1]
[5,1,3]
[1,3,2]


Real-life example:

A camera with a fixed frame size.
The camera moves, but the frame size stays the same.


Used for:
- Maximum sum of K elements
- Average of K elements
- Fixed length calculations



2. VARIABLE SIZE SLIDING WINDOW
----------------------------------------------------

Definition:

In a variable-size sliding window, the size of the
window can increase or decrease depending on a condition.

The window expands when we need more elements and
shrinks when the condition is not satisfied.


Example:

Find the longest substring without repeating characters.

String:

"abcabcbb"


Window movement:

"a"
"ab"
"abc"

When another "a" appears, remove elements from the
left side until the window becomes valid again.


Answer:

"abc"

Length = 3


Real-life example:

A shopping bag:
- Add items until it reaches a limit.
- Remove items if it becomes too much.


Used for:
- Longest substring problems
- Minimum subarray problems
- Finding the best range



====================================================
              DIFFERENCE BETWEEN TYPES
====================================================


Fixed Size Sliding Window:
- Window size is constant
- Size is already given
- Example: Find maximum sum of 5 elements


Variable Size Sliding Window:
- Window size changes
- Depends on a condition
- Example: Find longest valid substring



====================================================
              EASY REMEMBERING RULE
====================================================

Fixed Window:
"Same size window moving forward"


Variable Window:
"Window grows and shrinks when needed"


Sliding Window helps us solve problems faster by
moving a window instead of checking everything again.

====================================================
*/
