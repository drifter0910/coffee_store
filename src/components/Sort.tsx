import React, { FC } from 'react';
import { Select } from 'antd';
import { PageState } from '../Pages/Shop/Shop';
interface Props {
  setPageState: React.Dispatch<React.SetStateAction<PageState>>;
  products: Array<any>;
}
const Sort: FC<Props> = ({ setPageState, products }) => {
  const { Option } = Select;
  const handleChange = (value: string) => {
    // ASCENDING
    if (value === 'Asc') {
      setPageState((prevState) => {
        return {
          ...prevState,
          order: 'asc',
          sortBy: 'price',
          l: 12,
        };
      });
    }
    // DESCENDING
    else if (value === 'Desc') {
      setPageState((prevState) => {
        return {
          ...prevState,
          order: 'desc',
          sortBy: 'price',
          l: 12,
        };
      });
    }
    // DEFAULT
    else if (value === 'Default') {
      setPageState((prevState) => {
        return {
          ...prevState,
          l: 12,
          sortBy: '',
          order: '',
        };
      });
    } else if (value === 'All') {
      setPageState((prevState) => {
        return {
          ...prevState,
          l: products.length,
          p: 1,
        };
      });
    }
  };

  return (
    <div>
      <Select
        defaultValue="Default"
        style={{
          width: 120,
        }}
        onChange={handleChange}
      >
        <Option value="Default">Default</Option>
        <Option value="Asc">Asc price</Option>
        <Option value="Desc">Desc price</Option>
        <Option value="All">All Product</Option>
      </Select>
    </div>
  );
};

export default Sort;
