import { FC, useState } from 'react';
import Table from 'react-bootstrap/Table';

import { accountsData } from '../data/accountsData';
import { sortByColumn } from '../utils/sort';

const AccountsPage: FC = () => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);

  const handleSort = (columnName: string) => {
    setSortedColumn(columnName);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedData = sortByColumn(accountsData, sortedColumn, sortOrder);

  return (
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
        {sortedData.map(account => (
          <tr key={account.accountId}>
            <td>{account.accountId}</td>
            <td>{account.email}</td>
            <td>{account.authToken}</td>
            <td>{account.creationDate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AccountsPage;
