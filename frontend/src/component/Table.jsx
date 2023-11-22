import React, { useState } from 'react';

const Table = () => {
  const [selectedCell, setSelectedCell] = useState(null);
  const numberOfRows = 5; // Update this to the actual number of rows in your table
  const numberOfColumns = 7; // Update this to the actual number of columns in your table

  const handleCellClick = (rowIndex, colIndex) => {
    // Calculate the cell value based on the row and column indices
    const cellValue = calculateCellValue(rowIndex, colIndex);

    // Toggle selection only if the cell value is between 14 and 30 and not in cell (1,1)
    if (
      cellValue >= 14 &&
      cellValue <= 30 &&
      !(rowIndex === 0 && colIndex === 0) // Check if it's not in cell (1,1)
    ) {
      if (
        selectedCell &&
        selectedCell.rowIndex === rowIndex &&
        selectedCell.colIndex === colIndex
      ) {
        // If the clicked cell is already selected, unselect it
        setSelectedCell(null);
      } else {
        // Otherwise, select the new cell
        setSelectedCell({ rowIndex, colIndex });
      }
    }
  };

  const isCellSelected = (rowIndex, colIndex) => {
    // Calculate the cell value based on the row and column indices
    const cellValue = calculateCellValue(rowIndex, colIndex);

    // Check if the cell is selected and within the allowed range, excluding cell (1,1)
    return (
      selectedCell &&
      selectedCell.rowIndex === rowIndex &&
      selectedCell.colIndex === colIndex &&
      cellValue >= 14 &&
      cellValue <= 30 &&
      !(rowIndex === 0 && colIndex === 0) // Check if it's not in cell (1,1)
    );
  };

  const calculateCellValue = (rowIndex, colIndex) => {
    // Define the pattern for each column
    const patterns = [
      [30, 31, 1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24, 25, 26],
      [27, 28, 29, 30, 1, 2, 3],
    ];

    // Calculate the cell value based on the row and column indices
    return patterns[rowIndex][colIndex];
  };

  return (
    <table className="table-auto m-4">
      <tbody>
        {Array.from({ length: numberOfRows }, (_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: numberOfColumns }, (_, colIndex) => {
              const cellValue = calculateCellValue(rowIndex, colIndex);
              return (
                <td
                  key={colIndex}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  className={`p-4 border ${
                    isCellSelected(rowIndex, colIndex)
                      ? 'bg-brown cursor-pointer'
                      : cellValue === 17 || cellValue === 20
                      ? 'bg-lightgreen cursor-pointer'
                      : cellValue === 18 || cellValue === 25 || cellValue === 26
                      ? 'bg-cream cursor-pointer'
                      : cellValue === 19
                      ? 'bg-lightbrown cursor-pointer'
                      : cellValue >= 14 &&
                        cellValue <= 30 &&
                        !(rowIndex === 0 && colIndex === 0)
                      ? 'bg-white bg-opacity-20 cursor-pointer'
                      : 'cursor-pointer'
                  }`}
                >
                  {cellValue}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
