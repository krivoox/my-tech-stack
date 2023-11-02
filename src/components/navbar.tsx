import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <section>
      <div className="w-screen h-auto">
        <nav
          className="w-full h-auto max-w-[1600px] mx-auto font-inter lg:relative lg:top-0"
          x-data="{isOpen: false, menuOne:false}"
        >
          <div className="flex flex-col py-6 lg:py-4 px-6 lg:flex-row lg:px-10 lg:items-center lg:justify-between xl:px-20">
            <div>
              <Link href={'https://twitter.com/JKrivoox'}>@jKrivoox</Link>
            </div>
            <div className="float-right">
              <button
                onClick={() =>
                  session ? signOut() : router.push('/auth/login')
                }
                className="bg-[#7289DA] p-3 rounded-xl text-white shadow-lg shadow-indigo-500/50"
              >
                {session ? 'Logout' : 'Login'}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
