import React from "react";
import Table from "react-bootstrap/Table";

const SectionCustom = ({users}) => {
    console.log(users);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{users[0].id}</td>
          <td>{users[0].name}</td>
          <td>{users[0].lastname}</td>
          <td>{users[0].age}</td>
        </tr>
        <tr>
          <td>{users[1].id}</td>
          <td>{users[1].name}</td>
          <td>{ users[1].lastname}</td>
          <td>{users[1].age}</td>
        </tr>
        <tr>
          <td>{users[2].id}</td>
          <td>{users[2].name}</td>
          <td>{users[2].lastname}</td>
          <td>{users[2].age}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default SectionCustom;
