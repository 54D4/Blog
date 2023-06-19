export const TextArea = ({ name, rows, cols, ref }) => {
  return (
    <div className="flex flex-col my-4">
      <h1 for={name} className="text-2xl">
        {name}
      </h1>
      <textarea
        className="border resize-none rounded-md p-5 shadow-md"
        rows={rows}
        cols={cols}
        ref={ref}
        placeholder={name}
        name={name}
        required
      />
    </div>
  );
};
