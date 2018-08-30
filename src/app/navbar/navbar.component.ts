import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 image="../../assets/images/viewlogohader.png"
  constructor() { }

  ngOnInit() {
    $(function() { 

      $('a[href="#toggle-search"], .navbar-bootsnipp .bootsnipp-search .input-group-btn > .btn[type="reset"]').on('click', function(event) {
      event.preventDefault();
      $('.navbar-bootsnipp .bootsnipp-search .input-group > input').val('');
      $('.navbar-bootsnipp .bootsnipp-search').toggleClass('open');
      $('a[href="#toggle-search"]').closest('li').toggleClass('active');
  
      if ($('.navbar-bootsnipp .bootsnipp-search').hasClass('open')) {
        /* I think .focus dosen't like css animations, set timeout to make sure input gets focus */
        setTimeout(function() { 
          $('.navbar-bootsnipp .bootsnipp-search .form-control').focus();
        }, 100);
      }			
    });
  
    /* $(document).on('keyup', function(event) {
      if (event.which == 27 && $('.navbar-bootsnipp .bootsnipp-search').hasClass('open')) {
        $('a[href="#toggle-search"]').trigger('click');
      }
    }); */
      
  });


  }

}
