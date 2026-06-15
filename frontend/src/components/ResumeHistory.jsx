import { useEffect, useState } from "react";
import { History } from "lucide-react";
import API from "../services/api";

function ResumeHistory() {

  const [resumes, setResumes] =
    useState([]);

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes =
    async () => {

      try {

        const response =
          await API.get("/resume");

        setResumes(
          response.data.data
        );

      } catch (error) {

        console.error(error);

      }

    };

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
          <History size={20} />
        </div>

        <h2 className="text-2xl font-bold">
          Resume History
        </h2>

      </div>

      <div className="space-y-4">

        {resumes.map(
          (resume) => (

            <div
              key={resume._id}
              className="
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-4
            "
            >

              <h3 className="font-semibold">
                {resume.name}
              </h3>

              <p className="text-slate-400 text-sm">
                {resume.email}
              </p>

            </div>

          )
        )}

      </div>

    </div>
  );
}

export default ResumeHistory;