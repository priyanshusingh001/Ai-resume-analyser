import { User, Mail, Phone } from "lucide-react";

function ResumeOverviewCard({ resumeData }) {
  return (
    <div
      className="
      bg-white/10
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      shadow-2xl
      p-6
    "
    >
      <h2 className="text-2xl font-bold mb-6">
        Resume Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div
          className="
          bg-white/5
          border
          border-white/10
          rounded-2xl
          p-4
        "
        >
          <div className="flex items-center gap-2 mb-2">
            <User size={18} />
            <span className="text-slate-400">
              Name
            </span>
          </div>

          <p className="font-semibold text-lg">
            {resumeData?.name || "N/A"}
          </p>
        </div>

        <div
          className="
          bg-white/5
          border
          border-white/10
          rounded-2xl
          p-4
        "
        >
          <div className="flex items-center gap-2 mb-2">
            <Mail size={18} />
            <span className="text-slate-400">
              Email
            </span>
          </div>

          <p className="font-semibold break-all">
            {resumeData?.email || "N/A"}
          </p>
        </div>

        <div
          className="
          bg-white/5
          border
          border-white/10
          rounded-2xl
          p-4
        "
        >
          <div className="flex items-center gap-2 mb-2">
            <Phone size={18} />
            <span className="text-slate-400">
              Phone
            </span>
          </div>

          <p className="font-semibold">
            {resumeData?.phone || "N/A"}
          </p>
        </div>

      </div>
    </div>
  );
}

export default ResumeOverviewCard;