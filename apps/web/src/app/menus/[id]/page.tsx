
'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenuById } from '@/redux/slices/menuSlice';
import { RootState, AppDispatch } from '@/redux/store';
import { useRouter } from 'next/navigation';
import MenuHierarchy from '@/components/MenuHierarchy';

const MenuDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const dispatch = useDispatch<AppDispatch>();
  const { selectedMenu, loading, error } = useSelector((state: RootState) => state.menu);

  useEffect(() => {
    if (id) dispatch(fetchMenuById(parseInt(id, 10)));
  }, [id, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!selectedMenu) return <div>No menu found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{selectedMenu.name}</h1>
      <MenuHierarchy items={selectedMenu.items || []} />
    </div>
  );
};

export default MenuDetailPage;
