import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as $ from 'jquery'
@Component({
  selector: 'app-homethree-banner',
  templateUrl: './homethree-banner.component.html',
  styleUrls: ['./homethree-banner.component.scss']
})
export class HomethreeBannerComponent implements OnInit {
    questionFirst:any;
  constructor() { }


  servicesSlides: OwlOptions = {
		nav: true,
		margin: 25,
		loop: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
            '<i class="flaticon-011-chevron-1"></i>',
            '<i class="flaticon-010-chevron"></i>'
		],
        responsive: {
            0: {
                items: 1
            },
            515: {
                items: 1
            },
            695: {
                items: 1
            },
            935: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    }
    ngOnInit(){
  
  
     

             $(document).ready(function(){
       
        $(".close").click(function(){
          $(".sag").show();
        });
        $(".close").click(function(){
          $(".sag").hide();
          
        });
      });
      
        this.questionFirst = $('[data-question]:first').attr('data-question');
       $('#chatList ul').append('<li class="admin-message">'+this.questionFirst+'</li>');
       $('[data-question]:first').appendTo('.message-box');
     
     
     
     $("#send").click(function(event){
       const questionVal=$('.message-box [data-question]').val();
       $("#chatList ul").append('<li class="client-message">'+questionVal+'</li>');
     
       const dataName=$('.admin-client-message-wrap [data-name]').attr('data-question');
     
     if($('.message-box [name]').attr('name')== "name"){
       const nameVal = $('.message-box [name]').val();
       $('.admin-client-message-wrap [data-name]').attr('data-question',"Hi"  + "&nbsp;&nbsp;"+ nameVal +",</br>"+dataName) 
     }
     
     
     $('.message-box  [data-question]').appendTo('.submit_info');
     
     
     if($('.admin-client-message-wrap').children().length != 0){
       const questionFirst = $('[data-question]:first').attr('data-question');
       $('#chatList ul').append('<li class="admin-message">'+questionFirst+'</li>');
       $('[data-question]:first').appendTo('.message-box');
     
       $('#send').css({"pointer-events":"none"});
       $('.message-box [data-question]').bind('click change keyup', function(event){
     
         if($(this).val()==""){
           $('#send').css({"pointer-events":"none"});
         
         }
         else{
           $('#send').css({"pointer-events":"auto"});
         }
         
         
         })
         
     }
     
     
     $('#chatList').animate({scrollTop:5000})
     
     });
     
     
     $('.message-box [data-question]').bind('click change keyup', function(event){
     
     if($(this).val()==""){
       $('#send').css({"pointer-events":"none"});
     
     }
     else{
       $('#send').css({"pointer-events":"auto"});
     }
     
     
     });
     
     
     $("#confirm").click(function(event){
       $('#submit').trigger('click');
     });
     
     /***
     $("#notconfirm").click(function(event){
      location.reload();
     });
     
     $("#hide").click(function(event){
       location.reload();
      });
      ****/
     
     $('.chat_icon').click(function(event){
       $('.chatbot-box').toggleClass('active');
     })
     
     
     
     
     
     
       
       }
     
     
}
