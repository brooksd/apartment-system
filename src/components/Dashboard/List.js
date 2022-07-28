import React from "react";

const List = ({ residents, handleEdit, handleDelete }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: null,
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No. </th>
            <th>First Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>date</th>
            <th colspan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {residents.length > 0 ? (
            residents.map((resident, i) => (
              <tr key={resident.id}>
                <td>{i + 1}</td>
                <td>{resident.firstName}</td>
                <td>{resident.lastName}</td>
                <td>{resident.email}</td>
                <td>{formatter.format(resident.salary)}</td>
                <td>{resident.date} </td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(resident.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(resident.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Residents</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
