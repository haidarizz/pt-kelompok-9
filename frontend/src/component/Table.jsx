import React, { useState, useEffect } from "react";

const Table = () => {
  const [selectedCell, setSelectedCell] = useState(null);
  const [day, setDay] = useState(0);
  const [price, setPrice] = useState(0);
  const numberOfRows = 5; // Update this to the actual number of rows in your table
  const numberOfColumns = 7; // Update this to the actual number of columns in your table
  const cellWidth = `${100 / numberOfColumns}%`;

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

  const calculateCellPrice = (rowIndex, colIndex) => {
    // Define the pattern for each column
    const patterns = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 64, 63, 62, 52, 76, 82],
      [51, 62, 61, 61, 50, 75, 78],
      [50, 61, 61, 61, 0, 0, 0],
    ];

    // Calculate the cell value based on the row and column indices
    return patterns[rowIndex][colIndex];
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

  const handleCellClick = (rowIndex, colIndex) => {
    // Calculate the cell value based on the row and column indices
    const cellValue = calculateCellValue(rowIndex, colIndex);
    // const priceValue = calculateCellPrice(rowIndex, colIndex);
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
        //console.log(selectedCell);
      }
    }
    // setDay(cellValue);
    // setPrice(priceValue);
    // console.log("day: ", day);
    // console.log("price: ", price);
  };

  useEffect(() => {
    if (
      selectedCell &&
      selectedCell.rowIndex !== null &&
      selectedCell.colIndex !== null
    ) {
      // console.log(selectedCell.rowIndex);
      const cellValue = calculateCellValue(
        selectedCell.rowIndex,
        selectedCell.colIndex
      );
      const priceValue = calculateCellPrice(
        selectedCell.rowIndex,
        selectedCell.colIndex
      );
      setDay(cellValue);
      setPrice(priceValue);
      //   console.log("day: ", day);
      //   console.log("price: ", price);
      // Add your additional logic here
    } else {
      setDay(0);
      setPrice(0);
    }
  }, [selectedCell]);

  useEffect(() => {
    console.log("day: ", day);
    console.log("price: ", price);
  }, [day, price]);

  return (
    <div className="w-full px-4">
      <table className="table-auto w-full">
        <colgroup>
          {Array.from({ length: numberOfColumns }).map((_, colIndex) => (
            <col key={colIndex} />
          ))}
        </colgroup>
        <tbody>
          {Array.from({ length: numberOfRows }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: numberOfColumns }, (_, colIndex) => {
                const cellValue = calculateCellValue(rowIndex, colIndex);
                const priceValue = calculateCellPrice(rowIndex, colIndex);
                return (
                  <td
                    key={colIndex}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                    className={`px-1 py-1 h-[50px] border border-gray ${
                      isCellSelected(rowIndex, colIndex)
                        ? "bg-brown text-white cursor-pointer"
                        : cellValue === 17 || cellValue === 20
                        ? "bg-lightgreen cursor-pointer text-black"
                        : cellValue === 18 ||
                          cellValue === 25 ||
                          cellValue === 26
                        ? "bg-cream cursor-pointer text-black"
                        : cellValue === 19
                        ? "bg-lightbrown cursor-pointer text-black"
                        : cellValue >= 14 &&
                          cellValue <= 30 &&
                          !(rowIndex === 0 && colIndex === 0)
                        ? "bg-white bg-opacity-20 cursor-pointer text-black"
                        : "cursor-pointer text-gray"
                    }`}
                    style={{ width: `${100 / 7}%` }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="text-[15px] font-vollkorn">
                        {cellValue}
                      </div>
                      {priceValue !== 0 && (
                        <div className="text-[9px] font-vollkorn">
                          Rp{priceValue}.000
                        </div>
                      )}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
