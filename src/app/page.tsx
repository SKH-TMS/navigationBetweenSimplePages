

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-2xl">Landing page</h1>
      <div className=" flex justify-between flex-row">
      <a href="/Home">
          <button className="">Home</button>
        </a>
        <a href="/Login"  >
          <button >Login</button>
        </a>
        <a href="/Register">
          <button className="">Register</button>
        </a>
        </div>
    </div>  );
}
