import Image from "next/image";
import 'tailwindcss/tailwind.css';
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
        <Header theme="default" />
        <h1>Welcome</h1>
    </div>
  );
}
