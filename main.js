let tableArray = [];
const somefunc = async () => {
  await fetch("http://localhost:5000/todos", {
    method: "get",
  }).then((response)=>console.log(response));
};
somefunc()
const renderTable = () => {
  let table = document.getElementById("table");
  let trArray = "";
  tableArray.forEach((tr, indexMain) => {
    let elem = "";
    tr.forEach((td, index) => {
      let classTd = "";
      if (!td) {
        classTd = "nothing";
        elem =
          elem +
          `<td width=${780 / tr.length + "px"} height=${
            780 / tr.length + "px"
          }  onclick="addValue()" class=${classTd} id=${
            indexMain * 10 + index
          }>${td}</td>`;
      } else if (td.length == 1) {
        classTd = "word";
        elem =
          elem +
          `<td width=${780 / tr.length + "px"} height=${
            780 / tr.length + "px"
          }  onclick="addValue()" class=${classTd} id=${
            indexMain * 10 + index
          }>${td}</td>`;
      } else if (td == null) {
        return;
      } else {
        classTd = "quetion";

        elem =
          elem +
          `<td width=${780 / tr.length + "px"} height=${
            780 / tr.length + "px"
          }  onclick="addValue()" class=${classTd} id=${
            indexMain * 10 + index
          }>${td}</td>`;
      }
    });
    trArray = trArray + `<tr>${elem}</tr>`;
  });
  table.innerHTML = trArray;
};

const createTable = (rowsCount, columnsCount) => {
  tableArray = [];
  for (i = 0; i < rowsCount; i++) {
    tableArray.push([]);
  }
  for (i = 0; i < columnsCount; i++) {
    tableArray.map((item) => item.push(""));
  }
  renderTable();
};

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
  document.getElementById(event.target.id).innerHTML = "<input size='5' />";
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
