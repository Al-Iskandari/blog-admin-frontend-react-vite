import 'react';
import CountUpAnimation from './CountUpAnimation';

const Home = () => {
    return (
        <div>
          <section className="hero">
            <div id="hero" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#hero" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#hero" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#hero" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="../../../images/ayuna/construction.png" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block p-3">
                    <h5>Ayuna Construction</h5>
                    <h4>Punya Lahan + Rp30 Juta, Sudah Bisa Bangun Rumah</h4>
                    <p>Bangun rumah impianmu sesuai dengan anggaran yang dimiliki. Dengan
                      perencanaan matang dan desain yang efisien, impian punya rumah bukan
                      lagi sekadar angan. Yuk, mulai wujudkan dari sekarang!.</p>
                    <ul className="list-unstyled">
                      <li>Item1</li>
                      <li>Item2</li>
                      <li>Item3</li>
                    </ul>
                    <div className="cta">
                      <button type="button" className="btn btn-primary btn-lg">Selengkapnya</button>
                      <button type="button" className="btn btn-light btn-lg ms-2"><img src="../../../images/ayuna/message.svg" className="d-block w-100" alt="..." /></button>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="../../../images/ayuna/laptop.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block p-3">
                    <h5>Ayuna Digital</h5>
                    <h4>Bangun Profesionalitas Bisnis, Website mulai dari Rp1 Juta-an</h4>
                    <p>Bangun rumah impianmu sesuai dengan anggaran yang dimiliki. Dengan
                      perencanaan matang dan desain yang efisien, impian punya rumah bukan
                      lagi sekadar angan. Yuk, mulai wujudkan dari sekarang!</p>
                    <ul className="list-unstyled">
                      <li>Item1</li>
                      <li>Item2</li>
                      <li>Item3</li>
                    </ul>
                    <div className="cta">
                      <button type="button" className="btn btn-primary btn-lg">Selengkapnya</button>
                      <button type="button" className="btn btn-light btn-lg ms-2"><img src="../../../images/ayuna/message.svg" className="d-block w-100" alt="..." /></button>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <img src="../../../images/ayuna/merlion.jpeg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block p-3">
                    <h5>Ayuna Jastip</h5>
                    <h4>Belanja ke Luar Daerah,<br /> Gak Perlu Keluar Rumah</h4>
                    <p>Mau belanja ke luar daerah tapi terbatas di ongkos? Kami siap bantu! Tinggal titip, kami belikan, dan langsung kirim ke rumahmu. Simple, cepat, dan terpercaya! Yuk, coba layanan kami sekarang!</p>
                    <ul className="list-unstyled">
                      <li>Item1</li>
                      <li>Item2</li>
                      <li>Item3</li>
                    </ul>
                    <div className="cta">
                      <button type="button" className="btn btn-primary btn-lg">Selengkapnya</button>
                      <button type="button" className="btn btn-light btn-lg ms-2"><img src="../../../images/ayuna/message.svg" className="d-block w-100" alt="..." /></button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#hero" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#hero" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </section>
          <section className="about">
            <div className="container">
              <div className="row justify-content-center align-items-center g-2">
                <div className="col">
                  <div className="thumbnails">
                    <img src="../../../images/ayuna/construction.png" className="thumbnail satu" alt="..." />
                    <img src="../../../images/ayuna/laptop.jpg" className="thumbnail dua" alt="..." />
                  </div>
                </div>
                <div className="col">
                  <h5>Tentang Ayuna</h5>
                  <h4>Memberi Solusi dengan Inovasi Tanpa Henti</h4>
                  <p>
                    PT. Ayuna adalah perusahaan yang berdiri atas dedikasi dan semangat para pemuda visioner yang memulai usaha dari bisnis perlengkapan bayi, usaha ini terus berkembang ke berbagai bidang seperti kopi dan kafe, jasa konstruksi, jasa titip, hingga layanan digital.
                  </p>
                  <p>
                    Dengan kerja keras dan inovasi tanpa henti, PT. Ayuna kini menjadi perusahaan yang terpercaya dalam memberikan solusi terbaik bagi masyarakat. Kami berkomitmen menghadirkan layanan berkualitas tinggi yang mengutamakan kepuasan pelanggan.
                  </p>
                  <div className="cta">
                    <button type="button" className="btn btn-primary btn-lg">Selengkapnya</button>
                    <button type="button" className="btn btn-light btn-lg ms-2"><img src="../../../images/ayuna/message.svg" className="d-block w-100" alt="..." /></button>
                  </div>
                </div>
              </div>
              <div className="row statistik justify-content-center align-items-center g-2">
                <CountUpAnimation 
                  initialValue={0} 
                  targetValue={5}
                  text='Jenis Layanan' />
                <CountUpAnimation 
                  initialValue={0} 
                  targetValue={10}
                  text='Mitra Layanan' />
                <CountUpAnimation 
                  initialValue={0} 
                  targetValue={100}
                  text='Proyek Terselesaikan' />
                <CountUpAnimation 
                  initialValue={0} 
                  targetValue={99}
                  text='Pelanggan Puas' />
              </div>
            </div>
          </section>
          <section className="layanan">
            <div className="container">
              <div className="row justify-content-center align-items-center g-2">
                <div className="row konstruksi p-5">
                  <div className="col-4 w-50">
                    <div className="container bento h-100 w-75">
                      <div className="row h-100">
                        <img src="./../../../images/ayuna/construction.png" className="col rounded p-0 img-fluid rounded-top" alt="" />
                        <div className="col h-100">
                          <img src="./../../../images/ayuna/construction.png" className="col h-50 rounded bg-primary mb-2 img-fluid rounded-top" alt="" />
                          <img src="./../../../images/ayuna/construction.png" className="col h-50 rounded bg-primary mt-2 img-fluid rounded-top" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 w-50 p-4">
                    <h4>Konstruksi Bangunan</h4>
                    <p>Mulai bangun rumah dengan perencanaan matang dan material berkualitas sesuai budget. Bersama tim profesional, setiap langkah konstruksi akan lebih aman, efisien, dan tahan lama. Jadikan rumahmu tempat tinggal nyaman dan penuh kebanggaan!</p>
                    <div className="cta second p-1">
                      <button type="button" className="btn btn-primary btn-lg">Selengkapnya</button>
                    </div>
                  </div>
                </div>
                <div className="row digital p-5">
                  <div className="col-4 w-50 p-4">
                    <h4>Teknologi dan Informasi</h4>
                    <p>Dari pengembangan website, aplikasi, hingga sistem keamanan, kami hadir untuk menjawab kebutuhan IT Anda. Tingkatkan efisiensi dan kemudahan bisnis dengan teknologi yang tepat. Yuk, wujudkan ide-ide digitalmu bersama kami!</p>
                    <div className="cta second p-1">
                      <button type="button" className="btn btn-primary btn-lg">Selengkapnya</button>
                    </div>
                  </div>
                  <div className="col-4 w-50">
                    <div className="container bento h-100 w-75 mr-auto">
                      <div className="row h-100">
                        <img src="./../../../images/ayuna/construction.png" className="col rounded p-0 img-fluid rounded-top" alt="" />
                        <div className="col h-100">
                          <img src="./../../../images/ayuna/construction.png" className="col h-50 rounded bg-primary mb-2 img-fluid rounded-top" alt="" />
                          <img src="./../../../images/ayuna/construction.png" className="col h-50 rounded bg-primary mt-2 img-fluid rounded-top" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row jastip p-5">
                  <div className="col-4 w-50">
                    <div className="container bento h-100 w-75">
                      <div className="row h-100">
                        <img src="./../../../images/ayuna/construction.png" className="col rounded p-0 img-fluid rounded-top" alt="" />
                        <div className="col h-100">
                          <img src="./../../../images/ayuna/construction.png" className="col h-50 rounded bg-primary mb-2 img-fluid rounded-top" alt="" />
                          <img src="./../../../images/ayuna/construction.png" className="col h-50 rounded bg-primary mt-2 img-fluid rounded-top" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 w-50 p-4">
                    <h4>Jasa Titip (Jastip Belanja)</h4>
                    <p>Nggak sempat belanja? Atau Mau belanja ke luar daerah tapi terbatas di ongkos? Kami siap bantu! Tinggal titip, kami belikan, dan langsung kirim ke rumahmu. Simple, cepat, dan terpercaya! Yuk, coba layanan kami sekarang!</p>
                    <div className="cta second p-1">
                      <button type="button" className="btn btn-primary btn-lg">Selengkapnya</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="testi">
            <div className="container-fluid">
              <div className="header mb-5 text-center">
                <h5>TESTIMONI</h5>
                <h4>Apa Kata Mereka?</h4>
              </div>
              <div id="testimoni" data-flickity='{ "percentPosition": false,"resize": false }'>
                <div className="carousel-cell ">
                  <div className="row-4 d-flex flex-row gap-5 p-0">
                    <div className="konten">
                      <div className="penilaian">
                        <span className="rate">
                          <span className="nilaibintang">9</span>
                          /10
                        </span>
                        <span className="cat konstruksi">
                          Construction
                        </span>
                      </div>
                      <div className="komentar">
                        Terima kasih kepada tim konstruksi atas layanan luar biasa! Dengan budget 30 juta, saya bisa punya rumah yang nyaman dan sesuai kebutuhan. Prosesnya cepat, transparan, dan hasilnya sangat memuaskan. Benar- benar solusi terbaik untuk kami yang punya budget terbatas. Sukses terus!
                      </div>
                    </div>
                    <div className="gambar">
                      <img src="./../../../images/ayuna/laptop.jpg" className="img-fluid rounded-top" alt="" />
                    </div>
                  </div>
                  <div className="bawah mt-auto d-flex col">
                    <div className="komentator d-flex col gap-4 align-items-center">
                      <div className="foto"><img src="image source" className="img-fluid rounded-top" alt="" /></div>
                      <div className="client">
                        <div className="nama">Fulan</div>
                        <div className="jabatan">Karyawan Saipem</div>
                      </div>
                    </div>
                    <div className="cta second p-0 ml-auto">
                      <button type="button" className="btn btn-primary btn-lg">Selengkapnya</button>
                    </div>
                  </div>
                </div>
                <div className="carousel-cell ">
                  <div className="row-4 d-flex flex-row gap-5 p-0">
                    <div className="konten">
                      <div className="penilaian">
                        <span className="rate">
                          <span className="nilaibintang">9</span>
                          /10
                        </span>
                        <span className="cat konstruksi">
                          Construction
                        </span>
                      </div>
                      <div className="komentar">
                        Terima kasih kepada tim konstruksi atas layanan luar biasa! Dengan budget 30 juta, saya bisa punya rumah yang nyaman dan sesuai kebutuhan. Prosesnya cepat, transparan, dan hasilnya sangat memuaskan. Benar- benar solusi terbaik untuk kami yang punya budget terbatas. Sukses terus!
                      </div>
                    </div>
                    <div className="gambar">
                      <img src="./../../../images/ayuna/laptop.jpg" className="img-fluid rounded-top" alt="" />
                    </div>
                  </div>
                  <div className="bawah mt-auto d-flex col">
                    <div className="komentator d-flex col gap-4 align-items-center">
                      <div className="foto"><img src="image source" className="img-fluid rounded-top" alt="" /></div>
                      <div className="client">
                        <div className="nama">Fulan</div>
                        <div className="jabatan">Karyawan Saipem</div>
                      </div>
                    </div>
                    <div className="cta second p-0 ml-auto">
                      <button type="button" className="btn btn-primary btn-lg">Selengkapnya</button>
                    </div>
                  </div>
                </div>
                <div className="carousel-cell ">
                  <div className="row-4 d-flex flex-row gap-5 p-0">
                    <div className="konten">
                      <div className="penilaian">
                        <span className="rate"><span className="nilaibintang">9</span>/10</span> 
                        <span className="cat digital">
                          Construction
                        </span>
                      </div>
                      <div className="komentar">
                        Terima kasih kepada tim konstruksi atas layanan luar biasa! Dengan budget 30 juta, saya bisa punya rumah yang nyaman dan sesuai kebutuhan. Prosesnya cepat, transparan, dan hasilnya sangat memuaskan. Benar- benar solusi terbaik untuk kami yang punya budget terbatas. Sukses terus!
                      </div>
                    </div>
                    <div className="gambar">
                      <img src="" className="img-fluid rounded-top" alt="" />
                    </div>
                  </div>
                  <div className="bawah mt-auto d-flex col">
                    <div className="komentator d-flex col gap-4 align-items-center">
                      <div className="foto"><img src="image source" className="img-fluid rounded-top" alt="" /></div>
                      <div className="client">
                        <div className="nama">Fulan</div>
                        <div className="jabatan">Karyawan Saipem</div>
                      </div>
                    </div>
                    <div className="cta second p-0 ml-auto">
                      <button type="button" className="btn btn-primary btn-lg">Selengkapnya</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="galeri">
            <div className="container p-5">
              <h4 className="text-center">Galeri Foto</h4>
              <div className="filter d-flex col gap-3">
                <a href="#" className="selected list">SEMUA</a>
                <a href="#" className=" list">KONSTRUKSI</a>
                <a href="#" className=" list">DIGITAL</a>
                <a href="#" className=" list">JASTIP</a>
                <a href="#" className="ms-auto lihatsemua list">LIHAT SEMUA</a>
              </div>
              <div className="fotofoto row">
                <div className="foto col">
                  <img src="./../../../images/ayuna/construction.png" alt="" />
                </div>
                <div className="foto col">
                  <img src="./../../../images/ayuna/construction.png" alt="" />
                </div>
                <div className="foto col">
                  <img src="./../../../images/ayuna/construction.png" alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className="banner">
            <div className="container p-5">
              <div className="inner col p-5 d-flex row justify-content-center text-center">
                <h4>Cukup Pengenalannya, Ayo Temukan Solusimu!</h4>
                <p className="mt-3">Tim kami telah berpengalaman dalam memberikan berbagai solusi yang efektif dan efisien</p>
                <div className="cta d-flex align-items-center justify-content-center mt-3">
                  <button type="button" className="btn btn-primary btn-lg">Hubungi Kami</button>
                  <button type="button" className="btn btn-light btn-lg ms-2"><img src="../../../images/ayuna/grid.svg" className="d-block w-100" alt="..." /></button> <span className="ms-3">Semua Layanan</span>
                </div>
              </div>
            </div>
          </section>
          <section className="berita">
            <div className="container p-5">
              <div className="header d-flex row">
                <h5>BLOG</h5>
                <div className="headerberita mb-3 d-flex col align-items-center">
                  <h4>Berita dan Pembaruan</h4>
                  <a href="#" className="lihatsemua ms-auto list">LIHAT SEMUA</a>
                </div>
              </div>
              <div className="kumpulanberita col">
                <div className="row  gap-3 d-flex">
                  <div className="listberita col p-0">
                    <div className="thumbnail">
                      <img src="../../../images/ayuna/construction.png" alt="" />
                    </div>
                    <div className="permalink p-3"><a href="#">Project Konstruksi Sidorejo Selesai Dibangun</a> </div>
                    <div className="timestamp p-3">
                      <span className="tanggal">05 Januari 2025</span> oleh <span className="author">Gigih Sanjaya</span>
                    </div>
                  </div>
                  <div className="listberita col p-0">
                    <div className="thumbnail">
                      <img src="../../../images/ayuna/laptop.jpg" alt="" />
                    </div>
                    <div className="permalink p-3"><a href="#">Project Konstruksi tahap 2 Karyawan PT Saipem Selesai Dibangun</a></div>
                    <div className="timestamp p-3">
                      <span className="tanggal">05 Januari 2025</span> oleh <span className="author">Gigih Sanjaya</span>
                    </div>
                  </div>
                  <div className="listberita col p-0">
                    <div className="thumbnail">
                      <img src="" alt="" />
                    </div>
                    <div className="permalink p-3"><a href="#">Project Konstruksi Sidorejo Selesai Dibangun</a></div>
                    <div className="timestamp p-3">
                      <span className="tanggal">05 Januari 2025</span> oleh <span className="author">Gigih Sanjaya</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

    );
}

export default Home;