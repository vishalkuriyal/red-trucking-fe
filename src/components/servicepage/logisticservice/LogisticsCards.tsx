const LogisticsCards = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-20 py-8 md:py-28">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="px-8 py-12 border border-[#3C3C3C]">
            <h4 className="anton-regular text-white text-4xl mb-11">
              CROSSDOCK <br /> <span className="text-primary">& TRANSLOAD</span>{" "}
            </h4>
            <p className="text-white font-kindsans-regular">
              Our logistics team expertly handles all incoming and outgoing
              shipments, ensuring smooth cross-docking and safe transloading to
              speed up turnaround time and reduce handling delays across your
              supply chain.
            </p>
          </div>
          <div className="px-8 py-12 border border-[#3C3C3C]">
            <h4 className="anton-regular text-white text-4xl mb-11">
              RED <br />
              <span className="text-primary">CHASSIS</span>
            </h4>
            <p className="text-white font-kindsans-regular">
              We provide our own well-maintained chassis to drivers, helping you
              avoid rental hassles. It saves both time and money while ensuring
              smoother, faster operations from pickup to final delivery.
            </p>
          </div>
          <div className="px-8 py-12 border border-[#3C3C3C]">
            <h4 className="anton-regular text-white text-4xl mb-11">
              POINT OF DELIVERY <br />{" "}
              <span className="text-primary">CONFIRMATION</span>
            </h4>
            <p className="text-white font-kindsans-regular">
              No need to wait for email updates. Get instant notifications and
              real-time alerts the moment your shipment reaches its destination,
              straight from your assigned driver or logistics team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsCards;
