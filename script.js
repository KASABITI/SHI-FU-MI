const buttons = document.querySelectorAll("button");
      const username = prompt("Veuillez indiquer votre nom d'utilisateur...");

      for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function() {
          var joueur = buttons[i].innerHTML;
          var robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
          var resultat;

          // Logique entiere du jeu
          if (joueur === robot)
            resultat = "Vous avez fait une egalité !";
          else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Feuille" && robot === "Pierre") || (joueur === "Ciseaux" && robot === "Feuille"))
            resultat = "Vous avez gagné !!";
          else
            resultat = "Vous avez perdu !";
          document.querySelector(".resultat").innerHTML = `
            ${username} : ${joueur}</br>
            Le robot a choisi : ${robot}</br>
            ${resultat}
          `;
        })
      }
