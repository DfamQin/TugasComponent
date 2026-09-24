import musicImg from './assets/musikceunah.png';
import gameImg from './assets/gamingcenah.png';
import tiktokImg from './assets/tiktokceunah.png';

function Content() {
  return (
    <main className="main-content">
      <h2>alow everyone!! here's some information about me</h2>
      <div className="data">
        <p>Nama : Daffa Muttaqin</p>
        <p>NIM : 2504148</p>
        <p>Prodi : Pendidikan Ilmu Komputer</p>
        <p>Kelas : 3B</p>
        <p>TTL : Bandung, 23 Juli 2007</p>
        <p>Alamat : Jl.Raya Soreang Banjaran Kp.Citaliktik No.92</p>
      </div>

      <h2>Interest</h2>
      <div className="interest">
        <div className="interest-card">
          <img src={musicImg} alt="Playlist" className="interest-img" />
          <div className="interest-info">
            <h3>🎵 Music & Playlist</h3>
            <p>K-Pop / KR Playlist (aespa, Hearts2Hearts, dll.)</p>
          </div>
        </div>

        <div className="interest-card">
          <img src={gameImg} alt="Roblox Game" className="interest-img" />
          <div className="interest-info">
            <h3>🎮 Gaming</h3>
            <p>Roblox (Blade Ball, Item Duels & Trading)</p>
          </div>
        </div>

        <div className="interest-card">
          <img src={tiktokImg} alt="TikTok Profile" className="interest-img" />
          <div className="interest-info">
            <h3>🎬 Content Creation</h3>
            <p>TikTok Video Creator (@shikimizuuu / m1ju)</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;