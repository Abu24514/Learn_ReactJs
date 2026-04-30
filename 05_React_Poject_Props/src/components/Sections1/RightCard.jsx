
const RightCard = (props) => {
  return (
    <div className="h-full w-80 bg-gray-900 rounded-3xl relative overflow-hidden shrink-0">
      <img
        className="h-full opacity-65 w-full object-cover"
        src={props.img}
        alt=""
      />
      <div className="absolute top-0 left-0 h-full w-full  py-2 px-4 flex flex-col justify-between">
        <h4 className="w-10 h-10 bg-white font-semibold text-xl rounded-full flex justify-center items-center mt-2">
         {props.id+1}
        </h4>
        <div>
          <p className="text-xl leading-normal mb-8 text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, velit iste deleniti ullam consequatur quo!
          </p>
          <div className="mb-4 flex  justify-between gap-1">
            <button className="py-1 px-5 text-white  font-medium bg-blue-500 rounded-4xl">
              {props.tag}
            </button>
            <button className="py-1 px-5 text-white  bg-blue-500 rounded-4xl">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
