import React from "react";

const MediaSection = () => {
  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl space-y-8">
      {/* YouTube Section */}
      <div className="flex flex-col gap-3">
        <h4 className="text-xl font-semibold text-white">🎥 My YouTube Channel</h4>
        <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/_SJE40-ZFyU"
            title="My YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Blog Section */}
      <div className="flex flex-col gap-3">
        <h4 className="text-xl font-semibold text-white">📝 My Blog Website</h4>
        <div className="w-full h-[600px] rounded-xl overflow-hidden border border-white/10 shadow-md">
          <iframe
            className="w-full h-full"
            src="https://budgetyouthtraveller.blogspot.com/"
            title="My Blog Website"
            frameBorder="0"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
