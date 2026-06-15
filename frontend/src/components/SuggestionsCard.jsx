import { Sparkles } from "lucide-react";

function SuggestionsCard({
  suggestions = []
}) {
  return (
    <div className="
      bg-white/10
      backdrop-blur-xl
      border
      border-blue-500/20
      rounded-3xl
      shadow-2xl
      p-6
    ">
      <div className="flex items-center gap-3 mb-6">

        <div className="p-2 rounded-xl bg-blue-500/20">
          <Sparkles size={20} />
        </div>

        <h2 className="text-xl font-bold">
          AI Suggestions
        </h2>

      </div>

      <ul className="space-y-4">

        {suggestions.map((item, index) => (
          <li
            key={index}
            className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-4
          "
          >
            💡 {item}
          </li>
        ))}

      </ul>

    </div>
  );
}

export default SuggestionsCard;