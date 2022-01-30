import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import Avatar from 'components/common/Avatar';
import CardDropdown from './CardDropdown';
import Flex from 'components/common/Flex';
import IconItem from 'components/common/icon/IconItem';
import SoftBadge from 'components/common/SoftBadge';
import { RolesData } from './RolesData';
import React from 'react';
import { Card, Col, Form, Image, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const columns = [
  {
    accessor: 'name',
    Header: 'Name',
    headerProps: {
      className: 'py-3'
    },
    Cell: rowData => {
      return (
        <Link to="#!">
          <Flex alignItems="center">
            <h6 className="mb-0 ps-2 text-800">{rowData.row.original.name}</h6>
          </Flex>
        </Link>
      );
    }
  },
  {
    accessor: 'email',
    Header: 'Email',
    Cell: rowData => {
      return (
        <a href={`mailto:${rowData.row.original.email}`} className="mb-0">
          {rowData.row.original.email}
        </a>
      );
    }
  },
  {
    accessor: 'roles',
    Header: 'Roles',
    headerProps: {
        className: 'px-5'
      },
    Cell: rowData => {
        return (

        <Form.Select size="sm" className="px-2 bg-transparent rounded-pill w-sm-50">
          <option value="1">Team Lead</option>
          <option value="2">Developer</option>
          <option value="3">Tester</option>
          <option value="4">Analyst</option>
        </Form.Select>
      );
    }
  },

];

const Roles = () => {
  return (
    <AdvanceTableWrapper
      columns={columns}
      data={RolesData}
      sortable
      pagination
      perPage={10}
    >
      <Card>
        <Card.Body className="p-0">
          <AdvanceTable
            table
            headerClassName="bg-200 text-900 text-nowrap align-middle"
            rowClassName="align-middle white-space-nowrap"
            tableProps={{
              className: 'fs--1 mb-0 overflow-hidden'
            }}
          />
        </Card.Body>
      </Card>
    </AdvanceTableWrapper>
  );
};

export default Roles;
