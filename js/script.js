const deaultMenuItems = [
  {
    id: 1,
    item_name: "Sandwich",
    free_delivery: "Yes",
    Price: "99",
    Category: "Main Course",
    date_of_launch: "2014-02-09",
    active: "No",
  },
  {
    id: 2,
    item_name: "Sandwich2",
    free_delivery: "Yes",
    Price: "99",
    Category: "Main Course",
    date_of_launch: "2014-02-12",
    active: "Yes",
  },
  {
    id: 3,
    item_name: "Sandwich3",
    free_delivery: "Yes",
    Price: "99",
    Category: "Main Course",
    date_of_launch: "2011-02-09",
    active: "Yes",
  },
  {
    id: 4,
    item_name: "Sandwich4",
    free_delivery: "Yes",
    Price: "99",
    Category: "Main Course",
    date_of_launch: "2014-02-11",
    active: "No",
  },
  {
    id: 5,
    item_name: "Sandwich5",
    free_delivery: "Yes",
    Price: "99",
    Category: "Main Course",
    date_of_launch: "2020-02-09",
    active: "Yes",
  },
];
let cartItems = [];

const insertRowCustomer = () => {
  deaultMenuItems.map((elem, key) => {
    if (elem.active === "Yes") {
      let tbodyRef = document
        .getElementById("myTable")
        .getElementsByTagName("tbody")[0];

      // Insert a row at the end of table
      let newRow = tbodyRef.insertRow();

      // Insert a cell at the end of the row
      let newCell = newRow.insertCell();
      let newCell2 = newRow.insertCell();
      let newCell3 = newRow.insertCell();
      let newCell4 = newRow.insertCell();
      let newCell5 = newRow.insertCell();

      // Append a text node to the cell
      let newText = document.createTextNode(elem.item_name);
      let newText2 = document.createTextNode(elem.free_delivery);
      let newText3 = document.createTextNode(elem.Price);
      let newText4 = document.createTextNode(elem.Category);
      let newText5 = document.createElement("a");
      newText5.innerHTML = "Add to cart";
      newText5.className = "add-to-cart";
      newText5.href = "./menu-item-list-customer-notification.html";

      newCell.appendChild(newText);
      newCell2.appendChild(newText2);
      newCell3.appendChild(newText3);
      newCell4.appendChild(newText4);
      newCell5.appendChild(newText5);
    }
  });
  // append the new row to the table
};
const insertRowAdmin = () => {
  deaultMenuItems.map((elem, key) => {
    let tbodyRef = document
      .getElementById("myTable")
      .getElementsByTagName("tbody")[0];

    // Insert a row at the end of table
    let newRow = tbodyRef.insertRow();

    // Insert a cell at the end of the row
    let newCell = newRow.insertCell();
    let newCell2 = newRow.insertCell();
    let newCell3 = newRow.insertCell();
    let newCell4 = newRow.insertCell();
    let newCell5 = newRow.insertCell();
    let newCell6 = newRow.insertCell();
    let newCell7 = newRow.insertCell();

    // Append a text node to the cell
    const newText = document.createTextNode(elem.item_name);
    const newText2 = document.createTextNode(elem.Price);
    const newText3 = document.createTextNode(elem.active);
    const newText4 = document.createTextNode(elem.date_of_launch);
    const newText5 = document.createTextNode(elem.Category);
    const newText6 = document.createTextNode(elem.free_delivery);
    const newText7 = document.createElement("a");
    newText7.innerHTML = "Edit";
    newText7.className = "edit";
    newText7.href = `./edit-menu-item.html?item_name=${elem.item_name}&item_price=${elem.Price}&active=${elem.active}&date_of_launch=${elem.date_of_launch}&free_delivery=${elem.free_delivery}&category=${elem.Category}`;

    newCell.appendChild(newText);
    newCell2.appendChild(newText2);
    newCell3.appendChild(newText3);
    newCell4.appendChild(newText4);
    newCell5.appendChild(newText5);
    newCell6.appendChild(newText6);
    newCell7.appendChild(newText7);
  });
  // append the new row to the table
};

const getUrlVars = () => {
  var vars = {};
  var parts = window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
      vars[key] = value;
    }
  );
  return vars;
};
const editMenu = () => {
  const data = getUrlVars();
  document.getElementById("price").value = data.item_price;
  document.getElementById("item_name").value = data.item_name;

  if (data.active === "Yes")
    document.getElementById("free-delivery").checked = true;
  else document.getElementById("free-delivery").checked = true;
  document.getElementById("launch-date").value = data.date_of_launch;

  if (data.free_delivery === "Yes")
    document.getElementById("active-yes").checked = true;
  else document.getElementById("active-no").checked = true;
};

const showEditSuccess = () => {
  const data = getUrlVars();
  console.log("🚀 ~ file: script.js ~ line 159 ~ showEditSuccess ~ data", data);
  document.getElementById("msg").innerHTML =
    data.item_name + " details saved successfully...";
};

const showCart = () => {
  let price = 0;
  deaultMenuItems.map((elem, key) => {
    if (elem.active === "Yes") {
      price = price + parseInt(elem.Price);
      let tbodyRef = document
        .getElementById("myTable")
        .getElementsByTagName("tbody")[0];

      // Insert a row at the end of table
      let newRow = tbodyRef.insertRow();

      // Insert a cell at the end of the row
      let newCell = newRow.insertCell();
      let newCell2 = newRow.insertCell();
      let newCell3 = newRow.insertCell();
      let newCell4 = newRow.insertCell();

      // Append a text node to the cell
      let newText = document.createTextNode(elem.item_name);
      let newText2 = document.createTextNode(elem.free_delivery);
      let newText3 = document.createTextNode(elem.Price);
      let newText4 = document.createElement("a");
      newText4.innerHTML = "Delete";
      newText4.className = "Delete";
      newText4.href = "./cart_empty.html";

      newCell.appendChild(newText);
      newCell2.appendChild(newText2);
      newCell3.appendChild(newText3);
      newCell4.appendChild(newText4);
    }
  });
  const result = document.getElementById("result");
  result.innerHTML = "Total Rs. " + price;
};
