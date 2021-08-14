**Planning Notes**

1. What HTML would be useful for the game board itself?

2. How could you represent a played piece in the HTML board?

3. In the JavaScript, what would be a good structure for the in-memory game board?

4. What might the flow of the game be?

**1. HTML**

The obvious choice is a  **table** element with 7 column and 6 rows. The width, height, and border for each **td** cell should be specified in CSS.

**2. Representing played pieces**

Pieces can be represented by a block element such as div or p. Because the paragraph element indicates a piece of text, and we are representing something non-textual I think div is the best choice for representing a played piece in HTML.

Another way to represent played pieces would be to add a player one and/or two class to a table **td** element when a player places a piece in that cell.

**3. JavaScript representation of game board**

An array is probably sufficient to represent the game board. Array also has many built-in methods that could prove useful.

**4. Flow of the Game**

**Step 1**

At the start of the game there are no pieces on the board. Instructions at the top of the page ask Player 1 to play the first piece. Current player is toggled to player one.

**Step 2**

Current player selects a column in which to place a game piece.

**Step 3**

If the column is full the player must select another column.

**Step 4**

If the column is not full the piece enters the lowest empty cell in the selected column.

**Step 5**

Once the piece is placed the game board is checked for the win condition.

- If the win condition is met the game ends, a message is displayed and the board resets.

**Step 6**

If the win condition is not met the board is checked for the draw condition.

-If the draw condition is met the game ends, a message is displayed and the board resets.

**Step 7**

If neither a win nor a draw, go to Step 2 and toggle the current player to the other player.

**Function Ideas**
`parseClick(clickTarget)`
Place a game piece if the target column has less than six pieces. If the column is full do nothing.
`placePiece(targetColumn)`
Creates a piece-div for the current player and appends it as a child element to the td element in the lowest empty cell in the column.
`checkForWin()`
Checks the board for a win condition

