interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 21,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'Michael',
  lastName: 'Smith',
  age: 24,
  location: 'Lagos',
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tableBody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;

  row.append(firstNameCell, locationCell);
  tableBody.append(row);
});

table.append(tableBody);

const hostElement: HTMLElement | null = document.getElementById('app');

if (hostElement) {
  hostElement.append(table);
} else {
  document.body.append(table);
}

