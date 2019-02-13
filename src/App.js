import React, { Fragment, useState } from 'react';
import './App.css';
import Tab from './components/Tab.tsx'

const App = () => {
  const [componentList, setComponentList] = useState([])
  return (
    <Fragment>
      <header>
        <nav className="nav">SOME COOL APP</nav>
      </header>
      <main>
        <section className="tabbed">
          {componentList.map(c => <Tab page={c} />)}
        </section>
      </main>
    </Fragment>
  );
}

export default App;
