/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const WIDTH = 7; 
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
let board = []; // array of rows, each row is array of cells  (board[y][x])
// board
/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  // TODO: set "board" to empty HEIGHT x WIDTH matrix array
  // Iterate once for each row that we want
  for(let row = 0; row < HEIGHT; row++) {
    /* Array.from() parses object obj with a length property into an array of
       length equal to obj.length;
       therefore we pass in an object literal with the length property and
       its value set to the WIDTH global variable.
    */ 
    let newRow = Array.from({length:WIDTH}); // newRow.length = 7
    // Add this row onto our game board once each iteration
    board.push(newRow);
  }
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
  const htmlBoard = document.getElementById('board');
  
  // Create a new HTML table row element
  const top = document.createElement("tr"); 

  // Give the new row an id for the purposes of CSS styling
  top.setAttribute("id", "column-top");

  // Add an event listener for a click on the row that calls handleClick()
  top.addEventListener("click", handleClick); // 

  // For each column on the game board
  for (let x = 0; x < WIDTH; x++) {
    // Create a td element, give it an id equal to the column number
    let headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    // Append the td element to the column-top row
    top.append(headCell);
  }

  // Append the column-top row to the table element already on the webpage
  htmlBoard.append(top);

   /* For each row create a table row element and append a td cell to it for each column
      and append the row to board element already on the webpage. */
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      
      // Template string used to give each cell a unique id of the form "y-x"
      cell.setAttribute("id", `${y}-${x}`); 
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // Starting from the bottom, check for an empty cell in the given column x
  for (let index = HEIGHT -1; index >= 0; index--) {
    if (!board[index][x]){
      return index;
    }
  }
  // If no empty cell is found return null
  return null;
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // Make a div
  const checker = document.createElement('div');
  // Add the "piece" and current player classes for CSS selection
  checker.classList.add("piece","player" + currPlayer);
  
  // Select the cell in which to place the new div (using template string from before)
  const targetCell = document.getElementById(`${y}-${x}`)
  targetCell.append(checker);
}
/** endGame: announce game end */

function endGame(msg) {
  // Pop up alert message
  alert(msg);
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  const x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  const y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // Place piece in board and add to HTML table
  // and update in-memory board
  board[y][x] = currPlayer;
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  // Array.every returns a boolean for each cell in each row
  let isBoardFull = board.every(row=>row.every(cell => cell));
  // if board is full exit the click handler and end the game
  if (isBoardFull){
    return endGame('Tie Game!');
  }

  // Ternary operator switches players at the end of a valid non-winning turn
  // If currPlayer is 1, set currPlayer to 2 etc.
  currPlayer = currPlayer === 1 ? 2 : 1;
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.

  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      let vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      let diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      let diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();
