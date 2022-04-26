// import { useState } from "react"
// import Houses from "../houses_table_files/Houses"


export const OWNERS_COLUMNS = [
    // {
    //     id: "showhouses",
    //     Header: 'Show Houses / Hide Houses',
    //     Cell: ({ row }) => <ShowHousesButton {...row} />
    // },
    {
        Header: 'Name',
        accessor: 'name'
    },
    {
        Header: 'Number',
        accessor: 'number'
    },
    {
        Header: 'Email',
        accessor: 'email'
    },
    {
        Header: 'Notes',
        accessor: 'notes'
    }
]