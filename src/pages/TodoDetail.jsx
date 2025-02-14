import { useParams } from "react-router";

const TodoDetail = () => {
  const { id } = useParams();

  return <div>TodoDetail ID : {id}</div>;
};

export default TodoDetail;
