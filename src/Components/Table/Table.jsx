import { DataType, EditingMode, SortingMode } from "ka-table/enums";
import './table.css'
import { Table } from "ka-table";
import Headroom from "react-headroom";

const dataArray = Array(10)
  .fill(undefined)
  .map((_, index) => ({
    column1: `column:1 row:${index}`,
    column2: `column:2 row:${index}`,
    column3: `column:3 row:${index}`,
    column4: `column:4 row:${index}`,
    id: index,
  }));

const Tables = () => {
  return (
    <div className="min-w-[1100px] gap-10 p-4 mt-12">
  <Headroom className="headroom " style={{
  webkitTransition: 'all .5s ease-in-out',
  mozTransition: 'all .5s ease-in-out',
  oTransition: 'all .5s ease-in-out',
  transition: 'all .5s ease-in-out'
}}>
  <h1>You can put anything youd like inside the Headroom Component</h1>
</Headroom>
      <Table
        columns={[
          { key: "column1", title: "Column 1", dataType: DataType.String },
          { key: "column2", title: "Column 2", dataType: DataType.String },
          { key: "column3", title: "Column 3", dataType: DataType.String },
          { key: "column4", title: "Column 4", dataType: DataType.String },
        ]}
        data={dataArray}
        editingMode={EditingMode.Cell}
        rowKeyField={"id"}
        sortingMode={SortingMode.Single}
      />
    </div>
  );
};

export default Tables;
