import React from "react";
import { 
  BrowserRouter as Router,
  Routes ,
  Route,
  Link,
  Navigate
} from 'react-router-dom';
import Users from './users/pages/user';

const App = () => {
  return <Router>
    <Routes>
        <Route exact path='/' element={<Users />} />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
    </Routes>
  </Router>;
}

export default App;
