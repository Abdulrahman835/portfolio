const content = {
    ar: {
      name: "عبدالرحمن محمد",
      nickname: "Abdo Meligy",
      desc: "Front-End Developer & Gamer",
      study: "طالب في الصف الثالث الثانوي",
      skills: "متعلم HTML, CSS, JavaScript",
      gaming: "Gamer – مختِم أكتر من لعبة",
      contact: "تواصل معي",
      projects: "المشاريع"
    },
    en: {
      name: "Abdulrahman Mohamed",
      nickname: "Abdo Meligy",
      desc: "Front-End Developer & Gamer",
      study: "Third secondary grade student",
      skills: "HTML, CSS, JavaScript Developer",
      gaming: "Gamer – Finished multiple games",
      contact: "Contact Me",
      projects: "Projects"
    },
    fr: {
      name: "Abdulrahman Mohamed",
      nickname: "Abdo Meligy",
      desc: "Développeur Front-End & Gamer",
      study: "Étudiant en troisième secondaire",
      skills: "HTML, CSS, JavaScript",
      gaming: "Gamer – Plusieurs jeux terminés",
      contact: "Contactez-moi",
      projects: "Projets"
    }
  };
  
  function setLang(lang) {
    document.getElementById("name").innerText = content[lang].name;
    document.getElementById("nickname").innerText = content[lang].nickname;
    document.getElementById("desc").innerText = content[lang].desc;
    document.getElementById("study").innerText = content[lang].study;
    document.getElementById("skills").innerText = content[lang].skills;
    document.getElementById("gaming").innerText = content[lang].gaming;
    document.getElementById("contactTitle").innerText = content[lang].contact;
    document.getElementById("projectsTitle").innerText = content[lang].projects;
  
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }
  
  function toggleDark() {
    document.body.classList.toggle("dark");
  }
  
  setLang("en");