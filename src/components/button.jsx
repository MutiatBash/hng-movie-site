export const Button = ({ className, text, img }) => {
  return (
    <div className="">
      <button className={` text-white rounded-md ${className}`}>{img}{text}</button>
    </div>
  );
};
