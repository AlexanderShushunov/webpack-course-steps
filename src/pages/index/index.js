import {createMenu} from '../../components/menu';
import './index.scss';
import 'normalize.css';

let menu = createMenu('-Main-', 'Other');
document.body.appendChild(menu);

console.log('in index.js');
