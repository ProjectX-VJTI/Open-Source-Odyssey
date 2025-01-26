import React from "react";
import FeatureCard from "./FeatureCard"; // Assuming FeatureCard is in the same directory

const PastProjects = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen overflow-y-auto">
      <div className="text-center px-4 sm:px-8 md:px-16 lg:px-24 py-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          Past Projects
        </h1>

        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Transformer From Scratch"
              tag="| Veeransh | Mayank | Kshitij |"
              info="This is a learning-oriented project. Transformers are the state-of-the-art text processing models used as the base in all major Large Language Models (LLMs)."
              buttontext="Explore"
              style="glass-effect"
              tagStyle="gradient-text"
              page="https://github.com/Veeransh14/Transformer-From-Scratch"
            />
            <FeatureCard
              title="Image Inpainting"
              tag="| Kindip | Aditi |"
              info="The Image Inpainting project dives into image processing and deep learning, restoring corrupted parts of an image."
              buttontext="Explore"
              style="glass-effect"
              tagStyle="gradient-text"
              page="https://github.com/aditidhu/IMAGE-INPAINTING"
            />
            <FeatureCard
              title="Text Style Transfer"
              tag="| Warren | Druhi | Yashvi |"
              info="Text Style Transfer modifies the style of text while preserving its context. This project explores its applications using the Transformer architecture."
              buttontext="Explore"
              style="glass-effect"
              tagStyle="gradient-text"
              page="/project-details-1"
            />
            <FeatureCard
              title="3D Reconstruction from Single RGB Image"
              tag="| Param | Mrudul | Labhansh |"
              info="This project develops algorithms to take a single RGB image and generate a 3D representation of the scene."
              buttontext="Explore"
              style="glass-effect"
              tagStyle="gradient-text"
              page="https://github.com/lbhnsh/3D-Reconstruction"
            />
            <FeatureCard
              title="VisualFlow - No Code Algorithm Compiler"
              tag="| Sharan |"
              info="VisualFlow transforms algorithm design into a seamless process using a drag-and-drop interface to generate code blocks automatically."
              buttontext="Explore"
              style="glass-effect"
              tagStyle="gradient-text"
              page="https://github.com/SharanRP/VisualFlow"
            />
            <FeatureCard
              title="ChessAI - Advanced Chess Game with AI Opponent"
              tag="| Rohan | Aditya |"
              info="ChessAI offers players the opportunity to play against a strategic AI opponent using the NegMax algorithm and Genetic Algorithm."
              buttontext="Explore"
              style="glass-effect"
              tagStyle="gradient-text"
              page="https://github.com/Aditya-y9/COC_Project_X_ChessAI"
            />
            <FeatureCard
              title="HealthBuddy - Your AI Health Companion"
              tag="| Tvisha | Anushka | Raya |"
              info="HealthBuddy is a healthcare chatbot designed to provide personalized assistance, from symptom diagnosis to nutrition guidance."
              buttontext="Explore"
              style="glass-effect"
              tagStyle="gradient-text"
              page="https://github.com/Raya679/Healthcare-Chatbot"
            />
            <FeatureCard
              title="Semantic Segmentation"
              tag="| Anoushka | Vedant | Abhi |"
              info="Semantic segmentation involves partitioning an image into meaningful segments and assigning labels to pixels based on their categories."
              buttontext="Explore"
              style="glass-effect"
              tagStyle="gradient-text"
              page="https://github.com/extint/Semantic_Segmentation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastProjects;
