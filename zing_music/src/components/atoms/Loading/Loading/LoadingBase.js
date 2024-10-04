import ReactLoading from "react-loading";

function LoadingBase() {
  return (
    <div className="">
      <div className="flex h-[100vh] w-full items-center justify-center">
        <ReactLoading color="#fff" height={"20px"} width={"100px"} />
      </div>
    </div>
  );
}

export default LoadingBase;
