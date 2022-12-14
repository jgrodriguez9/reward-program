import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';

import './assets/css/App.css'
import './assets/css/Media.css'
import { Customer } from './pages/Customer';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
         <Route path='/' element={<Dashboard />} />
         <Route path='/customer/:id' element={<Customer />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
