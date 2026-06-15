import { Upload, FileText } from "lucide-react";

function UploadSection({
  setFile,
  handleUpload,
  loading,
  file
}) {
  return (
    <div
      className="
      bg-white/10
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-6
      shadow-2xl
    "
    >

      <h2 className="text-xl font-semibold mb-6">
        Upload Resume
      </h2>

      <label
        className="
        block
        border-2
        border-dashed
        border-white/20
        rounded-2xl
        p-10
        text-center
        cursor-pointer
        hover:border-blue-500
        transition
      "
      >

        <input
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={(e) =>
            setFile(
              e.target.files[0]
            )
          }
        />

        <Upload
          size={40}
          className="
          mx-auto
          mb-4
          text-blue-400
        "
        />

        <p className="font-medium">
          Drag & Drop Resume
        </p>

        <p className="text-slate-400 text-sm mt-2">
          PDF files only
        </p>

      </label>

      {file && (

        <div
          className="
          mt-4
          bg-blue-500/10
          border
          border-blue-500/20
          rounded-xl
          p-3
          flex
          items-center
          gap-3
        "
        >

          <FileText size={20} />

          <span className="truncate">
            {file.name}
          </span>

        </div>

      )}

      <button
        onClick={handleUpload}
        disabled={loading}
        className="
        mt-6
        w-full
        bg-gradient-to-r
        from-blue-500
        to-cyan-500
        text-white
        py-3
        rounded-xl
        font-semibold
        hover:scale-[1.02]
        transition
      "
      >

        {loading
          ? "Analyzing..."
          : "Analyze Resume"}

      </button>

    </div>
  );
}

export default UploadSection;