import { FC, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

import { profilesData } from '../data/profilesData';
import { sortByColumn } from '../utils/sort';
import PaginationComponent from '../components/PaginationComponent';
import Filter from '../components/Filter';

const ProfilesPage: FC = () => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

  const [filterCountry, setFilterCountry] = useState<string | null>(null);

  const handleChange = (value: string | null) => {
    setFilterCountry(value);
  };

  const handleSort = (columnName: string) => {
    setSortedColumn(columnName);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedData = sortByColumn(profilesData, sortedColumn, sortOrder, currentPage, itemsPerPage);

  const totalPages = Math.ceil(profilesData.length / itemsPerPage);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const filteredData = sortedData.filter(account => {
    if (typeof account.country === 'string') {
      return !filterCountry || account.country.toLowerCase().includes(filterCountry.toLowerCase());
    }
    return;
  });

  return (
    <>
      <h1 className="fs-3 my-3">Profiles</h1>
      <Filter
        filteredBy="Countries"
        onFilterChange={handleChange}
        placeholderText="Enter the Keyword"
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => handleSort('profileId')}>Id</th>
            <th onClick={() => handleSort('country')}>Country</th>
            <th onClick={() => handleSort('marketplace')}>Marketplace</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(profile => (
            <tr key={profile.profileId}>
              <td>
                <Link
                  className="link-body-emphasis link-underline link-underline-opacity-0"
                  to={'/campaigns'}
                >
                  {profile.profileId}
                </Link>
              </td>
              <td>
                <Link
                  className="link-body-emphasis link-underline link-underline-opacity-0"
                  to={'/campaigns'}
                >
                  {profile.country}
                </Link>
              </td>
              <td>
                <Link
                  className="link-body-emphasis link-underline link-underline-opacity-0"
                  to={'/campaigns'}
                >
                  {profile.marketplace}
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

export default ProfilesPage;
