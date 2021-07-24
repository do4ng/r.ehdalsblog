export default function SortObj(data: object) {
  return Object.entries(data)
    .sort((a, b) => a[1] - b[1])
    .reduce(
      (_sortedObj, [k, v]) => ({
        ..._sortedObj,
        [k]: v,
      }),
      {}
    );
}
