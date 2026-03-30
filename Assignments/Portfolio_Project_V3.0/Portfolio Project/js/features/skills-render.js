function renderSkills(){
    const skillsContainer = document.getElementById("skills-container");

    if(!skillsContainer){
        console.log("Skills Container Not Found");
        return;
    }

    skillsContainer.innerHTML = "";
    skillsData.forEach(function(skill){
        // to create outer card
        const card = document.createElement("div");
        card.className = "p-8 text-center bg-white rounded-3xl shadow-lg";

        // create icon
        const iconBox = document.createElement("div");
        iconBox.className = "w-20 h-20 mx-auto mb-4 bg-green-900 rounded-2xl flex items-center justify-center";


        // Create icon text
        const iconText = document.createElement("span");
        iconText.className = "text-2xl text-white font-bold";
        iconText.textContent = skill.shortLabel;

        // Put iconText inside iconBox
        iconBox.appendChild(iconText);

        // Create the skill name
        const skillName = document.createComment("h3");
        skillName.className = "text-xl font-bold mb-2";
        skillName.textContent = skill.name;

        // Create skill desc
        const skillDescription = document.createElement("p");
        skillDescription.className = "text-sm";
        skillDescription.textContent=skill.description;

        // Append all child elements to card
        card.appendChild(iconBox);
        card.appendChild(skillName);
        card.appendChild(skillDescription);

        // Append card to skills container
        skillsContainer.appendChild(card);

    });
    console.log("SKills Rendered Successfully");
};