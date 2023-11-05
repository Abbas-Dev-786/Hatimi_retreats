const InfoContainer = () => {
  return (
    <div className="seat-booking">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <h3>Battle at the Net</h3>
          <p>
            Lorem ipsum dolor sit amet, con adipiscing elit tiam convallis elit
            id impedie. Quisq commodo simply free ornare tortor. If you are
            going to use a passage of Lorem Ipsum, you need to be sure there
            isn&apos;t anything embarrassing hidden in the middle of text.
          </p>
          <p>
            Lorem ipsum is simply free text used by copytyping refreshing. Neque
            porro est qui dolorem ipsum quia quaed inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Aelltes port lacus
            quis enim var sed efficitur turpis gilla sed sit amet finibus eros.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the ndustry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>
            There are many people variation of passages of lorem Ipsum available
            in the majority sed do eius tempor incididunt ut labore etq uiaolor
            sit amet alteration in some. Quuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt
          </p>
          <button type="button" className="btn btn-primary">
            Book A Seat
          </button>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="google-maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8862835683544!2d-73.98256668525309!3d41.93829486962529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd0ee3286615b7%3A0x42bfa96cc2ce4381!2s132%20Kingston%20St%2C%20Kingston%2C%20NY%2012401%2C%20USA!5e0!3m2!1sen!2sin!4v1670922579281!5m2!1sen!2sin"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
