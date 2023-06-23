export default function Navbar() {
  return (
    <>
      <div className="h-full px-5 py-4 overflow-y-auto bg-gray-50 dark:bg-slate-700"> 
        <nav className="flex flex-col  space-y-2 justify-center">
          {[
            ["Home", "/dashboard"],
            ["About Us", "/aboutUs"],
            ["Profile", "/profile"],
          ].map(([title, url]) => (
            <a
              href={url}
              className="rounded-lg px-10 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900"
            >
              {title}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
