import React from 'react';
import {Provider} from "react-redux"
import store from './redux/Store'
import Index from './component'

function App() {
  return (
    <div>
      <Provider store={store} >
        <Index />
      </Provider>
    </div>
  );
}

export default App;