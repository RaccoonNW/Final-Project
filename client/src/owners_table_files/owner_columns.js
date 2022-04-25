// import { useState } from "react"
// import Houses from "../houses_table_files/Houses"

// export const ShowHousesButton = (row) => {
//     const [houseList, setHouseList] = useState([])
//     const [showHouses, setShowHouses] = useState({ value: "Show Houses" })
//     const handleClick = async () => {
//         const result = await fetch('/houses').then((r) => {
//             if (r.ok) {
//               r.json().then((data) => setHouseList(data))
//             } else {
//               r.json().then((data) => console.log(data))
//             }
//           });
//         setShowHouses(prev => ({
//             value: prev.value === "Show Houses" ? "Hide Houses" : "Show Houses"
//         }))
//     }
//     return (
//         <button
//             key={row.id}
//             id={row.id}
//             onClick={handleClick}
//             value={showHouses.value}
//         >
//             {showHouses.value}
//         </button>
//     )
// }

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