export default function Home() {

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-[#fcf5c1]">

      {/* Navbar */}
      <div className="w-full h-[95px] px-[23px] py-[17px] left-0 top-0 absolute bg-[#fffad8] justify-start items-center gap-[21px] inline-flex">
        <img src="assets/images/starNavbar.svg" />
        <div className="text-black text-4xl font-bold">SiKantin</div>
      </div>

      {/* Hero */}
      <div className="grid md:grid-cols-2 mt-24">

        {/* Left */}
        <div className="w-auto grid content-center ml-10 pr-2 pt-10 md:ml-40 pb-10">
          <div className="flex-col justify-center items-start gap-5 inline-flex xl:w-full lg:w-1/3">
            <div className="leading-snug text-black text-3xl md:text-6xl font-bold">Pesan makan dimana saja, kapan saja, tanpa ribet</div>
            <div className=" text-black text-xl w-5/6 font-normal">Jelajahi pilihan makanan, cek menu, dan pesan makanan dengan mudah dari seluruh kantin Universitas Indonesia.</div>
          </div>
          <div className="h-16 w-1/2 px-6 py-2.5 my-10 bg-[#ffd603] rounded-full justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-black text-3xl font-medium">Pesan sekarang</div>
          </div>
        </div>

        {/* Right */}
        <img className="w-90 h-5/6 justify-self-end" src="assets/images/HeroRight.png" />
      </div>

      {/* 3 stars */}
      <div className="bg-[#FFFCE4] px-48 py-24 gap-[120px] flex-col justify-center items-center inline-flex">
        <div className="grid grid-cols-3 gap-48">
          <div className="flex flex-col gap-4 justify-center">
            <img className="w-[202px] h-auto mx-auto" src="assets/images/cari.png" />
            <div className="text-center text-black text-3xl 2xl:text-4xl">Cari menu</div>
          </div>
          <div className="flex flex-col gap-4  justify-center">
            <img className="w-[202px] h-auto mx-auto" src="assets/images/pesan.png" />
            <div className="text-center text-black text-3xl 2xl:text-4xl">Buat pesanan</div>
          </div>
          <div className=" flex flex-col gap-4  justify-center">
            <img className="w-[230px] h-auto mx-auto" src="assets/images/ambil.png" />
            <div className="text-center text-black text-3xl 2xl:text-4xl">Ambil saat siap</div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-[22px] inline-flex">
          <div className="text-black text-3xl 2xl:text-4xl">Semua di aplikasi <span className="font-semibold">SiKantin</span></div>
          <div className="justify-start items-center gap-[25px] inline-flex">
            <img className="w-[233px] h-[79px]" src="assets/images/appstore.png" />
            <img className="w-[245.89px] h-[75px]" src="assets/images/gplay.png" />
          </div>
        </div>
      </div>

      {/* Menu populer */}
      <div className="px-[74px] py-[115px] flex-col justify-start items-center gap-[95px] inline-flex">
        <div className="text-center text-black text-[64px] font-semibold font-['Plus Jakarta Sans']">Menu Populer</div>
        <div className="grid grid-cols-3 gap-9">
          <img className="" src="assets/images/menu1.png" />
          <img className="" src="assets/images/menu 2.png" />
          <img className="" src="assets/images/menu3.png" />
        </div>
        <div className="h-16 px-8 py-2.5  bg-[#ffd603] rounded-full justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-black text-3xl font-medium">Lihat menu lainnya</div>
          </div>
      </div>
    </div>
  );
}
