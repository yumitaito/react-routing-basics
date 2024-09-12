import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);
  const history = useHistory();
  const onClickBack = () => history.goBack();
  return (
    <>
      <h1>Page1のDetailA です</h1>
      <button onClick={onClickBack}>戻る</button>
    </>
  );
};
