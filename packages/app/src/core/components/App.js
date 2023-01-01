import { Icon } from '@avatar/ui';

import CSS from './styles/App.module.css';

export const App = () => {
  return (
    <div className={CSS.app}>
      <header className={CSS.app_header}>
        <Icon size='large'/>
        <p>
          Edit <code>src/app.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}
