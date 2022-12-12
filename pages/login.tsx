import React from "react";
import {
  getProviders,
  signIn,
  LiteralUnion,
  ClientSafeProvider,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";

interface LoginProps {
  providers?: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
}

const Login = ({ providers }: LoginProps) => {
  return (
    <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
      <img className='w-52 mb-5' src='https://i.imgur.com/fPuEa9V.png' alt='' />
      {Object.values(providers || {}).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className='bg-spotifyGreen text-white p-5 rounded-full'
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
