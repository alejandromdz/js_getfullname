var candidate = {
   name: {
      firstname: 'John',
      lastname: 'Galt',
      phone: '123-456-7890'
   },
   getFullName:function(){
     return this.name.firstname+' '+this.name.lastname;
   }
}

const indoDiv=document.querySelectorAll('.info')[1];
indoDiv.querySelector('div:nth-child(1)').innerHTML=candidate.name.firstname;
indoDiv.querySelector('div:nth-child(2)').innerHTML=candidate.getFullName();
