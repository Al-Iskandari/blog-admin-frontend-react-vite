import 'react';

const Footer = () => {
    return (
        <footer className="p-5">
            <div className="container d-flex col">
                <div className="col-4 d-flex w-50 row gap-5 p-3">
                <a className="brand" href="#">
                    <img src="../images/ayuna/logo-black.svg" alt="Ayuna" width="auto" height={25} />
                </a>
                <div className="newsletter">
                    <p>Dapatkan update informasi terbaru, promo, dan layanan dari Ayuna. Masukkan email Anda di bawah ini!</p>
                    <div className="mb-3 form-email">
                    <input type="email" className="form-control p-3" name="" id="" aria-describedby="emailHelpId" placeholder="abc@mail.com" />
                    <button type="submit" className="btn" />
                    </div>
                </div>
                <div className="sosmed d-flex col gap-3">
                    <a href="#" className="facebook" />
                    <a href="#" className="instagram" />
                    <a href="#" className="tiktok" />
                </div>
                </div>
                <div className="col-4 d-flex col w-50 gap-3 p-3">
                <div className="col-4 d-flex row gap-2 w-50">
                    <h5>Layanan</h5>
                    <a href="#" className="list">Konstruksi</a>
                    <a href="#" className="list">Digital</a>
                    <a href="#" className="list">Jastip</a>
                    <a href="#" className="list">Coffee dan Cafe</a>
                    <a href="#" className="list">Perlengkapan Bayi</a>
                </div> 
                <div className="col-4 d-flex row gap-2 w-50">
                    <h5>Informasi</h5>
                    <a href="#" className="list">Tentang Kami</a>
                    <a href="#" className="list">Galeri Foto</a>
                    <a href="#" className="list">Berita</a>
                    <a href="#" className="list">Testimoni</a>
                    <a href="#" className="list">Hubungi Kami</a>
                </div>                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;