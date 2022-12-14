import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';

import './assets/css/App.css'
import './assets/css/Media.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
         <Route path='/' element={<Dashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
