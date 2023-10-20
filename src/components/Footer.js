
export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
        <div className="footer-menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">EULA</a></li>
            </ul>
        </div>
        <div className="social">
            <a href=""><i class="fa fa-facebook" aria-hidden="true"/></a>
            <a href=""><i class="fa fa-instagram" aria-hidden="true"/></a>
            <a href=""><i class="fa fa-youtube-play" aria-hidden="true"/></a>
        </div>
        <div className="copyright">
            <p>© {currentYear} Copyright. <a href="https://google.com" target="_blank">Csapó Ádám</a></p>
        </div>
    </div>
  )
}
