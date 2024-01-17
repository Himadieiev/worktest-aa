import { FC } from 'react';
import Table from 'react-bootstrap/Table';

import { campaignsData } from '../data/campaingsData';

const CampaignsPage: FC = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Clicks</th>
          <th>Cost</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {campaignsData.map(campaign => (
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
