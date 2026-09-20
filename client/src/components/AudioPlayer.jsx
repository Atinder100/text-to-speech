import React from 'react';

function AudioPlayer({ audioUrl }) {
  if (!audioUrl) return null;

  const handleDownload = () => {
    // Create an anchor element and programmatically trigger a file download
    const link = document.createElement('a');
    link.href = audioUrl;
    
    // Generate timestamped filename (e.g., speech-2026-09-20.mp3)
    const dateStr = new Date().toISOString().slice(0, 10);
    link.download = `tts-audio-${dateStr}.mp3`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">Generated Output:</span>
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-md transition-colors shadow-sm cursor-pointer"
        >
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download MP3
        </button>
      </div>

      <audio controls className="w-full rounded-md" key={audioUrl}>
        <source src={audioUrl} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPlayer;