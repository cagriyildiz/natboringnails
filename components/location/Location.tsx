export default function Location() {
  return (
    <section id="salon-location" className="relative w-full h-screen overflow-hidden">
      <h2 className="sr-only">Location</h2>
      <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9735.998456890073!2d4.650050092050352!3d52.40668320592141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5efc5a6427731%3A0xb9b973e0151e39b!2sNatboringnails!5e0!3m2!1sen!2snl!4v1731444559261!5m2!1sen!2snl"
          loading="lazy"
          allowFullScreen={true}
          className="border-0"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
};
