import React from 'react';
import IChildren from 'src/Types/React';
import BaseLayout from '../base';

const UserDetailLayout: React.FC<IChildren> = ({ children }) => {
  return <BaseLayout>{children}</BaseLayout>;
};

export default UserDetailLayout;
