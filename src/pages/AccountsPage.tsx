import { FC, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { accountsData } from '../data/accountsData';
import { sortByColumn } from '../utils/sort';
import PaginationComponent from '../components/PaginationComponent';
import Filter from '../components/Filter';

const AccountsPage: FC = () => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

  const [filterEmail, setFilterEmail] = useState<string | null>(null);

  const handleChange = (value: string | null) => {
    setFilterEmail(value);
  };

  const handleSort = (columnName: string) => {
    setSortedColumn(columnName);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedData = sortByColumn(accountsData, sortedColumn, sortOrder, currentPage, itemsPerPage);

  const totalPages = Math.ceil(accountsData.length / itemsPerPage);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const filteredData = sortedData.filter(account => {
    if (typeof account.email === 'string') {
      return !filterEmail || account.email.toLowerCase().includes(filterEmail.toLowerCase());
    }
    return;
  });

  return (
    <>
      <h1 className="fs-3 my-3">Accounts</h1>
      <Filter
        filteredBy="Emails"
        onFilterChange={handleChange}
        placeholderText="Enter the Keyword"
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => handleSort('accountId')}>Id</th>
            <th onClick={() => handleSort('email')}>Email</th>
            <th onClick={() => handleSort('authToken')}>AuthToken</th>
            <th onClick={() => handleSort('creationDate')}>CreationDate</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(account => (
            <tr key={account.accountId}>
              <td>
                <Link
                  className="link-body-emphasis link-underline link-underline-opacity-0"
                  to={'/profiles'}
                >
                  {account.accountId}
                </Link>
              </td>
              <td>
                <Link
                  className="link-body-emphasis link-underline link-underline-opacity-0"
                  to={'/profiles'}
                >
                  {account.email}
                </Link>
              </td>
              <td>
                <Link
                  className="link-body-emphasis link-underline link-underline-opacity-0"
                  to={'/profiles'}
                >
                  {account.authToken}
                </Link>
              </td>
              <td>
                <Link
                  className="link-body-emphasis link-underline link-underline-opacity-0"
                  to={'/profiles'}
                >
                  {account.creationDate}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default AccountsPage;
