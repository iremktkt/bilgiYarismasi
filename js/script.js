   
   var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');


      var app={
                questions:[
                          {q:'Sahnede kişilerin birbirlerine karşı söyledikleri uzun sözler nasıl adlandırılır?', options:['Tuluat','Tirat','Fasıl','Monolog'],answer:2},

                          {q:'İstanbul Şehir Tiyatrosunun eski ismi nedir?.',options:['Darülfünun','Darülelhan','Darülbedayi','Darulsafaki'],answer:3},

                          {q:'İlk metne dayalı yerli tiyatro eserinin adı nedir?',options:['Aziz Nesin Toros Canavarı','Şinasi Şair Evlenmesi','Halit Fahri Ozansoy Baykuş','Namık Kemal Vatan Yahut Silistire'],answer:2},
						  {q:'Sessiz hareketler, jestler, yüz ifadeleri ve kostümler yoluyla duyguları, düşünceleri, tutkuları anlatmaya yarayan tiyatro çeşididir.?',options:['Stand-up','Tuluat','Meddah','Pandomim'],answer:4},
						  {q:'Müslüman kadınların sahneye çıkmasının yasaklandığı dönemde sahneye çıkan ilk Müslüman Türk kadın oyuncu kimdir??',options:['Kınar Hanım','Bedia Muvahhit','Ayla Algan','Afife Jale'],answer:4}
                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="SONUÇ......!!!"      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="DOĞRU";
                         	ele.innerHTML="DOĞRU";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="YANLIŞ";
                         	ele.innerHTML="YANLIŞ";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.questions.length+"/"+this.score;
                }
 
           }
		   


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 



