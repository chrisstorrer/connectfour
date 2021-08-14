**Todo list for Connect Four Project**
<!-- - Update existing code to ES 2015 style. (`var` changed to `let` or `const`, arrow functions) -->
<!-- - Implement the makeBoard() function (line 18) -->
<!-- - TODO: get "htmlBoard" variable from the item in HTML w/ID of "board" -->
<!-- - Add comments for the makeHtmlBoard() code -->
<!-- - Implement placeInTable() -->
<!-- - Update the CSS file to make the piece div round -->
<!-- - Update the CSS so pieces are colored for each player -->
**you should now be able to click on a column and see a piece appear at the very bottom of that column. (They won’t yet appear in the right row and will always be player #1 pieces)**
<!-- - handleClick() -->
<!-- 1. Fix this not updating the board variable with the player #. -->
<!-- 2. add a check for “is the entire board filled” [hint: the JS every method on arrays would be especially nice here!] -->
<!-- 3. add code to switch currPlayer between 1 and 2. This would be a great place for a ternary function. -->

<!-- - findSpotForCol: Right now, the game drops always drops a piece to the top of the column, even if a piece is already there. Fix this function so that it finds the lowest empty spot in the game board and returns the y coordinate (or null if the column is filled). -->
<!-- - make sure that when a game has ended, the endGame function runs and alerts which user has won! -->
**Celebrate!**
-Optional Step Nine: Read & Comment checkForWin
The checkForWin() function is already written, but it needs comments to help explain how it works. Add some!

<Note: this is a good strategy for finding a winner, but it’s not the most efficient. Later, you may learn ways to find winners that don’t keep re-checking the same area of the board [using techniques for “dynamic programming”, you can make this code more efficient, though it’s much more advanced than the rest of this exercise. You can come back to this code much later!]

Optional Step Ten: Add Animation!
You can learn about CSS animation features (check out MDN!). If you change the .piece divs to be positioned absolutely, you can animate the top CSS property to animate the pieces so they appear to drop down. This is tricky, but will give you a chance to play with animations, as well as working with relative/absolute positioning.