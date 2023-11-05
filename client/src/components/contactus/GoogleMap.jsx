const GoogleMap = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="google-maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8862835683544!2d-73.98256668525309!3d41.93829486962529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd0ee3286615b7%3A0x42bfa96cc2ce4381!2s132%20Kingston%20St%2C%20Kingston%2C%20NY%2012401%2C%20USA!5e0!3m2!1sen!2sin!4v1670922579281!5m2!1sen!2sin"
            height="445"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
