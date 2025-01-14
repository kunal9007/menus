
'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenus } from '@/redux/slices/menuSlice';
import { RootState, AppDispatch } from '@/redux/store';
import MenuList from '@/components/MenuList';

const MenusPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { menus, loading, error } = useSelector((state: RootState) => state.menu);

  useEffect(() => {
    dispatch(fetchMenus());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Menus</h1>
      <MenuList menus={menus} />
    </div>
  );
};

export default MenusPage;
