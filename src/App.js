import React from 'react';
import {Provider} from "react-redux"
import store from './redux/Store'
import Login from './login'



function App() {
  return (
    <div>
      <Provider store={store} >
        <Login />
      </Provider>
    </div>
  );
}

export default App;