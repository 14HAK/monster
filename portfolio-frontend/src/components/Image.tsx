import React from "react";
/* <img src="" className="h-20 rounded-sm w-36" alt="" />; */

interface TImageProps {
  className: string;
  src: string;
}

const Image = ({ className, src }: TImageProps): React.ReactElement => {
  return (
    <>
      <img className={`${className}`} src={`${src}`} alt={src} />
    </>
  );
};

export default Image;
