// import './userList.scss'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { DeleteOutline } from '@mui/icons-material';
// import { userRows as rows } from '../../../../dummyData';
import { Link } from 'react-router-dom';
import React from 'react';


const UserList = () => {
  // const [data, setData] = useState(rows)

  // const handleDelete = id => {
  //   setData(data.filter(item => item.id !== id))
  // }

  // const columns = [
  //   { field: "id", headerName: "ID", width: 100 },
  //   {
  //     field: "user",
  //     headerName: "Username",
  //     width: 200,
  //     renderCell: params => {
  //       return (
  //         <div className="userListField">
  //           <img src={params.row.avatar} alt="avatar" />
  //           {params.row.username}
  //         </div>
  //       )
  //     }
  //   },
  //   { field: "email", headerName: "Email", width: 200 },
  //   {
  //     field: "status",
  //     headerName: "Status",
  //     width: 90
  //   },
  //   {
  //     field: "transaction",
  //     headerName: "Transaction Volume",
  //     width: 160
  //   },
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 150,
  //     renderCell: params => {
  //       return (
  //         <>
  //           <Link to={`/user/${params.row.id}`}>
  //             <button className="editButton ">
  //               <svg
  //                 stroke="currentColor"
  //                 fill="none"
  //                 stroke-width="2"
  //                 viewBox="0 0 24 24"
  //                 stroke-linecap="round"
  //                 stroke-linejoin="round"
  //                 height="1em"
  //                 width="1em"
  //                 xmlns="http://www.w3.org/2000/svg"
  //               >
  //                 <path d="M12 20h9"></path>
  //                 <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
  //               </svg>
  //             </button>
  //           </Link>
  //           <DeleteOutline
  //             className="deleteButton"
  //             onClick={() => handleDelete(params.row.id)}
  //           />
  //         </>
  //       )
  //     }
  //   }
  // ]

  return (
    <div className="userListPage">
      <div className="box-item-header">
        <h2 className="userList">List User</h2>
        <Link to="/newUser">
          <button className="btn-create">Create</button>
        </Link>
      </div>

      {/* <DataGrid
        // rows={data}
        disableSelectionOnClick
        // columns={columns}
        pageSize={13}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> */}
    </div>
  )
}


export default UserList