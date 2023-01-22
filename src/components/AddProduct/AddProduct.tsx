import { memo } from "react";
import { icon } from "../../constants";

const AddProduct: React.FC = () => {
  return (
    <div className="card content-center">
      <div className="inner-card content-center">
        <span className="text-gray-300">{icon.plus}</span>
      </div>
    </div>
  );
};

export default memo(AddProduct);
