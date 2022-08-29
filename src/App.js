import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { addUserList } from './actions';
import Layout from './layout/layout';
function App() {
  // const users = useSelector((state)=>state.GetUserList)
  // const dispatch = useDispatch()
  // console.log(users)
  return (
    <>
      <Layout />
      {/* <a onClick={()=>dispatch(addUserList({name:"anjali"}))}>Add User</a> */}
    </>
  );
}

export default App;
