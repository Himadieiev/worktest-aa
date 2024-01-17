type RowType = {
  [key: string]: number | string;
};

export const sortByColumn = (
  data: RowType[],
  sortedColumn: string | null,
  sortOrder: 'asc' | 'desc'
) => {
  return [...data].sort((a, b) => {
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
};
