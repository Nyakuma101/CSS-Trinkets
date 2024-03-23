import "./HomePage.scss";

function HomePage() {
  return (
    <>
      <div className="home">
        <div className="home__header">
          <div className="home__title">
            <p className="home__css">CSS</p>
            <p className="home__trinkets">TRINKETS</p>
          </div>
          <div className="home__toggle">
            <div className="home__toggleSquare"></div>
          </div>
          <div className="home__dropDownMenu">
            <div className="home__dropLine"></div>
            <div className="home__dropLine"></div>
            <div className="home__dropLine"></div>
          </div>
        </div>
        <hr className="home__border"></hr>
        <div className="home__content">
          <p className="home__button">BUTTONS</p>
          <p className="home__tabBars">TAB BARS</p>
          <p className="home__logins">LOGINS</p>
          <p className="home__mediaPlayers">MEDIA PLAYERS</p>
        </div>
        <hr className="home__border1"></hr>
      </div>
      <div className="home__body">
        <div className="home__squares">
          <article className="home__square1">
            <p className="home__soon">COMING SOON</p>
          </article>
          <article className="home__square1">
            <p className="home__soon">COMING SOON</p>
          </article>
          <article className="home__square1">
            <p className="home__soon">COMING SOON</p>
          </article>
          <article className="home__square1">
            <p className="home__soon">COMING SOON</p>
          </article>
          <article className="home__square1">
            <p className="home__soon">COMING SOON</p>
          </article>
          <article className="home__square1">
            <p className="home__soon">COMING SOON</p>
          </article>
        </div>
      </div>
      <div className="home__footer">
        <p className="home__created">Created by Nyakuma Wal @2024</p>
      </div>
    </>
  );
}

export default HomePage;
