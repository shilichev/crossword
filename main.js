let tableArray = [];

const renderTable = () => {
  let table = document.getElementById("table");
  let trArray = "";
  tableArray.forEach((tr, indexMain) => {
    let elem = "";
    tr.forEach((td, index) => {
      let classTd = "";
      if (!td) {
        classTd = "nothing";
      } else if (td.length == 1) {
        classTd = "word";
      } else if (td == null) {
        return;
      } else {
        classTd = "quetion";
      }
      elem =
        elem +
        `<td width=${780 / tableArray.length + "px"} height=${
          780 / tableArray.length + "px"
        }  onclick="addValue()" class=${classTd} id=${
          indexMain * 10 + index
        }>${td}</td>`;
    });
    trArray = trArray + `<tr>${elem}</tr>`;
  });
  table.innerHTML = trArray;
};

const createTable = (rowsCount, columnsCount) => {
  for (i = 0; i < rowsCount; i++) {
    tableArray.push([]);
  }
  for (i = 0; i < columnsCount; i++) {
    tableArray.map((item) => item.push(""));
  }
  renderTable();
};
createTable(10, 10);
const getInfo = () => {
  let rows = Number(document.getElementById("row").value);
  let columns = Number(document.getElementById("column").value);
  if (rows !== rows) {
    alert("Enter correct value");
  } else if (columns !== columns) {
    alert("Enter correct value");
  } else {
    createTable(rows, columns);
  }
};
const addValue = () => {
  let value = prompt("Введите букву или вопрос");
  console.log(event.target.id);
  tableArray.map((item, index) => {
    if (index === Math.floor(event.target.id / 10)) {
      item.map((any, index) => {
        if (index === event.target.id % 10) {
          return (item[index] = value);
        }
      });
    }
  });
  renderTable();
};
