export default function Tag(props: { text: string }) {
  return (
    <div className='px-4 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full'>
      {'#' + props.text}
    </div>
  );
}
