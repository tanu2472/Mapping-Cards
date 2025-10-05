import { createRoot } from 'react-dom/client';
import Home from './Home.jsx';
import './Home.css';
import './components/StudentsCard/StudentCard.css';
import StudentCard from './components/StudentsCard/StudentCard.jsx';
import './configs/students.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    
 <Home />);


