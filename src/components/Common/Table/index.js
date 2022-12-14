import styled from "styled-components";

const TableResponsive = styled.div`
    overflow-x: auto;
`;

const TableStyle = styled.table`
    width: 100%;
    margin-bottom: 1rem;
    color: #000;
    border-color: #dee2e6;
    border-collapse: collapse;
    display: table;
    border: 1px solid #ccc;

    tbody>tr:nth-of-type(odd){
        background-color: #eeeeee8b;
    }

    tr td,
    tr th {
        padding: 5px;
    }

    td, th {
        border: 1px solid #ccc;
    }

    tr th {
        font-weight: bold;
    }
    tr{
        display: table-row;
    }
    th{
        display: table-cell
    }
`;

function Table(props){

    return (
        <TableResponsive>
            <TableStyle>{props.children}</TableStyle>
        </TableResponsive>
    )
}

export { Table } 