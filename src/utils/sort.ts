type RowType = {
  [key: string]: number | string;
};

export const sortByColumn = (
  data: RowType[],
  sortedColumn: string | null,
  sortOrder: 'asc' | 'desc',
  currentPage: number,
  itemsPerPage: number
) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedData = data.slice(indexOfFirstItem, indexOfLastItem);

  const sortedData = [...paginatedData].sort((a, b) => {
    if (sortedColumn) {
      if (a[sortedColumn] < b[sortedColumn]) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (a[sortedColumn] > b[sortedColumn]) {
        return sortOrder === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

  return sortedData;
};
