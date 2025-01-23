import React from 'react';
import FeatureCard from './FeatureCard';

const PastProjects = () => {
  return (
    <div className="bg-light-gradient dark:bg-dark-gradient ">
    <div className="bg-light-gradient dark:bg-dark-gradient  pb-10 w-full text-gray-800 dark:text-white ">
      <div className="inset-0 ">
        <div className="text-center mt-0">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent my-0  mb-3 py-4 bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600">
            Past Projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90%] mx-auto text-gray-800 dark:text-white" >
            <FeatureCard
              title="Transformer From Scratch"
              tag="|  Veeransh  |  Mayank  |  Kshitij  |"
              info="This is a learning oriented project. Transformers are the state-of-the-art text processing models (used as a base in all major Large Language Models). This project attempts to understand the transformer architecture."
              buttontext="Explore"
              style="glass-effect"
              tagStyle="gradient-text"
              page="https://github.com/Veeransh14/Transformer-From-Scratch"
            />
            <FeatureCard
              title="Image Inpainting"
              tag="|  Kindip  |  Aditi  |"
              info="The Image Inpainting project dives into image processing and deep learning, filling in missing or corrupted image parts. It explores both traditional and cutting-edge inpainting techniques."
              buttontext="Explore"
              style="glass-effect"
              tagStyle="gradient-text"
              page="https://github.com/aditidhu/IMAGE-INPAINTING"
            />
            <FeatureCard
              title="Text Style Transfer"
              tag="|  Warren  |  Druhi  |  Yashvi  |"
              info="Text Style Transfer transforms text from one style to another, useful in applications like machine translation and text summarization. This project implements a model using Transformer architecture."
              buttontext="Explore"
              style="glass-effect"
              tagStyle="gradient-text"
              page="/project-details-1"
            />
            <FeatureCard
              title="3D Reconstruction from Single RGB Image"
              tag="|  Param  | Mrudul  |  Labhansh  |"
              info="This project develops algorithms that convert a single RGB image into a plausible 3D model by extracting depth, estimating shape, and reconstructing the scene."
              buttontext="Explore"
              style="glass-effect"
              tagStyle="gradient-text"
              page="https://github.com/lbhnsh/3D-Reconstruction"
            />
            <FeatureCard
              title="VisualFlow - No Code Algorithm Compiler"
              tag="|  Sharan  |"
              info="VisualFlow allows users to design algorithms through a drag-and-drop interface, generating code automatically. It simplifies prototyping, compiling, and deploying algorithms."
              buttontext="Explore"
              style="glass-effect"
              tagStyle="gradient-text"
              page="https://github.com/SharanRP/VisualFlow"
            />
            <FeatureCard
              title="ChessAI - Advanced Chess Game with AI Opponent"
              tag="|  Rohan  |  Aditya  |"
              info="ChessAI lets users play against an intelligent AI opponent utilizing the NegMax algorithm and a Genetic Algorithm to enhance decision-making for strategic gameplay."
              buttontext="Explore"
              style="glass-effect"
              tagStyle="gradient-text"
              page="https://github.com/Aditya-y9/COC_Project_X_ChessAI"
            />
            <FeatureCard
              title="HealthBuddy - Your AI Health Companion"
              tag="|  Tvisha  |  Anushka  |  Raya  |"
              info="HealthBuddy is a chatbot offering healthcare assistance, including symptom diagnosis, mental health consultation, and nutrition guidance, empowering users to make informed health decisions."
              buttontext="Explore"
              style="glass-effect"
              tagStyle="gradient-text"
              page="https://github.com/Raya679/Healthcare-Chatbot"
            />
            <FeatureCard
              title="Semantic Segmentation"
              tag="|  Anoushka  |  Vedant  |  Abhi  |"
              info="Semantic segmentation partitions images into meaningful segments by labeling each pixel, playing a crucial role in computer vision applications."
              buttontext="Explore"
              style="glass-effect"
              tagStyle="gradient-text"
              page="https://github.com/extint/Semantic_Segmentation"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PastProjects;