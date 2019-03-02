import * as offline from 'offline-plugin/runtime';
import M from 'materialize-css';
import './app.scss';
import './components/welcome/welcome.js';

offline.install({ onUpdateReady: () => offline.applyUpdate() });
M.AutoInit();

