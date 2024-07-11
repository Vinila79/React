import Table from "react-bootstrap/Table";
import ButtonComponent from "../button/button";

function CustomTable({
  tableRows = [
    {
      username: "abc",
      password: 123,
    },
    {
      username: "abcd",
      password: 1234,
    },
    {
      username: "abcd",
      password: 1234,
    },
  ],
  handleDelete,
  handleUpdate,
}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>User Name</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {tableRows.map((each, index) => {
          return (
            <>
              <tr>
                <td>{index + 1}</td>
                <td>{each.username}</td>
                <td>{each.password}</td>
                <td>
                  <ButtonComponent
                    text={"delete"}
                    onPress={() => handleDelete(index)}
                  />
                  <ButtonComponent
                    text={"update"}
                    onPress={() => handleUpdate(index)}
                  />
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </Table>
  );
}

export default CustomTable;
