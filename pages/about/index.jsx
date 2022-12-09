import HomeLayout from "../../layouts/HomeLayout";
const image = "data:image/jpeg;base64,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"
function About() {
  return (
    <HomeLayout>

      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={image}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          22
                        </span>
                        <span className="text-sm text-gray-500">Friends</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          10
                        </span>
                        <span className="text-sm text-gray-500">Photos</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          89
                        </span>
                        <span className="text-sm text-gray-500">Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Jenna Stones
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Los Angeles, California
                  </div>
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    University of Computer Science
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-pink-500"
                        onClick={e => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>


    </HomeLayout>
  );
}
export default About;
