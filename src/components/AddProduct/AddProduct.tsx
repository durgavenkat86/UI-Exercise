import { memo } from 'react';
import { icon } from '../../constants';

const AddProduct: React.FC = () => {
  return (
    <div className="w-44 h-44 bg-white border border-gray-200 
                rounded-md shadow-sm flex justify-center items-center">
      <div className="bg-gray-200 rounded-sm flex justify-center items-center w-8 h-8">
        <span className="text-gray-300">{icon.plus}</span>
      </div>
    </div>
  )
}

export default memo(AddProduct);