import { FC, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { campaignsData } from '../data/campaingsData';
import { sortByColumn } from '../utils/sort';
import PaginationComponent from '../components/PaginationComponent';

const CampaignsPage: FC = () => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;

  const handleSort = (columnName: string) => {
    setSortedColumn(columnName);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedData = sortByColumn(
    campaignsData,
    sortedColumn,
    sortOrder,
    currentPage,
    itemsPerPage
  );

  const totalPages = Math.ceil(campaignsData.length / itemsPerPage);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <h1 className="fs-3 my-3">Campaigns</h1>
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
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default CampaignsPage;
