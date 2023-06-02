import React from "react";
import styles from "./styles/patientStyles.module.scss";
import { Table } from "react-bootstrap";
function Patients() {
  const users = [
    {
      name: "john",
      id: "123456",
      tasks: "5",
      age: "25",
    },
  ];
  const titles = Object.keys(users[0]);
  console.log({ titles });
  return (
    <div>
      <Table striped="columns">
        <thead>
          <tr>
            <th>#</th>
            {titles.map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((each , index) => (
            <tr>
              <td>{index}</td>
              <td>{each.name}</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Patients;
