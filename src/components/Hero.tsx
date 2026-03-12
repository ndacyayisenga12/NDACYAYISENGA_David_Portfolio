import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[calc(100vh-6rem)]">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  David NDACYAYISENGA
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700">
                Full Stack Developer
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I craft exceptional digital experiences with clean code and creative solutions.
                Passionate about building scalable applications that make a difference.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                Get In Touch
                <ArrowRight size={20} />
              </button>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                View My Work
              </a>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/ndacyayisenga12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 text-gray-700 hover:text-blue-600"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ndacyayisenga-david-79b8b0377/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 text-gray-700 hover:text-blue-600"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ndacyayisengadavid74@gmail.com"
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 text-gray-700 hover:text-blue-600"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 opacity-20 blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-2xl bg-gradient-to-br from-blue-600 to-teal-600 p-1">
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      {'</>'}
                    </div>
                    <p className="text-gray-600 font-medium">Building the Future</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
