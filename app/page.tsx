import Nav from "./ui/navbar/nav";
export default function Home() {
  return (
    <main>
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <div
            style={{ backgroundImage: `url(/displaycar.jpg)` }}
            className="h-[614px] bg-cover bg-center relative text-center"
          >
            <div className="text-white absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
              <p className="text-8xl font-bold tracking-wide">Premium Cars</p>
              <p className="text-lg font-semibold tracking-wide">
                Discover Jamaica in unparalleled comfort and style.
              </p>
            </div>
          </div>
        </div>

        <div className="p-10">
          <div>
            <p>Our Features</p>
            <p>Discover a world of convenience, safety, and customization, paving the way for unforgettable adventures and seamless mobilit solutions.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
