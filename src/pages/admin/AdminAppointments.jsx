import React from 'react';
import {AdminBox} from "../../component/AdminBox";
import {DataGrid, faIR} from '@mui/x-data-grid';
import axios from "axios";
import persianDate from "persian-date";

const getOps = (ops) => {
    let finals = "";
    console.log(ops)
    ops.forEach(value => {
        switch (value) {
            case "antiBlemishPackage":
                finals += "پکیج ضدلک "
                break;
            case "eyeHealingPackage":
                finals += " پکیج درمان دورچشم"
                break;
            case "pollogenTherapy":
                finals += "پلاژن تراپی "
                break;
            case "carboxyTherapy":
                finals += "کربوکسی تراپی "
                break;
            case "fatControlPackage":
                finals += "پکیج کنترل چربی "
                break;
            case "poresHealingPackage":
                finals += "پکیج درمان جوش "
                break;
            case "facial":
                finals += "فیشال "
                break;
            case "caviarTherapyBotox":
                finals += "بوتاکس خاویارتراپی "
                break;
            case "mesoNeedlingPackage":
                finals += "پکیج مزونیدلینگ "
                break;
            case "laserTherapy":
                finals += "لیزرتراپی "
                break;
            case "RFFractional":
                finals += "آر اف فرکشنال "
                break;
            case "mesoTherapy":
                finals += "مزوتراپی "
                break;
            default:
            // code block
        }
    })
    return finals;
}

export function AdminAppointments(props) {
    const [rows, setRows] = React.useState([]);
    React.useEffect(() => {
        axios.get("https://nice-gold-oyster-slip.cyclic.app/api/v1/appointments", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        }).then(r => {
            console.log(r.data)
            getOps(r.data.data[5]['procedures'])
            const array = r.data.data;
            setRows(array.map(item => ({
                id: `WD-${(item.customer._id).slice(0, 7)}`,
                lastName: item.customer.lastname,
                firstName: item.customer.firstname,
                phone: item.customer.phone,
                date: new persianDate(item.date).format("D MMMM YYYY"),
                hour: item.time,
                status: (item.status === 'pending') ? 'ثبت شده' : (item.status === 'pending') ? 'انجام شده' : "لفو شده",
                ops: getOps(item.procedures)
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

        {field: 'date', headerName: 'تاریخ', width: 130},
        {field: 'hour', headerName: 'ساعت', width: 130},
        {field: 'status', headerName: 'وضعیت', width: 130},
        {
            field: 'ops',
            headerName: 'عملیات ها',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 320,
            // valueGetter:,
        },
    ];

    return (
        <AdminBox width={1294/2}>
            <div style={{height: 527,}}>
                <DataGrid
                    localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {page: 0, pageSize: 10},
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            </div>
        </AdminBox>
    );
}
