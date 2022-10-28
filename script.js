/*
    Assignment 05
*/

$(document).ready(function () {
    // your code here
    class ContentItem{
         constructor(givenName,uniqueId,givenDes,categoryGenre)
          {
            this.id = uniqueId;
            this.name = givenName;

            this.description = givenDes;
            this.genre = categoryGenre;
         }
    
        }
        updateContentItem = new ContentItem(1,"prem",".Net Devloper","MVC");
        updateContentItem = new ContentItem(2,"TIRTH","Wordpress dev","CMS");
        updateContentItem = new ContentItem(3,"sHLOK","UI/UX","Design");
        updateContentItem = new ContentItem(4,"ADITYA","CssDev","Design");
        updateContentItem = new ContentItem(5,"PRAY","Project Manager","Project Designer");
        console.log(updateContentItem);
      
    });


