export default function ListBanner({ data }) {
  return (
    <div className="text-white">
      <div className="flex flex-row">
        {data.map((item, index) => (
          <div className="w-[40%] p-2" key={index}>
            <img className="rounded-lg w-full h-full" src={item.banner} />
          </div>
        ))}
      </div>
    </div>
  );
}
