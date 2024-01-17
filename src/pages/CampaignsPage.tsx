import { FC, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { campaignsData } from '../data/campaingsData';
import { sortByColumn } from '../utils/sort';

const CampaignsPage: FC = () => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);

  const handleSort = (columnName: string) => {
    setSortedColumn(columnName);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedData = sortByColumn(campaignsData, sortedColumn, sortOrder);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th onClick={() => handleSort('campaignId')}>Id</th>
          <th onClick={() => handleSort('clicks')}>Clicks</th>
          <th onClick={() => handleSort('cost')}>Cost</th>
          <th onClick={() => handleSort('date')}>Date</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map(campaign => (
          <tr key={campaign.campaignId}>
            <td>{campaign.campaignId}</td>
            <td>{campaign.clicks}</td>
            <td>{campaign.cost}</td>
            <td>{campaign.date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CampaignsPage;
