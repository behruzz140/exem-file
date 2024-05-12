import { Fullscreen, Delete, Edit } from "@mui/icons-material";
import { DataGrid, GridColDef, GridPagination } from "@mui/x-data-grid";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const columns: GridColDef[] = [
  
  { field: "first_name", headerName: "First name", width: 150 },
  { field: "last_name", headerName: "Last name", width: 150 },
  { field: "gender", headerName: "Gender", width: 70 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 50,
  },
  { field: "phone_number", headerName: "Phone Number", width: 150 }, 
    {
    field: "email",
    headerName: "Email",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => row.email || "", 
  },
  { field: "id", headerName: "ID", width: 90 },
];

export default function DataTable(props: any) {
  const [pageSizeAnchorEl, setPageSizeAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const handleOpenPageSizeMenu = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setPageSizeAnchorEl(event.currentTarget);
  };

  const handleClosePageSizeMenu = () => {
    setPageSizeAnchorEl(null);
  };

  const handlePageSizeChange = (pageSize: number) => {
    props.onPageSizeChange(pageSize);
    handleClosePageSizeMenu();
  };

  const handleEdit = (id: any) => {
    console.log("Editing row with ID:", id);
  };

  const handleDelete = (id: any) => {
    const updatedData = props.data.filter((row: any) => row.id !== id);
    props.setData(updatedData);
  };

  const pageSizeOptions = [5, 10, 20, 50];

  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginBottom: 10 }}>
        <Button
          color="primary"
          aria-haspopup="true"
          aria-controls="page-size-menu"
          onClick={handleOpenPageSizeMenu}
          startIcon={<Fullscreen />}
        >
          Full Screen
        </Button>
        <Menu
          id="page-size-menu"
          anchorEl={pageSizeAnchorEl}
          open={Boolean(pageSizeAnchorEl)}
          onClose={handleClosePageSizeMenu}
        >
          {pageSizeOptions.map((option) => (
            <MenuItem key={option} onClick={() => handlePageSizeChange(option)}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <DataGrid
        rows={props.data}
        columns={[
          ...columns,
          {
            field: "actions",
            headerName: "Actions",
            width: 220,
            sortable: false,
            
            renderCell: (params) => (
              <div>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<Edit />}
                  onClick={() => handleEdit(params.row.id)}
                  style={{ marginRight: '5px' }}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<Delete />}
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </Button>
              </div>
            ),
          },
        ]}
        pageSizeOptions={[]} // Disable built-in pageSizeOptions
        components={{
          Pagination: () => (
            <GridPagination
              rowCount={props.data.length}
              pageSize={props.pageSize}
              page={props.currentPage}
              onPageChange={props.onPageChange}
              disablePrev={props.currentPage === 0}
              disableNext={
                props.currentPage >=
                Math.ceil(props.data.length / props.pageSize) - 1
              }
              rowsPerPageOptions={[]} // Disable built-in rowsPerPageOptions
              rowsPerPage={props.pageSize}
            />
          ),
        }}
        checkboxSelection
      />
    </div>
  );
}










