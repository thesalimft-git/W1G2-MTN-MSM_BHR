function Footer() {


  return (
    <>
      <div className="d-grid col-sm-1 col-md-2">
        <div className="d-grid col-sm-1 col-md-2">
          {/* address */}
          <div>
            <h3>
              Address Information
            </h3>
            <div>
              <p>
                <strong>
                  Email:
                </strong>
                <span className="ps-2">
                  petshop@gmail.com
                </span>
              </p>
            </div>
            <div>
              <p>
                <strong>
                  Phone:
                </strong>
                <span className="ps-2">
                  0912-345-6789
                </span>
              </p>
            </div>
            <div>
              <p>
                <strong>
                  Address:
                </strong>
                <span className="ps-2">
                  N0.7. sample ave.
                </span>
              </p>
            </div>
          </div>

          {/* menu */}
          <div>
            <h3>
              Pages
            </h3>
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="/" className="menu-items">Store</a>
                </li>
                <li>
                  <a href="/card" className="menu-items">Card</a>
                </li>
                <li>
                  <a href="/ticket" className="menu-items">Ticket</a>
                </li>
                <li>
                  <a href="/about-us" className="menu-items">About Us</a>
                </li>
                <li>
                  <a href="/contact-us" className="menu-items">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* contact form */}
        <div>
          <h3>
            Contact Us
          </h3>
          <div>
            <form action="" className="d-flex-col">
              <input className="form-control" type="text" placeholder="Full Name"/>
              <input className="form-control" type="text" placeholder="Email"/>
              <textarea className="form-control" placeholder="message ..." rows="7"></textarea>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer