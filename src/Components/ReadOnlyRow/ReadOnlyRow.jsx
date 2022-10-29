import React from "react";
// import Index from "../../pages/Index/Index";

const ReadOnlyRow = ({
  staff,
  handleDetailClick,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <tr key={staff.id}>
      <td>{staff.ho_ten}</td>
      <td>{staff.ngay_sinh}</td>
      <td>{staff.gioi_tinh}</td>
      <td>{staff.so_dien_thoai}</td>
      <td>{staff.dia_chi}</td>
      <td>{staff.ten_chuc_vu}</td>
      <td>{staff.he_so_luong}</td>
      <td>
        <button
          className="btn__detail"
          type="button"
          onClick={(event) => handleDetailClick(event, staff)}
        >
          Detail
        </button>
        <button
          className="btn__edit"
          type="button"
          onClick={(e) => handleEditClick(e, staff)}
        >
          Edit
        </button>
        <button
          className="btn__delete"
          type="button"
          onClick={() => handleDeleteClick(staff.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
