function Hero() {
  return (
    <>
      <div className="container hero align-items-center">
        <div className="row p-3 align-items-center">
          <div className="col-lg-6">
            <h1 className="fw-bold ">YOUR FEET DESERVE THE BEST</h1>
            <p className="">
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="/public/Images/ccd9e7f69d4cbfcf331c69b8e21db35d2e158410.png"
              className="w-100"
            />
          </div>
        </div>
        <div className="buttons d-flex gap-3 p-3">
          <button className="btn btn-danger">Shop Now</button>
          <button className="btn btn-outline-dark ">Category</button>
        </div>
        <div className="shops p-3">
          <p>Also Available On</p>
          <img src="\public\Images\shops.png" />
        </div>
      </div>
    </>
  );
}
export default Hero;
