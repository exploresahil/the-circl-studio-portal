import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <main className="main-container">
      <h1>the circl studio</h1>
      <Link href="/clients">Clients</Link>
      <Link href="/clients/admin">Admin</Link>
    </main>
  );
}
