export default function Home() {

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-[#fcf5c1]">

      {/* Navbar */}
      <div className="w-full h-[95px] px-[23px] py-[17px] left-0 top-0 absolute bg-[#fffad8] justify-start items-center gap-[21px] inline-flex">
        <img src="assets/images/StarNavbar.svg" />
        <div className="text-black text-4xl font-bold">SiKantin</div>
      </div>

      {/* Hero */}
      <div className="grid md:grid-cols-2 mt-24">

        {/* Left */}
        <div className="w-auto grid content-center ml-10 pr-4 md:pr-2 pt-10 xl:ml-40 pb-10">
          <div className="flex-col justify-center items-start gap-5 inline-flex xl:w-full">
            <div className="leading-snug text-black text-xl md:text-6xl font-bold">Pesan makan di mana saja, kapan saja, tanpa ribet</div>
            <div className=" text-black md:text-xl w-5/6 font-normal">Jelajahi pilihan makanan, cek menu, dan pesan makanan dengan mudah dari seluruh kantin Universitas Indonesia.</div>
          </div>

          <div className="my-10">
            <button className="before:ease relative relative px-6 py-2 bg-[#ffd603] text-black text-lg md:text-3xl font-medium rounded-full overflow-hidden shadow-md transition-all before:absolute before:right-0 before:top-0 before:h-16 before:w-6 before:translate-x-24 before:rotate-6 before:bg-white before:opacity-20 before:duration-700 hover:shadow-2xl hover:bg-[#FFDE34] hover:before:-translate-x-72">
              <span className="relative z-10">Pesan sekarang</span>
            </button>
          </div>
        </div>

        {/* Right */}
        <img className="lg:h-5/6 h-3/4 hidden md:block justify-self-end" src="assets/images/HeroRight.png" />
      </div>

      {/* 3 stars */}
      <div className="bg-[#FFFCE4] py-8 md:py-24 gap-[30px] md:gap-[120px] flex-col justify-center items-center inline-flex">
        <div className="grid md:grid-cols-3 gap-2 md:gap-28 px-4  xl:gap-48">
          <div className="flex flex-col gap-4 justify-center">
            <img className="md:h-[202px] w-auto h-[60px] mx-auto" src="assets/images/cari.png" />
            <div className="text-center text-black md:text-3xl 2xl:text-4xl">Cari menu</div>
          </div>
          <div className="flex flex-col gap-4  justify-center">
            <img className="md:h-[202px] w-auto h-[60px] mx-auto" src="assets/images/pesan.png" />
            <div className="text-center text-black md:text-3xl 2xl:text-4xl">Buat pesanan</div>
          </div>
          <div className=" flex flex-col gap-4  justify-center">
            <img className="md:h-[202px] w-auto h-[60px] mx-auto" src="assets/images/ambil.png" />
            <div className="text-center text-black md:text-3xl 2xl:text-4xl">Ambil saat siap</div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-[22px] inline-flex">
          <div className="text-black text-xl md:text-3xl 2xl:text-4xl text-center">Semua di aplikasi <span className="font-semibold">SiKantin</span></div>
          <div className="justify-start items-center gap-2 md:gap-[25px] inline-flex">
            <img className="w-auto h-[40px] md:h-[79px]" src="assets/images/appstore.png" />
            <img className="w-auto h-[40px] md:h-[75px]" src="assets/images/gplay.png" />
          </div>
        </div>
      </div>

      {/* Menu populer */}
      <div className="mx-8 md:px-[74px] md:py-[115px] py-6 flex-col justify-start items-center md:gap-[95px] gap-4 inline-flex">
        <div className="text-center text-black text-2xl md:text-[64px] font-semibold font-['Plus Jakarta Sans']">Menu Populer</div>
        <div className="grid md:grid-cols-3 md:gap-9 ">
          <img className="" src="assets/images/menu1.png" />
          <img className="" src="assets/images/menu 2.png" />
          <img className="" src="assets/images/menu3.png" />
        </div>
        <button className="before:ease relative relative px-6 py-2 bg-[#ffd603] text-black text-lg md:text-3xl font-medium rounded-full overflow-hidden shadow-md transition-all before:absolute before:right-0 before:top-0 before:h-16 before:w-6 before:translate-x-24 before:rotate-6 before:bg-white before:opacity-20 before:duration-700 hover:shadow-2xl hover:bg-[#FFDE34] hover:before:-translate-x-72">
              <span className="relative z-10">Pesan sekarang</span>
            </button>
      </div>
    </div>
  );
}