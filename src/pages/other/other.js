import {createMenu} from '../../components/menu';
import 'normalize.css';

let menu = createMenu('Main', '-Other-');
document.body.appendChild(menu);

console.log('in other.js');
