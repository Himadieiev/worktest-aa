import { FC } from 'react';
import Table from 'react-bootstrap/Table';

import { accountsData } from '../data/accountsData';

const AccountsPage: FC = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>AuthToken</th>
          <th>CreationDate</th>
        </tr>
      </thead>
      <tbody>
        {accountsData.map(account => (
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
