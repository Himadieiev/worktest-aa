import { ChangeEvent, FC } from 'react';
import Form from 'react-bootstrap/Form';

interface FilterProps {
  filteredBy: string;
  onFilterChange: (value: string | null) => void;
  placeholderText: string;
}

const Filter: FC<FilterProps> = ({ filteredBy, onFilterChange, placeholderText }) => {
  return (
    <>
      <Form.Label htmlFor="filter">{`Filtered By ${filteredBy}`}</Form.Label>
      <Form.Control
        type="text"
        id="filter"
        placeholder={placeholderText}
        className="mb-3"
        onChange={(e: ChangeEvent<HTMLInputElement>) => onFilterChange(e.target.value)}
      />
    </>
  );
};

export default Filter;
