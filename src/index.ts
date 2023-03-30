type Data = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data: Data[]) => {
    const table = document.createElement("table");
    table.id = "data-table";

    // Create table header
    const headerRow = document.createElement("tr");
    const idHeader = document.createElement("th");
    idHeader.innerText = "ID";
    headerRow.appendChild(idHeader);
    const nameHeader = document.createElement("th");
    nameHeader.innerText = "Name";
    headerRow.appendChild(nameHeader);
    const emailHeader = document.createElement("th");
    emailHeader.innerText = "Email";
    headerRow.appendChild(emailHeader);
    const phoneHeader = document.createElement("th");
    phoneHeader.innerText = "Phone";
    headerRow.appendChild(phoneHeader);
    table.appendChild(headerRow);

    // Create table rows and data cells
    data.forEach((item) => {
      const row = document.createElement("tr");
      const idCell = document.createElement("td");
      idCell.innerText = item.id.toString();
      row.appendChild(idCell);
      const nameCell = document.createElement("td");
      nameCell.innerText = item.name;
      row.appendChild(nameCell);
      const emailCell = document.createElement("td");
      emailCell.innerText = item.email;
      row.appendChild(emailCell);
      const phoneCell = document.createElement("td");
      phoneCell.innerText = item.phone;
      row.appendChild(phoneCell);
      table.appendChild(row);
    });

    // Append table to document body
    document.body.appendChild(table);
  })
  .catch((error) => console.error(error));
