import Users from "./components/users/Users";
import User from "./components/user/User";
import Post from "./components/post/Post";
import Comment from "../src/components/comment/Comment";
function App() {
  return (
      <div className={'All'}>
        <Users/>
          <User/>
          <Post/>
          <Comment/>
      </div>
  );
}
export default App;
