// Root.jsx
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;