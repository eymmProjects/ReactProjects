function Table({ data, config, keyFn }) {
  // return <div>{data.length}</div>;

  const renderedHeader = config.map((column) => {
    return (
      <th
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        key={column.key}
      >
        {column.label}
      </th>
    );
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td
          key={column.label}
          className="  px-6 py-4 whitespace-nowrap text-sm text-gray-500"
        >
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr key={keyFn(rowData)}>
        {renderedCells}
        {/* <td className="  px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {config[0].render(rowData)}
        </td>
        <td className="  px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <div className={`p-2 m-2    ${config[1].render(rowData)}`}></div>
        </td>
        <td className="  px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {config[2].render(rowData)}
        </td> */}
      </tr>
    );
  });

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>{renderedHeader}</tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {renderedRows}
      </tbody>
    </table>
  );
}

export default Table;
