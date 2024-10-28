import { loginOpenModal } from '@/redux/features/loginFirstSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { PATH_USER } from '@/utils/routes';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const MenuList = () => {
  const user = useAppSelector(state => state.authSlice.user);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const trackOrderHandler = () => {
    if (!user?._id)
      return dispatch(loginOpenModal({ redirectUrl: PATH_USER.trackOrder }));
    router.push(PATH_USER.trackOrder);
  };

  return (
    <div className="flex-grow lg:pt-4 w-2/4 sm:w-[30%] md:w-1/4 text-white">
      <div className="w-full">
        <p className="cursor-pointer font-semibold text-lg sm:text-2xl">Menu</p>

        <ul className="lg:mt-10 mt-4 text-sm md:text-base w-auto">
          <Link href="/">
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Inicio
            </li>
          </Link>
          <Link href="/shop">
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Marketplace
            </li>
          </Link>
          <Link href="/best-offers">
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Promociones
            </li>
          </Link>
          <li
            onClick={trackOrderHandler}
            className="mb-2 cursor-pointer hover:underline duration-200"
          >
            Rastrear orden
          </li>
          <Link href="/cart">
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Carrito
            </li>
          </Link>
          {!user?._id && (
            <>
              <Link
                href={{
                  pathname: '/auth',
                  query: {
                    keyword: 'seller',
                  },
                }}
              >
                <li className="mb-2 cursor-pointer hover:underline duration-200">
                  Vende en Kiwik
                </li>
              </Link>
              <Link href="/auth">
                <li className="mb-2 cursor-pointer hover:underline duration-200">
                  Registro/Iniciar Sesion
                </li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
