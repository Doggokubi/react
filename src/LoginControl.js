import Login from './Login.js';
import Logout from './Logout.js';

function LoginControl(props) {
    const isLogin = props.isLogin;
    return (
      <>
        { isLogin ? <Login/> : <Logout/> }
      </>
    );
  }
  export default LoginControl;