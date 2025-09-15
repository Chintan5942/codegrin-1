import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  if (!project) {
    return (
      <div className="p-10 text-center text-red-500">
        No project data provided
        <button
          onClick={() => navigate("/")}
          className="block mt-4 px-4 py-2 bg-primary-light rounded-lg hover:bg-primary-dark transition"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-primary-light rounded-lg hover:bg-primary-dark transition"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="mb-6 text-gray-300">{project.project_type}</p>

      <div className="mb-8">
        <img
          src={`${project.image_folder}header.png`}
          alt={project.title}
          className="w-full max-w-4xl rounded-2xl shadow-lg"
        />
      </div>

      <div className="space-y-4 max-w-3xl">
        <h2 className="text-2xl font-semibold">Description</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {project.description?.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Tech Stack</h2>
        <div className="flex flex-wrap gap-3 mt-2">
          {project.tech_category?.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-1 rounded-full bg-primary-light text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
