const screen = document.querySelector(".screen");
const calc_button = document.querySelectorAll(".calc-button");
const clear = document.querySelector(".clear");


calc_button.forEach(calc_buttons => {
    calc_buttons.addEventListener("click", () =>{

        let onButton = calc_buttons.textContent;

        if(screen.textContent==="¡error!")
        {
            screen.textContent = onButton;
            return;
        }
        

        if(calc_buttons.id === "clear")
        {
            screen.textContent = 0;
            return;
        }  

        if(calc_buttons.id === "equals")
        {
            try {
                screen.textContent = eval(screen.textContent);
                if(screen.textContent.contains("//"))
                    {
                        screen.textContent = "¡error!";
                    }
            } catch (error) {
                screen.textContent = "¡error!";
                if(screen.textContent==="C" )
            {
                screen.textContent=0;
            }
            }
            return;
        }

        if(calc_buttons.id === "delete")
        {
            if(screen.textContent.length=== 1 || screen.textContent=== "¡error!" )
            {
                screen.textContent = 0;    
            }else{
            screen.textContent = screen.textContent.slice(0,-1);
            }
            return;
        }

        if(screen.textContent==="0")
        { 
            screen.textContent= onButton; // Replaces the "0" with the given numbers
        }else{
            screen.textContent = screen.textContent += onButton; // 
        }
            

        
    })
    
});