import React from 'react';
import { Link } from 'react-router-dom';
export const Page404 = () => {
  return (
    <>
      <h1>ページが見つかりません</h1>
      <Link to="/">TOPにもどる</Link>
    </>
  );
};
