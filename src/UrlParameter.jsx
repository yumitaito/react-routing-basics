import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <>
      <h1>UrlParameterです</h1>
      <p>パラメーターは{id}です</p>
      <p>クエリパラメーターは{query.get('name')}です</p>
    </>
  );
};
