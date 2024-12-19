function Menu({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex w-full items-center gap-2 px-4 py-3 text-white hover:bg-[#ffffff1a]"
    >
      {item.icon ? (
        <div className="w-[10%]">{item.icon}</div>
      ) : (
        <img className="w-[10%] rounded-lg" src={item.urlImg} />
      )}

      <div className="flex-1">{item.title}</div>
    </div>
  );
}
export default Menu;
