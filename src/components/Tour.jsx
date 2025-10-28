import TourVideo from "../assets/videos/lobe-video.mp4";

function Tour() {
  return (
    <>
      <section className="flex flex-col justify-center items-center text-center mt-10">
        <div className="">
          <h1 className="font-bold text-5xl mb-6">
            Lobe <span
              className="text-[#04ddb2]"
            > Tour</span>
          </h1>
          <p className="w-sm">
            Build your first machine learning model in ten minutes. No code or
            experience needed.
          </p>
        </div>
        <div className="mt-20">
          <video controls width="600" className="rounded-lg shadow-lg">
            <source src={TourVideo} type="video/mp4" />
            Your browser does not support the video tag.
          
</video>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center text-center mt-10">
        <h1 className="font-bold text-5xl mb-6">Train your app with Lobe</h1>

      </section>
    </>
  );
}

export default Tour;
