import { Brain } from "lucide-react";

function SkillsCard({ skills = [] }) {
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
      <div className="flex items-center gap-3 mb-6">

        <div className="p-2 rounded-xl bg-blue-500/20">
          <Brain size={20} />
        </div>

        <h2 className="text-2xl font-bold">
          Skills
        </h2>

      </div>

      <div className="flex flex-wrap gap-3">

        {skills.map((skill, index) => (
          <span
            key={index}
            className="
            bg-gradient-to-r
            from-blue-500/20
            to-cyan-500/20
            border
            border-blue-400/20
            px-4
            py-2
            rounded-full
            text-sm
            font-medium
            hover:scale-105
            transition
          "
          >
            {skill}
          </span>
        ))}

      </div>
    </div>
  );
}

export default SkillsCard;