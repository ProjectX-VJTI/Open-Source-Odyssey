import React from 'react';
import FeatureCard from './FeatureCard'; 
import myHook from "./Context"
const PastProjects = () => {
  const {siteMode} = myHook()
  return (
    <div className={`relative h-[100vh] overflow-y-scroll pb-2 w-full bg-slate-900 ${siteMode === "dark" ? "bgC" : "bgC-light"}`}>
  
    <div className="text-center mt-5 py-2">
      <h1 className="text-5xl font-bold text-transparent my-6 py-4 bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 mb-10">Past Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FeatureCard
          title="Transformer From Scratch"
          tag="|  Veeransh  |  Mayank  |  Kshitij  |"
          info="This is a learning oriented project. Tranformers are the state of the art text processing models (Used as a base in all major Large Language Models (LLMs) such as GP T(ransformer) 1,2,3,4, Bard, Llama, Claude, etc). This project is an attempt to understand the transformer architecture and its working."
          buttontext="Explore"
          style="glass-effect"
          tagStyle="gradient-text"
          page="https://github.com/Veeransh14/Transformer-From-Scratch"
        />
        <FeatureCard
          title="Image Inpainting"
          tag="|  Kindip  |  Aditi  |"
          info="The Image Inpainting project offers a unique opportunity to dive deep into the realm of image processing and deep learning. Inpainting is the process of filling in missing or corrupted parts of an image, restoring its visual integrity. This project is divided into two exciting stages, where you’ll not only learn the fundamentals but also gain hands-on experience with both traditional and cutting-edge inpainting techniques."
          buttontext="Explore"
          style="glass-effect"
          tagStyle="gradient-text"
          page="https://github.com/aditidhu/IMAGE-INPAINTING"
        />
        <FeatureCard
          title="Text Style Transfer"
          tag="|  Warren  |  Druhi  |  Yashvi  |"
          info="Text Style Transfer is a task of transferring the style of one text to another. For example, if we have a text in an informal style, we can transfer it to a formal style while preserving the context. These tasks is very useful in many applications such as machine translation, text summarization, etc. In this project, we will be implementing a text style transfer model using the Transformer architecture."
          buttontext="Explore"
          style="glass-effect"
          tagStyle="gradient-text"
          page="/project-details-1"
        />
        <FeatureCard
          title="3D reconstruction from single RGB image"
          tag="|  Param  | Mrudul  |  Labhansh  |"
          info="The 'Three-Dimensional Reconstruction from a Single RGB Image' project focuses on the field of computer vision and 3D reconstruction. The goal of this project is to develop algorithms and techniques that can take a single RGB image as input and generate a plausible 3D representation of the scene depicted in the image. This involves extracting depth information, estimating the shape of objects, and creating a 3D model that closely resembles the original scene. "
          buttontext="Explore"
          style="glass-effect"
          tagStyle="gradient-text"
          page="https://github.com/lbhnsh/3D-Reconstruction"
        />
        <FeatureCard
          title="VisualFlow - No Code Algorithm Compiler"
          tag="|  Sharan  |"
          info="VisualFlow is a revolutionary project that transforms algorithm design into a seamless and intuitive process. By utilizing a drag-and-drop interface to construct algorithm flowcharts, this platform automatically generates code blocks and corresponding outputs. VisualFlow eliminates the need for traditional coding, enabling users to prototype, compile, and deploy algorithms effortlessly."
          buttontext="Explore"
          style="glass-effect"
          tagStyle="gradient-text"
          page="https://github.com/SharanRP/VisualFlow"
        /><FeatureCard
        title="ChessAI - Advanced Chess Game with AI opponent"
        tag="|  Rohan  |  Aditya  |"
        info="ChessAI is an advanced chess game that offers players the opportunity to play against a highly intelligent AI opponent. The AI opponent utilizes the NegMax algorithm for move generation and evaluation. Additionally, a Genetic Algorithm is employed to enhance the AI's decision-making process, leading to more strategic and diverse gameplay."
        buttontext="Explore"
        style="glass-effect"
        tagStyle="gradient-text"
        page="https://github.com/Aditya-y9/COC_Project_X_ChessAI"
      />
      <FeatureCard
          title="HealthBuddy - Your AI Health Companion"
          tag="|  Tvisha  |  Anushka  |  Raya  |"
          info="The HealthBuddy Chatbot is an innovative and user-friendly healthcare solution designed to provide individuals with personalized and reliable healthcare information and support. This project aims to create a versatile chatbot that can offer assistance in various aspects of healthcare, including symptom diagnosis, mental health consultation, nutrition guidance, and more. The inspiration behind this project is to empower users to make informed healthcare decisions and promote overall well-being."
          buttontext="Explore"
          style="glass-effect"
          tagStyle="gradient-text"
          page="https://github.com/Raya679/Healthcare-Chatbot"
        />
        <div className='flex  justify-center w-full'>
        <FeatureCard
            title="Semantic Segmentation"
            tag="|  Anoushka  |  Vedant  |  Abhi  |"
            info="Semantic segmentation is a computer vision technique that involves partitioning an image into multiple segments, where each segment corresponds to a meaningful object or region within the image. The goal of semantic segmentation is to assign a specific label to each pixel in the image, indicating the category or class of the object or region that pixel belongs to."
            buttontext="Explore"
            style="glass-effect"
            tagStyle="gradient-text"
            page="https://github.com/extint/Semantic_Segmentation"
        />
        </div>

        {/* <FeatureCard
          title="Project Title 10"
          tag="Development"
          info="A project that brought new perspectives to software development."
          buttontext="Learn More"
          style="glass-effect"
          tagStyle="gradient-text"
          page="/project-details-10"
        /> */}
      </div>
    </div>
    </div>
    // </div>
  );
};

export default PastProjects;
