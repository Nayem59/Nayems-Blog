import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Nayem </span>
        </span>
        <br />
        Welcome to my Blog
      </p>
      <Posts />
    </main>
  );
}
