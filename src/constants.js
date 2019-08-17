/**
 * Cells
 * @type {Array}
 */
export const CELLS = [1,2,3,4,5,6,7,8,32,9,31,10,30,11,29,12,28,13,27,14,26,15,25,16,24,23,22,21,20,19,18,17]
/**
 * CellsContent
 * @type {Array}
 */
export const CELLSCONTENT = ["HEARTS","DICES","BED","PICKUP","BED","GOBACKN","BED","PICKUPOTHER","BED","DICES","PICKUP","GOBACK","BED","PICKUP","DICES","GOBACKN","GOBACKN","BED","PICKUPOTHER","PICKUPOTHER","GOBACK","DICES","BED","GOBACKN","PICKUP","DICES","GOBACKN","PICKUPOTHER","GOBACK","BED","GOBACK","PICKUP"]
/**
 * Board
 * @type {Array}
 */
export const BOARD = ["HEARTS","DICES","BED","PICKUP","BED","GOBACKN","BED","PICKUPOTHER","DICES","GOBACK","PICKUP","GOBACKN","BED","PICKUPOTHER","DICES","GOBACKN","PICKUP","GOBACK","BED","GOBACK","PICKUPOTHER","GOBACKN","DICES","PICKUP","BED","GOBACK","PICKUPOTHER","GOBACKN","DICES","BED","PICKUP","BED"];



/**
 * Rows
 * @type {Array}
 */
export const ROWS = [1,2,3,4,5,6,7,8,9,10]

/**
 * Columns
 * @type {Array}
 */
export const COLS = [1,2,3,4,5,6,7,8]


/**
 * Even tile name
 * @type {Array}
 */
export const DARK_TILES = ['b', 'd', 'f', 'h']

/**
 * Odd tile name
 * @type {Array}
 */
export const LIGHT_TILES = ['a', 'c', 'e', 'g']

/**
 * Opponent
 * @type {Object}
 */
export const OPPONENT = {
  white: 'black',
  black: 'white',
  w: 'black',
  b: 'white'
}

/**
 * Turn
 * @type {Object}
 */
export const TURN = {
  white: 'white',
  black: 'black',
  w: 'white',
  b: 'black'
}

/**
 * Side
 * @type {Object}
 */
export const SIDE = {
  white: 'w',
  black: 'b',
  w: 'w',
  b: 'b'
}

/**
 * Standard novements
 * [x, y] - axis
 * @type {Object}
 */
export const MOVEMENTS = {
  B: [
    [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7],
    [-1, 1], [-2, 2], [-3, 3], [-4, 4], [-5, 5], [-6, 6], [-7, 7],
    [1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [6, -6], [7, -7],
    [-1, -1], [-2, -2], [-3, -3], [-4, -4], [-5, -5], [-6, -6], [-7, -7]
  ],
  K: [
    [0, -1], [0, 1], [-1, 0], [1, 0], [-1, -1], [-1, 1], [1, -1], [1, 1]
  ],
  N: [
    [-1, -2], [-1, 2], [1, -2], [1, 2], [-2, -1], [-2, 1], [2, -1], [2, 1]
  ],
  P: [
    [0, 1]
  ],
  Q: [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
    [0, -1], [0, -2], [0, -3], [0, -4], [0, -5], [0, -6], [0, -7],
    [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0],
    [-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, 0], [-6, 0], [-7, 0],
    [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7],
    [-1, 1], [-2, 2], [-3, 3], [-4, 4], [-5, 5], [-6, 6], [-7, 7],
    [1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [6, -6], [7, -7],
    [-1, -1], [-2, -2], [-3, -3], [-4, -4], [-5, -5], [-6, -6], [-7, -7]
  ],
  R: [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
    [0, -1], [0, -2], [0, -3], [0, -4], [0, -5], [0, -6], [0, -7],
    [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0],
    [-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, 0], [-6, 0], [-7, 0]
  ]
}

/**
 * Special movements
 * @type {Object}
 */
export const SPECIALS = {
  K: ['castling'],
  N: ['jumpover'],
  P: ['doubleStep', 'enPassant', 'promotion']
}
