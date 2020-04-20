import React from 'react';
import MaterialTable from 'material-table';

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { FormBuilder } from 'cb-react-forms';

export default function FormsTable() {
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Created by', field: 'person' },
      { title: 'Company', field: 'company' },
      { title: 'Created at', field: 'createdAt', type: 'date' },
      { title: 'Updated at', field: 'updatedAt', type: 'date' },
    ],
    data: [
      {
        name: 'TestForm',
        person: 'jane.doe@test.com',
        company: 'Venture Creations',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Form2',
        person: 'jane.doe@test.com',
        company: 'Venture Creations',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'B56',
        person: 'jane.doe@test.com',
        company: 'Venture Creations',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Document',
        person: 'jane.doe@test.com',
        company: 'Venture Creations',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Form',
        person: 'jane.doe@test.com',
        company: 'Venture Creations',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Update',
        person: 'jane.doe@test.com',
        company: 'Venture Creations',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  });

  const items = [
    {
      key: "Header",
      name: "Header Text",
      icon: "fa fa-header"
    },
    {
      key: "Label",
      name: "Label",
      icon: "fa fa-font"
    },
    {
      key: "Paragraph",
      name: "Paragraph",
      icon: "fa fa-paragraph"
    },
    {
      key: "LineBreak",
      name: "Line Break",
      icon: "fa fa-arrows-h"
    },
    {
      key: "Dropdown",
      name: "Dropdown",
      icon: "fa fa-caret-square-o-down"
    },
    {
      key: "Tags",
      name: "Tags",
      icon: "fa fa-tags"
    },
    {
      key: "Checkboxes",
      name: "Checkboxes",
      icon: "fa fa-check-square-o"
    },
    {
      key: "RadioButtons",
      name: "Multiple Choice",
      icon: "fa fa-dot-circle-o"
    },
    {
      key: "TextInput",
      name: "Text Input",
      icon: "fa fa-font"
    },
    {
      key: "NumberInput",
      name: "Number Input",
      icon: "fa fa-plus"
    },
    {
      key: "TextArea",
      name: "Multi-line Input",
      icon: "fa fa-text-height"
    },
    {
      key: "Rating",
      name: "Rating",
      icon: "fa fa-star"
    },
    {
      key: "HyperLink",
      name: "Web site",
      icon: "fa fa-link"
    },
    {
      key: "Range",
      name: "Range",
      icon: "fa fa-sliders"
    },
    {
      key: "Email",
      name: "Email",
      icon: "fa fa-at"
    },
    {
      key: "Date",
      name: "Date",
      icon: "fa fa-calendar"
    },
    {
      key: "Signature",
      name: "Signature",
      icon: "fa fa-edit"
    }
  ];
   
  const onSubmit = (formData) => {
    console.log(formData)
    window.print();
  };
  
  const Example = props => (
    <FormBuilder
      onSubmit={onSubmit}  // function
      items={items}     // array of toolbar items
    />
  );

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <MaterialTable
      icons={tableIcons} 
      title="Forms Table"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
    <Button onClick={handleOpen} variant="contained" color="primary" style={{ backgroundColor: '#F76902', marginTop: '16px' }}>
      Create New Document
    </Button>
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={handleClose}
      style={{overflow:'scroll'}}
    >
      <div style={{position: 'absolute', top: '5%', left: '35%', width: '800px', maxHeight: '300%', backgroundColor: 'white'}}>
        <Example />
      </div>
    </Modal>
    </div>
  );
}
