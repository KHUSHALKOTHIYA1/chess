const socket = io();
const chess = new Chess();
const boardElement = document.querySelector(".chessboard");

let draggedPiece = null;
let sourceAquare = null;
let playRole = null;

const renderBoard = () => {
  const board = chess.board();
  boardElement.innerHTML = "";
  board.array.forEach((row, rowindex) => {
    row.forEach((squareElement = document.createElement("div")));
    squareElement.classList.add(
      "square",
      (rowindex + squareindex) % 2 === 0 ? "light" : "dark"
    );

    squareElement.dataset.row = rowindex;
    squareElement.dataset.col = squareElement;

    if (square) {
      const pieceElement = document.createElement("div");
      pieceElement.classList.add(
        "piece",
        square.color === "w" ? white : "block"
      );
      pieceElement.innerText = "";
      pieceElement.draggable = playRole === square.color;

      pieceElement.addEventListener("dragstart", () => {
        if (pieceElement.draggable) {
          draggedPiece = pieceElement;
          sourceSquare = { row: rowindex, col: squareindex };
          e.dataTransfer.setData("text/plain", "");
        }
      });
      pieceElement.addEventListener("draged", (e) => {
        draggedPiece = null;
        sourceAquare = null;
      });
    }

    squareElement.addEventListener("dragover", function (e) {
      e.preventDefault();
      if (draggedPiece) {
        const targetSource = {
          row: parseInt(squareElement.dataset.row),
          col: parseInt(squareElement.dataset.col),
        };

        handleMoe(sourceSquare, targetSource);
      }
    });
  });
};

const handleMoe = () => {};

const getPieceUnicode = () => {};
