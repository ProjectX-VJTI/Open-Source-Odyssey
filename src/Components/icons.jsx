import React from "react";
import allIcons from "simple-icons";
import { v4 } from "uuid";
import { IconCloud } from "react-icon-cloud";

const Sphere = () => {
  const tagCanvasOptions = {
    imageScale: 2,
    initial: [0.1, -0.1],
    reverse: true,
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: true
  };

  const iconSlugs = [
    "airfrance", "arlo", "dart", "java", "react", "flutter", "android", "andel",
    "html5", "audible", "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws",
    "postgresql", "firebase", "battledotnet", "nginx", "vercel", "canva",
    "testinglibrary", "jest", "cypress", "docker", "git", "figshare", "jira",
    "github", "gitlab", "electron", "visualstudiocode", "androidstudio", "sonarqube", "figma"
  ];

  const iconTags = iconSlugs.map((slug) => {
    const icon = allIcons.Get(slug);
    if (!icon) {
      console.error(`Icon for ${slug} not found`);
      return null;
    }
    return { id: slug, simpleIcon: icon };
  }).filter(tag => tag !== null); 

  return (
    <div>
      <IconCloud
        key={v4()}
        id={"icon"}
        minContrastRatio={1}
        iconSize={50}
        backgroundHexColor={"#fff"}
        fallbackHexColor={"#000"}
        tags={iconTags}
        tagCanvasOptions={tagCanvasOptions}
      />
    </div>
  );
};

export default Sphere;
