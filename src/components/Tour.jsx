import TourVideo from "../assets/videos/lobe-video.mp4";

function Tour() {
  return (
    <>
      <section className="flex flex-col justify-center items-center text-center mt-[80px]">
        <div className="mt-20">
          <h1 className="font-bold text-5xl mb-6">
            Lobe <span
              className="text-[#04ddb2]"
            > Tour</span>
          </h1>
          <p className="w-sm text-lg">
            Build your first machine learning model in ten minutes. No code or
            experience needed.
          </p>
        </div>
        <div className="mt-20 w-[320px] lg:w-4xl md:w-2xl">
          <video controls={true} className="rounded-lg shadow-2xl" poster="/src/assets/images/tour-video-thumbnail.png">
  <source src={TourVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>

        </div>
      </section>
      <section className="flex flex-col justify-center items-center text-center mt-10 mb-20">
        <h1 className="font-bold text-5xl mb-8 w-xs">Train your app with Lobe</h1>
        <button className="bg-[#04ddb2] rounded-full text-white px-7 py-2 hover:cursor-pointer">Download</button>
      </section>
    </>
  );
}

export default Tour;
