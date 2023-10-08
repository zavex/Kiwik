'use client';
import { LoadingPage } from '@/components/common/loading';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { FC, ReactNode, useEffect, useState } from 'react';

interface IProps {
  children: ReactNode;
}

const AuthLayout: FC<IProps> = ({ children }): ReactNode => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const accessToken = useAppSelector(state => state.authSlice.accessToken);
  const router = useRouter();

  useEffect(() => {
    if (accessToken) router.replace('/');

    setIsInitialized(true);
  }, [accessToken, router]);

  if (!isInitialized) return <LoadingPage />;

  return !accessToken ? children : null;
};

export default AuthLayout;
