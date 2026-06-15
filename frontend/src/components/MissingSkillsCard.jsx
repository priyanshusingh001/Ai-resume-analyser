import { AlertCircle } from "lucide-react";

function MissingSkillsCard({
  skills = []
}) {
  return (
    <div
      className="
      bg-white/10
      backdrop-blur-xl
      border
      border-red-500/20
      rounded-3xl
      shadow-2xl
      p-6
    "
    >
      <div className="flex items-center gap-3 mb-6">

        <div className="p-2 rounded-xl bg-red-500/20">
          <AlertCircle size={20} />
        </div>

        <h2 className="text-xl font-bold">
          Missing Skills
        </h2>

      </div>

      <div className="flex flex-wrap gap-3">

        {skills.map((skill, index) => (
          <span
            key={index}
            className="
            bg-red-500/10
            border
            border-red-500/20
            px-4
            py-2
            rounded-full
          "
          >
            ❌ {skill}
          </span>
        ))}

      </div>
    </div>
  );
}

export default MissingSkillsCard;