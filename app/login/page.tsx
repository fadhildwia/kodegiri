import Image from "next/image";
import { Login } from './components/Login'

export default function index() {
  return (
    <div className="flex flex-col items-center justify-center p-24">
      <div className="flex gap-3 mb-4">
        <Image
          alt="Logo"
          height={22}
          width={22}
          src="/images/logo.png"
        />
        <h1 className="text-2xl font-bold">Loyauté</h1>
      </div>
      <Login />
    </div>
  );
}
