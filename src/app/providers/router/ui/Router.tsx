import { Landing } from '@/pages';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default Router;
