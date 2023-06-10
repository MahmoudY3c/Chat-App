
// eslint-disable-next-line
import { jsx } from '@emotion/react';
import { AppHeader } from './Styles/defaults/App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from './Routes';
import Main from './Pages/Main'

//roboto fonts for MUI 
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

function App() {
  return (
    <Router>
        <Routes>
          {routes.map((route) => (
            <Route key={route.key} element={route.Element} path={route.path} />
          ))}
        </Routes>
    </Router>
  );
}

export default App;
