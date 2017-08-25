import {createMenu} from '../../components/menu';
import './index.scss';

let menu = createMenu('-Main-', 'Other');
document.body.appendChild(menu);

console.log('in index.js');
