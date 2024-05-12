import React from 'react';
import {AdminBox} from "../../component/AdminBox";
import {DataGrid, faIR} from '@mui/x-data-grid';
import axios from "axios";

function AdminUserList(props) {
    const [rows, setRows] = React.useState([

    ]);
    React.useEffect(() => {
        axios.get("https://nice-gold-oyster-slip.cyclic.app/api/v1/users", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        }).then(r => {
            console.log(r.data)
            const array = r.data.data;
            setRows(array.map(item => ({
                id: `WD-${(item._id).slice(0,7)}`,
                lastName: item.lastname,
                firstName: item.firstname,
                phone: item.phone
            })))
        }).catch()
    }, []);

    const columns = [
        {field: 'id', headerName: 'ID', width: 110},
        {field: 'firstName', headerName: 'نام', width: 130},
        {field: 'lastName', headerName: 'نام خانوادگی', width: 130},
        {
            field: 'phone',
            headerName: 'شماره همراه',
            type: 'number',
            width: 130,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    return (
        <AdminBox width={744/2}>
            <div style={{height: 400,}}>
                <DataGrid
                    localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {page: 0, pageSize: 5},
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </AdminBox>
    );
}

export default AdminUserList;
