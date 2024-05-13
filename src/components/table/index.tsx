import { Fullscreen } from "@mui/icons-material";
import { DataGrid, GridColDef, GridPagination } from "@mui/x-data-grid";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const columns: GridColDef[] = [
  { field: "first_name", headerName: "First name", width: 180 },
  { field: "last_name", headerName: "Last name", width: 180 },
  { field: "gender", headerName: "Gender", width: 70 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 100,
  },
  {
    field: "email",
    headerName: "Email",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 250,
    valueGetter: (value, row) => row.email || "", 
  },
  { field: "id", headerName: "ID", width: 300 },
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
         This Page For Watching the Users Status
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
        columns={columns}
        pageSizeOptions={[]} 
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
              rowsPerPageOptions={[]} 
              rowsPerPage={props.pageSize}
            />
          ),
        }}
      />
    </div>
  );
}
