import React, { useEffect,useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const respone = await axios.get(`${url}/api/food/list`);
    if (respone.data.success) {
      setList(respone.data.food);
    } else {
      toast.error(respone.data.message);
    }
  };

  const removeFood = async (foodId) => {
    const respone = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if (respone.data.success) {
      fetchList();
      toast.success(respone.data.message);
    } else {
      toast.error(respone.data.message);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index) => {
          return (
            <div key={index} className="list-table-format" >
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p className="cursor" onClick={() => removeFood(item._id)}>X</p>
              </div>
          )
        })}
      </div>
    </div>
  );
};

export default List;
