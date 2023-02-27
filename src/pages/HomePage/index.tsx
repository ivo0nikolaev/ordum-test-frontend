import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const HomePage = () => {
  // const { user } = useSelector((state) => state.user);
  const { user } = useSelector((state: RootState) => state.user);
  // console.log(user)
  // const user = useSelector((state) => state.user);
  return (
    <div className="flex flex-col">
      <h1>Home Page</h1>
      {
        user.isLogged ?
        <div>
        <p>User: {user?.name}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p> <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p> <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p> <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>
      <p>User Wallet: {user?.wallet}</p>

      </div> :
      <p>User not logged</p>
      }
      
    </div>
  );
};

export default HomePage;
