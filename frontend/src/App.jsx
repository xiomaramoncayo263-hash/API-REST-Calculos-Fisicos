import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './componentes/sidebar'
import Velocidad from './componentes/velocidad'
import Distancia from './componentes/distancia'
import Tiempo from './componentes/tiempo'
import Fuerza from './componentes/fuerza'
import Peso from './componentes/peso'
import EnergiaCinetica from './componentes/energiaCinetica'

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 p-6'>
        <Routes>
          <Route path="/" element={<Navigate to="/velocidad" />} />
          <Route path="/velocidad" element={<Velocidad />} />
          <Route path="/distancia" element={<Distancia />} />
          <Route path="/tiempo" element={<Tiempo />} />
          <Route path="/fuerza" element={<Fuerza />} />
          <Route path="/peso" element={<Peso />} />
          <Route path="/energiaCinetica" element={<EnergiaCinetica />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
