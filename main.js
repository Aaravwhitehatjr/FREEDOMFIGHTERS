var images= ["https://2.bp.blogspot.com/_EZsrOpwnPNo/TKGxgHkCs3I/AAAAAAAAGvI/WSSO_iRj1a0/s1600/Bhagat+singh.JPG", "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Subhas_Chandra_Bose_NRB.jpg/220px-Subhas_Chandra_Bose_NRB.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Sardar_patel_%28cropped%29.jpg/442px-Sardar_patel_%28cropped%29.jpg", "https://images.financialexpress.com/2019/02/sarojini-naidu-1.jpg?w=1200&h=800&imflag=true"]
var names=["Bhagat Singh", "Mahatma Gandhi", "Subhash Chandra Bose", "Sardar Patel", "Sarojini Naidu"]


var i = 0; 
function update() 
{
     i++; var book_on_freedom_fighters_in_array = 5 
     if(i > book_on_freedom_fighters_in_array ) 
     {
          i = 0; 
        }
         var updatedImage = images[i]; 
         var updatedName = names[i]; 
         document.getElementById("book_on_freedom_fighters").src = updatedImage; 
         document.getElementById("freedom_fighters").innerHTML = updatedName; 
        
        }


