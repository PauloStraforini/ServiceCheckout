import { db } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface RestaurantPageProps {
    params: Promise <{slug: string}>;
}

const RestaurantPage = async ({params}: RestaurantPageProps) => {
    const {slug} = await params
    const restaurant = await db.restaurant.findUnique({ where: { slug } });
    if (!restaurant) {
        return notFound ();
    }

  return ( 
  <div className='h-screen flex flex-col items-center justify-center px-6 pt-24'>
    <div className="flex flex-col items-center gap-2">

        <Image 
            src={restaurant.avatarImageUrl} 
            alt={restaurant.name} 
            width={82} 
            height={82}
        />
        <h2 className="font semibold">
            {restaurant.name}
        </h2>
    </div>
    <div className="pt-24 text-center space-y-2">
        <h3 className="text-lg font-semibold">
            Seja Bem-Vindo
        </h3>

        <p className='opacity-55'>
            Escolha como prefere fazer o seu pedido
        </p>

    </div>
  </div>
  );
};

export default RestaurantPage;
 